# Nommer des zones dans une grille avec `grid-template-areas`

La propriété `grid-template-areas` permet de *nommer des zones dans une
grille*. Cette approche rend la disposition des éléments plus facile à
conceptualiser.

**Exemple :**

``` css
grid-template-areas:
  "menu contenu"
  "menu footer";
```

<br>
<br>

**Autre exemple :**

Si l'élément vert 🟢 représente un menu latéral, l'élément bleu 🔵 le contenu principal et l'élément rouge 🔴 un pied de page, il serait possible de les distribuer dans une grille grâce à `grid-area`:

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="ExGozdN" data-pen-title=" Grid - grid-template-area" data-user="tim-momo" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tim-momo/pen/ExGozdN">
   Grid - grid-template-area</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

<hr> 

!!! Warning 
    Ne pas mettre de virgule `,` entre chaque ligne.

!!! Alert
    `grid-template-areas` prend toujours un **s** à la fin.


<br>
<a href="https://developer.mozilla.org/fr/docs/Web/CSS/grid-template-areas" class="md-button "><img src="../../assets/mdn.svg" style="width: 15px; height: auto;">&nbsp;&nbsp;En savoir plus sur *grid-template-areas*</a>
