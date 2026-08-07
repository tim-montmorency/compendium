# Heuristiques d'évaluation d'un jeu

*[GDD] : Game Design Document
*[UX] : User Experience
*[N/A] : Non applicable

Une **heuristique**, c'est une règle générale de conception qu'on utilise comme grille de lecture : au lieu de demander « est-ce que ton jeu est bon? » (question à laquelle personne ne sait répondre), on demande « est-ce que la première action du joueur est évidente? » - et là, on peut répondre.

La grille ci-dessous vient d'un recensement de la recherche en UX de jeu[^koeffel] : 29 heuristiques compilées à partir de cinq études antérieures, puis validées en évaluant cinq jeux commerciaux et en comparant les résultats aux notes des sites de critiques. Le constat : **plus l'évaluation heuristique trouve de problèmes, plus la note du jeu est basse**. Autrement dit, une grille appliquée par des non-experts, sans laboratoire, en une heure, prédit assez bien ce que les joueurs vont détester.

[^koeffel]: Koeffel, C., Hochleitner, W., Leitner, J., Haller, M., Geven, A. & Tscheligi, M. (2010). *Using Heuristics to Evaluate the Overall User Experience of Video Games and Advanced Interaction Games*. Dans R. Bernhaupt (dir.), [*Evaluating User Experience in Games*](https://doi.org/10.1007/978-1-84882-963-3_13), Springer, p. 233-256.

!!! warning "Ce que cette page n'est pas"
    Ce n'est **pas** un cahier des charges. Rien ici ne s'ajoute à ce que tu dois livrer. C'est un outil de diagnostic : tu t'en sers pour trouver ce qui cloche dans un jeu qui existe déjà - le tien ou celui d'un pair.


## Quand s'en servir

| Moment | Ce que tu utilises | Pourquoi |
|---|---|---|
| **GDD (S3)** | Les 6 questions sur papier (ci-dessous) | Le reste est indécidable tant que rien n'est jouable |
| **Jalon 1 (S7)** | Section B : interface et rétroaction | C'est ce qui existe à ce stade |
| **Jalon 2 (S10)** | La [fiche d'observation](#la-fiche-dobservation-jalon-2) complète | Tous les systèmes sont là : c'est le moment où la grille paie |
| **S14 - gel** | Passe complète en solo sur ton propre jeu | Dernière chance de corriger avant le gel |

La règle : **une heuristique cochée sans preuve ne vaut rien.** Le format utile est toujours *heuristique → respectée / violée / N/A → ce que j'ai vu → à quel moment*. « Menu : violé » n'aide personne. « Menu : violé - au 3e essai je cherchais encore comment recommencer après ma mort, j'ai fermé la fenêtre » se corrige en dix minutes.


## Les 6 questions du GDD

Les seules qui se répondent honnêtement sur un document, avant qu'une seule ligne de code existe.

1. **Le joueur sait-il ce qu'il doit faire?** Peux-tu l'écrire en une phrase, avec un verbe?
2. **Qu'est-ce qu'il obtient en réussissant?** Un objet, un accès, une information, une animation - mais quelque chose.
3. **Qu'apprend-il dans les deux premières minutes,** et comment l'apprend-il sans qu'on le lui explique?
4. **La première expérience est-elle encourageante?** Sa première action réussit-elle?
5. **L'univers et la mécanique se répondent-ils?** Une mécanique de lumière appelle un lieu sombre; l'inverse est un placage.
6. **Comment le joueur sait-il qu'il progresse?** Pas « il le sait », mais : qu'est-ce qu'il *voit* ou *entend* qui le lui dit.


## La grille complète, filtrée pour ce cours

Sur les 29 heuristiques d'origine, celles qui suivent sont applicables au cahier des charges de la session. Les colonnes « Cours » renvoient à la séance où la notion a été vue.

### A. Jouabilité et progression

| # | Heuristique | Cours |
|---|---|---|
| A1 | Les **objectifs sont clairs** et présentés tôt. Le joueur sait comment les atteindre sans se coincer | 3, 5 |
| A2 | Les **récompenses sont significatives** - un accès, un objet, une capacité. Acquérir une habileté est aussi une récompense | 5 |
| A3 | Le joueur sent qu'il **contrôle** : son personnage répond, et ses actions ont un effet **persistant et visible** sur le monde | 4, 5 |
| A4 | Le **rythme** met de la pression sans frustrer. Défi et progression sont en équilibre | 11 |
| A5 | La **première expérience est encourageante** : la première action réussit | 5, 8 |
| A6 | Le récit, s'il y en a, **soutient** le jeu et se découvre **en jouant** - pas dans un mur de texte | 1 |
| A7 | Le jeu **ne stagne pas** : le joueur sent qu'il avance | 5 |
| A8 | Le jeu est **cohérent** et répond de façon **prévisible**. Univers, éléments et règles s'accordent | 3 |
| A9 | Les **conditions d'échec sont compréhensibles**, et le joueur a le droit à l'erreur | 8 |
| A10 | Le jeu et son issue sont perçus comme **équitables** - on perd parce qu'on a mal joué, pas parce que le jeu a triché | 8 |
| A11 | **Aucune tâche ennuyeuse** n'est obligatoire (traverser trois fois la même carte vide en est une) | 11 |
| A12 | Les mécaniques semblent **naturelles** : poids, inertie et réponse adaptés à la situation | 4, 12 |
| A13 | Le jeu **transporte émotionnellement**, ne serait-ce qu'un peu : tension, surprise, satisfaction | 1, 12 |

### B. Interface, lisibilité et rétroaction

| # | Heuristique | Cours |
|---|---|---|
| B1 | Les **éléments sont identifiables** : personnage, obstacles, objets interactifs, sortie. Ils ressortent - **même pour une mauvaise vue ou un daltonisme** - et ont l'air de ce à quoi ils servent | 3, 5 |
| B2 | Les **effets visuels et sonores** suscitent l'intérêt et donnent une rétroaction **immédiate** à l'action | 7, 8, 12 |
| B3 | L'interface est **cohérente** (couleurs, typographie, ton) et **aussi peu intrusive que possible** | 8 |
| B4 | Le joueur **ne compte rien lui-même** : l'information critique ressort, l'information inutile disparaît du HUD | 8 |
| B5 | Le **menu est intuitif** et perçu comme faisant partie du jeu, pas comme un formulaire | 6 |
| B6 | La **première action du joueur est évidente** et produit une rétroaction positive immédiate | 5, 8 |
| B7 | Les **contrôles sont réactifs**, avec une sensibilité appropriée | 4 |
| B8 | La **caméra** offre une vue dégagée : elle ne traverse pas les murs, ne cache pas l'objectif, ne donne pas mal au cœur | 6 |
| B9 | On **quitte et on relance** facilement : le flux titre → jeu → fin → titre fonctionne dans les deux sens | 6 |

### Ce qui ne s'applique pas ici (et pourquoi)

Ne perds pas ton temps dessus - la grille d'origine s'adresse à des productions commerciales.

| Heuristique d'origine | Pourquoi elle saute |
|---|---|
| Difficulté variable, « facile à apprendre, difficile à maîtriser » | Un seul niveau, une seule mécanique |
| Rejouabilité, contenu *skippable* | Session de jeu de quelques minutes |
| Intelligence artificielle crédible mais imprévisible | Hors cahier des charges |
| Mini-carte et mémorisation du niveau | Un seul niveau, visible d'un coup |
| Sauvegarde à différents états | Enrichissement hors devis ([recettes avancées](./recettes-avancees.md)) |
| Personnalisation, remappage des contrôles | Hors cahier des charges |


## La fiche d'observation - Jalon 2

Douze items, choisis parce qu'ils se vérifient en **cinq minutes de jeu** sur le poste d'un pair. Un exemplaire par jeu évalué.

!!! note "Comment remplir"
    Coche une seule case par ligne. **Toute ligne « Violée » exige une preuve** dans la colonne de droite : ce que tu as vu, et à quel moment. Sans preuve, la ligne ne compte pas.

| # | Ce que je vérifie | ✅ | ❌ | N/A | Ce que j'ai vu, et quand |
|---|---|:-:|:-:|:-:|---|
| 1 | Ma **première action** est évidente, sans qu'on me l'explique | ☐ | ☐ | ☐ | |
| 2 | Je comprends **mon objectif** dans les 30 premières secondes | ☐ | ☐ | ☐ | |
| 3 | J'ai appris à jouer **en jouant**, pas en lisant | ☐ | ☐ | ☐ | |
| 4 | Je repère les **objets interactifs** sans les chercher au hasard | ☐ | ☐ | ☐ | |
| 5 | Quand je réussis, je le **vois et je l'entends** immédiatement | ☐ | ☐ | ☐ | |
| 6 | Quand j'échoue, je **comprends pourquoi** | ☐ | ☐ | ☐ | |
| 7 | Je sens que **j'avance** vers quelque chose | ☐ | ☐ | ☐ | |
| 8 | Les **contrôles répondent** : le personnage fait ce que je demande, quand je le demande | ☐ | ☐ | ☐ | |
| 9 | La **caméra ne me gêne jamais** (murs, angles, objectif caché) | ☐ | ☐ | ☐ | |
| 10 | Le **HUD** me donne l'info utile, et rien de plus | ☐ | ☐ | ☐ | |
| 11 | Le **menu** fonctionne : titre → jeu → fin, et je peux recommencer | ☐ | ☐ | ☐ | |
| 12 | **Rien ne me surprend mal** : le jeu réagit comme je m'y attends | ☐ | ☐ | ☐ | |

**Les trois questions de sortie**, à répondre en une phrase chacune :

* Le **meilleur moment** de ce jeu, c'était quoi?
* La **plus grosse friction**, c'était quoi?
* Si tu ne pouvais corriger **qu'une seule chose**, ce serait laquelle?


## Les deux passes

C'est le point important, et il est contre-intuitif : la recherche montre que l'évaluation par grille et l'observation d'un joueur trouvent des problèmes **différents**, avec très peu de recoupement[^gap]. La grille attrape ce que l'observation rate, et l'inverse. Faire une seule des deux, c'est passer à côté de la moitié des problèmes.

[^gap]: Desurvire, H. & Wiberg, C. (2010). *User Experience Design for Inexperienced Gamers: GAP – Game Approachability Principles*. Dans R. Bernhaupt (dir.), [*Evaluating User Experience in Games*](https://doi.org/10.1007/978-1-84882-963-3_8), Springer, p. 131-147. Sur quatre jeux, l'évaluation heuristique a trouvé 43 problèmes d'accessibilité contre 22 pour le test utilisateur - mais le test utilisateur a trouvé 185 problèmes de jouabilité contre 47.

**Passe 1 - la grille (12 min).** Tu joues au jeu du pair, la fiche à côté. Tu cherches activement des violations. Tu as le droit de recommencer, de fouiller, de faire exprès de mal jouer.

**Passe 2 - l'observation silencieuse (12 min).** Un pair joue à **ton** jeu. Tu le regardes. Et voici la seule règle, la plus difficile du cours :

!!! danger "Tu n'as pas le droit de parler"
    Pas d'indice. Pas de « clique là ». Pas de « ah oui, ça c'est un bug, normalement… ». Pas de soupir.

    Chaque fois que tu as envie d'intervenir, **note l'heure et ce qu'il faisait**. Cette liste-là, c'est ta liste de problèmes. Tu ne seras pas assis à côté du joueur le jour de la remise.

**Restitution (6 min).** Chacun récupère sa fiche et ses notes d'observation. Compare les deux listes : tu verras qu'elles ne se recoupent presque pas. Chaque point devient une **issue** GitHub, préfixée `[MUST]` si le jeu est incompréhensible sans, `[SHOULD]` sinon.


## Ressources

* Federoff, M. (2002). [*Heuristics and Usability Guidelines for the Creation and Evaluation of Fun in Video Games*](https://www.researchgate.net/publication/244455894) - la thèse fondatrice des heuristiques de jeu
* Sweetser, P. & Wyeth, P. (2005). [*GameFlow: A Model for Evaluating Player Enjoyment in Games*](https://dl.acm.org/doi/10.1145/1077246.1077253) - le modèle du *flow* appliqué au jeu
* Nielsen, J. (1994). [*10 Usability Heuristics for User Interface Design*](https://www.nngroup.com/articles/ten-usability-heuristics/) - l'ancêtre, côté logiciel
