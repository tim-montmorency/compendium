<!--
Piste — Package Recorder (Unity Registry)
- Capture vidéo / GIF directement dans l'éditeur : captures pour la page itch.io, le README et l'oral.
-->

# Cours 11

[STOP]

!!! tip "Où tu devrais être rendu"
    Tes signaux de réussite et d'échec sont en place. Tes zones 2 et 3 sont en cours d'habillage.

    **Cette semaine :** la mise en ligne pour de vrai — page itch.io, README, crédits des médias, sauvegarde.

    ⏭️ **La semaine prochaine, jalon 3 : dépôt de l'alpha en début de séance.** C'est le dernier moment où on ajoute des fonctionnalités. Tout ce qui n'est pas branché à ce moment-là ne le sera jamais — et c'est très bien ainsi.

<!-- ## Déroulement de la séance

| Temps | Activité |
|---|---|
| 0h00 – 0h40 | Build Settings et Player Settings |
| 0h40 – 1h20 | WebGL : contraintes et pièges |
| 1h20 – 1h35 | Pause |
| 1h35 – 2h10 | La page itch.io, README et crédits |
| 2h10 – 2h45 | PlayerPrefs |
| 2h45 – 3h10 | Performance et Profiler |
| 3h10 – 3h35 | Atelier | -->


## Shader Graph

!!! note "Une seule recette"
    On monte **une** recette en direct, du début à la fin — dissolution ou eau — à copier ensuite dans son propre jeu. Pas de théorie des nœuds, pas de mathématiques de shader. Shader Graph est un cours à lui seul; s'y engager ici coûterait la passe d'éclairage, qui rapporte dix fois plus.

### Recette : la dissolution

Un objet qui se désintègre avec un bord lumineux : un ennemi vaincu, un mur magique qui disparaît, un objet ramassé.

**Créer le shader**

1. Dans le panneau **Project**, dossier **Assets > _ > Materials** : clic-droit **Create > Shader Graph > URP > Lit Shader Graph**, le nommer `SG_Dissolution`
1. Double-cliquer : la fenêtre **Shader Graph** s'ouvre
1. Dans le **Graph Inspector** (en haut à droite), onglet **Graph Settings** : cocher **Alpha Clipping**

**Les propriétés** (panneau **Blackboard**, bouton **+**)

| Propriété | Type | Valeur |
|---|---|---|
| `BaseMap` | Texture2D | La texture de l'objet |
| `Dissolve` | Float, **Mode** `Slider` (0 à 1) | `0` |
| `EdgeWidth` | Float | `0.05` |
| `EdgeColor` | Color, **Mode** `HDR` | Orange vif, intensité `3` |

**Les nœuds** (clic-droit dans la grille **Create Node**, puis relier les ports)

1. `BaseMap` → **Sample Texture 2D** → **Base Color** du *Fragment*
1. **Simple Noise** (**Scale** `30`) → **Alpha** du *Fragment*
1. `Dissolve` → **Alpha Clip Threshold** du *Fragment*
1. **Add** (`Dissolve` + `EdgeWidth`) → entrée **Edge** d'un nœud **Step**; **Simple Noise** → entrée **In** du même **Step**
1. **Step** → **One Minus** → **Multiply** avec `EdgeColor` → **Emission** du *Fragment*
1. Cliquer **Save Asset** (en haut à gauche)

**L'utiliser**

1. Dans le panneau **Project**, clic-droit sur `SG_Dissolution` : **Create > Material**
1. Dans l'**Inspector** du material, glisser la texture de l'objet dans **BaseMap**
1. Glisser le material sur l'objet, puis faire glisser **Dissolve** de `0` à `1` pour voir l'effet
1. Pour le déclencher en jeu : animer **Material._Dissolve** dans la fenêtre **Animation** (voir le cours 6), puis lancer l'animation avec le CES

!!! info "Avec un modèle Synty"
    Glisser la texture atlas du pack (ex. : `PolygonAdventure_Texture_01_A`) dans **BaseMap** : l'objet garde ses couleurs.



## Compiler

### Pourquoi publier (vraiment)

### Les Build Settings

### Les Player Settings : icône, résolution, nom

### Les scènes incluses (et l'erreur classique)

## WebGL

### Ton jeu devient une page web

### Les contraintes : pas de fenêtres natives, compression, taille

### Les pièges fréquents

!!! note "Le premier upload a déjà eu lieu"
    Le devoir du [cours 9](./cours09.md) imposait un build WebGL sur une page privée. Aujourd'hui on **règle** les problèmes rencontrés, on ne les découvre pas : compression, taille des banques audio, chemins d'assets, temps de chargement.

## itch.io

### La page de projet, version projet final

### L'*embed* et les dimensions

### Les visuels de page et la description

### Les contrôles : dire au joueur quoi faire

## Le README et les crédits

!!! warning "Critère de la grille finale"
    Tous les médias externes doivent être cités : source, auteur, licence. Les assets Synty aussi. C'est une exigence légale avant d'être une exigence de cours.

La section `## Crédits` du README est amorcée depuis le [cours 7](./cours07.md#les-credits-des-assets) : modèle de tableau, colonnes et passage vers l'écran de crédits du jeu. Aujourd'hui, on la complète et on la reporte sur la page itch.io.

## Le menu Options : le volume

Le projet final n'exige pas de curseur de volume, mais c'est un réglage que les joueurs apprécient. Il s'appuie sur l'Audio Mixer `MixerPrincipal` et ses groupes, montés au [cours 7](./cours07.md#laudio-mixer).

### Exposer le volume d'un groupe

1. Ouvrir `MixerPrincipal` et cliquer sur le groupe `Musique`
1. Dans l'**Inspector**, clic-droit sur le mot **Volume** > **Expose 'Volume (of Musique)' to script**
1. En haut à droite de la fenêtre **Audio Mixer**, menu **Exposed Parameters** : double-cliquer sur `MyExposedParam` et le renommer `VolumeMusique`
1. Répéter pour `SFX` (`VolumeSFX`)

### Le slider

1. Dans le panneau Options, clic-droit **UI (Canvas) > Slider**
1. Ajouter le script ci-dessous, glisser `MixerPrincipal` dans **Mixer**, **Parametre** = `VolumeMusique`

```c# title="SliderVolume.cs"
using UnityEngine;
using UnityEngine.Audio;
using UnityEngine.UI;

[RequireComponent(typeof(Slider))]
public class SliderVolume : MonoBehaviour
{
    public AudioMixer mixer;                  // Glisser MixerPrincipal ici
    public string parametre = "VolumeMusique"; // Le nom exact du paramètre exposé

    Slider slider;

    void Start()
    {
        slider = GetComponent<Slider>();
        slider.minValue = 0.0001f;            // Jamais 0 : Log10(0) n'existe pas
        slider.maxValue = 1f;
        slider.value = PlayerPrefs.GetFloat(parametre, 1f);  // Dernier réglage, sinon plein volume
        slider.onValueChanged.AddListener(Changer);
        Changer(slider.value);
    }

    void Changer(float valeur)
    {
        mixer.SetFloat(parametre, Mathf.Log10(valeur) * 20f);  // 0 à 1 → -80 dB à 0 dB
        PlayerPrefs.SetFloat(parametre, valeur);
    }
}
```

!!! warning "Pourquoi `Log10` et pas la valeur directe"
    Le mixer compte en **décibels** : `0 dB` = volume normal, `-80 dB` = silence. L'oreille n'entend pas le volume de façon linéaire : envoyer la valeur du slider telle quelle donnerait un curseur qui ne change presque rien sur 80 % de sa course, puis coupe tout d'un coup. `Log10(valeur) * 20` répartit le changement sur toute la course.

!!! tip "Un son de test"
    Sur le slider `SFX`, dans **On Value Changed**, cliquer **+**, glisser un objet qui porte une **Audio Source** (un son court, groupe **Output** = `SFX`) et choisir **AudioSource > Play ()**. Le joueur entend tout de suite le volume qu'il règle.

## La sauvegarde

!!! info "Tu sauvegardes déjà, depuis le cours 3"
    La case **Persistent** d'une Variable du CES écrit sa valeur sur le disque et la recharge au lancement suivant. Tu t'en sers depuis huit semaines sans savoir ce qu'il y a dessous.

    Ce qu'il y a dessous, c'est `PlayerPrefs`. On l'ouvre aujourd'hui — non pas parce que la case ne suffit pas, mais parce que **dès que tu écris ton propre script**, c'est l'outil dont tu as besoin : la case coche une Variable du CES, elle ne sauvegarde pas ce que ton code à toi calcule.

### `PlayerPrefs` : trois clés suffisent

### `SetInt`, `SetFloat`, `SetString`, `Save`

### `DeleteAll` : comment tester une sauvegarde

### Ce qu'on sauvegarde : progression, options, meilleur score

!!! note "Contenir l'ambition"
    `PlayerPrefs` suffit. Ton jeu a un niveau et une mécanique — il n'y a rien à sérialiser qui ne tienne pas dans trois clés. JSON existe pour les états complexes, les chemins de fichiers, les versions de sauvegarde et la corruption de données. C'est un sujet de session avancée.

## La performance

### Le Profiler, en survol

### Le *batching*

### Le nombre de lumières temps réel

### La taille des textures

## Pratique

## Trello

### Nouvelles cartes

**Publication**

- `Must` Compléter le README : concept du jeu, commandes et lien vers la page itch.io
- `Must` Exporter un build Windows et vérifier qu'il se lance
- `Must` Monter la page itch.io : captures d'écran, description et commandes

## Devoirs

<!-- Savoirs essentiels touchés (note pour l'enseignant) :

-->

<!--
================================================================
NOTES DE RÉDACTION — à supprimer une fois la séance écrite
================================================================
À rapatrier depuis .archive/ (voir .archive/MIGRATION.md) :
  - .archive/cours13.md  § Pourquoi publier (vraiment)
                         § WebGL : ton jeu devient une page web
                         § La page itch.io, version projet final
                         § Contrôles
                         § Crédits et licences : obligatoire, légal, professionnel
                         § En survol (optionnel) : sauvegarder des données
  - .archive/exercices/cours13-publication-et-game-feel.md (partie publication)

À écrire à neuf : Build Settings et Player Settings en détail,
PlayerPrefs en profondeur (l'archive n'est qu'un survol), Profiler
et performance.
================================================================
-->
