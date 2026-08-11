# Cours 5

## Validation du GDD et démarrage du jeu de session

À partir d'aujourd'hui, une seule cible : **ton jeu**, construit couche par couche jusqu'à sa publication à la fin de la session. La séance **verrouille** ton concept, t'apprend à le protéger (versionning) et pose ses fondations (greybox).

<!-- ## Déroulement de la séance

| Temps | Activité |
|---|---|
| 0h00 – 0h20 | Remise des GDD + constats de groupe |
| 0h20 – 1h00 | Théorie : greyboxing, métriques, materials |
| 1h00 – 1h30 | Théorie : versionning (Git/GitHub) |
| 1h30 – 1h45 | Pause |
| 1h45 – 3h20 | Pratique : validations individuelles (5 min chacun) + démarrage du projet |
| 3h20 – 3h35 | Premier commit + devoirs | -->

!!! important "Remise aujourd'hui"
    Le [GDD de ton jeu de session](./devoirs/gdd-jeu.md) (**Travail 1 - conception, 10 %**) se remet au **début de la séance**.

## La validation : cinq minutes, et c'est verrouillé

Chacun passe **cinq minutes** avec moi pendant la pratique. On regarde trois choses seulement :

1. Ta **boucle** tient-elle en une phrase de verbes?
2. Tes conditions de **victoire et d'échec** se traduisent-elles en `if`?
3. Ton **scope** est-il faisable en 11 séances?

Si les trois passent, ton GDD est **verrouillé** : c'est la version de référence pour le reste de la session. Si l'un des trois accroche, on le règle sur place - c'est le but du rendez-vous, pas une mauvaise nouvelle.

!!! warning "Verrouillé ne veut pas dire figé"
    Un GDD reste un document **vivant** : des idées tomberont, d'autres s'ajouteront après les tests. Ce qui est verrouillé, c'est le **noyau** - la mécanique principale, la boucle, la condition de victoire. Changer de noyau à la semaine 10, c'est recommencer sa session.

## Théorie

### Le greyboxing : valider l'espace avant de le décorer

En studio, aucun niveau ne commence par les beaux assets. On construit d'abord en **blocs gris** (d'où le nom) : des cubes, des plans, des volumes bruts. Pourquoi?

* **La vitesse** : ton croquis de GDD devient jouable en 20 minutes
* **La vérité** : on découvre en marchant que le couloir est trop long, la salle trop vide, le saut impossible - des choses invisibles sur papier
* **L'économie** : déplacer un cube coûte 2 secondes; redécorer une salle complète coûte une soirée

La règle : **on décore seulement ce qui est validé en gris.** Décorer un niveau mal proportionné, c'est décorer deux fois.

!!! tip "Les métriques : le secret des pros"
    Avant de construire, mesure ton personnage : sa hauteur, la hauteur de son saut, sa vitesse. Toutes tes dimensions en découlent - hauteur d'un obstacle sautable, largeur d'un fossé franchissable, distance « longue ». Les studios documentent ces *metrics*; toi, note-les dans ton README.

### Les materials : la couleur de ton monde

Tout objet 3D porte un **material** : sa « peinture ». Un material URP définit la **couleur** (Base Map), l'aspect **métallique**, le **lustre** (Smoothness) et même l'**émission** (l'objet devient une source de lumière - on s'en servira au cours 13 avec le bloom).

Créer un material prend 20 secondes : **Project → clic droit → Create → Material**, choisis la Base Map, glisse-le sur l'objet. C'est tout.

Pourquoi en parler aujourd'hui? Parce que ton greybox mérite un **code de couleurs** : sol gris, murs gris foncé, objets interactifs en jaune vif. Avant même le premier asset Synty, ton niveau communique déjà - c'est de l'affordance à coût zéro, et le jury de studio fait exactement ça dans ses prototypes.

### Le versionning : la ceinture de sécurité

Trois histoires vraies, entendues chaque session :

* « Mon projet ne s'ouvre plus depuis la mise à jour » 💀
* « J'ai supprimé un dossier pour faire de la place » 💀
* « Ça marchait hier, j'ai changé plein d'affaires, je ne sais plus quoi » 💀

**Git** règle les trois : il prend des photos (*commits*) de ton projet à chaque étape. Tu peux regarder l'historique, comparer, **revenir en arrière**. **GitHub** en garde une copie en ligne : ton disque dur peut mourir, pas ton jeu.

Trois mots de vocabulaire, c'est tout ce qu'il faut :

| Terme | C'est quoi | Analogie |
|---|---|---|
| **Commit** | Une photo de ton projet + un message | Une sauvegarde nommée dans un jeu |
| **Push** | Envoyer tes commits sur GitHub | Téléverser sa sauvegarde dans le nuage |
| **.gitignore** | La liste de ce qu'on ne photographie PAS | Unity régénère `Library/` tout seul : inutile de le sauvegarder (et il pèse des Go!) |

!!! important "Le rituel, à chaque fin de séance, jusqu'à la fin de la session"
    1. **Commit** avec un message clair
    2. **Push** vers GitHub
    3. Vérifier sur github.com que c'est bien là

Un bon message de commit dit **ce qui a changé** :

| ❌ Mauvais | ✅ Bon |
|---|---|
| `update` | `Ajout du systeme cle/porte` |
| `aaaaa` | `Correction : la porte restait ouverte au redemarrage` |
| `cours 8` | `Sonorisation : musique ambiance + son de collecte` |

Dans 6 semaines, quand tu chercheras « c'était quand, la dernière fois que la porte marchait? », tu remercieras tes messages.


## Pratique

Créer le projet, importer les ressources, ouvrir le dépôt GitHub, rédiger le README et bloquer le greybox du niveau.

[Exercice - Démarrer TON jeu :material-arrow-right:](./exercices/cours05-demarrer-ton-jeu.md){ .md-button .md-button--primary }

## Devoir

* Termine le greybox et commence l'habillage Synty des zones validées
* Commit + push à chaque séance de travail - le rituel s'applique aussi à la maison

## Ressources

* [Guide GitHub Desktop (officiel)](https://docs.github.com/fr/desktop)
* [Level design : le greyboxing (article, en anglais)](https://book.leveldesignbook.com/process/blockout)

## Savoirs essentiels touchés

Création d'un environnement virtuel navigable, intégration d'images dans l'environnement virtuel, classement des fichiers et des médias.
