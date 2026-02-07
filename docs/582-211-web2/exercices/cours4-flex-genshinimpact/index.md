# Exercice Genshin Impact

- [< retour au *cours 4*](../../cours04.md)
- [< retour aux notes de cours *flexbox - introduction*](../../css/flexbox01.md)

## Flexbox: Galerie de personnages Genshin Impact

### Contexte

Vous créez une galerie de personnages pour le jeu Genshin Impact, avec leurs éléments (Pyro, Hydro, Electro, etc.).

### Aperçu du résultat

<div style="max-width: 1280px"><div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;"><iframe src="https://cmontmorency365-my.sharepoint.com/personal/mariem_ouellet_cmontmorency_qc_ca/_layouts/15/embed.aspx?UniqueId=cc75dfc1-cbc9-4a69-a536-d881b42d5d8a&embed=%7B%22hvm%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" width="1280" height="720" frameborder="0" scrolling="no" allowfullscreen title="apercu.mp4" style="border:none; position: absolute; top: 0; left: 0; right: 0; bottom: 0; height: 100%; max-width: 100%;"></iframe></div></div>

### Objectifs

- Maîtriser `display: flex`
- Utiliser `justify-content`, `align-items`, `gap`
- Pratiquer `flex-direction` et `flex-wrap`
- Utiliser Flexbox à l'intérieur d'une carte pour empiler du contenu verticalement

## Consignes de base

Créez une galerie de 6 cartes de personnages avec :

- [ ] Portrait du personnage (image fournie)
- [ ] Nom du personnage
- [ ] Élément (Pyro, Hydro, Cryo, etc.)
- [ ] Couleur de fond selon l'élément
- [ ] Layout qui s'adapte (wrapping)

**Structure de chaque carte (de haut en bas) :**

1. Image du personnage
2. Nom (h3)
3. Élément (paragraphe avec emoji)

## Fichier de départ

IMPORTANT : Connectez-vous à CodePen d'abord et par la suite faire un fork du Pen de départ

[Pen de départ](https://codepen.io/tim-momo/pen/ogLPPYp){ .md-button }

### Étapes recommandées

**ÉTAPE 1 : La galerie (conteneur principal)**

- [ ] Utilisez `display: flex` sur `.galerie`
- [ ] Ajoutez `flex-wrap: wrap` pour permettre le passage à la ligne
- [ ] Centrez les cartes avec `justify-content: center`
- [ ] Espacez-les avec `gap` (suggestion : 1.5rem)

**ÉTAPE 2 : Les cartes individuelles**

- [ ] Définissez une largeur fixe (suggestion : 200px)
- [ ] Ajoutez du padding, border-radius, box-shadow
- [ ] **Utilisez Flexbox À L'INTÉRIEUR de chaque carte :**
  - [ ] `display: flex`
  - [ ] `flex-direction: column` (empiler verticalement)
  - [ ] `align-items: center` (centrer horizontalement)
  - [ ] `gap` pour espacer image, titre, élément

**ÉTAPE 3 : Styliser l'image**

- [ ] `width: 100%` pour qu'elle prenne toute la largeur de la carte
- [ ] `height: auto` pour garder les proportions
- [ ] Optionnel : border-radius pour arrondir les coins

**ÉTAPE 4 : Animation au survol**

- [ ] Ajoutez `transform: translateY(-5px)` sur `.carte:hover`
- [ ] Augmentez le box-shadow au survol

### Résultat attendu

Une galerie responsive où :

- [ ] Les cartes sont centrées et espacées uniformément
- [ ] Elles passent à la ligne si l'écran est trop petit
- [ ] Le contenu à l'intérieur de chaque carte est bien empilé verticalement
- [ ] L'image, le nom et l'élément sont centrés
- [ ] Un effet de "levée" apparaît au survol

## 🚀Vous êtes super rapide?

Voici des bonus pour vous rendre encore plus fort 💪 !

### ⭐ BONUS 1 - Navigation en haut

Ajoutez une barre de navigation en haut de page avec le logo Genshin et 3 liens de menu, alignés avec space-between.

### ⭐⭐ BONUS 2 - Cartes avec direction column

À l'intérieur de chaque carte, utilisez Flexbox en flex-direction: column pour organiser le contenu verticalement (image/icône en haut, nom, élément, description).

### ⭐⭐⭐ DÉFI - Layout complexe

Créez une mise en page avec :

- [ ] Header flex (logo + navigation)
- [ ] Section hero flex (image + texte côte à côte)
- [ ] Galerie de cartes en dessous
- [ ] Footer flex (liens réseaux sociaux centrés)

## Remise

Remettre le lien de votre CodePen complété dans le Devoir Teams nommé: *c4-genshin-impact*. Si vous ne l'avez pas terminé pendant le cours, vous devrez le terminer en devoir et le remettre avant le cours 5.

## 📚 Notes de cours

[📚 Contenu de cours sur *Flexbox-introduction*](../../css/flexbox01.md){ .md-button .md-button--primary }