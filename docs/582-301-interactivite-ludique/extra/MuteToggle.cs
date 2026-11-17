using UnityEngine;
using UnityEngine.UI;

// Coupe ou rétablit tout le son du jeu. À placer sur un Toggle (UI).
// Coché = son coupé. L'état est conservé d'une scène à l'autre.
[RequireComponent(typeof(Toggle))]
public class MuteToggle : MonoBehaviour
{
    void Start()
    {
        Toggle toggle = GetComponent<Toggle>();
        toggle.SetIsOnWithoutNotify(AudioListener.volume == 0f); // Afficher l'état actuel
        toggle.onValueChanged.AddListener(SetMuted);
    }

    public void SetMuted(bool muted)
    {
        AudioListener.volume = muted ? 0f : 1f;
    }
}
