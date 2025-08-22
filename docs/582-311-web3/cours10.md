# Cours 10



## ScrollTrigger

Le plugiciel (plugin) ScrollTrigger permet de déclencher des animations en fonction de la progression du défilement (scroll) dans une page web, offrant un contrôle précis sur les effets liés au scroll.

<figure>
  <iframe class="aspect-1-1" height="300" style="width: 100%;" scrolling="no" title="DEMO Welcome to the jungle - ScrollTrigger credits: Louis Hoebregts" src="https://codepen.io/tim-momo/embed/zYmxoJB?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href="https://codepen.io/tim-momo/pen/zYmxoJB">
    DEMO Welcome to the jungle - ScrollTrigger credits: Louis Hoebregts</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
    on <a href="https://codepen.io">CodePen</a>.
  </iframe>
  <figcaption markdown>Crédit [Louis Hoebregts](https://codepen.io/Mamboleoo)</figcaption>
</figure>

<figure>
  <iframe class="aspect-1-1" height="300" style="width: 100%;" scrolling="no" title="DEMO Weird Fishes - credits: Michelle Barker" src="https://codepen.io/tim-momo/embed/XWxJNBd?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href="https://codepen.io/tim-momo/pen/XWxJNBd">
    DEMO Weird Fishes - credits: Michelle Barker</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
    on <a href="https://codepen.io">CodePen</a>.
  </iframe>
  <figcaption markdown>Crédit [Michelle Barker](https://codepen.io/michellebarker)</figcaption>
</figure>

![type:video](https://www.youtube.com/embed/uYMYlipIReA?si=SXBe1Mjv7jbzwUvN)

### Installation

Comme pour tout plugiciel (plugin) pour GSAP, afin d'avoir accès à ses fonctionnalités, il est nécessaire d'avoir incorporé la librairie GSAP **préalablement** et d'ajouter ensuite le plugiciel dans le projet.

```html hl_lines="4"
<head>
  <!-- ... -->
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js" defer></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js" defer></script>
  <script src="path/to/your/script.js" defer></script>
</head>
```

Puis, dans votre script, vous devez attacher le plugiciel avec la commande : `gsap.registerPlugin(ScrollTrigger);`.

### Usage

Pour déclencher une animation  en fonction du scroll, il faut créer un objet `ScrollTrigger` et lui passer des paramètres, comme `trigger` par exemple.

Ce paramètre désigne l'élément qui déclenchera l'animation. Encore une fois, l'élément est un **sélecteur CSS**.

Voici un exemple très simple :

```js title="script.js" hl_lines="1"
gsap.registerPlugin(ScrollTrigger);
gsap.to('.box2', {
  scrollTrigger: {
    // Commence l'animation quand ".box2" est visible.
    trigger: '.box2',
    // Marqueurs de débogage. N'affecte aucunement à l'animation
    markers: true,
  },
  x: 100%,
  duration: 2,
});
```

<iframe class="aspect-4-3" height="300" style="width: 100%;" scrolling="no" title="GSAP -  scrollTrigger La base" src="https://codepen.io/tim-momo/embed/YzmLdmq?default-tab=result&editable=true&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/YzmLdmq">
  GSAP -  scrollTrigger La base</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Voici une exemple avec plusieurs possibilités (non-exhaustif) :

```js title="script.js" hl_lines="1"
gsap.registerPlugin(ScrollTrigger);

gsap.to('.ton-selecteur', {
  x: '100%',
  duration: 10,
  ease: 'none',
  scrollTrigger: {
    // Détermine l'élément qui déclenche l'animation.
    // Par défaut, c'est l'élément animé lui-même!
    trigger: '.ton-selecteur',

    // Définit où commence l'animation en fonction de la position de l'élément par rapport à la fenêtre.
    // Ici, 'top 80%' signifie que l'animation commence lorsque le haut de l'élément arrive à 80% de la hauteur de la fenêtre. On peut voir le résultat en configurant la propriété markers à true.
    start: 'top 80%',

    // Définit où se termine l'animation.
    // Ici, 'bottom 20%' signifie que l'animation se termine lorsque le bas de l'élément atteint 20% de la hauteur de la fenêtre. On peut voir le résultat en configurant la propriété markers à true.
    end: 'bottom 20%',

    // Rend l'animation synchronisée avec le défilement, créant une animation fluide et progressive.
    // Ça annule le parametre duration
    // Ici, ça signifie que ça va prendre 5 sec. pour se synchroniser.
    scrub: 5,

    // Affiche des marqueurs de débogage (en haut et en bas) indiquant les positions de début et de fin, ainsi que le nom de l'animation.
    markers: true,

    // Fixe l'élément à l'écran pendant que l'animation se déroule. Pratique pour des effets de défilement "parallax".
    pin: true,

    // Maintient l'espace occupé par l'élément pendant qu'il est fixé.
    pinSpacing: true,

    // Définit ce qui se passe à chaque étape de l'animation
    toggleActions: 'play pause resume reset',

    // Applique une classe CSS à l'élément déclencheur une fois l'animation démarrée, ce qui peut être utile pour des effets de style conditionnels.
    toggleClass: 'active',

    // Assigne un identifiant à l'instance de ScrollTrigger, facilitant le débogage et le suivi de l'animation.
    id: 'boxAnimation',

    // Si true, l’animation se déclenche lors du défilement horizontal au lieu du vertical.
    horizontal: false,

    // Callback appelé lorsque l'élément entre dans la vue pour la première fois.
    // Peut être utilisé pour déclencher d'autres actions ou animations.
    onEnter: () => console.log('onEnter'),

    // Callback appelé lorsque l'élément quitte la vue pour la première fois, utile pour d’autres actions ou statistiques.
    onLeave: () => console.log('onLeave'),

    // Callback appelé lorsqu'on fait défiler en sens inverse et que l'élément réapparaît dans la vue.
    onEnterBack: () => console.log('onEnterBack'),

    // Callback appelé lorsqu'on fait défiler en sens inverse et que l'élément disparaît de la vue.
    onLeaveBack: () => console.log('onLeaveBack'),

    // Callback appelé à chaque mise à jour de l'animation. Ici, on enregistre la progression de l'animation.
    onUpdate: (self) => {
      console.log("Progress : ", self.progress);
      console.log("Direction : ", self.direction === 1 ? "down" : "up");
      console.log("Variables : ", self.vars);
    },

    // Callback déclenché lors de l’actualisation de l'animation, ce qui peut être utile si le contenu change en taille ou position.
    onRefresh: () => console.log('onRefresh'),

    // Callback qui est exécuté quand le "scrubbing" est terminé, utile pour les ajustements en fin de défilement.
    onScrubComplete: () => console.log('onScrubComplete'),
  },
});
```

Un peu plus de détails sur les paramètres

### `start` et `end`

On écrit la valeur de du paramètre en suivant cette nomenclature :

```js
scrollTrigger: {
  start: "[position_element] [position_viewport]",
  end: "[position_element] [position_viewport]",
}
```

**Position de l’élément** (première valeur) : Spécifie la partie de l’élément déclencheur qui débute l’animation. Voici les valeurs possibles :

* "top" : Le haut de l’élément.
* "center" : Le centre de l’élément.
* "bottom" : Le bas de l’élément.
* Valeur en pixels ou en pourcentage (ex. "50px" ou "10%" par rapport à l’élément).

**Position du viewport** (deuxième valeur) : Indique la position dans la fenêtre où l’animation doit démarrer. Voici les valeurs possibles :

* "top" : Le haut du viewport.
* "center" : Le centre du viewport.
* "bottom" : Le bas du viewport.
* Valeur en pixels ou en pourcentage (ex. "50px" ou "20%" par rapport au viewport).

Exemples

```js
gsap.registerPlugin(ScrollTrigger);
gsap.to('.abc', {
  scrollTrigger: {
    start: 'top 80%', // Commence quand le haut de l'élément arrive à 80% de la hauteur du viewport.
    end: 'bottom 20%', // Se termine quand le bas de l'élément atteint 20% de la hauteur du viewport.
  }
  //...
}
```

```js
gsap.registerPlugin(ScrollTrigger);
gsap.to('.abc', {
  scrollTrigger: {
    start: 'center center', // Commence quand le centre de l'élément arrive au centre du viewport.
    end: 'bottom top', // Se termine quand le bas de l'élément atteint le haut du viewport.
  }
  //...
}
```

```js
gsap.registerPlugin(ScrollTrigger);
gsap.to('.abc', {
  scrollTrigger: {
    start: 'left center', // Commence quand le côté gauche de l'élément arrive au centre du viewport (utile pour le scroll horizontal).
    end: 'right 80%', // Se termine quand le côté droit de l'élément arrive à 80% de la largeur du viewport.
  }
  //...
}
```

### `toggleActions`

Détermine la manière dont l'animation liée est contrôlée par les 4 callbacks : `onEnter` , `onLeave` , `onEnterBack` et `onLeaveBack`, dans cet ordre précisément.

La valeur par défaut est `play none none none`.

Voici comment fonctionnent les valeurs possibles dans le contexte de toggleActions :

* `play` : L’animation démarre ou reprend en entrant dans la zone définie.
* `pause` : L’animation se met en pause lorsque l’élément sort de la zone.
* `resume` : L’animation continue depuis sa dernière position en entrant dans la zone.
* `reset` : L’animation revient à son état initial.
* `restart` : L’animation recommence depuis le début.
* `complete` : L’animation va directement à la fin.
* `reverse` : L’animation se joue à l’envers.
* `none` : Aucun changement n’est appliqué.

```js
gsap.to('.element', {
  scrollTrigger: {
    trigger: '.element',
    start: 'top center',
    end: 'bottom center',
    toggleActions: 'play reverse resume reset',
    markers: true,
  },
  x: 200,
  duration: 2,
});
```

### timeline

scrollTrigger ne s'applique pas qu'à la méthode `to`, `from` ou `fromTo`. Elle s'applique aussi à la méthode `timeline`!

```js
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".container",
      scrub: 0,
      markers: true
    }
  })
  .to('.element', {x: 100});
```

## Exercice

<div class="grid grid-1-2" markdown>
  ![](./assets/images/chat.png)

  <small>Exercice - GSAP</small><br>
  **[Passion maladive](./exercices/gsap-passion.md){.stretched-link}**
</div>

<div class="grid grid-1-2" markdown>
  ![](./assets/images/maze.png)

  <small>Exercice - GSAP</small><br>
  **[Labyrinthe](./exercices/gsap-maze.md){.stretched-link}**
</div>

Exercices supplémentaires de l'ancien cours : [Zelda](https://tim-montmorency.com/timdoc/582-424MO/gsap/exercices/scrolltrigger-historique-zelda/), [Scrub](https://tim-montmorency.com/timdoc/582-424MO/gsap/exercices/gsap-scrub/), [Pin](https://tim-montmorency.com/timdoc/582-424MO/gsap/exercices/gsap-pin-marvel/)

## Devoir 4 (formatif)

<div class="grid grid-1-2" markdown>
  ![](./assets/images/monstre.png)

  <small>Devoir - GSAP</small><br>
  **[Monstruosité Inc.](./devoir/gsap-devoir4.md){.stretched-link}**
</div>
