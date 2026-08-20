# Cours 11

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

!!! info "Tu sauvegardes déjà, depuis le cours 3"
    La case **`Persistent`** d'une Variable du CES écrit sa valeur sur le disque et la recharge au lancement suivant. Tu t'en sers depuis huit semaines sans savoir ce qu'il y a dessous.

    Ce qu'il y a dessous, c'est `PlayerPrefs`. On l'ouvre aujourd'hui — non pas parce que la case ne suffit pas, mais parce que **dès que tu écris ton propre script**, c'est l'outil dont tu as besoin : la case coche une Variable du CES, elle ne sauvegarde pas ce que ton code à toi calcule.

### `PlayerPrefs` : trois clés suffisent

### `SetInt`, `SetFloat`, `SetString`, `Save`

### `DeleteAll` : comment tester une sauvegarde

### Ce qu'on sauvegarde : progression, options, meilleur score

!!! note "Contenir l'ambition"
    `PlayerPrefs` suffit. Ton jeu a un niveau et une mécanique — il n'y a rien à sérialiser qui ne tienne pas dans trois clés. JSON existe pour les états complexes, les chemins de fichiers, les versions de sauvegarde et la corruption de données. C'est un sujet de session avancée.

!!! important "Ton script custom — exigence B6 du projet"
    Ton jeu doit contenir **au moins un script C# écrit par toi**, dont tu peux expliquer chaque ligne à l'oral du cours 15. Pas un script du kit branché : un que **tu** as écrit.

    Il n'a pas besoin d'être gros — une quinzaine de lignes suffisent. Ce qui compte, c'est qu'il fasse quelque chose que **ni le kit ni le CES ne savent faire** dans ton jeu. Quelques candidats raisonnables :

    * un meilleur score sauvegardé avec `PlayerPrefs`, affiché au menu
    * un compteur qui calcule quelque chose (temps restant, distance parcourue, précision)
    * une petite règle propre à ton jeu : « si le joueur a les trois fragments **et** qu'il est de nuit, alors… »
    * un effet que tu déclenches depuis une action ***Invoke Events*** du CES

    Si tu n'as toujours pas d'idée à ce stade de la session, **le meilleur score est le bon choix** : c'est court, c'est utile, et ça te fait pratiquer `PlayerPrefs` pour de vrai.

## La performance

### Le Profiler, en survol

### Le *batching*

### Le nombre de lumières temps réel

### La taille des textures

## Pratique

## Devoirs

<!-- Savoirs essentiels touchés (note pour l'enseignant) :

-->

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
