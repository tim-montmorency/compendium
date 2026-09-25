# Cours 5.2
<!-- ven. 25 sept. -->

## Tutorat

Pour Web 5, ce sont **Alexis et Olivier** qu'il faut aller voir : ils sont en 3e année, comme vous. Les autres tuteurs du programme sont en 2e année et ne peuvent pas vous aider pour ce cours.

| NOM | PLAGE HORAIRE | LIEU | DATES |
|---|---|---|---|
| *Alexis Guilbault* | Trou horaire : mardi 12 h 30 à 14 h 10 | En personne au Centre d'aide C-1602 | 8 sept. au 8 déc. inclus |
| *Olivier Laliberté* | Mercredi soir : 20 h à 21 h 15 | En ligne sur Teams : [canal Tutorat de l'équipe TIM-Programme TIM](https://teams.microsoft.com/l/channel/19%3A68fb96c731e7460ba846ff328a9fe109%40thread.tacv2/Tutorat?groupId=924057af-2255-4c2a-8ce7-f0a1809ad4a4&tenantId=ffa995c7-10de-4ec8-95db-28ed0576455d) | 9 sept. au 9 déc. inclus |

!!! success "Nouveau : périodes de tutorat supplémentaires réservées à Web 5"
    En plus de leurs plages habituelles, Alexis et Olivier offriront **des périodes de tutorat de plus, réservées au cours Web 5**, placées juste avant les remises du portfolio :

    - **2 périodes avant la remise bêta** (vendredi 2 octobre);
    - **2 périodes avant la remise finale** (gr. Lora : jeudi 8 octobre · gr. Enric : jeudi 15 octobre).

    Certaines pourraient avoir lieu pendant nos heures de cours, d'autres en soirée. **Les dates et heures exactes seront confirmées sous peu, ici même.** Surveillez cette page.

    Pour en profiter au maximum : arrivez avec une question précise, votre dépôt à jour sur GitHub et le problème reproductible (« mes cartes ne s'affichent pas, voici l'erreur dans la console »), plutôt que « ça marche pas ». 

    Vous pourrez inviter le tuteur à votre dépôt GitHub (encore privé à ce jour) afin qu'il puisse faire un clone de votre projet et y jeter un oeil au besoin.

## Projet portfolio

!!! warning "Remise de la version Beta (finale et prête à tester) : vendredi 2 octobre"
    Il reste le cours 6.1 (mercredi 30 sept.) avant la bêta. Aujourd'hui, on branche vos projets sur une vraie source de données : c'est le cœur fonctionnel de votre portfolio.

## Aujourd'hui

- [ ] Tutorat : rappel et périodes supplémentaires avant les remises
- [ ] Échauffement JavaScript : 5 défis dans la console
- [ ] JSON et `fetch()` asynchrone
- [ ] Exercice guidé : du JSON à la carte
- [ ] Choisir sa source de données : JSON local, Google Sheets, Airtable
- [ ] Un seul code d'affichage pour toutes les sources
- [ ] Détail d'un projet : modale ou `project.html` (paramètres d'URL)
- [ ] Atelier de production (Pomodoro)
- [ ] Journal de bord
- [ ] Devoir pour le cours 6.1
  
## Recap JavaScript

[:material-console: Révision JavaScript](./js/recap-js.md){ .md-button .md-button--primary }

### Échauffement JS : 5 défis dans la console

Ça fait un bout que vous n'avez pas écrit de JavaScript, mais vous l'avez déjà tout vu. On réactive seulement ce qui sert aujourd'hui, avec 5 petits défis dans la console du navigateur. Corrigé ensemble, un défi à la fois.

<div class="class-content-link">
  <img src="./assets/IA-interdite.png">
  <span class="sidetext">Utilisation de l'IA interdite pour cette activité. Faites chauffer vos méninges!</span>
</div>

[:material-console: Partie 1 : échauffement dans la console](exercices/ex-json-cartes/index.md#partie-1-echauffement-dans-la-console){ .md-button .md-button--primary }

!!! tip "Besoin de revoir une notion?"
    Tous les concepts clés, avec un exemple chacun, sont dans le [récap JS](js/recap-js.md). C'est une référence à consulter au besoin, pas à lire d'un bloc.

### JSON et `fetch()` asynchrone

- **JSON** : un format texte pour échanger des données. Un tableau (`[ ]`) d'objets (`{ }`), avec des guillemets doubles partout.
- **`fetch()`** : va chercher une ressource (un fichier, une API) et retourne une **promesse** : la réponse n'arrive pas tout de suite.
- Deux façons d'attendre cette réponse, que vous avez vues dans vos cours précédents :
    - **`async` / `await`** : le code s'écrit de façon linéaire, une étape par ligne.
    - **`.then()`** : chaque étape s'enchaîne à la précédente.

**Avec `async` / `await`**

```js
async function loadProjects() {
  const response = await fetch('data/projects.json'); // 1. aller chercher
  const projects = await response.json();             // 2. lire le JSON
  return projects;                                    // 3. tableau de projets
}
```

**Avec `.then()`**

```js
function loadProjects() {
  return fetch('data/projects.json')   // 1. aller chercher
    .then(response => response.json());// 2. lire le JSON, 3. tableau de projets
}
```

Les deux versions font exactement la même chose. Choisissez celle avec laquelle vous êtes le plus à l'aise, et gardez la même partout dans votre projet.

Seule l'adresse dans `fetch()` change selon la source. Tout le reste en découle.

### Exercice guidé : du JSON à la carte

Avant de toucher à votre portfolio, on code ensemble le même mécanisme en miniature : un fichier JSON de 3 projets, et des cartes générées en JavaScript. Quatre étapes, vérifiées une à une dans le navigateur.

[:material-code-json: Partie 2 : du JSON à la carte](exercices/ex-json-cartes/index.md#partie-2-du-json-a-la-carte){ .md-button .md-button--primary }

!!! tip "Besoin de revoir une notion?"
    Tous les concepts clés, avec un exemple chacun, sont dans le [récap JS](js/recap-js.md). C'est une référence à consulter au besoin, pas à lire d'un bloc.

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

Peu importe la source, `loadProjects()` retourne le même tableau de projets. Le code qui génère vos cartes est donc le même pour tout le monde :

[:material-cards-outline: Afficher les projets](projets/portfolio/donnees/afficher-projets.md){ .md-button .md-button--primary }

## Détail d'un projet

Selon la structure de navigation choisie dans `PLANIFICATION.md` :

- **One-pager avec modale** : un bouton `data-id` sur la carte, `find()`, puis `<dialog>`. Voir [Afficher les projets, section 4](projets/portfolio/donnees/afficher-projets.md#4-one-pager-avec-modale).
- **Multipages** : une seule page `project.html` pour tous les projets. Elle lit `?id=cafe-du-coin` dans l'adresse avec `URLSearchParams`. Voir [Afficher les projets, section 5](projets/portfolio/donnees/afficher-projets.md#5-multipages-projecthtml-et-les-parametres-durl).
- **One-pager avec carrousel** : le détail est dans la carte elle-même, rien de plus à charger.

!!! info "Pas de composant JavaScript supplémentaire à ajouter"
    Le chargement de vos projets et l'affichage de leur détail (modale, carrousel ou `project.html`), c'est **l'interactivité JavaScript** exigée pour le portfolio. Aucun autre composant JS n'est demandé.

## Atelier de production

Structure Pomodoro, comme aux cours 4.2 et 5.1 : sprints de 25 minutes, un objectif précis noté dans `JOURNAL.md` au début de chaque sprint, 2 minutes de bilan à la fin, vraie pause entre les sprints.

Ordre suggéré, une étape par sprint :

1. **Préparer votre source** : `projects.json`, feuille Google ou base Airtable. Commencez par **un seul projet** complet dans le format commun, puis dupliquez-le quelques fois (voir l'encadré ci-dessous). Test `console.log(projects[0].title)` réussi.
2. **Générer les cartes** : `createProjectCard()` + `main.js`. Plus aucune carte écrite à la main dans le HTML.
3. **Le détail statique** : si votre modale ou votre `project.html` n'est pas encore intégré en HTML/CSS, codez-le d'abord avec **un projet écrit en dur**, comme vos autres composants.
4. **Brancher le détail sur les données** : modale ou `project.html?id=...`.

!!! tip "Un seul projet, dupliqué, avant de tout remplir"
    Vous allez probablement ajouter, renommer ou retirer des propriétés en construisant vos cartes et votre détail (« ah, il me faudrait aussi `tools`... »). Si vos 8 projets sont déjà remplis, chaque changement est à refaire 8 fois. Bâtissez d'abord **un** projet complet, dupliquez-le 3 ou 4 fois en changeant seulement l'`id` et le `title`, et remplissez le vrai contenu une fois votre structure stable.

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

- [ ] Votre **source de données** est créée (JSON local, Google Sheets ou Airtable), avec un projet complet dans le format commun, dupliqué quelques fois. Le vrai contenu viendra une fois la structure stable.
- [ ] Les **cartes de projets** de la page d'accueil sont générées en JavaScript à partir de cette source.
- [ ] Commits poussés sur GitHub, `JOURNAL.md` à jour.

**Idéalement** :

- [ ] Le **détail d'un projet** est intégré en HTML/CSS (modale ou `project.html`), d'abord avec un projet en dur si nécessaire.
- [ ] Puis branché sur les données (clic sur une carte → bon projet affiché).

!!! danger "La bêta, c'est dans une semaine"
    Mercredi prochain, on consacre le cours à la finition, à l'accessibilité et au déploiement. Arriver avec les cartes fonctionnelles, c'est la condition pour que la bêta du 2 octobre soit réaliste.
