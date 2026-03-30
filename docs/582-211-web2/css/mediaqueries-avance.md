# Requêtes média avancées

## Au-delà de `min-width` / `max-width`

La plupart d'entre vous connaissez déjà ça :

```css
@media (min-width: 768px) { ... }
```

Mais les media queries peuvent interroger bien d'autres choses que la largeur de la fenêtre.



## `orientation`

Détecte si l'écran est en mode portrait ou paysage.

```css
@media (orientation: landscape) {
  .hero {
    flex-direction: row;
  }
}

@media (orientation: portrait) {
  .hero {
    flex-direction: column;
  }
}
```

**Cas d'usage concret :** une galerie photo qui passe de 2 colonnes (portrait) à 4 colonnes (landscape) sur tablette, sans changer de breakpoint de largeur.

> ⚠️ Attention : sur desktop, `orientation: landscape` est presque toujours vraie. Cette requête est surtout utile pour les **appareils mobiles et tablettes**.



## `prefers-color-scheme`

Respecte la préférence système de l'utilisateur (mode clair ou sombre).

```css
:root {
  --bg: #ffffff;
  --text: #111111;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #111111;
    --text: #f0f0f0;
  }
}
```

**Bonne pratique :** toujours définir le thème clair en base, et surcharger avec la media query dark.

> 💡 Si vous avez bien structuré vos variables CSS (design tokens), appliquer un thème sombre se résume à redéfinir quelques variables — pas à réécrire du CSS.



## `prefers-reduced-motion`

Certains utilisateurs ont configuré leur système pour réduire les animations (épilepsie, vertiges, préférence personnelle).

```css
.card {
  transition: transform 0.4s ease;
}

@media (prefers-reduced-motion: reduce) {
  .card {
    transition: none;
  }
}
```

**Règle d'or :** si vous ajoutez des transitions ou animations, vous devez toujours prévoir une version réduite. C'est de l'accessibilité, pas du bonus.



## `hover` et `pointer`

Détecte si l'appareil supporte le survol (hover) et la précision du pointeur.

```css
/* Seulement sur les appareils avec une souris précise */
@media (hover: hover) and (pointer: fine) {
  .btn:hover {
    background: var(--accent);
  }
}

/* Appareils tactiles : agrandir les zones de clic */
@media (pointer: coarse) {
  .btn {
    min-height: 48px;
    padding: 1rem 1.5rem;
  }
}
```

**Pourquoi c'est important :** un effet `hover` sur mobile ne se déclenche jamais proprement — il peut rester "bloqué" après un tap. Cette requête vous permet d'appliquer ces effets uniquement là où ils fonctionnent bien.



## Combiner plusieurs conditions

On peut combiner avec `and`, et utiliser plusieurs règles séparées par une virgule (= OU) :

```css
/* Paysage ET mouvement réduit */
@media (orientation: landscape) and (prefers-reduced-motion: reduce) {
  ...
}

/* Mode sombre OU contraste élevé */
@media (prefers-color-scheme: dark), (prefers-contrast: more) {
  ...
}
```