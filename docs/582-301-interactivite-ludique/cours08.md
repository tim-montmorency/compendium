# Cours 8

[STOP]

!!! tip "Où tu devrais être rendu"
    Le prototype du jalon 1 est passé, tes ambiances sonores sont posées, ton backlog est monté.

    **Cette semaine :** la passe d'habillage et d'éclairage de ta zone 1. C'est la séance qui te donne ta tranche verticale.

    ⏭️ **La semaine prochaine, jalon 2** — avec un **build Windows**. Le build WebGL sera exigé au sprint suivant : les surprises du WebGL se découvrent tôt, pas la semaine de la remise finale.

<!-- ## Déroulement de la séance

| Temps | Activité |
|---|---|
| 0h00 – 0h50 | Les lumières et le baking |
| 0h50 – 1h20 | Post-traitement URP |
| 1h20 – 1h35 | Pause |
| 1h35 – 2h30 | Level design : rythme, guidage, lisibilité |
| 2h30 – 2h50 | Une recette Shader Graph |
| 2h50 – 3h35 | Atelier | -->

## Projet final : l'énoncé

L'énoncé du projet final est remis aujourd'hui : [Projet final](./devoirs/projet-final/index.md).

À lire en classe :

- L'échelle de raffinement (absente, fonctionnelle, intégrée, raffinée)
- Les critères de **Rigueur** : gestion dans Trello et crédits complets dans le README, tenus au fil de la session
- La carte de preuves : ce qui n'est pas déclaré n'est pas corrigé
- La grille d'évaluation et le calendrier des jalons

## La tranche verticale

### Le concept industriel du jour

## Les materials

CES : hint material.

### Albedo, métallique, lissage, émission

### Les variantes de materials Synty

### Un material par usage, pas un par objet

## L'éclairage

https://www.youtube.com/watch?v=5rxMdiCkQGk

### Les types de lumières

### Temps réel vs *baked*

### Le lightmapping : objets statiques et temps de calcul

### Les *Light Probes*

### Skybox, brouillard, lumière ambiante

### L'émission

## Le post-traitement URP

### Le **Volume**

### Bloom, vignette, *color adjustments*

### *Depth of field* et *tonemapping*

## Le level design

### L'espace qui raconte la boucle

### Du greybox au décor : le dressing

### Le greyboxing : valider l'espace avant de le décorer

### Les métriques : largeur de couloir, hauteur de saut

### Le rythme : tension et repos

### Donner une forme au parcours : le cercle de Dan Harmon

### Les lumières : l'outil de guidage n° 1

### Guider sans flèches

### La lisibilité : si tout brille, rien ne brille

### Placer l'objectif : visible tôt, atteignable tard

## Shader Graph

!!! note "Une seule recette"
    On monte **une** recette en direct, du début à la fin — dissolution ou eau — et tu la copies dans ton jeu. Pas de théorie des nœuds, pas de mathématiques de shader. Shader Graph est un cours à lui seul; s'y engager ici coûterait la passe d'éclairage, qui rapporte dix fois plus.

## Progression entre les niveaux

### Conditions enchaînées

L'objet `Coins` est celui du [HUD dynamique du cours 7](./cours07.md#hud-dynamique).

Le [projet final](./devoirs/projet-final/index.md) exige au moins **deux conditions enchaînées** pour passer d'un niveau à l'autre. Le CES les vérifie avec **Add Condition > Variable**, qui lit des **variables CES**. Chaque script peut tenir une variable CES à jour.

1. Dans le panneau **Project**, dossier **Assets > _ > Variables** : clic-droit **Create > Collider Event System > Variables > Int Variable**, la nommer `Coins`
1. Même chose avec une **Bool Variable** nommée `hasHat`
1. Dans l'**Inspector** de l'objet `Coins` de la **Hierarchy**, glisser la variable `Coins` dans **Variable**
1. Sur le Trigger Cube de l'objet à ramasser (ex. : un chapeau) : **Add Action > Variable** : `hasHat`, **Set**, ✅, avec **After Trigger** = **Destroy Parent**
1. Sur le Trigger Cube de la sortie, deux conditions reliées par **And** :
    1. **Add Condition > Variable** : `Coins` **Greater Than Or Equal** `5`
    1. **Add Condition > Variable** : `hasHat` = ✅
1. Actions : charger le niveau suivant

!!! info "Les règles restent dans le script"

    Une action **Variable** du CES peut aussi modifier `Coins` directement (ex. : **Additive** `-10`). Le script s'en aperçoit et applique quand même ses règles : jamais sous 0, le HUD suit.

### D'un niveau à l'autre

Par défaut, **Reset On Start** est coché : chaque scène repart à neuf (pleine vie, aucune pièce, aucun objet).

Pour que la vie, les pièces ou les objets **suivent le joueur** dans le niveau suivant :

1. Lier une variable CES au script (voir [Conditions enchaînées](#conditions-enchainees))
1. Décocher **Reset On Start** dans l'**Inspector** du script, **dans chaque scène**

!!! danger "Nouvelle partie"

    Une variable CES garde sa valeur tant que le jeu tourne. Au début d'une **nouvelle partie** (bouton Rejouer, retour à l'accueil), la remettre à zéro : dans la scène d'accueil, un Empty Object avec un **Condition Watcher** sans condition, et une action **Variable** **Set** par variable (`HP` = `100`, `Coins` = `0`, `hasHat` = ☐).

## Le menu pause

Mettre le jeu en pause, c'est figer le temps : `Time.timeScale` règle la vitesse à laquelle le temps s'écoule dans Unity.

| Valeur | Effet |
|---|---|
| `1` | Vitesse normale |
| `0.5` | Ralenti |
| `0` | Temps figé : la physique, les animations et tout ce qui dépend de `Time.deltaTime` s'arrêtent |

!!! warning "Ce que `timeScale` n'arrête pas"
  - `Update()` continue d'être appelée : un code qui ne se sert pas de `Time.deltaTime` continue de tourner.
  - L'interface (boutons, survol) reste cliquable, heureusement.
  - Le son continue de jouer. Pour l'étouffer, passer par un snapshot de l'Audio Mixer (voir les [snapshots du cours 7](./cours07.md#snapshots-contextes)); pour le couper, `AudioListener.pause = true;`.
  - Avec les Starter Assets, la caméra suit encore la souris : le mouvement de la souris n'est pas multiplié par `Time.deltaTime`.

#### Monter le menu

1. Dans le **Canvas** du niveau, créer un **Panel** nommé `MenuPause`
1. Y ajouter un titre (TextMeshPro) et deux boutons : **Reprendre** et **Accueil**
1. Désactiver `MenuPause` (case à cocher en haut de l'**Inspector**) : il est caché au démarrage
1. Ajouter le script ci-dessous sur le **Canvas** (pas sur `MenuPause` : un objet désactivé n'exécute pas son `Update`), puis glisser `MenuPause` dans **Menu Pause**
1. **On Click** du bouton Reprendre → `GestionPause.Reprendre`; du bouton Accueil → `GestionPause.RetourAccueil`

```c# title="GestionPause.cs"
using UnityEngine;
using UnityEngine.InputSystem;
using UnityEngine.SceneManagement;

public class GestionPause : MonoBehaviour
{
    public GameObject menuPause;          // Glisser le Panel MenuPause ici
    public string sceneAccueil = "Accueil";

    bool enPause = false;

    void Update()
    {
        // Touche Échap (nouveau Input System, comme les Starter Assets)
        if (Keyboard.current.escapeKey.wasPressedThisFrame)
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
        Time.timeScale = 1f; // Sinon la scène suivante démarre figée !
        SceneManager.LoadScene(sceneAccueil);
    }
}
```

<!-- #### Étouffer le jeu en pause

Le menu pause peut passer lui-même au snapshot `Pause`. Dans `GestionPause.cs`, ajouter :

c# title="GestionPause.cs (ajouts)"
using UnityEngine.Audio;                    // En haut, avec les autres using

public AudioMixerSnapshot snapshotNormal;   // Glisser Normal ici
public AudioMixerSnapshot snapshotPause;    // Glisser Pause ici

// À la fin de Pause() :
snapshotPause.TransitionTo(0.3f);

// À la fin de Reprendre() et de RetourAccueil() :
snapshotNormal.TransitionTo(0.3f);


Dans l'**Inspector** du Canvas, déplier `MixerPrincipal` dans le panneau **Project** et glisser les deux snapshots dans les champs du script.

!!! danger "Snapshot + `Time.timeScale = 0`"

    Par défaut, le mixer avance au rythme du temps du jeu : en pause, la transition ne se fait jamais. Dans le panneau **Project**, sélectionner `MixerPrincipal`; dans l'**Inspector**, régler **Update Mode** à `Unscaled Time`. -->

### Trello

- `Must` Monter le menu pause (Échap, `timeScale`, boutons Reprendre et Quitter)
- `Should` Ajouter un panneau Options au menu pause
- `Could` Créer un snapshot pour le menu pause (son étouffé)

## Pratique

## Devoirs

<!-- Savoirs essentiels touchés (note pour l'enseignant) :

-->

<!--
================================================================
NOTES DE RÉDACTION — à supprimer une fois la séance écrite
================================================================
À rapatrier depuis .archive/ (voir .archive/MIGRATION.md) :
  - .archive/cours12.md  § Le level design : l'espace qui raconte la boucle
                         § Le rythme : tension et repos
                         § Le cercle de Dan Harmon
                         § Les lumières : l'outil de guidage n° 1
                         § Guider sans flèches
                         § La lisibilité : si tout brille, rien ne brille
                         § Placer l'objectif : visible tôt, atteignable tard
                         § La forme de ton niveau
  - .archive/cours13.md  § Le post-processing : le filtre Instagram de ton jeu
  - .archive/cours11.md  § La tranche verticale : le concept industriel du jour
  - .archive/cours03.md  § Les materials
                         § Bonus : changer un material en jeu
  - .archive/cours05.md  § Les materials : la couleur de ton monde
  - .archive/exercices/cours12-level-design.md
  - .archive/exercices/cours11-tranche-verticale.md

À écrire à neuf : types de lumières, baking et lightmaps, Light Probes,
skybox et brouillard, la recette Shader Graph, et la grille d'avis
écrit du jalon F2 (rétroaction objectif 1).
================================================================
-->
