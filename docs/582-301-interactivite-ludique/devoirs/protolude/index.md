# Protolude

*[CES]: Collider Event System

L'objectif du projet est de construire un niveau de jeu vidéo en y plaçant un personnage qui pourra accomplir des prérequis et échouer.

Ce projet compte pour **13 %** de la note finale.

## Partie 1 | L'habillage 🏔️

![](./assets.png){.w-100}

- [ ] Créer un nouveau projet « _Universal 3D_ » et le nommer « Protolude »
- [ ] Publier le projet sur un répertoire GitHub **public**
- [ ] Appliquer la classification de dossier apprise en classe
- [ ] Ajouter le _package_ de ***SyntyStudio*** et ***Collider Event System*** (CES)
- [ ] Positionner des prefabs SyntyStudio pour façonner un niveau de jeu
  > Varier la quantité et la diversité pour donner de l'ampleur au monde
- [ ] S'assurer que le personnage ne tombera jamais dans le vide **par accident**
  > Au besoin, ajouter des murs invisibles. Un trou volontaire doit quand même prévoir une boîte de détection CES.
- [ ] Imaginer un prérequis et préparer les Trigger CES pour les interactions (minimum 2)
  > Par exemple : récupérer une hache (1<sup>re</sup> interaction) pour couper un arbre (2<sup>e</sup> interaction).

## Partie 2 | L'interactivité 🪤

- [ ] Ajouter le package *Starter Assets: Character Controllers | URP*
- [ ] Ajouter un personnage jouable à la troisième personne
- [ ] Appliquer un des personnages SyntyStudio à la place du robot
- [ ] Ajouter au moins un objet, autre que le personnage, qui utilise la physique
  > Doit être cohérent avec l'esthétique du jeu
- [ ] Configurer les interactions avec _Collider Event System_
  > Une interaction doit en débloquer une autre. L'usage de condition est nécessaire.
- [ ] Déclencher la fin du jeu par un changement de scène
- [ ] Ajouter au moins un **danger** qui peut faire échouer le joueur
  > Ex. : une zone piège, un trou, une zone qu'il faut quitter avant la fin d'un délai (option dans CES), un obstacle physique. À la collision, **recharge la scène** ou **téléporte le joueur**.
- [ ] Écrire dans le README github des détails sur le prérequis, les interactions requises pour l'accomplir ainsi que l'élément ou les éléments qui peuvent empêcher d'y parvenir.

## Remise

**Échéance** : :calendar_spiral: la veille du cours 4 à :clock11: 23 h 59

**Format** : un lien vers le répertoire GitHub (public), déposé dans le devoir Teams.

!!! warning "Répertoire GitHub public"

    Un répertoire GitHub configuré en privé entraîne les mêmes pénalités qu'un retard.

## Critères de correction

| Critère | Ce qui est vérifié | Pts |
|---|---|---|
| **Organisation du projet** | Le projet Unity est positionné à la racine du GitHub et la classification de dossiers du cours est appliquée | 1 |
| **Personnage** | Un personnage du _Starter Assets_ à la 3<sup>e</sup> personne est utilisé pour se déplacer et un personnage SyntyStudio a remplacé le mannequin par défaut | 1 |
| **Objet physique** | Au moins un objet, autre que le personnage, est **visiblement** affecté par la physique | 1 |
| **Prérequis conditionnel** | Une interaction en débloque une autre, avec une **condition** CES. Sans la première, la seconde n'est pas faisable | 2 |
| **Victoire** | Un CES déclenche la fin du jeu par un changement de scène | 1 |
| **Échec** | Un danger recharge la scène ou téléporte le joueur | 1 |
| **README** | Le prérequis, les interactions qui le résolvent et ce qui peut faire échouer y sont décrits | 1 |
| **Rigueur et consignes respectées** | Le soin apporté à la finition. Par exemple : on ne traverse pas le décor et on ne sort pas du monde, le personnage démarre bien posé, les prefabs ne flottent pas, aucun material n'est resté magenta. | 2 |

| Critère | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| **Environnement et créativité** | Une scène de démonstration d'un package est réutilisée ou seulement quelques prefabs sont posés sans créativité | Un environnement fonctionnel, mais peu élaboré. Ne démontre pas un niveau suffisant d'effort ou de créativité | Le monde a de l'ampleur. La quantité et la diversité des prefabs témoignent d'un effort appréciable | Un monde amusant et créatif qui donne envie de s'y promener ! |

**Total : 13 points**

<!-- ## Savoirs essentiels évalués

* Logiciels d'intégration d'expériences ludiques
* Installation et configuration des ressources nécessaires
* Classement des fichiers et des médias
* Création d'un environnement virtuel navigable
* Intégration d'images dans l'environnement virtuel
* Déplacement dans l'environnement virtuel
* Détection de collisions pour le déclenchement d'évènements
* Progression en fonction de la réussite d'une action
* Transitions de scènes -->
