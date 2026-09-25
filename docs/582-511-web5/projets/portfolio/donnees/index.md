# Charger les données du portfolio

!!! abstract "L'essentiel en 3 points"
    1. Vos projets ne sont pas écrits dans le HTML : ils vivent dans une **source de données** (JSON local, Google Sheets ou Airtable) et sont chargés en JavaScript avec `fetch()`.
    2. Peu importe la source, `js/data.js` doit toujours retourner **la même chose** : un tableau de projets, avec les mêmes noms de propriétés.
    3. Le code qui affiche vos projets (cartes, modale, `projet.html`) est **identique pour tout le monde**. Changer de source plus tard ne demande de modifier que `data.js`.

## Le principe

```text
Source de données         js/data.js              js/main.js
(JSON, Sheets, Airtable)  chargerProjets()   →    afficherProjets(projets)
        │                        │                        │
        └── fetch() ────────────►│ retourne un tableau ──►│ génère les cartes
                                 │ de projets             │ (ou projet.html)
```

Chaque page-source ci-dessous se termine par **sa** version de `chargerProjets()`. Ensuite, tout le monde continue sur la même page : *Afficher les projets*.

## Choisir sa source

C'est le choix que vous avez justifié dans `PLANIFICATION.md` au cours 3.2.

| Source | Pour qui | Modifier le contenu sans toucher au code | Compte requis |
|---|---|---|---|
| **JSON local** | Tout le monde. Choix par défaut, le plus simple et le plus fiable. | Non : on modifie le fichier, puis on commit | Aucun |
| **Google Sheets + opensheet** | Ceux qui ont un compte Google personnel et aiment travailler dans un tableur. | Oui | Google |
| **Airtable** | Ceux qui veulent une vraie interface de gestion de données (images hébergées, types de champs). | Oui | Airtable (n'importe quel courriel, incluant celui du collège) |

!!! tip "Dans le doute : JSON local"
    Une base de données en ligne n'est pas plus « avancée » en soi. Elle est utile seulement si vous voulez vraiment modifier votre contenu sans toucher au code ni redéployer.

[:material-code-json: JSON local (et conversion depuis Excel)](json-local.md){ .md-button }
[:material-google-spreadsheet: Google Sheets + opensheet](google-sheets-opensheet.md){ .md-button }
[:material-table-large: Airtable](airtable.md){ .md-button }

## Le format commun des données

Toutes les sources doivent produire des projets qui ont **exactement ces noms de propriétés**. C'est ce qui permet au code d'affichage d'être le même pour tout le monde.

| Propriété | Obligatoire | Contenu | Exemple |
|---|---|---|---|
| `id` | Oui | Identifiant unique, sans espaces ni accents. Sert à `projet.html?id=...` | `cafe-du-coin` |
| `titre` | Oui | Titre du projet | `Café du coin` |
| `description` | Oui | Courte description | `Identité visuelle et site web...` |
| `categorie` | Oui | Type de projet | `Design web` |
| `annee` | Oui | Année de réalisation | `2025` |
| `image` | Oui | Chemin ou URL de l'image principale | `assets/images/cafe.jpg` |
| `lien` | Non | Lien externe (site en ligne, Behance, dépôt...) | `https://...` |
| `video` | Non | Lien d'intégration (embed) complet YouTube ou Vimeo | `https://www.youtube.com/embed/...` |
| `galerie` | Non | Plusieurs images supplémentaires (tableau d'URL) | `["assets/images/cafe-2.jpg", ...]` |

!!! warning "Noms de propriétés : sans espaces, sans accents, en minuscules"
    `annee`, pas `Année`. `categorie`, pas `Catégorie`. En JavaScript, `projet.annee` fonctionne, `projet.Année` est une source de bogues garantie. Ça vaut pour les clés de votre JSON, les en-têtes de colonnes de votre Google Sheet et les noms de champs d'Airtable.

Vous pouvez ajouter d'autres propriétés propres à votre portfolio (ex. `outils`, `client`, `role`). Gardez simplement la même règle de nommage, et le même nom dans toutes vos données.

## Où va le code

Selon l'[arborescence du dépôt](../arborescence-portfolio.md) :

| Fichier | Rôle |
|---|---|
| `js/data.js` | **Seulement** `chargerProjets()` : aller chercher les données et les retourner dans le format commun. C'est le seul fichier qui change selon la source. |
| `js/composants/carte-projet.js` | Transformer **un** projet en HTML (une carte). |
| `js/main.js` | Le chef d'orchestre : appelle `chargerProjets()`, puis affiche les cartes. |
| `data/projets.json` | Seulement si vous avez choisi le JSON local. |

Dans le `<head>` de vos pages, dans cet ordre :

```html
<script src="js/data.js" defer></script>
<script src="js/composants/carte-projet.js" defer></script>
<script src="js/main.js" defer></script>
```

`defer` exécute les scripts après la lecture du HTML, et dans l'ordre où ils sont écrits : `main.js` peut donc utiliser les fonctions déclarées dans les deux fichiers précédents.

## La suite

Une fois votre source prête et `chargerProjets()` testée dans la console :

[:material-cards-outline: Afficher les projets (et page projet.html)](afficher-projets.md){ .md-button .md-button--primary }
