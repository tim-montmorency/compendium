# Arborescence du dépôt : portfolio

Structurer vos dossiers avant d'écrire du code évite de tout réorganiser à la moitié du projet. Cette structure de départ s'aligne avec l'approche par composants et avec vos choix technologiques (gestion des données, structure de navigation).

## Structure de départ

```text
portfolio-prenom-nom/
├── README.md
├── index.html
├── projet.html (si applicable multipages)
├── css/
│   ├── base.css
│   ├── variables.css
│   ├── layout.css
│   └── composants/
│       ├── carte-projet.css
│       ├── navigation.css
│       └── modale.css (si applicable pour les pop-ups)
├── js/
│   ├── main.js
│   ├── data.js
│   └── composants/
│       ├── carte-projet.js
│       └── modale.js
├── data/
│   └── projets.json (si applicable)
├── assets/
│   ├── images/
│   └── icones/
├── .github/
│   └── copilot-instructions.md
├── documentation/
│   └── PLANIFICATION.md
│   └── JOURNAL.md
```

## Pour utiliser les variables CSS dans les autres fichiers CSS

Pour utiliser les variables CSS définies dans `variables.css` dans les autres fichiers CSS, il faut importer au début de chaque fichier:

```css
@import url('variables.css');
```

ou si le fichier est dans un dossier suppérieur au fichier CSS dans lequel vous voulez l'utiliser, utilisez le chemin relatif approprié. Par exemple, si vous êtes dans `css/composants/carte-projet.css`, vous devez écrire:

```css
@import url('../variables.css');
```

## Ce que contient chaque dossier

| Fichier/dossier | Rôle |
|---|---|
| `index.html` | Page d'accueil, la liste de vos projets. |
| `projet.html` | Page de détail d'un projet, seulement si vous avez choisi la structure multipages. |
| `css/variables.css` | Variables CSS spécifiques à votre projet. |
| `css/layout.css` | La disposition générale de la page (grid/flexbox), pas le contenu d'un composant précis. |
| `css/composants/` | Un fichier par composant (carte, navigation, modale...), nommé selon la nomenclature BEM. |
| `js/main.js` | Le point d'entrée : appelle `data.js`, puis initialise les composants avec les données reçues. |
| `js/data.js` | Le `fetch()` asynchrone de vos projets (JSON local ou API en ligne, voir cours 3.2). |
| `js/composants/` | Un fichier par composant qui a besoin de logique JS (ex. ouvrir une modale). |
| `data/projets.json` | Vos données de projets, seulement si vous avez choisi l'option JSON local. |
| `assets/` | Images, icônes, tout média utilisé dans le site. |
| `.github/copilot-instructions.md` | Vos conventions de projet pour Copilot (voir le guide de paramétrage). |
| `README.md`, `documentation/PLANIFICATION.md`, `documentation/JOURNAL.md` | Déjà en place depuis le lancement du projet. Déplacer dans un dossier `documentation/` `JOURNAL.md` et `PLANIFICATION.md`. |

## À ajuster selon vos choix technologiques

!!! note "Structure de navigation"
    - **One-pager** (pop-up ou carousel) : pas besoin de `projet.html`. Remplacez `modale.css`/`modale.js` par les fichiers de votre composant (ex. `carousel.css`, `carousel.js`).
    - **Multipages** : gardez `projet.html`, qui va chercher le projet correspondant via le paramètre d'URL.

!!! note "Gestion des données"
    - **JSON local** : gardez `data/projets.json`.
    - **Base de données en ligne** (Airtable, Supabase...) : pas de dossier `data/`, l'URL de l'API va directement dans `js/donnees.js`.

## Pourquoi séparer par composant

Un fichier CSS ou JS par composant, ça veut dire qu'un incrément de votre boucle Copilot correspond à un fichier, pas à une section arbitraire d'un gros fichier. Ça rend aussi vos commits plus clairs : un commit qui touche `carte-projet.css` et `carte-projet.js` documente précisément ce qui a changé.

### Approche par composant pour structurer votre code HTML/CSS/JS

Un bloc de code HTML/CSS/JS qui représente un élément de l'interface (ex. un bouton, un formulaire, une carte d'un projet). Chaque bloc est commenté et séparé des autres pour faciliter la lecture et la maintenance.

[Approche par composant](https://tim-montmorency.com/compendium/582-211-web2/css/composants.html){ .md-button :target="_blank" }
