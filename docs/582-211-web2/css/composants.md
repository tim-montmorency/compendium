# Composants réutilisables

<!--
https://www.landingfolio.com/library
https://www.hyperui.dev/
https://getbootstrap.com/docs/5.3/components/accordion/
https://tailwindcss.com/plus/ui-blocks
-->

## 📲Qu'est-ce qu'un composant réutilisable?

Un *composant réutilisable* est un bloc de code HTML + CSS qui :

- Peut être utilisé *plusieurs fois* dans un projet
- A un *style cohérent* et *prévisible*
- Est *facile à maintenir* (changer une fois = change partout)
- S'adapte à différents *contextes et contenus*

**Pensez-y comme des LEGO :** Vous créez des pièces standardisées que vous pouvez assembler de différentes façons.



## 📲Pourquoi créer des composants réutilisables?

### Avantages d'utiliser des composants réutilisables

1. *Cohérence visuelle* - Même look partout sur le site
2. *Productivité* - Codez une fois, utilisez partout
3. *Maintenabilité* - Un seul endroit à modifier
4. *Scalabilité* - Facile d'ajouter de nouvelles sections
5. *Travail d'équipe* - Tout le monde utilise les mêmes composants

### SANS composants réutilisables

❌ 

```css
/* Code dupliqué partout 😱 */
.carte-produit {
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.carte-article {
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.carte-utilisateur {
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

**Problème :** Si vous voulez changer le `border-radius`, vous devez modifier 3 endroits !

### AVEC composants réutilisables

✅ 

```css
/* Une seule définition 🎉 */
.carte {
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Variations spécifiques si nécessaire */
.carte--produit { /* styles spécifiques */ }
.carte--article { /* styles spécifiques */ }
```



## 📲Catégories de composants courantes et quelques exemples par type

<!--
https://www.landingfolio.com/library
https://www.hyperui.dev/
https://getbootstrap.com/docs/5.3/components/accordion/
https://tailwindcss.com/plus/ui-blocks
-->

### 1. Composants de navigation

- Barre de navigation (navbar)
- Menu déroulant (dropdown)
- Barre latérale (sidebar)
- Fil d'Ariane (breadcrumb)
- Pagination
- Menu de pied de page (footer)

### 2. Composants de contenu

- Cartes (cards)
- Listes de médias (media objects)
- Sections hero
- Article de blogue
- Titre de section (si plus que juste un `<h2>`)
- Grilles de galeries
- Tableau de données
- Bannière d'annonce (jumbotron)
- Graphiques de statistiques (stat cards)
- Carrousels (sliders)
- Liste de logos (logo grid ou logo cloud)


### 3. Composants d'interface

- Boutons
- Case à cocher
- Formulaires
- Boîte de dialogue (modales)
- Notifications/Alerts
- Badges
- Onglets
- Accordéons
- Barre de progression (progress bars)
- Infobulles (tooltips)
- Panier d'achat (cart)

### 4. Composants de mise en page

- Conteneurs
- Grilles de rangées et colonnes
- Espacements (spacers)



## 📲Principes de conception de composants

### 1. Un composant = Une responsabilité

**❌ Mauvais :**

```css
.carte-produit-avec-bouton-et-image-et-prix {
  /* Trop spécifique, pas réutilisable */
}
```

**✅ Bon :**
```css
.carte { /* Conteneur de base */ }
.carte__image { /* Image dans la carte */ }
.carte__titre { /* Titre dans la carte */ }
.carte__prix { /* Prix dans la carte */ }
.bouton { /* Bouton réutilisable partout */ }
```

---

### 2. Composants flexibles (pas rigides)

**❌ Mauvais :**

```css
.carte {
  width: 300px;  /* Taille fixe = pas flexible */
  height: 400px;
}
```

**✅ Bon :**

```css
.carte {
  width: 100%;  /* S'adapte à son conteneur */
  max-width: 400px;  /* Limite raisonnable */
}
```

---

### 3. Variantes avec modificateurs

**Structure BEM (Block Element Modifier) :**

```css
/* Block - Composant de base */
.carte { }

/* Element - Partie du composant */
.carte__titre { }
.carte__image { }

/* Modifier - Variante du composant */
.carte--large { }
.carte--sombre { }
```

**Exemple concret :**

```html
<!-- Carte normale -->
<div class="carte">
  <h3 class="carte__titre">Titre</h3>
</div>

<!-- Carte large -->
<div class="carte carte--large">
  <h3 class="carte__titre">Titre</h3>
</div>
```


## 📲Exemples de composants réutilisables avec Flexbox

### Composant 1 : Barre de navigation (Navbar)

#### Structure HTML

```html
<nav class="navbar">
  <div class="navbar__logo">
    <img src="logo.svg" alt="Logo">
  </div>
  
  <ul class="navbar__menu">
    <li><a href="#">Accueil</a></li>
    <li><a href="#">Produits</a></li>
    <li><a href="#">À propos</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
  
  <div class="navbar__actions">
    <button class="btn">Connexion</button>
  </div>
</nav>
```

#### CSS avec Flexbox

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar__logo img {
  height: 40px;
}

.navbar__menu {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar__menu a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s;
}

.navbar__menu a:hover {
  color: #007bff;
}

.navbar__actions {
  display: flex;
  gap: 1rem;
}
```

**Pourquoi c'est réutilisable :**

- Fonctionne avec n'importe quel nombre de liens
- S'adapte au contenu (logo peut être texte ou image)
- Facile d'ajouter des boutons dans `navbar__actions`

---

### Composant 2 : Fil d'Ariane (Breadcrumb)

#### Structure HTML

```html
<nav class="breadcrumb" aria-label="Fil d'Ariane">
  <a href="#" class="breadcrumb__item">Accueil</a>
  <span class="breadcrumb__separator">/</span>
  <a href="#" class="breadcrumb__item">Catégorie</a>
  <span class="breadcrumb__separator">/</span>
  <span class="breadcrumb__item breadcrumb__item--current">Page actuelle</span>
</nav>
```

#### CSS avec Flexbox

```css
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 0;
  font-size: 0.9rem;
}

.breadcrumb__item {
  color: #666;
  text-decoration: none;
  transition: color 0.3s;
}

.breadcrumb__item:hover {
  color: #007bff;
  text-decoration: underline;
}

.breadcrumb__item--current {
  color: #333;
  font-weight: 600;
  pointer-events: none;
}

.breadcrumb__separator {
  color: #999;
  user-select: none;
}
```

**Pourquoi c'est réutilisable :**

- Fonctionne avec n'importe quel nombre de niveaux
- Séparateur facilement modifiable (/, >, →)
- Facile à styler différemment selon le contexte

---

### Composant 3 : Liste de médias (Media Object)

#### Structure HTML

```html
<div class="media">
  <div class="media__image">
    <img src="avatar.jpg" alt="Utilisateur">
  </div>
  <div class="media__content">
    <h4 class="media__titre">Marie Tremblay</h4>
    <p class="media__texte">Intégratrice Web chez Montmorency</p>
  </div>
</div>
```

#### CSS avec Flexbox

```css
.media {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.media__image {
  flex: 0 0 60px;  /* Taille fixe pour l'image */
}

.media__image img {
  width: 100%;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
}

.media__content {
  flex: 1;  /* Prend tout l'espace restant */
}

.media__titre {
  margin: 0 0 0.25rem;
  font-size: 1rem;
  font-weight: 600;
}

.media__texte {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
}
```

**Variante : Image à droite**

```css
.media--reverse {
  flex-direction: row-reverse;
}
```

**Pourquoi c'est réutilisable :**

- Fonctionne pour avatars, produits, notifications
- Image peut être n'importe quelle taille
- Contenu s'adapte automatiquement

---

### Composant 4 : Section Hero

#### Structure HTML

```html
<section class="hero">
  <div class="hero__content">
    <h1 class="hero__titre">Bienvenue sur notre site</h1>
    <p class="hero__description">Découvrez nos produits incroyables</p>
    <div class="hero__actions">
      <button class="btn btn--primary">Commencer</button>
      <button class="btn btn--secondary">En savoir plus</button>
    </div>
  </div>
  <div class="hero__image">
    <img src="hero.jpg" alt="Hero">
  </div>
</section>
```

#### CSS avec Flexbox

```css
.hero {
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.hero__content {
  flex: 1;
}

.hero__titre {
  font-size: 3rem;
  margin: 0 0 1rem;
  line-height: 1.2;
}

.hero__description {
  font-size: 1.25rem;
  margin: 0 0 2rem;
  opacity: 0.9;
}

.hero__actions {
  display: flex;
  gap: 1rem;
}

.hero__image {
  flex: 0 0 500px;  /* Largeur fixe pour l'image */
}

.hero__image img {
  width: 100%;
  height: auto;
  border-radius: 12px;
}

/* Variante : Image à gauche */
.hero--reverse {
  flex-direction: row-reverse;
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    text-align: center;
  }
  
  .hero__image {
    flex-basis: auto;
    max-width: 100%;
  }
  
  .hero__actions {
    justify-content: center;
  }
}
```

**Pourquoi c'est réutilisable :**

- Fonctionne avec ou sans image
- Texte et boutons s'adaptent
- Facile de créer des variantes (reverse, centré, etc.)

---

### Composant 5 : Grille de prix (Pricing Cards)

#### Structure HTML

```html
<div class="pricing-grid">
  <div class="price-card">
    <h3 class="price-card__nom">Basique</h3>
    <div class="price-card__prix">
      <span class="price-card__montant">19$</span>
      <span class="price-card__periode">/mois</span>
    </div>
    <ul class="price-card__features">
      <li>✓ 10 projets</li>
      <li>✓ Support email</li>
      <li>✓ 5 GB stockage</li>
    </ul>
    <button class="price-card__btn btn">Choisir</button>
  </div>
  
  <!-- Répéter pour autres plans -->
</div>
```

#### CSS avec Flexbox

```css
.pricing-grid {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem;
}

.price-card {
  flex: 1 1 300px;  /* Base 300px, peut grandir/rétrécir */
  max-width: 400px;
  
  display: flex;
  flex-direction: column;  /* Flexbox interne aussi ! */
  
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.price-card:hover {
  transform: translateY(-8px);
}

.price-card__nom {
  font-size: 1.5rem;
  margin: 0 0 1rem;
  text-align: center;
}

.price-card__prix {
  text-align: center;
  margin-bottom: 2rem;
}

.price-card__montant {
  font-size: 3rem;
  font-weight: bold;
  color: #007bff;
}

.price-card__periode {
  color: #666;
  font-size: 1rem;
}

.price-card__features {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  flex: 1;  /* Prend l'espace restant */
}

.price-card__features li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

.price-card__btn {
  width: 100%;
  margin-top: auto;  /* Pousse le bouton en bas */
}

/* Variante : Plan en vedette */
.price-card--featured {
  border: 3px solid #007bff;
  transform: scale(1.05);
}
```

**Pourquoi c'est réutilisable :**

- Fonctionne avec n'importe quel nombre de cartes
- S'adapte à différentes quantités de features
- Bouton toujours en bas (grâce à `flex: 1` + `margin-top: auto`)



## 📲Bonnes pratiques pour les composants réutilisables

### 1. Nomenclature cohérente (BEM recommandé)

```css
.block { }              /* Composant de base */
.block__element { }     /* Partie du composant */
.block--modifier { }    /* Variante du composant */
```

### 2. Évitez les styles trop spécifiques

**❌ Mauvais :**

```css
.page .section .container .card .title {
  /* Trop spécifique, difficile à réutiliser */
}
```

**✅ Bon :**

```css
.card__title {
  /* Simple, réutilisable */
}
```

### 3. Utilisez des variables CSS pour la cohérence

```css
:root {
  --card-padding: 1.5rem;
  --card-radius: 8px;
  --card-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card {
  padding: var(--card-padding);
  border-radius: var(--card-radius);
  box-shadow: var(--card-shadow);
}
```

### 4. Pensez "mobile-first"

```css
/* Base : mobile */
.navbar {
  flex-direction: column;
}

/* Desktop : adaptation */
@media (min-width: 768px) {
  .navbar {
    flex-direction: row;
  }
}
```

### 5. Documentez vos composants

```css
/**
 * Navbar - Barre de navigation principale
 * 
 * Utilisation :
 * <nav class="navbar">
 *   <div class="navbar__logo">...</div>
 *   <ul class="navbar__menu">...</ul>
 * </nav>
 * 
 * Variantes :
 * .navbar--dark : Version sombre
 * .navbar--fixed : Position fixe en haut
 */
.navbar { }
```
---

## 📲Résumé

**Composants réutilisables :**

- Code une fois, utilise partout
- Facilite la maintenance
- Crée une cohérence visuelle
- Flexbox est parfait pour les créer

**Types de composants vus :**

1. Navbar (navigation principale)
2. Breadcrumb (fil d'Ariane)
3. Media Object (image + texte)
4. Hero Section (section d'accueil)
5. Pricing Cards (grille de prix)

**Bonnes pratiques :**

- Nomenclature cohérente (BEM)
- Variables CSS pour la cohérence
- Mobile-first
- Documentation