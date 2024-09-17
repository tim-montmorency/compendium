[:material-arrow-u-left-top: Cours 4](../cours04.md){.breadcrumb}

# Ça commence par une feuille

L'objectif de cet exercice est d'utiliser la méthode _wrap-around_ avec la physique activée.

!!! success "Utilisez Phaser.Math.Between()"

    Dans cet exercice, vous aurez surement besoin d’utiliser la commande suivante : `Phaser.Math.Between(100, 200)`.

    Cette fonction est similaire à `Math.random()` en JavaScript, mais avec une différence intéressante : elle génère un nombre aléatoire entre deux valeurs (dans mon exemple, entre 100 et 200).

## Résultat attendu

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Phaser - Feuille PUBLIC" src="https://codepen.io/tim-momo/embed/MWMMajB?default-tab=&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/MWMMajB">
  Phaser - Feuille PUBLIC</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Consignes

- [ ] Veuillez effectuer un fork du [Codepen de départ](https://codepen.io/tim-momo/pen/xxoowEN)
- [ ] Dans la fonction `create()`, ajoutez l'image à une position aléatoire dans le canvas
- [ ] Dans la fonction `create()`, appliquez une vélocité x et y aléatoire à l'image
- [ ] Dans la fonction `update()`, ajoutez la méthode wrap-around avec physique sur l'image
