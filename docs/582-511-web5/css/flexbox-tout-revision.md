---
canonical: https://tim-montmorency.com/compendium/582-211-web2/css/flexbox-tout.html
---

# Flexbox

## C'est quoi, Flexbox ?

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

## Conteneur et items

**Conteneur flex (parent)** : l'élément qui active flexbox et définit comment ses enfants se comportent.

```css
.conteneur {
  display: flex; /* Active Flexbox */
}
```

**Items flex (enfants)** : les éléments directs à l'intérieur du conteneur.

```html
<div class="conteneur">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

## Les deux axes

Flexbox fonctionne sur deux axes :

- **Axe principal (main axis)** : direction dans laquelle les items sont disposés.
- **Axe secondaire (cross axis)** : perpendiculaire à l'axe principal.

<!-- CODEPEN: user=tim-momo slug=zxBJLOX -->
See the Pen [DEMO - Flexbox](https://codepen.io/tim-momo/pen/zxBJLOX) by TIM Montmorency ([@tim-momo](https://codepen.io/tim-momo)) on [CodePen](https://codepen.io).

## Propriétés du conteneur (parent)

Les propriétés qui suivent s'appliquent au conteneur, la balise parente directe des items.

### `flex-direction` : direction du flux

Définit la direction de l'axe principal. Par défaut : `row` (horizontal).

```css
.conteneur {
  display: flex;
  flex-direction: row; /* gauche à droite (défaut) */
}
```

Valeurs : `row` (défaut), `row-reverse`, `column`, `column-reverse`.

```css
/* Navigation horizontale */
.nav { display: flex; flex-direction: row; }

/* Menu vertical */
.sidebar { display: flex; flex-direction: column; }
```

### `justify-content` : alignement sur l'axe principal

Distribue l'espace entre ou autour des items sur l'axe principal.

```css
.conteneur {
  display: flex;
  justify-content: center;
}
```

Valeurs : `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`.

<!-- CODEPEN: user=tim-momo slug=bNexQgv -->
See the Pen [DEMO - Flexbox justify-content](https://codepen.io/tim-momo/pen/bNexQgv) by TIM Montmorency ([@tim-momo](https://codepen.io/tim-momo)) on [CodePen](https://codepen.io).

### `align-items` : alignement sur l'axe secondaire

Aligne les items perpendiculairement à l'axe principal.

```css
.conteneur {
  display: flex;
  align-items: center;
}
```

Valeurs : `stretch` (défaut), `flex-start`, `flex-end`, `center`, `baseline`.

<!-- CODEPEN: user=tim-momo slug=vEKzQmx -->
See the Pen [DEMO - align-items](https://codepen.io/tim-momo/pen/vEKzQmx) by TIM Montmorency ([@tim-momo](https://codepen.io/tim-momo)) on [CodePen](https://codepen.io).

### `flex-wrap` : passage à la ligne

Permet aux items de passer à la ligne suivante si l'espace manque.

```css
.conteneur {
  display: flex;
  flex-wrap: nowrap; /* défaut, tout sur une ligne */
}
```

Valeurs : `nowrap` (défaut), `wrap`, `wrap-reverse`.

<!-- CODEPEN: user=tim-momo slug=JoKaeyY -->
See the Pen [DEMO - flex-wrap](https://codepen.io/tim-momo/pen/JoKaeyY) by TIM Montmorency ([@tim-momo](https://codepen.io/tim-momo)) on [CodePen](https://codepen.io).

### `gap` : espacement entre les items

Crée un espace uniforme entre tous les items, plus simple que `margin`.

```css
.conteneur {
  display: flex;
  gap: 16px; /* entre chaque item */
}

/* Gap différent horizontal vs vertical */
.conteneur {
  display: flex;
  gap: 20px 10px; /* 20px vertical, 10px horizontal */
}
```

#### Le piège : `gap` et les pourcentages

Quand on construit une grille de colonnes, le réflexe est de diviser l'espace en parts égales :

```css
.player-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.player-card {
  flex-basis: 50%; /* 2 colonnes, non ? */
}
```

Mais la deuxième carte tombe à la ligne. En Flexbox, `gap` crée de l'espace **entre** les éléments, mais cet espace est **retranché de la largeur disponible** du conteneur, pas ajouté par-dessus. Le navigateur :

1. Prend la largeur du conteneur (ex. : `900px`).
2. Soustrait le ou les gaps entre les éléments (ex. : `1.5rem` = `24px`).
3. Distribue ce qui reste.

`flex-basis: 50%` (ou `width: 50%`) est calculé sur la largeur **brute**, avant que le gap soit soustrait. Deux cartes à 50 % plus un gap dépassent donc 100 % :

```
|←————————————— 900px ——————————————→|
| carte 450px | gap 24px | carte 450px |  ← 924px total, débordement
```

**La solution : `calc()`.** On soustrait manuellement la part du gap qui revient à chaque item.

**2 colonnes** (1 gap réparti entre 2 cartes, chacune cède `gap / 2`) :

```css
.player-card {
  flex-basis: calc(50% - 0.75rem); /* 0.75rem = 1.5rem ÷ 2 */
}
```

```
|←————————————— 900px ——————————————→|
| carte 438px | gap 24px | carte 438px |  ← 900px exactement
```

**3 colonnes** (2 gaps répartis entre 3 cartes, chacune cède `(gap × 2) / 3`) :

```css
.player-card {
  flex-basis: calc(33.333% - 1rem); /* 1rem = (1.5rem × 2) ÷ 3 */
}
```

**Formule générale :**

```
flex-basis = (100% / nb-colonnes) - (gap × (nb-colonnes - 1) / nb-colonnes)
```

**Avec CSS Grid, ce problème n'existe pas.** L'unité `fr` calcule les fractions après avoir soustrait les gaps :

```css
.player-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;
}
```

|                           | Flexbox              | Grid         |
| ------------------------- | --------------------- | ------------ |
| Colonnes en %              | `calc()` nécessaire   | —            |
| Colonnes avec `fr`         | —                      | Automatique  |
| Layouts unidimensionnels   | Idéal                  | Possible     |
| Layouts bidimensionnels    | Limité                 | Idéal        |

## Propriétés des items (enfants)

Les propriétés vues plus haut s'appliquent au conteneur (le parent). Les trois suivantes, `flex-basis`, `flex-grow` et `flex-shrink`, s'appliquent aux items (les enfants) et gèrent individuellement leur taille et leur comportement.

### `flex-basis` : taille de départ

Définit la taille de base d'un item avant que l'espace restant soit distribué. C'est comme dire : « cet item devrait idéalement faire cette taille ».

```css
.item {
  flex-basis: 200px;  /* en pixels */
  flex-basis: 50%;    /* en pourcentage */
  flex-basis: auto;   /* taille naturelle, défaut */
}
```

Contrairement à `width`, qui est fixe et rigide, `flex-basis` reste flexible : l'item peut grandir ou rétrécir selon `flex-grow` et `flex-shrink`.

En `flex-direction: row`, `flex-basis` contrôle la largeur. En `column`, la hauteur.

<!-- CODEPEN: user=tim-momo slug=KwMYaoM -->
See the Pen [DEMO - flex-basis](https://codepen.io/tim-momo/pen/KwMYaoM) by TIM Montmorency ([@tim-momo](https://codepen.io/tim-momo)) on [CodePen](https://codepen.io).

### `flex-grow` : capacité à grandir

Définit dans quelle proportion un item peut grandir pour occuper l'espace restant. Nombre sans unité (ratio), défaut `0`.

```css
.item {
  flex-grow: 0;  /* défaut, ne grandit jamais */
  flex-grow: 1;  /* peut grandir */
  flex-grow: 2;  /* grandit 2× plus que ceux à flex-grow: 1 */
}
```

**Exemple** : conteneur de 1000px, 3 items à `flex-basis: 200px`, avec `flex-grow` de 1, 1 et 2.

1. Espace occupé par les flex-basis : 200 + 200 + 200 = 600px.
2. Espace restant : 1000 - 600 = 400px.
3. Total des flex-grow : 1 + 1 + 2 = 4 parts.
4. Résultat : item 1 et 2 à 300px chacun, item 3 à 400px.

**Cas d'usage courant, sidebar + contenu :**

```css
.sidebar {
  flex-basis: 250px;
  flex-grow: 0; /* reste à 250px */
}

.contenu {
  flex-basis: 0;
  flex-grow: 1; /* prend tout l'espace restant */
}
```

<!-- CODEPEN: user=tim-momo slug=KwMYaGg -->
See the Pen [DEMO - flex-grow](https://codepen.io/tim-momo/pen/KwMYaGg) by TIM Montmorency ([@tim-momo](https://codepen.io/tim-momo)) on [CodePen](https://codepen.io).

### `flex-shrink` : capacité à rétrécir

Définit dans quelle proportion un item peut rétrécir si l'espace manque. Nombre sans unité (ratio), défaut `1`.

```css
.item {
  flex-shrink: 1;  /* défaut, peut rétrécir */
  flex-shrink: 0;  /* ne rétrécit jamais */
  flex-shrink: 2;  /* rétrécit 2× plus que ceux à flex-shrink: 1 */
}
```

**Exemple** : conteneur de 800px, 3 items à `flex-basis: 400px`, `flex-shrink` de 1, 1 et 0.

1. Espace demandé : 1200px pour 800px disponibles, débordement de 400px.
2. Seuls les items 1 et 2 peuvent rétrécir (total 2 parts).
3. Résultat : item 1 et 2 à 200px chacun, item 3 reste à 400px.

**Cas d'usage courant, empêcher une sidebar de rétrécir :**

```css
.sidebar {
  flex-basis: 250px;
  flex-shrink: 0; /* reste toujours à 250px minimum */
}
```

<!-- CODEPEN: user=tim-momo slug=JoKVEeZ -->
See the Pen [DEMO - flex-shrink](https://codepen.io/tim-momo/pen/JoKVEeZ) by TIM Montmorency ([@tim-momo](https://codepen.io/tim-momo)) on [CodePen](https://codepen.io).

### `flex` : propriété raccourcie

```css
.item {
  flex: [flex-grow] [flex-shrink] [flex-basis];
}
```

Raccourcis les plus utiles :

- `flex: 1` équivaut à `flex: 1 1 0%` : grandit et rétrécit également avec les autres items.
- `flex: auto` équivaut à `flex: 1 1 auto` : flexible, mais part de sa taille naturelle.
- `flex: none` équivaut à `flex: 0 0 auto` : totalement inflexible.
- `flex: 0 0 200px` : taille fixe à 200px, jamais flexible.

### Tableau récapitulatif

| Propriété     | Défaut     | Description                  | Exemple typique     |
| ------------- | ---------- | ----------------------------- | -------------------- |
| `flex-grow`   | `0`        | Capacité à grandir (ratio)    | `flex-grow: 1`       |
| `flex-shrink` | `1`        | Capacité à rétrécir (ratio)   | `flex-shrink: 0`     |
| `flex-basis`  | `auto`     | Taille de départ              | `flex-basis: 250px`  |
| `flex`        | `0 1 auto` | Raccourci pour les 3          | `flex: 1`             |

### Deux pièges fréquents

**`width` et `flex-basis` en conflit :** quand les deux sont définis, `flex-basis` gagne. Autant s'en tenir à `flex-basis` seul.

**`flex: 1` ne veut pas dire `width: 100%` :** ça veut dire « je partage l'espace également avec mes frères », pas « je prends toute la largeur ».

## `order` : réorganiser sans toucher le HTML

La propriété `order` change l'ordre visuel des items flex sans modifier le HTML. Par défaut, tous les items ont `order: 0` et s'affichent dans l'ordre du HTML.

```css
.item {
  order: 0;  /* valeur par défaut */
  order: 1;  /* affiché après les items à order: 0 */
  order: -1; /* affiché avant les items à order: 0 */
}
```

Les valeurs peuvent être négatives et ne doivent pas être consécutives.

**Exemple** :

```css
.item-1 { order: 3; } /* s'affiche en dernier */
.item-2 { order: 1; } /* s'affiche en premier */
.item-3 { order: 2; } /* s'affiche au milieu */
```

**Cas d'usage, réorganiser selon la taille d'écran :**

```css
/* Mobile : menu en bas */
.logo { order: 1; }
.menu { order: 2; }

/* Desktop : menu en haut */
@media (min-width: 768px) {
  .logo { order: 2; }
  .menu { order: 1; }
}
```

**Cas d'usage, mettre en avant un item :**

```css
.carte.featured {
  order: -1;        /* toujours en premier */
  flex-basis: 100%; /* prend toute la largeur */
}
```

**Attention à l'accessibilité :** `order` change uniquement l'ordre visuel, pas l'ordre dans le DOM. La navigation au clavier, les lecteurs d'écran et la sélection de texte suivent l'ordre du HTML, pas l'ordre visuel. À réserver pour des ajustements mineurs ou du responsive.

<!-- CODEPEN: user=tim-momo slug=ByzEJQz -->
See the Pen [DEMO - order](https://codepen.io/tim-momo/pen/ByzEJQz) by TIM Montmorency ([@tim-momo](https://codepen.io/tim-momo)) on [CodePen](https://codepen.io).

## Pour aller plus loin

!!! note "Vous voulez apprendre en jouant ?"
    Cet exercice n'est pas requis pour le cours. Vous pouvez le faire par vous-même, mais il ne sera pas utilisé dans le cadre du cours.

    [Flexbox Zombies : apprendre CSS Flexbox en tuant des zombies](https://flexboxzombies.com/)

**Références :**

- [MDN, flex-basis](https://developer.mozilla.org/fr/docs/Web/CSS/flex-basis)
- [MDN, gap (Flexbox)](https://developer.mozilla.org/fr/docs/Web/CSS/gap)
- [MDN, calc()](https://developer.mozilla.org/fr/docs/Web/CSS/calc)
- [CSS Tricks, A Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
