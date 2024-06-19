# Cours 3 - Interpolations

![Interpolation](https://github.com/tim-montmorency/compendium/assets/142059735/bc85f55a-cebf-4eac-9b35-34c6ee13ade7)

## Qu'est-ce qu'une interpolation ?

Une interpolation c'est ce qui nous permet de "remplir les trous" entre deux points pour obtenir une transition lisse.

Imaginons un personnage qui doit se déplacer de la gauche (point A) vers la droite (point B) en trois secondes.

* ❌ **Sans interpolation** : Le personnage sauterait instantanément du point A au point B.
* ✅ **Avec interpolation** : Le mouvement est décomposé en plusieurs petites étapes, faisant apparaître le personnage à diverses positions intermédiaires, donnant l'impression qu'il se déplace en douceur à travers l'écran.

## Interpolation avec Phaser

Pour animer un élément du jeu, on peut utiliser le système d'interpolation de Phaser. Dans le langage Phaser, on le nomme [Tweens](https://newdocs.phaser.io/docs/3.80.0/Phaser.Tweens)! Les Tweens nous permettent grosso modo de facilement programmer des animations.

### Types d'interpolation

1. Animation simple
1. Séquence d'animations
1. Animation avancée

### Animation simple

<iframe class="codepen" height="300" style="width: 100%;" scrolling="no" title="Tween" src="https://codepen.io/tim-momo/embed/YzbePoR?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/YzbePoR">
  Tween</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

De manière générale, une animation simple représente une transformation géométrique. Pour ajouter une animation, on doit écrire la commande `this.tweens.add({})` dans laquelle nous ajoutons un objet avec certaines propriété. En voici quelques unes : 

#### Translation : 

`x` : La nouvelle position à atteindre sur l'axe des X. L'image se déplacera horizontalement jusqu'à la destination spécifiée.

`y` : La nouvelle position à atteindre sur l'axe des Y. L'image se déplacera verticalement jusqu'à la destination spécifiée.

#### Rotation

`angle`: La nouvelle valeur de l'angle en degrés. L'image effectuera une rotation de l'angle spécifié.

`rotation`: La nouvelle valeur de la rotation en radians. Une valeur de Math.PI afficherait une rotation de 180 degrés.

#### Échelle

`scale` : Modifie la taille de l'image. La valeur par défaut est 1. Une valeur de 2 doublerait la taille de l'image, tandis que 0.5 la réduirait de moitiée.

#### Transparence

`alpha` : Modifie l'opacité (alpha) de l'image. La valeur soit se trouver entre 1 (100% d'opacité) et 0 (0% d'opacité).

Regardons ensemble un exemple pour mieux comprendre la syntaxe dans son contexte.

```js
const serpent = this.add.image(64, 64, 'serpent');

this.tweens.add({ // Ajoute une nouvelle animation à la scène.

    targets: serpent, // Élément(s) à animer.
    x: 400,
    y: 500,
    rotation: Math.PI * 2,

    ease: 'Linear', 
    duration: 2000,
    yoyo: true,
    repeat: -1

});
```
