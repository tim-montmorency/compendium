# Exercice Dark Academia

- [< retour au *cours 4*](../../cours04.md)
- [< retour aux notes de cours *variables, unités relatives et fonctions css*](../../css/variables-unites-fonctions.md)

## Design Tokens: Création de votre palette "Dark Academia"

### Contexte

Vous créez l'interface pour une app de lecture de livres classiques, inspirée de l'esthétique "Dark Academia" (bibliothèques anciennes, tons chauds, élégance vintage).

### Aperçu du résultat

<div style="max-width: 1280px"><div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;"><iframe src="https://cmontmorency365-my.sharepoint.com/personal/mariem_ouellet_cmontmorency_qc_ca/_layouts/15/embed.aspx?UniqueId=f3c33ab8-511c-4d74-a83d-6dc796f9d87b&embed=%7B%22hvm%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" width="1280" height="720" frameborder="0" scrolling="no" allowfullscreen title="apercu.mp4" style="border:none; position: absolute; top: 0; left: 0; right: 0; bottom: 0; height: 100%; max-width: 100%;"></iframe></div></div>

### Objectifs

- Créer un système de design tokens (jetons de conception) cohérent
- Utiliser des unités relatives
- Appliquer les fonctions CSS (`calc`, `clamp`)

## Consignes de base

**1 . Créez des design tokens (jetons de conception) pour :**

- [ ] *Couleurs* : Palette Dark Academia (bruns, beiges, vert forêt, bordeaux)
  - Au moins 3 couleurs principales avec variations (ex: `--color-primary-400`, `--color-primary-500`, `--color-primary-600`)
- [ ] *Espacements* : Système cohérent (au moins 5 valeurs : 4px, 8px, 16px, 24px, 32px)
- [ ] *Typographie* : 4 tailles de police (sm, base, lg, xl)
- [ ] *Bordures* : 3 rayons de bordure (sm, md, lg)

**2 . Créez une carte de livre avec :**

- [ ] Titre du livre (utilisez `clamp()` pour taille fluide)
- [ ] Auteur
- [ ] Citation du livre
- [ ] Bouton "Commencer la lecture"
- [ ] Utilisez uniquement vos design tokens (pas de valeurs en dur)
- [ ] Tous les espacements en `rem`

## Fichier de départ

IMPORTANT : Connectez-vous à CodePen d'abord et par la suite faire un *fork* du Pen de départ pour l'enregistrer dans votre compte et archiver votre exercice.

[Pen de départ](https://codepen.io/tim-momo/pen/emzLKbP){ .md-button }

## 🚀Vous êtes super rapide?

Voici des bonus pour vous rendre encore plus fort 💪 !

### ⭐ BONUS 1 - Mode clair/sombre 

> Trop avancé, faites les autres bonus/défis avant celui-ci.

Ajoutez un bouton qui bascule entre un thème clair et sombre en changeant les valeurs des variables CSS.

!!! danger

    Attention, si vous faites ce bonus, demandez à la professeure de vous fournir le JavaScript nécessaire et peut-être quelques guides CSS.

### ⭐⭐ BONUS 2 - Typographie fluide avancée

Créez un système de typographie entièrement fluide où TOUTES les tailles de police utilisent `clamp()` pour s'adapter à la taille de l'écran.

C'est à dire que le `clamp()` est utilisé dans la défintion de vos variables dans le `:root`.

### ⭐⭐⭐ DÉFI 3 - Système complet

Ajoutez des tokens pour :

- Ombres (`box-shadow`)
- Durées d'animation
- Épaisseurs de bordure
- Créez 3 variantes de cartes (petite, moyenne, grande) qui utilisent tous les mêmes tokens

## Remise

Remettre le lien de votre CodePen complété dans le Devoir Teams nommé: *c4-dark-academina*. Si vous ne l'avez pas terminé pendant le cours, vous devrez le terminer en devoir et le remettre avant le cours 5.

## 📚 Notes de cours

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