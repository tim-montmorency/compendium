---
tags:
  - Cours 1
  - Mardi 27 août
---

# Introduction

## Ordre du jour

1. Présentations
1. Plan de cours 
1. Parlons jeux vidéos
1. Pause ⏸️
1. Jeux vidéos
1. Pause ⏸️
1. Exercices
1. Devoir

## Parlons ludisme

## Parlons jeux vidéos

Lexique 

https://gamingcampus.fr/boite-a-outils/lexique-du-jeu-video-100-mots-du-jeu-video.html#:~:text=HUD%20%3A,traduit%20par%20Affichage%20T%C3%AAte%20Haute.

### Arborescence

Voici à quoi pourrait et devrait ressembler la structure[^unity] de votre jeu.

```
NomDuJeu
│
├── index.html 
├── assets
│   ├── images
│   │   ├── backgrounds
│   │   ├── fx
│   │   ├── characters
│   │   ├── ui
│   │   └── items
│   ├── audio
│   │   ├── music
│   │   └── sfx
│   └── fonts
│       └── nes.ttf
├── src
│   ├── css
│   |   └── main.css
│   └── js
│       ├── main.js
│       ├── scenes
│       │   ├── Game.js
│       │   ├── GameOver.js
│       │   ├── MainMenu.js
│       │   └── Preloader.js
│       └── characters
│           ├── Player.js
│           └── Enemy.js
└── vendor
    └── phaser.min.js 
```

[^unity]: [Bonnes pratiques pour organiser votre jeu vidéo](https://unity.com/how-to/organizing-your-project) (En anglais)


### Versions (EX: V0.4.24)

Comment écrire une version.

x (Version Majeure) : Indique des changements majeurs, souvent incompatibles avec les versions précédentes. Ces changements peuvent inclure de nouvelles fonctionnalités importantes, des refontes significatives ou des modifications qui peuvent casser la compatibilité avec les sauvegardes ou les données des versions antérieures.

y (Version Mineure) : Indique des ajouts ou modifications de fonctionnalités qui sont généralement compatibles avec les versions précédentes. Ces changements ajoutent de nouvelles fonctionnalités ou améliorent les fonctionnalités existantes sans introduire de ruptures importantes.

z (Version de Révision ou Patch) : Indique des corrections de bugs, des améliorations de performances ou des changements mineurs qui n'affectent pas les fonctionnalités de manière significative. Ces changements sont toujours compatibles avec les versions mineures et majeures précédentes.


### Cahier des charges du jeu (Game Design Document)


## Exercices

À venir



## Devoir

À venir
