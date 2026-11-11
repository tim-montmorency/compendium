---
tags:
  - Exercice
  - Vite
  - GSAP
---

# Carte au trésor

![type:video](./preview.webm){.h-auto}

L'objectif de cet exercice est de mettre en pratique les **plugins GSAP** sur la page de lancement d'un jeu fictif, *L'île des Brumes*&nbsp;: un titre qui tombe lettre par lettre, un bateau qui navigue, une route qui se dessine sur une carte, un coffre qui tremble puis s'ouvre.

<!--
Notions mises en pratique :

* SplitText, ScrambleTextPlugin, ScrollToPlugin
* MotionPathPlugin (align, alignOrigin, autoRotate)
* DrawSVGPlugin + MotionPathPlugin sur le même tracé, dans une timeline pilotée par le défilement
* MorphSVGPlugin, CustomEase + CustomWiggle
* gsap.matchMedia()
* Défi : Draggable + hitTest()
-->

## Consignes

### Préparation

- [ ] [Accepter le devoir Classroom 50](https://classroom50.org/tim-w3/web-3/assignments/carte-tresor/accept)
- [ ] Cloner le répertoire avec GitHub Desktop
- [ ] Ouvrir le dossier cloné dans VSCode
- [ ] Dans le terminal, installer les dépendances, puis lancer le projet Vite.

### Exploration du projet

Tout le HTML et le CSS sont déjà faits, y compris les SVG. Avant d'animer, prendre quelques minutes pour repérer les éléments.

- [ ] Ouvrir `index.html` et repérer les trois sections&nbsp;: `#ecran-titre`, `#carte` et `#coffre`
- [ ] Repérer les identifiants. Ce sont les cibles des animations&nbsp;:

    | Identifiant | Section | Rôle |
    | :--- | :--- | :--- |
    | `#titre` | Écran titre | Le titre du jeu |
    | `#slogan` | Écran titre | « Appuyez sur Start » |
    | `#bouton-depart` | Écran titre | Le bouton « Commencer l'aventure » |
    | `#bateau` | Écran titre | Le bateau (un `<div>` qui contient un SVG) |
    | `#route-bateau` | Écran titre | Le tracé **invisible** suivi par le bateau |
    | `#trace` | Carte | Le tracé du **masque** de la route |
    | `#route` | Carte | La route pointillée visible |
    | `#explorateur` | Carte | Le point rouge qui parcourt la route |
    | `#x-tresor` | Carte | Le X du trésor |
    | `#coffre-svg` | Coffre | Le coffre complet |
    | `#couvercle` | Coffre | Le couvercle fermé |
    | `#couvercle-ouvert` | Coffre | La forme du couvercle ouvert (cachée) |
    | `.piece` | Coffre | Les trois pièces d'or (cachées) |
    | `#message` | Coffre | Le texte « ???????? » |
    | `#bouton-coffre` | Coffre | Le bouton « Ouvrir le coffre » |
    | `#cle` | Coffre | La clé (défi) |

??? question "Pourquoi deux tracés pour la route&nbsp;: `#trace` et `#route`&nbsp;?"

    La route est **pointillée**. Or, DrawSVG dessine un tracé en jouant lui-même avec les pointillés (`stroke-dasharray`)&nbsp;: sur une ligne déjà pointillée, le résultat serait brisé.

    L'astuce&nbsp;: `#trace` est une ligne **pleine**, placée dans un `<mask>`. La route pointillée `#route` n'est visible que là où `#trace` est dessiné. On anime donc `#trace` avec DrawSVG, et la route pointillée apparaît au même rythme.

- [ ] Ouvrir `src/gsap.js`. Tout le code de l'exercice sera écrit dans la fonction `gsapAnimations()`.

!!! info "Un import par plugin"

    À chaque étape, importer les plugins nécessaires sous `import gsap from "gsap"`, puis les ajouter au `gsap.registerPlugin(...)`. Un seul `registerPlugin` suffit pour tous les plugins.

### Étape 1 - L'écran titre

- [ ] Importer et activer `SplitText`, `ScrambleTextPlugin` et `ScrollToPlugin`
- [ ] Découper `#titre` en **lettres** avec `SplitText.create()`
- [ ] Créer une timeline&nbsp;:
  - [ ] Un `.from()` sur les lettres du titre&nbsp;:
    - [ ] `y` de `-120`, opacité `0`
    - [ ] `rotation` aléatoire entre `-40` et `40`
    - [ ] Durée de `0.8`, lissage `back.out(2)`
    - [ ] Un décalage de `0.06` entre chaque lettre
  - [ ] Ensuite, un `.to()` sur `#slogan` qui brouille puis révèle le texte « Appuyez sur Start »&nbsp;:
    - [ ] Durée de `1.5`
    - [ ] Caractères de brouillage en majuscules
    - [ ] Délai de révélation de `0.5`
- [ ] Au clic sur `#bouton-depart`, faire défiler la page jusqu'à `#carte` en `1.5` seconde, avec un lissage `power2.inOut`

  ??? tip "Indice"

      Avec ScrollToPlugin, la cible du tween est la fenêtre elle-même&nbsp;: `gsap.to(window, { … })`.

- [ ] Commit + push

### Étape 2 - Le bateau

- [ ] Importer et activer `MotionPathPlugin`
- [ ] Animer `#bateau` le long de `#route-bateau`&nbsp;:
  - [ ] Durée de `12`, lissage linéaire, répétition infinie
  - [ ] Le bateau est **aligné** sur le tracé
  - [ ] `alignOrigin` à `[0.5, 0.8]`&nbsp;: c'est le bas de la coque qui suit le tracé, pas le centre du bateau
  - [ ] Le bateau s'oriente selon les vagues

  ??? quote "Observation"

      Retirer temporairement `align`. Le bateau suit la même forme, mais à partir de **sa** position de départ (le coin haut gauche de l'écran)&nbsp;: il navigue alors dans le ciel. Remettre `align`.

- [ ] Commit + push

### Étape 3 - La carte

- [ ] Importer et activer `ScrollTrigger` et `DrawSVGPlugin`
- [ ] Créer une timeline&nbsp;:
  - [ ] Lissage par défaut linéaire
  - [ ] Un `scrollTrigger` qui surveille `#carte`
    - [ ] Débute à `"top top"`
    - [ ] Finit à `"+=2000"`
    - [ ] pin à `true`
    - [ ] scrub à `1`
- [ ] Un `.from()` qui dessine `#trace` à partir de `0%`
- [ ] **En même temps**, un `.to()` qui fait suivre `#route` à `#explorateur`
  - [ ] L'explorateur est aligné sur `#route`, par son centre (`alignOrigin: [0.5, 0.5]`)
- [ ] Ensuite, le `#x-tresor` apparaît en grossissant à partir d'une échelle de `0`
  - [ ] Il grossit à partir de son centre (`transformOrigin: "50% 50%"`)
  - [ ] Lissage `back.out(3)`, durée de `0.2`

  ??? question "Pourquoi une durée de `0.2`&nbsp;?"

      Avec `scrub`, les durées deviennent des **proportions** (cours 10). Les deux premiers tweens ont la durée par défaut (`0.5`)&nbsp;: le X n'occupe donc qu'une petite part du défilement, juste à la fin.

- [ ] Commit + push

### Étape 4 - Le coffre

- [ ] Importer et activer `MorphSVGPlugin`, `CustomEase` et `CustomWiggle`
- [ ] Créer une courbe CustomWiggle nommée `"tremblement"`, avec `8` oscillations de type `"easeOut"`
- [ ] Écrire une fonction `ouvrirCoffre()` qui crée une timeline&nbsp;:
  - [ ] `#coffre-svg` tremble&nbsp;: `rotation` de `6`, durée de `0.8`, lissage `"tremblement"`, pivot en bas au centre (`"50% 100%"`)
  - [ ] Ensuite, `#couvercle` se transforme en `#couvercle-ouvert`, durée de `0.6`, lissage `back.out(2)`
  - [ ] **En même temps**, les `.piece` montent de `80` (`y: -80`) et apparaissent avec `autoAlpha`, lissage `back.out(3)`, décalage de `0.1`
  - [ ] **En même temps**, `#message` se brouille, puis affiche « Trésor trouvé ! », avec les caractères `"!?#$%*"`
- [ ] Au clic sur `#bouton-coffre`, appeler `ouvrirCoffre()`
- [ ] Commit + push

### Étape 5 - Adapter au mobile avec `matchMedia()`

Sur un téléphone, la carte est petite et l'épinglage sur 2000 px de défilement devient long et pénible.

- [ ] Créer un `gsap.matchMedia()`
- [ ] Déplacer la timeline de l'étape 3 dans le cas `"(min-width: 768px)"`
- [ ] Dans le cas `"(max-width: 767px)"`, recréer la même timeline, mais avec un `scrollTrigger` différent&nbsp;:
  - [ ] Pas de `pin`
  - [ ] Débute à `"top 70%"`
  - [ ] Finit à `"bottom 30%"`
- [ ] Tester avec le mode appareil des DevTools (++ctrl+shift+m++ ou ++cmd+shift+m++), puis recharger la page
- [ ] Commit + push

## Défi - La clé

- [ ] Importer et activer `Draggable`
- [ ] Rendre `#cle` déplaçable sur les axes x et y
- [ ] Au lâcher (`onDragEnd`)&nbsp;:
  - [ ] Si la clé chevauche le coffre à au moins 50&nbsp;% (`this.hitTest("#coffre-svg", "50%")`), la clé disparaît et le coffre s'ouvre (`ouvrirCoffre()`)
  - [ ] Sinon, la clé retourne à sa place (`x: 0, y: 0`) avec un lissage `back.out(2)`
- [ ] Commit + push

??? tip "Pourquoi une fonction `ouvrirCoffre()`&nbsp;?"

    Le bouton et la clé déclenchent **la même** animation. En la plaçant dans une fonction, on l'écrit une seule fois et on l'appelle de deux endroits.
