# Pseudo-classes et pseudo-éléments

## Qu'est-ce qu'une pseudo-classe ?

Une pseudo-classe est un mot-clé ajouté à un sélecteur qui cible un élément selon son **état** ou sa **position** dans le document : sans avoir à ajouter une classe dans le HTML.

```css
/* Cible le bouton quand la souris est dessus */
button:hover {
  background-color: blue;
}
```

La pseudo-classe commence toujours par **deux-points** (`:`).

## Qu'est-ce qu'un pseudo-élément ?

Un pseudo-élément cible une **partie précise** d'un élément, ou génère du contenu **avant ou après** lui : toujours sans toucher au HTML.

```css
/* Insère du contenu avant chaque paragraphe */
p::before {
  content: "→ ";
}
```

Le pseudo-élément commence toujours par **deux doubles-points** (`::`).



## Pseudo-classes d'état

Ces pseudo-classes réagissent aux **interactions de l'utilisateur** ou à l'**état d'un élément de formulaire**.

### `:hover`

Cible un élément quand le curseur est positionné dessus.

```css
.bouton:hover {
  background-color: #2d6a4f;
  color: white;
}
```

<br>

---


### `:active`

Cible un élément au moment précis où il est cliqué (entre le clic et le relâchement).

```css
.bouton:active {
  transform: scale(0.97);
}
```

<br>

---


### `:focus`

Cible un élément qui a reçu le focus : que ce soit au clic, au clavier, ou programmatiquement.

```css
input:focus {
  border-color: #2d6a4f;
  outline: 2px solid #2d6a4f;
}
```

<br>

---


### `:focus-visible` : La distinction importante

> ⚠️ **Un peu d'histoire**
>
> Pendant des années, les designers retiraient le contour de focus avec `outline: none` parce qu'il apparaissait au clic et « abîmait » le design. Problème : cela rendait la navigation au clavier invisible pour les personnes qui en dépendent (malvoyants, troubles moteurs, utilisateurs avancés).
>
> `:focus-visible` a été créé pour résoudre ce conflit : le contour apparaît **uniquement quand le focus vient du clavier**, pas du clic souris.

<br>

```css
/* ❌ À ne pas faire : retire le focus pour tout le monde */
button:focus {
  outline: none;
}

/* ✅ La bonne approche : retire l'outline au clic, le conserve au clavier */
button:focus {
  outline: none;
}

button:focus-visible {
  outline: 2px solid #2d6a4f;
  outline-offset: 3px;
}
```

<br>

<p class="codepen" data-theme-id="50210" data-height="600" data-pen-title="DEMO: Pseudo-classes: Focus-visible" data-version="2" data-default-tab="result" data-slug-hash="MYjRbZv" data-user="tim-momo" style="height: 600px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/editor/tim-momo/pen/019da868-23db-7cd6-94bf-6b51a408f74b">
  DEMO: Pseudo-classes: Focus-visible</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

<br>

---


### `:disabled`

Cible un élément de formulaire avec l'attribut `disabled`.

```css
button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
```

```html
<button disabled>Option indisponible</button>
```

<br>

---


### `:checked`

Cible une case à cocher ou un bouton radio **coché**.

```css
input[type="checkbox"]:checked {
  accent-color: #2d6a4f;
}
```

Très utile pour styler des **toggles personnalisés** sans JavaScript, en combinant `:checked` avec le combinateur `~` pour cibler des éléments frères :

```css
/* Quand la case est cochée, on change le fond du toggle */
input:checked ~ .toggle-fond {
  background-color: #2d6a4f;
}
```

<br>

<p class="codepen" data-theme-id="50210" data-height="800" data-pen-title="DEMO: pseudo-classes: checked" data-version="2" data-default-tab="result" data-slug-hash="wBzZoNM" data-user="tim-momo" style="height: 800px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/editor/tim-momo/pen/019da86b-ab5c-7923-85c3-c878d79491ed">
  DEMO: pseudo-classes: checked</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>


## Pseudo-classes structurelles

Ces pseudo-classes ciblent des éléments selon leur **position dans le DOM** : leur rang parmi leurs frères et sœurs.

### `:first-child` et `:last-child`

Cible le premier ou le dernier enfant d'un parent.

**Cas d'usage classique :** supprimer la bordure du dernier item d'une liste sans ajouter une classe dans le HTML.

```css
/* ❌ Avant : on ajoutait une classe dans le HTML */
<li class="dernier">Dernier item</li>

/* ✅ Maintenant : on cible directement en CSS */
li:last-child {
  border-bottom: none;
}
```

```css
/* Premier item mis en valeur */
li:first-child {
  font-weight: bold;
  color: #2d6a4f;
}
```

---

<br>

### `:nth-child()`

Cible des éléments selon une formule ou un mot-clé.

```css
/* Les éléments pairs */
li:nth-child(even) {
  background-color: #f5f4f0;
}

/* Les éléments impairs */
li:nth-child(odd) {
  background-color: white;
}

/* Exactement le 3e élément */
li:nth-child(3) {
  color: red;
}

/* Un élément sur trois à partir du premier */
li:nth-child(3n+1) {
  border-left: 3px solid #2d6a4f;
}
```


<br>

<p class="codepen" data-theme-id="50210" data-height="900" data-pen-title="DEMO: Pseudo-classes: nth-child" data-version="2" data-default-tab="result" data-slug-hash="XJjQNwE" data-user="tim-momo" style="height: 900px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/editor/tim-momo/pen/019da877-eae3-7358-aaa9-1b9eb118b14a">
  DEMO: Pseudo-classes: nth-child</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>


---

<br>

### `:not()`

Cible tous les éléments **sauf** ceux qui correspondent au sélecteur entre parenthèses.

```css
/* Tous les items sauf le premier */
li:not(:first-child) {
  padding-left: 2rem;
}

/* Tous les boutons sauf ceux désactivés */
button:not(:disabled):hover {
  background-color: #2d6a4f;
}

/* Tous les liens sauf ceux qui ont la classe .actif */
a:not(.actif) {
  color: #6b6b67;
}
```

**Avant `:not()` :**

```css
/* On ajoutait une règle d'exception */
li {
  padding-left: 2rem;
}
li.premier {
  padding-left: 1rem; /* exception manuelle */
}
```

**Avec `:not()` :**

```css
/* Propre, lisible, sans classe superflue */
li:not(:first-child) {
  padding-left: 2rem;
}
```



## Pseudo-éléments

Les pseudo-éléments génèrent du **contenu purement décoratif** à partir du CSS, sans polluer le HTML.

### `::before` et `::after`

Insèrent un élément **avant** ou **après** le contenu d'un élément.

**Règle d'or :** la propriété `content` est **obligatoire**. Elle peut être vide (`content: ""`), mais elle doit être présente.

```css
.element::before {
  content: ""; /* obligatoire, même si vide */
}
```

**Cas d'usage 1 : Décoration sans HTML**

```css
/* Guillemets autour d'une citation */
blockquote::before {
  content: "«\00a0"; /* \00a0 = espace insécable */
}

blockquote::after {
  content: "\00a0»";
}
```

**Cas d'usage 2 : Badge ou indicateur**

```css
/* Badge "Nouveau" positionné sur une carte */
.carte--nouvelle::before {
  content: "Nouveau";
  position: absolute;
  top: -10px;
  left: 12px;
  background: #d8f3dc;
  color: #2d6a4f;
  padding: 2px 8px;
  border-radius: 99px;
  font-size: 0.75rem;
}

/* La carte doit être en position relative */
.carte--nouvelle {
  position: relative;
}
```

<br>

**Cas d'usage 3 : Flèche décorative animée**

```css
/* Flèche qui se déplace au survol */
.lien::after {
  content: " →";
  display: inline-block;
  transition: transform 0.2s;
}

.lien:hover::after {
  transform: translateX(4px);
}
```

<br>

> ℹ️ **Contenu informatif vs décoratif**
>
> Le contenu généré par `::before` et `::after` **n'est pas lu** par les lecteurs d'écran (dans la majorité des navigateurs). C'est pourquoi on les réserve aux éléments purement décoratifs. Si l'information est importante, elle doit être dans le HTML.


<br>


<p class="codepen" data-theme-id="50210" data-height="1000" data-pen-title="DEMO: Pseudo-elements: ::before ::after" data-version="2" data-default-tab="result" data-slug-hash="xbEeRNa" data-user="tim-momo" style="height: 1000px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/editor/tim-momo/pen/019da878-7631-7b4e-a82f-9a24f5513807">
  DEMO: Pseudo-elements: ::before ::after</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>



## Combiner les pseudo-classes et pseudo-éléments

La vraie puissance vient de leur **combinaison**. On peut empiler plusieurs pseudo-classes, ou combiner une pseudo-classe avec un pseudo-élément.

```css
/* ::after seulement au survol */
.carte:hover::after {
  transform: translateX(4px);
}

/* ::before seulement sur le premier enfant */
li:first-child::before {
  content: "";
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #2d6a4f;
}

/* :not() combiné avec :hover */
.nav a:not(.actif):hover {
  text-decoration: underline;
}
```



## Résumé : Quoi utiliser quand ?

| Besoin | Sélecteur |
|---|---|
| Réagir au survol | `:hover` |
| Réagir au clic | `:active` |
| Focus clavier (accessible) | `:focus-visible` |
| Élément désactivé | `:disabled` |
| Case cochée | `:checked` |
| Premier / dernier enfant | `:first-child` / `:last-child` |
| Rangées alternées | `:nth-child(even)` |
| Tous sauf un | `:not()` |
| Décoration avant/après | `::before` / `::after` |

