[:material-arrow-u-left-top:](../phaser-objects.md){ .breadcrumb }

# Orange mécanique

## Objectif

L'objectif de cet exercice est de dessiner un visage avec des formes primitives en Phaser.

Le positionnement exact des éléments graphiques n'est pas requis, mais le visage doit être centré horizontalement.

## Résultat attendu

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Phaser - Orange Mécanique PUBLIC" src="https://codepen.io/tim-momo/embed/rNEqdWY/4eefd5afdf0da9ed7c68896a6f6a50ac?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/rNEqdWY/4eefd5afdf0da9ed7c68896a6f6a50ac">
  Phaser - Orange Mécanique PUBLIC</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Code de départ

```js
class OrangeMecanique extends Phaser.Scene {
  create() {
    // ...
  }
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 400,
  scene: OrangeMecanique
};

const game = new Phaser.Game(config);
```

## Consignes

- [ ] En CSS, changer la couleur de fond du site en orange (`#e18437`)
- [ ] Ajouter un sourire avec une courbe de type Arc (`graphics.arc()`)
- [ ] Ajouter les yeux blancs (`graphics.fillCircle()`)
- [ ] Ajouter l'œil foncé (`0x321b07`)
- [ ] Ajouter les trois cils (`graphics.moveTo()`, `graphics.lineTo()`)
- [ ] Faites valider par le corps enseignant
