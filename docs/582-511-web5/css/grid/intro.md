
# CSS Grid - Intro

Tout comme [flexbox](https://tim-montmorency.com/timdoc/582-211/css/flexbox/), la propriété `display: grid;` ou sa variante `display: inline-grid;`, influence l'affichage de ses enfants. Cependant, contrairement à flexbox qui les positionne en fonction d'une seule dimension (x *ou* y), **grid** permet de les positionner sur une grille quadrillée en deux dimensions
(x *&* y).

![](../assets/flexbox-compared-css-grid.png)

> « CSS *Grid* Layout » (*Trames* avec les CSS) est donc un système de mise en page *bidimensionnel*. Il vous permet de disposer les contenus en *lignes* et en *colonnes*; il possède de nombreuses fonctionnalités simplifiant la construction de mises en page complexes.
>
> ![La trame  est composée de rangées, colonnes et d'espace entre pistes](../assets/grid-col-row-gap.png)
> <small>- Source: <cite>[MDN Web Docs](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/CSS_layout/Grids)</cite></small>

## Comment ça fontionne?

1. Vous devez définir un élément conteneur comme une grille avec `display: grid`.

2. Y définir la taille des colonnes et des lignes avec `grid-template-columns` et `grid-template-rows`.

3. Puis placer ses éléments enfants dans la grille avec `grid-column` et `grid-row`.

## Ordre des éléments

Comme dans le cas de flexbox, l'*ordre* source des éléments de la grille *n'a pas d'importance*. Votre CSS peut les placer dans n'importe quel ordre, ce qui facilite grandement la réorganisation de votre grille à l'aide de [requêtes média (@media queries)](https://tim-montmorency.com/timdoc/582-211/css/media-queries/). 

Imaginez que vous définissiez la disposition de votre page entière, puis que vous la réorganisiez complètement pour l'adapter à une largeur d'écran différente, le tout avec seulement quelques lignes de CSS. 

La grille est l'un des modules CSS les plus puissants jamais introduits.


## Résumé en 100 secondes

<iframe width="560" height="315" src="https://www.youtube.com/embed/uuOXPWCh-6o?si=4Bk94Pmk8nCEE0Yy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Autres références

[Référence : CSS Tricks: CSS Grid Layout Guide](https://css-tricks.com/snippets/css/complete-guide-grid/){ .md-button }


[MDN: Les concepts de base des grilles CSS](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout){ .md-button }

