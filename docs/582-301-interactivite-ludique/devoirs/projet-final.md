# Travail final — Le jeu de session

*[GDD]: Game Design Document
*[CES]: Collider Event System
*[PNJ]: Personnage non joueur

**70 % de la note finale · remis à la séance 15**

---

## En une phrase

Tu conçois et tu réalises **une expérience ludique en trois zones**, dans laquelle l'interacteur progresse en accomplissant des actions, et tu la **publies en ligne**.

Le thème, le genre et l'univers sont **entièrement libres**. La structure, elle, est imposée — c'est elle qui garantit que tous les savoirs du cours sont mis en jeu.

!!! important "Ce qui est évalué"
    Trois choses, et il faut les distinguer.

    **Les savoirs essentiels** se notent en *présent / absent*. Chaque exigence du socle est là et fonctionne, ou elle ne l'est pas.

    **La rigueur** et **la créativité** — les deux attitudes professionnelles inscrites au devis de ce cours — se notent en qualité, et elles pèsent **34 % de la note du projet**.

    **L'ampleur ne se note pas.** Ajouter une quatrième zone, une deuxième mécanique ou dix minutes de jeu ne rapporte aucun point. La créativité se mesure à des **décisions**, jamais à du volume : un jeu de six minutes peut être plus créatif qu'un jeu de vingt, et c'est régulièrement le cas.

---

## La forme imposée : 3 zones, 3 portes

Ton jeu comporte **trois zones distinctes** et **trois portes** — trois moments où l'interacteur est bloqué et doit accomplir quelque chose pour continuer :

```
[ Zone 1 ] --porte 1--> [ Zone 2 ] --porte 2--> [ Zone 3 ] --porte 3--> [ Fin ]
```

Ce squelette accepte n'importe quel genre :

| Genre | Porte 1 | Porte 2 | Porte 3 |
|-------|---------|---------|---------|
| **Énigme** | Trouver la manivelle | Déduire un code | Actionner trois leviers dans l'ordre |
| **Action** | Franchir un gouffre | Semer un garde | Atteindre l'extraction avant l'alarme |
| **Exploration** | Rapporter un objet | Réunir trois fragments | Découvrir le passage caché |
| **Narratif** | Convaincre le passeur | Rapporter ce qu'il a demandé | Choisir devant la dernière porte |

### Trois types de *gating* différents

Tes trois portes doivent utiliser **trois types différents** parmi ceux-ci :

| Type | L'interacteur doit… |
|------|---------------------|
| **Clé / serrure** | Trouver un objet quelque part et l'utiliser ailleurs |
| **Adresse** | Réussir une action physique : saut, parcours, timing |
| **Connaissance** | Comprendre ou observer : un code, un indice, un ordre |
| **Collecte** | Réunir un nombre d'éléments dispersés |
| **Confrontation** | Vaincre, éviter ou semer un PNJ |
| **Mécanisme** | Manipuler le monde : levier, pont, plateforme, eau |
| **Découverte** | Trouver un passage qui ne se voit pas au premier regard |
| **Négociation** | Obtenir quelque chose d'un PNJ |

**Au moins une des trois doit être un vrai système clé/serrure** — c'est un savoir essentiel nommément inscrit au devis.

### Le test des trois questions

!!! danger "Une porte qui échoue à une de ces questions n'est pas comptée"
    Pour **chacune** de tes trois portes, tu dois pouvoir répondre :

    **1. Pourquoi c'est fermé ?**
    L'obstacle a une raison dans ton univers : une porte verrouillée, un pont effondré, un garde, une eau trop profonde. Une zone de collision invisible au milieu d'un couloir **n'est pas une porte** — c'est un bogue avec une bonne intention.

    **2. Comment l'interacteur sait-il quoi faire ?**
    L'indice est **dans le monde** : ce qu'on voit, ce qu'on entend, ce qui est éclairé, ce qu'un PNJ dit. Si tu dois me l'expliquer de vive voix pendant que je joue, la porte échoue.

    **3. Qu'est-ce qui change quand elle s'ouvre ?**
    Quelque chose de **perceptible** se produit — un son **et** un changement visuel — et l'état reste changé. Une porte qui s'ouvre en silence n'a pas récompensé l'effort qu'elle a exigé.

### Trois zones, deux découpages possibles

Tu choisis, et tu **écris ton choix dans ton GDD** à la séance 4.

| | **A · Trois scènes séparées** | **B · Un monde continu** |
|---|---|---|
| Comment | Une scène Unity par zone, chargée par transition | Une seule scène, trois secteurs séparés par des portes |
| Pour | Tu peux couper la zone 3 en fin de session et il reste un jeu · bakes d'éclairage légers · chargement WebGL rapide | Immersion continue, aucun temps de chargement · un seul éclairage à régler |
| Contre | Coupures ressenties · trois éclairages à régler | Rien à couper si tu prends du retard · bake lourd · risque de dépassement en WebGL |
| Surveille | Que chaque scène soit bien dans la *Scene List* | La taille du bake et le nombre de lumières temps réel |

!!! tip "Si tu hésites"
    Prends **A**. Pouvoir couper une zone sans casser le jeu est le meilleur filet de sécurité que tu puisses te donner, et tu ne sais pas encore comment se passera ta semaine 13.

---

## Ce qu'est une zone

Une zone, ce n'est pas un morceau de terrain. C'est un **lieu**. Trois planchers, vérifiés au jalon F3 :

!!! abstract "Le test de la carte postale"
    Une capture de chacune de tes trois zones, côte à côte. **On doit reconnaître instantanément trois lieux différents.** Si deux captures sont interchangeables, tu n'as pas trois zones, tu en as une.

    Ce qui distingue une zone : la palette, la densité d'objets, la silhouette de l'horizon, la lumière, l'ambiance sonore. Pas juste la couleur du brouillard.

!!! abstract "Le test du chronomètre"
    **Une minute de traversée minimum par zone**, en jouant normalement, sans compter les allers-retours forcés. Total du jeu : **3 minutes minimum, 10 minutes maximum.** C'est un plancher *et* un plafond — les deux comptent.

!!! abstract "Le test de la raison d'exister"
    Chaque zone contient au moins **un objectif, un indice ou une récompense** qu'on ne trouve nulle part ailleurs. Une zone qu'on traverse sans rien y faire n'est pas une zone, c'est un couloir.

---

## Le socle d'exigences

Chaque ligne est une **exigence minimale**, reliée à un savoir essentiel du devis, à la séance où c'est enseigné, et au jalon où c'est vérifié.

### A · Structure et progression

| # | Exigence | Savoir essentiel | Enseigné | Vérifié |
|---|----------|------------------|----------|---------|
| A1 | **Trois zones** entièrement navigables : on ne traverse pas le décor, on ne tombe pas hors du monde | Création d'un environnement virtuel navigable | S2, S3, S9 | F1 · F3 |
| A2 | Les trois zones passent les **tests de la carte postale, du chronomètre et de la raison d'exister** | Création d'un environnement navigable | S9 | F3 |
| A3 | **Trois portes**, utilisant **trois types de *gating* différents** | Progression selon la réussite d'une action | S3, S5 | F1 |
| A4 | Au moins une porte est un vrai **système clé/serrure** | Programmation d'un système de clé et de porte | S3, S5 | F1 |
| A5 | **Chaque porte passe le test des trois questions** | Progression · Affordance | S1, S4 | F1 · F3 |
| A6 | Un **début**, une **fin** atteignable, et la possibilité de **recommencer** sans relancer le jeu | Progression · Transitions de scènes | S2, S6 | F4 |
| A7 | Une **condition de défaite** explicite, ou une justification écrite au GDD si ton jeu n'en a pas | Progression selon la réussite ou l'échec | S4 | F1 |
| A8 | **Menu** titre → jeu → fin, plus un menu **pause** fonctionnel | Fonctionnement d'une interface virtuelle | S5 | F2 |
| A9 | Au moins **trois transitions de scènes** propres | Transitions de scènes | S2, S6 | F2 |

### B · Personnage et interactions

| # | Exigence | Savoir essentiel | Enseigné | Vérifié |
|---|----------|------------------|----------|---------|
| B1 | Personnage **contrôlable** (1re ou 3e personne), déplacement et caméra confortables | Déplacement dans l'environnement virtuel | S3 | F1 |
| B2 | **Cinq états détectés et animés** : immobile, marche, course, saut, action | Détection et animation de l'état du personnage | S6 | F2 |
| B3 | Au moins **trois interactions distinctes** déclenchées par l'interacteur | Interactions virtuelles | S3, S5 | F1 |
| B4 | Toutes les interactions passent par une **détection de collision** correctement configurée | Détection de collisions pour le déclenchement d'évènements | S2 | F1 |
| B5 | Les **affordances sont lisibles** : on comprend où aller et sur quoi agir **sans qu'on te le dise** | Notions d'interaction : affordance, agentivité | S1, S4 | F2 · playtests S12 |
| B6 | Au moins **un script C# écrit par toi** — pas seulement un script du kit branché — appelé depuis une action ***Invoke Events*** du CES ou attaché à un objet, et dont tu peux expliquer **chaque ligne** | Environnement de programmation | S5, S11 | Oral S15 |

### C · Rétroaction — *le cœur de l'objectif 2*

| # | Exigence | Savoir essentiel | Enseigné | Vérifié |
|---|----------|------------------|----------|---------|
| C1 | **Chaque réussite** produit une indication **visuelle ET sonore** | Indication visuelle et sonore des réussites | S5, S7, S8 | F2 |
| C2 | **Chaque échec** produit une indication **visuelle ET sonore** distincte de la réussite | Indication visuelle et sonore des échecs | S5, S7, S8 | F2 |
| C3 | **HUD** affichant au moins **un indicateur de progression** | Intégration d'une interface graphique HUD | S5 | F2 |
| C4 | Le HUD **tient à deux résolutions différentes** — teste-le | Interface virtuelle | S5 | F4 |

### D · Médias visuels

| # | Exigence | Savoir essentiel | Enseigné | Vérifié |
|---|----------|------------------|----------|---------|
| D1 | Environnement construit avec les **assets Synty**, materials convertis URP — **rien en magenta** | Intégration d'images dans l'environnement virtuel | S2 | F2 |
| D2 | Au moins **une image importée par toi** intégrée au monde ou à l'interface | Intégration d'images | S2, S9 | F2 |
| D3 | **Éclairage travaillé** et **post-traitement** : chaque zone a sa propre ambiance lumineuse | Intégration de médias visuels | S9 | F3 |
| D4 | Au moins **un élément de décor animé** (porte, plateforme, mécanisme) | Animation d'éléments visuels | S6 | F2 |
| D5 | Au moins **trois systèmes de particules** distincts, liés à des événements du jeu | Intégration de médias visuels | S8 | F3 |
| D6 | **Caméra Cinemachine configurée volontairement** (*follow*, *damping*, *confiner*), plus **un moment de cadrage contraint** | Configuration de la caméra virtuelle | S6 | F2 |
| D7 | Au moins **une cinématique** (Timeline + Cinemachine) **déclenchée par une action**, contrôles verrouillés, reprise propre | Animation d'éléments visuels · Caméra | S6 | F2 |

### E · Médias sonores

| # | Exigence | Savoir essentiel | Enseigné | Vérifié |
|---|----------|------------------|----------|---------|
| E1 | Une **ambiance sonore par zone**, en boucle, sans coupure audible | Intégration de médias sonores | S7 | F3 |
| E2 | Au moins **cinq échantillons sonores** déclenchés par des événements | Déclenchement d'échantillons sonores | S7 | F2 |
| E3 | Au moins **un son spatialisé en 3D** | Intégration de médias sonores | S7 | F3 |
| E4 | **Audio Mixer** avec deux groupes minimum, et un **slider de volume** dans les options | Intégration de médias sonores | S7 | F4 |

### F · Habitants

| # | Exigence | Savoir essentiel | Enseigné | Vérifié |
|---|----------|------------------|----------|---------|
| F1 | Au moins **un PNJ** sur NavMesh — hostile, guide ou marchand | Interactions virtuelles | S10 | F3 |
| F2 | Ce PNJ donne une **rétroaction** de son état : animation, son ou indicateur visuel | Indication visuelle · Détection d'état | S10 | F3 |

### G · Publication et rigueur

| # | Exigence | Savoir essentiel | Enseigné | Vérifié |
|---|----------|------------------|----------|---------|
| G1 | **Build WebGL** fonctionnel **publié sur itch.io** | Compilation de l'application | S11 | F3 · S15 |
| G2 | **Arborescence de projet** respectée, imports laissés à la racine d'`Assets` | Classement des fichiers et des médias | S2 | F4 |
| G3 | **README** : concept, commandes, **crédits de tous les médias externes avec leur licence**. Tenu **au fur et à mesure**, pas reconstitué à la fin — c'est vérifié aux deux carnets de bord | Classement des fichiers et des médias | S4, S11 | Carnet S7 · S14 · S15 |
| G4 | **`PlayerPrefs`** : au moins le volume, plus une donnée de progression | *(pratique professionnelle)* | S11 | F4 |
| G5 | **Devlog** tenu : une entrée par séance depuis la S4 | *(rigueur)* | S4 | Carnet S7 · S14 |
| G8 | **Arborescence du projet** tenue tout au long de la session, pas remise au propre à la fin | Classement des fichiers et des médias | S2 | Carnet S7 · S14 |
| G6 | **Aucun défaut visible de finition** : pas de magenta, pas d'objet flottant, pas de texte provisoire, pas de collider manquant | *(rigueur)* | — | F4 |
| G7 | La **carte de preuves** est remplie dans le README | *(rigueur)* | S11 | S15 |

### H · Créativité et parti pris

*Ces exigences ne portent pas sur la quantité. Elles portent sur le fait que tes choix soient **des choix**.*

| # | Exigence | Attitude | Vérifié |
|---|----------|----------|---------|
| H1 | Un **parti pris nommé en une phrase** dans ton GDD (« un jeu lent et inquiétant dans une station vide »), et tenu jusqu'au bout | Créativité | F2 · S15 |
| H2 | Tes trois zones se distinguent par **plus que la couleur** : palette, densité, silhouette, lumière, ambiance sonore | Créativité | F3 |
| H3 | Au moins **un détournement** d'un outil vu en classe, documenté au devlog : un CES qui ne sert pas à une porte, une lumière qui sert de guide, un son qui sert d'indice | Créativité | S15 |
| H4 | Tu peux **nommer trois décisions de conception** et dire pourquoi tu les as prises | Créativité · Rigueur | Oral S15 |
| H5 | Ton jeu **ne ressemble pas à la démo du cours** | Créativité | S15 |

---

## Les plafonds

Ce sont des **maximums**, pas des objectifs. Les dépasser n'ajoute aucun point et met ton projet en danger.

| Plafond | Valeur |
|---------|--------|
| Mécanique principale | **1** |
| Zones | **3** — pas 4 |
| Durée de jeu | **3 minutes minimum, 10 maximum** |
| Assets 3D | **Synty (POLYGON Sampler Pack) uniquement**, plus médias libres cités |
| Sauvegarde | `PlayerPrefs` — pas de JSON, pas de slots multiples |
| PNJ | Patrouille + détection — pas d'arbre de comportement |

!!! danger "Ce qui n'est pas accepté dans ce projet"
    Multijoueur · système de dialogue à embranchements · inventaire avec interface de gestion · combat à plusieurs états · monde ouvert · génération procédurale · modèles 3D modélisés par toi.

    Ce ne sont pas des interdictions morales : chacun est un cours à lui seul, et chacun a déjà coûté sa session à quelqu'un. Si l'un te démange, garde-le pour la capsule de la S13 — **mais après avoir livré le socle.**

---

## La carte de preuves

À la remise, ton README contient une table qui indique, **pour chaque exigence du socle**, où elle se trouve et comment y accéder en jouant.

!!! warning "La règle qui rend cette table obligatoire"
    **Ce qui n'est pas déclaré n'est pas corrigé.** Je ne cherche pas tes fonctionnalités dans ton jeu : je vais où tu me dis d'aller. Une exigence réalisée mais non déclarée est traitée comme absente.

    En retour, une exigence déclarée est **garantie d'être regardée** — tu ne peux pas perdre de points parce que je ne l'ai pas trouvée.

| Exigence | Où (scène + objet) | Comment y arriver en jouant |
|----------|--------------------|-----------------------------|
| A4 · clé/serrure | `Zone2` · `Cle_Manivelle` → `Porte_Atelier` | Ramasser la manivelle sur l'établi, revenir à la porte rouge |
| D7 · cinématique | `Zone3` · `Timeline_Reacteur` | Actionner le levier final au fond de la salle de contrôle |
| E3 · son 3D | `Zone1` · `AudioSource_Generatrice` | S'approcher de la génératrice à gauche du départ |
| … | … | … |

Tu ne t'attribues **aucune note** — tu indiques seulement où regarder. Compte environ trente minutes pour la remplir, et remplis-la **avant** ta dernière séance de travail : c'est le meilleur moyen de découvrir ce qui te manque encore pendant que tu peux encore le faire.

---

## Les étapes, séance par séance

| Étape | Séance | Ce que tu construis | Livrable à la fin |
|-------|--------|---------------------|-------------------|
| **É1** | S4 | Concevoir et ouvrir le chantier | GDD verrouillé (dont **parti pris** et **découpage des zones**) · dépôt + tableau créés · greybox de la zone 1 amorcé |
| **É2** | S5 | Le squelette | Menu titre → jeu → fin cliquable · HUD ancré · zone 1 parcourable |
| **É3** | S6 | Le personnage vivant | 5 états animés · caméra Cinemachine réglée · **la cinématique** déclenchée par une action |
| **É4** | S7 | **Prototype jouable — jalon F1** | Les 3 zones traversables en greybox · **les 3 portes fonctionnent et passent le test des trois questions** · début et fin · backlog MoSCoW monté |
| **É5** | S7–S8 | Le son et le *juice* | 3 ambiances · 5 sons déclenchés · réussite et échec ont chacun son et effet visuel · **ton script custom écrit et branché** |
| **É6** | S9 | **Tranche verticale — jalon F2** | La **zone 1 est finie** : habillée, éclairée, animée, sonorisée · premier build WebGL sur page privée |
| **É7** | S10 | L'habitant | Le PNJ patrouille, détecte, réagit |
| **É8** | S11 | Publier | Page itch.io en ligne · README + crédits · `PlayerPrefs` branché · **carte de preuves amorcée** |
| **É9** | S12 | **Alpha — jalon F3** | Les 3 zones habillées · **tests de la carte postale et du chronomètre passés** · build en ligne · 3 playtests reçus |
| **É10** | S13 | Corriger | Les *issues* issues des playtests sont fermées ou reclassées |
| **É11** | S14 | **Gel — jalon F4** | Contenu complet · checklist de finition · build de validation publié |
| **É12** | S15 | *Gold* | Version finale publiée · **carte de preuves complète** · oral de 10 minutes |

!!! warning "L'étape É6 est celle qui décide de ta session"
    Finir **une seule zone au complet** à la S9 est plus important que d'avoir esquissé les trois. C'est là que tu découvres ce que « fini » coûte réellement — et il te reste six semaines pour appliquer ce prix aux deux autres, ou pour décider d'en couper une.

---

## Ton backlog de départ

À la séance 4, tu crées ton tableau **GitHub Projects** et tu importes ces cartes. Ce sont **les exigences du socle transformées en tâches**. Tu ajouteras les tiennes par-dessus — celles qui viennent de *ton* jeu.

Un **jalon GitHub** par étape (`É1` à `É12`), une *issue* par ligne :

```txt
É1  Rédiger le GDD, y inscrire le parti pris en une phrase
É1  Choisir le découpage des zones (3 scènes ou monde continu) et le noter au GDD
É1  Choisir les 3 types de gating et les noter au GDD
É1  Créer le dépôt, le .gitignore Unity, le tableau Projects
É1  Greyboxer la zone 1

É2  Monter le menu titre, pause et fin
É2  Ancrer le HUD et le tester à deux résolutions
É2  Rendre la zone 1 parcourable de bout en bout

É3  Rigger le personnage (Mixamo) et monter les 5 états
É3  Régler la caméra Cinemachine (follow, damping, confiner)
É3  Monter la cinématique et la déclencher par une action

É4  Greyboxer les zones 2 et 3
É4  Construire la porte 1 et lui faire passer le test des trois questions
É4  Construire la porte 2 et lui faire passer le test des trois questions
É4  Construire la porte 3 et lui faire passer le test des trois questions
É4  Brancher la condition de victoire et la condition de défaite
É4  Monter le backlog MoSCoW complet

É5  Poser les 3 ambiances sonores
É5  Placer les 5 échantillons déclenchés
É5  Créer le retour de réussite (son + particule + HUD)
É5  Créer le retour d'échec (son + particule + HUD)
É5  Configurer l'Audio Mixer et le slider de volume
É5  Écrire ton script custom et l'appeler depuis un CES (Invoke Events)

É6  Habiller la zone 1 (prefabs, materials, image importée)
É6  Éclairer la zone 1 et régler le post-traitement
É6  Animer un élément de décor
É6  Publier un premier build WebGL sur une page privée

É7  Baker le NavMesh
É7  Monter le PNJ : patrouille, détection, réaction

É8  Créer la page itch.io et publier le build
É8  Rédiger le README et les crédits des médias
É8  Brancher PlayerPrefs (volume + progression)
É8  Amorcer la carte de preuves

É9  Habiller et éclairer les zones 2 et 3
É9  Passer le test de la carte postale (3 captures côte à côte)
É9  Chronométrer chaque zone (1 min minimum, 10 min au total)
É9  Publier l'alpha
É9  Faire tester par 3 camarades et consigner les observations

É10 Fermer les issues issues des playtests
É11 Passer la checklist de finition (magenta, objets flottants, textes provisoires)
É11 Publier le build de validation
É12 Compléter la carte de preuves
É12 Publier la version finale et préparer l'oral
```

!!! tip "Une carte = une séance de labo maximum"
    Si une carte ne peut pas être finie en deux heures, elle est trop grosse : découpe-la. « Faire la zone 2 » n'est pas une carte, c'est un aveu.

---

## La grille d'évaluation

| Critère | Ce qu'on regarde | Pondération |
|---------|------------------|-------------|
| **Objectif 1 — intégration des médias** | Sections **D** et **E** : visuel, animation, son, lumière, caméra | **18 %** |
| **Objectif 2 — actions et progression** | Sections **A**, **B** et **C** : structure, portes, interactions, rétroaction | **18 %** |
| **Créativité et cohérence du parti pris** | Section **H** : intention nommée et tenue, zones réellement distinctes, détournement d'un outil, décisions justifiées à l'oral | **12 %** |
| **Rigueur — réalisation des tâches des jalons** | Les *issues* `must` déposées aux quatre jalons sont fermées, et démontrées à l'oral | **12 %** |
| **Finition et publication** | Section **G** : build WebGL, itch.io, README, crédits, carte de preuves, aucun défaut visible | **5 %** |
| **Oral et démonstration** | Concept, tâches reçues et ce qui en a été fait, une difficulté technique et sa résolution, ce que tu ferais autrement | **5 %** |
| | | **70 %** |

!!! note "Comment le socle se traduit en note"
    Les exigences des sections **A** à **G** se notent en **présent / absent** : c'est là que se joue la maîtrise des savoirs essentiels, et il n'y a rien à discuter — l'exigence fonctionne ou elle ne fonctionne pas.

    Les sections **H** et **Rigueur** se notent en **qualité**, et c'est là que se joue la différence entre deux jeux qui cochent les mêmes cases. Un jeu bâclé peut obtenir tous ses points de savoirs et perdre les 24 % d'attitudes ; c'est exactement ce que le devis départemental demande d'évaluer.

    **Aucun point d'ampleur nulle part.** Une quatrième zone ne rapporte rien. Le chemin le plus court vers une bonne note est de livrer **exactement le socle, avec une intention claire, très bien fait.**

---

## Trois projets conformes, très différents

Ces trois jeux valident **le même socle**.

!!! example "« Relève » — énigme, 3 salles"
    Un technicien répare une station abandonnée. **Porte 1** *(clé/serrure)* : trouver la manivelle pour rétablir le courant. **Porte 2** *(connaissance)* : reconstituer un code à partir d'indices affichés au mur. **Porte 3** *(mécanisme)* : trois leviers à actionner dans l'ordre. Le PNJ est un robot de maintenance qui suit le joueur et éclaire les zones sombres. Cinématique : le démarrage du réacteur. Défaite : la surchauffe si on tarde. Parti pris : *lent, silencieux, industriel*.

!!! example "« Cueillette » — exploration, 3 biomes"
    Une créature ramasse des graines. **Forêt → marais → sommet.** **Porte 1** *(collecte)* : trois graines. **Porte 2** *(adresse)* : traverser le marais de nénuphar en nénuphar. **Porte 3** *(découverte)* : trouver la faille dans la paroi. Le PNJ est un oiseau qui vole vers la prochaine graine quand on l'approche. Cinématique : la floraison du sommet. Pas de défaite — justifié au GDD comme jeu contemplatif. Parti pris : *doux, lumineux, sans pression*.

!!! example "« Sentinelle » — action, 3 secteurs"
    Un infiltré traverse une base. **Porte 1** *(adresse)* : atteindre le toit par les caisses. **Porte 2** *(confrontation)* : désactiver l'alarme sans se faire voir par le garde. **Porte 3** *(clé/serrure)* : la carte magnétique de l'extraction. Le PNJ patrouille, voit dans un cône et poursuit. Cinématique : l'hélicoptère qui arrive. Défaite : repéré trois fois. Parti pris : *tendu, nocturne, minimal*.

Trois genres, trois ambiances, trois univers. **Le même squelette, la même charge de travail, la même grille.**

---

??? note "Traçabilité au devis ministériel *(annexe enseignant)*"
    **Objectif 1 — intégrer des médias visuels et sonores dans une expérience ludique**

    | Savoir essentiel | Exigence(s) |
    |---|---|
    | Logiciels d'intégration d'expériences ludiques | *évalué au devoir 01 et au jeu express* |
    | Choix du logiciel | *évalué au devoir 01* |
    | Installation et configuration des ressources | *évalué au devoir 01 et au jeu express* |
    | Création d'un environnement virtuel navigable | **A1, A2** |
    | Configuration de la caméra virtuelle 2D | **D6** |
    | Classement des fichiers et des médias | **G2, G3, G8** — également évalué aux deux carnets de bord |
    | Intégration d'images dans l'environnement virtuel | **D1, D2** |
    | Intégration de médias sonores | **E1, E3, E4** |
    | Animation d'éléments visuels | **D4, D7** |
    | Compilation de l'application | **G1** |

    **Objectif 2 — programmer des actions ludiques pour la progression**

    | Savoir essentiel | Exigence(s) |
    |---|---|
    | Notions d'interaction : interacteur, affordance, engagement, agentivité | **A5, B5** + GDD |
    | Environnement de programmation | **B6** |
    | Fonctionnement d'une interface virtuelle (menu) | **A8** |
    | Déplacement dans l'environnement virtuel | **B1** |
    | Interactions virtuelles | **B3, F1** |
    | Détection de collisions pour le déclenchement d'évènements | **B4** |
    | Transitions de scènes | **A9** |
    | Progression en fonction de la réussite d'une action | **A3, A7** |
    | Programmation d'un système de clé et de porte | **A4** |
    | Intégration d'une interface graphique HUD | **C3, C4** |
    | Indication visuelle et sonore des réussites et échecs | **C1, C2** |
    | Déclenchement d'échantillons sonores | **E2** |
    | Détection de l'état du personnage | **B2** |
    | Indication visuelle et animation de l'état du personnage | **B2** |

    **Attitudes professionnelles du devis départemental**

    | Attitude | Exigence(s) | Critère |
    |---|---|---|
    | **Créativité** | **H1 à H5** | Créativité et cohérence du parti pris — 12 % |
    | **Rigueur** | **G5, G6, G7, G8** + issues des jalons | Rigueur — 12 % · Finition — 5 % · Carnet de bord — 10 % (hors projet) |

    Les 14 savoirs de l'objectif 2 sont évalués dans le projet final. Trois savoirs de l'objectif 1 — tous relatifs au choix et à l'installation du logiciel — le sont plus tôt, au devoir 01 et au jeu express : ils ne se démontrent qu'une fois.
