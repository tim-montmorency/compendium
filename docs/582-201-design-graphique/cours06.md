# Cours 6 | Composition avancée

[STOP]

## Grid system

![](./assets/img/grid-system.avif)

* Pourquoi : alignement, rythme, cohérence
* Concepts à montrer :
  * colonnes (ex. 12), marges, gutters
  * grilles “layout grid” sur Frame
  * aligner sur la grille ≠ tout coller sur les lignes (laisser respirer)
* Démo : créer une frame Desktop + Mobile, appliquer grilles adaptées

## Auto layout

Auto Layout
https://www.youtube.com/watch?v=TyaGpGDFczw

* Pourquoi : composants “vivants” (texte variable, boutons, listes)
* À montrer absolument :
  * Auto-layout vertical vs horizontal
  * padding, spacing, alignment
  * “Hug / Fill / Fixed” (le trio magique)
  * nested auto-layout (card dans une liste, etc.)
* Démo : bouton + card + liste d’items

## Constraints

* Pourquoi : le resize intelligent
* À montrer :
  * Left/Right/Center/Scale
  * Top/Bottom/Center
  * quand utiliser Constraints vs Auto-layout
* Démo : header qui s’étire, bouton qui reste à droite, image qui scale

## Masques

* Pourquoi : recadrage propre, formes, avatars, bannières
* À montrer :
  * “Use as Mask”
  * recadrer une image dans un container
  * masque non-rectangulaire (cercle/avatar, forme custom simple)
* Démo : avatar rond + image hero recadrée

## Exercices

<div class="grid grid-1-2" markdown>
  ![](./activite/exercice/variable-manquante/prev.jpg)

  <small>Exercice - Figma</small><br>
  **[-](./activite/exercice/variable-manquante/index.md){.stretched-link .back}**
</div>

<!-- Composition avancée 

grilles plus structurées (https://www.youtube.com/watch?v=hYu69kgxmLg)
densité d’info
rythme
sections

patterns UI de base
https://www.youtube.com/watch?v=qPL3ubdlkRM&t=3s
https://www.youtube.com/watch?v=m7kUGmNkPoc
 UI palette : https://www.tints.dev/palette/v1:Z29sZHxGQkJGMjR8MzAwfHB8MHwwfDB8MTAwfGE
- Créer des **Color styles** nommés de façon stable, par exemple :
  - `Neutral/0` (blanc) → `Neutral/900` (presque noir)
  - `Primary/500` (accent principal)
  - `Primary/600` (hover), `Primary/700` (active)
  - `Text/Primary`, `Text/Secondary` (si vous préférez des noms fonctionnels)
- Utiliser un **contrast checker** (plugin/outils Web) sur les paires texte/fond.
- Vérifier au moins :
  - texte principal sur fond principal
  - CTA (texte + bouton)
  - liens sur fond
  - textes secondaires (souvent le point faible) -->

<!-- Composition avancée (remise logo)

À enseigner
* Grilles (8pt system), sections, densité, répétition intentionnelle.
* “Scannabilité” : titres, blocs, CTA, alignements.

Démo
* Layout grid + auto-layout pour sections (cards/listes).

Atelier
* Construire une landing page structurée (wire visuel, pas encore UX détaillée) :
* header / hero / 2 sections / footer

Devoir
* Nettoyer la page + cohérence des styles (typo/couleurs/espacements). -->