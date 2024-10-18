---
tags:
  - Cours 8
  - Vendredi 18 octobre
---

# Cours 8

## Retour sur la partie Bootstrap de l'examen

* [`col-sm-4`](./cours03.md#systeme-de-grille-grid-system)
* [`order-last`](./cours03.md#ordre-css)
* [`d-none`](./cours04.md#display)
* [`d-sm-block`](./cours04.md#display)

[Codepen](https://codepen.io/tim-momo/pen/BaXZLqK)

## Bootcamp JavaScript

<div class="grid grid-1-2" markdown>
  ![](./assets/images/gijane.jpg)

  <small>Exercice - JavaScript</small><br>
  **[Camp d'entrainement](./exercices/js-bootcamp.md){.stretched-link}**
</div>

## Retour sur la partie JavaScript de l'examen

Les étapes à suivre pour compléter l'exercice :

1. On ajoute des variables qui nous servent à compter.
1. On fait juste un fruit pour commencer
1. On ajoute une fonction pour les tâches répétitives (incrémentation du total et validation du clique de chaque fruit)
1. Finalement, on copie/colle l'eventListener pour chaque fruit.

## GSAP

![](./assets/images/gsap_banner.png)

[GSAP](https://gsap.com/) (GreenSock Animation Platform) est une bibliothèque JavaScript pour créer des animations web. Elle est utilisée pour créer des animations complexes et interactives.

### Exemples

![type:video](https://www.youtube.com/embed/TG67UXmf6mc)

* [Gsap.com](https://gsap.com/showcase/)
* [Codepen](https://codepen.io/collection/ANaOod?grid_type=grid)

## Installation

```html
<head>
  <!-- ... -->
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js" defer></script>
  <script src="path/to/your/script.js" defer></script>
</head>
```

[Documentation officielle pour la version 3](https://gsap.com/docs/v3/Installation)

!!! info "CDN : Content Delivery Network"

    Il est recommandé d’utiliser des fichiers CDN, car ils sont mis en cache et se chargent rapidement. Avec des millions de sites utilisant GSAP, il est probable que vos visiteurs aient déjà la bibliothèque en cache, ce qui réduit la bande passante et accélère le chargement.

## Animation de base



### On anime quoi?

* **Positionnements** (x, y, left, right, top, bottom)
* **Espacements** (margin, padding)
* **Dimensions** (width, height)
* **Opacité**
* **Couleurs**
* **Typographie**
* **Transformations** (scale, rotate, skew)

Ces propriétés sont animées par [interpolation (tween)](https://gsap.com/docs/v3/GSAP/Tween) selon une [fonction d'assouplissement (ease)]( https://gsap.com/docs/v3/Eases/).

### Fonctionnalités de base

Les fonctions de base pour les animations GSAP sont les suivantes :

* `to()` : Crée une animation où les propriétés de l’élément évoluent jusqu’aux valeurs spécifiées.
* `from()` : Crée une animation où les propriétés de l’élément commencent à une certaine valeur puis reviennent à leur état initial.
* `fromTo()` : Permet de spécifier les valeurs de départ et d’arrivée pour une animation.

#### to()

```js title="Syntaxe"
gsap.to(sélecteur, {
  // configurations
  // propriété: valeur,
});
```

* **sélecteur** : Sélecteur CSS qui sélectionne 1 ou plusieurs éléments (ex.: ".dot").
* **configurations** : Configurations GSAP (ex.: duration).
* **Propriétés CSS** à animer (ex.: x, opacité, ...).



```js title="Exemple exhaustif"
gsap.to('.dot', {

  // Propriétés css
  x: 300,
  y: -150,
  rotation: 360,
  scale: 1.5,
  opacity: 0.7,
  backgroundColor: '#e74c3c',
  borderRadius: '25%',
  skewX: 20,
  skewY: 10,
  scaleX: 2,
  scaleY: 0.5,

  // Configurations
  duration: 3,
  ease: 'power2.inOut',
  delay: 0.5,
  repeat: 2,
  yoyo: true,

  // Callbacks
  onStart: () => {
    console.log('Animation démarrée')
  },
  onUpdate: () => {
    console.log('Animation en cours')
  },
  onComplete: () => {
    console.log('Animation terminée')
  }
});
```

<iframe height="300" style="width: 100%;" scrolling="no" title="GSAP - to()" src="https://codepen.io/tim-momo/embed/zYgzoEX/89bb58bd6ed29bc7a703a1ce460ff161?default-tab=result&editable=true&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/zYgzoEX/89bb58bd6ed29bc7a703a1ce460ff161">
  GSAP - to()</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

#### from()

<iframe height="300" style="width: 100%;" scrolling="no" title="GSAP - to()" src="https://codepen.io/tim-momo/embed/WNVOoLK/087c8d54f40078d64a89bf64eade1d2f?default-tab=result&editable=true&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/WNVOoLK/087c8d54f40078d64a89bf64eade1d2f">
  GSAP - to()</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

#### fromTo()

<iframe height="300" style="width: 100%;" scrolling="no" title="GSAP - from()" src="https://codepen.io/tim-momo/embed/ExqXNrx/7f1f9010b174671e88f5f671802891a4?default-tab=result&editable=true&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/ExqXNrx/7f1f9010b174671e88f5f671802891a4">
  GSAP - from()</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

#### *Delay*

Tout comme la propriété [animation-delay](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay) en CSS, la propriété [delay](https://gsap.com/docs/v3/GSAP/Timeline/delay()) de GSAP permet de spécifier un délai d'attente avant de démarrer une animation.

```js
gsap.to('.element', {
  x: 100,
  delay: 0.2
});
```

#### *Stagger*

Similaire à *Delay*, [*Stagger*](https://gsap.com/resources/getting-started/Staggers/) fait en sorte qu'un groupe d'éléments ayant tous la même animation soient décalés.

```js
gsap.to('.elements', {
  x: 100,
  stagger: 0.2
});
```

## Exercice

<div class="grid grid-1-2" markdown>
  ![](./assets/images/auto-yellow.png)

  <small>Exercice - GSAP</small><br>
  **[Automobile jaune](./exercices/gsap-auto1.md){.stretched-link}**
</div>

<div class="grid grid-1-2" markdown>
  ![](./assets/images/auto-teal.png)

  <small>Exercice - GSAP</small><br>
  **[Automobile turquoise](./exercices/gsap-auto2.md){.stretched-link}**
</div>

<div class="grid grid-1-2" markdown>
  ![](./assets/images/domino.png)

  <small>Exercice - GSAP</small><br>
  **[Domino](./exercices/gsap-domino.md){.stretched-link}**
</div>
