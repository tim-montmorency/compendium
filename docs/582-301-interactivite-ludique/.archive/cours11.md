# Cours 11

## Consolidation : la tranche verticale - Jalon 2

Dernière séance d'apprentissage obligatoire. Après aujourd'hui, **tout ce qui est nécessaire pour finir ton jeu a été vu** - il reste 4 séances pour le finir bien. La séance sert à intégrer, rattraper, planifier la production… et livrer une **tranche verticale** complète.

<!-- ## Déroulement de la séance

| Temps | Activité |
|---|---|
| 0h00 – 0h35 | Théorie : la tranche verticale, planifier une production |
| 0h35 – 2h15 | Pratique : intégration et rattrapage (pause incluse) |
| 2h15 – 2h45 | Test croisé par les pairs |
| 2h45 – 3h10 | Présentations éclair |
| 3h10 – 3h35 | Création des issues GitHub + build + remise du Jalon 2 | -->


## Théorie

### La tranche verticale : le concept industriel du jour

Imagine ton jeu comme un gâteau étagé : chaque étage est un système (déplacement, interactions, son, HUD, animation…). Deux façons d'en couper une part :

| | Tranche **horizontale** | Tranche **verticale** |
|---|---|---|
| C'est quoi | UN système complet, les autres absents | TOUS les systèmes, chacun minimal |
| Exemple | « Mon niveau est magnifique mais rien n'est interactif » | « Tout marche, rien n'est poli » |
| Ce qu'on apprend | Presque rien sur le jeu final | **Si le jeu fonctionne** |

L'industrie ne jure que par la verticale : c'est elle qu'on montre aux éditeurs, elle qui révèle les vrais problèmes (les systèmes qui se parlent mal), elle qui rassure. **Ton livrable d'aujourd'hui est une tranche verticale** : tous les systèmes présents, même modestes.

Pourquoi c'est la bonne stratégie pour toi aussi? Parce qu'à partir d'une tranche verticale, **chaque heure de travail améliore un jeu qui marche déjà**. L'inverse - polir un système pendant que d'autres n'existent pas - c'est risquer d'arriver à la semaine 15 avec un niveau splendide… injouable.

### La checklist du cahier des charges

| Système | Vu au cours | Présent dans ton jeu? |
|---|---|---|
| Environnement navigable (assets Synty) | 3 | ☐ |
| Personnage contrôlable, feel réglé | 4 | ☐ |
| Progression type clé/porte | 5 | ☐ |
| Caméra raffinée + flux titre → jeu → fin | 6 | ☐ |
| Musique + échantillons sur événements | 7 | ☐ |
| HUD + feedback succès **et** échec | 8 | ☐ |
| Animations (collectable + porte) + états sonorisés | 9 | ☐ |
| Build qui compile | 2, 7 | ☐ |

### Planifier une production : les issues GitHub

Il te reste ~4 séances. La différence entre les élèves qui finissent bien et les autres n'est pas le talent - c'est **la liste**. Une liste dans ta tête ment (elle oublie, elle gonfle, elle stresse); une liste écrite se gère.

L'outil du métier : les **issues** GitHub. Une tâche = une issue, avec un titre d'action :

| ❌ Mauvaise issue | ✅ Bonne issue |
|---|---|
| « Finir le jeu » | « Ajouter le son d'ouverture de la porte du fond » |
| « Bugs » | « Corriger : on peut sauter par-dessus le mur nord » |
| « Améliorer le niveau » | « Éclairer le chemin vers l'autel (guidage) » |

Priorise avec **MoSCoW**, la méthode des studios (simplifiée en trois niveaux) :

* **[MUST]** - sans ça, le jeu n'est pas remettable (un trou dans le cahier des charges, un bug bloquant)
* **[SHOULD]** - améliore clairement l'expérience (un son manquant, un feedback faible)
* **[COULD]** - si le temps le permet (le juice, les secrets, le poli)

Deux règles d'or : **les Must d'abord, toujours** - un Could terminé ne compense pas un Must manquant. Et **estime × 2** : tout prend deux fois plus longtemps que prévu; si ta liste de Must dépasse ~2 séances, coupe dans le contenu, pas dans le sommeil.

!!! tip "Le mur des 90 %"
    Dicton d'industrie : « les premiers 90 % du jeu prennent 90 % du temps; les derniers 10 % prennent l'autre 90 % ». Les finitions (menus, transitions, bugs bizarres) coûtent toujours plus cher qu'on pense. C'est exactement pourquoi les 4 prochaines séances existent - et pourquoi le *feature freeze* arrivera au cours 14.


## Pratique

Intégration et rattrapage, test croisé en deux passes, présentation éclair, création des issues et remise du Jalon 2.

[Exercice - Tranche verticale et plan de production :material-arrow-right:](./exercices/cours11-tranche-verticale.md){ .md-button .md-button--primary }

!!! success "Jalon 2 - sommatif (20 %)"
    **Livrable :** tranche verticale jouable - tous les systèmes du cahier des charges présents au moins minimalement, build compilé.
    C'est l'**activité de rétroaction de l'objectif 2** : *programmer des actions ludiques qu'un interacteur doit accomplir pour progresser*.

!!! abstract "À partir d'ici"
    Plus aucune notion bloquante. Les cours 12 à 14 sont dédiés à la **production**, avec des capsules d'enrichissement (level design, game feel, publication) - utiles, jamais nécessaires pour livrer. Ton pilote : ta liste d'issues.

## Devoir

* Entame tes issues **Must**, dans l'ordre. Ferme chaque issue terminée (le petit bouton « Close » - et la petite satisfaction qui vient avec)

## Ressources

* [Guide GitHub : About issues](https://docs.github.com/fr/issues/tracking-your-work-with-issues/about-issues)
* [Heuristiques d'évaluation d'un jeu](./extra/heuristiques.md) - la grille complète et la fiche d'observation

## Savoirs essentiels touchés

Consolidation de l'ensemble : progression en fonction de la réussite d'une action, compilation de l'application, et tous les savoirs des cours 5 à 10 réinvestis.
