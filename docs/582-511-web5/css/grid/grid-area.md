
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