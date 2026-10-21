<!--
Piste — Packages en lien avec le feedback
- DOTween (Asset Store, gratuit) : animations par code en une ligne (échelle, secousse, fondu) — utile pour le game feel d'un ramassage ou d'un bouton.
-->

# Cours 10

[STOP]



!!! tip "Où tu devrais être rendu"
    Ta zone 1 est finie, ton PNJ patrouille, et ton premier build WebGL est en ligne sur une page privée.

    **Cette semaine :** les particules, les projectiles et le *game feel*.

    ⏭️ **Le jalon 3 est dans deux séances**, et c'est un dépôt : toutes les mécaniques branchées, les trois zones parcourables **et habillées**, build WebGL en ligne. L'habillage des zones 2 et 3 ne se fait pas en une soirée — commence-le cette semaine, en parallèle.

<!-- ## Déroulement de la séance

| Temps | Activité |
|---|---|
| 0h00 – 0h50 | Le Particle System |
| 0h50 – 1h20 | Recettes de particules |
| 1h20 – 1h35 | Pause |
| 1h35 – 2h20 | Projectiles : Instantiate, AddForce, impact |
| 2h20 – 3h00 | Game feel : la boîte à outils |
| 3h00 – 3h35 | Atelier | -->

## Le Particle System

https://assetstore.unity.com/packages/vfx/particles/particle-pack-127325

### Les modules essentiels

### Le Particle System en 5 réglages

### Les materials de particules

### Recettes

#### Poussière de pas

#### Étincelles

#### Fumée

#### Ramassage d'objet

#### Portail

### Trails et decals

### VFX Graph : ce que c'est, et pourquoi on ne l'ouvre pas

## Les projectiles

### `Instantiate` : le retour

### `Destroy` et la durée de vie

### `Rigidbody.AddForce`

### Détecter l'impact

### L'*object pooling*, en une phrase

## Le *game feel*

### Pourquoi ça marche

### La boîte à outils

#### Le *screen shake*

#### Le *hit stop*

#### La mise à l'échelle au ramassage

#### Les courbes d'animation

### La règle du cumul

!!! tip "Un événement, trois canaux"
    Ramasser une pièce, ce n'est pas un son. C'est un son **plus** une particule **plus** un chiffre qui bouge dans le HUD **plus** un petit *pop* d'échelle. Séparément, chacun est anodin. Ensemble, c'est ce qui fait qu'on veut le refaire.


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


### Trello

- `Must` Monter le menu pause (Échap, `timeScale`, boutons Reprendre et Quitter)
- `Should` Ajouter un panneau Options au menu pause
- `Could` Créer un snapshot pour le menu pause (son étouffé)

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


## Trello

### Nouvelles cartes

**Rétroaction**

- `Must` Créer le signal de réussite (son, particule, HUD)
- `Must` Créer le signal d'échec (son, particule, HUD)
- `Must` Lier trois systèmes de particules à des événements du jeu

## Pratique

## Devoirs

<!-- Savoirs essentiels touchés (note pour l'enseignant) :

-->

<!--
================================================================
NOTES DE RÉDACTION — à supprimer une fois la séance écrite
================================================================
À rapatrier depuis .archive/ (voir .archive/MIGRATION.md) :
  - .archive/cours13.md  § Capsule 2 - Game feel
                         § Pourquoi ça marche
                         § La boîte à outils
                         § Le Particle System en 5 réglages
  - .archive/exercices/cours13-publication-et-game-feel.md (partie game feel)

À écrire à neuf : les recettes de particules, tout le bloc projectiles
(Instantiate, AddForce, impact, pooling), trails et decals.

Rappel : Instantiate a été introduit au cours 5 (générer des GameObjects).
C'est ici qu'il trouve son usage.
================================================================
-->
