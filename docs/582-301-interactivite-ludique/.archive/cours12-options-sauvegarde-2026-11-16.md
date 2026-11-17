<!-- Retiré du cours 12 (582-301) le 2026-11-16 -->

## Le menu Options : le volume

Facultatif. S'appuie sur `MixerPrincipal` ([cours 7](./cours07.md#laudio-mixer)).

1. Dans `MixerPrincipal`, groupe `Musique` > **Inspector** : clic-droit sur **Volume** > **Expose … to script**
1. **Exposed Parameters** (en haut à droite) : renommer `MyExposedParam` en `VolumeMusique`. Idem pour `SFX` (`VolumeSFX`)
1. **UI (Canvas) > Slider** avec `SliderVolume.cs` : glisser `MixerPrincipal`, **Parametre** = `VolumeMusique`

```c# title="SliderVolume.cs"
using UnityEngine;
using UnityEngine.Audio;
using UnityEngine.UI;

[RequireComponent(typeof(Slider))]
public class SliderVolume : MonoBehaviour
{
    public AudioMixer mixer;
    public string parametre = "VolumeMusique";

    Slider slider;

    void Start()
    {
        slider = GetComponent<Slider>();
        slider.minValue = 0.0001f;            // Jamais 0 : Log10(0) n'existe pas
        slider.maxValue = 1f;
        slider.value = PlayerPrefs.GetFloat(parametre, 1f);
        slider.onValueChanged.AddListener(Changer);
        Changer(slider.value);
    }

    void Changer(float valeur)
    {
        mixer.SetFloat(parametre, Mathf.Log10(valeur) * 20f);  // 0–1 → -80 à 0 dB
        PlayerPrefs.SetFloat(parametre, valeur);
    }
}
```

!!! info "Pourquoi `Log10`?"
    Le mixer compte en décibels et l'oreille perçoit le volume de façon logarithmique. Sans conversion, le curseur ne change presque rien sur 80 % de sa course.

!!! tip "Un son de test"
    Slider `SFX` > **On Value Changed** : une **Audio Source** (groupe `SFX`) > **AudioSource.Play ()**.



## La sauvegarde

Une variable du CES ([cours 3](./cours03.md)) dont la case **Persistent** est cochée garde sa valeur après la fermeture du jeu. Unity l'écrit dans les `PlayerPrefs`, un petit registre **clé → valeur**.

Quoi sauvegarder : une clé ramassée, un niveau débloqué, un record. Le reste (HP, minuterie) repart à zéro à chaque partie.

1. Dans les **Variables** du CES, cocher **Persistent** sur la variable à conserver
1. **Play**, modifier la variable (ex. : ramasser la clé `hasKey`), arrêter
1. **Play** de nouveau : la variable a gardé sa valeur

!!! warning "Trois pièges"
    - Une variable persistante peut **bloquer** le joueur : une porte déjà ouverte, un objet déjà ramassé. Prévoir un bouton **Nouvelle partie** qui remet les variables à leur valeur de départ (action du CES)
    - Pour tester comme un nouveau joueur : **Edit > Clear All PlayerPrefs**
    - L'éditeur et le build ont chacun leur sauvegarde. Sur le Web, elle reste dans le navigateur du joueur
