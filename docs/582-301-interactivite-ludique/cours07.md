---
tags:
  - Cours 7
  - Mardi 8 octobre
---

[STOP]

# Animations programmées

Propriétés de transformation
Animations programmées
— Animations interpolées
— Séquence d'animations

Chain animation
<https://phaser.io/sandbox/?src=src\animation\chained%20animation.js>

## Ordre du jour

* Wooclap
* Interpolations
* Exercices
* Devoir

## Qu'est-ce qu'une interpolation ?

Une interpolation c'est ce qui nous permet de "remplir les trous" entre deux points pour obtenir une transition lisse.

Imaginons un personnage qui doit se déplacer de la gauche (**point A**) vers la droite (**point B**) en trois secondes.

❌ **Sans interpolation** : Le personnage sauterait du point A au point B sans transition.

✅ **Avec interpolation** : Le mouvement est décomposé en plusieurs petites étapes, faisant apparaître le personnage à diverses positions intermédiaires, donnant l'impression qu'il se déplace en douceur à travers l'écran. Voyez cela un peu comme les images par secondes au cinéma🍿.

<iframe class="aspect-4-1" height="300" style="width: 100%;" scrolling="no" title="Interpolation" src="https://codepen.io/tim-momo/embed/qBGxwQP?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/qBGxwQP">
  Interpolation</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Interpolation avec Phaser

Pour animer un élément de jeu, on peut utiliser le système d'interpolation de Phaser. Cela peut se faire par une **animation interpolée** ([Tweens](https://newdocs.phaser.io/docs/3.80.0/Phaser.Tweens)), par une **séquence d'animations** ([Timeline](https://newdocs.phaser.io/docs/3.80.0/Phaser.Time.Timeline) / [TweenChain](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/tween/#chain)) ou par une **animation de parcours** ([PathFollow](https://newdocs.phaser.io/docs/3.80.0/Phaser.GameObjects.PathFollower)).

## Animation interpolée (Tween)

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Tween" src="https://codepen.io/tim-momo/embed/YzbePoR?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/YzbePoR">
  Tween</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

De manière générale, une animation interpolée représente simplement une transformation géométrique 📐.

Pour créer une nouvelle animation (Tween), on doit écrire la commande `this.tweens.add({});`. Cela indique à la scène Phaser qu'une animation doit être déclenchée. Voici la syntaxe d'un exemple très minimal, sans spécification sur l'animation :

```js title="Syntaxe"
this.tweens.add({
  // elementGraphique est l'objet à animer
  targets: elementGraphique,
});
```

### Propriétés

#### Translation

```js
this.tweens.add({
  targets: belleLune,
  x: 700,
  duration: 1500,
  repeat: -1
});
```

<div class="grid" markdown>
<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Translation X" src="https://codepen.io/tim-momo/embed/vYwwZaB?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/vYwwZaB">
  Translation X</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
`x` : La nouvelle position sur l'axe des X. L'image se déplacera horizontalement jusqu'à cette position.
</div>

---

```js
this.tweens.add({
  targets: belleLune,
  y: 300,
  duration: 1500,
  repeat: -1,
  yoyo: true
});
```

<div class="grid" markdown>
<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Translation Y" src="https://codepen.io/tim-momo/embed/GRaaEYJ?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/GRaaEYJ">
  Translation Y</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
`y` : La nouvelle position sur l'axe des Y. L'image se déplacera verticalement jusqu'à cette position.
</div>

#### Rotation

```js
this.tweens.add({
  targets: grainDeRiz,
  angle: 360,
  duration: 1500,
  repeat: -1
});
```

<div class="grid" markdown>
<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Rotation - Angle" src="https://codepen.io/tim-momo/embed/dyEERgB?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/dyEERgB">
  Rotation - Angle</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
`angle`: La nouvelle valeur de l'angle en degrés. Par exemple, une valeur de 360 fera tourner l'objet d'un tour complet.
</div>

---

```js
this.tweens.add({
  targets: grainDeRiz,
  rotation: Math.PI * 2,
  duration: 1500,
  repeat: -1
});
```

<div class="grid" markdown>
<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Rotation" src="https://codepen.io/tim-momo/embed/OJYYjLb?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/OJYYjLb">
  Rotation</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
`rotation`: La nouvelle valeur de la rotation en radians. Une valeur de Math.PI (3.14159...) équivaut à une rotation de 180 degrés.
</div>

#### Échelle

```js
this.tweens.add({
  targets: belleLune,
  scale: 3,
  duration: 1000,
  repeat: -1,
  yoyo: true
});
```

<div class="grid" markdown>
<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Scale" src="https://codepen.io/tim-momo/embed/qBGGXWz?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/qBGGXWz">
  Scale</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
`scale` : Modifie la taille de l'élément. Une valeur de 2 doublera la taille, tandis qu'une valeur de 0.5 la réduira de moitié.
</div>

#### Transparence

```js
this.tweens.add({
  targets: belleLune,
  alpha: 0,
  duration: 1500,
  repeat: -1,
  yoyo: true
});
```

<div class="grid" markdown>
<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Scale" src="https://codepen.io/tim-momo/embed/Exzzvxr?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/Exzzvxr">
  Scale</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
`alpha` : Modifie l'opacité de l'élément. La valeur doit se situer entre 0 et 1. Une valeur de 1 signifie que l'élément est complètement opaque (100% d'opacité), tandis qu'une valeur de 0 le rend totalement transparent. Les valeurs entre 0 et 1 représentent différents niveaux de transparence.
</div>

#### Fonctions d'accélération

```js
this.tweens.add({
  targets: belleLune,
  x: 700,
  duration: 5000,
  repeat: -1,
  ease: 'Circ.easeOut'
});
```

<iframe class="aspect-1-1" height="300" style="width: 100%;" scrolling="no" title="Ease" src="https://codepen.io/tim-momo/embed/LYoKGZK?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/LYoKGZK">
  Ease</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

[Liste des fonctions d'accélération Phaser](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/ease-function/)

#### Autres propriétés

```js
this.tweens.add({
  targets: sprite,
  x: 0,
  y: 0,
  alpha: 1.0,
  scale: 1,
  angle: 0,
  rotation: 0,
  duration: 0,      // Durée en millisecondes
  ease: 'Linear',   // Fonction d'accélération
  delay: 0,         // Délai avant l'animation
  repeat: 0,        // Nombre de répétitions (-1 pour infini)
  yoyo: false,      // Revenir à l'état initial après chaque répétition
  hold: 0,          // Temps de pause entre yoyo
  repeatDelay: 0,   // Délai entre chaque répétition
  paused: false,    // Commencer en pause
  onStart: function (tween, targets) {
    // Fonction exécutée au début de l'animation
    console.log('Animation commencée');
  },
  onComplete: function (tween, targets) {
    // Fonction exécutée à la fin de l'animation
    console.log('Animation terminée');
  },
  onYoyo: function (tween, targets) {
    // Fonction exécutée au moment du yoyo
    console.log('Yoyo');
  },
  onRepeat: function (tween, targets) {
    // Fonction exécutée à chaque répétition
    console.log('Répétition');
  },
  onUpdate: function (tween, targets) {
    // Fonction exécutée à chaque mise à jour de l'animation
    console.log('Mise à jour');
  }
});
```

### Exemple complet d'animation interpolée

Regardons ensemble un exemple complet pour bien comprendre la syntaxe.

```html title="./index.html"
<!DOCTYPE html>
<html>
  <head>
      <script src="./node_modules/phaser/dist/phaser.min.js"></script>
      <script src="./src/js/scenes/Exemple.js"></script>
      <script src="./src/js/init.js" defer></script>
  </head>
  <body></body>
</html>
```

```js title="./src/js/init.js"
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: Exemple
};

const game = new Phaser.Game(config);
```

```js title="./src/js/scenes/Exemple.js"
class Exemple extends Phaser.Scene {
  preload() {
    // Assets : https://kenney.nl/
    this.load.image("snake", "https://assets.codepen.io/9367036/snake.png");
  }

  create() {
    const img = this.add.image(178, 136, "snake");
    img.x = 100;
    img.y = 200;
    img.scale = 0.5;

    this.tweens.add({
      // Élément à animer
      targets: img,

      // Nouvelles valeurs à atteindre
      x: 600,
      scale: 1,
      angle: 360,

      // Règles de l'animation
      duration: 4000,
      yoyo: true,
      repeat: -1 // -1 = infini
    });
  }
}
```

<iframe class="aspect-2-1-tabbed" height="300" style="width: 100%;" scrolling="no" title="Exemple Tween" src="https://codepen.io/tim-momo/embed/preview/NWVMMyB?default-tab=result&editable=true&theme-id=50210" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/NWVMMyB">
  Exemple Tween</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Séquence d'animations

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Exemple Timeline" src="https://codepen.io/tim-momo/embed/preview/QWRrxEX?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/QWRrxEX">
  Exemple Timeline</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Pour définir une nouvelle séquence d'animations, on doit la déclarer dans une variable.

```js
let timeline = this.add.timeline();
```

On y ajoute ensuite des animations avec la structure suivante :

```js
timeline.add({
    at: 0,
    tween: {
        // Paramètres de l'animation
    },
});
```

`at` : Spécifie en millisecondes le moment où l'animation (Tween) doit commencer par rapport au début de sa séquence (Timeline).

Finalement, pour démarrer la séquence, il faut simplement appeler la fonction `play()` :

```js
timeline.play();
```

### Exemple d'une séquence d'animations

```html title="./index.html"
<!DOCTYPE html>
<html>
  <head>
      <script src="./node_modules/phaser/dist/phaser.min.js"></script>
      <script src="./src/js/scenes/Exemple.js"></script>
      <script src="./src/js/init.js" defer></script>
  </head>
  <body></body>
</html>
```

```js title="./src/js/init.js"
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: Exemple
};

const game = new Phaser.Game(config);
```

```js title="./src/js/scenes/Exemple.js"
class Exemple extends Phaser.Scene {
  preload() {
      // Assets : https://kenney.nl/
      this.load.image('duck', 'assets/images/duck.png');
  }

    create() {
        const img = this.add.image(136, 136, 'duck');
        img.x = 100;
        img.y = 200;
        img.alpha = 1;

        let timeline = this.add.timeline();

        timeline.add({
            at: 0,
            tween: {
                targets: img,
                x: 400,
                angle: -90,
                ease: 'Expo.easeOut',
                duration: 1000
            },
        });

        timeline.add({
            at: 0,
            tween: {
                targets: img,
                y: 100,
                ease: 'Sine.easeIn',
                duration: 1000
            },
        });

        timeline.add({
            at: 1000,
            tween: {
                targets: img,
                y: 300,
                ease: 'Sine.easeIn',
                duration: 1000
            },
        });

        timeline.add({
            at: 2000,
            tween: {
                targets: img,
                x: 700,
                angle: 0,
                ease: 'Expo.easeIn',
                duration: 1000
            },
        });

        timeline.add({
            at: 2000,
            tween: {
                targets: img,
                y: 200,
                ease: 'Sine.easeOut',
                duration: 1000
            },
        });


        timeline.play();

    }
}
```

<iframe class="aspect-2-1-tabbed" height="300" style="width: 100%;" scrolling="no" title="Exemple Timeline" src="https://codepen.io/tim-momo/embed/preview/QWRrxEX?default-tab=result&theme-id=50210" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/QWRrxEX">
  Exemple Timeline</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Animation de parcours (PathFollow)

À venir

## Exercices

<div class="grid grid-1-2" markdown>

  ![](assets/TeteNuages.png)

  <small>Exercice - Animation interpolée</small><br>
  **[La tête dans les nuages](exercices/nuages.md){.stretched-link}**

</div>

<div class="grid grid-1-2" markdown>

  ![](assets/AmbulanceAmbulante.png)

  <small>Exercice - Séquence d'animations</small><br>
  **[L'ambulance ambulante](exercices/ambulance.md){.stretched-link}**

</div>
