# :material-code-json:  Du JSON aux chapitres : dans votre projet

<div class="class-content-link">
  <img src="../../assets/IA-restreinte.png">
  <span class="sidetext">Utilisation de l'IA restreinte : permise <strong>seulement pour créer vos médias</strong>. Le code, c'est vous! <a class="lien-details" href="index.html#ia">Détails</a></span>
</div>

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. Vous connaissez déjà la mécanique : `fetch`, `forEach`, gabarit littéral. Vous l'avez utilisée pour les projets de votre portfolio. Cette fois, ce sont **vos chapitres**, dans **votre récit**.
2. On avance en équipe : la **structure commune** sur `main`, puis **une personne** code le chargement des chapitres sur sa branche pendant que **l'autre** remplit ses chapitres dans `data.json`.
3. À la fin, votre page affiche tous vos chapitres, chargés depuis le JSON, et votre premier vrai conflit est peut-être réglé.

</div>

[:material-file-tree: Arborescence du dépôt](arborescence-recit-defilant.md){ .md-button }

## Étape 0 : la structure commune (si ce n'est pas déjà fait)

**Votre dépôt a déjà toute l'[arborescence du projet](arborescence-recit-defilant.md) sur `main` (avec un fichier CSS et un fichier JS par chapitre), et une branche par personne?** Passez à l'étape 1.

Sinon, **ensemble, sur un seul poste**, sur `main` :

1. Créez tous les fichiers décrits dans [L'arborescence du dépôt](arborescence-recit-defilant.md) : les fichiers communs, et **un fichier CSS et un fichier JS par chapitre, même vides**, avec tous les `@import` et les `import` déjà écrits.
2. Dans `index.html`, un `<main id="recit"></main>` vide, et `main.js` chargé comme module (`type="module"`) : le code est fourni dans la page de l'arborescence.
3. Dans `data/data.json`, **le squelette de tous vos chapitres**, dans l'ordre du récit : un objet par chapitre, avec les **clés communes** (`id`, `numero`, `titre`, `responsable`, `texte`) et un **`"contenu": {}`** vide. Le format est expliqué dans [Les données : `data.json`](arborescence-recit-defilant.md#data-json).

    Votre section 5 du cahier de charges prévoyait un autre format? Pas de problème : gardez les clés communes ci-dessus, et rangez vos autres idées (médias, calques, plans...) dans le `contenu` de chaque chapitre, à mesure que vous en aurez besoin.

4. *Commit* (`Commun : ajoute la structure de départ`), puis *push*.
5. L'autre personne fait un *pull*. Puis **chacun crée sa branche** et la publie (voir [Git en équipe](git-en-equipe.md)).

Pourquoi le squelette d'abord? Parce que chacun remplira ensuite **ses** objets, et son `contenu`. Si chacun ajoute ses chapitres à la fin du fichier, vous modifiez les mêmes lignes : le conflit est garanti.

## Qui fait quoi

| | Personne A | Personne B |
|---|---|---|
| Sur sa branche | Le code : les étapes 1 à 6 dans `js/main.js` | Le texte de **ses** chapitres dans `data.json` (des paragraphes de *lorem ipsum* suffisent pour l'instant) |
| À la fin | Une *pull request* vers `main` | Une *pull request* vers `main` |

Puis vous inversez pour la suite : B remplira aussi ses chapitres, A les siens.

## Les étapes, pour la personne A

Vous avez fait la même chose dans l'[exercice « Du JSON à la carte »](../../exercices/ex-json-cartes/index.md) : gardez-le ouvert, et transposez. Chaque étape se vérifie dans le navigateur (Live Server) avant de passer à la suivante.

### Étape 1 : charger les chapitres

Une fonction `async loadChapters()` qui va chercher `data/data.json` et retourne le tableau. Appelez-la dans une fonction `init()`.

**Vérification** : `console.table()` affiche une ligne par chapitre.

### Étape 2 : parcourir les chapitres

Avec `forEach`, affichez dans la console le numéro et le titre de chaque chapitre.

**Vérification** : le numéro et le titre de chacun de vos chapitres, dans l'ordre du récit.

### Étape 3 : le HTML d'un chapitre

Une fonction `createChapter(chapter)` qui retourne, avec un gabarit littéral, une `<section>` :

- avec l'`id` du chapitre comme `id` HTML;
- un titre `<h2>`;
- un `<p>` par paragraphe du tableau `texte`. Indice : `map()` puis `join("")`.

**Vérification** : affichez dans la console le HTML du premier chapitre.

### Étape 4 : tous les chapitres dans la page

Ajoutez le HTML de **chaque** chapitre dans `<main id="recit">`.

**Vérification** : tous vos titres apparaissent dans la page, dans l'ordre du récit. Si un chapitre n'a pas encore de texte, il n'affiche que son titre : c'est normal.

### Étape 5 : le média, créé par chaque chapitre

Le média de chaque chapitre est différent : une parallaxe, une spritesheet, une dataviz. C'est donc le module du chapitre qui le crée, avec sa fonction `createMedia`, et non `main.js`.

Ajoutez un deuxième paramètre à `createChapter` : le module du chapitre. Puis, dans la `<section>`, après les paragraphes, ajoutez le HTML retourné par `chapterModule.createMedia(chapter)`. Le code est fourni dans [L'arborescence du dépôt](arborescence-recit-defilant.md#main-js).

**Vérification** : dans `ch-03.js`, faites retourner temporairement `<p>Média du chapitre 3</p>` à `createMedia`. Le texte apparaît sous les paragraphes du chapitre 3.

### Étape 6 : brancher les fichiers des chapitres

À la fin de `init()`, une fois tout le HTML dans la page, appelez la fonction `animate` du module de chaque chapitre, avec sa `<section>` et ses données. Le code est fourni dans [L'arborescence du dépôt](arborescence-recit-defilant.md#main-js).

**Vérification** : ajoutez temporairement un `console.log("chapitre 3 prêt")` dans `animate` de `ch-03.js`. Le message apparaît dans la console.

## Les *pull requests*

1. Chacun fait un *commit* et un *push* sur sa branche (ex. `Données : remplit les chapitres 3 et 4`, `Commun : charge les chapitres avec fetch`).
2. :material-github: Chacun ouvre une *pull request* vers `main`, comme à la partie 4 de l'[exercice du conflit](../../exercices/ex-conflit-git/index.md).
3. La première PR passe. Pour la deuxième, si GitHub signale un conflit : réglez-le **sur votre poste**, en mettant votre branche à jour avec `main` ([étape 5 de Git en équipe](git-en-equipe.md#etape-5)).
4. Chacun met ensuite sa branche à jour avec `main`.

**Résultat** : sur `main`, la page affiche vos chapitres, chargés depuis `data.json`, avec les textes de B.

!!! danger "Live Server obligatoire"
    `fetch()` ne fonctionne pas si vous ouvrez `index.html` en double-cliquant (adresse `file:///...`). Il faut Live Server.
