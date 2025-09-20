# Cours 5

[STOP]

## Système de grille CSS

![](./assets/images/the-grid.gif){.w-100}

En css, le [système de grille](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_grid_layout) permet d’organiser une page Web en lignes et colonnes, un peu comme un tableau invisible sur lequel on place des éléments.

Contrairement à Flexbox, qui aligne les éléments les uns après les autres dans un seul axe (horizontal OU vertical), Grid est pensé pour gérer les deux axes en même temps. Donc pas d'orientation en grid 😜.

[Guide css-tricks](https://css-tricks.com/snippets/css/complete-guide-grid/) (_[Cheatsheet](https://css-tricks.com/wp-content/uploads/2022/02/css-grid-poster.png)_)

### Quand l'utiliser ?

* Pour construire des layouts de page (header, nav, aside, main, footer).
* Pour des galeries d’images où les items doivent s’adapter automatiquement.
* Pour organiser du contenu sous forme de tableaux flexibles et responsives.

### Activer Grid

```html title="HTML"
<div class="grille">
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div>D</div>
  <div>E</div>
</div>
```

```css title="CSS"
.grille {
  display: grid;
}
```

<iframe height="300" style="width: 100%;" scrolling="no" title="Web Grid" src="https://codepen.io/tim-momo/embed/dPGyQzB?default-tab=result&editable=true&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/dPGyQzB">
  Web Grid</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Tous les enfants directs deviennent des items de la grille, mais pour que le comportement de grille se fasse voir, il faut spécifier les colonnes / lignes. Sinon on dirait de simple div normales.

### Colonnes et lignes

Les propriétés [`grid-template-columns`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns) et [`grid-template-rows`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows) sont la base pour créer un quadrillage précis.

#### `grid-template-columns`

Définit la largeur des colonnes de la grille.

```css
.grille {
  display: grid;
  grid-template-columns: 100px 1fr 100px;
}
```

Crée 3 colonnes :

* une fixe de 100px
* une fluide qui prend l’espace restant (1fr = 1 fraction)
* une fixe de 100px

<iframe height="300" style="width: 100%;" scrolling="no" title="Web Grid" src="https://codepen.io/tim-momo/embed/qEbBgbX?default-tab=result&editable=true&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/qEbBgbX">
  Web Grid</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

#### `grid-template-rows`

Définit la hauteur des rangées.

```css
.grille {
  display: grid;
  grid-template-rows: 100px auto 50px;
}
```

Crée 3 lignes :

* une de 100px
* une qui s’adapte au contenu (auto)
* une de 50px

<iframe height="300" style="width: 100%;" scrolling="no" title="Web Grid template columns" src="https://codepen.io/tim-momo/embed/qEbBgNX?default-tab=result&editable=true&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/qEbBgNX">
  Web Grid template columns</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

#### Raccourcis utiles

```css title="repeat()"
grid-template-columns: repeat(3, 1fr);
/* 
est identique à 
grid-template-columns: 1fr 1fr 1fr;
*/
```

<iframe height="300" style="width: 100%;" scrolling="no" title="Web Grid template rows" src="https://codepen.io/tim-momo/embed/PwZoVpV?default-tab=result&editable=true&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/PwZoVpV">
  Web Grid template rows</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

```css title="repeat + auto-fit = responsive !"
/* 
Chaque colonne doit avoir au moins 150px,
mais peut grandir jusqu’à occuper une fraction de l’espace dispo.
*/
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
```

<iframe height="300" style="width: 100%;" scrolling="no" title="Web Grid template columns repeat" src="https://codepen.io/tim-momo/embed/ogbNmWE?default-tab=result&editable=true&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/ogbNmWE">
  Web Grid template columns repeat</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Zones

![](./assets/images/grid-template-area.png){.w-50 data-zoom-image}

La propriété `grid-template-areas` donne un nom à des zones de la grille. Ça sert à être plus lisible et facile à maintenir.

```css
.grille {
  display: grid;
  grid-template-areas:
    "header header"
    "nav    main"
    "nav    aside"
    "footer footer";
  grid-template-columns: 200px 1fr;
  grid-template-rows: 80px 1fr 1fr 60px;
}
```

Puis on assigne chaque élément :

```css
header { grid-area: header; }
nav    { grid-area: nav; }
main   { grid-area: main; }
aside  { grid-area: aside; }
footer { grid-area: footer; }
```

### Espacements

![](./assets/images/row-column-gap.png){.w-50 data-zoom-image}

Propriétés :

* `column-gap` : espace entre les colonnes
* `row-gap` : espace entre les lignes
* `gap` : raccourci pour les deux

```css
.grille {
  gap: 20px;              /* colonnes ET rangées */
  column-gap: 10px;       /* juste colonnes */
  row-gap: 30px;          /* juste rangées */
}
```

### Alignement global du contenu

Les propriétés `justify-content` et `align-content` gèrent l’alignement de l’ensemble de la grille, pas des items individuellement.

#### `justify-content`

![](./assets/images/justify-content.png){.w-50 data-zoom-image}

Aligne la grille entière horizontalement dans le conteneur, si celui-ci est plus large que la somme des colonnes.

```css
.grille {
  justify-content: center;   /* centre la grille horizontalement */
}
```

#### `align-content`

![](./assets/images/align-content.png){.w-50 data-zoom-image}

Aligne la grille entière verticalement, si la hauteur du conteneur est plus grande que celle des lignes.

```css
.grille {
  align-content: space-between;
}
```

### Alignement des items dans les cellules

#### `align-items` / `justify-items`

<div class="grid" markdown>
<figure markdown>
![](./assets/images/align-items.png){data-zoom-image}
<figcaption>align-items</figcaption>
</figure>
<figure markdown>
![](./assets/images/justify-items.png){data-zoom-image}
<figcaption>justify-items</figcaption>
</figure>
</div>

Les propriétés `align-items` et `justify-items` contrôlent l’alignement par défaut des items dans leurs cellules.

```css
.grille {
  align-items: center;      /* vertical */
  justify-items: stretch;   /* horizontal */
}
```

Tous les enfants s’aligneront ainsi, sauf si un item définit ses propres règles.

#### `align-self` / `justify-self`

<div class="grid" markdown>
<figure markdown>
![](./assets/images/align-self.png){data-zoom-image}
<figcaption>align-self</figcaption>
</figure>
<figure markdown>
![](./assets/images/justify-self.png){data-zoom-image}
<figcaption>justify-self</figcaption>
</figure>
</div>

Permettent d’aligner un item individuel dans sa cellule.

```css
.item {
  align-self: end;         /* bas de la cellule */
  justify-self: center;    /* centré horizontalement */
}
```

### Placement manuel

Les propriétés de positionnement permettent de définir précisément où commence et finit un élément dans la grille.

#### `grid-row-start` / `grid-row-end`

Définissent sur quelle ligne horizontale un item commence et finit :

```css
.item {
  grid-row-start: 1;    /* commence à la 1ère ligne horizontale */
  grid-row-end: 3;      /* finit avant la 3e ligne horizontale */
  /* L'item occupe donc les rangées 1 et 2 */
}
```

##### `grid-column-start` / `grid-column-end`

Définissent sur quelle ligne verticale un item commence et finit :

```css
.item {
  grid-column-start: 2;  /* commence à la 2e ligne verticale */
  grid-column-end: 5;    /* finit avant la 5e ligne verticale */
  /* L'item occupe donc les colonnes 2, 3 et 4 */
}
```

#### Raccourcis `grid-column` / `grid-row`

![](./assets/images/grid-column.png){.w-50 data-zoom-image}

Les propriétés `grid-column` et `grid-row` permettent à un item d’occuper plusieurs cases de la grille.

```scss
.item {
  /* Raccourci pour grid-column-start: 2 et grid-column-end: 5 */
  grid-column: 2 / 5; 
    
  /* Raccourci pour grid-row-start: 1 et grid-row-end: 3 */
  grid-row: 1 / 3;    
}
```

Très utile pour créer des mises en page asymétriques (un bloc plus grand que les autres).

#### Raccourci des raccourcis `grid-area`

![](./assets/images/grid-area.png){.w-50 data-zoom-image}

`grid-area` combine toutes les propriétés de positionnement en une seule ligne :

```scss
.item {
  /* Équivalent à :
   * grid-row-start: 1
   * grid-column-start: 5  
   * grid-row-end: 4
   * grid-column-end: 6
   */
  grid-area: 1 / 5 / 4 / 6;
}
```

L'ordre des valeurs est : `row-start / column-start / row-end / column-end`
