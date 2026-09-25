# Cours 5.2
<!-- ven. 25 sept. -->

## Projet portfolio

!!! warning "Remise de la version Beta (finale et prête à tester) : vendredi 2 octobre"
    Il reste le cours 6.1 (mercredi 30 sept.) avant la bêta. Aujourd'hui, on branche vos projets sur une vraie source de données : c'est le cœur fonctionnel de votre portfolio.

## Aujourd'hui

- [ ] Récap JS express : ce que vous savez déjà
- [ ] JSON et `fetch()` asynchrone
- [ ] Choisir sa source de données : JSON local, Google Sheets, Airtable
- [ ] Un seul code d'affichage pour toutes les sources
- [ ] Détail d'un projet : modale ou `projet.html` (paramètres d'URL)
- [ ] Atelier de production (Pomodoro)
- [ ] Journal de bord
- [ ] Devoir pour le cours 6.1

## Récap JS express

Ça fait un bout que vous n'avez pas écrit de JavaScript, mais vous l'avez déjà tout vu. Aujourd'hui, on réactive seulement ce qui sert à charger et afficher des données :

| Notion | À quoi ça sert aujourd'hui |
|---|---|
| Tableau d'objets `[{...}, {...}]` | Vos projets |
| `projet.titre` | Lire une propriété d'un projet |
| Gabarit littéral `` `<h3>${projet.titre}</h3>` `` | Fabriquer du HTML avec des données |
| `map()` | Transformer chaque projet en carte |
| `find()` | Retrouver **un** projet par son `id` |
| `querySelector()`, `innerHTML` | Insérer le HTML dans la page |
| `addEventListener()` | Réagir à un clic (ouvrir une modale) |

Votre aide-mémoire des sessions précédentes couvre tout ça : [aide-mémoire JS](https://jfcmontmorency.github.io/aide-memoire/){ :target="_blank" }

## JSON et `fetch()` asynchrone

- **JSON** : un format texte pour échanger des données. Un tableau (`[ ]`) d'objets (`{ }`), avec des guillemets doubles partout.
- **`fetch()`** : va chercher une ressource (un fichier, une API) et retourne une **promesse** : la réponse n'arrive pas tout de suite.
- **`async` / `await`** : attendre la réponse sans bloquer la page, en écrivant le code de façon linéaire.

```js
async function chargerProjets() {
  const reponse = await fetch('data/projets.json'); // 1. aller chercher
  const projets = await reponse.json();              // 2. lire le JSON
  return projets;                                     // 3. un tableau de projets
}
```

Seule l'adresse dans `fetch()` change selon la source. Tout le reste en découle.

## Choisir sa source de données

C'est le choix que vous avez justifié dans `PLANIFICATION.md`. La page de départ compare les trois options et présente le **format commun** que toutes les sources doivent respecter :

[:material-database: Charger les données du portfolio : choisir sa source](projets/portfolio/donnees/index.md){ .md-button .md-button--primary }

Puis, la procédure complète de **votre** source, jusqu'au code de `js/data.js` :

[:material-code-json: JSON local (et conversion depuis Excel)](projets/portfolio/donnees/json-local.md){ .md-button }
[:material-google-spreadsheet: Google Sheets + opensheet](projets/portfolio/donnees/google-sheets-opensheet.md){ .md-button }
[:material-table-large: Airtable](projets/portfolio/donnees/airtable.md){ .md-button }

!!! danger "Airtable : un jeton en lecture seule, limité à une seule base"
    Votre jeton sera visible dans votre code public. On ne peut pas le cacher, mais on contrôle ce qu'il permet de faire. Section 4 de la page Airtable, à lire **avant** de créer votre jeton.

## Un seul code d'affichage

Peu importe la source, `chargerProjets()` retourne le même tableau de projets. Le code qui génère vos cartes est donc le même pour tout le monde :

[:material-cards-outline: Afficher les projets](projets/portfolio/donnees/afficher-projets.md){ .md-button .md-button--primary }

## Détail d'un projet

Selon la structure de navigation choisie dans `PLANIFICATION.md` :

- **One-pager avec modale** : un bouton `data-id` sur la carte, `find()`, puis `<dialog>`. Voir [Afficher les projets, section 4](projets/portfolio/donnees/afficher-projets.md#4-one-pager-avec-modale).
- **Multipages** : une seule page `projet.html` pour tous les projets. Elle lit `?id=cafe-du-coin` dans l'adresse avec `URLSearchParams`. Voir [Afficher les projets, section 5](projets/portfolio/donnees/afficher-projets.md#5-multipages-projethtml-et-les-parametres-durl).
- **One-pager avec carrousel** : le détail est dans la carte elle-même, rien de plus à charger.

## Atelier de production

Structure Pomodoro, comme aux cours 4.2 et 5.1 : sprints de 25 minutes, un objectif précis noté dans `JOURNAL.md` au début de chaque sprint, 2 minutes de bilan à la fin, vraie pause entre les sprints.

Ordre suggéré, une étape par sprint :

1. **Préparer votre source** : `projets.json`, feuille Google ou base Airtable, avec au moins 3 projets dans le format commun. Test `console.log(projets[0].titre)` réussi.
2. **Générer les cartes** : `creerCarteProjet()` + `main.js`. Plus aucune carte écrite à la main dans le HTML.
3. **Le détail statique** : si votre modale ou votre `projet.html` n'est pas encore intégré en HTML/CSS, codez-le d'abord avec **un projet écrit en dur**, comme vos autres composants.
4. **Brancher le détail sur les données** : modale ou `projet.html?id=...`.

!!! tip "Si votre HTML/CSS n'est pas terminé"
    Priorité aux cartes de projets. Le reste de l'intégration HTML/CSS se poursuit en parallèle, mais la section projets est celle qui doit être branchée sur les données en premier.

Un commit par étape terminée.

## Journal de bord

Dans `JOURNAL.md` :

- vos objectifs de sprint et leur bilan;
- chaque prompt Copilot **délibéré** (Agent, Ask), avec le résultat et ce que vous en avez fait. Pas les complétions en ligne.

Commit final avant de partir.

## Devoir

### Portfolio, pour le cours 6.1 (mercredi 30 sept.)

**Obligatoire** :

- [ ] Votre source de données est en place, avec tous vos projets (ou au moins ceux prêts à ce jour) dans le format commun.
- [ ] Les **cartes de projets** de la page d'accueil sont générées en JavaScript à partir de cette source.
- [ ] Commits poussés sur GitHub, `JOURNAL.md` à jour.

**Idéalement** :

- [ ] Le **détail d'un projet** est intégré en HTML/CSS (modale ou `projet.html`), d'abord avec un projet en dur si nécessaire.
- [ ] Puis branché sur les données (clic sur une carte → bon projet affiché).

!!! danger "La bêta, c'est dans une semaine"
    Mercredi prochain, on consacre le cours à la finition, à l'accessibilité et au déploiement. Arriver avec les cartes fonctionnelles, c'est la condition pour que la bêta du 2 octobre soit réaliste.
