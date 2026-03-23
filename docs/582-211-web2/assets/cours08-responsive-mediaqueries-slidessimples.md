---
marp: true
title: présentation 1
paginate: true
theme: rose-pine-moon
size: 16:9
---

<!-- Note: Une version PPT beaucoup plus visuelle est dispo dans mon dossier de contenu de cours.  Nommé cours08...pptx -->

## Slide 1

# Introduction au responsive

*Concevoir pour toutes les contraintes d'écran*

```
[ DESKTOP  ]
  [ TABLETTE ]
    [ MOBILE ]
```

---

## Slide 2

# Qu'est-ce qui se passe quand on rétrécit la fenêtre ?

| 🟠 Le texte déborde | 🟡 Les colonnes écrasent | 🔴 Le site devient inutilisable |
|---|---|---|
| → Conséquence visible à l'écran | → Conséquence visible à l'écran | → Conséquence visible à l'écran |

> 💬 *Discussion : À quel moment le site devient-il vraiment inutilisable pour toi ?*

---

## Slide 3: Concept de base

# Le responsive : s'adapter à la contrainte

| ✅ Définition | ❌ Ce que ce n'est PAS |
|---|---|
| Un design responsive adapte la mise en page à la contrainte d'affichage disponible — peu importe l'appareil. | ✗ Réparer un site cassé |
| | ✗ Cibler des appareils spécifiques |
| | ✗ Une liste de breakpoints fixes à mémoriser |

> **"Le responsive commence quand ton contenu commence à souffrir."**

---

## Slide 4: Breakpoints

# Un breakpoint = là où ton contenu souffre

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

> **Règle : Ajoute un breakpoint quand ton contenu te le demande — jamais en ciblant un appareil.**


---

## Slide 5: Syntaxe
`MINI-EXPOSÉ — SYNTAXE`

# La syntaxe d'une media query

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

---

### min-width vs max-width

```css
/* Mobile-first (recommandé) */
/* Styles de base = mobile */
@media (min-width: 768px) { /* ajoute pour le grand */ }
```
✅ **Mobile-first** — On part du petit, on ajoute

```css
/* Desktop-first */
/* Styles de base = desktop */
@media (max-width: 767px) { /* retire pour le petit */ }
```
△ **Desktop-first** — On part du grand, on enlève

---

## Slide 6: Mobile-first
`MINI-EXPOSÉ — MOBILE-FIRST VS DESKTOP-FIRST`

# Mobile-first : partir de la contrainte

| Mobile-first | Desktop-first |
|---|---|
| Partir du minimum essentiel et ajouter de la complexité au fur et à mesure que l'espace augmente. | Partir de la version riche et retirer des éléments au fur et à mesure que l'espace diminue. |

```css
/* Mobile-first */
.nav { flex-direction: column; } /* mobile */

@media (min-width: 768px) {
  .nav { flex-direction: row; }
}
```
**On ajoute ↑**

```css
/* Desktop-first */
.nav { flex-direction: row; } /* desktop */

@media (max-width: 767px) {
  .nav { flex-direction: column; }
}
```
**On retire ↑**

---

## Slide 7: Activité analyse
`ACTIVITÉ 2 — 25 MIN`

# Analyser avant de coder

**01** Quels éléments changent entre mobile, tablette et desktop ?

**02** Combien de breakpoints peux-tu deviner ?

**03** Quelle version a été pensée en premier ?

**04** Quelle propriété CSS est impliquée dans chaque changement ?

*Travail en tandem → mise en commun en classe*

---

## Slide 8: Exercice guidé
`EXERCICE GUIDÉ — 15 MIN`

# Première media query : à toi de jouer

*Mission : Une carte en colonne (mobile) → en rangée (desktop)*

```css
/* À ajouter dans ton CSS */
@media (min-width: ???) {
  .carte {
    flex-direction: ???;
  }

  .carte__image {
    width: ???;
    flex-shrink: 0;
  }
}
```

**Étapes :**
1. Créer `exercice-mq.html` avec le code fourni sur Timdoc
2. Ajouter le viewport meta tag (sinon rien ne marche)
3. Choisir un breakpoint en observant le contenu
4. Tester : rétrécir et agrandir la fenêtre
5. Vérifier : aucun overflow horizontal

> ⚠️ Sans `<meta name="viewport">` → les media queries ne fonctionnent pas sur mobile.


---

## Slide 9: Retour période 2
`DÉBUT PÉRIODE 2 — RETOUR COLLECTIF`

# Qu'est-ce qui a résisté ?

**Le viewport meta**

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**min-width vs max-width**
```
mobile-first = min-width / desktop-first = max-width
```

**flex-shrink: 0**
```
Sans ça, les éléments flex se compriment même si tu fixes une largeur
```
---

## Slide 10: Atelier

`ATELIER PROGRESSIF — 60 MIN`

# Trois niveaux — Avance à ton rythme

| 🟢 Niveau 1 | 🟡 Niveau 2 | 🔴 Niveau 3 |
|---|---|---|
| **Navigation repliable** | **Grille de cartes** | **Composant héros** |
| Horizontal sur desktop → vertical sur mobile. Un seul breakpoint. | 1 → 2 → 3 colonnes selon l'espace. Deux breakpoints. | Réorganisation complète + typo fluide. Tu écris tout le CSS. |

*Instructions complètes sur Timdoc · Ce qui n'est pas terminé en classe = devoir pour le cours 9*

---

## Slide 11: Convivialité mobile

`RETOUR COLLECTIF — CONVIVIALITÉ MOBILE`

# Responsive ≠ Accessible (mais c'est un début)

| 👆 Cibles tactiles ≥ 44px | 📖 Texte lisible sans zoom |
|---|---|
| Les doigts ne sont pas des curseurs. Un lien de 20px de haut est inutilisable sur mobile. | Corps du texte : 16px minimum. Si l'utilisateur doit zoomer, c'est ton problème. |

| ↔ Pas de scroll horizontal | 🔲 Espacements adaptés |
|---|---|
| C'est la signature d'un site non responsive. Teste à toutes les tailles. | Les marges et paddings pensés pour desktop sont souvent trop serrés sur mobile. |

*On approfondit l'accessibilité au cours 11. Aujourd'hui : poser les bases.*

---

## Slide 12: Synthèse

`SYNTHÈSE — À RETENIR`

# Ce que vous savez maintenant faire

✓ Choisir un breakpoint en observant le contenu
✓ Écrire une media query avec la bonne syntaxe
✓ Appliquer l'approche mobile-first (min-width)
✓ Inclure le viewport meta tag (toujours)
✓ Tester la convivialité mobile de base

> Ajoute un breakpoint quand ton contenu te le demande.