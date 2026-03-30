---
tags:
  - Devoir
  - Évaluation sommative
---

# Refonte Web

L'objectif de ce devoir est de concevoir les **maquettes graphiques** pour la refonte d'un site Web existant.

Vous devez proposer un redesign complet et réfléchi, en appliquant les principes de design graphique vus en classe, tout en utilisant un **design system** et les fonctionnalités avancées de Figma (composantes, auto-layout, contraintes).

Ce devoir compte pour **20%** de votre note finale.

## Contexte

Certains sites Web ont un contenu pertinent, mais souffrent d'une expérience visuelle datée ou peu efficace. Votre mandat est de moderniser l'interface d'un de ces sites en améliorant la **clarté**, la **hiérarchie visuelle**, la **cohérence** et l'**adaptabilité** (_responsive_).

## Choix du site

Choisissez **un** site parmi les trois suivants :

| Site | URL |
|:---|:---|
| Yala Sri Lanka | https://www.yalasrilanka.lk/ |
| Craigslist Montréal | https://montreal.craigslist.org/ |
| MyAnimeList | https://myanimelist.net/ |

!!! info "Prenez le temps de naviguer sur le site choisi avant de commencer. Comprenez sa structure, son contenu et son public cible."

## Pages à concevoir

Vous devez refaire **2 pages** du site :

1. **Page d'accueil**
2. **Page de connexion** (_login_)

Chaque page doit être déclinée en **2 versions** :

- [ ] **Desktop** (1440 × hauteur variable)
- [ ] **Mobile** (390 × hauteur variable)

Cela donne un total de **4 frames**.

## Design system

Vous devez utiliser un **design system gratuit** provenant de la communauté Figma.

Exemples :

- [shadcn/ui](https://www.figma.com/community/file/1203061493325953101)
- [Material 3 Design Kit (Google)](https://www.figma.com/community/file/1035203688168086460)
- Ou tout autre design system de la communauté Figma

!!! warning "Vous devez utiliser les composantes du design system dans vos maquettes (boutons, champs de formulaire, cartes, navigation, etc.). Ne pas simplement l'importer sans l'utiliser."

## Consignes techniques

### Figma

- [ ] Le projet doit être réalisé dans **Figma Design** (pas dans Figma Sites).
- [ ] Créer une composition de type « Design » nommée « Refonte ».
- [ ] Une seule page contenant vos 4 frames.
- [ ] Nommez vos frames clairement : `Accueil - Desktop`, `Accueil - Mobile`, `Connexion - Desktop`, `Connexion - Mobile`.

### Composantes

- [ ] Utiliser les composantes du design system choisi.
- [ ] **Créer au minimum une composante de type variante** (_variant_) personnalisée et l'appliquer dans le projet (ex. : un bouton avec états _default_, _hover_, _disabled_).

### Responsive

- [ ] Les frames doivent utiliser l'**auto-layout** et les **contraintes** (_constraints_) correctement.
- [ ] Lorsqu'on redimensionne un frame, le contenu doit s'adapter de façon cohérente.

### Design graphique

- [ ] Hiérarchie visuelle claire.
- [ ] Typographie lisible et cohérente.
- [ ] Palette de couleurs harmonieuse.
- [ ] Espacement et alignement soignés.
- [ ] Contraste de couleurs [accessible](https://webaim.org/resources/contrastchecker/).

## Remise

Date : La veille du cours de la **semaine 14** à **23 h 59**

Sur Teams, remettre **un seul fichier zip** nommé `nomfamille-prenom-refonte.zip` comprenant :

- [ ] `nomfamille-prenom-refonte.fig`
- [ ] `nomfamille-prenom-refonte-accueil-desktop.png`
- [ ] `nomfamille-prenom-refonte-accueil-mobile.png`
- [ ] `nomfamille-prenom-refonte-connexion-desktop.png`
- [ ] `nomfamille-prenom-refonte-connexion-mobile.png`

## Grille d'évaluation

| Critère | Points | Détails attendus |
|:---|:---:|:---|
| **Qualité de la refonte visuelle** | **3 pts** | La maquette représente une amélioration significative par rapport au site original. Les choix graphiques sont modernes, cohérents et adaptés au public cible. |
| **Hiérarchie et lisibilité** | **2 pts** | L'information est structurée clairement. L'ordre de lecture est intentionnel. La typographie, les contrastes et l'espacement facilitent la compréhension. |
| **Utilisation du design system** | **2 pts** | Les composantes du design system sont intégrées de façon pertinente et cohérente dans les maquettes (navigation, boutons, champs, cartes, etc.). |
| **Composante variante** | **1 pt** | Au moins une composante de type variante personnalisée est créée et appliquée dans le projet. |
| **Responsive (auto-layout et contraintes)** | **2 pts** | Les frames utilisent l'auto-layout et les contraintes correctement. Le contenu s'adapte de façon cohérente au redimensionnement. Les versions desktop et mobile sont bien adaptées à leur format. |
| **Respect des consignes** | **1 pt** | Tous les éléments demandés sont présents. Nomenclature respectée. Exports corrects. |

**Total : / 11 points** (le résultat sera converti en 20% de la note finale)