# Cours 6

[STOP]




!!! tip "2.5d"

    ![type:video](./assets/video/2.5d.webm){.h-auto .w-50}

    Tant qu'à y être, voyons ce qu'on peut configurer pour une scène 2.5D. 
    
    Pour désactiver ++w++ et ++s++

    1. Double-clic sur **Assets/Starter Assets/Runtime/InputSystem/StarterAssets/Player/Move**
    1. Dans **Player > Move**, WASD, supprimer les options **Up** et **Down**
    1. Clic sur **Save Asset**

    Pour reculer la caméra du personnage

    1. Dans **PlayerFollowCamera**, changer la valeur de **Camera Distance**

    Retirer la perspective

    1. Sur **MainCamera** du personnage, dans **Camera > Projection**, changer **Perspective** pour **Orthographic**



#### _9 slicing sprite_
 
![](./assets/img/9slice-pizza.png){data-zoom-image .w-50}

<!-- https://en.wikipedia.org/wiki/9-slice_scaling -->

1. Trouver une image de bouton carré<br>![](./assets/img/button_square_depth_flat.png){data-zoom-image .w-10}
1. Glisser l'image dans **Assets > _ > Sprites**
1. Cliquer sur l'image
  > Cliquer sur **Install 2D Sprite Package** si ce n'est pas déjà installé
1. **Texture type** = **Sprite (2D and UI)**
  - Si l'image est en pixelart, **Filter Mode** = **Point (no filter)**
1. **Sprite Mode** = **Single**
1. Clic sur **Apply**
1. Clic sur **Open Sprite Editor**
1. Glisser les 4 lignes vertes vers le centre de sorte à avoir un centre uni<br>![](./assets/img/9slice-sprite-editor.png){data-zoom-image .w-10}
1. Clic sur **Apply** et ferme le **Sprite Editor**

Dans le panneau **Hierarchy** : 

1. Clic sur un bouton dans le canvas
1. Drag le sprite du panneau **Project** vers **Image > Source Image**
1. **Image type** = **Sliced**




## Élections provinciales 2026

Lundi le 5 octobre 2026

Vous devriez avoir reçu votre carte d’information de l’électeur pour savoir où voter. Sinon, [trouvez votre bureau de vote](https://www.electionsquebec.qc.ca/voter/ou-et-quand-voter/).

Pour connaitre qui se présentent dans votre circonscription ainsi que ses enjeux spécifiques, [cherchez votre circonscription](https://www.electionsquebec.qc.ca/cartes-electorales/circonscriptions-provinciales/).

### La Boussole électorale

![](./assets/images/boussole.jpg)

La Boussole électorale est un outil développé par des politologues pour vous aider à comparer vos opinions avec celles des partis.

<div class="grid" markdown>
![](./assets/images/boussole-result1.png){ data-zoom-image }

![](./assets/images/boussole-result2.png){ data-zoom-image }
</div>

[boussole.radio-canada.ca](https://boussole.radio-canada.ca/){ .md-button .md-button--primary }



!!! info "Le menu arrive ici"
    Le menu titre → jeu → fin était prévu à la S5; il a été déplacé ici, où il retrouve les transitions de scènes. Un menu, c'est un `SceneManager` avec des boutons — autant voir les deux ensemble.

!!! tip "Où tu devrais être rendu"
    Ton projet Unity existe, il est sur GitHub, ta zone 1 se traverse en greybox.

    **Cette semaine :** ton personnage prend vie — au moins trois états détectés et rendus visibles — et tu montes ta cinématique.

    ⏭️ **La semaine prochaine, c'est le jalon 1.** Tes **trois** zones doivent être traversables et tes **trois** portes doivent fonctionner. Si les zones 2 et 3 n'existent pas encore, c'est cette semaine qu'elles se greyboxent — pas la veille.


<!-- ## Déroulement de la séance

| Temps | Activité |
|---|---|
| 0h00 – 1h10 | Animator et machine à états |
| 1h10 – 1h25 | Pause |
| 1h25 – 2h15 | Cinemachine et le 2.5D |
| 2h15 – 2h50 | Transitions de scènes et Timeline |
| 2h50 – 3h35 | Atelier | -->

## Bloc 1 — Les états du personnage

### Tu sais déjà animer

### Trois principes d'animation qui changent tout

### Les 3 pièces de l'animation Unity

### Du T-pose Synty au personnage animé : le rigging Mixamo

!!! note "Reporté du cours 3"
    Au [cours 3](./cours03.md), le personnage Synty a simplement remplacé le mannequin gris : il glisse en T-pose. C'est ici qu'on lui donne un **squelette** (auto-rigger [Mixamo](https://www.mixamo.com)), un **avatar humanoïde**, et donc l'accès à toutes les animations humanoïdes — celles des Starter Assets, celles de Mixamo, et plus tard celles des PNJ du [cours 10](./cours10.md).

    Prévoir un **plan B** : Mixamo n'est plus maintenu par Adobe et a déjà connu des pannes de plusieurs jours. Garder des personnages Synty déjà riggés sur le lecteur de classe.

### L'Animator : contrôleur, états, paramètres

Note : Animation + transition (fadetoblack + switchscene)

### La machine à états : le cerveau

### Le Blend Tree : marche → course

### Détecter l'état, puis le montrer

### Les *Animation Events*

### Animer le décor : porte, plateforme, mécanisme

## Bloc 2 — La caméra

### La caméra est un choix de design, pas un réglage

### Cinemachine : la caméra qui se règle au lieu de se programmer

#### Virtual Camera, priorités, *follow* et *look at*

#### *Body* et *aim*

#### *Damping*, *dead zone*, *soft zone*

#### Le Confiner : empêcher la caméra de traverser les murs

#### Changer de caméra par CES

### Orthographique vs perspective

### Le 2.5D

!!! note "Le savoir essentiel « caméra 2D », traité autrement"
    Ce cours est entièrement en 3D. Plutôt qu'une parenthèse 2D artificielle, on couvre le savoir par le **2.5D** : un monde en trois dimensions, mais une caméra et un déplacement contraints sur un plan. C'est comme ça que l'industrie fabrique aujourd'hui la plupart des jeux dits « 2D ».

#### Le *side-scroller* orthographique

#### La vue de dessus

#### L'isométrique

#### Verrouiller un axe de déplacement

#### Le *parallax*, gratuit en 3D

## Bloc 3 — La mise en scène

### Le flux de scènes, en propre

### `SceneManager`, écran de chargement, fondu

### Le menu pause

Mettre le jeu en pause, c'est figer le temps : `Time.timeScale` règle la vitesse à laquelle le temps s'écoule dans Unity.

| Valeur | Effet |
|---|---|
| `1` | Vitesse normale |
| `0.5` | Ralenti |
| `0` | Temps figé : la physique, les animations et tout ce qui dépend de `Time.deltaTime` s'arrêtent |

!!! warning "Ce que `timeScale` n'arrête pas"
    - `Update()` continue d'être appelée : un code qui ne se sert pas de `Time.deltaTime` continue de tourner.
    - L'interface (boutons, survol) reste cliquable, heureusement.
    - Le son continue de jouer. Pour le couper, passer par l'Audio Mixer (snapshot, au cours 7) ou par `AudioListener.pause = true;`.

#### Monter le menu

1. Dans le **Canvas** du niveau, créer un **Panel** nommé `MenuPause`
1. Y ajouter un titre (TextMeshPro) et deux boutons : **Reprendre** et **Accueil**
1. Désactiver `MenuPause` (case à cocher en haut de l'**Inspector**) : il est caché au démarrage

#### Le script

Créer un GameObject vide `GestionPause` et lui ajouter le script suivant :

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

Brancher ensuite les boutons, comme au cours 5 : **On Click ()** > `GestionPause` > `Reprendre ()` pour le premier, `RetourAccueil ()` pour le second.

!!! bug "Le piège classique"
    `Time.timeScale` n'est **pas** remis à `1` au changement de scène. Un retour à l'accueil depuis la pause sans le remettre à `1` donne un jeu qui semble figé au lancement suivant.

!!! tip "Et le curseur ?"
    Le Character controller verrouille la souris au centre (voir l'avertissement du cours 5). Le script la libère en pause et la reverrouille à la reprise. Si la caméra bouge encore pendant la pause, décocher aussi **Cursor Input For Look** dans **Starter Assets Inputs** au même moment.

### La cinématique : Timeline + Cinemachine

### Verrouiller les contrôles pendant la cutscene

### Le *Signal Emitter*

## Pratique

## Devoirs

<!-- Savoirs essentiels touchés (note pour l'enseignant) :

-->

<!--
================================================================
NOTES DE RÉDACTION — à supprimer une fois la séance écrite
================================================================
À rapatrier depuis .archive/ (voir .archive/MIGRATION.md) :
  - .archive/cours10.md  § Tu sais déjà animer
                         § Trois principes d'animation qui changent tout
                         § Les 3 pièces de l'animation Unity
                         § La machine à états : le cerveau
                         § L'état du personnage : détecter, puis montrer
  - .archive/cours09.md  § La caméra est un choix de design
                         § Orthographique vs perspective
                         § Cinemachine
                         § Rappel : le flux de scènes
  - .archive/cours13.md  § Les transitions de scène en douceur
  - .archive/exercices/cours10-animations-et-etats.md
  - .archive/exercices/cours09-camera-hud-et-feedback.md (partie caméra)

À écrire à neuf : Blend Tree, Animation Events, Cinemachine en profondeur
(damping, dead zone, confiner, priority blending), TOUT le bloc 2.5D,
Timeline et Signal Emitter.
================================================================
-->
