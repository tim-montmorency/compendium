
# Système de nomenclature des couleurs

**Primary, Secondary et variations numériques**

Quand on organise nos design tokens de couleurs, on suit généralement un système de nomenclature standardisé qui vient de frameworks comme [Tailwind](https://tailwindcss.com/docs/colors) ou [Bootstrap](https://getbootstrap.com/docs/5.3/customize/color/) et des systèmes de design professionnels.

## Les types

### Primary (Principale) 

La couleur dominante de votre interface, celle qui représente votre marque ou identité visuelle.

```css
--color-primary-500: #3B82F6; /* Bleu principal */
```

Utilisée pour : boutons principaux, liens, éléments importants qui attirent l'attention.



### Secondary (Secondaire) 

Couleur complémentaire ou d'accentuation, utilisée en support de la couleur principale.

```css
--color-secondary-500: #8B5CF6; /* Violet secondaire */
```

Utilisée pour : boutons secondaires, badges, éléments moins prioritaires mais importants.



### Accent

Couleur d'accentuation pour attirer l'attention sur des éléments spécifiques.

```css
--color-accent-500: #F59E0B; /* Orange pour notifications */
```

Utilisée pour : notifications, alertes, call-to-action spéciaux.

### Neutral (Neutre)

Gamme de gris pour les textes, arrière-plans et bordures.

```css
--color-neutral-900: #111827; /* Texte principal très foncé */
--color-neutral-50: #F9FAFB;  /* Arrière-plan très pâle */
```

Utilisée pour : textes, arrière-plans, séparateurs, ombres.

## Les variations numériques : Le système par centaines

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

<p class="codepen" data-height="1200" data-theme-id="44168" data-default-tab="result" data-slug-hash="dPXqqjj" data-pen-title="DEMO nomenclature des couleurs" data-user="tim-momo" style="height: 1200px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
<span>See the Pen <a href="https://codepen.io/tim-momo/pen/dPXqqjj">
DEMO nomenclature des couleurs</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>


## Comment les utiliser les variables couleur dans votre code

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

--- 


!!! tip "Astuce de pro"
    Des outils en ligne comme [Coolors](https://coolors.co),  [Tailwind Shades Generator](https://www.tints.dev/), [Bootstrap Colors](https://bootstrapcolors.com/) peuvent générer automatiquement ces variations pour vous à partir d'une couleur de base !

