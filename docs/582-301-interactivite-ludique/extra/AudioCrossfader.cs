using System.Collections;
using System.Collections.Generic;
using UnityEngine;

/// <summary>
/// Gère le passage d'une source audio à une autre avec un fondu (ambiances, musiques...).
///
/// Utilisation dans un UnityEvent (bouton, Collider Event System, etc.) :
///   - Play (AudioSource)          : fondu vers cette source (vide = fondu vers le silence)
///   - Stop ()                     : fondu vers le silence
///   - SetNextFadeDuration (float) : durée spéciale pour la prochaine transition seulement,
///                                   à placer AVANT Play dans la liste de l'event
///
/// Chaque source monte jusqu'au volume réglé dans son AudioSource.
/// Chaque AudioSource doit avoir Loop coché et Play On Awake décoché.
/// Aucun Animator ne doit animer leur volume, sinon il écrase les valeurs du script.
/// </summary>
public class AudioCrossfader : MonoBehaviour
{
    [Tooltip("Optionnel : source jouée en fondu au lancement de la scène")]
    public AudioSource startSource;
    [Tooltip("Durée d'une transition, en secondes")]
    public float fadeDuration = 3f;
    const float DynamicRange = 60f;

    AudioSource current;
    AudioSource fadingOut;
    float nextFadeDuration = -1f;

    // Volume configuré de chaque AudioSource, mémorisé avant que les fondus ne le modifient
    readonly Dictionary<AudioSource, float> baseVolumes = new();

    void Start()
    {
        if (startSource != null) Play(startSource);
    }

    public void SetNextFadeDuration(float duration)
    {
        nextFadeDuration = duration;
    }

    public void Play(AudioSource next)
    {
        float duration = nextFadeDuration >= 0f ? nextFadeDuration : fadeDuration;
        nextFadeDuration = -1f;
        Play(next, duration);
    }

    public void Stop()
    {
        Play(null);
    }

    void Play(AudioSource next, float duration)
    {
        if (next == current) return;

        StopAllCoroutines();
        if (fadingOut != null && fadingOut != next) fadingOut.Stop();

        fadingOut = current;
        current = next;
        StartCoroutine(Crossfade(fadingOut, current, duration));
    }

    IEnumerator Crossfade(AudioSource oldSource, AudioSource newSource, float duration)
    {
        float target = newSource != null ? BaseVolume(newSource) : 0f;

        if (newSource != null && !newSource.isPlaying)
        {
            newSource.volume = 0f;
            newSource.Play();
        }

        float oldStart = oldSource != null ? oldSource.volume : 0f;
        float newStart = newSource != null ? newSource.volume : 0f;

        float t = 0f;
        while (t < duration)
        {
            t += Time.unscaledDeltaTime;
            float progress = Mathf.Clamp01(t / duration);

            if (oldSource != null && newSource != null)
            {
                // Crossfade à puissance constante : pas de creux sonore au milieu
                float angle = progress * Mathf.PI * 0.5f;
                newSource.volume = Mathf.Lerp(newStart, target, Mathf.Sin(angle));
                oldSource.volume = oldStart * Mathf.Cos(angle);
            }
            else if (newSource != null)
            {
                // Fondu depuis le silence
                newSource.volume = ToLinear(Mathf.Lerp(ToPerceived(newStart), ToPerceived(target), progress));
            }
            else if (oldSource != null)
            {
                // Fondu vers le silence
                oldSource.volume = ToLinear(Mathf.Lerp(ToPerceived(oldStart), 0f, progress));
            }

            yield return null;
        }

        if (oldSource != null) oldSource.Stop();
        if (newSource != null) newSource.volume = target;
        fadingOut = null;
    }

    float BaseVolume(AudioSource source)
    {
        if (!baseVolumes.TryGetValue(source, out float baseVolume))
        {
            baseVolume = source.volume;
            baseVolumes[source] = baseVolume;
        }
        return baseVolume;
    }

    static float ToPerceived(float linearVolume)
    {
        if (linearVolume <= 0f) return 0f;
        return Mathf.Clamp01(1f + 20f * Mathf.Log10(linearVolume) / DynamicRange);
    }

    static float ToLinear(float perceived)
    {
        if (perceived <= 0f) return 0f;
        return Mathf.Pow(10f, (perceived - 1f) * DynamicRange / 20f);
    }
}
