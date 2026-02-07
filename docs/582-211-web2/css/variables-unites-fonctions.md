
# Variables, unités relatives & fonctions

## VARIABLES CSS ET DESIGN TOKENS

### Variable CSS

#### Qu'est-ce qu'une variable CSS ?

Les variables CSS (aussi appelées "custom properties") permettent de stocker des valeurs réutilisables dans votre code. Au lieu de répéter `#3B82F6` partout, vous définissez la valeur une fois et la réutilisez.

**Syntaxe de base :**

```css
/* Définition de la variable dans le :root  */
:root {
  --nom-de-la-variable: valeur;
}

/* Utilisation de la variable prédéfinie */
.element {
  propriete: var(--nom-de-la-variable);
}
```

**Exemple concret :**

```css
:root {
  --couleur-principale: #FF6B9D;
}

.bouton {
  background-color: var(--couleur-principale);
}

.titre {
  color: var(--couleur-principale);
}
```

#### Système de nomenclature des couleurs : Primary, Secondary et variations numériques

Quand on organise nos design tokens de couleurs, on suit généralement un système de nomenclature standardisé qui vient de frameworks comme Tailwind ou Bootstrap et des systèmes de design professionnels.

##### Les rôles de couleurs

**Primary (Principale)**  
La couleur dominante de votre interface, celle qui représente votre marque ou identité visuelle.

```css
--color-primary-500: #3B82F6; /* Bleu principal */
```
Utilisée pour : boutons principaux, liens, éléments importants qui attirent l'attention.

**Secondary (Secondaire)**  
Couleur complémentaire ou d'accentuation, utilisée en support de la couleur principale.

```css
--color-secondary-500: #8B5CF6; /* Violet secondaire */
```
Utilisée pour : boutons secondaires, badges, éléments moins prioritaires mais importants.

**Accent**  
Couleur d'accentuation pour attirer l'attention sur des éléments spécifiques.

```css
--color-accent-500: #F59E0B; /* Orange pour notifications */
```
Utilisée pour : notifications, alertes, call-to-action spéciaux.

**Neutral (Neutre)**  
Gamme de gris pour les textes, arrière-plans et bordures.

```css
--color-neutral-900: #111827; /* Texte principal très foncé */
--color-neutral-50: #F9FAFB;  /* Arrière-plan très pâle */
```
Utilisée pour : textes, arrière-plans, séparateurs, ombres.


##### Les variations numériques : Le système par centaines

Les chiffres (50, 100, 200... 900) représentent **l'intensité de la couleur**, du plus pâle au plus foncé.

**Échelle standard :**

- **50** = Très pâle, presque blanc (pour arrière-plans subtils)
- **100-200** = Pâle (pour survols, états désactivés)
- **300-400** = Moyen-pâle (pour bordures, textes secondaires)
- **500** = **COULEUR DE BASE** ← Votre couleur principale de référence
- **600-700** = Moyen-foncé (pour survols de boutons, états actifs)
- **800-900** = Très foncé (pour textes importants, contraste élevé)

**Exemple concret avec un bleu :**

```css
:root {
  --color-primary-50: #EFF6FF;   /* Presque blanc avec une touche de bleu */
  --color-primary-100: #DBEAFE;  /* Bleu très pâle */
  --color-primary-200: #BFDBFE;  /* Bleu pâle */
  --color-primary-300: #93C5FD;  /* Bleu moyen-pâle */
  --color-primary-400: #60A5FA;  /* Bleu moyen */
  --color-primary-500: #3B82F6;  /* BLEU DE BASE */
  --color-primary-600: #2563EB;  /* Bleu moyen-foncé */
  --color-primary-700: #1D4ED8;  /* Bleu foncé */
  --color-primary-800: #1E40AF;  /* Bleu très foncé */
  --color-primary-900: #1E3A8A;  /* Bleu presque noir */
}
```

**Visualisation :**
```
50  ░░░░░░░░░  (très pâle)
100 ░░░░░░░░
200 ▒▒▒▒▒▒▒▒
300 ▒▒▒▒▒▒▒▒
400 ▓▓▓▓▓▓▓▓
500 ████████  ← COULEUR DE BASE
600 ████████
700 ████████
800 ████████
900 ████████  (très foncé)
```


##### Comment les utiliser dans votre code
```css
.bouton-principal {
  background-color: var(--color-primary-500); /* État normal */
  color: white;
}

.bouton-principal:hover {
  background-color: var(--color-primary-600); /* Plus foncé au survol */
}

.bouton-principal:active {
  background-color: var(--color-primary-700); /* Encore plus foncé au clic */
}

.badge-info {
  background-color: var(--color-primary-100); /* Arrière-plan très pâle */
  color: var(--color-primary-800); /* Texte foncé pour le contraste */
  border: 1px solid var(--color-primary-300); /* Bordure moyenne */
}
```

**Astuce pro :** Des outils en ligne comme [Coolors](https://coolors.co) ou [Tailwind Shades Generator](https://www.tints.dev/) peuvent générer automatiquement ces variations pour vous à partir d'une couleur de base !

---

### Design Tokens : organiser vos variables comme un système

Un **design token** est une variable CSS qui représente une décision de design. Au lieu de nommer vos variables n'importe comment, vous créez un système cohérent.

**❌ Mauvaise approche (variables désorganisées) :**

```css
:root {
  --bleu: #3B82F6;
  --bleu2: #2563EB;
  --rose: #FF6B9D;
  --padding-card: 24px;
  --espace: 16px;
  --truc: 8px;
}
```

**✅ Bonne approche (design tokens organisés) :**

```css
:root {
  /* Couleurs - palette de base */
  --color-primary-400: #60A5FA;
  --color-primary-500: #3B82F6;
  --color-primary-600: #2563EB;
  
  --color-accent-500: #FF6B9D;
  
  --color-neutral-50: #F9FAFB;
  --color-neutral-900: #111827;
  
  /* Espacement - système cohérent */
  --space-1: 4px;
  --space-2: 8px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  
  /* Typographie */
  --font-size-sm: 14px;
  --font-size-base: 16px;
  --font-size-lg: 20px;
  --font-size-xl: 24px;
  
  /* Bordures */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
}
```

**Pourquoi c'est important ?**

- Cohérence visuelle dans tout le projet
- Facile à maintenir (changez une valeur, ça se propage partout)
- Nomenclature claire pour toute l'équipe
- Correspond aux styles/variables dans Figma



## UNITÉS RELATIVES ET FLEXIBLES

Les unités relatives s'adaptent au contexte, contrairement aux pixels (`px`) qui sont fixes.

#### `rem` - Relative à la racine (root)

`1rem` = taille de police définie sur l'élément `<html>` (généralement 16px par défaut dans les navigateurs)

```css
html {
  font-size: 16px; /* 1rem = 16px */
}

.titre {
  font-size: 2rem; /* = 32px */
  margin-bottom: 1.5rem; /* = 24px */
}
```

**Avantage :** Prévisible, idéal pour espacements et typographie. Si l'utilisateur change la taille de police dans son navigateur, tout s'ajuste.

### `em` - Relative au parent

`1em` = taille de police de l'élément parent
```css
.carte {
  font-size: 20px;
  padding: 1em; /* = 20px (car parent est 20px) */
}

.carte .texte {
  font-size: 0.8em; /* = 16px (0.8 × 20px) */
}
```

**Attention :** Peut devenir complexe avec imbrication. Préférez `rem` pour la plupart des cas.

### `%` - Pourcentage relatif au parent

Souvent utilisé pour les largeurs et hauteurs.

```css
.conteneur {
  width: 1200px;
}

.colonne {
  width: 50%; /* = 600px (50% de 1200px) */
}
```

### `vw` et `vh` - Viewport width/height

`1vw` = 1% de la largeur de la fenêtre  
`1vh` = 1% de la hauteur de la fenêtre
```css
.hero {
  height: 100vh; /* Prend toute la hauteur de l'écran */
  width: 100vw; /* Prend toute la largeur de l'écran */
}

.titre-hero {
  font-size: 5vw; /* S'adapte à la largeur de l'écran */
}
```

**Quand utiliser quoi ?**

- **`rem`** : Typographie, espacements, la plupart du temps
- **`em`** : Quand vous voulez que quelque chose s'adapte à son parent spécifique
- **`%`** : Largeurs de colonnes, éléments relatifs à leur conteneur
- **`vw/vh`** : Sections plein écran, typographie très responsive



## FONCTIONS CSS

#### `calc()` - Faire des calculs

Permet de combiner différentes unités et faire des opérations mathématiques.
```css
.conteneur {
  /* Largeur totale moins marges fixes */
  width: calc(100% - 40px);
  
  /* Combinaison d'unités */
  height: calc(100vh - 80px);
  
  /* Opérations complexes */
  padding: calc(var(--space-4) * 2); /* = 32px */
}
```

**Opérateurs disponibles :** `+`, `-`, `*`, `/`

**Important :** Les espaces autour de `+` et `-` sont obligatoires !
```css
width: calc(100% - 20px); /* ✅ Bon */
width: calc(100%-20px);    /* ❌ Ne fonctionnera pas */
```

#### `clamp()` - Valeur fluide avec limites

Définit une valeur qui s'adapte mais reste entre un minimum et un maximum.

**Syntaxe :**

```css
clamp(minimum, valeur-préférée, maximum)
```

**Exemples :**

```css
/* Typographie fluide */
.titre {
  /* Min 20px, idéal 5% de la largeur, max 48px */
  font-size: clamp(20px, 5vw, 48px);
}

/* Largeur de conteneur adaptative */
.conteneur {
  /* Min 320px, idéal 90%, max 1200px */
  width: clamp(320px, 90%, 1200px);
}

/* Espacement fluide */
.section {
  /* Min 16px, préféré 5% viewport, max 80px */
  padding: clamp(16px, 5vw, 80px);
}
```

**Pourquoi c'est génial ?** Crée des designs fluides sans media queries !

#### `min()` et `max()` - Choisir la plus petite/grande valeur
```css
/* Prend la PLUS PETITE valeur */
.element {
  width: min(500px, 100%); /* Max 500px, mais jamais plus que 100% */
}

/* Prend la PLUS GRANDE valeur */
.element {
  width: max(300px, 50%); /* Minimum 300px, même si 50% est plus petit */
}
```

## COMBINER tout ensemble

### Exemple complet

```css
:root {
  /* Design tokens */
  --color-primary: #8B5CF6;
  --color-bg: #F9FAFB;
  --color-text: #111827;
  
  --space-2: 8px;
  --space-4: 16px;
  --space-8: 32px;
  
  --font-size-base: 16px;
}

.carte {
  /* Unités relatives */
  padding: var(--space-4);
  margin-bottom: var(--space-8);
  
  /* Fonctions CSS */
  width: clamp(300px, 90%, 600px);
  font-size: clamp(14px, 2vw, var(--font-size-base));
  
  /* Calc avec design tokens */
  height: calc(100vh - var(--space-8) * 4);
  
  /* Variables pour couleurs */
  background-color: var(--color-bg);
  color: var(--color-text);
  border-left: 4px solid var(--color-primary);
}
```
