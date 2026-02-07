# Exercice Dark Academia

## Design Tokens: Création de votre palette "Dark Academia"

### Contexte

Vous créez l'interface pour une app de lecture de livres classiques, inspirée de l'esthétique "Dark Academia" (bibliothèques anciennes, tons chauds, élégance vintage).

### Objectifs

- Créer un système de design tokens (jetons de conception) cohérent
- Utiliser des unités relatives
- Appliquer les fonctions CSS (`calc`, `clamp`)

## Consignes de base

1. Créez des design tokens (jetons de conception) pour :
    - [ ] *Couleurs* : Palette Dark Academia (bruns, beiges, vert forêt, bordeaux)
      - Au moins 3 couleurs principales avec variations (ex: `--color-primary-400`, `--color-primary-500`, `--color-primary-600`)
    - [ ] *Espacements* : Système cohérent (au moins 5 valeurs : 4px, 8px, 16px, 24px, 32px)
    - [ ] *Typographie* : 4 tailles de police (sm, base, lg, xl)
    - [ ] *Bordures* : 3 rayons de bordure (sm, md, lg)
2. Créez une carte de livre avec :
    - Titre du livre (utilisez `clamp()` pour taille fluide)
    - Auteur
    - Citation du livre
    - Bouton "Commencer la lecture"
    - Utilisez uniquement vos design tokens (pas de valeurs en dur)
    - Tous les espacements en `rem`

## Fichier de départ

IMPORTANT : Connectez-vous à CodePen d'abord et par la suite faire un fork du Pen de départ

[Pen de départ](https://codepen.io/tim-momo/pen/emzLKbP){ .md-button }

## 🚀Vous êtes super rapide?

Voici des bonus pour vous rendre encore plus fort 💪 !

### ⭐ BONUS 1 - Mode clair/sombre

Ajoutez un bouton qui bascule entre un thème clair et sombre en changeant les valeurs des variables CSS.

### ⭐⭐ BONUS 2 - Typographie fluide avancée

Créez un système de typographie entièrement fluide où TOUTES les tailles de police utilisent `clamp()` pour s'adapter à la taille de l'écran.

### ⭐⭐⭐ DÉFI - Système complet

Ajoutez des tokens pour :

- Ombres (`box-shadow`)
- Durées d'animation
- Épaisseurs de bordure
- Créez 3 variantes de cartes (petite, moyenne, grande) qui utilisent tous les mêmes tokens

## Remise

Remettre le lien de votre CodePen complété dans le Devoir Teams nommé: *c4-dark-academina*. Si vous ne l'avez pas terminé pendant le cours, vous devrez le terminer en devoir et le remettre avant le cours 5.

## 📚 Notes de cours reliées à l'exercice

[📚 Variables, unités relatives & fonctions](../../css/variables-unites-fonctions.md){ .md-button .md-button--primary }



<!-- 

#### Pour votre exercice Dark Academia

Vous n'avez PAS besoin de créer les 10 variations (50-900) pour chaque couleur. **Créez au minimum 3 variations** pour comprendre le principe :

```css
:root {
  /* Exemple : couleur principale (brun chocolat) */
  --color-primary-400: #8B6F47; /* Version plus claire */
  --color-primary-500: #6B4423; /* COULEUR DE BASE */
  --color-primary-600: #4A2C1A; /* Version plus foncée */
  
  /* Couleur d'accent (bordeaux) */
  --color-accent-400: #B85C5C;
  --color-accent-500: #8B2E2E; /* COULEUR DE BASE */
  --color-accent-600: #5C1F1F;
  
  /* Neutres (pour textes et arrière-plans) */
  --color-neutral-50: #F5EFE6;   /* Beige très pâle */
  --color-neutral-900: #2C1810;  /* Brun très foncé */
}
```

-->