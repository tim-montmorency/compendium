# Flexbox

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



## Propriétés essentielles du **conteneur** (parent)

On utilise les propriétés qui suivent sur le conteneur (balise parent directe) des items à placer dans l'espace.

## 🟡 `display:flex` - Activation de flexbox


```css
.conteneur {
  display: flex; /* Active Flexbox */
}
```

## 🟡 `flex-direction` - Direction du flux



Définit la direction de l'axe principal.

Par défaut (si non spécifié) la direction de l'axe principal est horizontale (`row`).

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



## 🟡 `justify-content` - Alignement sur l'axe principal

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



## 🟡 `align-items` - Alignement sur l'axe secondaire

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





## 🟡 `gap` - Espacement entre les items

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


### Le `gap` doit être calculé dans la largeur des items

En Flexbox, le `gap` crée de l'espace entre les éléments, mais cet espace est soustrait de la largeur disponible du conteneur.

Résultat : si tu donnes `width: 50%` à tes items côte-à-côte avec un `gap` actif, les deux items ensemble dépassent 100% du conteneur.

La solution : soustraire la part du `gap` qui revient à chaque largeur d'item avec `calc()`.

```css
/* 
Exemple pour 2 colonnes avec gap: 1.5rem 
Le gap est partagé entre 2 items → chacune cède 0.75rem.
Utilisaton de la fonction css calc() pour calculer le résultat: 
*/
.container{
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
}
.item {
  width: calc(50% - 0.75rem);
}
```

[Flexbox, `gap` et `calc()` — gérer les colonnes en pourcentage](./flexbox-gap-calc.md){ .md-button }



## 🟡 `flex-wrap` - Passage à la ligne

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

# Flexbox: Maîtriser l'espace (grow, shrink, basis)

## Les propriétés `flex` : `flex-grow`, `flex-shrink`, `flex-basis`

### S'appliquent au balises *items* (*ENFANT*)

PARENT (conteneur): Jusqu'à présent, nous avons vu comment *positionner* (`justify-content`) et *aligner* (`align-items`) les items dans un conteneur flex. Jusqu'à présent, les propriétés qu'on a vues *s'appliquent à la balise **PARENT** (le conteneur)* des items qu'on souhaitent placer dans l'espace.

***

ENFANT (item): Maintenant, nous allons apprendre à contrôler comment les items *grandissent*, *rétrécissent* et *occupent l'espace* disponible. Contrairement au propriétés vues précédemments, ces nouvelles propriétés (`flex-basis`, `flex-grow` et `flex-shrink`) *sont appliquées aux balises **ENFANTS** (les items)* du conteneur Flexbox pour gérer individuellement leur *taille* et leur *comportement*.

Ces trois propriétés travaillent ensemble pour créer des layouts vraiment flexibles et adaptatifs.

## 🟡`flex-basis`: TAILLE DE DÉPART

### Qu'est-ce que c'est ?

`flex-basis` définit la *taille de base* d'un item *avant* que l'espace restant soit distribué.

C'est comme dire : "Cet item devrait idéalement faire cette taille".

**Syntaxe :**

```css
.item {
  flex-basis: 200px;  /* Taille de base en pixels */
  flex-basis: 50%;    /* Taille de base en pourcentage */
  flex-basis: auto;   /* Utilise la largeur/hauteur naturelle (défaut) */
}
```

### Différence avec `width` ?

- **`width`** : Taille fixe et rigide
- **`flex-basis`** : Taille de départ, mais flexible (peut grandir ou rétrécir selon les autres propriétés)

**Exemple :**

```css
.sidebar {
  flex-basis: 250px;  /* Taille idéale : 250px */
}

.contenu {
  flex-basis: 600px;  /* Taille idéale : 600px */
}
```

**Important :** 

- En `flex-direction: row`, `flex-basis` contrôle la *largeur*
- En `flex-direction: column`, `flex-basis` contrôle la *hauteur*


<p class="codepen" data-height="1500" data-theme-id="44168" data-default-tab="result" data-slug-hash="KwMYaoM" data-pen-title="DEMO - Flexbox flex-basis" data-user="tim-momo" style="height: 1500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
<span>See the Pen <a href="https://codepen.io/tim-momo/pen/KwMYaoM">
DEMO - Flexbox flex-basis</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
on <a href="https://codepen.io">CodePen</a>.</span>
</p>



### Le `gap` doit être calculé dans la largeur (flex-basis) des items

En Flexbox, le `gap` crée de l'espace entre les éléments, mais cet espace est soustrait de la largeur disponible du conteneur.

Résultat : si tu donnes `flex-basis: 50%` à tes items côte-à-côte avec un `gap` actif, les deux items ensemble dépassent 100% du conteneur.

La solution : soustraire la part du `gap` qui revient à chaque largeur d'item avec `calc()`.

```css
/* 
Exemple pour 2 colonnes avec gap: 1.5rem 
Le gap est partagé entre 2 items → chacune cède 0.75rem.
Utilisaton de la fonction css calc() pour calculer le flex-basis.
*/
.container{
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
}
.item {
  flex-basis: calc(50% - 0.75rem);
}
```

[Flexbox, `gap` et `calc()` — gérer les colonnes en pourcentage](./flexbox-gap-calc.md){ .md-button }


## 🟡`flex-grow`: CAPACITÉ À GRANDIR

### Qu'est-ce que c'est ?

`flex-grow` définit **dans quelle proportion** un item peut **grandir** pour occuper l'espace restant disponible dans le conteneur.

C'est un **nombre sans unité** (ratio).

- `0` = false (désactivé) **VALEUR PAR DÉFAUT**
- `1` = true (activé) et un ratio de 1x
- `2` = activé et un ratio de 2x
- `3` ...

**Syntaxe :**

```css
.item {
  flex-grow: 0;  /* (DÉFAUT) Ne grandit jamais */
  flex-grow: 1;  /* Peut grandir */
  flex-grow: 2;  /* Grandit 2× plus que ceux à flex-grow: 1 */
}
```

### Comment ça fonctionne ?

Imaginez un conteneur de 1000px avec 3 items :

- Item 1 : `flex-basis: 200px` + `flex-grow: 1`
- Item 2 : `flex-basis: 200px` + `flex-grow: 1`
- Item 3 : `flex-basis: 200px` + `flex-grow: 2`

**Calcul :**

1. Espace occupé par les flex-basis : 200 + 200 + 200 = 600px
2. Espace restant : 1000 - 600 = 400px
3. Total des `flex-grow` : 1 + 1 + 2 = 4 parties
4. Distribution :
   - Item 1 : 200px + (400px × 1/4) = 200 + 100 = **300px**
   - Item 2 : 200px + (400px × 1/4) = 200 + 100 = **300px**
   - Item 3 : 200px + (400px × 2/4) = 200 + 200 = **400px**

### Cas d'usage courants

**Layout 2 colonnes : sidebar + contenu principal**

```css
.sidebar {
  flex-basis: 250px;
  flex-grow: 0;  /* Ne grandit jamais, reste à 250px */
}

.contenu {
  flex-basis: 0;
  flex-grow: 1;  /* Prend tout l'espace restant */
}
```

**3 colonnes égales**

```css
.colonne {
  flex-grow: 1;  /* Chaque colonne grandit également */
}
```

<p class="codepen" data-height="1200" data-theme-id="44168" data-default-tab="result" data-slug-hash="KwMYaGg" data-pen-title="DEMO - Flexbox flex-grow" data-user="tim-momo" style="height: 1200px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
<span>See the Pen <a href="https://codepen.io/tim-momo/pen/KwMYaGg">
DEMO - Flexbox flex-grow</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
on <a href="https://codepen.io">CodePen</a>.</span>
</p>


## 🟡`flex-shrink`: CAPACITÉ À RÉTRÉCIR

### Qu'est-ce que c'est ?

`flex-shrink` définit *dans quelle proportion* un item peut *rétrécir* si l'espace disponible est insuffisant.

C'est aussi un **nombre sans unité** (ratio).

- `0` = false (rétrécissement désactivé)
- `1` = true (rétrécissement activé) et un ratio de 1x *VALEUR PAR DÉFAUT*
- `2` = rétrécissement activé et un ratio de 2x
- `3` ...

**Syntaxe :**

```css
.item {
  flex-shrink: 1;  /* (DÉFAUT) Peut rétrécir  */
  flex-shrink: 0;  /* Ne rétrécit jamais */
  flex-shrink: 2;  /* Rétrécit 2× plus que ceux à flex-shrink: 1 */
}
```

### Comment ça fonctionne ?

Imaginez un conteneur de 800px avec 3 items :

- Item 1 : `flex-basis: 400px` + `flex-shrink: 1`
- Item 2 : `flex-basis: 400px` + `flex-shrink: 1`
- Item 3 : `flex-basis: 400px` + `flex-shrink: 0`

**Calcul :**

1. Espace demandé : 400 + 400 + 400 = 1200px
2. Espace disponible : 800px
3. Débordement : 1200 - 800 = 400px (manque 400px)
4. Items qui peuvent rétrécir : Item 1 et Item 2 (total : 2 parts)
5. Distribution de la réduction :
   - Item 1 : 400px - (400px × 1/2) = 400 - 200 = **200px**
   - Item 2 : 400px - (400px × 1/2) = 400 - 200 = **200px**
   - Item 3 : 400px (ne rétrécit pas, garde sa taille) = **400px**

Total : 200 + 200 + 400 = 800px ✅

### Cas d'usage courants

**Empêcher une sidebar de rétrécir**

```css
.sidebar {
  flex-basis: 250px;
  flex-shrink: 0;  /* Reste toujours à 250px minimum */
}

.contenu {
  flex-basis: 600px;
  flex-shrink: 1;  /* Rétrécit si nécessaire */
}
```

**Protéger le contenu important**

```css
.logo {
  flex-basis: 150px;
  flex-shrink: 0;  /* Le logo ne rétrécit jamais */
}

.menu {
  flex-basis: auto;
  flex-shrink: 1;  /* Le menu peut rétrécir */
}
```


<p class="codepen" data-height="1350" data-theme-id="44168" data-default-tab="result" data-slug-hash="JoKVEeZ" data-pen-title="DEMO - Flexbox flex-shrink" data-user="tim-momo" style="height: 1350px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
<span>See the Pen <a href="https://codepen.io/tim-momo/pen/JoKVEeZ">
DEMO - Flexbox flex-shrink</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>




## 🟡`flex`: PROPRIÉTÉ RACCOURCIE

Au lieu d'écrire les trois propriétés séparément, on peut utiliser la propriété raccourcie **`flex`**.

**Syntaxe :**

```css
.item {
  flex: [flex-grow] [flex-shrink] [flex-basis];
}
```

### Exemples courants

**Valeur par défaut (si vous ne mettez rien)**

```css
.item {
  flex: 0 1 auto;
  /* = flex-grow: 0, flex-shrink: 1, flex-basis: auto */
  /* Ne grandit pas, peut rétrécir, taille naturelle */
}
```

**Item flexible qui prend tout l'espace**

```css
.item {
  flex: 1;
  /* = flex: 1 1 0% */
  /* = flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
  /* Grandit pour remplir l'espace, peut rétrécir */
}
```

**Item qui ne grandit ni ne rétrécit**

```css
.item {
  flex: 0 0 200px;
  /* = flex-grow: 0, flex-shrink: 0, flex-basis: 200px */
  /* Taille fixe à 200px, jamais flexible */
}
```

**Item qui grandit mais ne rétrécit pas**

```css
.item {
  flex: 1 0 auto;
  /* = flex-grow: 1, flex-shrink: 0, flex-basis: auto */
  /* Peut grandir, ne rétrécit jamais */
}
```

### Raccourcis pratiques

**`flex: 1`** - Le plus courant  
Équivaut à `flex: 1 1 0%`  
→ L'item grandit et rétrécit également avec les autres items

**`flex: auto`**  
Équivaut à `flex: 1 1 auto`  
→ L'item est flexible mais part de sa taille naturelle

**`flex: none`**  
Équivaut à `flex: 0 0 auto`  
→ L'item est totalement inflexible (ni grandit, ni rétrécit)



## Résumé, exemples et info complémentaire

### Exemples pratiques complets

**Exemple 1 : Layout classique (sidebar + contenu)**

```css
.conteneur {
  display: flex;
}

.sidebar {
  flex: 0 0 250px;
  /* Ne grandit pas, ne rétrécit pas, reste à 250px */
}

.contenu {
  flex: 1;
  /* Prend tout l'espace restant */
}
```

Résultat :

- Sidebar fixe à 250px
- Contenu prend tout le reste

---

**Exemple 2 : Cards flexibles dans une galerie**

```css
.galerie {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.carte {
  flex: 1 1 300px;
  /* Grandit si espace dispo, rétrécit si nécessaire, 
     base minimale de 300px */
}
```

Résultat :

- Les cartes ont au minimum 300px
- Elles grandissent pour remplir l'espace
- Elles passent à la ligne si moins de 300px disponible

---

**Exemple 3 : Navigation responsive**

```css
.nav {
  display: flex;
  gap: 1rem;
}

.logo {
  flex: 0 0 150px;
  /* Logo fixe à 150px */
}

.menu {
  flex: 1;
  /* Menu prend l'espace restant */
  display: flex;
  justify-content: flex-end;
}

.bouton-cta {
  flex: 0 0 auto;
  /* Bouton garde sa taille naturelle */
}
```

---

**Exemple 4 : Ratios personnalisés**

```css
.conteneur {
  display: flex;
}

.colonne-1 {
  flex: 1;  /* Prend 1 part */
}

.colonne-2 {
  flex: 2;  /* Prend 2 parts (2× plus large que colonne-1) */
}

.colonne-3 {
  flex: 1;  /* Prend 1 part */
}
```

Résultat :

- Total : 1 + 2 + 1 = 4 parts
- Colonne 1 : 25% de l'espace
- Colonne 2 : 50% de l'espace
- Colonne 3 : 25% de l'espace



### Tableau récapitulatif

| Propriété | Défaut | Description | Exemple typique |
|-----------|--------|-------------|-----------------|
| `flex-grow` | `0` | Capacité à grandir (ratio) | `flex-grow: 1` |
| `flex-shrink` | `1` | Capacité à rétrécir (ratio) | `flex-shrink: 0` |
| `flex-basis` | `auto` | Taille de départ | `flex-basis: 250px` |
| `flex` | `0 1 auto` | Raccourci pour les 3 | `flex: 1` |



### Pièges courants à éviter

**❌ Piège 1 : Oublier que flex-basis remplace width**

```css
/* ❌ Conflit possible */
.item {
  width: 300px;
  flex-basis: 200px;  /* flex-basis gagne */
}

/* ✅ Mieux */
.item {
  flex-basis: 200px;
}
```

**❌ Piège 2 : Ne pas comprendre flex: 1**

```css
/* Beaucoup pensent que flex: 1 = width: 100% */
/* FAUX ! */

.item {
  flex: 1;
  /* Signifie : "Je partage l'espace également avec mes frères" */
  /* Pas : "Je prends toute la largeur" */
}
```

**❌ Piège 3 : Oublier flex-shrink**

```css
/* ❌ Sans flex-shrink: 0, l'item peut rétrécir */
.sidebar {
  flex-basis: 250px;
  /* Peut quand même devenir plus petite que 250px ! */
}

/* ✅ Avec flex-shrink: 0 */
.sidebar {
  flex: 0 0 250px;
  /* Reste toujours à 250px */
}
```


### Bonnes pratiques

**✅ Utilisez la propriété raccourcie `flex`**

Plutôt que :

```css
.item {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0%;
}
```

Écrivez :

```css
.item {
  flex: 1;
}
```

**✅ Soyez explicite pour les tailles fixes**

Plutôt que :

```css
.sidebar {
  width: 250px;
}
```

Écrivez :

```css
.sidebar {
  flex: 0 0 250px;
  /* Clair : ne grandit pas, ne rétrécit pas */
}
```

**✅ Combinez avec min-width et max-width pour plus de contrôle**

```css
.item {
  flex: 1 1 200px;
  min-width: 150px;  /* Ne va jamais en dessous de 150px */
  max-width: 400px;  /* Ne va jamais au-dessus de 400px */
}
```

### Quand utiliser quoi ?

| Situation | Solution |
|-----------|----------|
| Sidebar fixe + contenu flexible | `sidebar: flex: 0 0 250px` + `contenu: flex: 1` |
| 3 colonnes égales | Toutes : `flex: 1` |
| Colonne 2× plus large | `colonne-1: flex: 1` + `colonne-2: flex : 2` |
| Élément qui garde sa taille | `flex: 0 0 auto` ou `flex: none` |
| Cartes responsive | `flex: 1 1 300px` + `flex-wrap: wrap` |
| Logo fixe + menu flexible | `logo: flex: 0 0 150px` + `menu: flex: 1` |


### Résumé visuel

```
flex: [grow] [shrink] [basis]
       ↓       ↓        ↓
    Grandir  Rétrécir  Taille de base

flex: 1        →  flexible, partage l'espace
flex: 0 0 250px →  fixe à 250px
flex: auto      →  flexible, part de sa taille naturelle
flex: none      →  inflexible, garde sa taille naturelle
```



### À retenir

1. **`flex-basis`** : Taille de départ (avant distribution)
2. **`flex-grow`** : Comment l'item grandit (ratio)
3. **`flex-shrink`** : Comment l'item rétrécit (ratio)
4. **`flex: 1`** : Le pattern le plus courant (flexible et partage l'espace)
5. **`flex: 0 0 [taille]`** : Pour les tailles fixes
6. Utilisez toujours la propriété raccourcie `flex` pour plus de clarté



# Propriété `order` (flexbox) 

> Réorganiser visuellement sans changer le HTML.

## Qu'est-ce que `order` ?

La propriété `order` permet de **changer l'ordre visuel** des items flex **sans modifier le HTML**.

Par défaut, tous les items ont `order: 0` et s'affichent dans l'ordre du HTML.

**Syntaxe :**

```css
.item {
  order: 0;  /* Valeur par défaut */
  order: 1;  /* Affiché après les items à order: 0 */
  order: -1; /* Affiché avant les items à order: 0 */
}
```

**Important :** Les valeurs peuvent être **négatives** et n'ont pas besoin d'être consécutives.



## Exemple de base

**HTML (ordre dans le code) :**
```html
<div class="conteneur">
  <div class="item item-1">Premier dans le HTML</div>
  <div class="item item-2">Deuxième dans le HTML</div>
  <div class="item item-3">Troisième dans le HTML</div>
</div>
```

**CSS (réorganisation visuelle) :**

```css
.conteneur {
  display: flex;
}

.item-1 {
  order: 3;  /* S'affiche en dernier */
}

.item-2 {
  order: 1;  /* S'affiche en premier */
}

.item-3 {
  order: 2;  /* S'affiche au milieu */
}
```

**Résultat visuel :**

```
[Deuxième] [Troisième] [Premier]
```



## Cas d'usage pratiques

### 1. Responsive : Réorganiser selon la taille d'écran

**Problème :** Sur mobile, vous voulez le menu en bas, mais sur desktop, vous le voulez en haut.
```css
/* Mobile : menu en bas */
.header {
  display: flex;
  flex-direction: column;
}

.logo {
  order: 1;  /* Logo en haut */
}

.menu {
  order: 2;  /* Menu en bas */
}

/* Desktop : menu en haut */
@media (min-width: 768px) {
  .header {
    flex-direction: row;
  }
  
  .logo {
    order: 2;  /* Logo à droite */
  }
  
  .menu {
    order: 1;  /* Menu à gauche */
  }
}
```

---

### 2. Mettre en avant un élément spécial

```css
.galerie {
  display: flex;
  flex-wrap: wrap;
}

.carte {
  order: 0;  /* Ordre normal */
}

.carte.featured {
  order: -1;  /* Toujours en premier */
  flex-basis: 100%;  /* Prend toute la largeur */
}
```

**Résultat :** La carte "featured" s'affiche toujours en premier, même si elle est au milieu du HTML.

---

### 3. Sidebar qui change de côté

```css
.layout {
  display: flex;
}

.sidebar {
  order: 1;  /* À gauche par défaut */
}

.contenu {
  order: 2;
}

/* Sidebar à droite sur certaines pages */
.layout.sidebar-right .sidebar {
  order: 3;  /* Déplace la sidebar après le contenu */
}
```

---

### ⚠️ Attention : Accessibilité

**IMPORTANT :** La propriété `order` change **uniquement l'ordre visuel**, pas l'ordre dans le DOM.

**Conséquences :**

- La navigation au clavier suit l'ordre du HTML (pas l'ordre visuel)
- Les lecteurs d'écran lisent dans l'ordre du HTML (pas l'ordre visuel)
- La sélection de texte suit l'ordre du HTML

**Bonne pratique :**

- Utilisez `order` pour des ajustements mineurs ou du responsive
- Pour des changements majeurs d'ordre, modifiez le HTML avec JavaScript si nécessaire
- Testez toujours la navigation au clavier



## Comparaison des valeurs

```css
/* Items avec différentes valeurs d'order */
.item-a { order: -2; }  /* 1er */
.item-b { order: -1; }  /* 2e */
.item-c { order: 0; }   /* 3e (défaut) */
.item-d { order: 0; }   /* 4e (même order = ordre HTML) */
.item-e { order: 1; }   /* 5e */
.item-f { order: 100; } /* 6e (dernier) */
```

**Ordre d'affichage :** A → B → C → D → E → F

**Règle :** Plus le nombre est petit, plus l'item apparaît tôt.


<p class="codepen" data-height="1300" data-theme-id="44168" data-default-tab="result" data-slug-hash="ByzEJQz" data-pen-title="Untitled" data-user="tim-momo" style="height: 1300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
<span>See the Pen <a href="https://codepen.io/tim-momo/pen/ByzEJQz">
Untitled</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>


## Résumé

**Propriété `order` :**

- Change l'ordre visuel sans modifier le HTML
- Valeurs négatives possibles
- Attention à l'accessibilité

# Flexbox, `gap` et `calc()`: gérer les colonnes en %

## Le problème

Quand tu construis une grille de colonnes avec Flexbox, l'instinct naturel est de diviser l'espace en parts égales :

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

Mais ça ne fonctionne pas comme prévu. La deuxième carte tombe à la ligne.

## Pourquoi ?

En Flexbox, le `gap` crée de l'espace **entre** les éléments, mais cet espace est **retranché de la largeur totale disponible** du conteneur. Le navigateur procède ainsi :

1. Il prend la largeur du conteneur (ex. : `900px`)
2. Il soustrait le(s) gap(s) entre les éléments (ex. : `1.5rem` = `24px`)
3. Il distribue ce qui reste entre les éléments

Le problème : `flex-basis: 50%` est calculé sur la largeur **brute** du conteneur, avant que les gaps soient soustraits. Donc deux cartes à 50% + un gap = plus de 100%. La deuxième carte n'a plus de place et passe à la ligne suivante.

```
|←————————————— 900px ——————————————→|
| carte 450px | gap 24px | carte 450px |  ← 924px total = débordement !
```

## La solution : `calc()`

On corrige en soustrayant manuellement la part du gap qui revient à chaque carte.

### 2 colonnes

Il y a **1 gap** à répartir entre **2 cartes** → chaque carte cède `gap / 2`.

```css
.player-card {
  flex-basis: calc(50% - 0.75rem); /* 0.75rem = 1.5rem ÷ 2 */
}
```

```
|←————————————— 900px ——————————————→|
| carte 438px | gap 24px | carte 438px |  ← 900px exactement ✓
```

### 3 colonnes

Il y a **2 gaps** à répartir entre **3 cartes** → chaque carte cède `(gap × 2) / 3`.

```css
.player-card {
  flex-basis: calc(33.333% - 1rem); /* 1rem = (1.5rem × 2) ÷ 3 */
}
```

### Formule générale

```
flex-basis = (100% / nb-colonnes) - (gap × (nb-colonnes - 1) / nb-colonnes)
```



## Comparaison avec CSS Grid

En **Grid**, ce problème n'existe pas. Quand tu utilises l'unité `fr`, le navigateur calcule les fractions *après* avoir soustrait les gaps :

```css
.player-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 3 colonnes égales, gap inclus automatiquement */
  gap: 1.5rem;
}
```

Pas besoin de `calc()` — Grid s'en occupe tout seul. C'est l'une des raisons pour lesquelles Grid est souvent plus pratique pour les mises en page en colonnes régulières.

| | Flexbox | Grid |
|---|---|---|
| Colonnes en % | `calc()` nécessaire | — |
| Colonnes avec `fr` | — | Automatique |
| Layouts unidimensionnels | ✓ Idéal | Possible |
| Layouts bidimensionnels | Limité | ✓ Idéal |



## À retenir

> En Flexbox, `gap` n'est pas "gratuit" quand tu travailles en pourcentages.
> Utilise `calc()` pour soustraire la part de gap qui revient à chaque élément.
> En Grid, `fr` gère ça automatiquement.



## Références

- [:simple-mdnwebdocs: MDN — flex-basis](https://developer.mozilla.org/fr/docs/Web/CSS/flex-basis)
- [:simple-mdnwebdocs: MDN — gap (Flexbox)](https://developer.mozilla.org/fr/docs/Web/CSS/gap)
- [:simple-mdnwebdocs: MDN — calc()](https://developer.mozilla.org/fr/docs/Web/CSS/calc)
- [CSS Tricks — A Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

