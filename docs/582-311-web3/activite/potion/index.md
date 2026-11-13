---
tags:
  - Exercice
  - Vite
  - GSAP
---

# Potion

![type:video](./preview.webm){.h-auto}

L'objectif de cet exercice est de mettre en pratique les plugins **Draggable**, **SplitText** et **ScrollToPlugin**&nbsp;: des bulles qui bouillonnent dans un chaudron, un champignon à y glisser, un message qui apparaît lettre par lettre, puis un défilement jusqu'au bas de la page, où attend une grenouille.

<!--
Notions mises en pratique :

* Valeurs aléatoires en boucle (random, stagger, repeatRefresh)
* Draggable (type, bounds, onDragEnd)
* hitTest() avec un seuil en pourcentage
* SplitText dans une timeline déclenchée par une interaction
* ScrollToPlugin avec y: "max"
-->

## Consignes

### Préparation

- [ ] [Accepter le devoir Classroom 50](https://classroom50.org/tim-w3/web-3/assignments/potion/accept)
- [ ] Cloner le répertoire avec GitHub Desktop
- [ ] Ouvrir le dossier cloné dans VSCode
- [ ] Dans le terminal, installer les dépendances, puis lancer le projet Vite.

### Exploration du projet

Tout le HTML et le CSS sont déjà faits, y compris la police Cedarville Cursive (Fontsource). Les images sont dans `public/images`.

- [ ] Ouvrir `index.html` et repérer les identifiants. Ce sont les cibles des animations :

    | Identifiant | Rôle |
    | :--- | :--- |
    | `#atelier` | La première section, qui contient tout le reste |
    | `#ingredient` | Le champignon à déplacer |
    | `#chaudron` | Le chaudron, la cible du champignon |
    | `.bulle` | Les cinq bulles, à l'intérieur du chaudron |
    | `#message` | Le bouton « Boire la potion », invisible au départ |
    | `#fin` | Le bas de la page |
    | `#grenouille` | La grenouille, tout en bas |

??? question "Pourquoi deux images pour le chaudron&nbsp;?"

    Les bulles doivent sortir **du liquide**. Elles sont donc placées entre l'arrière du chaudron (`chaudron-arriere.png`) et l'avant (`chaudron-avant.png`)&nbsp;: le bord avant du chaudron cache le bas des bulles. Comme en SVG, l'ordre dans le HTML détermine ce qui est dessiné par-dessus.

- [ ] Ouvrir `src/gsap.js`. Tout le code de l'exercice sera écrit dans la fonction `gsapAnimations()`.

### Activer les plugins

- [ ] Sous la ligne `import gsap from "gsap"`, importer **Draggable**, **SplitText** et **ScrollToPlugin**, puis les activer avec `registerPlugin`

### Les bulles

- [ ] Avec un `fromTo()`, animer les `.bulle` :
  - [ ] Au départ : `y`, `x` et `scale` à `0`
  - [ ] À l'arrivée, des valeurs aléatoires :
    - [ ] `y` entre `-100` et `-15`
    - [ ] `x` entre `-10` et `10`
    - [ ] `scale` entre `0.6` et `1.3`
    - [ ] Durée entre `0.8` et `1.6`
  - [ ] Lissage `power1.out`
  - [ ] Un `stagger` de `0.3`, dans un ordre aléatoire (`from: "random"`)
  - [ ] Chaque bulle se répète à l'infini, avec de nouvelles valeurs aléatoires à chaque tour
- [ ] Commit + push

??? tip "Indices"

    - Une valeur aléatoire s'écrit `"random(-100, -15)"`.
    - Pour que **chaque bulle** se répète à son propre rythme, `repeat` doit être placé **dans l'objet `stagger`**, et non directement dans le tween. Sinon, c'est tout le groupe qui attend la dernière bulle avant de recommencer.
    - Sans `repeatRefresh: true` (aussi dans l'objet `stagger`), les valeurs aléatoires sont tirées une seule fois&nbsp;: chaque bulle referait toujours exactement le même trajet.

??? question "Pourquoi les bulles semblent-elles éclater&nbsp;?"

    À la fin de chaque tour, la bulle repart de son état de départ (`scale: 0`). Elle disparaît d'un coup, comme une bulle qui éclate.

### La grenouille

- [ ] Animer l'échelle verticale de `#grenouille` en boucle, comme si elle respirait :
  - [ ] `scaleY` à `1.06`
  - [ ] Pivot en bas au centre (`transformOrigin: "50% 100%"`)
  - [ ] Durée de `0.8`, lissage `sine.inOut`
  - [ ] Aller-retour à l'infini (`yoyo` et `repeat: -1`)
- [ ] Faire défiler la page jusqu'en bas pour vérifier, puis remonter
- [ ] Commit + push

??? question "Pourquoi un pivot en bas&nbsp;?"

    Par défaut, un élément grossit à partir de son centre&nbsp;: la grenouille s'étirerait vers le haut **et** vers le bas, comme si elle flottait. Avec le pivot en bas, ses pattes restent au sol.

### Déplacer l'ingrédient

- [ ] Avec `Draggable.create()`, rendre `#ingredient` déplaçable sur les axes x et y
- [ ] Empêcher le champignon de sortir de `#atelier` avec l'option `bounds`
- [ ] Vérifier dans le navigateur que le champignon se déplace à la souris
- [ ] Commit + push

### Le hitTest

- [ ] Ajouter un `onDragEnd()` au Draggable
- [ ] Si le champignon chevauche le chaudron à au moins 50 % (`this.hitTest("#chaudron", "50%")`), afficher « Dans le chaudron ! » dans la console
- [ ] Sinon, le champignon retourne à sa place (`x: 0, y: 0`) en `0.6` seconde, avec un lissage `back.out(2)`
- [ ] Tester les deux cas : un dépôt à côté du chaudron, puis un dépôt dedans
- [ ] Commit + push

??? question "Pourquoi `x: 0, y: 0` ramène le champignon à sa place ?"

    Draggable déplace l'élément avec `x` et `y`, comme un `transform`. Revenir à `0` annule ce déplacement : l'élément retrouve sa position d'origine dans la page.

### La potion est prête

- [ ] Au début de `gsapAnimations()`, découper `#message` en **lettres** avec `SplitText.create()`
- [ ] Écrire une fonction `potionPrete()` qui crée une timeline :
  - [ ] `#ingredient` disparaît (`scale` à `0` et `autoAlpha` à `0`), durée de `0.3`, lissage `back.in(2)`
  - [ ] Ensuite, `#chaudron` s'écrase un peu, puis revient :
    - [ ] `scaleX` à `1.1` et `scaleY` à `0.9`
    - [ ] Pivot en bas au centre (`transformOrigin: "50% 100%"`)
    - [ ] Durée de `0.15`, avec `yoyo` et `repeat: 1`
  - [ ] Ensuite, `#message` devient visible (`autoAlpha` à `1`)
  - [ ] Ensuite, les lettres du message arrivent avec un `.from()` :
    - [ ] `y` de `40`, opacité `0`
    - [ ] `rotation` aléatoire entre `-30` et `30`
    - [ ] Durée de `0.6`, lissage `back.out(2)`
    - [ ] Un décalage de `0.04` entre chaque lettre
- [ ] Dans le `onDragEnd()`, remplacer le `console.log()` par un appel à `potionPrete()`
- [ ] Commit + push

??? info "Pourquoi le message est-il invisible au départ ?"

    `#message` a la classe Tailwind `invisible` (`visibility: hidden`). Un élément invisible ne peut pas être cliqué : impossible de boire la potion avant qu'elle soit prête. `autoAlpha: 1` rend l'élément visible de nouveau.

### Boire la potion

- [ ] Au clic sur `#message`, faire défiler la page **tout en bas** :
  - [ ] Durée de `3`, lissage `power2.inOut`
  - [ ] `scrollTo` avec `y: "max"`
- [ ] Commit + push

??? tip "Indice"

    Avec ScrollToPlugin, la cible du tween est la fenêtre elle-même : `gsap.to(window, { … })`. La valeur `"max"` correspond au défilement maximal de la page.

## Défis

- [ ] **Trois champignons** : ajouter deux autres champignons. Le message n'apparaît qu'une fois les trois champignons dans le chaudron.
- [ ] Commit + push
