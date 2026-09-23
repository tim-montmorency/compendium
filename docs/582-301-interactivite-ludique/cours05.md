# Cours 5

*[HUD]: Head-up display
*[MVP]: Minimum Viable Product
*[CES]: Collider Event System
*[MSBAF]: Make Something Bad As Fast (as possible)ç
*[N2H]: Nice 2 Have

[STOP]

## Retour sur Protolude

![](./assets/img/third-person-rigged.png){.w-100}

- **Scènes** : Bien nommer les scènes et supprimer/déplacer les scènes qui ne font pas parti du projet.

  > Exemple : Menu, Level 1, Level 2, Game Over, Level Select, etc.

- **Build settings** : Ne pas oublier d'ajouter les scènes dans les Build Settings pour que les transitions fonctionnent.

  - File > Build profile 
  - Cliquer sur « Scene List »
  - Glisser les scènes de votre jeu dans la section « Scene List »

- **Structure de fichier** : Bien structurer vos dossiers et fichiers de projet sous _

  ```txt 
    📂 Assets
    ├── 📂 _
    │    ├── 📁 Animations
    │    ├── 📁 Audio
    │    ├── 📁 Fonts
    │    ├── 📁 Materials
    │    ├── 📁 Prefabs
    │    ├── 📂 Scenes
    │    └── 📁 Scripts
    └── ...
  ```

- **Murs invisibles** : N'utiliser les murs invisibles qu'en dernier recours. Prioriser l'utilisation d'assets (montagnes, bâtiments, etc.) pour délimiter le monde.
- **Homogénéité** : Maintenir une constance visuelle, un contraste trop fort entre une zone très travaillée et une zone vide donne une impression d'inachèvement. Faire plus petit, mais mieux.
- **Principes de design** 
  - Gérer l'espace dans votre Level Design pour laisser le niveau « respirer ».
  ![](./assets/img/5af200_6706e29a02b64ed38eb2fb3df8840389~mv2.avif){.w-33 data-zoom-image}
  ![](./assets/img/protolude-example-affordance2.png){.w-33 data-zoom-image}
  
- **Affordance** : Assurer une motivation claire pour le joueur : il ne suffit pas de placer des objets et d'espérer qu'il devine quoi en faire.
  
  ![](./assets/img/protolude-example-affordance.png){.w-33 data-zoom-image}
  
- **Langue** : Rédiger les textes en français, à moins d'avoir spécifiquement prévu un jeu multilingue.
- **Qualité** : Bien placer le personnage au niveau du sol au démarrage de la scène.
- **Créativité**
  
  ![type:video](./assets/video/protolude-example-creativite.webm){.w-33 .h-auto}

- **Concernant l'IA et les CES** ...

## Grayboxing

![type:video](./assets/video/ao-city-camera-transitions-test-trim-new-1.mp4){.h-auto}

Équivalent au _wireframe_ en Web, le _greyboxing_ (ou _blockout_) sert à créer une version simplifiée d'un environnement en utilisant des formes géométriques. Ainsi, on peut tester rapidement : 

- **L'agencement spatial** (_Layout_) : Placement des murs, des portes, des points d'apparition des ennemis et des zones de couverture.
- **L'échelle et les proportions** (_Scale_) : C'est le rapport de taille entre le personnage et l'environnement.
- **L'orientation et le déplacement** (_Navigation_) : C'est la façon dont le joueur lit l'espace et s'y déplace. On teste si le chemin principal est intuitif sans avoir besoin de panneaux indicateurs, si les joueurs se perdent ou tournent en rond et si les déplacements sont fluides sans se coincer dans les angles du décor.
- **Le rythme et la fluidité** (_Gameplay Flow_) : On évalue le temps de trajet entre deux points d'intérêt. On s'assure qu'il n'y a pas de temps morts ennuyeux.

![](./assets/img/jack-taylor-stocks-subway-5_11zon-1024x477.webp){data-zoom-image .w-25}
![](./assets/img/greyboxing_stage01.jpg){data-zoom-image .w-10}
![](./assets/img/greyboxing_stage02.jpg){data-zoom-image .w-10}
![](./assets/img/greyboxing_stage03.jpg){data-zoom-image .w-10}

### ProBuilder

<figure markdown>
![](./assets/img/tunic-probuilder.jpg){data-zoom-image .w-66}
<figcaption markdown>[Tunic](https://www.gamedeveloper.com/business/how-tunic-weaves-wondrous-unknowable-worlds-inspired-by-inscrutable-nes-manuals)</figcaption>
</figure>

- Dans ***Package Manager*** cliquer sur ***Unity Registry***
- Chercher ***ProBuilder*** et cliquer sur "Install"

<!-- ProBuilder (Unity Registry) - Polybrush (Unity Registry) -->

## HUD et menu

<figure markdown>
![](./assets/img/hud-diablo.webp){data-zoom-image .w-100}
<figcaption class="small">1-Enemy Information, 2-Location and Time, 3-Minimap, 4-Objectives, 5-Party, 6-Health, 7-Potion Charges, 8-Experience Bar, 9-Hotbar, 10-Dodge Charges, 11-Resource Bar, 12-Unspent Skill Points, 13-Chat Window</figcaption>
</figure>

Ressources : 

- [Itch.io](https://itch.io/game-assets/free/tag-user-interface)
- [Kenney.nl](https://kenney.nl/assets/tag:interface)
- [Unity Asset Store](https://assetstore.unity.com/)

### Canvas et EventSystem

Dans la `Hierarchy`, clic-droit > `UI` > **Canvas**.

Deux objets apparaissent :

- **Canvas** c'est le panneau où vivent tous les éléments d'interface. Pour voir son contour, ne pas oublier d'activer les options : ![](./assets/img/view-options-btn.png), puis affichez les _Gizmos_ ![](./assets/img/gizmos-btn.png)
- **EventSystem** : créé automatiquement, c'est lui qui détecte les clics. Ne jamais le supprimer.

  !!! tip "Éditer confortablement"

      Le Canvas est immense par rapport à la scène 3D. Basculer la vue en **2D** : ![](./assets/img/view-options-2d.png)

!!! note "Bonne pratique"

    Sur le Canvas, dans le composant `Canvas Scaler` :

    - `UI Scale Mode` > **Scale With Screen Size**
    - `Reference Resolution` > **2560 × 1440**

### Panel

Un _Panel_ c'est simplement une couche (layer) qui comprends soit une image, soit couleur. 

Ça peut aussi être simplement un conteneur pour des éléments du UI.

Par défaut, ça utilise une image qu'on peut facilement retirer en choisissant "None" au champ _Source Image_.

### TextMeshPro

Dans la `Hierarchy`, clic-droit sur le Canvas > `UI` > **Text - TextMeshPro**.

À la première utilisation dans le projet, la fenêtre **TMP Importer** s'affiche : cliquer sur **Import TMP Essentials**, puis fermer la fenêtre. Les *Examples and Extras* ne sont pas nécessaires.

#### Utiliser sa propre police

1. Glisser le fichier `.ttf` dans `Project`, sous `Assets/_/Fonts`
2. `Window` > `TextMeshPro` > **Font Asset Creator**
3. Glisser la police dans le champ **Source Font**
4. `Character Set` > **Extended ASCII** (nécessaire pour les accents)
5. `Render Mode` > **SDFAA** (simule une police vectorielle)
6. Cliquer sur **Generate Font Atlas**, puis **Save** dans `Assets/_/Fonts`
7. Glisser le nouveau **font asset** (le F bleu ![](./assets/img/font-asset-icon.png){.rounded-0}) dans le champ `Font Asset` du texte

!!! warning "Licences"

    Une police téléchargée n'est pas forcément libre de distribution. [Google Fonts](https://fonts.google.com/) est sûr, mais ailleurs (ex. : [Dafont](https://www.dafont.com/)), il faudra vérifier la licence et la citer dans les crédits.

!!! tip "Réglages utiles"

    Dans le panneau _Inspector_ du texte :
     
    - _Auto Size_ : le texte s'adapte au cadre
    - Alignement horizontal et vertical
    - _Outline_/_Underlay_ si par exemple un texte blanc sur un ciel clair est illisible sans contour

#### À propos du câdre

![](./assets/img/unity-aspect-ratio.png){data-zoom-image .w-33}

Dans le panneau "Game", on peut sélectionner la résolution dans laquelle on planifie faire notre jeu. L'option "Free  Aspect" est un peu l'équivalent responsive, mais pour un jeu vidéo, c'est rarement pertinent.

### Le Rect Transform

Les enfants du canvas n'ont pas de **Transform** comme les autres game objects, ils ont un **Rect Transform** avec un concept d'ancrage qu'il faudra maitriser. 

![](./assets/img/rect-transform.png){data-zoom-image .w-25}

<p class="codepen aspect-1-1" data-theme-id="50173" data-height="300" data-pen-title="Unity Rect Transform" data-version="2" data-default-tab="result" data-slug-hash="YPZZgKm" data-user="tim-momo" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/editor/tim-momo/pen/01a0c9e6-2f02-7668-b2ed-e184dceceb90">
  Unity Rect Transform</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

### Le bouton

Dans la `Hierarchy`, clic-droit sur le Canvas > `UI` > **Button - TextMeshPro**.

Le bouton c'est essentiellement un panel qui contient un textmesh pro, mais il permet de faire en plus des actions.

En effet, le composant "Button" expose un événement **`On Click ()`** dans le panneau _Inspector_. On y branche des actions :

1. Cliquer sur le plus `+` sous `On Click ()`
1. Glisser n'importe quel GameObject
1. Choisir `GameObject` > `SetActive (bool)`. Ça fait l'équivalent du CES quand on active/désactive un Game Object.

![](./assets/img/btn-action.png){data-zoom-image .w-50}

On peut aussi déclencher des scripts ;)

## Scripts

![](./assets/img/codin.gif){.w-100}

Les scripts en Unity s'écrivent avec le langage de programmation C# (prononcé «See Sharp»).

Les scripts ont une extension `.cs` et doivent toujours être nommé pareille que le nom donné à la classe : 

```c# title="NomDeMonScript.cs"
using UnityEngine;

public class NomDeMonScript : MonoBehaviour
{

    void Start()
    {
    // (facultatif)
    // La méthode Start est appelée une seule fois avant la méthode Update 
    }

    void Update()
    {
    // (facultatif)
    // La méthode Update est appelée à chaque frame !
    }
}
```

### Variables

En C#, on n'écrit pas de `let` avant une variable. On spécifie son type : 

| Type     | Déclaration          | Assignation               |
| :------- | :------------------- | :------------------------ |
| `int`    | `int age;`           | `age = 25;`               |
| `float`  | `float vitesse;`     | `vitesse = 5.5f;`         |
| `bool`   | `bool estActif;`     | `estActif = true;`        |
| `string` | `string nom;`        | `nom = "Montmorency";`    |
| `Vector2` | `Vector2 vec2;` | `vec2 = new Vector2(1f, 2f);` |
| `Vector3` | `Vector3 vec3;`| `vec3 = new Vector3(4f, 22f, 1f);` |

!!! note "Un `f` après le nombre désigne un float"

Exemple : 

```c#
using UnityEngine;

public class Exemple : MonoBehaviour
{
    bool estActif;

    void Start()
    {
        estActif = true;
    }
}
```

### Ajouter un script

99.99% du temps, vous ajouterez un composant script sur un GameObject.

1. Dans le panneau _Hierarchy_, clic-droit puis "Create Empty"
1. Renommer le GameObject « Exemple »
1. Dans _Inspector_, Add Component > New Script, nommer "MonScript"
1. Sauvegarder le fichier `MonScript.cs` dans Assets > _ > Scripts

### Éditer un script

1. Double cliquer sur `MonScript.cs` dans _Inspector_<br>![](./assets/img/exemple-monscript.png){.w-10 data-zoom-image} (Un logiciel d'édition de code devrait s'ouvrir, Visual Studio ou VsCode)
1. Supprimer la méthode `Start()` et déclarez à sa place une variable `int`
1. Dans `Update()` incrémenter la variable de `1`.
1. Afficher le résultat de la variable dans la console avec la commande :<div markdown> 
```c#
Debug.Log("Texte ou autre chose ;)");
```
</div>
1. Play et observe la console Unity !

  ??? quote "Solution"

      ```c#
      using UnityEngine;

      public class MonScript : MonoBehaviour
      {

          int myVariable = 0;

          // Update is called once per frame
          void Update()
          {
              myVariable++;
              Debug.Log(myVariable);
          }
      }
      ```

### Déclencher un script | Button

1. Modifier le script en changeant `void Update()` par `public void TimMomo()`. Cette méthode, n'étant pas reconnue par Unity, ne s'activera que lorqu'on le déclenchera. Déclenchons la au clic du bouton dans un canvas.
1. Clic sur le bouton du Canvas
1. Dans _Inspector_, sous Button, clic sur + sous `On Click ()`
1. Glisse le Game Object `Exemple` dans le champs `None (Object)`
1. Clic sur "No Function" > "MonScript" > "TimMomo ()"
1. Play, clic sur le bouton et regarde dans la console

!!! warning "Character controller 💔 Button"

    Quand on utilise un Character controller (première et troisième personne), ça bloque la souris au centre de l'écran et cache le curseur. Ce qui ne permet pas d'interagir avec le canvas.

    À la troisième personne, on peut désactiver le controle de la caméra avec la souris :

    1. Sous "PlayerArmature", dans la composante "Starter Assets Inputs", décocher les cases "Cursor Locked" et "Cursor Input For Look"

    Maintenant on peut cliquer sur les boutons du UI

!!! tip "2.5d"

    Tant qu'à y être, voyons ce qu'on peut configurer pour une scène 2.5D. 
    
    Pour désactiver ++w++ et ++s++

    1. Double-clic sur `Assets`/`Starter Assets`/`Runtime`/`InputSystem`/`StarterAssets`/`Player/Move`
    1. Dans Player > Move, WASD, supprimer les options Up et Down
    1. Clic sur 'Save Asset'

    Pour reculer la caméra du personnage

    1. Dans "PlayerFollowCamera", changer la valeur de "Camera Distance"

    Retirer la perspective

    1. Sur MainCamera du personnage, dans camera > Projection, changer "Perspective" pour "Orthographic"

### Changer de scène

Assurez-vous d'abord que la scène en question est dans la _Scene List_.

```c#
using UnityEngine;
using UnityEngine.SceneManagement;

public class MonScript : MonoBehaviour
{
    public string nomDeLaScene = "Niveau2"; // Nom exact 🤌

    public void ChangeLaScene()
    {
        SceneManager.LoadScene(nomDeLaScene);
    }
}
```

## Trello

![](./assets/img/trello-banner.webp){.w-100}

Kanban, sprint et 🎉

* Semaine 5 | 24 septembre
* Semaine 6 | 1 octobre
* Semaine 7 | 8 octobre 🏃🏻‍♂️ Sprint 1 : Prototype (MVP)
* Semaine 8 | 22 octobre  
* Semaine 9 | 29 octobre 🏃🏻‍♂️ Sprint 2 : Tranche verticale
* Semaine 10 | 5 novembre  
* Semaine 11 | 12 novembre  
* Semaine 12 | 19 novembre 🏃🏻‍♂️ Sprint 3 : Alpha
* Semaine 13 | 26 novembre  
* Semaine 14 | 3 décembre 🏃🏻‍♂️ Sprint 4 : Beta
* Semaine 15 | 10 décembre 🏃🏻‍♂️ Sprint 5 : Oral

!!! tip "2h max"

    Une tâche qui ne se termine pas en deux heures est trop grosse. Il faut la découper. 
    
    « Faire la zone 2 » n'est pas une tâche. Il faut être précis. Exemple : 

    - « Greyboxing | Zone 2 »
    - « Positionner les assets de végétation dans la forêt | Zone 2 »
    - « Programmer le point d'apparition des 3 ennemis | Zone 2 »
    - « Configurer l'éclairage de la grotte | Zone 3 »

!!! tip "Chemin critique (MVP)"

    [MSBAF](https://might-could.com/essays/the-5-types-of-creative-block-and-how-to-break-through/)

    - Ajouter dans le planning les tâches critiques
    - Catégoriser les souhaits (N2H)

<!-- Applications similaires à Trello : [GitHub Project](https://docs.github.com/fr/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects), [kan.bn](https://kan.bn/) -->
<!-- https://www.youtube.com/watch?v=N9RGoTFeTsI -->

## Devlog