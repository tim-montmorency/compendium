[:material-arrow-u-left-top: Cours 4](../cours04.md){.breadcrumb}

# Peglin

Cet exercice permet de pratiquer la gestion de boucles `for` en même temps que la gestion d'une scène avec physique dans Phaser.

!!! question "Changer la forme de collision ?"

    Oui oui on peut!

    Pour ajuster la forme de collision d'un sprite à un cercle, vous pouvez utiliser la méthode `setCircle()` sur le body de l'objet.

    ```javascript
    this.mon_bonhomme.body.setCircle(this.mon_bonhomme.width / 2);
    ```

    Si votre cercle de collision n'est pas tout à fait centré avec votre image, vous pouvez ajuster sa position avec des paramètres offset.

    ```javascript
    this.mon_bonhomme.body.setCircle(this.mon_bonhomme.width / 2, offsetX, offsetY);
    ```

## Résultat attendu

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Phaser - Peglin PUBLIC" src="https://codepen.io/tim-momo/embed/NWZZxqO?default-tab=&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/NWZZxqO">
  Phaser - Peglin PUBLIC</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Consignes

- [ ] Veuillez effectuer un fork du [Codepen de départ](https://codepen.io/tim-momo/pen/abggdvd)
- [ ] Dans l'objet config, changez la gravité sur l'axe `y` pour `1000`
- [ ] Dans la fonction `create()`, ajoutez une variable `this.ball` et ajoutez-y l'image "ball" à travers le système de physique
- [ ] Dans la fonction `create()`, ajoutez un `setBounce()` de 0.9 à la variable `this.ball`
- [ ] Dans la fonction `create()`, appliquez une vélocité aléatoire à la variable `this.ball`
- [ ] Dans la fonction `create()`, modifiez la forme de collision de la balle pour un cercle
- [ ] Dans la fonction `create()`, à l'aide de deux boucles `for`, positionnez des obstacles à peu près comme dans le « Résultat attendu »
- [ ] Dans la boucle `for` imbriquée, chaque nouvel obstacle doit être immobile, non affecté par la gravité et avoir une forme de collision en cercle
- [ ] Dans la boucle `for` imbriquée, ajoutez le `collider` entre `this.ball` et chaque obstacle
- [ ] Dans la fonction `update()`, ajoutez la méthode wrap-around avec physique sur `this.ball`
- [ ] Dans l'objet config, désactivez le mode debug
