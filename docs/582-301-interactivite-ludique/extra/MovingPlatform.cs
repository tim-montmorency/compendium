using System.Collections.Generic;
using UnityEngine;

// À placer sur la plateforme mobile, avec un deuxième Box Collider « Is Trigger »
// qui déborde un peu au-dessus de sa surface.
// Le personnage (Character Controller) est transporté tant qu'il se tient sur la plateforme,
// peut y marcher librement, et se détache dès qu'il saute ou tombe.
// Si la plateforme le rattrape en l'air, il est remonté à sa surface.
// Fonctionne peu importe ce qui déplace la plateforme :
// Animator, Spline Animate, CES (Transform + Animate) ou script.
[DefaultExecutionOrder(-100)] // Avant la caméra, pour éviter qu'elle tremble
public class MovingPlatform : MonoBehaviour
{
    [Tooltip("Le personnage tourne avec la plateforme (axe Y seulement)")]
    public bool suivreRotation = true;

    [Tooltip("Distance sous les pieds à laquelle la plateforme est encore détectée")]
    public float distanceDetection = 0.2f;

    // Personnages présents dans le trigger
    readonly List<CharacterController> passagers = new List<CharacterController>();

    // Personnages debout sur la plateforme à la fin de l'image précédente, avec leur position
    readonly Dictionary<CharacterController, Vector3> ancrages = new Dictionary<CharacterController, Vector3>();

    Matrix4x4 ancienMondeVersLocal;
    float ancienAngleY;

    void Start() => Memoriser();

    void OnTriggerEnter(Collider other)
    {
        CharacterController cc = other.GetComponent<CharacterController>();
        if (cc != null && !passagers.Contains(cc)) passagers.Add(cc);
    }

    void OnTriggerExit(Collider other)
    {
        CharacterController cc = other.GetComponent<CharacterController>();
        if (cc != null) passagers.Remove(cc);
    }

    // LateUpdate : la plateforme et le personnage ont déjà bougé pendant l'image
    void LateUpdate()
    {
        // 1. Transporter ceux qui étaient debout sur la plateforme
        float deltaY = Mathf.DeltaAngle(ancienAngleY, transform.eulerAngles.y);

        foreach (var paire in ancrages)
        {
            CharacterController cc = paire.Key;
            if (cc == null || !cc.enabled) continue;

            // Déplacement qu'a fait, pendant cette image, le point où se tenait le personnage
            Vector3 avant = paire.Value;
            Vector3 apres = transform.TransformPoint(ancienMondeVersLocal.MultiplyPoint3x4(avant));
            cc.transform.position += apres - avant;

            if (suivreRotation) cc.transform.Rotate(0f, deltaY, 0f);
            // Position modifiée directement plutôt qu'avec CharacterController.Move() :
            // Move() fausserait la vitesse (velocity) dont les Starter Assets ont besoin pour marcher.
        }

        // Les rayons doivent voir la plateforme et les personnages à leur position de cette image
        if (passagers.Count > 0) Physics.SyncTransforms();
        bool aBouge = false;

        // 2. Noter qui est debout sur la plateforme pour l'image suivante
        ancrages.Clear();
        foreach (CharacterController cc in passagers)
        {
            if (cc == null || !cc.enabled) continue;
            if (!SurfaceSousLesPieds(cc, out float surfaceY)) continue;   // En l'air : détaché

            // La plateforme a rattrapé le personnage (elle monte plus vite que son saut) :
            // le remonter à sa surface plutôt que de le laisser se dégager par à-coups
            Vector3 pieds = cc.transform.position;
            if (surfaceY > pieds.y)
            {
                cc.transform.position = new Vector3(pieds.x, surfaceY, pieds.z);
                aBouge = true;
            }

            ancrages[cc] = cc.transform.position;
        }

        if (aBouge) Physics.SyncTransforms();

        Memoriser();
    }

    // Vrai si cette plateforme est sous les pieds (ou les a dépassés), à moins de distanceDetection.
    // Le rayon part de la mi-hauteur du personnage pour détecter aussi une plateforme
    // qui l'a déjà rattrapé.
    bool SurfaceSousLesPieds(CharacterController cc, out float surfaceY)
    {
        surfaceY = 0f;
        float miHauteur = cc.height * 0.5f;
        Vector3 origine = cc.transform.position + Vector3.up * miHauteur;

        if (Physics.Raycast(origine, Vector3.down, out RaycastHit hit, miHauteur + distanceDetection,
                            ~0, QueryTriggerInteraction.Ignore)
            && hit.collider.transform.IsChildOf(transform))
        {
            surfaceY = hit.point.y;
            return true;
        }
        return false;
    }

    void Memoriser()
    {
        ancienMondeVersLocal = transform.worldToLocalMatrix;
        ancienAngleY = transform.eulerAngles.y;
    }
}
