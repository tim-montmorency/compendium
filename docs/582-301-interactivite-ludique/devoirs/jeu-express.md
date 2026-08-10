# Évaluation 1 - Le jeu express

*[GDD] : Game Design Document

## Objectif

Démontrer que tu maîtrises les **gestes de base d'Unity** vus aux cours 2 et 3 : créer et ranger un projet, construire un environnement navigable, y placer un personnage contrôlable, détecter une action, relier des scènes, compiler et publier.

C'est une évaluation des **acquis techniques**, pas du talent de designer. Le jeu est volontairement minuscule : ce qui est noté, c'est qu'il **fonctionne** et qu'il soit **propre**.

!!! tip "Presque tout est déjà fait"
    Si tu as suivi les deux séances, il ne te reste qu'à finir ce qui traîne et à publier. Ce devoir n'est pas un nouveau projet.

## Ce qu'il faut remettre

1. Le **lien de ta page itch.io** (le jeu téléchargeable y est déposé)
2. Le **dossier du projet Unity** compressé, ou son dépôt - sans les dossiers `Library/` et `Builds/`

## La grille

| Critère | Ce qu'on regarde | Points |
|---|---|---|
| **Environnement navigable** | Un monde construit avec les prefabs Synty, qui se parcourt du départ à l'arrivée sans blocage ni chute hors du monde | 20 |
| **Personnage contrôlable** | Le prefab Starter Assets est en place et fonctionne (déplacement, saut, caméra) | 15 |
| **Détection et victoire** | Un trigger fonctionnel déclenche le changement de scène; le tag `Player` et `Is Trigger` sont bien configurés | 20 |
| **Flux de scènes** | Titre → Jeu → Victoire, les trois scènes sont dans la Build list, `Titre` en position 0, le bouton « Jouer » fonctionne | 15 |
| **Classement des fichiers** | L'arborescence `_Project` / `Plugins` est respectée, les objets de la Hierarchy sont nommés (pas de `GameObject (12)`) | 15 |
| **Compilation et mise en ligne** | Un build autonome qui se lance, déposé sur une page itch.io avec titre, description et une capture | 15 |
| | **Total** | **100** |

*Pondération : 10 % de la note finale.*

## Remise

* **Échéance :** début de la séance 4
* **Format :** lien itch.io + projet compressé

!!! warning "Les trois pièges qui coûtent des points chaque session"
    1. Le tag `Player` **créé mais pas assigné** au personnage - le trigger ne se déclenche jamais
    2. Le nom de la scène dans le script ≠ le nom du fichier de scène (`Victoire` vs `victoire`)
    3. Une scène **absente de la Build list** : elle ne peut pas être chargée, même si elle existe

## Savoirs essentiels évalués

Logiciels d'intégration d'expériences ludiques, installation et configuration des ressources, classement des fichiers et des médias, création d'un environnement virtuel navigable, intégration d'images dans l'environnement virtuel, déplacement dans l'environnement virtuel, détection de collisions pour le déclenchement d'événements, transitions de scènes, fonctionnement d'une interface virtuelle, compilation de l'application.
