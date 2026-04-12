# Composants adaptatifs intelligents

<!-- https://laconsole.dev/formations/css/container-queries -->

## Le problème des media queries

Avec les **media queries classiques**, on dit au composant comment se comporter selon la largeur totale de la *fenêtre du navigateur*. Ça fonctionne bien dans des cas simples — mais dès qu'on place le même composant dans des contextes différents, ça devient un cauchemar.

> ⚠️ **Le problème concret :** une carte `.card` affichée en pleine largeur doit être en format horizontal. La même carte placée dans une sidebar étroite doit être en format vertical. Avec les media queries, impossible de le savoir — le composant ne connaît pas son contexte.

Imaginez : vous créez un composant `.card` avec une media query qui dit *« à partir de 600px, passe en horizontal »*. Mais 600px, c'est 600px de *quoi* ? De l'écran ! Pas du conteneur. Donc si la carte est dans une colonne de 300px sur un grand écran, elle sera quand même en horizontal — et ça casse tout.

```css
/* ❌ Le problème : on se fie à la fenêtre, pas au conteneur */
@media (min-width: 600px) {
  .card {
    flex-direction: row; /* 600px de l'ÉCRAN... pas de la carte */
  }
}
```



## La solution : Container Queries

<!-- https://laconsole.dev/formations/css/container-queries -->

Les **container queries** (`@container`) permettent à un composant de s'adapter à la taille de son *propre conteneur parent*, pas à celle de l'écran. C'est exactement ce dont on a besoin pour créer des composants vraiment réutilisables.

### Syntaxe de base — deux étapes

1. **Déclarer le conteneur** — dire au parent « tu es un contexte de mesure ».
2. **Écrire la requête** sur l'enfant — « si mon conteneur fait X de large, alors... ».

```css
/* Étape 1 : déclarer le conteneur sur le PARENT */
.card-wrapper {
  container-type: inline-size;
  /* optionnel mais recommandé : nommer le conteneur */
  container-name: card;
}

/* Étape 2 : écrire la requête sur l'ENFANT */
@container card (min-width: 400px) {
  .card {
    flex-direction: row;
    gap: 1.5rem;
  }
  .card__image {
    width: 40%;
    flex-shrink: 0;
  }
}
```

> 💡 **`container-type: inline-size`** — le plus courant. On mesure seulement la largeur (l'axe inline). Il existe aussi `size` (largeur ET hauteur) et `normal` (pas de mesure, mais le nom est disponible pour du style conditionnel).

<!-- CODEPEN: Exemple interactif — Carte qui s'adapte à son conteneur -->

> 🔎 **À observer :** redimensionnez la fenêtre. La carte dans la colonne étroite reste verticale même sur grand écran. La carte en pleine largeur passe en horizontal. C'est parce que chaque carte répond à son *conteneur*, pas à l'écran.


### Nouvelles unités pour container queries

- `cqw` : 1% de la largeur du conteneur
- `cqh` : 1% de la hauteur du conteneur

<!-- https://laconsole.dev/formations/css/container-queries -->

## Media queries vs Container queries

Les deux ont leur utilité — ce ne sont pas des ennemis. La clé c'est de savoir **quand utiliser lequel**.

| | 📐 Media Queries | 📦 Container Queries |
|---|---|---|
| Se base sur | La **taille de l'écran** | La **taille du conteneur parent** |
| Idéal pour | Le **layout global** (sidebar, colonnes de page) | Les **composants placés partout** |
| Réutilisabilité | Moins flexible | Composants **vraiment indépendants** |
| Support | Universel | Tous navigateurs récents ✓ |
| Déclaration | Depuis le composant lui-même | Nécessite de déclarer le conteneur sur le parent |

### La règle de décision simple

Posez-vous la question : **est-ce que le changement de style concerne la mise en page globale de la page, ou le comportement d'un composant réutilisable ?**

```css
/* ✅ Media query → décisions de LAYOUT PAGE */
@media (min-width: 768px) {
  .page-layout {
    grid-template-columns: 280px 1fr; /* la sidebar apparaît */
  }
}

/* ✅ Container query → comportement d'un COMPOSANT */
@container (min-width: 350px) {
  .product-card {
    flex-direction: row; /* la carte se met en horizontal */
  }
}
```

<!-- CODEPEN: Comparaison côte à côte — Media query vs Container query -->



## Nommer ses conteneurs

Quand on a plusieurs conteneurs imbriqués, nommer ses conteneurs devient **essentiel pour la clarté**. Sans nom, `@container` cible le conteneur parent le plus proche. Avec un nom, on peut cibler n'importe quel ancêtre.

```css
/* Déclarer deux conteneurs différents */
.page {
  container-type: inline-size;
  container-name: page;
}

.sidebar {
  container-type: inline-size;
  container-name: sidebar;
}

/* Raccourci : container: nom / type */
.card-grid {
  container: card-grid / inline-size;
}

/* Cibler un conteneur nommé précis */
@container page (min-width: 900px) {
  .widget { columns: 2; }
}

@container sidebar (max-width: 250px) {
  .widget { font-size: 0.85rem; }
}
```

> 💡 **Bonne pratique :** même si vous n'avez qu'un seul conteneur, prenez l'habitude de le nommer. Ça documente l'intention, ça évite les surprises si vous ajoutez un conteneur parent plus tard, et ça rend le code beaucoup plus lisible.



## Architecture CSS pour composants adaptatifs

Une bonne architecture isole chaque composant dans son propre contexte. L'idée : **le composant ne sait pas où il va être placé** — il s'adapte simplement à l'espace disponible.

### Le pattern "wrapper conteneur"

On déclare le `container` sur un élément *wrapper* autour du composant, pas sur le composant lui-même. Pourquoi ? Parce qu'un élément ne peut pas se mesurer lui-même (ça créerait une dépendance circulaire).

```css
/* ────────────────────────────────────────────
   Pattern recommandé : wrapper + composant
   ──────────────────────────────────────────── */

/* 1. Le wrapper déclare le contexte */
.card-container {
  container: card / inline-size;
  /* le wrapper n'a pas de style visuel propre */
}

/* 2. Le composant définit ses styles de base (mobile-first) */
.card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: var(--surface);
  border-radius: var(--radius);
  padding: 1.25rem;
}

/* 3. Le composant s'adapte via @container */
@container card (min-width: 400px) {
  .card           { flex-direction: row; }
  .card__image    { width: 35%; flex-shrink: 0; }
}

@container card (min-width: 600px) {
  .card__title    { font-size: 1.5rem; }
  .card__excerpt  { display: block; } /* caché sur petit conteneur */
}
```

<!-- CODEPEN: Le même composant dans 3 contextes différents -->

### Les unités de conteneur

Tout comme les media queries ont leurs propres unités, les container queries introduisent des **unités relatives au conteneur** :

```css
@container (min-width: 300px) {
  .card__title {
    /* cqi = container query inline (= largeur du conteneur) */
    font-size: clamp(1rem, 5cqi, 2rem);

    /* cqb = container query block (= hauteur du conteneur) */
    /* cqw, cqh = largeur / hauteur du conteneur (%) */
    /* cqmin, cqmax = la plus petite / grande des deux dimensions */
  }
}
```

> 💡 **Analogie :** `cqi` est aux container queries ce que `vw` est aux media queries — mais relatif au conteneur plutôt qu'à la fenêtre.



## Cas d'usage réels

Les container queries ne servent pas qu'aux cartes. Voici des situations concrètes où ils font une vraie différence.

### Navigation qui se replie

```css
.nav-wrapper {
  container: nav / inline-size;
}

/* Par défaut : navigation hamburger */
.nav__links  { display: none; }
.nav__burger { display: block; }

/* Si l'en-tête est assez large : navigation complète */
@container nav (min-width: 500px) {
  .nav__links  { display: flex; }
  .nav__burger { display: none; }
}
```

### Grille qui s'auto-organise

```css
.grid-wrapper {
  container: grid / inline-size;
}

.auto-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@container grid (min-width: 400px) {
  .auto-grid { grid-template-columns: repeat(2, 1fr); }
}

@container grid (min-width: 700px) {
  .auto-grid { grid-template-columns: repeat(3, 1fr); }
}
```

<!-- CODEPEN: Atelier — Transformer un composant media-query en container-query -->



## Support navigateurs

Les container queries sont **supportées par tous les navigateurs modernes** depuis 2023. En 2026, vous pouvez les utiliser en production sans souci.

```css
/* Pas besoin de @supports pour la plupart des projets.
   Si vous devez quand même gérer d'anciens navigateurs : */
@supports (container-type: inline-size) {
  .card-wrapper {
    container-type: inline-size;
  }
  @container (min-width: 400px) {
    .card { flex-direction: row; }
  }
}

/* Fallback pour navigateurs non supportés */
.card {
  flex-direction: column; /* toujours vertical par défaut */
}
```

> ✅ Chrome 105+, Firefox 110+, Safari 16+ — tous supportent `@container`. En 2026, la couverture mondiale dépasse 95 %.



## Résumé

1. **Déclarez le conteneur sur le parent** avec `container: nom / inline-size`.
2. **Écrivez la requête sur l'enfant** avec `@container nom (min-width: Xpx) { ... }`.
3. **Styles de base = mobile-first**. Les container queries enrichissent, elles ne remplacent pas.
4. **Media queries pour le layout global**, container queries pour les composants réutilisables.
5. **Toujours nommer ses conteneurs** pour la lisibilité et la maintenabilité.