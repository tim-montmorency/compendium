# **CSS** Placement des éléments enfants `grid-column` et `grid-row`

Les propriétés CSS présentées dans cette page sont appliquées sur les *éléments-enfants de la grille*, afin de les positionner à l'intérieur
de celle-ci.


## `grid-column`

La propriété `grid-column` est constituée de deux sous-propriétés :

- `grid-column-start`
- `grid-column-end`

Ces propriétés permettent de définir *où un élément devrait être affiché en fonction d'une ligne
verticale ↕️ de départ et de fin dans la grille*.

!!! info
    Afin de bien comprendre et visualiser ces lignes, il est fortement suggéré d’utiliser l’inspecteur.

<hr> 

**Par exemple :**

<p class="codepen" data-height="400" data-default-tab="result" data-slug-hash="ExGozXP" data-pen-title="Grid - grid-column-start &amp;amp; grid-column-end" data-user="tim-momo" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tim-momo/pen/ExGozXP">
  Grid - grid-column-start &amp; grid-column-end</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>


!!! info
    Il est possible d'utiliser des *chiffres négatifs* afin de *compter à partir de la fin de la grille* plutôt que de son début.



<br>
<hr>

<br>

Ces propriétés peuvent être combinées en utilisant simplement `grid-column`.

**Exemple :**

``` css
grid-column-start: 1;
grid-column-end: 4;
```

Est équivalent à :

``` css
grid-column: 1 / 4;
```

<p class="codepen" data-height="400" data-default-tab="result" data-slug-hash="JjwMqyb" data-pen-title="Grid - grid-column" data-user="tim-momo" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tim-momo/pen/JjwMqyb">
  Grid - grid-column</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>


<br>
<a href="https://developer.mozilla.org/fr/docs/Web/CSS/grid-column" class="md-button "><img src="../../assets/mdn.svg" style="width: 15px; height: auto;">&nbsp;&nbsp;En savoir plus sur *grid-column*</a>
<br>

## `grid-row`

La propriété `grid-row` est constituée de deux sous-propriétés :

- `grid-row-start`
- `grid-row-end`

Ces propriétés permettent de définir *où un élément devrait être affiché en fonction d'une ligne horizontale ↔️ de départ et de fin dans la grille*.

Par exemple:
<p class="codepen" data-height="400" data-default-tab="result" data-slug-hash="OJrzYjw" data-pen-title="Grid - grid-row-start &amp;amp; grid-row-end" data-user="tim-momo" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tim-momo/pen/OJrzYjw">
  Grid - grid-row-start &amp; grid-row-end</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

!!! warning 
    Il est possible d'utiliser des nombres négatifs, mais uniquement avec les [rows explicites](./grid-template-cols-rows.html#grid-template-columns).



<hr>

Ces propriétés peuvent être combinées en utilisant simplement `grid-row`.

**Exemple :**

``` css
grid-row-start: 1;
grid-row-end: 4;
```

Est équivalent à :

``` css
grid-row: 1 / 4;
```


<p class="codepen" data-height="400" data-default-tab="result" data-slug-hash="QWzaRaP" data-pen-title="Grid - grid-row" data-user="tim-momo" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tim-momo/pen/QWzaRaP">
  Grid - grid-row</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

<br>
<a href="https://developer.mozilla.org/fr/docs/Web/CSS/grid-row" class="md-button "><img src="../../assets/mdn.svg" style="width: 15px; height: auto;">&nbsp;&nbsp;En savoir plus sur *grid-row*</a>
<br>



## Valeur `span` de `grid-column` ou `grid-row`

La valeur `span`, combinée aux propriétés `grid-column` & `grid-row`, permet *d'étendre un élément sur plus d'une colonne ou rangée* dans une grille *sans avoir à connaître le numéro de ligne de début ou de fin*.

**Par exemple, pour étendre l'élément 2 🔵, il est possible de faire:**

``` css
grid-column: span 2;
```

<p class="codepen" data-height="400" data-default-tab="result" data-slug-hash="gOZoJeK" data-pen-title="Grid - Span" data-user="tim-momo" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tim-momo/pen/gOZoJeK">
  Grid - Span</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

<br>
<a href="https://developer.mozilla.org/fr/docs/Web/CSS/grid-row" class="md-button "><img src="../../assets/mdn.svg" style="width: 15px; height: auto;">&nbsp;&nbsp;En savoir plus sur *grid-row*</a>
<br>


<script async src="https://public.codepenassets.com/embed/index.js"></script>
