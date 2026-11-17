# **CSS** Nommer des zones dans une grille avec `grid-template-areas`

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

`grid-template-areas` permet de *dessiner la grille en nommant des zones* directement dans le CSS sur la conteneur de la grille.

```css
.grid {
  display: grid;
  grid-template-areas: 
    "menu content content content"
    "menu content content content "
    "footer footer  footer footer";
}
```

Ensuite, `grid-area` appliqué sur les éléments enfants, permet d'attribuer celui-ci à une zone spécifique définie dans `grid-template-areas`.

```css
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


<hr> 

!!! Warning 
    Ne pas mettre de virgule `,` entre chaque ligne.

!!! Alert
    `grid-template-areas` prend toujours un **s** à la fin.


<br>
<a href="https://developer.mozilla.org/fr/docs/Web/CSS/grid-template-areas" class="md-button "><img src="../../assets/mdn.svg" style="width: 15px; height: auto;">&nbsp;&nbsp;En savoir plus sur *grid-template-areas*</a>
