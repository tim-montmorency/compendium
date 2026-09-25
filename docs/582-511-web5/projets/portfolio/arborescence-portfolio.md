# Arborescence du dépôt portfolio

Structurer vos dossiers avant d'écrire du code évite de tout réorganiser à la moitié du projet. Cette structure de départ s'aligne avec l'approche par composants et avec vos choix technologiques (gestion des données, structure de navigation).

!!! info "Noms de fichiers, de dossiers et de classes : en anglais"
    Comme dans le code professionnel et la documentation que vous consultez, on nomme les fichiers, les dossiers, les classes CSS, les variables et les fonctions **en anglais** : `project-card.css`, `data/projects.json`, `loadProjects()`. Le contenu affiché aux visiteurs, lui, reste en français.

    Vous aviez déjà créé vos fichiers avec des noms en français (`carte-projet.css`, `projet.html`...)? Renommez-les maintenant, avant d'écrire le JavaScript : c'est beaucoup plus simple à ce stade qu'à la fin. Pensez à mettre à jour les liens `<link>` et `<script>` dans votre HTML.

## Structure de départ

```text
portfolio-prenom-nom/
├── README.md
├── index.html
├── project.html (si applicable multipages)
├── css/
│   ├── base.css
│   ├── variables.css
│   ├── layout.css
│   └── components/
│       ├── project-card.css
│       ├── navigation.css
│       ├── modal.css (si applicable pour les pop-ups)
│       └── project-detail.css (si applicable multipages)
├── js/
│   ├── main.js
│   ├── data.js
│   ├── project.js (si applicable multipages)
│   └── components/
│       ├── project-card.js
│       └── modal.js
├── data/
│   └── projects.json (si applicable)
├── assets/
│   ├── images/
│   └── icons/
├── exports-composants/
│   └── (captures PNG Figma, une par composant, nommées comme le fichier CSS correspondant)
├── .github/
│   └── copilot-instructions.md
├── documentation/
│   └── PLANIFICATION.md
│   └── JOURNAL.md
```

## Pour utiliser les variables CSS dans les autres fichiers CSS

!!! danger "Erratum : oubliez le `@import` du cours de vendredi"
    Je vous ai montré `@import` vendredi pour partager les variables CSS entre fichiers, je me rétracte. `@import` force le navigateur à télécharger vos fichiers CSS un à la suite de l'autre plutôt qu'en parallèle, un vrai problème de performance, pas juste un détail de style. La bonne façon : lier chaque fichier CSS séparément dans le `<head>` de votre HTML, comme montré ci-dessous. Aucun `@import` nulle part dans vos fichiers CSS.

Pour utiliser les variables CSS définies dans `variables.css` dans les autres fichiers CSS, il faut le lier avant les autres dans le `<head>` de votre fichier HTML :

```html
<link rel="stylesheet" href="css/variables.css"> <!-- le premier -->
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/layout.css">
<link rel="stylesheet" href="css/components/project-card.css">
```

Une variable déclarée dans `:root` à l'intérieur de `variables.css` devient disponible pour toute la page, dans n'importe quel autre fichier CSS lié dans le HTML. Aucun lien entre les fichiers CSS eux-mêmes n'est nécessaire.

## Ce que contient chaque dossier

| Fichier/dossier | Rôle |
|---|---|
| `index.html` | Page d'accueil, la liste de vos projets. |
| `project.html` | Page de détail d'un projet, seulement si vous avez choisi la structure multipages. |
| `css/variables.css` | Variables CSS spécifiques à votre projet. |
| `css/layout.css` | La disposition générale de la page (grid/flexbox), pas le contenu d'un composant précis. |
| `css/components/` | Un fichier par composant (carte, navigation, modale...), nommé selon la nomenclature BEM. |
| `js/main.js` | Le point d'entrée : appelle `data.js`, puis initialise les composants avec les données reçues. |
| `js/data.js` | Le `fetch()` asynchrone de vos projets (JSON local ou API en ligne) : voir [Charger les données du portfolio](donnees/index.md). |
| `js/project.js` | Seulement en multipages : lit l'`id` dans l'URL et affiche le projet correspondant dans `project.html`. |
| `js/components/` | Un fichier par composant qui a besoin de logique JS (ex. ouvrir une modale). |
| `data/projects.json` | Vos données de projets, seulement si vous avez choisi l'option JSON local. |
| `assets/` | Images, icônes, tout média utilisé dans le site. |
| `exports-composants/` | Une capture PNG par composant, exportée depuis Figma Dev Mode, nommée comme le fichier CSS correspondant (ex. `project-card.png`). Sert de référence à joindre au chat Copilot, et garde une trace de ce que vous aviez sous les yeux en générant le code. |
| `.github/copilot-instructions.md` | Vos conventions de projet pour Copilot (voir le guide de paramétrage). |
| `README.md`, `documentation/PLANIFICATION.md`, `documentation/JOURNAL.md` | Déjà en place depuis le lancement du projet. Déplacer dans un dossier `documentation/` `JOURNAL.md` et `PLANIFICATION.md`. |

## À ajuster selon vos choix technologiques

!!! note "Structure de navigation"
    - **One-pager** (pop-up ou carousel) : pas besoin de `project.html`. Remplacez `modal.css`/`modal.js` par les fichiers de votre composant (ex. `carousel.css`, `carousel.js`).
    - **Multipages** : gardez `project.html`, qui va chercher le projet correspondant via le paramètre d'URL.

!!! note "Gestion des données"
    - **JSON local** : gardez `data/projects.json`.
    - **Base de données en ligne** (Google Sheets + opensheet, Airtable) : pas de dossier `data/`, l'URL de l'API va directement dans `js/data.js`.

## Pourquoi séparer par composant

Un fichier CSS ou JS par composant, ça veut dire qu'un incrément de votre boucle Copilot correspond à un fichier, pas à une section arbitraire d'un gros fichier. Ça rend aussi vos commits plus clairs : un commit qui touche `project-card.css` et `project-card.js` documente précisément ce qui a changé.

### Approche par composant pour structurer votre code HTML/CSS/JS

Un bloc de code HTML/CSS/JS qui représente un élément de l'interface (ex. un bouton, un formulaire, une carte d'un projet). Chaque bloc est commenté et séparé des autres pour faciliter la lecture et la maintenance.

[Approche par composant](https://tim-montmorency.com/compendium/582-211-web2/css/composants.html){ .md-button :target="_blank" }
