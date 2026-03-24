# Le responsive: medias queries et breakpoints

[👩‍🏫 Exposé reponsive: Télécharger le PPT :material-download:](../assets/cours08-responsive-mediaqueries.pdf){ .md-button }


## Responsive

### Définition qu'est-ce que le *responsive* 

Un design responsive *adapte la mise en page* à la *contrainte d'affichage* courante, peu importe l'appareil.

## Breakpoint (point de rupture)

Un breakpoint = là où ton contenu souffre (casse).

```
┌─────────────────────┐        ┌──────────┐
│  ● ● ●              │        │  ● ● ●   │
│  ┌───┐ ┌───┐ ┌───┐  │        │ ┌─┐┌─┐┌─┐│
│  │   │ │   │ │   │  │        │ │ ││ ││ ││
│  │   │ │   │ │   │  │  →→→   │ │ ││ ││ ││
│  │   │ │   │ │   │  │        │ │ ││ ││ ││
│  └───┘ └───┘ └───┘  │        │ └─┘└─┘└─┘│
└─────────────────────┘        └──────────┘
   ✓ Confortable                ✗ Souffrance ← ici le breakpoint
```

> Règle : Ajoute un breakpoint quand ton contenu te le demande — jamais en ciblant un appareil.

### Éviter les breakpoints arbitraires

- [Éviter les breakpoints arbitraires](./breakpoints-arbitraires.md)


## Media query (requête média)


### La syntaxe d'une media query

```css
@media (min-width: 768px) {
  .conteneur {
    flex-direction: row;
  }
}
```

- **`@media`** → Mot-clé — démarre la règle conditionnelle
- **`(min-width: 768px)`** → Condition — s'applique SI la fenêtre est ≥ 768px
- **`{ ... }`** → Règles CSS qui s'appliquent seulement si la condition est vraie


## Mobile-first vs desktop-first

### Mobile-first

Partir du *minimum essentiel* et ajouter de la complexité au fur et à mesure que l'espace augmente.

```css
/* Mobile-first */
.nav { flex-direction: column; } /* mobile */

@media (min-width: 768px) {
  .nav { flex-direction: row; }
}
```

**↑ On ajoute ds éléments, de l'espace etc. pour les écrans plus larges**


### Desktop-first

Partir de la version riche et retirer des éléments au fur et à mesure que l'espace diminue.


```css
/* Desktop-first */
.nav { flex-direction: row; } /* desktop */

@media (max-width: 767px) {
  .nav { flex-direction: column; }
}
```

**↑ On retire, on écrase des styles, on simplifie pour les petits écrans**


### min-width VS max-width

**✅ *Mobile-first*: On part du petit, on ajoute des changements pour les écrans qui un un *min*imum d'une largeur X et +**

```css
/* Mobile-first (recommandé) */
/* Styles de base = mobile */
@media (min-width: 768px) { 
  /* ajoute, écrase les styles pour le grand */ 
}
```

**⚠️ *Desktop-first*: On part du grand, on retire des éléments et on fait des changements pour les écrans qui un un *max*imum d'une largeur X et -**

```css 
/* Desktop-first */
/* Styles de base = desktop */
@media (max-width: 767px) { 
  /* retire, réduit, écrase les styles pour simplifier pour le petit */ 
}
```