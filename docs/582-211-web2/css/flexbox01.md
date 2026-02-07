# Introduction à Flexbox

## Qu'est-ce que Flexbox ?

Flexbox (Flexible Box Layout) est un système de mise en page CSS qui permet d'aligner et de distribuer des éléments dans un conteneur, même quand leurs dimensions sont inconnues ou dynamiques.

**Avant Flexbox (la galère) :**

```css
/* Centrer quelque chose = cauchemar */
.element {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

**Avec Flexbox (facile) :**
```css
.conteneur {
  display: flex;
  justify-content: center;
  align-items: center;
}
```


## Le modèle Flexbox : conteneur et items

### Conteneur flex (parent)

L'élément qui contient les items et définit comment ils se comportent.

```css
.conteneur {
  display: flex; /* Active Flexbox */
}
```

### Items flex (enfants)

Les éléments directs à l'intérieur du conteneur flex.

```html
<div class="conteneur">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```



## Les axes : principal et secondaire

Flexbox fonctionne sur **deux axes** :

- *Axe principal (main axis)* : Direction dans laquelle les items sont disposés.
- *Axe secondaire (cross axis)* : Perpendiculaire à l'axe principal.

<p class="codepen" data-height="880" data-theme-id="44168" data-default-tab="result" data-slug-hash="zxBJLOX" data-pen-title="DEMO - Flexbox" data-user="tim-momo" style="height: 880px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
      <span>See the Pen <a href="https://codepen.io/tim-momo/pen/zxBJLOX">
  DEMO - Flexbox</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>



## Propriétés essentielles du conteneur

### `flex-direction` - Direction du flux

Définit la direction de l'axe principal.

```css
.conteneur {
  display: flex;
  flex-direction: row; /* ← gauche à droite (défaut) */
}
```

**Valeurs possibles :**

- `row` : horizontal, gauche → droite (défaut)
- `row-reverse` : horizontal, droite → gauche
- `column` : vertical, haut → bas
- `column-reverse` : vertical, bas → haut

```css
/* Navigation horizontale */
.nav {
  display: flex;
  flex-direction: row;
}

/* Menu vertical */
.sidebar {
  display: flex;
  flex-direction: column;
}
```

---

### `justify-content` - Alignement sur l'axe principal

Distribue l'espace entre/autour des items sur l'axe principal.

```css
.conteneur {
  display: flex;
  justify-content: center;
}
```

**Valeurs principales :**

- `justify-content: flex-start;`
- `justify-content: flex-end;`
- `justify-content: center;`
- `justify-content: space-between;`
- `justify-content: space-around;`
- `justify-content: space-evenly;`




<p class="codepen" data-height="800" data-theme-id="44168" data-default-tab="result" data-slug-hash="bNexQgv" data-pen-title="DEMO - Flexbox justify-content" data-user="tim-momo" style="height: 800px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
<span>See the Pen <a href="https://codepen.io/tim-momo/pen/bNexQgv">
DEMO - Flexbox justify-content</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
on <a href="https://codepen.io">CodePen</a>.</span>
</p>


---

### `align-items` - Alignement sur l'axe secondaire

Aligne les items perpendiculairement à l'axe principal.

```css
.conteneur {
  display: flex;
  align-items: center;
}
```

**Valeurs principales :**

- `align-items: stretch`
- `align-items: flex-start;`
- `align-items: flex-end;`
- `align-items: center;`
- `align-items: baseline;`


<p class="codepen" data-height="800" data-theme-id="44168" data-default-tab="result" data-slug-hash="vEKzQmx" data-pen-title="DEMO - Flexbox justify-content" data-user="tim-momo" style="height: 800px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tim-momo/pen/vEKzQmx">
DEMO - Flexbox justify-content</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
on <a href="https://codepen.io">CodePen</a>.</span>
  </p>



---

### `gap` - Espacement entre les items

Crée un espace uniforme entre tous les items (plus simple que `margin`).

```css
.conteneur {
  display: flex;
  gap: 16px; /* 16px entre chaque item */
}

/* Gap différent horizontal vs vertical */
.conteneur {
  display: flex;
  gap: 20px 10px; /* 20px vertical, 10px horizontal */
}
```

**Avant `gap` (la galère) :**
```css
.item {
  margin-right: 16px;
}
.item:last-child {
  margin-right: 0; /* Enlever marge du dernier */
}
```

**Avec `gap` (facile) :**
```css
.conteneur {
  display: flex;
  gap: 16px;
}
```

---

### `flex-wrap` - Passage à la ligne

Permet aux items de passer à la ligne suivante si l'espace manque.
```css
.conteneur {
  display: flex;
  flex-wrap: nowrap; /* défaut - tout sur une ligne */
}
```

**Valeurs :**

- `nowrap` : Tous les items sur une seule ligne (défaut)
- `wrap` : Les items passent à la ligne si nécessaire
- `wrap-reverse` : Comme wrap, mais en sens inverse


<p class="codepen" data-height="880" data-theme-id="44168" data-default-tab="result" data-slug-hash="JoKaeyY" data-pen-title="DEMO - Flexbox align-items" data-user="tim-momo" style="height: 880px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
<span>See the Pen <a href="https://codepen.io/tim-momo/pen/JoKaeyY">
DEMO - Flexbox align-items</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
on <a href="https://codepen.io">CodePen</a>.</span>
</p>

<script async src="https://public.codepenassets.com/embed/index.js"></script>




## Exemple pratique complet

```css
/* Navigation horizontale classique */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  padding: 16px;
}

/* Galerie de cartes responsive */
.galerie {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

/* Centrer parfaitement un élément */
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* Layout vertical (sidebar) */
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
```


## Vous voulez apprendre en jouant?

!!! warning "À propos de Flexbox Zombies"
    Notez que cet exercice n'est pas requis pour le cours Web2. 
    Vous pouvez le faire par vous même mais il ne sera pas utilisé dans le cadre de ce cours.

[Flexbox Zombies: pour apprendre CSS Flexbox en tuant des zombies !](https://flexboxzombies.com/)
