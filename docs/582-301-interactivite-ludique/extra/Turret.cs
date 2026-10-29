using UnityEngine;
using UnityEngine.Events;

/// <summary>
/// Tourelle : quand la cible (le joueur) entre dans la zone de détection, la tourelle pivote vers elle
/// et lui tire dessus à intervalle régulier. Elle cesse de tirer dès que la cible sort de la zone.
/// Le projectile est un prefab avec un Rigidbody (le même que celui du script Tir).
/// </summary>
public class Turret : MonoBehaviour
{
    [Header("Target")]
    [Tooltip("Vide = l'objet qui a le tag Player")]
    [SerializeField] private Transform target;
    [Tooltip("Hauteur visée au-dessus des pieds de la cible (m). Environ 1 = le centre du corps")]
    [SerializeField] private float aimHeight = 1f;

    [Header("Zone (m)")]
    [Tooltip("Cercle rouge. Cible à l'intérieur = la tourelle tire. Cible à l'extérieur = elle arrête")]
    [SerializeField] private float detectionRadius = 10f;
    [Tooltip("Coché = la tourelle ne tire que si elle voit la cible (aucun obstacle entre elle et la cible)")]
    [SerializeField] private bool requireLineOfSight = true;

    [Header("Rotation")]
    [Tooltip("Partie qui pivote vers la cible (ex. : la tête de la tourelle). Vide = rien ne pivote")]
    [SerializeField] private Transform pivot;
    [Tooltip("Coché = le pivot tourne seulement à l'horizontale. Décoché = il s'incline aussi vers la cible")]
    [SerializeField] private bool horizontalOnly = true;
    [Tooltip("Vitesse de rotation du pivot (degrés par seconde)")]
    [SerializeField] private float turnSpeed = 180f;
    [Tooltip("La tourelle tire seulement quand le pivot fait face à la cible, à cet angle près (degrés)")]
    [SerializeField] private float maxAngleToShoot = 10f;

    [Header("Shooting")]
    [Tooltip("Prefab du projectile, avec un Rigidbody (sur lui ou un enfant)")]
    [SerializeField] private GameObject bulletPrefab;
    [Tooltip("Point de départ du projectile : un Empty placé au bout du canon")]
    [SerializeField] private Transform fireStartingPoint;
    [Tooltip("Délai entre deux tirs (en secondes). 0.5 = deux tirs par seconde")]
    [SerializeField] private float fireInterval = 1f;
    [Tooltip("Délai avant le premier tir, quand la cible entre dans la zone (en secondes). Laisse au joueur le temps de réagir")]
    [SerializeField] private float firstShotDelay = 0.5f;
    [Tooltip("Vitesse du projectile (m/s)")]
    [SerializeField] private float bulletSpeed = 20f;
    [Tooltip("Durée de vie du projectile (en secondes), puis il est détruit")]
    [SerializeField] private float bulletLifetime = 3f;
    [Tooltip("Imprécision du tir (degrés). 0 = tir parfait")]
    [SerializeField] private float spread = 2f;
    [Space(6)]
    [Tooltip("Actions déclenchées à chaque tir (son, éclair du canon, particules…)")]
    [SerializeField] private UnityEvent onShoot;

    // Marge pour éviter les allers-retours quand la cible est pile sur le cercle (m)
    private const float LoseMargin = 0.5f;

    private Collider[] ownColliders;
    private bool targetInZone;
    private float nextShotTime;

    private void Awake()
    {
        // Les projectiles ne doivent pas toucher la tourelle elle-même
        ownColliders = GetComponentsInChildren<Collider>();
    }

    private void Start()
    {
        if (target == null)
        {
            GameObject player = GameObject.FindGameObjectWithTag("Player");
            if (player != null) target = player.transform;
        }

        if (target == null)
        {
            Debug.LogWarning($"{name} n'a pas de cible : glisser le joueur dans le champ Target, ou lui donner le tag Player.", this);
            enabled = false;
            return;
        }

        if (bulletPrefab == null || fireStartingPoint == null)
        {
            Debug.LogWarning($"{name} : glisser le prefab du projectile et le point de départ (Fire Starting Point) dans l'Inspector.", this);
            enabled = false;
        }
    }

    private void Update()
    {
        float distance = Vector3.Distance(transform.position, target.position);

        // Zone de détection : la cible entre = la tourelle s'active, la cible sort = elle arrête
        if (!targetInZone && distance <= detectionRadius)
        {
            targetInZone = true;
            nextShotTime = Time.time + firstShotDelay;
        }
        else if (targetInZone && distance > detectionRadius + LoseMargin)
        {
            targetInZone = false;
        }

        if (!targetInZone) return;

        bool facing = TurnTowardsTarget();

        if (Time.time >= nextShotTime && facing && (!requireLineOfSight || HasLineOfSight()))
        {
            Shoot();
            nextShotTime = Time.time + fireInterval;
        }
    }

    private Vector3 AimPoint => target.position + Vector3.up * aimHeight;

    /// <summary>
    /// Tourne le pivot vers la cible. Retourne vrai s'il lui fait face (à Max Angle To Shoot près).
    /// Sans pivot, la tourelle est considérée toujours face à la cible.
    /// </summary>
    private bool TurnTowardsTarget()
    {
        if (pivot == null) return true;

        Vector3 direction = AimPoint - pivot.position;
        if (horizontalOnly) direction.y = 0f;
        if (direction.sqrMagnitude < 0.0001f) return true;

        Quaternion desiredRotation = Quaternion.LookRotation(direction);
        pivot.rotation = Quaternion.RotateTowards(pivot.rotation, desiredRotation, turnSpeed * Time.deltaTime);
        return Quaternion.Angle(pivot.rotation, desiredRotation) <= maxAngleToShoot;
    }

    /// <summary>
    /// Crée un projectile au bout du canon et le lance vers la cible.
    /// </summary>
    private void Shoot()
    {
        // Direction : du canon vers la cible, avec un peu d'imprécision
        Vector3 toTarget = AimPoint - fireStartingPoint.position;
        Quaternion direction = Quaternion.LookRotation(toTarget)
                             * Quaternion.Euler(Random.Range(-spread, spread), Random.Range(-spread, spread), 0f);

        GameObject bullet = Instantiate(bulletPrefab, fireStartingPoint.position, direction * bulletPrefab.transform.rotation);

        // Le projectile ignore les colliders de la tourelle (sinon il peut exploser dans le canon)
        foreach (Collider bulletCollider in bullet.GetComponentsInChildren<Collider>())
            foreach (Collider own in ownColliders)
                Physics.IgnoreCollision(bulletCollider, own);

        Rigidbody body = bullet.GetComponentInChildren<Rigidbody>();
        if (body != null)
            body.AddForce(direction * Vector3.forward * bulletSpeed, ForceMode.VelocityChange);
        else
            Debug.LogWarning($"{name} : le prefab {bulletPrefab.name} n'a pas de Rigidbody, il ne bougera pas.", this);

        Destroy(bullet, bulletLifetime);
        onShoot.Invoke();
    }

    /// <summary>
    /// Vrai si rien ne bloque la vue entre le canon et la cible.
    /// Toucher un collider de la cible elle-même compte comme « vue dégagée ».
    /// </summary>
    private bool HasLineOfSight()
    {
        Vector3 origin = fireStartingPoint.position;
        RaycastHit[] hits = Physics.RaycastAll(origin, AimPoint - origin, Vector3.Distance(origin, AimPoint),
                                               Physics.DefaultRaycastLayers, QueryTriggerInteraction.Ignore);
        float closest = float.MaxValue;
        Transform blocker = null;
        foreach (RaycastHit hit in hits)
        {
            if (hit.transform.IsChildOf(transform)) continue;   // la tourelle ne se bloque pas elle-même
            if (hit.distance < closest)
            {
                closest = hit.distance;
                blocker = hit.transform;
            }
        }
        return blocker == null || blocker.IsChildOf(target);
    }

    // Affiche la zone au sol dans la vue Scene (sélectionner la tourelle)
    private void OnDrawGizmosSelected()
    {
#if UNITY_EDITOR
        if (detectionRadius > 0f)
        {
            Vector3 center = transform.position + Vector3.up * 0.05f;
            UnityEditor.Handles.color = Color.red;
            UnityEditor.Handles.DrawWireDisc(center, Vector3.up, detectionRadius, 2f);
            GUIStyle style = new GUIStyle(UnityEditor.EditorStyles.boldLabel);
            style.normal.textColor = Color.red;
            UnityEditor.Handles.Label(center + Vector3.right * detectionRadius, $" Détection {detectionRadius:0.#} m", style);
        }
#endif

        // Ligne de vue vers la cible (en Play) : verte = dégagée, rouge = bloquée
        if (requireLineOfSight && Application.isPlaying && target != null && fireStartingPoint != null)
        {
            Gizmos.color = HasLineOfSight() ? Color.green : Color.red;
            Gizmos.DrawLine(fireStartingPoint.position, AimPoint);
        }
    }
}
