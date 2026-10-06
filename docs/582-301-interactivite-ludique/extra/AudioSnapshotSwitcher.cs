using UnityEngine;
using UnityEngine.Audio;

/// <summary>
/// Passe d'un snapshot de l'Audio Mixer à un autre avec une transition (intérieur/extérieur, menu pause...).
///
/// Utilisation dans un UnityEvent (bouton, Collider Event System, etc.) :
///   - TransitionTo (AudioMixerSnapshot)  : transition vers ce snapshot
///   - SetNextTransitionDuration (float)  : durée spéciale pour la prochaine transition seulement,
///                                          à placer AVANT TransitionTo dans la liste de l'event
///
/// Les snapshots ne démarrent pas les sons : ils changent seulement les réglages du mixer
/// (volumes des groupes, effets). Les AudioSource doivent jouer dans les groupes du mixer.
/// Un paramètre exposé et modifié par script (SetFloat) n'est plus contrôlé par les snapshots.
/// </summary>
public class AudioSnapshotSwitcher : MonoBehaviour
{
    [Tooltip("Optionnel : snapshot appliqué au lancement de la scène")]
    public AudioMixerSnapshot startSnapshot;
    [Tooltip("Durée d'une transition, en secondes")]
    public float transitionDuration = 2f;

    AudioMixerSnapshot current;
    float nextTransitionDuration = -1f;

    void Start()
    {
        if (startSnapshot != null) TransitionTo(startSnapshot);
    }

    public void SetNextTransitionDuration(float duration)
    {
        nextTransitionDuration = duration;
    }

    public void TransitionTo(AudioMixerSnapshot snapshot)
    {
        float duration = nextTransitionDuration >= 0f ? nextTransitionDuration : transitionDuration;
        nextTransitionDuration = -1f;

        if (snapshot == null || snapshot == current) return;

        current = snapshot;
        snapshot.TransitionTo(duration);
    }
}
