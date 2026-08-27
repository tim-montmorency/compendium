---
canonical: https://tim-montmorency.com/compendium/582-511-web5/css/grid/intro.html
---

# CSS Grid

Tout comme flexbox, la propriété `display: grid` (ou sa variante `display: inline-grid`) influence l'affichage des enfants d'un élément. Mais contrairement à flexbox, qui positionne ses items sur une seule dimension (x ou y), grid les positionne sur une grille en deux dimensions (x et y).

![Comparaison flexbox et CSS grid](https://tim-montmorency.com/compendium/582-511-web5/css/assets/flexbox-compared-css-grid.png)

> CSS Grid Layout est un système de mise en page bidimensionnel. Il permet de disposer les contenus en lignes et en colonnes, avec de nombreuses fonctionnalités pour construire des mises en page complexes.
>
> ![La trame est composée de rangées, colonnes et d'espace entre pistes](https://tim-montmorency.com/compendium/582-511-web5/css/assets/grid-col-row-gap.png)
> Source : [MDN Web Docs](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/CSS_layout/Grids)

## Comment ça fonctionne

1. Définir un élément conteneur comme une grille avec `display: grid`.
2. Y définir la taille des colonnes et des lignes avec `grid-template-columns` et `grid-template-rows`.
3. Placer les éléments enfants dans la grille avec `grid-column` et `grid-row`.

Comme dans le cas de flexbox, l'ordre source des éléments n'a pas d'importance : le CSS peut les placer dans n'importe quel ordre, ce qui facilite la réorganisation de la grille avec des requêtes média. Il est possible de définir la disposition complète d'une page, puis de la réorganiser entièrement pour une autre largeur d'écran avec seulement quelques lignes de CSS.

**Résumé en 100 secondes :** [https://www.youtube.com/embed/uuOXPWCh-6o](https://www.youtube.com/embed/uuOXPWCh-6o)

## Utiliser l'inspecteur

L'inspecteur est une aide précieuse pour manipuler des éléments en grid.

- Dans le *DOM Tree*, les éléments en `display: grid` ou `display: inline-grid` sont mis en évidence par un badge contenant le mot « grid ».
- Ce badge, une fois cliqué, met en surbrillance les divisions de la grille.
- Dans l'onglet *Layout*, il est possible d'afficher des informations supplémentaires : étendre les divisions pour les rendre plus visibles, afficher la taille des colonnes et rangées, etc.

## Conteneur : `grid-template-columns` et `grid-template-rows`

### `grid-template-columns`

Définit la taille de chaque colonne d'une grille. Le nombre de colonnes correspond au nombre de valeurs spécifiées. Par exemple, trois valeurs produisent trois colonnes.

<!-- CODEPEN: user=tim-momo slug=wvRexmm -->
See the Pen [Grid - grid-template-columns](https://codepen.io/tim-momo/pen/wvRexmm) by TIM Montmorency ([@tim-momo](https://codepen.io/tim-momo)) on [CodePen](https://codepen.io).

S'il y a plus d'éléments que de colonnes, une deuxième rangée est automatiquement créée pour accommoder tous les items. La première rangée est donc explicite, la deuxième implicite.

[En savoir plus sur grid-template-columns](https://developer.mozilla.org/fr/docs/Web/CSS/grid-template-columns)

### `grid-template-rows`

Définit la taille de chaque rangée d'une grille. Le nombre de rangées correspond au nombre de valeurs spécifiées.

<!-- CODEPEN: user=tim-momo slug=VwqWBdm -->
See the Pen [Grid - grid-template-rows](https://codepen.io/tim-momo/pen/VwqWBdm) by TIM Montmorency ([@tim-momo](https://codepen.io/tim-momo)) on [CodePen](https://codepen.io).

[En savoir plus sur grid-template-rows](https://developer.mozilla.org/fr/docs/Web/CSS/grid-template-rows)

## Espacement : `column-gap`, `row-gap` et `gap`

Ces propriétés définissent des espaces entre les cellules d'une grille et acceptent toutes les unités de base.

### `column-gap`

Définit l'espace entre les colonnes.

<!-- CODEPEN: user=tim-momo slug=eYbRjKw -->
See the Pen [Grid - column-gap](https://codepen.io/tim-momo/pen/eYbRjKw) by TIM Montmorency ([@tim-momo](https://codepen.io/tim-momo)) on [CodePen](https://codepen.io).

[En savoir plus sur column-gap](https://developer.mozilla.org/fr/docs/Web/CSS/column-gap)

### `row-gap`

Définit l'espace entre les rangées.

<!-- CODEPEN: user=tim-momo slug=mdawjjM -->
See the Pen [Grid - row-gap](https://codepen.io/tim-momo/pen/mdawjjM) by TIM Montmorency ([@tim-momo](https://codepen.io/tim-momo)) on [CodePen](https://codepen.io).

[En savoir plus sur row-gap](https://developer.mozilla.org/fr/docs/Web/CSS/row-gap)

### `gap`

Définit simultanément l'espace entre les colonnes et les rangées. Accepte aussi deux valeurs : la première pour les rangées, la deuxième pour les colonnes.

```css
gap: 10px 50px;
```

Génère un espace de 10px entre les rangées et de 50px entre les colonnes.

Pratiquement toutes les unités, sauf les `fr`, peuvent être utilisées pour les propriétés de type `gap`.

[En savoir plus sur gap](https://developer.mozilla.org/fr/docs/Web/CSS/gap)

## Unités spécifiques à `grid`

### Unité `fr`

L'unité `fr` (pour fraction) permet de distribuer l'espace disponible de façon relative entre chaque élément ayant une valeur de ce type.

```css
grid-template-columns: 1fr 1fr 1fr; /* trois colonnes identiques */
```

**Combinaison avec `gap` :** contrairement aux pourcentages, qui basent leurs calculs sur l'espace total du parent, les fractions se basent sur l'espace disponible. Elles s'utilisent donc mieux avec les propriétés de type `gap`.

<!-- CODEPEN: user=tim-momo slug=OJrgwdv -->
See the Pen [Grid - % vs fr gap](https://codepen.io/tim-momo/pen/OJrgwdv) by TIM Montmorency ([@tim-momo](https://codepen.io/tim-momo)) on [CodePen](https://codepen.io).

**Combinaison avec d'autres unités (`px`, `vw`, `vh`, etc.) :** quand une unité différente est ajoutée, les pourcentages continuent de se baser sur la dimension totale du parent, peu importe l'espace pris par cette unité. Les fractions, elles, se partagent l'espace disponible restant après que l'unité différente ait pris sa place. Résultat : combiner `%` avec une colonne fixe produit souvent un résultat indésirable, alors que `fr` s'ajuste harmonieusement.

<!-- CODEPEN: user=tim-momo slug=JjwJBVK -->
See the Pen [Grid - % vs fr avec px](https://codepen.io/tim-momo/pen/JjwJBVK) by TIM Montmorency ([@tim-momo](https://codepen.io/tim-momo)) on [CodePen](https://codepen.io).

[En savoir plus sur l'unité fr](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#lunit%C3%A9_fr)

### Unité `minmax()`

Définit une dimension minimale et maximale pour une cellule de grille. Particulièrement utile pour une mise en page responsive, en évitant que certains éléments se retrouvent trop coincés.

<!-- CODEPEN: user=tim-momo slug=MWMNbrb -->
See the Pen [Grid - minmax](https://codepen.io/tim-momo/pen/MWMNbrb) by TIM Montmorency ([@tim-momo](https://codepen.io/tim-momo)) on [CodePen](https://codepen.io).

[En savoir plus sur minmax()](https://developer.mozilla.org/fr/docs/Web/CSS/minmax)

### Unité `repeat()`

Spécifier individuellement chaque colonne ou rangée devient lassant quand une grille grossit, surtout si les valeurs sont identiques.

```css
/* Verbeux */
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

/* Raccourci avec repeat() */
grid-template-columns: repeat(6, 1fr);
```

**Avec `auto-fit` ou `auto-fill` :** pour une grille responsive sans écrire une multitude de requêtes média, ces valeurs remplacent le nombre spécifique de colonnes dans un `repeat()`.

```css
grid-template-columns: repeat(auto-fit, 150px);
```

Permet d'afficher autant d'éléments sur une rangée qu'il y a d'espace disponible.

Différence entre les deux : `auto-fit` n'ajoute aucune cellule vide supplémentaire dans la grille, même si l'espace le permet. `auto-fill` crée des cellules vides pour occuper l'espace. Dans la majorité des cas, le résultat est similaire, mais la nuance peut compter quand elle est combinée avec d'autres propriétés de grille.

![Illustration auto-fit vs auto-fill](https://tim-montmorency.com/compendium/582-511-web5/css/assets/grid-repeat-auto-fit-auto-fill.png)

**Combinaison avec d'autres unités :**

```css
grid-template-columns: repeat(3, minmax(150px, 1fr));
```

<!-- CODEPEN: user=tim-momo slug=RwEgYwx -->
See the Pen [Grid - repeat](https://codepen.io/tim-momo/pen/RwEgYwx) by TIM Montmorency ([@tim-momo](https://codepen.io/tim-momo)) on [CodePen](https://codepen.io).

[En savoir plus sur repeat()](https://developer.mozilla.org/fr/docs/Web/CSS/repeat)

## Placement des éléments enfants : `grid-column` et `grid-row`

Les propriétés suivantes s'appliquent aux éléments enfants de la grille, pour les positionner à l'intérieur de celle-ci.

### `grid-column`

Constituée de deux sous-propriétés, `grid-column-start` et `grid-column-end`, qui définissent où un élément devrait être affiché en fonction d'une ligne verticale de départ et de fin. Des chiffres négatifs permettent de compter à partir de la fin de la grille plutôt que de son début.

<!-- CODEPEN: user=tim-momo slug=ExGozXP -->
See the Pen [Grid - grid-column-start & grid-column-end](https://codepen.io/tim-momo/pen/ExGozXP) by TIM Montmorency ([@tim-momo](https://codepen.io/tim-momo)) on [CodePen](https://codepen.io).

Ces deux sous-propriétés peuvent être combinées avec `grid-column` :

```css
/* Équivalent à grid-column-start: 1; grid-column-end: 4; */
grid-column: 1 / 4;
```

<!-- CODEPEN: user=tim-momo slug=JjwMqyb -->
See the Pen [Grid - grid-column](https://codepen.io/tim-momo/pen/JjwMqyb) by TIM Montmorency ([@tim-momo](https://codepen.io/tim-momo)) on [CodePen](https://codepen.io).

[En savoir plus sur grid-column](https://developer.mozilla.org/fr/docs/Web/CSS/grid-column)

### `grid-row`

Constituée de `grid-row-start` et `grid-row-end`, qui définissent où un élément devrait être affiché en fonction d'une ligne horizontale de départ et de fin.

<!-- CODEPEN: user=tim-momo slug=OJrzYjw -->
See the Pen [Grid - grid-row-start & grid-row-end](https://codepen.io/tim-momo/pen/OJrzYjw) by TIM Montmorency ([@tim-momo](https://codepen.io/tim-momo)) on [CodePen](https://codepen.io).

Il est possible d'utiliser des nombres négatifs, mais uniquement avec les rows explicites.

Ces deux sous-propriétés peuvent être combinées avec `grid-row` :

```css
/* Équivalent à grid-row-start: 1; grid-row-end: 4; */
grid-row: 1 / 4;
```

<!-- CODEPEN: user=tim-momo slug=QWzaRaP -->
See the Pen [Grid - grid-row](https://codepen.io/tim-momo/pen/QWzaRaP) by TIM Montmorency ([@tim-momo](https://codepen.io/tim-momo)) on [CodePen](https://codepen.io).

[En savoir plus sur grid-row](https://developer.mozilla.org/fr/docs/Web/CSS/grid-row)

### Valeur `span`

Combinée à `grid-column` ou `grid-row`, la valeur `span` étend un élément sur plus d'une colonne ou rangée, sans avoir à connaître le numéro de ligne de début ou de fin.

```css
grid-column: span 2;
```

<!-- CODEPEN: user=tim-momo slug=gOZoJeK -->
See the Pen [Grid - Span](https://codepen.io/tim-momo/pen/gOZoJeK) by TIM Montmorency ([@tim-momo](https://codepen.io/tim-momo)) on [CodePen](https://codepen.io).

## `grid-area` et `grid-template-areas`

### `grid-area` : raccourci pour les 4 coins

`grid-area` définit en une seule déclaration `grid-row-start`, `grid-column-start`, `grid-row-end` et `grid-column-end` :

```css
/* Équivalent à grid-row-start: 1; grid-column-start: 2;
   grid-row-end: 3; grid-column-end: 4; */
.no1 {
  grid-area: 1 / 2 / 3 / 4;
}
```

<!-- CODEPEN: user=tim-momo slug=LYMeoJj -->
See the Pen [Grid - grid-area (4 coins)](https://codepen.io/tim-momo/pen/LYMeoJj) by TIM Montmorency ([@tim-momo](https://codepen.io/tim-momo)) on [CodePen](https://codepen.io).

[En savoir plus sur grid-area](https://developer.mozilla.org/fr/docs/Web/CSS/grid-area)

### `grid-template-areas` : nommer des zones

`grid-template-areas`, appliquée sur le conteneur, dessine la grille en nommant des zones directement dans le CSS. `grid-area`, appliquée ensuite sur les éléments enfants, attribue chacun à une zone nommée.

```css
.grid {
  display: grid;
  grid-template-areas:
    "menu content content content"
    "menu content content content"
    "footer footer footer footer";
}

.no1 { grid-area: menu; }
.no2 { grid-area: content; }
.no3 { grid-area: footer; }
```

Ici :

- La zone « menu » occupe la première colonne sur toute la hauteur, comme une barre latérale.
- La zone « content » remplit l'espace central (3 colonnes sur 2 rangées).
- La zone « footer » s'étend sur toute la largeur en bas.

<!-- CODEPEN: user=tim-momo slug=ExGozdN -->
See the Pen [Grid - grid-template-areas](https://codepen.io/tim-momo/pen/ExGozdN) by TIM Montmorency ([@tim-momo](https://codepen.io/tim-momo)) on [CodePen](https://codepen.io).

**Deux pièges syntaxiques :**

- Ne pas mettre de virgule entre chaque ligne.
- `grid-template-areas` prend toujours un `s` à la fin.

[En savoir plus sur grid-template-areas](https://developer.mozilla.org/fr/docs/Web/CSS/grid-template-areas)

## Pour aller plus loin

- [CSS Tricks, A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [MDN, les concepts de base des grilles CSS](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
