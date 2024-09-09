---
tags:
  - Cours 2
  - Mardi 2 septembre
---

# Phaser

## Maths

### Modulo `%`

L’opérateur modulo, souvent représenté par le symbole `%`, est une opération mathématique qui donne le reste d’une division entière entre deux nombres.

Il répond à la question : « **Quel est le reste d'une division ?** »

* 6 % 3 = 0
* 100 % 99 = 1
* 9 % 4 = 1

---

<!-- <div class="grid" markdown> -->
![](./assets/images/modulo_A.jpg){data-zoom-image}

![](./assets/images/modulo_B.jpg){data-zoom-image}
<!-- </div> -->

<iframe class="aspect-4-3" height="300" style="width: 100%;" scrolling="no" title="Modulo slow" src="https://codepen.io/tim-momo/embed/preview/ExBeqjz?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/ExBeqjz">
  Modulo slow</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

![](./assets/images/chatlime.gif){ .center }

#### Exemple

Admettons qu'on a une liste de pistes audio dans un `Array` et qu'on veut faire jouer une piste l’une après l'autre.

Lorsqu'on arrive à la dernière, on recommence le cycle; on boucle :material-repeat-variant:.so

```js title="Bande sonore"
soundtrack = ['piste1.mp3', 'piste2.mp3', 'piste3.mp3'];
```

On peut le faire sans `modulo` avec une condition `if`

```js title="Sans modulo"
lecteur.play( soundtrack[trackIndex] );

lecteur.once('complete', () => {
    trackIndex++;

    if (trackIndex >= soundtrack.length) {
        trackIndex = 0;
    }
});
```

Ou on peut le faire avec `modulo` (plus sophistiqué)

```js title="Avec modulo"
lecteur.play( soundtrack[trackIndex % soundtrack.length] );

lecteur.once('complete', () => {
    trackIndex++;
});
```

### Trigonométrie :triangular_ruler:

Les valeurs des fonctions trigonométriques `sin` et `cos` oscillent entre **-1** et **1**.

La différence est que `sin` commence à **0**, tandis que `cos` commence à **1**.

* `sin(0) = 0`
* `cos(0) = 1`

<iframe class="aspect-4-1" height="300" style="width: 100%;" scrolling="no" title="Sin Cos" src="https://codepen.io/tim-momo/embed/preview/gOJNgNp?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/gOJNgNp">
  Sin Cos</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<iframe class="aspect-2-1" height="300" style="width: 100%;" scrolling="no" title="Sin Cos Cercle" src="https://codepen.io/tim-momo/embed/preview/bGyPqBW?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/bGyPqBW">
  Sin Cos Cercle</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Phaser

[Installation](./phaser/phaser-intro.md){ .md-button .md-button--primary }

[Gestion des médias](./phaser/phaser-objects.md){ .md-button .md-button--primary }

## Devoir

* Complétez la portion assets dans votre document de conception en y insérant les URLs des assets choisis
  * Pour les personnages, assurez vous de pouvoir les animer en au moins 2 états (idle, marche)
* Créez l'installation de base de votre PS
