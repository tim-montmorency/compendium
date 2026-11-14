# :material-code-json:  Du JSON aux chapitres : dans votre projet

<div class="class-content-link">
  <img src="../../assets/IA-restreinte.png">
  <span>Utilisation de l'IA restreinte : permise <strong>seulement pour créer vos médias</strong>. Le code, c'est vous! <a class="lien-details" href="index.html#ia">Détails</a></span>
</div>

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. Vous connaissez déjà la mécanique : [`fetch`](../../js/recap-js.md#async), [`forEach`](../../js/recap-js.md#foreach), [gabarit littéral](../../js/recap-js.md#gabarits). Vous l'avez utilisée pour les projets de votre portfolio. Cette fois, ce sont **vos chapitres**, dans **votre récit**.
2. Deux parties : **ensemble**, sur un seul poste, vous codez le chargement des chapitres dans `main.js`, en alternant au clavier. Puis **chacun, sur sa branche**, passe **ses** chapitres dans `data.json` et dans `createMedia()`.
3. À la fin, votre page affiche tous vos chapitres, chargés depuis le JSON, et chacun a sa *pull request*.

</div>

!!! info "C'est la *phase 2*{ .w5-phase .w5-phase-2 } : intégration dynamique"
    Votre récit se construit [en deux phases](arborescence-recit-defilant.md#deux-phases). Commencez par vos chapitres **en HTML statique**, animés : c'est la *phase 1*{ .w5-phase .w5-phase-1 }, l'intégration statique, du 6 au ~~13~~ 18 nov., acceptée jusqu'au prototype (~~ven. 13 nov.~~ mer. 18 nov.). Cette page, c'est la **phase 2**, l'intégration dynamique : les chapitres construits depuis `data.json`, du ~~13 au 20 nov.~~ 18 nov. à la bêta, **exigés à la bêta** (~~ven. 20 nov.~~ **ven. 27 nov.**).

    Votre chargement JSON fonctionne déjà? Gardez-le : vous êtes en avance.

[:material-file-tree: Arborescence du dépôt](arborescence-recit-defilant.md){ .md-button }

[:material-swap-horizontal: Passer du HTML statique au JSON](arborescence-recit-defilant.md#phase-2){ .md-button }

## Étape 0 : la structure commune (si ce n'est pas déjà fait)

**Votre dépôt a déjà toute l'[arborescence du projet](arborescence-recit-defilant.md) sur `main` (avec un fichier CSS et un fichier JS par chapitre), et une branche par personne?** Passez à l'étape 1.

Sinon, **ensemble, sur un seul poste**, sur `main` :

1. Créez tous les fichiers décrits dans [L'arborescence du dépôt](arborescence-recit-defilant.md) : les fichiers communs, et **un fichier CSS et un fichier JS par chapitre, même vides**, avec tous les `@import` et les `import` déjà écrits.
2. Dans `index.html`, un `<main id="recit">` et `main.js` chargé comme module (`type="module"`) : le code est fourni dans la page de l'arborescence. Si vous venez de la *phase 1*{ .w5-phase .w5-phase-1 }, vos `<section>` statiques y sont encore : vous les retirerez à l'étape 4.
3. Dans `data/data.json`, **le squelette de tous vos chapitres**, dans l'ordre du récit : un objet par chapitre, avec les **clés communes** (`id`, `numero`, `titre`, `responsable`, `texte`) et un **`"contenu": {}`** vide. Le format est expliqué dans [Les données : `data.json`](arborescence-recit-defilant.md#data-json).

    Votre section 5 du cahier de charges prévoyait un autre format? Pas de problème : gardez les clés communes ci-dessus, et rangez vos autres idées (médias, calques, plans...) dans le `contenu` de chaque chapitre, à mesure que vous en aurez besoin.

4. *Commit* (`Commun : ajoute la structure de départ`), puis *push*.
5. L'autre personne fait un *pull*. Puis **chacun crée sa branche** et la publie (voir [Git en équipe](git-en-equipe.md)).

Pourquoi le squelette d'abord? Parce que chacun remplira ensuite **ses** objets, et son `contenu`. Si chacun ajoute ses chapitres à la fin du fichier, vous modifiez les mêmes lignes : le conflit est garanti.

## Qui fait quoi { #qui-fait-quoi }

| | Personne A | Personne B |
|---|---|---|
| **1. Ensemble, un seul poste, sur `main`** | Au clavier pour les étapes 1 à 3 : charger, parcourir, le HTML d'un chapitre | Au clavier pour les étapes 4 à 6 : tous les chapitres dans la page, le média, `animate()` |
| **2. Chacun, sur sa branche** | Passe **ses** chapitres dans les données (voir [plus bas](#chacun-ses-chapitres)) | Passe **ses** chapitres dans les données |
| **3. À la fin** | Une *pull request* vers `main` | Une *pull request* vers `main` |

Pourquoi ensemble pour `main.js`? C'est un fichier commun : si chacun en écrit un bout sur sa branche, le conflit est garanti. Et en alternant au clavier, **les deux** écrivent du code de chargement, et les deux doivent pouvoir l'expliquer. Celui qui n'est pas au clavier n'est pas spectateur : il lit, propose, et repère les erreurs.

## Partie 1 : les étapes, ensemble { #ensemble }

Vous avez fait la même chose dans l'[exercice « Du JSON à la carte »](../../exercices/ex-json-cartes/index.md) : gardez-le ouvert, et transposez. Chaque étape se vérifie dans le navigateur (Live Server) avant de passer à la suivante.

### Étape 1 : charger les chapitres

Une fonction `async loadChapters()` qui va chercher `data/data.json` et retourne le tableau. Appelez-la dans une fonction `init()`. Au besoin : [Récap JS : `fetch` et `async` / `await`](../../js/recap-js.md#async), et [Récap JS : `init()`](../../js/recap-js.md#init).

**Vérification** : `console.table()` affiche une ligne par chapitre.

### Étape 2 : parcourir les chapitres

Avec [`forEach`](../../js/recap-js.md#foreach), affichez dans la console le numéro et le titre de chaque chapitre.

**Vérification** : le numéro et le titre de chacun de vos chapitres, dans l'ordre du récit.

### Étape 3 : le HTML d'un chapitre

Une fonction `createChapter(chapter)` qui retourne, avec un [gabarit littéral](../../js/recap-js.md#gabarits), une `<section>` :

- avec l'`id` du chapitre comme `id` HTML;
- un titre `<h2>`;
- un `<p>` par paragraphe du tableau `texte`. Indice : `map()` puis `join("")` (voir [Récap JS : `map()` et `join()`](../../js/recap-js.md#map-join)).

**Vérification** : affichez dans la console le HTML du premier chapitre.

### Étape 4 : tous les chapitres dans la page

Retirez vos `<section>` statiques de `index.html` : `<main id="recit">` est maintenant vide. Puis ajoutez-y le HTML de **chaque** chapitre, construit par `createChapter`.

**Vérification** : tous vos titres apparaissent dans la page, dans l'ordre du récit. Si un chapitre n'a pas encore de texte, il n'affiche que son titre : c'est normal.

### Étape 5 : le média, créé par chaque chapitre

Le média de chaque chapitre est différent : une parallaxe, une spritesheet, une dataviz. C'est donc le module du chapitre qui le crée, avec sa fonction `createMedia`, et non `main.js`.

Ajoutez un deuxième paramètre à `createChapter` : le module du chapitre. Puis, dans la `<section>`, après les paragraphes, ajoutez le HTML retourné par `chapterModule.createMedia(chapter)`. Le code est fourni dans [L'arborescence du dépôt](arborescence-recit-defilant.md#main-js).

**Pour que la page continue de fonctionner** : chacun copie le HTML du média de **ses** chapitres, tel quel, depuis son ancienne `<section>`, dans le `return` de son `createMedia()`. Vous le relierez aux données à la partie 2.

**Vérification** : vos médias réapparaissent sous les paragraphes de chaque chapitre.

### Étape 6 : brancher les fichiers des chapitres

À la fin de `init()`, une fois tout le HTML dans la page, appelez la fonction `animate` du module de chaque chapitre, avec sa `<section>` et ses données. Le code est fourni dans [L'arborescence du dépôt](arborescence-recit-defilant.md#main-js).

**Vérification** : les animations que vous aviez à la *phase 1*{ .w5-phase .w5-phase-1 } fonctionnent de nouveau. Un chapitre n'a pas encore d'animation? Ajoutez temporairement un `console.log("chapitre 3 prêt")` dans son `animate` : le message apparaît dans la console.

!!! tip "Les animations se déclenchent au mauvais endroit?"
    ScrollTrigger calcule ses repères quand vous créez vos animations. Vos chapitres arrivent maintenant par `fetch()` : si la page change de hauteur après, les repères sont décalés (activez `markers: true` pour le voir). Deux réflexes :

    - à la fin de `init()`, après les `animate()`, ajoutez `ScrollTrigger.refresh();` : ScrollTrigger recalcule tous ses repères;
    - donnez un `width` et un `height` à vos `<img>` : la place est réservée avant le chargement, la page ne bouge plus.

*Commit* (`Commun : charge les chapitres depuis data.json`), puis *push*. L'autre personne fait un *pull*.

## Partie 2 : chacun ses chapitres { #chacun-ses-chapitres }

**Chacun sur sa branche**, après l'avoir mise à jour avec `main` ([étape 5 de Git en équipe](git-en-equipe.md#etape-5)) :

1. **Le texte** : le vrai titre et les vrais paragraphes de vos chapitres, dans **vos** objets de `data.json`.
2. **Le média** : dans `createMedia()`, remplacez ce qui vient des données par `${...}` (les chemins des images, les textes alternatifs), et rangez ces valeurs dans le `contenu` de votre chapitre. Le détail : [Passer à la *phase 2*{ .w5-phase .w5-phase-2 }](arborescence-recit-defilant.md#phase-2).
3. **Vérification** : vos chapitres s'affichent comme avant, et vos animations fonctionnent toujours.

## Les *pull requests* { #pull-requests }

1. Chacun fait un *commit* et un *push* sur sa branche (ex. `Chapitre 3 : passe le texte et le média dans data.json`).
2. :material-github: Chacun ouvre une *pull request* vers `main`, comme à la partie 4 de l'[exercice du conflit](../../exercices/ex-conflit-git/index.md).
3. La première PR passe. Pour la deuxième, si GitHub signale un conflit (vous avez touché à des lignes voisines de `data.json`) : réglez-le **sur votre poste**, en mettant votre branche à jour avec `main` ([étape 5 de Git en équipe](git-en-equipe.md#etape-5)).
4. Chacun met ensuite sa branche à jour avec `main`.

**Résultat** : sur `main`, la page affiche tous vos chapitres, chargés depuis `data.json`, avec leurs médias et leurs animations.

!!! danger "Live Server obligatoire"
    `fetch()` ne fonctionne pas si vous ouvrez `index.html` en double-cliquant (adresse `file:///...`). Il faut Live Server.
