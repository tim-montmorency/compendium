# Stratégies de breakpoints raisonnées

## Le problème des breakpoints arbitraires

Beaucoup de gens choisissent leurs breakpoints comme ça :

```css
/* ❌ Basé sur des appareils spécifiques */
@media (min-width: 375px) { ... }  /* iPhone */
@media (min-width: 768px) { ... }  /* iPad */
@media (min-width: 1024px) { ... } /* iPad Pro */
@media (min-width: 1440px) { ... } /* Desktop */
```

**Le problème :** vous ciblez des appareils précis qui changent chaque année. Dans 2 ans, ces valeurs sont potentiellement obsolètes.



## La bonne approche : laisser le contenu décider

> « Ajoutez un breakpoint quand votre contenu en a besoin, pas parce qu'un appareil existe. »

**Méthode pratique :**
1. Commencez en mobile-first
2. Élargissez progressivement la fenêtre
3. Notez l'endroit où le layout **casse** ou devient **inconfortable**
4. C'est là que va votre breakpoint



## Nommer ses breakpoints avec des variables

Plutôt que de répéter `768px` partout (et de devoir le changer à 10 endroits) :

```css
/* Dans votre système de tokens */
:root {
  --bp-sm: 36rem;   /* ~576px */
  --bp-md: 48rem;   /* ~768px */
  --bp-lg: 64rem;   /* ~1024px */
}
```

> ⚠️ Les variables CSS ne fonctionnent pas *dans* les media queries. On les définit pour la documentation, mais en pratique on utilise les valeurs directement — ou on passe par des variables Sass/PostCSS si le projet le permet.

**Alternative documentaire** : un commentaire d'en-tête dans votre CSS qui liste vos breakpoints et leur logique.



## Mobile-first en pratique

```css
/* Base : mobile — pas de media query */
.grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Tablette */
@media (min-width: 48rem) {
  .grid {
    flex-direction: row;
    flex-wrap: wrap;
  }
}

/* Desktop */
@media (min-width: 64rem) {
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
```

**Avantage :** le mobile reçoit le CSS le plus simple. Les couches s'ajoutent. Moins de surcharge, meilleure performance.



## Combiner CSS fluide + breakpoints

L'idéal n'est pas de tout gérer avec des breakpoints. Le CSS fluide (`clamp`, unités relatives) couvre la majorité des ajustements. Les breakpoints servent pour les **changements structurels majeurs**.

```css
/* Fluide : taille de titre qui s'adapte sans breakpoint */
h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
}

/* Structurel : changement de layout au breakpoint */
@media (min-width: 48rem) {
  .page {
    display: grid;
    grid-template-columns: 250px 1fr;
  }
}
```



## À retenir

| Situation | Outil recommandé |
|-----------|-----------------|
| Taille de texte qui s'adapte | `clamp()` |
| Espacement proportionnel | Unités relatives (`rem`, `%`) |
| Layout qui change de structure | Breakpoints |
| Préférence utilisateur | Media queries spécialisées |
| Composant dans un contexte variable | Container queries (prochain cours) |
