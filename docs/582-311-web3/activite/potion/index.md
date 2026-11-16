---
tags:
  - Exercice
  - Vite
  - GSAP
---

# Potion

![type:video](./preview.webm){.h-auto}

L'objectif de cet exercice est de mettre en pratique les plugins **SplitText**, **ScrollTrigger**, **Draggable** et **ScrollToPlugin**&nbsp;: un champignon à glisser dans un chaudron, un bouton d'appel à l'action (CTA) qui apparaît mot par mot, une formule magique qui s'écrit au défilement, puis une grenouille tout en bas de la page.

<!--
Notions mises en pratique :

* SplitText avec ScrollTrigger et scrub
* Draggable (type, bounds, onDragEnd)
* hitTest() avec un seuil en pourcentage
* SplitText dans une timeline déclenchée par une interaction
* ScrollToPlugin avec y: "max"
* Valeurs aléatoires en boucle (random, stagger, repeatRefresh)
-->

## Consignes

### Préparation

- [ ] [Accepter le devoir Classroom 50](https://classroom50.org/tim-w3/web-3/assignments/potion/accept)
- [ ] Cloner le répertoire avec GitHub Desktop
- [ ] Ouvrir le dossier cloné dans VSCode
- [ ] Dans le terminal, installer les dépendances, puis lancer le projet Vite.

### Exploration du projet

Tout le HTML et le CSS sont déjà faits, y compris la police Princess Sofia (Fontsource, classe `font-display`). Les images sont dans `public/images`.

- [ ] Ouvrir `index.html` et repérer les cibles des animations :

    | Cible | Rôle |
    | :--- | :--- |
    | `header` | Le premier écran, qui contient le champignon et le chaudron |
    | `#cta` | Le bouton d'appel à l'action « Boire la potion », invisible au départ |
    | `#ingredient` | Le champignon à déplacer |
    | `#chaudron` | Le chaudron, la cible du champignon |
    | `.bulle` | Les cinq bulles, à l'intérieur du chaudron |
    | `#abra`, `#cada`, `#bra` | Les trois mots de la formule magique |
    | `#grenouille` | La grenouille, tout en bas |

??? question "Pourquoi deux images pour le chaudron&nbsp;?"

    Les bulles doivent sortir **du liquide**. Elles sont donc placées entre l'arrière du chaudron (`chaudron-arriere.png`) et l'avant (`chaudron-avant.png`)&nbsp;: le bord avant du chaudron cache le bas des bulles. Comme en SVG, l'ordre dans le HTML détermine ce qui est dessiné par-dessus.

- [ ] Ouvrir `src/gsap.js`. Tout le code de l'exercice sera écrit dans la fonction `gsapAnimations()`, aux endroits indiqués par les commentaires.

### Activer les plugins

- [ ] Sous la ligne `import gsap from "gsap"`, importer **Draggable**, **SplitText**, **ScrollToPlugin** et **ScrollTrigger**, puis les activer avec `registerPlugin`

### ScrollTrigger + SplitText

- [ ] Découper `#abra` en **lettres** avec `SplitText.create()`
- [ ] Avec un `.from()`, faire apparaître les lettres de `#abra` :
  - [ ] `y` de `80`, opacité `0`
  - [ ] `rotation` aléatoire entre `-40` et `40`
  - [ ] Un décalage de `0.05` entre chaque lettre, lissage `back.out(2)`
  - [ ] Un `scrollTrigger` qui surveille `#abra` :
    - [ ] Débute à `"top 80%"`
    - [ ] Finit à `"top 40%"`
    - [ ] scrub à `1`
- [ ] Faire la même chose pour `#cada` et `#bra`
- [ ] Faire défiler la page lentement pour vérifier, dans les deux sens
- [ ] Commit + push

### Draggable + SplitText

- [ ] Découper `#cta` en **mots** avec `SplitText.create()`
- [ ] Avec `Draggable.create()`, rendre `#ingredient` déplaçable sur les axes x et y, sans qu'il puisse sortir du `header` (option `bounds`)
- [ ] Ajouter un `onDragEnd()` au Draggable
- [ ] Si le champignon chevauche le chaudron à au moins 50 % (`this.hitTest("#chaudron", "50%")`), créer une timeline :
  - [ ] `#ingredient` disparaît (`scale` à `0` et `autoAlpha` à `0`), durée de `0.3`, lissage `back.in(2)`
  - [ ] Ensuite, `#chaudron` s'écrase un peu, puis revient :
    - [ ] `scaleX` à `1.1` et `scaleY` à `0.9`
    - [ ] Pivot en bas au centre (`transformOrigin: "50% 100%"`)
    - [ ] Durée de `0.15`, avec `yoyo` et `repeat: 1`
  - [ ] Ensuite, `#cta` devient visible (`autoAlpha` à `1`)
  - [ ] Ensuite, les mots du CTA arrivent avec un `.from()` :
    - [ ] `y` de `40`, opacité `0`
    - [ ] `rotation` aléatoire entre `-100` et `100`
    - [ ] Durée de `0.6`, lissage `back.out(2)`
    - [ ] Un décalage de `0.5` entre chaque mot
- [ ] Sinon, le champignon retourne à sa place (`x: 0, y: 0`) en `0.6` seconde, avec un lissage `elastic.out(1, 0.3)`
- [ ] Tester les deux cas : un dépôt à côté du chaudron, puis un dépôt dedans
- [ ] Commit + push

??? question "Pourquoi `x: 0, y: 0` ramène le champignon à sa place&nbsp;?"

    Draggable déplace l'élément avec `x` et `y`, comme un `transform`. Revenir à `0` annule ce déplacement : l'élément retrouve sa position d'origine dans la page.

??? info "Pourquoi le CTA est-il invisible au départ&nbsp;?"

    `#cta` a la classe Tailwind `invisible` (`visibility: hidden`). Un élément invisible ne peut pas être cliqué : impossible de boire la potion avant qu'elle soit prête. Le `.from()` sur les mots ne touche qu'à leur opacité&nbsp;: sans `autoAlpha: 1` sur `#cta`, le bouton resterait invisible.

### ScrollTo

- [ ] Au clic sur `#cta`, faire défiler la page **tout en bas** :
  - [ ] Durée de `5`, lissage `power1.inOut`
  - [ ] `scrollTo` avec `y: "max"`
- [ ] Vérifier que la formule magique s'écrit pendant le défilement
- [ ] Commit + push

??? tip "Indice"

    Avec ScrollToPlugin, la cible du tween est la fenêtre elle-même : `gsap.to(window, { … })`. La valeur `"max"` correspond au défilement maximal de la page.

### Finition

**Les bulles**

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

??? tip "Indices"

    - Pour que **chaque bulle** se répète à son propre rythme, `repeat` doit être placé **dans l'objet `stagger`**, et non directement dans le tween. Sinon, c'est tout le groupe qui attend la dernière bulle avant de recommencer.
    - Sans `repeatRefresh: true` (aussi dans l'objet `stagger`), les valeurs aléatoires sont tirées une seule fois&nbsp;: chaque bulle referait toujours exactement le même trajet.

??? question "Pourquoi les bulles semblent-elles éclater&nbsp;?"

    À la fin de chaque tour, la bulle repart de son état de départ (`scale: 0`). Elle disparaît d'un coup, comme une bulle qui éclate.

**La grenouille**

- [ ] Animer l'échelle verticale de `#grenouille` en boucle, comme si elle respirait :
  - [ ] `scaleY` à `1.1`
  - [ ] Pivot en bas au centre (`transformOrigin: "50% 100%"`)
  - [ ] Durée de `0.8`, lissage `sine.inOut`
  - [ ] Aller-retour à l'infini (`yoyo` et `repeat: -1`)
- [ ] Commit + push

??? question "Pourquoi un pivot en bas&nbsp;?"

    Par défaut, un élément grossit à partir de son centre&nbsp;: la grenouille s'étirerait vers le haut **et** vers le bas, comme si elle flottait. Avec le pivot en bas, ses pattes restent au sol.

## Défis

- [ ] **Moins de répétition** : les animations de `#abra`, `#cada` et `#bra` sont identiques. Les remplacer par une boucle (`forEach`) sur les trois mots.
- [ ] **Trois champignons** : ajouter deux autres champignons. Le CTA n'apparaît qu'une fois les trois champignons dans le chaudron.
- [ ] Commit + push
