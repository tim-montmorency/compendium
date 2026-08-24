# Cours 1

<style>.md-sidebar--secondary .md-nav .md-nav { display: none; }</style>

*[LTS] : Long-Term Support
*[UX] : User Experience
*[FPS] : First Person Shooters
*[PIB] : Produit Intérieur Brut 

[^ludisme]: [Définition du mot ludisme selon Larousse](https://www.larousse.fr/dictionnaires/francais/ludisme/48009)
[^mda]: [Hunicke, LeBlanc & Zubek, 2004](https://users.cs.northwestern.edu/~hunicke/MDA.pdf)
[^gap]: [*User Experience Design for Inexperienced Gamers: GAP – Game Approachability Principles*](https://doi.org/10.1007/978-1-84882-963-3_8)
[^flow]: [Sweetser, 2020, OzCHI/ACM](https://dl.acm.org/doi/10.1145/3441000.3441048)
[^fail]: [*The Art of Failure*, MIT Press, 2013](https://mitpress.mit.edu/9780262529952/the-art-of-failure/)

## Le ludisme

![](./assets/img/southpark.gif){.w-100}

> **Ludisme** n.m.[^ludisme]<br>
> Comportement caractérisé par la recherche systématique du jeu sous toutes ses formes.<br>
> latin *ludus*, jeu, [*ludologie*](https://vitrinelinguistique.oqlf.gouv.qc.ca/fiche-gdt/fiche/26502181/ludologie)

Le ludisme, c'est l'**engagement** et les **comportements** d'une personne envers un **jeu**. 

L'**amusement** et l'**expérimentation** sont essentiels au développement de l'aspect ludique de l'expérience.

!!! example "Comment créer une expérience ludique ?"

    > On travaille l'expérience utilisateur (_UX_) dans le but de provoquer une émotion.

    Le concepteur développe des **mécaniques** (ex. : saut, points de vie) ce qui produit des **Dynamiques** en jeu (ex. : camper, faire une *speedrun*) pour déclencher du plaisir (ex. : défi, découverte, camaraderie)[^mda]. 

    Le joueur vit le chemin **inverse**. Il ressent d'abord puis comprend les règles ensuite.

## Expérience ludique

![](./assets/img/mixing-chemicals-veritasium.gif){.w-100}

Ce qui suit sont des stratégies pour concevoir une expérience ludique. 

Tout ne doit pas **obligatoirement** se trouver dans un même jeu, mais ça aide ;)

### :speaking_head: **Narration**

Raconter une histoire donne un **sens** aux actions du joueur 

> On ne pousse pas un bouton, on sauve quelqu'un !

Par les **dialogues**, l'**ambiance**, les **décisions** et le **scénario**, la narration crée un investissement émotionnel et l'envie de connaître la suite.

<div class="grid grid-1-2" markdown>
![Donjons et Dragons](./assets/img/games/dnd-dm.jpg){data-zoom-image}

Dans [Donjons & Dragons](https://fr.wikipedia.org/wiki/Donjons_et_Dragons), la narration est entièrement interactive et partagée.
</div>

<div class="grid grid-1-2" markdown>
![Call of Juarez](./assets/img/games/call-of-juarez.jpg){data-zoom-image} 

Dans [Call of Juarez (2013)](https://fr.wikipedia.org/wiki/Call_of_Juarez:_Gunslinger), la narration sonore est continuellement guidée par les actions des joueurs.
</div>

!!! question "Comment raconter une histoire ?"

    On verra plus tard comment fabriquer une histoire à partir de [techniques de création narratives](./extra/narration.md){.back}.

### :fontawesome-solid-gears: **Mécanique**

Les règles et systèmes qui déterminent **comment on interagit avec le jeu**. 

> Sauter, crocheter, courir...<br>
> Règle des pions aux échecs

Une bonne mécanique génère des **choix intéressants** et un plaisir de **maîtrise** (comprendre, expérimenter, s'améliorer).

<div class="grid grid-1-2" markdown>
![Magic: The Gathering](./assets/img/games/mtg.jpg){data-zoom-image}

Dans [Magic: The Gathering](https://magic.wizards.com/), la mécanique du « *Tap* » active une ressource ou une créature.
</div>

<div class="grid grid-1-2" markdown>
![Portal](./assets/img/games/portal.jpg){data-zoom-image}

Dans [Portal 2 (2011)](https://fr.wikipedia.org/wiki/Portal_2), les joueurs doivent résoudre des énigmes en manipulant des trous de ver.
</div>

### :material-school: **Prise en main** (tuto)

<!-- Une mécanique géniale ne vaut rien si le joueur **abandonne avant de la comprendre**. -->

Les premières minutes doivent enseigner : 

* En jouant plutôt qu'en expliquant
* Une notion à la fois et accompagnée de rétroaction (renforcement positif)
* S'il y a beaucoup de mécaniques, n'enseignez pas tout en même temps

<div class="grid grid-1-2" markdown>
![Plants vs. Zombies](./assets/img/games/plants-vs-zombies.jpg){data-zoom-image}

Dans [Plants vs. Zombies (2009)](https://store.steampowered.com/app/3590/Plants_vs_Zombies_GOTY_Edition/), chaque niveau n'introduit **qu'une seule nouvelle plante**.
</div>

!!! tip "Les 10 principes GAP (*Game Approachability Principles*)"

    Desurvire & Wiberg[^gap] proposent une grille pour concevoir de meilleurs tutoriels et premiers niveaux, particulièrement pour les joueurs occasionnels :

    1. **Pratique** : offrir assez d'occasions de pratiquer chaque nouvelle habileté
    2. **Démonstration** : montrer le jeu de plus d'une façon
    3. **Renforcement** : donner une rétroaction aux actions du joueur
    4. **Sentiment de compétence** : le joueur se sent habile après l'entraînement initial
    5. **Échafaudage** : aide générale, puis plus précise **au besoin**
    6. **Contrôle** : le joueur s'identifie à son personnage et voit qu'il affecte le monde
    7. **Bonnes pratiques** : ne pas punir deux fois le même échec, varier les activités, doser le rythme
    8. **Objectifs clairs** : le joueur sait ce qu'il doit faire et y arrive
    9. **Information au bon moment** : juste ce qu'il faut, quand il le faut
    10. **Maîtrise** : à la fin, le joueur a réellement appris de nouvelles habiletés

!!! success "Le tutoriel invisible"

    ![](./assets/img/skip-tuto.gif){.w-33}

    Le meilleur tutoriel est celui qu'on ne remarque pas.

    Si on conçoit les premières scènes de façon à ce qu'il n'existe **qu'une seule action possible**. Le joueur croit résoudre l'énigme par lui-même, mais en réalité, on lui enseigne les règles une à une.

### :paintbrush: **Visuel**

L'environnement, les interfaces, les illustrations et les effets donnent au jeu son **identité** et son **ambiance**. 

Le visuel invite le joueur à entrer dans l'univers et à y rester. Il rend aussi le jeu **lisible**. C'est-à-dire qu'on comprend d'un coup d'oeil où aller et quoi faire.

<div class="grid grid-1-2" markdown>
![Dixit](./assets/img/games/dixit.webp){data-zoom-image}

Dans [Dixit](https://boardgamegeek.com/boardgame/39856/dixit), le graphisme surréaliste des cartes force les joueurs à imaginer des associations d'idées abstraites.
</div>

<div class="grid grid-1-2" markdown>
![Thank Goodness You're Here!](./assets/img/games/thank-goodness-youre-here.webp){data-zoom-image}

Dans [Thank Goodness You're Here! (2024)](https://store.steampowered.com/app/2366980/Thank_Goodness_Youre_Here/), les dessins affirment un univers jovial, drôle et grotesque.
</div>

### :musical_note: **Son**

L'image montre et le son **immerge**. 

Le son installe une **émotion**, **oriente** le joueur (ex. : un danger à venir) et **récompense** les actions.

<div class="grid grid-1-2" markdown>
![](./assets/img/games/marco-polo.webp){data-zoom-image}

Dans le jeu [Marco Polo](https://fr.wikipedia.org/wiki/Marco_Polo_(jeu)), le son est utilisé comme radar afin de retrouver son adversaire.
</div>

<div class="grid grid-1-2" markdown>
![A Blind Legend](./assets/img/games/a-blind-legend.jpg){data-zoom-image}

Dans [A Blind Legend (2016)](https://store.steampowered.com/app/437530/A_Blind_Legend/), les joueurs doivent se fier exclusivement au son pour naviguer et interagir avec le monde. Aucune image dans ce jeu vidéo !
</div>

!!! example "L'impopularité du traitement sonore"

    Le son est souvent mis de côté. Peut-être parce que c'est moins tangible qu'une image 🤷 ?

    Pourtant, il est **aussi important que l'image**. 
    
    Le son c'est l'équivalent du glaçage sur un gâteau d'anniversaire. C'est pas obligatoire... mais un peu quand même 😅

    ![](./assets/img/cake.png){data-zoom-image .w-50}

### :octicons-search-16: **Exploration**

Éveiller la **curiosité**, puis (surtout) la **récompenser**.

Ça peut être en découvrant une nouvelle salle, une section secrète ou une information.

<div class="grid grid-1-2" markdown>
![Escape Room](./assets/img/games/escape-room.jpg){data-zoom-image}

Dans un [jeu d'évasion](https://en.wikipedia.org/wiki/Escape_room), fouiller les pièces et manipuler les objets permet d'avancer dans le jeu.
</div>

<div class="grid grid-1-2" markdown>
![Dave the diver](./assets/img/games/dave-the-diver.jpg){data-zoom-image}

Dans [Dave the diver (2023)](https://store.steampowered.com/app/1868140/DAVE_THE_DIVER/), l'exploration fait avancer le niveau de difficulté et la narration du jeu.
</div>

### :crossed_swords: **Défi**

Un jeu trop facile peut provoquer l'ennui. Un jeu trop difficile provoque la frustration et le découragement.

Un obstacle à la hauteur des compétences/attentes du joueur crée un état d'engagement, mais ce qui le fait continuer est la récompense.

<div class="grid grid-1-2" markdown>
![Elden Ring](./assets/img/games/elden-ring.jpg){data-zoom-image}

Dans [Elden Ring (2022)](https://store.steampowered.com/app/1245620/ELDEN_RING/), l'échec est la mécanique principale du jeu.
</div>

<div class="grid grid-1-2" markdown>
![One Million Buttons](./assets/img/one-million-btn.png){data-zoom-image}

Dans [One Million Buttons (à venir)](https://moocow-games.itch.io/one-million-button-demo), le défi c'est ... la persévérance.
</div>

!!! tip "L'art de l'échec 😮"

    Cet équilibre ennui / frustration se nomme ***flow***[^flow]. Même que parfois, on recherche l'échec pour rendre la réussite signifiante[^fail].

### :trophy: **Accomplissements**

Les récompenses (*achievements*, mais aussi items et *upgrades*) **valident la progression** du joueur et fixent des objectifs à poursuivre.

<div class="grid grid-1-2" markdown>
![(the) Gnorp Apologue](./assets/img/games/gnorp.jpg){data-zoom-image}

Dans un _clicker_ (ex: [(the) Gnorp Apologue (2023)](https://store.steampowered.com/app/1473350/the_Gnorp_Apologue/)), on ne progresse que par la bonne gestion des _upgrades_.
</div>

### :material-arrow-decision: **Agentivité**

> **Agentivité** (n.f.)<br>
> Capacité à avoir le contrôle de ses propres actes et de leurs effets, et ainsi d’influencer les choses, les êtres et les évènements

Donner au joueur le pouvoir d'**influencer** le jeu et son déroulement crée une impression de **liberté** et de **contrôle**. 

<div class="grid grid-1-2" markdown>
![Baldurs gate 3](./assets/img/games/baldurs-gate-3.webp){data-zoom-image}

Dans [Baldurs gate 3 (2023)](https://store.steampowered.com/app/1086940/Baldurs_Gate_3/), les joueurs font des choix qui influencent l'histoire, les relations entre les personnages, ainsi que l'issue des quêtes.
</div>

### :people_wrestling: **Compétition** / :handshake: **Coopération**

**Rivalité**, **entraide**, **négociation** et **trahison** sont des dynamiques extrêmement intéressantes pour l'engagement des joueurs. 

Néanmoins, pour être efficaces et convaincantes, ces dynamiques doivent être performées par des humains.

<div class="grid grid-1-2" markdown>
![Keep Talking and Nobody Explodes](./assets/img/games/keep-talking-and-nobody-explodes.jpg){data-zoom-image}

Dans [Keep Talking and Nobody Explodes (2015)](https://store.steampowered.com/app/341800/Keep_Talking_and_Nobody_Explodes/), un des joueurs doit désamorcer une bombe en suivant les instructions d'autres joueurs qui ne la voient pas.
</div>

## Jeu vidéo

![](./assets/img/videogame-types-heading.jpg)

Les jeux vidéo sont une façon très efficace d'aborder l'expérience ludique. Si efficace, qu'annuellement, cette industrie génère mondialement plus de [200 milliards USD](https://afjv.com/news/12036_l-industrie-des-jeux-video-a-franchi-la-barre-des-200-mds-en-2025.htm). Pour donner une idée de grandeur, c'est équivalent au PIB du Maroc !

<!-- 
La formule : PIB = C + I + G + (X - M)
C (Consommation) : Dépenses des ménages (nourriture, loyer, coiffeur).
I (Investissement) : Dépenses des entreprises (machines, bâtiments) et des ménages (achats de logements neufs).
G (Dépenses publiques) : Achats et investissements de l'État (écoles, routes, salaires des fonctionnaires).
X - M (Balance commerciale) : Les Exportations (X) moins les Importations (M). 
-->

### Distributeurs

* **PC** : :simple-steam: [Steam](https://steampowered.com/), :simple-epicgames: [Epic Games Store](https://store.epicgames.com/), :simple-battledotnet:[Battle.net](https://us.shop.battle.net/) et [_bien d'autres_](https://www.pcgamer.com/pc-gamings-many-launchers-reviewed-for-2024-steam-still-puts-the-rest-to-shame/)
* **Consoles** : :simple-playstation: [PlayStation Store](https://store.playstation.com/), :material-nintendo-switch: [Nintendo eShop](https://www.nintendo.com/us/store/), :fontawesome-brands-xbox: [Xbox Store](https://www.xbox.com/microsoft-store)
* **Mobile** : :simple-appstore: [App Store](https://www.apple.com/app-store/), :simple-googleplay: [Google Play](https://play.google.com/)
* **Web** : :fontawesome-brands-itch-io: [Itch.io](https://itch.io/) et bien d'autres

### Statistiques

* [SteamDB](https://steamdb.info/) (Données Steam)
* [Games Stats](https://games-stats.com/) (Statistiques de ventes)
* [IsThereAnyDeal](https://isthereanydeal.com/) (Historique des prix. Équivalent Steam de <https://keepa.com/>.)
* [HowLongToBeat](https://howlongtobeat.com/) (Durée des jeux)

## Genres de jeux

![](./assets/img/game-genres.jpg){.w-100}

Il existe des centaines de [genres de jeux vidéo](https://steamdb.info/tags/) et les étiqueter n'aide pas beaucoup à en concevoir un. Ce qui aide, c'est de nommer **ce que le jeu exploite chez le joueur**. Voici trois grandes catégories de jeux :

* :material-lightning-bolt: **Action/Arcade** : exploite l'**exécution en temps réel**
  > Réflexes, timing, précision. Le joueur sait souvent ce qui s'en vient : le défi est de l'exécuter au bon moment.
  >
  > *[Mortal Kombat](https://fr.wikipedia.org/wiki/Mortal_Kombat)*, *[Geometry Wars](https://en.wikipedia.org/wiki/Geometry_Wars)*, *[Beat Saber](https://beatsaber.com/)*
* :material-magnify: **Aventure** : exploite le **dévoilement d'information**
  > Le joueur ne devient pas meilleur : c'est le **monde** qui se révèle. Une carte, une intrigue, une règle cachée, un mensonge.
  >
  > *[Monkey Island](https://returntomonkeyisland.com/)*, *[Myst](https://en.wikipedia.org/wiki/Myst)*, *[Firewatch](https://en.wikipedia.org/wiki/Firewatch)*
* :material-chess-rook: **Stratégie** : exploite la **gestion de ressources**
  > De l'or, des unités, du temps, de l'espace, de l'attention. Le défi est de choisir où dépenser ce qu'on n'a pas en quantité suffisante.
  >
  > *[Cities: Skylines](https://www.paradoxinteractive.com/games/cities-skylines/about)*, *[Football Manager](https://www.footballmanager.com/fr)*, *[Balatro](https://www.playbalatro.com/)*

Énormément de jeux sont des combinaisons de ces trois catégories. Par exemple : 

- **Counter-Strike** : stratégie + action
- **God of War** : action + aventure
- **Baldurs gate 3** : stratégie + aventure

!!! question "En connaissez-vous qui sont les trois à la fois ?"

## Théorie du jeu vidéo

### Prérequis

![](./assets/img/lockeandkey.webp){.w-100}

> J'ai besoin de A pour faire B. 

Les prérequis sont des critères que le joueur doit satisfaire pour faire autre chose. En design de jeu, ce concept porte le nom de ***gating***.

Ça sert à contrôler le **rythme**, **enseigner les mécaniques**, maintenir le **défi**, créer un sentiment de **maîtrise** et alimenter la logique de **récompense**.

Sa forme la plus classique est le mécanisme **serrure / clé** : 

<p class="codepen aspect-4-1" data-theme-id="50173" data-height="300" data-pen-title="Phaser - Prérequis" data-default-tab="result" data-slug-hash="xxoXazb" data-user="tim-momo" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tim-momo/pen/xxoXazb">
  Phaser - Prérequis</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

#### Types de _gating_

1. **Progression** : Niveau de personnage requis
  > Avoir le niveau 10 pour entrer dans le donjon
1. **Économie** : Quantité de ressources accumulées 
  > Avoir 1000 pièces d'or pour acheter une maison
1. **Inventaire** : Possession d'un objet spécifique 
  > Trouver une carte bleue pour ouvrir les portes bleues 
1. **Scénario** : Choix narratif active ou désactive un élément du jeu 
  > Un garde bloque la porte du village tant qu'on n'a pas parlé au vieux Kamaji
1. **Compétence du personnage** : Capacité apprise 
  > Débloquer le double-saut pour traverser le ravin
1. **Environnement** : Conditions contextuelles
  > Attendre qu'il fasse nuit pour cueillir une fleur spéciale
1. **Habileté du joueur** : C'est le *joueur* qui doit s'améliorer, pas son personnage 
  > Un boss infranchissable tant qu'on n'a pas maîtrisé ses séquences d'attaque
1. **Connaissance** : Informations à découvrir par l'expérimentation pour progresser 
  > Manger une pomme en sautant fait lever le soleil

### Boucles de jeu

![](./assets/img/game-loop-banner.gif){.aspect-4-3}

Une **boucle de jeu** ([_game loop_](https://gamedesignskills.com/game-design/core-loops-in-gameplay/)) est une séquence d'actions que le joueur répète tout au long de la partie.

Ça sert à bien comprendre les mécaniques et leurs fréquences. On dit qu'avant de développer un jeu, il est essentiel de connaitre ses boucles. Comme ça, ça donne une bonne idée de l'envergure du projet.

Voici un exemple pour un _FPS_.

<figure markdown>
![](./assets/img/devil-daggers-video-game.gif){.w-50}
<figcaption>Devil Daggers</figcaption>
</figure>

```mermaid

graph TD
    
    direction TD
      
      A1(Viser un ennemi) --> A2
      A2(Tirer) --> A3
      A3(Avancer) --> A1

      A3 -->|Aux 5 min| B1
      B1(Entrer dans une salle):::min --> B2
      B2(Fouiller):::min --> B3
      B3(Récolter des items):::min --> A3
        
      A3 -->|Aux heures| C1
      C1(Finir le niveau):::hour --> C2
      C2(Ajuster l'équipement):::hour --> C3
      C3(Accomplir une mission):::hour --> C4
      C4(Recevoir des upgrades):::hour --> C5
      C5(Commencer un niveau):::hour --> A3

  classDef min fill:transparent;
  classDef hour stroke:#666666,fill:transparent;
```

Pour voir d'autres exemples, consultez la page [_Designing The Core Gameplay Loop: A Beginner’s Guide_](https://gamedesignskills.com/game-design/core-loops-in-gameplay/).

## Moteurs de jeu vidéo

<div class="grid grid-1-2" markdown>
![](./assets/img/godot_l1200.jpg){data-zoom-image .aspect-4-3}

<div markdown>
### [Godot](https://godotengine.org/fr/)

Un moteur 100 % gratuit, open-source et très léger.
</div>
</div>

<div class="grid grid-1-2" markdown>
![](./assets/img/unreal-engine.png){data-zoom-image .aspect-4-3}

<div markdown>
### [Unreal Engine](https://www.unrealengine.com/)

Le moteur de choix pour les superproductions (jeux AAA) et le photoréalisme.
</div>
</div>

<div class="grid grid-1-2" markdown>
![](./assets/img/unity6.jpeg){data-zoom-image .aspect-4-3}

<div markdown>
### [Unity](https://unity.com/) (⭐️ Choix du cours)

Le moteur le plus polyvalent et le plus utilisé dans l'industrie.
</div>
</div>

<!-- Unity : budget annuel de 1 milliard en r&d
Godot : budget annuel de 1 million (communauté) -->

### Les outils spécialisés

* [Phaser](https://phaser.io/) : cadriciel **JavaScript** pour jeux 2D sur le web.
* [Twine](https://twinery.org/) : récits interactifs à embranchements, sans code !
* [Bitsy](https://bitsy.org/) : minuscules jeux en *pixel art*, dans le navigateur.
* [GameMaker](https://gamemaker.io/) : moteur dédié à la **2D**, langage GML (ex: *Undertale*).
* [RPG Maker](https://www.rpgmakerweb.com/) : RPG 2D à la *Zelda/Final Fantasy* sans code

## :simple-unity: Unity

![type:video](./assets/video/unity-games.webm){.h-auto}

Unity fonctionne sur la majorité des ordinateurs. À moins que votre machine soit particulièrement ancienne, elle devrait satisfaire la [configuration système requise](https://docs.unity3d.com/Manual/system-requirements.html).

Unity fonctionne sur une base de licence. L'une est gratuite et les autres sont [payantes](https://unity.com/fr/products) en fonction des revenus au cours des 12 derniers mois.

<div class="grid grid-1-3 align-items-top" markdown>
![](./assets/img/money.gif)

| Version | Coût par utilisateur |
| --- | --- |
| **Unity Personal** | **Gratuit** ♥️, si revenus inférieurs à 200 000 $ USD |
| **Unity Pro** | 210 $ USD / mois / dev, si revenus annuel entre 200 001 $ et 24,9 millions $ USD |
| **Unity Enterprise** | _Sur devis_, si revenus supérieurs à 25 millions $ USD |
| **Unity Industry** | _Sur devis_, si obligatoire dès 1 000 000 $ USD pour un usage industriel (hors jeux/divertissement) |
</div>

***TLDR;*** c'est gratuit :wink:

### Installation

Unity a besoin du logiciel Unity Hub pour être installé. 

Unity Hub sert, entre autres, à gérer les versions de Unity et à créer des projets.

<div class="grid grid-1-2" markdown>
  ![](./assets/img/unity6.png)

  **[Compte Unity et installation](./extra/installation-unity-hub.md){.stretched-link .back}**<br>
</div>

## Présentation de Unity Hub et Unity

<div markdown class="grid">
<figure markdown>
![](./assets/img/unity-hub-interface.png){data-zoom-image}
<figcaption markdown>Unity Hub</figcaption>
</figure>

<figure markdown>
![](./assets/img/unity-interface.png){data-zoom-image}
<figcaption markdown>Unity</figcaption>
</figure>
</div>

### Panneaux

![](./assets/img/unity-interface-num.png){data-zoom-image}

1. **Barre de menu** : Regroupe les options globales du logiciel (sauvegarde, paramètres généraux et ouverture de nouvelles fenêtres).
2. **Panneau _Hierarchy_** : Liste tous les objets (_GameObjects_) de la scène active et permet d'organiser leurs relations de parenté (parent/enfant).
3. **Panneau _Scene_** : L'espace de travail visuel (2D/3D) pour construire votre niveau en y plaçant vos objets. (Le test du jeu se fait dans l'onglet _Game_).
4. **Barre d'outils** : Fournit les outils de manipulation spatiale pour sélectionner, déplacer, pivoter et redimensionner les objets de la scène.
5. **Panneau _Inspector_** : Affiche et permet de modifier les propriétés et composants (_Components_) de l'élément sélectionné (objet ou ressource).
6. **Panneau _Project_** : L'explorateur de fichiers. Il rassemble toutes vos ressources (_Assets_), importées (modèles, sons) ou créées dans Unity (scripts, matériaux).

## Assets

<div class="grid grid-1-2" markdown>
  ![](./extra/assets/banner.png)

  <small>Documentation</small><br>
  **[Assets](./extra/assets/index.md){.stretched-link .back}**<br>
</div>

## Devoirs

<div class="grid grid-1-2" markdown>
  ![](./devoirs/get-started-with-unity/banner.png){.aspect-16-9}

  <small>Devoir - Unity</small><br>
  **[Tutoriel pour commencer avec Unity (2 %)](./devoirs/get-started-with-unity/index.md){.stretched-link .back}**
</div>

<div class="grid grid-1-2" markdown>
  ![](./assets/img/student.avif){.aspect-16-9}

  <small>Devoir</small><br>
  **[Faire la demande de compte éducationnel](./extra/installation-unity-hub.md#adhesion-au-compte-educationnel-gratuit){.stretched-link .back}**
</div>

<div class="grid grid-1-2" markdown>
  ![](./assets/img/polygon.webp){.aspect-16-9}

  <small>Devoir</small><br>
  **[Ajouter le « _Sampler Pack_ » gratuit à votre compte](https://assetstore.unity.com/packages/3d/environments/polygon-sampler-pack-art-by-synty-207048){.stretched-link .back}**<br>
  <small>Pour être gratuit, le compte éducationnel doit être actif</small>
</div>

