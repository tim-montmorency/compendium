# Cours 3 - Interpolations

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

Pour animer un élément de jeu, on peut utiliser le système d'interpolation de Phaser. Cela peut se faire par une **animation interpolée** ([Tweens](https://newdocs.phaser.io/docs/3.80.0/Phaser.Tweens)), par une **séquence d'animations** ([Timeline](https://newdocs.phaser.io/docs/3.80.0/Phaser.Time.Timeline)) ou par une **animation de parcours** ([PathFollow](https://newdocs.phaser.io/docs/3.80.0/Phaser.GameObjects.PathFollower)).

## Animation interpolée (Tween)

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Tween" src="https://codepen.io/tim-momo/embed/YzbePoR?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/YzbePoR">
  Tween</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

De manière générale, une animation interpolée représente une transformation géométrique 📐.

Pour ajouter une animation, on doit écrire la commande `this.tweens.add({})` à laquelle nous ajouterons un objet avec des propriétés. En voici quelques unes : 

### Translation

`x` : La nouvelle position sur l'axe des X. L'image se déplacera horizontalement jusqu'à cette position.

`y` : La nouvelle position sur l'axe des Y. L'image se déplacera verticalement jusqu'à cette position.

### Rotation

`angle`: La nouvelle valeur de l'angle en degrés. Par exemple, une valeur de 360 fera tourner l'objet d'un tour complet.

`rotation`: La nouvelle valeur de la rotation en radians. Une valeur de Math.PI (3.14159...) équivaut à une rotation de 180 degrés.

### Échelle

`scale` : Modifie la taille de l'élément. Une valeur de 2 doublera la taille, tandis qu'une valeur de 0.5 la réduira de moitié.

### Transparence

`alpha` : Modifie l'opacité de l'élément. La valeur doit se situer entre 0 et 1. Une valeur de 1 signifie que l'élément est complètement opaque (100% d'opacité), tandis qu'une valeur de 0 le rend totalement transparent. Les valeurs entre 0 et 1 représentent différents niveaux de transparence.

### Exemple d'animation interpolée

Regardons ensemble un exemple complet pour bien comprendre la syntaxe dans son contexte.

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

## Séquence d'animations (Timeline)





## Animation de parcours (PathFollow)

https://codepen.io/tim-momo/pen/yLWvyra.css
https://cdnjs.cloudflare.com/ajax/libs/phaser/3.80.1/phaser.min.js


## Exercices

<div class="grid grid-1-2" markdown>

  ![](assets/AmbulanceAmbulante.png) 

  <small>Exercice - Séquence d'animations</small><br>
  **[L'ambulance ambulante](exercices/ambulance.md){.stretched-link}**

</div>
