# Cours 6

*[FOV]: Field Of View
*[CAQ]: Coalition Avenir Québec
*[PLQ]: Parti libéral du Québec
*[QS]: Québec solidaire 
*[PQ]: Parti québécois
*[PCQ]: Parti conservateur du Québec
*[FPS] : First Person Shooter
*[TPS] : Third Person Shooter
*[CES]: Collider Event System




## Élections Québec 2026

![](./assets/img/elections-quebec-2026.jpg){.w-100}

<figure markdown>
![](./assets/img/campagne-elections-quebec-2026-frechette-milliard-ghazal-pspp-duhaime.webp){ data-zoom-image }
<figcaption class="small" markdown>Christine Fréchette (CAQ) (Première ministre actuellement), Charles Milliard (PLQ), Ruba Ghazal (QS), Paul St-Pierre Plamondon (PQ), Éric Duhaime (PCQ)</figcaption>
</figure>

<https://youtube.com/shorts/zBaIvM0QPx8?si=FQUmcdKig23fpSo3>

### La Boussole électorale

La [Boussole électorale](https://boussole.radio-canada.ca/) est un outil développé par des politologues pour vous aider à comparer vos opinions avec celles des partis.

![](./assets/img/boussole-result1.webp){ data-zoom-image .w-33}

[![](./assets/img/bandeau-boussole-electorale.jpg){.w-75}](https://boussole.radio-canada.ca/)

### Où quand comment ?

Lundi le 5 octobre 2026

Vous devriez avoir reçu votre carte d’information de l’électeur pour savoir où voter. Sinon, [trouvez votre bureau de vote](https://www.electionsquebec.qc.ca/voter/ou-et-quand-voter/).

Pour connaitre qui se présentent dans votre circonscription ainsi que ses enjeux spécifiques, [cherchez votre circonscription](https://www.electionsquebec.qc.ca/cartes-electorales/circonscriptions-provinciales/).

## Asset Store et Git

![](./assets/img/assetstore-broken.jpg)

Avant d'installer un asset que vous testez pour la première fois, faites **toujours** push. Certains assets peuvent corrompre un projet !

Pour éviter de devoir recommencer inutilement depuis une vieille version, assurez-vous de faire des commit/push régulièrement.

[STOP]

## Character controller

![](./assets/img/Still-of-a-multi-perspective-video-taken-during-a-game-run-showing-the-scene-from.webp){ .w-100 data-zoom-image } 

!!! tip "Ajuster les options en mode Play permet de tester sans briser les configurations"

### Effet humain 💃

![type:video](./assets/video/humanizer.webm){.w-50 .h-auto}

Par défaut, il y a un petit effet de respiration qui déplace légèrement la caméra pour un effet plus humain.

Pour le désactiver, dans **PlayerFollowCamera**, dans **Cinemachine Camera** > **Procedural Components** > **Noise**, choisir None.

### Ajustements généraux

![type:video](./assets/video/character-controller-speed.webm){.w-50 .h-auto}

PlayerArmature (TPS) ou PlayerCapsule (FPS) :

- **Move Speed**
- **Sprint Speed**
- **Jump Height**
- **Gravity**

Autres options à regarder 

- **Damping** : La vitesse de réponse de la caméra quand on est en mouvement
- **Shoulder Offset** : Repositionne la caméra à partir du personnage

### Champ de vision (FOV) 👀

![](./assets/img/Call-Of-Duty-Modern-Warfare-II-(2022)-DDOS-Field-Of-View-Ranges.avif){.w-50 data-zoom-image}

PlayerFollowCamera : 

- **Cinemachine Camera** > **Lens** : changer la valeur

### 2.5D

![type:video](./assets/video/2.5d.webm){.h-auto .w-50}

<!-- Désactiver ++w++ et ++s++

1. Double-clic sur **Assets/Starter Assets/Runtime/InputSystem/StarterAssets/Player/Move**
1. Dans **Player > Move**, WASD, supprimer les options **Up** et **Down**
1. Clic sur **Save Asset** -->

Reculer la caméra : **PlayerFollowCamera** > **Camera Distance**

Retirer la perspective : **MainCamera** du personnage, **Camera** > **Projection** changer **Perspective** pour **Orthographic**

Désactiver :arrow_up: et :arrow_down: : sur **PlayerArmature**, ajouter ce script : 

```c# title="Controles25D.cs"
using UnityEngine;
using StarterAssets;

[DefaultExecutionOrder(-100)] // S'exécute avant le ThirdPersonController
public class Controles25D : MonoBehaviour
{
    StarterAssetsInputs input;
    void Start() { input = GetComponent<StarterAssetsInputs>(); }
    void Update() { input.move.y = 0; }
}
```

### Vue d'oiseau

![type:video](./assets/video/topdown.webm){.w-50 .h-auto}

PlayerArmature : 

- **Camera Angle Override** = 65
- Cocher **Lock Camera Position** (désactive la gestion de la caméra par la souris)

### Vue isométrique

![type:video](./assets/video/isometric.mov){.w-50 .h-auto}

Une vue isométrique c'est quand la caméra suit le personnage d'un angle de 30° vers le bas et 45° en diagonale, sans perspective.

- Retirer la perspective : **MainCamera** du personnage, **Camera** > **Projection** changer **Perspective** pour **Orthographic**

PlayerArmature : 

- Rotation Y = 45
- Cocher **Lock Camera Position**
- Camera Angle Override : `35.264`

PlayerFollowCamera : 

- Lens > Orthographic Size = 6
- **Cinemachine Camera** > **Procedural Components** > **Noise** = None
- Shoulder Offset = 0, 0, 0
- Vertical Arm Length = 0
- Camera Distance = 20
- Avoid Obstacles = décoché

### Double saut 🦘

![type:video](./assets/video/xtra-jumps.webm){.w-50 .h-auto}

- En TPS, ajouter le script [ExtraJumpsTPS.cs](./extra/ExtraJumpsTPS.cs) sur **PlayerArmature**
- En FPS, ajouter le script [ExtraJumpsFPS.cs](./extra/ExtraJumpsFPS.cs) sur **Player Capsule**.

!!! question "Et si on branchait le CES 🤔 !?"

    Woah ! Bonne idée !

    - Dans un Trigger Cube, ajoute une Action de type Invoke Events.
    - Ensuite, glisse le PlayerArmature (en TPS) dedans
    - Comme fonction, choisi ExtraJumpsTPS, puis AjouterSaut
    - Configure à 1 (ça ajoutera un saut de plus !)

## Tir

![](./assets/img/doom.avif){data-zoom-image}


```c# title="Tir.cs"
using UnityEngine;
using UnityEngine.InputSystem;

public class Tir : MonoBehaviour
{
    public GameObject bulletPrefab;
    public Transform fireStartingPoint;
    public float speed = 20f;

    void Update()
    {
        if (Mouse.current.leftButton.wasPressedThisFrame)
        {
            Quaternion direction = Quaternion.Euler(Camera.main.transform.eulerAngles.x, transform.eulerAngles.y, 0);
            GameObject bullet = Instantiate(bulletPrefab, fireStartingPoint.position, direction * bulletPrefab.transform.rotation);
            bullet.GetComponent<Rigidbody>().AddForce(direction * Vector3.forward * speed, ForceMode.Impulse);
            Destroy(bullet, 3f);
        }
    }
}
```


1. Dans **Assets > _ > Scripts**, ajouter le script ci-dessus (**Create > Scripting > MonoBehavious Script**)
1. Créer un prefab pour le projectile
  - Créer une Sphere (**GameObject > 3D Object > Sphere**)
  - Réduire son échelle (ex. : `0.2`)
  - Ajouter un Rigidbody : 
    - **Collision Detection** = **Continuous Dynamic**
    - Mass = Environ `0.1`
  - Déplacer le tout dans un Empty Object.
  - Puis déplacer le Empty Object dans le dossier **Assets > _ > Prefabs**
  - Renommer le prefab "Bullet"
  - Supprimer la balle du panneau _Hierarchy_
  - Appliquer un nouveau Tag au prefab (ex. : Projectile)
1. Créer le départ du projectile
  - En FPS, créer un **Empty Object** comme enfant de **PlayerCameraRoot**
  - En TPS, créer un **Empty Object** comme enfant de **PlayerArmature**
  - Renommer **Empty Object** par « ShootStart »
  - Le déplacer de sorte à ce qu'il soit un peu **devant** le personnage
1. Appliquer le script
  - Ajouter sur **PlayerCapsule** (FPS) ou **PlayerArmature** (TPS)
  - Glisser le prefab Bullet et le ShootStart dans les champs du panneau _Inspector_

!!! tip "Ajustement"

    En TPS, ajouter un peu de **Shoulder Offset** (X) sur **PlayerFollowCamera** aide à mieux voir la trajectoir du projectile.

## Viseur

![](./assets/img/crosshair-example.png)

Qui dit tir, dit Viseur (_Crosshair_) ! Même sans tir, ça aide à orienter le regard.

Pour un FPS, rien de nouveau. Il suffit d'ajouter un canvas avec au centre, le dit crosshair ! Voici plein d'images utiles pour cela : <https://kenney.nl/assets/crosshair-pack>.

Pour un TPS, le crosshair est effectivement une option, mais il est alors préférable d'utiliser le script qui attache la 

## Retour sur les UI

### Technique _9 slicing sprite_
 
<div class="grid" markdown>
<div markdown>![type:video](./assets/video/9slice-simple.webm){.w-100 .h-auto}</div>

<div markdown>![type:video](./assets/video/9slice-sliced.webm){.w-100 .h-auto}</div>
</div>

La technique du [_9-slice scaling_](https://en.wikipedia.org/wiki/9-slice_scaling) permet d'étirer une image matricielle sans la déformer ni la pixelliser. Elle est principalement utilisée pour les éléments d'interface (UI) comme les boutons ou les boîtes de dialogue.
 
1. Trouver une image de bouton carré sur [Kenney.nl](https://kenney.nl/assets/tag:interface)<br>![](./assets/img/button_square_depth_flat.png){data-zoom-image .w-10}
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

1. Clic sur un **bouton** dans le canvas
1. Drag le sprite du panneau **Project** vers **Image > Source Image**
1. **Image type** = **Sliced**

## Événement déclenché clavier

- Créer un Empty Object
- Appliquer un composant : Condition Watcher (disponible via CES)

Ça se configure de la même manière qu'avec un prefab Trigger. On peut ainsi déclencher des actions quand la condition est respectée.

## Splines

![](./assets/img/spline.avif){.w-100}

1. Dans **Package Manager** cliquer sur **Unity Registry**
1. Chercher **Splines** et cliquer sur **Install** (il se peut que ce soit déjà installé)

### Création du Spline

![](./assets/img/create-spline.png){.w-50 data-zoom-image}

Dans le panneau Scene, utiliser l'option "Create Spline" situé dans la barre d'outils de gauche.

### Loft Road Behaviour

![](./assets/img/spline-road.png){.w-50 data-zoom-image}

Pour afficher un Spline sous forme de route : 

1. Créer un Spline
1. Ajouter le composant "Loft Road Behaviour" sur le Spline

Pour augmenter la largeur : 

- Ajouter un élément dans Widths
- Utiliser l'outil Width dans la barre d'outil :<br>![](./assets/img/loft-road-width.png){data-zoom-image .w-10}

!!! question "Pas de Collider ?"

    Non par défaut il n'y a pas de collider. 
    
    Pour en ajouter un, ajoutez [SplineRoadBehaviour.cs](./extra/SplineRoadBehaviour.cs) à vos scripts (Assets > _ > Scripts) et glissez le sur l'inspector du spline en question. Ça va en créer un.

<!-- https://www.youtube.com/watch?v=IJbH5OZa_is -->

### Spline animate

![type:video](./assets/video/splines.webm){.w-50 .h-auto}

Pour créer une animation qui suit le Spline : 

1. Créer un Spline
1. Sélectionner le GameObjet à animer
1. Ajouter un Composant "Spline Animate"
1. Glisser le Spline créé dans le champ "Spline"
1. Ajuster les paramères au besoin

!!! tip "À essayer"

    - "Spline instanciate" : permet de créer des instance le long d'un spline
    - "Spline extrude" : permet d'utiliser un Spline pour en faire une forme (ex. : tuyaux)

    <!-- https://www.youtube.com/watch?v=XDjmzHPdYBQ -->

## Animation par _keyframe_

![type:video](./assets/video/animation-start.webm){.w-100 .h-auto .rounded}

### Créer un clip

1. Ajouter la fenêtres Animation à votre interface (placez la idéalement au même endroit que la console).<br>![](./assets/img/window-animation.png){data-zoom-image .w-10} ![](./assets/img/animation-panel.png){data-zoom-image .w-10} 
1. Cliquer sur l'élément à animer
1. Dans le panneau Animation, cliquer sur **Create**
1. Nommer l'animation (ex. : `AvionAnimation.anim`) et l'enregistrer sous **Assets > _ > Animations**

### Configurer l'animation (_Dopesheet_)

1. Pour faciliter la gestion de l'animation, cliquer sur le bouton d'enregistrement rouge <br>![](./assets/img/animation-record.png){data-zoom-image .w-10}
1. Appliquer une moditication sur l'objet dans le panneau Scene (ex.: position, rotation et scale)
1. Déplacer le curseur sur la ligne du temps
1. Appliquer d'autres modifications
1. Déplacer le curseur sur la ligne du temps 
1. Appliquer d'autres modifications et ainsi de suite.
1. Cliquer sur le bouton d'enregistrement à nouveau pour arrêter d'enregistrer
1. Ajuster l'animation avec les curves au besoin ![](./assets/img/animation-curves.png){data-zoom-image .w-10}

### Animator

1. Un nouveau panneau devrait apparaitre à côté de Scene et Game. S'il n'y est pas, Window > Animation > Animator
1. Cliquer sur l'animation, pour changer sa vitesse au besoin
1. Double-cliquer sur l'animation pour activer ou désactiver le mode _Loop_

<!-- https://www.youtube.com/watch?v=78IrmMtByAU -->

## Projet final

* Semaine 6 | 1 octobre ⭐️ Aujourd'hui
* Semaine 7 | 8 octobre 🏃🏻‍♂️ Sprint 1 : Prototype
* <span class="opacity-50">Semaine 8 | 22 octobre</span>
* <span class="opacity-50">Semaine 9 | 29 octobre 🏃🏻‍♂️ Sprint 2 : Tranche verticale</span>
* <span class="opacity-50">Semaine 10 | 5 novembre</span>
* <span class="opacity-50">Semaine 11 | 12 novembre</span>
* <span class="opacity-50">Semaine 12 | 19 novembre 🏃🏻‍♂️ Sprint 3 : Alpha</span>
* <span class="opacity-50">Semaine 13 | 26 novembre</span>
* <span class="opacity-50">Semaine 14 | 3 décembre 🏃🏻‍♂️ Sprint 4 : Beta</span>
* <span class="opacity-50">Semaine 15 | 10 décembre 🏃🏻‍♂️ Sprint 5 : Oral</span>

### Trello

Propositions de cartes

- Ajouter la capacité de tirer un projectile
- Configurer le comportement du personnage controllable
- Ajouter une animation pour x
- Ajouter une animation pour y
- Ajouter une animation pour z
