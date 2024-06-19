# Cours 3 - Interpolations

## Ordre du jour

* Wooclap
* Interpolations
* Exercices
* Devoir

## Qu'est-ce qu'une interpolation ?

Une interpolation c'est ce qui nous permet de "remplir les trous" entre deux points pour obtenir une transition lisse.

Imaginons un personnage qui doit se déplacer de la gauche (**point A**) vers la droite (**point B**) en trois secondes.

* ❌ **Sans interpolation** : Le personnage sauterait du point A au point B sans transition.
* ✅ **Avec interpolation** : Le mouvement est décomposé en plusieurs petites étapes, faisant apparaître le personnage à diverses positions intermédiaires, donnant l'impression qu'il se déplace en douceur à travers l'écran. Voyez cela un peu comme les images par secondes au cinéma🍿.

## Interpolation avec Phaser

Pour animer un élément du jeu, on peut utiliser le système d'interpolation de Phaser. Dans le langage Phaser, on le nomme [Tweens](https://newdocs.phaser.io/docs/3.80.0/Phaser.Tweens)! Les Tweens nous permettent grosso modo de facilement programmer des animations.

### Types d'interpolation

1. Animation simple
1. Séquence d'animations
1. Animation avancée

## Animation simple

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Tween" src="https://codepen.io/tim-momo/embed/YzbePoR?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/YzbePoR">
  Tween</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

De manière générale, une animation simple représente une transformation géométrique 📐. Pour ajouter une animation, on doit écrire la commande `this.tweens.add({})` dans laquelle nous ajoutons un objet avec certaines propriétés. En voici quelques unes : 

### Translation : 

`x` : La nouvelle position sur l'axe des X. L'image se déplacera horizontalement jusqu'à cette position.

`y` : La nouvelle position sur l'axe des Y. L'image se déplacera verticalement jusqu'à cette position.

### Rotation

`angle`: La nouvelle valeur de l'angle en degrés. Par exemple, une valeur de 360 fera tourner l'objet d'un tour complet.

`rotation`: La nouvelle valeur de la rotation en radians. Une valeur de Math.PI (3.14159...) équivaut à une rotation de 180 degrés.

### Échelle

`scale` : Modifie la taille de l'élément. Une valeur de 2 doublera la taille, tandis qu'une valeur de 0.5 la réduira de moitié.

### Transparence

`alpha` : Modifie l'opacité de l'élément. La valeur doit se situer entre 0 et 1. Une valeur de 1 signifie que l'élément est complètement opaque (100% d'opacité), tandis qu'une valeur de 0 le rend totalement transparent. Les valeurs entre 0 et 1 représentent différents niveaux de transparence.

Regardons ensemble un exemple pour bien comprendre la syntaxe dans son contexte.

```js
const serpent = this.add.image(64, 64, 'serpent');

this.tweens.add({
    targets: serpent, // Élément à animer.
    x: 400,
    y: 300,
    rotation: Math.PI * 2,
});
```
