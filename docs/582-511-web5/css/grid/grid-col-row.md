# Placement des éléments enfants `grid-column` et `grid-row`

Les propriétés CSS présentées dans cette page sont appliquées sur les
**éléments-enfants de la grille**, afin de les positionner à l'intérieur
de celle-ci.

------------------------------------------------------------------------

## `grid-column`

La propriété `grid-column` est constituée de deux sous-propriétés :
`grid-column-start` et `grid-column-end`. Ces propriétés permettent de
définir **où un élément devrait être affiché en fonction d'une ligne
verticale ↕️ de départ et de fin dans la grille**.

Il est possible d'utiliser des chiffres négatifs afin de **compter à
partir de la fin de la grille** plutôt que de son début.

Ces propriétés peuvent être combinées en utilisant simplement
`grid-column`.

**Exemple :**

``` css
grid-column-start: 1;
grid-column-end: 4;
```

Est équivalent à :

``` css
grid-column: 1 / 4;
```

-   Démo : [Grid --- grid-column](https://codepen.io/tim-momo/pen/)\*

------------------------------------------------------------------------

## `grid-row`

La propriété `grid-row` est constituée de deux sous-propriétés :
`grid-row-start` et `grid-row-end`. Ces propriétés permettent de définir
**où un élément devrait être affiché en fonction d'une ligne horizontale
↔️ de départ et de fin dans la grille**.

Il est possible d'utiliser des nombres négatifs, mais uniquement avec
les **rows explicites**.

Ces propriétés peuvent être combinées en utilisant simplement
`grid-row`.

**Exemple :**

``` css
grid-row-start: 1;
grid-row-end: 4;
```

Est équivalent à :

``` css
grid-row: 1 / 4;
```

-   Démo : [Grid --- grid-row](https://codepen.io/tim-momo/pen/)\*

------------------------------------------------------------------------

## `span`

La valeur `span`, combinée aux propriétés `grid-column` & `grid-row`,
permet **d'étendre un élément sur plus d'une colonne ou rangée** dans
une grille **sans avoir à connaître le numéro de ligne de début ou de
fin**.

**Exemple :**

``` css
grid-column: span 2;
```

-   Démo : [Grid --- span](https://codepen.io/tim-momo/pen/)\*

------------------------------------------------------------------------

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

-   Démo : [Grid --- grid-area](https://codepen.io/tim-momo/pen/)\*

------------------------------------------------------------------------