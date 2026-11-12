# Cours 12

[STOP]

!!! abstract ":material-comment-check: Jalon formatif F3 — Alpha (*feature complete*)"
    **Dépôt en début de séance :** build WebGL publié en ligne. **Attendu :** toutes les mécaniques du GDD branchées, niveau complet parcourable. Après ce point, plus aucune fonctionnalité nouvelle.

    C'est le jalon le plus déterminant — la liste de tâches qui en sort guide toute la finition. C'est aussi la **rétroaction sur l'objectif 2**.

    Les observations recueillies pendant les tests du jour alimentent directement la rencontre : tu arrives avec des données, pas avec tes impressions.

!!! tip "Après aujourd'hui"
    **Plus aucune fonctionnalité nouvelle.** Les cours 13 et 14 servent à finir et à polir ce qui existe déjà, pas à ajouter ce qui manque. Si une idée te vient maintenant, note-la dans la colonne `Won't` de ton tableau — c'est là qu'elle est utile.

<!-- ## Déroulement de la séance

| Temps | Activité |
|---|---|
| 0h00 – 0h15 | Dépôt des builds alpha |
| 0h15 – 1h00 | Théorie : heuristiques et protocole de playtest |
| 1h00 – 1h15 | Pause |
| 1h15 – 2h15 | Rotation de tests (3 jeux par élève) |
| 2h15 – 2h45 | Dépouillement |
| 2h45 – 3h35 | Revue de backlog + rotation F3 | -->

## Le menu pause

`Time.timeScale` règle l'écoulement du temps : `1` normal, `0.5` ralenti, `0` figé. C'est l'outil du [*hit stop* du cours 10](./cours10.md#le-hit-stop), tenu à `0`.

!!! warning "Ce que `timeScale = 0` n'arrête pas"
    - `Update()` (seul ce qui utilise `Time.deltaTime` s'arrête)
    - L'interface, qui reste cliquable
    - Le son : `AudioListener.pause = true;` ou un snapshot du mixer ([cours 7](./cours07.md#snapshots-contextes))
    - La caméra des Starter Assets, qui suit encore la souris

!!! warning "Échap dans le navigateur"
    Le navigateur réserve Échap pour libérer la souris : le script accepte aussi **P**. L'indiquer dans les commandes.

1. Dans le **Canvas** du niveau, un **Panel** `MenuPause` avec un titre et deux boutons : **Reprendre** et **Accueil**
1. Désactiver `MenuPause`
1. Ajouter `GestionPause.cs` sur le **Canvas** (un objet désactivé n'exécute pas son `Update`), glisser `MenuPause` dans **Menu Pause**
1. **On Click** : Reprendre → `GestionPause.Reprendre`, Accueil → `GestionPause.RetourAccueil`

```c# title="GestionPause.cs"
using UnityEngine;
using UnityEngine.InputSystem;
using UnityEngine.SceneManagement;

public class GestionPause : MonoBehaviour
{
    public GameObject menuPause;
    public string sceneAccueil = "Accueil";

    bool enPause = false;

    void Update()
    {
        if (Keyboard.current.escapeKey.wasPressedThisFrame || Keyboard.current.pKey.wasPressedThisFrame)
        {
            if (enPause) Reprendre();
            else Pause();
        }
    }

    public void Pause()
    {
        enPause = true;
        menuPause.SetActive(true);
        Time.timeScale = 0f;
        Cursor.lockState = CursorLockMode.None;
        Cursor.visible = true;
    }

    public void Reprendre()
    {
        enPause = false;
        menuPause.SetActive(false);
        Time.timeScale = 1f;
        Cursor.lockState = CursorLockMode.Locked;
        Cursor.visible = false;
    }

    public void RetourAccueil()
    {
        Time.timeScale = 1f; // Sinon la scène suivante démarre figée
        SceneManager.LoadScene(sceneAccueil);
    }
}
```


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

La case **Persistent** des Variables du CES (cours 3) utilise déjà `PlayerPrefs`. Dans un script maison, c'est `PlayerPrefs` qu'il faut appeler directement.

`PlayerPrefs` associe une **clé** à une **valeur** (`int`, `float` ou `string`) et survit à la fermeture du jeu. Sur le Web, la sauvegarde reste dans le navigateur; l'éditeur et le build ont chacun la leur.

```c#
PlayerPrefs.SetInt("MeilleurScore", 42);
PlayerPrefs.SetString("DernierNiveau", "Zone2");
PlayerPrefs.Save();                                   // Écrit tout de suite

int record = PlayerPrefs.GetInt("MeilleurScore", 0);  // 0 si la clé n'existe pas
if (PlayerPrefs.HasKey("DernierNiveau")) { /* partie à continuer */ }

PlayerPrefs.DeleteKey("MeilleurScore");
PlayerPrefs.DeleteAll();
```

!!! warning "Trois pièges"
    - Sans `Save()`, un plantage ou un onglet fermé fait tout perdre
    - Une faute de frappe dans une clé ne donne **aucune erreur** : la clé va dans une constante
    - Pour tester comme un nouveau joueur : **Edit > Clear All PlayerPrefs**

### La progression

On sauvegarde le **niveau** atteint : le joueur reprend au début de ce niveau.

```c# title="Progression.cs"
using UnityEngine;
using UnityEngine.SceneManagement;

public class Progression : MonoBehaviour
{
    const string CLE = "DernierNiveau";

    [Tooltip("Coché dans les niveaux, décoché dans l'accueil")]
    public bool enregistrerCetteScene = true;

    [Tooltip("Accueil seulement : caché s'il n'y a pas de sauvegarde")]
    public GameObject boutonContinuer;

    void Start()
    {
        if (enregistrerCetteScene)
        {
            PlayerPrefs.SetString(CLE, SceneManager.GetActiveScene().name);
            PlayerPrefs.Save();
        }

        if (boutonContinuer != null)
            boutonContinuer.SetActive(PlayerPrefs.HasKey(CLE));
    }

    public void Continuer()
    {
        SceneManager.LoadScene(PlayerPrefs.GetString(CLE));
    }

    public void NouvellePartie(string premierNiveau)
    {
        PlayerPrefs.DeleteKey(CLE);
        SceneManager.LoadScene(premierNiveau);
    }
}
```

| Scène | Montage |
|---|---|
| **Chaque niveau** | Objet vide `Progression`, **Enregistrer Cette Scene** coché |
| **Accueil** | Objet vide `Progression`, case décochée, bouton **Continuer** glissé dans le champ. **On Click** : Continuer → `Continuer`, Jouer → `NouvellePartie` (nom de la première scène) |
| **Fin** et **Crédits** | Aucun `Progression` coché |

### Le meilleur score

Le score vient du script `Resource` du [cours 7](./cours07.md#ressources).

```c# title="MeilleurScore.cs"
using UnityEngine;
using UnityEngine.Events;
using TMPro;

public class MeilleurScore : MonoBehaviour
{
    const string CLE = "MeilleurScore";

    public Resource ressource;            // Vide dans l'écran de fin
    public TMP_Text texteRecord;          // Facultatif
    public string format = "Record : {0}";
    public UnityEvent onNouveauRecord;

    void Start() => Afficher();

    // Appelé par le CES (Invoke Events) à la victoire
    public void Comparer()
    {
        int score = ressource.Amount;
        if (score > PlayerPrefs.GetInt(CLE, 0))
        {
            PlayerPrefs.SetInt(CLE, score);
            PlayerPrefs.Save();
            onNouveauRecord.Invoke();
        }
        Afficher();
    }

    void Afficher()
    {
        if (texteRecord != null)
            texteRecord.text = string.Format(format, PlayerPrefs.GetInt(CLE, 0));
    }
}
```

1. Dernier niveau : objet `MeilleurScore`, l'objet `Resource` glissé dans **Ressource**
1. CES de la victoire : **Invoke Events** > **MeilleurScore.Comparer ()**, **avant** le changement de scène
1. Scène **Fin** : un autre `MeilleurScore`, **Ressource** vide, un texte dans **Texte Record**

!!! example "Meilleur temps"
    `GetFloat` / `SetFloat`, défaut `9999f`, et `<` au lieu de `>`.



## Pourquoi tester

### Tu es aveugle à ton propre jeu

### Ce qu'un test révèle et qu'une relecture ne révèle jamais

## Les heuristiques

Voir [les heuristiques d'utilisabilité](./extra/heuristiques.md), appliquées au jeu.

## Le protocole de playtest

### La consigne minimale

### Le *think aloud*

### La règle d'or : observer en silence

!!! danger "Ne jamais aider"
    Le moment où tu veux intervenir est exactement le moment où tu apprends quelque chose. Note-le, tais-toi, laisse la personne se débrouiller.

### La grille d'observation

## La rotation

### Trois jeux par élève

### Ce qu'on note, ce qu'on ne note pas

## Le dépouillement

### Trier : bogue, friction, préférence

### Le problème est vrai, la solution rarement

!!! tip "La phrase à retenir"
    Quand un testeur dit « il faudrait une flèche ici », le vrai renseignement n'est pas la flèche. C'est qu'il s'est perdu. La flèche est **sa** solution — la tienne sera peut-être une lumière.

## La revue de backlog

### Traduire les observations en *issues*

### Re-prioriser le tableau

### Déplacer en `Won't` ce qui ne rentrera plus

### Estimer ce qui reste, honnêtement

@todo ; mentionner de bien classer ses fichiers dans _ et un rappel de QUOI mettre dedans.

## Devoirs

<!-- Savoirs essentiels touchés (note pour l'enseignant) :

-->

<!--
================================================================
NOTES DE RÉDACTION — à supprimer une fois la séance écrite
================================================================
À rapatrier depuis .archive/ (voir .archive/MIGRATION.md) :
  - .archive/cours14.md  § Tu es aveugle à ton propre jeu
                         § La règle d'or : observer en silence
                         § Trier le feedback : le problème est vrai,
                           la solution rarement
  - .archive/exercices/cours14-playtests.md
  - extra/heuristiques.md (déjà en place, à lier)

À écrire à neuf : protocole de playtest formalisé, grille d'observation
imprimable, revue de backlog, et la grille d'avis écrit du jalon F3
(rétroaction objectif 2).
================================================================
-->
