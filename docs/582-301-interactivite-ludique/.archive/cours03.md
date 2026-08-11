# Cours 3

*[ETB] : Enhanced Trigger Box
*[URP] : Universal Render Pipeline
*[SFX] : Sound Effects
*[GDD] : Game Design Document

## I don't know what I'm doing, but I made a game (2/2)

Ton monde existe. Aujourd'hui, on **entre dedans** : un personnage qui marche, des surfaces qui ont une couleur, un monde qui fait du bruit, et une fin. À la fin de la séance, tu auras un jeu qui se lance tout seul, en dehors d'Unity.

Ce jeu express est aussi ta **première évaluation** : il se remet au [cours 4](./cours04.md) et vaut 10 % - il mesure exactement ce que tu viens d'apprendre à faire dans Unity.

## Ajouter un personnage jouable

![](./assets/img/street-fighter.gif){.w-50}

Il y a 3 façons de positionner une caméra. Soit elle est **fixe**, soit elle suit le personnage joué (à la **3e personne**), soit elle est à la place de ses yeux (à la **1re personne**).

Bonne nouvelle : on n'écrit pas une ligne de code. Unity fournit un *package* gratuit qui contient les deux contrôleurs, déjà animés et branchés sur la souris et le clavier.

* [Starter Assets: Character Controllers | URP](https://assetstore.unity.com/packages/essentials/starter-assets-character-controllers-urp-267961)

!!! info "À faire une seule fois par projet"

    Le package doit être lié à ton compte Unity (`Add to My Assets` sur la page ci-dessus), puis importé via `Window` > `Package Manager` > `My Assets`.

    Il installe aussi ses deux dépendances : ***Input System*** (lire le clavier/la souris) et ***Cinemachine*** (les caméras intelligentes). Unity redémarrera peut-être : c'est normal.

### Première personne (facile)

- Désactiver « Main Camera »
- Dans `Starter Assets` > `Runtime` > `FirstPersonController` > `Prefabs`, glissez ***NestedParent_Unpack*** sur la scène
- Clic-droit sur l'objet dans la Hierarchy > `Prefab` > `Unpack`, puis sortez son contenu du parent
- Positionnez le joueur **au-dessus** du sol, à ton point de départ
- Play ▶️ : ++w+a+s+d++ pour bouger, ++space++ pour sauter, la souris pour regarder

!!! warning "Il tombe à l'infini ?"

    Le personnage démarre soit **sous** le sol, soit à côté. Remonte-le en `y` et vérifie que le sol a bien un collider (cours 2).

### Troisième personne (moins facile)

La 3e personne, c'est le même personnage **plus une caméra qui le suit**. C'est cette caméra qui demande une étape de plus.

- Dans `Starter Assets` > `Runtime` > `ThirdPersonController` > `Prefabs`, glissez ***NestedParent_Unpack*** sur la scène, puis `Unpack`
- Tu obtiens deux objets : ***PlayerArmature*** (le personnage) et ***PlayerFollowCamera*** (la caméra Cinemachine)
- Sélectionne ***PlayerFollowCamera*** > dans l'Inspector, champ `Follow` : glisse-y l'objet ***PlayerCameraRoot*** (il est **à l'intérieur** de PlayerArmature)
- Désactiver « Main Camera » **seulement si** le prefab en apporte une deuxième - il ne doit rester qu'une caméra active
- Play ▶️

!!! tip "Raccourci officiel"

    Si le montage se défait : `Tools` > `Starter Assets` > `Reset Third Person Controller Armature`. Unity rebranche tout.

!!! danger "Une seule caméra, un seul AudioListener"

    Deux caméras actives = image imprévisible. Deux ***AudioListener*** = avertissement dans la console et son qui déraille. Si Unity chiale, cherche la caméra en trop.

### Le tag `Player`

Sélectionne ton personnage > en haut de l'Inspector, `Tag` : **Player**.

Sans ce tag, aucun ETB ne le verra passer. C'est **le** piège numéro un de la séance, et il coûte des points dans la grille.

## Les prefabs

![](./assets/img/snap.gif){.w-50}

Un **prefab**, c'est un GameObject transformé en **moule** : on le range dans le dossier `Prefabs`, on en dépose autant de copies qu'on veut dans la scène, et **modifier le moule modifie toutes les copies d'un coup**. C'est ce que tu utilises depuis le cours 2 sans le savoir - tous les assets Synty sont des prefabs.

- Ajoute un GameObject vide, nomme-le « Bonhomme »
- Dedans, ajoute 3 sphères empilées (`3D Object` > `Sphere`)
- Glisse « Bonhomme » depuis la Hierarchy vers ton dossier `📁 _MOMO/Prefabs` : le nom devient **bleu**, c'est un prefab
- Dépose-en 4 ou 5 copies dans la scène
- Double-clic sur le prefab pour l'ouvrir en mode édition, change quelque chose, `Save` : **toutes** les copies ont changé

!!! question "Et si je veux qu'une seule copie soit différente ?"

    Tu modifies la copie directement dans la scène : le champ modifié apparaît en **gras**, et cette copie devient une exception (*override*). Pour couper le lien complètement : clic-droit > `Prefab` > `Unpack`.

## Les materials

![](./assets/img/polygon.webp){.w-50}

Tout objet 3D porte un **material** : sa « peinture ». Sans material, Unity applique un gris par défaut - c'est pour ça que ton plancher et tes cubes se ressemblent tous.

Un material URP définit quatre choses utiles tout de suite :

| Paramètre | Ce que ça fait |
|---|---|
| **Base Map** | La **couleur** (ou la texture) de la surface |
| **Metallic** | L'aspect métal (0 = plastique/pierre, 1 = chrome) |
| **Smoothness** | Le **lustre** : mat (0) ou miroir (1). Une flaque d'eau = smoothness haute |
| **Emission** | L'objet **émet** de la lumière : parfait pour signaler une zone importante |

Créer un material prend 20 secondes :

1. Dans `📁 _MOMO/Materials`, clic-droit > `Create` > `Material`. Nomme-le (ex. : `M_Plancher`)
1. Dans l'Inspector, clic sur le carré blanc à côté de ***Base Map*** et choisis une couleur
1. **Glisse le material** depuis le Project directement sur l'objet dans la scène (ou dans la Hierarchy)

!!! tip "Le code de couleurs : de l'affordance gratuite"

    Avant même de décorer, donne un **sens** à tes couleurs : sol neutre, obstacle en rouge, chose importante en jaune vif ou en émission. Le joueur comprend ton niveau sans qu'un mot soit écrit. Les studios font exactement ça dans leurs prototypes - on y reviendra au cours 5.

!!! warning "Un material par usage, pas un par objet"

    Si tes 30 arbres ont chacun leur material, changer la couleur du feuillage prend 30 manipulations. Un seul material partagé = un seul changement.

### Bonus : changer un material en jeu

L'ETB peut modifier une propriété de material au passage du joueur - la porte qui s'allume en vert quand elle se déverrouille, par exemple.

- Sur ton ETB, ajoute la réponse ***Set Material Property***
- `GameObject` : l'objet à repeindre · `Material` : son material
- `Material Property Name` : `_BaseColor` · `Material Property Type` : **Colour** · choisis la nouvelle couleur
- `Change Duration` : mets 1 seconde pour un fondu au lieu d'un claquement

!!! danger "Coche Clone Material"

    Sans `Clone Material`, Unity modifie **le fichier du material dans ton projet** - de façon permanente, même après avoir arrêté le Play.

## Le son

![](./assets/img/ludo.gif){.w-50}

Coupe le son d'un bon jeu : il a l'air mort. On voit le design sonore en profondeur au [cours 8](./cours08.md); aujourd'hui, juste assez pour que ton monde ne soit plus muet.

### Trois pièces à connaître

* **AudioClip** : le fichier son importé (ta matière première, dans `📁 _MOMO/Audio`)
* **AudioSource** : le composant qui **joue** un clip - c'est lui qu'on configure
* **AudioListener** : les « oreilles ». **Une seule par scène**, déjà présente sur ta caméra

Les paramètres d'AudioSource qui comptent aujourd'hui :

| Paramètre | Effet |
|---|---|
| **AudioClip** | Le son à jouer |
| **Play On Awake** | Joue dès le démarrage (oui pour l'ambiance, non pour un effet) |
| **Loop** | Recommence en boucle (musique, ambiance) |
| **Volume** | 0 à 1 - une musique de fond vit autour de **0.3** |
| **Spatial Blend** | **0 = 2D** (partout pareil : musique) · **1 = 3D** (localisé : une cascade qu'on entend en s'approchant) |

### Une ambiance de fond (2D)

- Télécharge un son libre de droits (voir plus bas) et dépose-le dans `📁 _MOMO/Audio`
- Crée un GameObject vide nommé « Ambiance » > `Add Component` > ***Audio Source***
- Glisse ton clip dans `AudioClip`, coche `Play On Awake` et `Loop`, baisse le `Volume` à 0.3
- Play ▶️

### Un son localisé (3D)

- Sélectionne un objet de ton décor (une machine, une fontaine, un feu de camp)
- `Add Component` > ***Audio Source***, ton clip, `Loop` coché
- Monte ***Spatial Blend*** à **1**
- Déplie `3D Sound Settings` et ajuste `Max Distance` (à quelle distance on cesse de l'entendre)
- Play ▶️ : approche-toi, éloigne-toi 👂

### Un son déclenché par un ETB

Notre ETB sait déjà faire ça, sans code :

- Sélectionne ton ETB > dans la liste des réponses, ajoute ***Audio Response***
- `Response Type` : **Sound Effect**
- Glisse ton clip dans `Play Sound Effect`, puis glisse un GameObject dans `Sound Effect Position` (l'endroit d'où le son sortira)
- Play ▶️ : le son se déclenche quand le joueur entre dans la zone

!!! tip "Response Type : AudioSource"

    L'autre mode agit sur une ***Audio Source*** existante : `Play`, `Stop`, `Restart` ou `Change Volume`. C'est comme ça qu'on baisse la musique en entrant dans une zone tendue - ou qu'on la **coupe** juste avant la victoire.

!!! info "Où trouver des sons - et l'obligation de citer"

    * [Freesound](https://freesound.org) · [Kenney Audio](https://kenney.nl/assets?q=audio) · [Pixabay SFX](https://pixabay.com/sound-effects/)

    Deux licences à connaître : **CC0** = fais ce que tu veux · **CC-BY** = libre, **mais tu dois créditer l'auteur**. Note dès maintenant *titre - auteur - lien - licence* : ce sera exigé au projet final.

## La victoire

![](./assets/img/money.gif){.w-50}

Tu as déjà tout ce qu'il faut : au cours 2, l'ETB a fait disparaître un objet, téléporté une sphère et **chargé une autre scène**. Une victoire, c'est exactement ça - une zone qu'on atteint et qui déclenche une réponse.

Le montage minimal :

1. Une **scène de fin** (`Victoire`), créée et sauvegardée dans `📁 _MOMO/Scenes`
1. Les deux scènes ajoutées à la ***Scene List*** (`File` > `Build Profiles`), avec ta scène de jeu en **position 0**
1. Un **ETB** à l'endroit d'arrivée, réponse ***Load Scene*** > `Load Level Name` : le nom **exact** de la scène de fin
1. Le tag `Player` sur ton personnage

!!! warning "Pourquoi il n'y a pas de bouton « Rejouer »"

    Un bouton, c'est une interface (*Canvas*) - on la construit au [cours 9](./cours09.md). Pour l'instant, une scène de fin, c'est une image, du décor et un son. C'est suffisant.

## Compiler ton jeu

![](./assets/img/car-cranking.gif){.w-50}

Jusqu'ici, ton jeu n'existe que dans l'éditeur. **Compiler** (*build*), c'est produire une application autonome (`.exe` / `.app`) que n'importe qui peut lancer **sans Unity**. C'est l'étape qui transforme « mon projet » en « mon jeu ».

- `File` > `Build Profiles` > vérifie ta ***Scene List*** (une scène absente ne peut pas être chargée!)
- Clic sur `Build`
- Choisis un dossier `Builds` **à l'extérieur** du dossier `Assets`
- Attends (c'est long la première fois), puis **lance ton jeu** comme une vraie application 🎉

!!! success "Jalon 0 : tu as fait un jeu"

    Il est minuscule et imparfait, mais il est **complet** : un monde, un personnage, une action, une fin - et il se lance tout seul. Échange ton build avec un voisin et essayez le jeu de l'autre.

!!! note "Et la mise en ligne ?"

    Publier sur [itch.io](https://itch.io), la plateforme des jeux indépendants, viendra plus tard dans la session ([cours 13](./cours13.md)) - avec un build **WebGL** qui se joue directement dans le navigateur. C'est **ton jeu de session** qui sera publié, pas celui-ci.

## Pratique

[Exercice - Le personnage, l'habillage et la victoire :material-arrow-right:](./exercices/cours03-personnage-habillage-victoire.md){ .md-button .md-button--primary }

## La carte des notions : « je n'ai pas tout compris »

Parfait - c'est prévu. Tout ce qu'on vient d'effleurer sera repris en profondeur, morceau par morceau, appliqué à **ton** jeu :

| Tu viens d'effleurer… | On le maîtrisera au… |
|---|---|
| Le rangement et le greybox d'un niveau | **Cours 5** (démarrage du jeu de session) |
| Les materials et le code de couleurs | **Cours 5** (greybox), puis **cours 13** (game feel) |
| Le contrôleur de personnage, sans code | **Cours 6** (programmation, Input System) |
| Les triggers et les conditions | **Cours 7** (interactions, clé/porte) |
| Le son et ses fonctions | **Cours 8** (design sonore, jalon 1) |
| La caméra, les menus, le flux de scènes | **Cours 9** (caméra, HUD, rétroaction) |
| Le build | **Cours 8** (jalon 1), puis **cours 13** (WebGL et itch.io) |

## Et maintenant, TON jeu : le document de conception (GDD)

![](./assets/img/gddbanner.jpg)

Tu viens de fabriquer un jeu sans l'avoir conçu - c'était l'exercice. À partir du cours 5, c'est l'inverse : une seule cible, **ton** jeu, jusqu'à la fin de la session. Et ça commence sur papier.

Le **Game Design Document** (GDD) décrit tous les aspects fondamentaux d'un jeu vidéo. Rédigé durant la phase de conceptualisation, il sert de fondation au développement : c'est lui qui t'évite de partir dans tous les sens (*scope creep*) et qui rend ton jeu **réalisable** en une session.

[Modèle de GDD](https://www.figma.com/fr-fr/communaute/file/1657116644655532636/document-de-conception-gdd){ .md-button .md-button--primary }

!!! question "Est-ce un document définitif ?"

    Non. En cours de route, des idées tombent à l'eau, d'autres s'ajoutent après les phases de test. C'est un document **vivant** - mais il doit garder une base stable, sinon le projet dérive. C'est pourquoi ton GDD sera validé puis **verrouillé** au cours 5.

!!! tip "Pourquoi maintenant, et pas au cours 1?"
    Parce qu'un GDD écrit avant d'avoir touché à Unity est une liste de souhaits. Tu viens de passer deux séances à fabriquer un jeu : tu sais maintenant ce que coûte une porte, un décor, un build. C'est **exactement** ce qu'il faut pour concevoir quelque chose de réalisable.

## Devoirs

<div class="grid grid-1-2" markdown>
  ![](./assets/img/unity6.png){.aspect-4-3}

  <small>Évaluation 1 - Acquis Unity (10 %)</small><br>
  **[Le jeu express](./devoirs/jeu-express.md){.stretched-link .back}**
</div>

<div class="grid grid-1-2" markdown>
  ![](./assets/img/gddbanner.jpg){.aspect-4-3}

  <small>Devoir formatif - Conception</small><br>
  **[Analyse d'un jeu existant](./devoirs/gdd.md){.stretched-link .back}**
</div>

* **Finalise et remets ton [jeu express](./devoirs/jeu-express.md)** - projet + build - **au début du cours 4**
* Fais l'**[analyse d'un jeu existant](./devoirs/gdd.md)** (formatif, ~30 min) : c'est l'échauffement avant de concevoir le tien, et on s'en sert en classe au cours 4
* Fais essayer ton build à quelqu'un (ami, parent, coloc) et note ses 3 premières réactions

## Ressources

* [Starter Assets: Character Controllers | URP](https://assetstore.unity.com/packages/essentials/starter-assets-character-controllers-urp-267961)
* [Documentation Unity : AudioSource](https://docs.unity3d.com/ScriptReference/AudioSource.html)
* [Freesound](https://freesound.org) · [Kenney Audio](https://kenney.nl/assets?q=audio) · [Pixabay SFX](https://pixabay.com/sound-effects/)

## Savoirs essentiels touchés

Déplacement dans l'environnement virtuel, intégration d'images dans l'environnement virtuel, intégration de médias sonores, détection de collisions pour le déclenchement d'événements, transitions de scènes, compilation de l'application.
