---
tags:
  - Exercice
  - Vite
  - GSAP
---

# Forêt

![](./foret.png)

L'objectif de cet exercice est de créer de la **profondeur** avec GSAP. Avec la même forêt, on anime de 4 façons différentes. 

D'abord une forêt qui **défile toute seule**, puis trois effets au défilement en parallaxe **verticale**, **zoom** et **horizontale**.

> Ce qui est loin bouge lentement, ce qui est proche bouge vite.

## Consignes

### Préparation

- [ ] [Accepter le devoir Classroom 50](https://classroom50.org/tim-w3/web-3/assignments/foret/accept)
- [ ] Cloner le répertoire avec GitHub Desktop
- [ ] Ouvrir le dossier cloné dans VSCode
- [ ] Dans le terminal, installer les dépendances, puis lancer le projet Vite.

### Exploration du projet

Tout le HTML et le CSS sont déjà faits. Avant d'animer, prendre quelques minutes pour comprendre comment la forêt est construite.

- [ ] Ouvrir `index.html` et repérer les couches à l'intérieur de `#foret`

??? question "Comment les couches sont-elles empilées&nbsp;?"

    Toutes les couches sont en `position: absolute`, au même endroit. Le titre, pour sa part, est glissé entre les couches.

??? question "Pourquoi des `<img>` et des `<div>`&nbsp;?"

    * Les **couches de décor** (`<div>`) utilisent le concept de `background-image`, car elles doivent se répéter horizontalement à l'infini.
    * Les **couches d'ambiance** (`<img>`) sont toujours fixes et n'ont pas besoin de répétition.

- [ ] Repérer les identifiants. Ce sont les cibles des animations&nbsp;:

    | Identifiant | Distance |
    | :--- | :--- |
    | `#buissons` | Très loin |
    | `#arbres-loin` | Loin |
    | `#arbres-milieu` | Au milieu |
    | `#rayons` | Rayons de lumière |
    | `#titre` | Le titre « La forêt » |
    | `#arbres-proches` | Proche |
    | `#lumiere` | Lumière |
    | `#avant-plan` | Tout devant |

- [ ] Ouvrir `src/gsap.js`. Tout le code de l'exercice sera écrit dans la fonction `gsapAnimations()`.

### Installer la police 🚨

Le titre doit utiliser la police **Caprasimo** tiré de [Fontsource](https://fontsource.org/) (cours 4).

- [ ] Installer la fonte avec `npm`
- [ ] Ajouter la fonte dans le fichier `src/style.css`, juste sous `@import "tailwindcss";`
- [ ] Déclarer Caprasimo comme police par défaut de Tailwind (`--font-sans`, dans `@theme`)
- [ ] Commit + push

### Étape 1 - La forêt qui défile

![type:video](./preview-etape1.webm){.h-auto}

Pour que la forêt avance **toute seule**, chaque couche de décor fait défiler son image sans fin, à sa propre vitesse.

- [ ] Pour chaque couche de décor, créer un tween `to()` qui anime `backgroundPositionX`, avec ces paramètres&nbsp;:
  - [ ] Animation de 1 seconde
  - [ ] Lissage linéaire
  - [ ] Répétition à l'infini
  - [ ] `repeatRefresh: true`
  - [ ] `backgroundPositionX`

    | Cible | Valeur |
    | :--- | :--- |
    | `#buissons` | `"-=50px"` |
    | `#arbres-loin` | `"-=100px"` |
    | `#arbres-milieu` | `"-=175px"` |
    | `#arbres-proches` | `"-=250px"` |
    | `#avant-plan` | `"-=400px"` |

- [ ] Commit + push

### Activer ScrollTrigger

Les 3 étapes suivantes se jouent au **défilement de la page**.

- [ ] Sous la ligne `import gsap from "gsap"`, importer `ScrollTrigger`, puis l'activer

### Étape 2 - Parallaxe verticale

![type:video](./preview-etape2.webm){.h-auto}

Quand on défile, la page monte. Les couches lointaines vont **descendre** un peu, pour « contrer » le défilement. Elles paraissent lentes, donc loin.

- [ ] Mettre l'animation de l'étape 1 en commentaire.
- [ ] Créer une timeline
  - [ ] Toutes les animations de la timeline doivent avoir un lissage linéaire
  - [ ] Un `scrollTrigger` qui surveille `#foret`
    - [ ] Débute à `"top top"` (dès le haut de la page)
    - [ ] Fini à `"bottom top"` (quand la forêt sort de l'écran)
    - [ ] scrub à `true`
- [ ] Ajouter un `.to()` par couche, avec ces valeurs de `yPercent`&nbsp;:

    | Cible | Valeur |
    | :--- | :--- |
    | `#buissons` | `70` |
    | `#arbres-loin` | `60` |
    | `#arbres-milieu` | `45` |
    | `#rayons` | `35` |
    | `#arbres-proches` | `25` |
    | `#lumiere` | `15` |

- [ ] Toutes les animations doivent se jouer en même temps que le premier `.to()`
- [ ] Ajouter un dernier `.to()` pour le titre. Il doit descendre de `50` et disparaître avec `autoAlpha`

  ??? quote "Observation" 

      `#avant-plan` ne bouge pas. Aucun `.to()` pour lui

- [ ] Commit + push

### Étape 3 - Zoom

![type:video](./preview-etape3.webm){.h-auto}

Cette fois, la forêt reste **figée** à l'écran et chaque couche **grossit**. Plus une couche est proche, plus elle grossit&nbsp;: on a l'impression d'avancer dans la forêt.

- [ ] Mettre la timeline précédente en commentaire
- [ ] Créer une timeline
  - [ ] Toutes les animations de la timeline doivent avoir un lissage `power1.out`
  - [ ] Un `scrollTrigger` qui surveille `#foret`
    - [ ] Débute à `"top top"`
    - [ ] Fini à `"+=3000"` (l'animation dure 3000 pixels de défilement)
    - [ ] pin à `true`
    - [ ] scrub à `1`
- [ ] Ajouter un `.to()` par couche, avec ces valeurs de `scale`&nbsp;:

    | Cible | Valeur |
    | :--- | :--- |
    | `#buissons` | `1.1` |
    | `#arbres-loin` | `1.3` |
    | `#arbres-milieu` | `1.6` |
    | `#rayons` | `1.5` |
    | `#arbres-proches` | `1.8` |
    | `#lumiere` | `1.8` |
    | `#avant-plan` | `2.5` |

- [ ] Toutes les animations doivent se jouer en même temps que le premier `.to()`
- [ ] Ajouter un dernier `.to()` pour le titre. Il doit devenir trois fois plus gros et disparaître
- [ ] Commit + push

### Étape 4 - Promenade horizontale

![type:video](./preview-etape4.webm){.h-auto}

Les couches **glissent vers la gauche** au scroll. Plus une couche est proche, plus elle se déplace.

- [ ] Mettre la timeline précédente en commentaire
- [ ] Créer une timeline
  - [ ] Toutes les animations de la timeline doivent avoir un lissage `power1.out`
  - [ ] Fini à `"+=2000"`
- [ ] Ajouter un `.to()` par couche, avec ces valeurs de `xPercent`&nbsp;:

    | Cible | `xPercent` |
    | :--- | :--- |
    | `#buissons` | `-10` |
    | `#arbres-loin` | `-20` |
    | `#arbres-milieu` | `-35` |
    | `#arbres-proches` | `-50` |
    | `#avant-plan` | `-75` |

- [ ] Toutes les animations doivent se jouer en même temps que le premier `.to()`
- [ ] Ajouter un dernier `.to()` pour le titre. Il glisse vers la gauche (`xPercent: -100`)
- [ ] Commit + push

## Défis

- [ ] Réactiver l'étape 1 en même temps que l'étape 4 🤯
- [ ] Commit + push
