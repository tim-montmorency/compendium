# Cours 12 - Plugiciels[^plugin]



[^plugin]: <https://gsap.com/docs/v3/Plugins/>

## Plugiciels gratuits

### Draggable

Le plugiciel [Draggable](https://gsap.com/docs/v3/Plugins/Draggable/) permet de transformer n’importe quel élément en un objet que l’utilisateur peut déplacer avec des interactions de glisser-déposer (drag & drop).

```js
gsap.registerPlugin(Draggable);

Draggable.create(".box", {
  type: "x,y",
  bounds: "#container",
  onDrag: function() {
    console.log("Position : ", this.x, this.y);
  }
});
```

* **type** : Spécifie le type de mouvement autorisé. Les options incluent “x”, “y”, “rotation”, etc.
* **bounds** : Limite les déplacements de l’élément à l’intérieur d’un conteneur spécifié.
* **onDrag** : Callback appelée lors du déplacement de l’élément, utile pour obtenir la position actuelle.

<iframe class="aspect-4-3" height="300" style="width: 100%;" scrolling="no" title="GSAP -  Drag" src="https://codepen.io/tim-momo/embed/XWvGPNy?default-tab=result&editable=true&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/XWvGPNy">
  GSAP -  Drag</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### MotionPath

Le plugiciel [MotionPath](https://gsap.com/docs/v3/Plugins/MotionPathPlugin/) permet d’animer des objets le long d’un chemin défini, offrant des animations complexes et précises.

```js
gsap.registerPlugin(MotionPathPlugin);

gsap.to(".box", {
  duration: 5,
  motionPath: {
    path: "#cheminSVG",
    align: "#cheminSVG",
    autoRotate: true,
    alignOrigin: [0.5, 0.5]
  }
});
```

* **path** : Chemin SVG ou tableau de coordonnées définissant le trajet de l’animation.
* **align** : Aligne l’élément animé sur le chemin spécifié.
* **autoRotate** : Fait pivoter automatiquement l’élément dans la direction du chemin.
* **alignOrigin** : Point d’origine pour l’alignement, généralement [0.5, 0.5] pour centrer.

<iframe class="aspect-4-3" height="300" style="width: 100%;" scrolling="no" title="GSAP - MotionPath" src="https://codepen.io/tim-momo/embed/YzmgOvW?default-tab=result&editable=true&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/YzmgOvW">
  GSAP - MotionPath</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Text

Le plugiciel [Text](https://gsap.com/docs/v3/Plugins/TextPlugin/) permet d’animer le contenu textuel d’un élément DOM, en remplaçant progressivement le texte existant par un nouveau.

```js
gsap.registerPlugin(TextPlugin);

gsap.to(".texte", {
  duration: 2,
  text: "Nouveau contenu textuel",
  ease: "none"
});
```

* **text** : Nouveau texte à afficher. Peut être une chaîne de caractères ou un objet avec des propriétés telles que value, delimiter, newClass, etc.
* **delimiter** : Caractère utilisé pour diviser le texte, par défaut une chaîne vide pour une animation caractère par caractère.
* **newClass** : Classe CSS appliquée au nouveau texte.
* **oldClass** : Classe CSS appliquée à l’ancien texte.
* **padSpace** : Si true, ajoute des espaces insécables pour maintenir la longueur du texte lors de la transition.
* **preserveSpaces** : Si true, conserve les espaces multiples dans le texte.

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="GSAP - MotionPath" src="https://codepen.io/tim-momo/embed/yLmwRJW?default-tab=result&editable=true&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/yLmwRJW">
  GSAP - MotionPath</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Plugiciels payants :money_with_wings:, mais disponibles :sweat_smile:

### MotionPath Helper

Le plugiciel [MotionPath Helper](https://gsap.com/docs/v3/Plugins/MotionPathHelper/) fournit une interface interactive pour créer et ajuster des chemins de mouvement directement dans le navigateur, facilitant la conception d’animations complexes.

```js
gsap.registerPlugin(MotionPathHelper);

const tween = gsap.to(".objet", {
  duration: 5,
  motionPath: {
    path: "#chemin",
    align: "#chemin",
    autoRotate: true
  }
});

MotionPathHelper.create(tween);
```

* **motionPath** : Objet définissant le chemin de mouvement, avec des propriétés telles que path, align et autoRotate.
* **path** : Chemin SVG ou tableau de points définissant le trajet de l’animation.

<iframe class="aspect-4-3" height="300" style="width: 100%;" scrolling="no" title="GSAP - MotionPath" src="https://codepen.io/tim-momo/embed/NWQJOge?default-tab=result&editable=true&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/NWQJOge">
  GSAP - MotionPath</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### DrawSVG

Le plugiciel [DrawSVG](https://gsap.com/docs/v3/Plugins/DrawSVGPlugin/) permet d’animer la révélation progressive ou la dissimulation des contours d’éléments SVG tels que `<path>`, `<line>`, `<polyline>`, `<polygon>`, `<rect>` ou `<ellipse>`.

```js
gsap.registerPlugin(DrawSVGPlugin);

gsap.from(".ligne", {
  duration: 2,
  drawSVG: 0
});
```

* **drawSVG** : Définit la portion du tracé à afficher. Par exemple, `drawSVG: "0% 100%"` affiche l’intégralité du tracé, tandis que `drawSVG: "50% 50%"` affiche uniquement le milieu du tracé.

<iframe class="aspect-4-3" height="300" style="width: 100%;" scrolling="no" title="GSAP - Text" src="https://codepen.io/tim-momo/embed/ZEgPqXY?default-tab=result&editable=true&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/ZEgPqXY">
  GSAP - Text</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### ScrambleText

Le plugiciel [ScrambleText](https://gsap.com/docs/v3/Plugins/ScrambleTextPlugin/) permet d’animer le texte en le remplaçant par des caractères aléatoires, créant un effet de déchiffrement ou de brouillage.

```js
gsap.registerPlugin(ScrambleTextPlugin);

gsap.to(".texte", {
  duration: 1.5,
  scrambleText: "Nouveau texte",
  chars: "lowerCase",
  revealDelay: 0.5
});
```

* **scrambleText** : Le texte final à afficher après l’animation.
* **chars** : Les caractères utilisés pour le brouillage. Options : "upperCase", "lowerCase", "upperAndLowerCase" ou une chaîne personnalisée.
* **revealDelay** : Délai avant le début de la révélation du texte final.

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="GSAP - Text" src="https://codepen.io/tim-momo/embed/JjgzmpW?default-tab=result&editable=true&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/JjgzmpW">
  GSAP - Text</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Inertia

Le plugiciel [Inertia](https://gsap.com/docs/v3/Plugins/InertiaPlugin/) de GSAP permet de créer des animations avec une inertie réaliste, simulant un mouvement qui ralentit progressivement jusqu’à s’arrêter, idéal pour des effets de lancer ou de glissement.

```js
gsap.registerPlugin(InertiaPlugin);

Draggable.create(".objet", {
  type: "x,y",
  throwProps: true,
  inertia: {
    resistance: 100
  }
});
```

* **inertia** : Objet définissant les propriétés d’inertie, telles que la résistance ou les limites de mouvement.
* **resistance** : Valeur contrôlant la rapidité avec laquelle le mouvement ralentit.

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="GSAP -  Draggable" src="https://codepen.io/tim-momo/embed/abeMRYB?default-tab=result&editable=true&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/abeMRYB">
  GSAP -  Draggable</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### MorphSVG

Le plugiciel [MorphSVG](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/) permet de transformer une forme SVG en une autre, même si elles ont un nombre de points différent, offrant des transitions fluides entre des formes complexes.

```js
gsap.registerPlugin(MorphSVGPlugin);

gsap.to("#forme1", {
  duration: 2,
  morphSVG: "#forme2",
  shapeIndex: 2
});
```

* **morphSVG** : Sélecteur ou élément cible vers lequel la forme doit se transformer.
* **shapeIndex** : Contrôle la correspondance des points entre les formes pour une transition plus fluide.

<iframe class="aspect-4-3" height="300" style="width: 100%;" scrolling="no" title="GSAP - MorphSVG" src="https://codepen.io/tim-momo/embed/abeMRGp?default-tab=result&editable=true&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/abeMRGp">
  GSAP - MorphSVG</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

!!! success "SVG"

    Vous pouvez trouver des SVG gratuit ici : <https://www.svgrepo.com/collection/free-animals/>

### SplitText

Le plugiciel [SplitText](https://gsap.com/docs/v3/Plugins/SplitText/) permet de diviser le texte en caractères, mots ou lignes individuels, facilitant ainsi des animations détaillées et précises sur chaque segment de texte.

```js
gsap.registerPlugin(SplitText);

const split = new SplitText(".texte", { type: "words,chars" });

gsap.from(split.chars, {
  duration: 1,
  y: 50,
  opacity: 0,
  stagger: 0.05
});
```

* **type** : Spécifie comment le texte est divisé, avec des options telles que "chars", "words", "lines" ou une combinaison de celles-ci.
* **stagger** : Définit le délai entre le début des animations pour chaque segment, créant un effet de cascade.

<iframe class="aspect-4-3" height="300" style="width: 100%;" scrolling="no" title="GSAP - MorphSVG" src="https://codepen.io/tim-momo/embed/XWvGxyj?default-tab=result&editable=true&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/XWvGxyj">
  GSAP - MorphSVG</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Devoirs

### Devoir 5 (formatif)

<div class="grid grid-1-2" markdown>
  ![](./assets/images/eeaao.jpg)

  <small>Devoir - GSAP</small><br>
  **[Everything Everywhere All at Once](./devoir/gsap-devoir5.md){.stretched-link}**
</div>

### PS2 : Sais-tu ce que je sais?

<div class="grid grid-1-2" markdown>
  ![](./assets/images/quizz.jpg)

  <small>Devoir - GSAP</small><br>
  **[Si tu savais ce que je sais](./devoir/PS2.md){.stretched-link}**
</div>

[STOP]

## Exercice

<https://tim-montmorency.com/timdoc/582-424MO/gsap/exercices/motionpath-voiture-et-vallons/>

## Flip :white_check_mark:

Le plugiciel [Flip](https://gsap.com/docs/v3/Plugins/Flip/) facilite les transitions fluides entre deux états, même en cas de modifications importantes de la structure du DOM. Il enregistre l’état initial des éléments, permet des changements, puis anime les éléments vers leur nouvel état.

```js
gsap.registerPlugin(Flip);

// Sélectionner les éléments à animer
const elements = document.querySelectorAll(".box");

// Enregistrer l'état initial
const state = Flip.getState(elements);

// Apporter des modifications au DOM ou aux styles
// Par exemple, changer l'ordre des éléments
document.querySelector("#container").appendChild(elements[0]);

// Animer la transition vers le nouvel état
Flip.from(state, {
  duration: 1,
  ease: "power1.inOut"
});
```

* **duration** : Durée de l’animation en secondes.
* **ease** : Fonction d’assouplissement pour contrôler la progression de l’animation.

## Observer :white_check_mark:

Le plugiciel [Observer](https://gsap.com/docs/v3/Plugins/Observer/) offre une manière unifiée de détecter des événements significatifs sur tous les dispositifs (tactile, souris, pointeur) sans gérer les détails d’implémentation.

```js
gsap.registerPlugin(Observer);

Observer.create({
  target: window,
  type: "wheel,touch",
  onUp: () => console.log("Défilement vers le haut"),
  onDown: () => console.log("Défilement vers le bas")
});
```

* **target** : Élément à observer (par exemple, window).
* **type** : Types d’événements à écouter, tels que “wheel”, “touch”, “scroll”, “pointer”.
* **onUp** : Fonction de rappel appelée lors d’un mouvement vers le haut.
* **onDown** : Fonction de rappel appelée lors d’un mouvement vers le bas.

### ScrollSmoother

Le plugiciel [ScrollSmoother](https://gsap.com/docs/v3/Plugins/ScrollSmoother/) améliore l’expérience de défilement en ajoutant un effet de défilement fluide, tout en conservant les fonctionnalités natives du navigateur et en évitant les barres de défilement artificielles.

```js
gsap.registerPlugin(ScrollSmoother);

ScrollSmoother.create({
  smooth: 1.5,
  effects: true,
  normalizeScroll: true
});
```

* **smooth** : Contrôle la douceur du défilement, avec des valeurs plus élevées pour un effet plus fluide.
* **effects** : Active les effets de parallaxe et autres animations liées au défilement.
* **normalizeScroll** : Prévient les comportements indésirables liés au défilement sur les appareils mobiles.
