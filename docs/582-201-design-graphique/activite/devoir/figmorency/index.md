---
tags: 
  - Devoir
  - Évaluation sommative
---

# Figmorency

L'objectif de ce projet est de concevoir un **jeu vidéo point-and-click jouable** en utilisant exclusivement les outils de prototypage de Figma : variables, logiques conditionnelles, composantes, animations et transitions.

Ce projet compte pour **30%** de votre note finale. Il est remis **et** présenté oralement au cours 15.

## Exemple

<div class="grid grid-1-2" markdown>
  ![](./Hackerman-1977.png)

  **[Hackerman 1977](https://www.figma.com/proto/wozH7xzVNQw2aIR8jymeTL/Hackerman-1977?scaling=scale-down&content-scaling=fixed){.stretched-link}**
</div>

Pour les curieuses et les curieux, le [fichier source du jeu Hackerman 1977](./Hackerman-1977.fig)

## Échéances

| Étape | Échéance |
| :--- | :--- |
| **FigJam validé par l'enseignant** | Cours 12 |
| **Remise + présentation orale** | Cours 15 |

## Le concept

Définir le jeu sur un **FigJam**.

- [ ] **Titre** du jeu
- [ ] **Synopsis** : contexte, personnage(s) et objectif
- [ ] **Ambiance** : humoristique, mystérieux, horreur, rétro, etc.
- [ ] **Moodboard** : au moins 6 références visuelles (jeux, films, illustrations) qui inspirent votre direction artistique.
- [ ] **Carte des scènes** (au moins 5) : un schéma montrant les scènes du jeu et les liens entre elles. Les mécaniques utilisées dans chaque scène doivent y être indiquées. Voici un exemple :

![](./2D-rough-level-map.jpg){data-zoom-image .w-10}
![](./schema.png){data-zoom-image .w-25}

- [ ] Valider le contenu du FigJam avec l'enseignant **au cours 12**.

## Les mécaniques de jeu

### Mécaniques obligatoires

- [ ] Le jeu doit avoir une scène de **menu principal**.
- [ ] Le jeu doit avoir une scène **échec** (_game over_) avec la possibilité de recommencer.
- [ ] Le jeu doit avoir une scène **victoire** avec la possibilité de recommencer.
- [ ] **Navigation entre scènes** : Le joueur se déplace d'un lieu à un autre en cliquant sur des zones (portes, flèches, sorties). Les transitions doivent être animées.
- [ ] **Action conditionnelle inter-scènes** : Une action dans une scène doit influencer l'état d'une autre scène. Par exemple : un levier actionné dans la forêt ouvre une trappe dans la bibliothèque.

### Mécaniques au choix

En plus des mécaniques obligatoires, vous devez implanter **au moins 4** mécaniques différentes parmi les suivantes.

| Mécanique | Description | 
| :--- | :--- |
| :green_circle: **Objet caché** | Des zones cliquables sont dissimulées dans une scène. Cliquer au bon endroit déclenche une réaction. |
| :green_circle: **Interrupteur d'état** | Un élément (lumière, machine, panneau) peut être activé ou désactivé. Son état change l'apparence de la scène. |
| :blue_circle: **Dialogues** | Un personnage affiche du texte ou propose des choix de réponses. Les réponses influencent la suite du jeu. | 
| :blue_circle: **Inventaire** | Le joueur ramasse des objets en cliquant dessus. Ils s'affichent dans un panneau persistant. |
| :blue_circle: **Compteur ou score** | Un nombre (vies, pièces, tentatives) varie selon les actions du joueur et s'affiche à l'écran en tout temps. | 
| :orange_circle: **Puzzle de combinaison** | Le joueur doit entrer un code ou effectuer des actions dans le bon ordre pour déverrouiller un objet ou une zone. | 
| :orange_circle: **Fins alternatives** | Le jeu propose au moins deux fins différentes selon les choix ou actions effectués par le joueur. |
| :orange_circle: **Badges** | À la façon Steam, PlayStation ou Xbox, des succès sont attribués pour des actions spécifiques. La liste doit être visible dans un menu à part. |
| :orange_circle: **Mini-jeu intégré** | Un court défi interactif est intégré dans une scène : mémoire, quiz, remise en ordre, etc. |

!!! info "Légende de difficulté"
    :green_circle: Accessible · :blue_circle: Intermédiaire · :orange_circle: Ambitieux

## La narration

Le jeu doit guider le joueur avec du texte à au moins deux moments :

- [ ] **Messages contextuels** : si le joueur clique sur quelque chose qu'il ne peut pas encore utiliser, un message doit apparaître (ex. : *« Cette porte est verrouillée. »*).
- [ ] **Indices ou dialogues** qui donnent des pistes pour progresser dans le jeu.

Le contenu textuel doit être entièrement en français. Aucun anglais permis.

La narration peut être humoristique, dramatique ou absurde, mais elle doit être cohérente avec l'ambiance du jeu.

## La direction artistique

La cohérence visuelle, la créativité et les techniques de design graphique apprises en classe seront rigoureusement évaluées.

Vous pouvez au besoin utiliser des sources externes, mais la cohérence graphique est primordiale.

- [ ] Une **palette de couleurs** et une **typographie** cohérentes sont appliquées dans toutes les scènes.
- [ ] Le jeu comporte **au moins 5 scènes distinctes**.
- [ ] L'interface (boutons, inventaire, messages) est intégrée à l'univers visuel.

## L'introduction animée

Le jeu s'ouvre sur une **séquence d'introduction animée** (comme dans *Hackerman 1977*).

- [ ] L'introduction doit présenter le titre du jeu, le nom de l'auteur ou l'autrice, le sigle du cours et l'année.
- [ ] Elle utilise au moins une animation Figma (Smart Animate, transition ou After Delay).
- [ ] Elle se termine sur une action permettant de commencer à jouer.

!!! note "Il peut y avoir plusieurs séquences enchaînées. C'est une bonne occasion d'introduire l'histoire du jeu."

## Présentation orale (cours 15)

Au cours 15, vous présenterez votre jeu à la classe en **10 minutes**.

Vous devrez couvrir :

- [ ] Votre **concept** : synopsis, ambiance, univers visuel.
- [ ] Vos **mécaniques** : lesquelles avez-vous implantées et comment fonctionnent-elles techniquement dans Figma ?
- [ ] Les **défis rencontrés** pendant le projet et comment vous les avez résolus.
- [ ] Ce que vous feriez si vous aviez à recommencer le projet.

## Remise et grille d'évaluation

À venir

[STOP]

## Remise

Date : Cours 15 (remise du lien + présentation orale)

Sur Teams, remettre **un seul fichier zip** nommé `nomfamille-prenom-projetfinal.zip` comprenant :

- [ ] `nomfamille-prenom-projetfinal.fig` fichier source Figma
- [ ] `nomfamille-prenom-projetfinal-figjam.pdf` export du tableau FigJam
- [ ] `nomfamille-prenom-projetfinal-lien.txt` lien vers le prototype en mode lecture

## Grille d'évaluation

### Document de conception -  2 pts

| Points | Détails |
| :---: | :--- |
| 2 | Tous les éléments sont présents. Le moodboard est pertinent. La carte des scènes correspond fidèlement au jeu livré. |
| 1 | Des éléments manquent ou le FigJam ne reflète pas le jeu final. |
| 0 | Absent ou incomplet au point d'être inexploitable. |

### Direction artistique -  4 pts

| Points | Détails |
| :---: | :--- |
| 4 | L'univers visuel est cohérent et original. Palette, typographie et éléments graphiques sont harmonieux dans toutes les scènes. L'interface s'intègre à l'univers. |
| 3 | La cohérence est globalement présente, mais quelques scènes ou éléments d'interface détonent. |
| 2 | L'identité visuelle existe, mais l'application est inégale d'une scène à l'autre. |
| 1 | Peu d'effort d'unité visuelle. Les scènes semblent traitées séparément. |
| 0 | Aucune direction artistique perceptible. |

### Mécaniques techniques -  6 pts

**Mécaniques obligatoires -  2 pts**

| Points | Détails |
| :---: | :--- |
| 2 | La navigation est animée et fluide. L'action conditionnelle inter-scènes fonctionne correctement dans les deux sens. |
| 1 | L'une des deux mécaniques obligatoires fonctionne, ou les deux fonctionnent partiellement. |
| 0 | Les mécaniques obligatoires sont absentes ou non fonctionnelles. |

**Mécaniques au choix -  2 pts**

| Points | Détails |
| :---: | :--- |
| 2 | Au moins 2 mécaniques au choix sont implantées et fonctionnent correctement du point de vue du joueur. |
| 1 | Une seule mécanique au choix est présente, ou les deux fonctionnent partiellement. |
| 0 | Aucune mécanique au choix n'est implantée. |

**Utilisation des variables et conditions -  2 pts**

| Points | Détails |
| :---: | :--- |
| 2 | Les variables sont nommées clairement et utilisées à bon escient. Les conditions produisent des résultats cohérents selon l'état du jeu. |
| 1 | Les variables fonctionnent, mais leur usage est approximatif ou redondant. |
| 0 | Aucune variable ou condition n'est utilisée. |

### Expérience de jeu -  3 pts

| Points | Détails |
| :---: | :--- |
| 3 | Le jeu se joue de début à fin sans blocage. Les messages contextuels guident le joueur. On comprend ce qu'on peut faire sans explication extérieure. |
| 2 | Le jeu est jouable, mais certains moments sont confus ou un blocage mineur est possible. |
| 1 | La progression est difficile à suivre ou nécessite une explication pour être comprise. |
| 0 | Le jeu n'est pas jouable de bout en bout. |

### Introduction animée -  2 pts

| Points | Détails |
| :---: | :--- |
| 2 | L'introduction est animée, soignée et cohérente avec l'ambiance. Elle donne envie de jouer. |
| 1 | Une animation est présente, mais l'introduction est sommaire ou mal intégrée à l'univers. |
| 0 | Absente ou non animée. |

### Présentation orale -  3 pts

| Points | Détails |
| :---: | :--- |
| 3 | Le concept est expliqué clairement. Les mécaniques sont présentées avec précision. Un défi et une réflexion sur la version 2 sont abordés. Le temps est respecté. |
| 2 | La présentation est complète, mais certains éléments sont survolés ou la structure manque de clarté. |
| 1 | La présentation est incomplète ou difficile à suivre. |
| 0 | Absence ou refus de présenter. |

---

**Total : / 20 points**

_(le résultat sera converti en 30 % de la note finale)_