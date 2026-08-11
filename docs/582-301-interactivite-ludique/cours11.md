# Cours 11

## Publication et persistance

Un jeu que personne ne peut lancer n'existe pas. Aujourd'hui : le sortir de Unity, le mettre en ligne, et faire en sorte qu'il se souvienne de quelque chose.

<!-- ## Déroulement de la séance

| Temps | Activité |
|---|---|
| 0h00 – 0h40 | Build Settings et Player Settings |
| 0h40 – 1h20 | WebGL : contraintes et pièges |
| 1h20 – 1h35 | Pause |
| 1h35 – 2h10 | La page itch.io, README et crédits |
| 2h10 – 2h45 | PlayerPrefs |
| 2h45 – 3h10 | Performance et Profiler |
| 3h10 – 3h35 | Atelier | -->

## Compiler

### Pourquoi publier (vraiment)

### Les Build Settings

### Les Player Settings : icône, résolution, nom

### Les scènes incluses (et l'erreur classique)

## WebGL

### Ton jeu devient une page web

### Les contraintes : pas de fenêtres natives, compression, taille

### Les pièges fréquents

!!! note "Le premier upload a déjà eu lieu"
    Le devoir du [cours 9](./cours09.md) imposait un build WebGL sur une page privée. Aujourd'hui on **règle** les problèmes rencontrés, on ne les découvre pas : compression, taille des banques audio, chemins d'assets, temps de chargement.

## itch.io

### La page de projet, version projet final

### L'*embed* et les dimensions

### Les visuels de page et la description

### Les contrôles : dire au joueur quoi faire

## Le README et les crédits

!!! warning "Critère de la grille finale"
    Tous les médias externes doivent être cités : source, auteur, licence. Les assets Synty aussi. C'est une exigence légale avant d'être une exigence de cours.

## La sauvegarde

### `PlayerPrefs` : trois clés suffisent

### `SetInt`, `SetFloat`, `SetString`, `Save`

### `DeleteAll` : comment tester une sauvegarde

### Ce qu'on sauvegarde : progression, options, meilleur score

!!! note "Contenir l'ambition"
    `PlayerPrefs` suffit. Ton jeu a un niveau et une mécanique — il n'y a rien à sérialiser qui ne tienne pas dans trois clés. JSON existe pour les états complexes, les chemins de fichiers, les versions de sauvegarde et la corruption de données. C'est un sujet de session avancée.

## La performance

### Le Profiler, en survol

### Le *batching*

### Le nombre de lumières temps réel

### La taille des textures

## Pratique

## Devoirs

## Ressources

## Savoirs essentiels touchés

<!--
================================================================
NOTES DE RÉDACTION — à supprimer une fois la séance écrite
================================================================
À rapatrier depuis .archive/ (voir .archive/MIGRATION.md) :
  - .archive/cours13.md  § Pourquoi publier (vraiment)
                         § WebGL : ton jeu devient une page web
                         § La page itch.io, version projet final
                         § Contrôles
                         § Crédits et licences : obligatoire, légal, professionnel
                         § En survol (optionnel) : sauvegarder des données
  - .archive/exercices/cours13-publication-et-game-feel.md (partie publication)

À écrire à neuf : Build Settings et Player Settings en détail,
PlayerPrefs en profondeur (l'archive n'est qu'un survol), Profiler
et performance.
================================================================
-->
