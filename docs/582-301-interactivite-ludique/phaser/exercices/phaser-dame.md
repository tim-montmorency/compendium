[:material-arrow-u-left-top:](../phaser-objects.md){ .breadcrumb }

# Jeu de dames

## Objectif

L'objectif de cet exercice est de construire un damier de 8x8 avec les pièces.

Le tout doit être réalité avec des boucles `for`.

## Résultat attendu

<iframe class="aspect-1-1" height="300" style="width: 100%;" scrolling="no" title="Phaser - Dame" src="https://codepen.io/tim-momo/embed/qBzJoZy/f5ac0f7177e5fce43acc52e6261fad86?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/qBzJoZy/f5ac0f7177e5fce43acc52e6261fad86">
  Phaser - Dame</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Code de départ

```js
class Damier extends Phaser.Scene {
  create() {
    // Dessiner le plateau de jeu
    // Dessiner les pièces
  }
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 800,
  scene: Damier
};

const game = new Phaser.Game(config);
```

## Consignes

- [ ] Créer une grille de 8x8 avec des carrés (`graphics.fillRect()`)
- [ ] Créer les pièces rouges avec des cercles (`graphics.fillCircle()`)
- [ ] Créer les pièces noires avec des cercles (`graphics.fillCircle()`)
- [ ] Faites valider par le corps enseignant
