# `grid-area`

## Placement par les 4 coins

La propriété `grid-area` permet de définir en une seule déclaration :

- `grid-row-start`
- `grid-column-start`
- `grid-row-end` 
- `grid-column-end`

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

## Placer un élément dans une zone définie par `grid-template-areas`

`grid-template-areas` permet de *dessiner la grille en nommant des zones* directement dans le CSS sur la conteneur de la grille.
Ensuite, avec `grid-area` appliqué sur les éléments enfants, on place chaque élément dans la zone correspondante.

```css
.grid {
  display: grid;
  grid-template-areas: 
    "menu content content content"
    "menu content content content "
    "footer footer  footer footer";
}

.no1 { grid-area: menu; }
.no2 { grid-area: content; }
.no3 { grid-area: footer; }
```

👉 Ici :

- La zone *"menu"* occupe la première colonne sur toute la hauteur, comme un barre latérale.
- La zone *"content"* remplit l’espace central (3 colonnes sur 2 rangées).
- La zone *"footer"* s’étend sur toute la largeur en bas.

<p class="codepen" data-height="400" data-default-tab="result,css" data-slug-hash="ExGozdN" data-pen-title=" Grid - grid-template-area" data-user="tim-momo" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tim-momo/pen/ExGozdN">
   Grid - grid-template-area</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>



<br><br>
<a href="https://developer.mozilla.org/fr/docs/Web/CSS/grid-area" class="md-button "><img src="../../assets/mdn.svg" style="width: 15px; height: auto;">&nbsp;&nbsp;En savoir plus sur *grid-area*</a>

