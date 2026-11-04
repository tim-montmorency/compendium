using UnityEngine;

// À placer sur PlayerArmature, à côté du ThirdPersonController.
// Les animations de marche et de course des Starter Assets contiennent déjà des
// Animation Events OnFootstep (à chaque pas) et OnLand (à l'atterrissage).
// Unity appelle ces méthodes sur tous les scripts du GameObject : ce script
// les reçoit en même temps que le ThirdPersonController, sans le modifier.
public class PoussierePas : MonoBehaviour
{
    public ParticleSystem poussiere;   // Glisser FX_Poussiere (enfant, aux pieds)
    public int particulesParPas = 5;
    public int particulesAtterrissage = 15;

    void OnFootstep(AnimationEvent animationEvent)
    {
        // Même filtre que le ThirdPersonController : ignore l'animation qui s'efface pendant un fondu
        if (animationEvent.animatorClipInfo.weight > 0.5f)
            poussiere.Emit(particulesParPas);
    }

    void OnLand(AnimationEvent animationEvent)
    {
        if (animationEvent.animatorClipInfo.weight > 0.5f)
            poussiere.Emit(particulesAtterrissage);
    }
}
