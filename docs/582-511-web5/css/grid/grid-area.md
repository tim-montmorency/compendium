
## `grid-area`

La propriété `grid-area` permet de définir en une seule déclaration : -
`grid-row-start` - `grid-column-start` - `grid-row-end` -
`grid-column-end`

**Exemple :**

``` css
.no1 {
  grid-row-start: 1;
  grid-column-start: 2;
  grid-row-end: 3;
  grid-column-end: 4;
}
```

Est équivalent à :

``` css
.no1 {
  grid-area: 1 / 2 / 3 / 4;
}
```

<p class="codepen" data-height="400" data-default-tab="result" data-slug-hash="LYMeoJj" data-pen-title="Grid - grid-template-area" data-user="tim-momo" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tim-momo/pen/LYMeoJj">
  Grid - grid-template-area</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

<br>
<a href="https://developer.mozilla.org/fr/docs/Web/CSS/grid-area" class="md-button "><img src="../../assets/mdn.svg" style="width: 15px; height: auto;">&nbsp;&nbsp;En savoir plus sur *grid-area*</a>

