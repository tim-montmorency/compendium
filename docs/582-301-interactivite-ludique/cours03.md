# Cours 3

*[ETB]: Enhanced Trigger Box
*[URP]: Universal Render Pipeline
*[FBX]: Filmbox — format d'échange de modèles 3D
*[GDD]: Game Design Document

## Personnage et progression

![](./assets/img/street-fighter.gif){.w-50}

Ton monde tient debout, mais personne n'y habite. Aujourd'hui : un personnage contrôlable, une caméra qui le suit, et surtout un **système de progression** — de quoi empêcher le joueur d'aller où il veut, quand il veut.

Le tout **sans écrire une ligne de code**. C'est possible parce que le [Enhanced Trigger Box](./cours02.md) sait déjà tout faire : mémoriser une variable, la vérifier ailleurs, ouvrir une porte. On code au [cours 5](./cours05.md) — pas parce que c'est nécessaire, mais parce que c'est utile.

## Ajouter un personnage jouable

Il y a trois façons de placer une caméra. Soit elle est **fixe**, soit elle suit le personnage (**3e personne**), soit elle est à la place de ses yeux (**1re personne**).

Unity fournit un package gratuit qui contient les deux contrôleurs, déjà animés et branchés sur le clavier et la souris.

* [Starter Assets: Character Controllers | URP](https://assetstore.unity.com/packages/essentials/starter-assets-character-controllers-urp-267961)

!!! info "À faire une seule fois par projet"

    Le package doit d'abord être lié à ton compte Unity (`Add to My Assets` sur la page ci-dessus), puis importé via `Window` > `Package Manager` > `My Assets`.

    Il installe aussi ses deux dépendances : ***Input System*** (lire le clavier et la souris) et ***Cinemachine*** (les caméras intelligentes). Unity redémarrera peut-être : c'est normal.

### Première personne

- Désactive « Main Camera »
- Dans `Starter Assets` > `Runtime` > `FirstPersonController` > `Prefabs`, glisse ***NestedParent_Unpack*** sur la scène
- Clic-droit sur l'objet dans la Hierarchy > `Prefab` > `Unpack`, puis sors son contenu du parent
- Positionne le joueur **au-dessus** du sol, à ton point de départ
- Play ▶️ : ++w+a+s+d++ pour bouger, ++space++ pour sauter, la souris pour regarder

!!! warning "Il tombe à l'infini?"

    Le personnage démarre soit **sous** le sol, soit à côté. Remonte-le en `y` et vérifie que ton sol a bien un collider ([cours 2](./cours02.md)).

### Troisième personne

La 3e personne, c'est le même personnage **plus une caméra qui le suit**. C'est cette caméra qui demande une étape de plus.

- Dans `Starter Assets` > `Runtime` > `ThirdPersonController` > `Prefabs`, glisse ***NestedParent_Unpack*** sur la scène, puis `Unpack`
- Tu obtiens deux objets : ***PlayerArmature*** (le personnage) et ***PlayerFollowCamera*** (la caméra Cinemachine)
- Sélectionne ***PlayerFollowCamera*** > dans l'Inspector, champ `Follow` : glisse-y ***PlayerCameraRoot*** (il est **à l'intérieur** de PlayerArmature)
- Play ▶️

!!! tip "Raccourci officiel"

    Si le montage se défait : `Tools` > `Starter Assets` > `Reset Third Person Controller Armature`. Unity rebranche tout.

!!! danger "Une seule caméra, un seul AudioListener"

    Deux caméras actives = image imprévisible. Deux ***AudioListener*** = avertissement dans la console et son qui déraille. Si Unity chiale, cherche la caméra en trop.

!!! note "Cette caméra, on l'explique plus tard"

    Le contrôleur 3e personne embarque une caméra ***Cinemachine*** déjà réglée. Aujourd'hui on l'utilise sans comprendre; on la démonte au complet au [cours 6](./cours06.md) — *damping*, *dead zone*, changement de caméra, cinématiques.

### Le tag `Player`

Sélectionne ton personnage > en haut de l'Inspector, `Tag` : **Player**.

Sans ce tag, **aucun ETB ne le verra passer**. C'est le piège numéro un de la séance, et il coûte des points dans la grille du jeu express.

!!! question "Sur quel objet, exactement?"

    Sur le **parent** — celui qui porte le `CharacterController`. En 3e personne, c'est ***PlayerArmature***, pas le mesh à l'intérieur.

### Un mot sur l'Input System

Tu n'as rien branché et pourtant ++w+a+s+d++ fonctionne. Le package a installé un ***Input Actions*** (`StarterAssets.inputactions`) : une table qui associe des **actions** nommées (Move, Look, Jump, Sprint) à des **touches**.

Double-clique le fichier pour l'ouvrir. Tu peux y ajouter une touche sans code — on s'en servira au [cours 5](./cours05.md). Pour aujourd'hui, sache seulement que ça existe et où ça vit.

---

## La progression : le *gating*

![](./assets/img/gating-banner.webp){.w-100}

### Rappel du cours 1

Au [cours 1](./cours01.md), on a vu le ***gating*** : les prérequis qu'un joueur doit satisfaire pour avancer. Ça sert à contrôler le **rythme**, à **enseigner** les mécaniques, à maintenir le **défi** et à alimenter la **récompense**.

C'était de la théorie. Aujourd'hui, chaque type de *gate* devient un montage concret dans l'ETB.

| Type de *gate* | Exemple | Montage ETB |
|---|---|---|
| **Inventaire** | Trouver la carte bleue | `Player Pref Response` sur la clé → `Player Pref Condition` sur la porte |
| **Économie** | Amasser 3 gemmes | `Player Pref Response` avec la valeur `++` → `Player Pref Condition` *greater than or equal to* `3` |
| **Progression** | Atteindre le niveau 10 | Même chose, avec un pref numérique qui monte |
| **Scénario** | Parler au vieux Kamajī | Un ETB devant le PNJ pose le pref `aParle = 1` |
| **Environnement** | Attendre que le pont bascule | `Transform Condition` sur la rotation du pont |
| **Connaissance** | Comprendre qu'il faut regarder la statue | `Camera Condition` (*Looking At*) sur la statue |
| **Habileté du joueur** | Rester dans la zone 5 secondes | `Condition Time` dans les options de base |
| **Compétence** | Le double saut débloqué | `Modify GameObject` > *Enable Component* sur le script de saut |

!!! success "Le point important de la séance"

    Huit types de *gating* — **huit** — sont réalisables aujourd'hui, à la souris, dans l'Inspector. Le code ne vient pas déverrouiller de nouvelles possibilités : il viendra rendre plus **propre** et plus **réutilisable** ce que tu sais déjà faire.

### Les trois événements d'un trigger

Unity offre trois moments de détection. L'ETB les gère pour toi, mais il faut savoir qu'ils existent :

| Événement | Se déclenche… | Analogie |
|---|---|---|
| **Entrée** | à l'instant où un objet **entre** | la sonnette |
| **Présence** | à **chaque image** tant qu'il est dedans | le détecteur de présence |
| **Sortie** | à l'instant où il **sort** | le « au revoir » du commerce |

Dans l'ETB, la sortie s'active en mettant `After Trigger` à ***Execute Exit Responses*** : une deuxième liste de réponses apparaît. C'est comme ça qu'on fait « la lumière s'éteint quand je quitte la pièce ».

### Les conditions techniques

Rien ne marche si l'une de ces quatre choses manque :

1. Les deux objets ont un **Collider**
2. Celui qui détecte a **Is Trigger** coché (l'ETB l'a déjà)
3. Au moins un des deux **bouge physiquement** : un `Rigidbody` ou un `CharacterController`. Ton personnage Starter Assets en a un — c'est pour ça que ça fonctionne
4. Le champ **Trigger Tags** de l'ETB contient `Player` — sinon n'importe quel caillou qui roule déclenche ta porte

!!! tip "Debug Trigger Box"

    Coche ***Debug Trigger Box*** dans les options de base : l'ETB écrit dans la Console à chaque fois qu'il est déclenché. Quand rien ne fonctionne, c'est la première case à cocher — elle te dit si le problème est **avant** (rien n'entre) ou **après** (ça entre mais la condition bloque).

### Tags et layers

Deux systèmes d'étiquetage qu'on confond toujours :

| | **Tag** | **Layer** |
|---|---|---|
| Répond à | « Qui es-tu? » | « Avec qui interagis-tu? » |
| Par objet | Un seul | Un seul |
| Sert à | **Identifier** (le champ `Trigger Tags` de l'ETB) | Filtrer la **physique** et ce que la **caméra** voit |
| Exemples | `Player`, `Collectable` | `Ground`, `IgnoreRaycast` |

Créer un tag : Inspector → menu `Tag` → `Add Tag…` → `+` → nomme-le → **reviens sur l'objet et assigne-le**.

!!! danger "Créer ne suffit pas"

    Créer un tag ne l'assigne pas. C'est l'erreur la plus fréquente : le tag existe dans la liste, mais l'objet porte encore `Untagged`.

Les layers, tu les utilises déjà sans le savoir : le champ ***Ground Layers*** de ton personnage Starter Assets dit au détecteur de sol « seul ce qui est sur ce layer compte comme un sol ». Si ton personnage flotte ou refuse de sauter, c'est souvent là.

---

## Le patron clé/porte

![](./assets/img/lockeandkey.webp){.w-50}

Derrière presque tout système de progression de presque tous les jeux se cache la même logique :

```mermaid
graph LR
    A(Ramasser la clé) --> B["aCle = 1"]
    B --> C(Toucher la porte)
    C --> D{"aCle = 1 ?"}
    D -- oui --> E(La porte s'ouvre)
    D -- non --> F(Message d'échec)
```

La ligne `aCle = 1`, c'est **l'état du jeu** (*game state*) : une valeur qui **se souvient** de ce que le joueur a accompli. Toute progression, du plus petit au plus grand jeu, est une collection de valeurs comme celle-là.

« Clé » et « porte » sont des métaphores. Regarde n'importe quel jeu avec cette lunette :

| « Clé » | « Porte » | Jeu type |
|---|---|---|
| La clé du donjon | La porte du boss | *Zelda* — le patron à l'état pur |
| Le double saut débloqué | La corniche trop haute | Metroidvania — la capacité **est** une clé |
| 3 emblèmes ramassés | La statue qui pivote | *Resident Evil* |
| Le boss vaincu | Le pont qui apparaît | à peu près tout |
| L'indice trouvé | Le cadenas à code | *Escape room* |

<div class="grid grid-1-2" markdown>
![Hollow Knight](./assets/img/games/hollow-knight.jpg){data-zoom-image}

Dans [Hollow Knight (2017)](https://store.steampowered.com/app/367520/Hollow_Knight/), la carte entière est un réseau de portes — corniches, murs, abîmes — dont les clés sont des **capacités**. Quand tu obtiens le *dash*, des dizaines de portes s'ouvrent d'un coup, partout. Même patron, échelle géniale.
</div>

📺 La série [Boss Keys (Game Maker's Toolkit)](https://www.youtube.com/playlist?list=PLc38fcMFcV_ul4D6OChdWhsNsYY3NA5B2) décortique les donjons de *Zelda* uniquement sous l'angle clés/portes.

### Le montage, sans code

Deux ETB et une variable. C'est tout.

**① La clé** — un ETB autour de l'objet à ramasser

| Champ | Valeur |
|---|---|
| `Trigger Tags` | `Player` |
| Réponse ***Player Pref Response*** | `Player Pref Key` : `aCle` · `Type` : int · `Value` : `1` |
| Réponse ***Modify GameObject*** | `GameObject` : l'objet clé · `Modify Type` : **Disable** |
| Réponse ***Audio Response*** | `Response Type` : SoundEffect · ton clip de ramassage |
| `After Trigger` | **Destroy Trigger Box** |

**② La porte** — un ETB devant la porte, un peu plus grand qu'elle

| Champ | Valeur |
|---|---|
| `Trigger Tags` | `Player` |
| Condition ***Player Pref Condition*** | `Condition Type` : **equal to** · `Key` : `aCle` · `Type` : int · `Value` : `1` · ✅ **Refresh Every Frame** |
| Réponse ***Modify GameObject*** | `GameObject` : le battant · `Modify Type` : **Disable** |
| Réponse ***Set Material Property*** | le cadre passe au vert (`_BaseColor`, type Colour, `Change Duration` : 1) |

!!! danger "Coche Refresh Every Frame"

    Sans cette case, l'ETB lit la valeur **une seule fois au démarrage du jeu** et la garde en mémoire. Ta clé aura beau être ramassée, la porte lira encore l'ancienne valeur. C'est le bogue le plus vicieux de la séance parce que tout **a l'air** correct.

!!! danger "Les Player Prefs survivent à la fermeture du jeu"

    Un *player pref* est écrit sur le disque de la machine. Relance ton jeu demain : `aCle` vaut encore `1` et ta porte est déjà ouverte. Trois solutions :

    1. **Un ETB de remise à zéro** au démarrage : un ETB avec ***Disable Entry Check*** coché (il se déclenche immédiatement, sans attendre personne) et une `Player Pref Response` qui remet `aCle` à `0`
    2. Le faire depuis la scène de menu, au [cours 4](./cours04.md)
    3. `Edit` > `Clear All PlayerPrefs` pendant tes tests

    C'est aussi ta première rencontre avec la **sauvegarde** — on y revient au [cours 11](./cours11.md).

### Variantes, même patron

| Variante | Ce qui change |
|---|---|
| Levier → pont qui apparaît | `Modify Type` devient **Enable** sur le pont |
| Bouton → lumière qui révèle un passage | La réponse devient ***Lighting Response*** |
| Offrande déposée → portail actif | Identique, seul l'habillage change |
| **3 gemmes → sortie déverrouillée** | Sur chaque gemme : `Player Pref Value` = `++` · sur la sortie : condition ***greater than or equal to*** `3` |

!!! tip "Le `++` de l'ETB"

    Dans une `Player Pref Response`, écrire `++` dans le champ valeur **incrémente** le pref au lieu de l'écraser. Un seul prefab de gemme, dupliqué dix fois, et ton compteur fonctionne. C'est ta première variable qui compte.

!!! question "À toi, deux minutes"

    Dans **ton** jeu : quelle est ta clé? Quelle est ta porte? Si tu ne peux pas répondre en une phrase chacune, on le règle ensemble pendant la pratique.

!!! note "Et appeler du vrai code?"

    La réponse ***Send Message Response*** appelle une **méthode d'un script** que tu aurais écrit, avec un paramètre. C'est la passerelle entre l'ETB et le C# — celle qu'on empruntera au [cours 5](./cours05.md), quand écrire une méthode aura un sens.

---

## Habiller le personnage

![](./assets/img/polygon.webp){.w-50}

Le personnage des Starter Assets est un mannequin gris. Tes assets Synty contiennent des dizaines de personnages — mais ce sont des **modèles figés en T-pose**, sans squelette. Il faut les *rigger*.

### Ce qu'on va faire

```mermaid
graph LR
    A[Personnage Synty<br/>T-pose, sans squelette] --> B[Mixamo<br/>auto-rigger]
    B --> C[FBX riggé<br/>+ avatar humanoïde]
    C --> D[Remplace le mesh<br/>du PlayerArmature]
```

### 1. Le rigging avec Mixamo

[Mixamo](https://www.mixamo.com) est gratuit avec un compte Adobe.

- Repère le FBX de ton personnage dans le dossier Synty (`Models` ou `Characters`)
- Sur Mixamo : `Upload Character`, dépose le FBX
- L'auto-rigger te demande de placer des marqueurs : menton, poignets, coudes, genoux, aine. Prends ton temps — **c'est la seule étape qui demande de la précision**
- `Skeleton LOD` : **Standard (65)**
- Attends l'aperçu animé, puis `Download`
  - `Format` : **FBX for Unity (.fbx)**
  - `Pose` : **T-pose**

!!! warning "Plan B — Mixamo est un outil non maintenu"

    Adobe garde Mixamo gratuit, mais ne le met plus à jour et le service a connu des pannes de plusieurs jours. **Ne construis pas ta séance de travail dessus sans filet.**

    Si le site est en panne : des personnages Synty **déjà riggés** sont déposés sur le lecteur de classe. Tu les importes et tu sautes directement à l'étape 3.

### 2. L'avatar humanoïde dans Unity

- Glisse le FBX téléchargé dans `📁 _MOMO/Models`
- Sélectionne-le > onglet ***Rig*** dans l'Inspector
  - `Animation Type` : **Humanoid**
  - `Avatar Definition` : **Create From This Model**
  - `Apply`
- Clic sur ***Configure…*** : Unity montre le squelette qu'il a compris. Les cercles doivent être **verts**. Un os en rouge = un marqueur mal placé sur Mixamo

!!! info "Pourquoi Humanoid?"

    Le type ***Humanoid*** dit à Unity : « ce squelette a deux bras, deux jambes et une tête ». Unity peut alors faire du **retargeting** — appliquer n'importe quelle animation humanoïde à n'importe quel personnage humanoïde. C'est ce qui te permet de garder les animations des Starter Assets avec ton personnage Synty.

### 3. Remplacer le mesh

- Déplie ***PlayerArmature*** dans la Hierarchy : tu y trouves un enfant qui porte le mesh (le mannequin) et un ***PlayerCameraRoot***
- Glisse ton personnage riggé **comme enfant de PlayerArmature**, position `0, 0, 0`
- Désactive (ou supprime) l'ancien mesh
- Sélectionne ***PlayerArmature*** > composant ***Animator*** > champ `Avatar` : glisse le **nouvel** avatar
- Laisse le `Controller` tel quel — c'est lui qui contient les animations
- Play ▶️

!!! warning "Les trois pièges du remplacement"

    1. **Les materials sont perdus.** Mixamo renvoie le FBX sans les materials Synty. Réassigne le material du pack (une seule texture *atlas* pour tout le personnage)
    2. **L'échelle.** Si ton personnage fait trois mètres ou dix centimètres, ajuste `Scale Factor` dans l'onglet `Model` du FBX
    3. **La capsule.** Le `CharacterController` de PlayerArmature a une hauteur et un rayon fixes. Ajuste-les à ton nouveau personnage, sinon il traverse les murs ou flotte

---

## Compiler ton jeu

![](./assets/img/car-cranking.gif){.w-50}

Jusqu'ici, ton jeu n'existe que dans l'éditeur. **Compiler** (*build*), c'est produire une application autonome que n'importe qui peut lancer **sans Unity**.

- `File` > `Build Profiles` > vérifie ta ***Scene List*** — une scène absente ne peut pas être chargée
- Clic sur `Build`
- Choisis un dossier `Builds` **à l'extérieur** du dossier `Assets`
- Attends (c'est long la première fois), puis **lance ton jeu** comme une vraie application 🎉

!!! success "Trois semaines, et tu as un jeu"

    Un monde, un personnage, une progression, une fin — et ça se lance tout seul. Échange ton build avec un voisin et essayez le jeu de l'autre.

!!! note "Et la mise en ligne?"

    Publier sur [itch.io](https://itch.io) avec un build **WebGL** qui se joue dans le navigateur viendra au [cours 11](./cours11.md). C'est **ton jeu de session** qui sera publié, pas celui-ci.

---

![](./assets/img/exercice.jpg)

## Pratique

[Exercice — Le personnage et la progression :material-arrow-right:](./exercices/cours03-personnage-et-progression.md){ .md-button .md-button--primary }

## Ce qu'on a effleuré

Tout ce qu'on vient de survoler sera repris en profondeur, appliqué à **ton** jeu :

| Tu viens d'effleurer… | On le maîtrisera au… |
|---|---|
| La caméra Cinemachine | **Cours 6** — caméra, 2.5D, cinématiques |
| L'Input System | **Cours 5** — C# et contrôles |
| L'état du jeu (`aCle`) | **Cours 5** — variables, puis **cours 11** (sauvegarde) |
| Les animations du personnage | **Cours 6** — Animator et machine à états |
| Le son du ramassage | **Cours 7** — design sonore |
| Le build | **Cours 11** — WebGL et itch.io |

## Devoirs

<div class="grid grid-1-2" markdown>
  ![](./assets/img/unity6.png){.aspect-4-3}

  <small>Évaluation 1 — Acquis Unity (15 %)</small><br>
  **[Le jeu express](./devoirs/jeu-express.md){.stretched-link .back}**
</div>

* **Avance ton [jeu express](./devoirs/jeu-express.md)** : personnage jouable, au moins **une** progression clé/porte, une fin. Il se termine en classe au [cours 4](./cours04.md) et se remet à la fin de cette séance-là
* Fais un **build** et fais-le essayer à quelqu'un (ami, parent, coloc). Note ses **3 premières réactions** sans l'aider — c'est ton premier playtest, et on en reparle au [cours 12](./cours12.md)

## Ressources

* [Starter Assets: Character Controllers | URP](https://assetstore.unity.com/packages/essentials/starter-assets-character-controllers-urp-267961)
* [Enhanced Trigger Box — documentation complète](https://github.com/alexander-scott/Enhanced-Trigger-Box/blob/master/README.md)
* [Mixamo](https://www.mixamo.com) — auto-rigger et bibliothèque d'animations
* [Documentation Unity : Avatar humanoïde](https://docs.unity3d.com/Manual/ConfiguringtheAvatar.html)
* [Boss Keys — la série sur le design clés/portes (GMTK)](https://www.youtube.com/playlist?list=PLc38fcMFcV_ul4D6OChdWhsNsYY3NA5B2)

## Savoirs essentiels touchés

Déplacement d'un personnage dans l'environnement virtuel, détection de collisions pour le déclenchement d'événements, interactions virtuelles, programmation d'un système de clé et de porte, progression en fonction de la réussite d'une action, intégration d'images dans l'environnement virtuel, compilation de l'application.
