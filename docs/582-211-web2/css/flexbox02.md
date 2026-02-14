# Flexbox: Maîtriser l'espace

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



## 🟡`flex-grow`: CAPACITÉ À GRANDIR

### Qu'est-ce que c'est ?

`flex-grow` définit **dans quelle proportion** un item peut **grandir** pour occuper l'espace restant disponible dans le conteneur.

C'est un **nombre sans unité** (ratio).

**Syntaxe :**

```css
.item {
  flex-grow: 0;  /* Ne grandit jamais (défaut) */
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
3. Total des flex-grow : 1 + 1 + 2 = 4 parts
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

`flex-shrink` définit **dans quelle proportion** un item peut **rétrécir** si l'espace disponible est insuffisant.

C'est aussi un **nombre sans unité** (ratio).

**Syntaxe :**

```css
.item {
  flex-shrink: 1;  /* Peut rétrécir (défaut) */
  flex-shrink: 0;  /* Ne rétrécit JAMAIS */
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




## 🟡`flex`: PROPRIÉTÉ RACCOURIE

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