# :material-code-json:  Du JSON aux chapitres : dans votre projet

<div class="class-content-link">
  <img src="../../assets/IA-restreinte.png">
  <span>Utilisation de l'IA restreinte : permise <strong>seulement pour créer vos médias</strong>. Le code, c'est vous! <a class="lien-details" href="index.html#ia">Détails</a></span>
</div>

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. La mécanique, vous la connaissez : [`fetch`](../../js/recap-js.md#async), [`forEach`](../../js/recap-js.md#foreach), [gabarit littéral](../../js/recap-js.md#gabarits), comme dans votre portfolio. Cette fois, ce sont **vos chapitres**.
2. **Ensemble**, sur un seul poste : le chargement dans `main.js`. Puis **chacun sur sa branche** : ses chapitres dans `data.json` et dans `createMedia()`.
3. Résultat : tous vos chapitres chargés depuis le JSON, et une *pull request* par personne.

</div>

!!! info "La *phase 2*{ .w5-phase .w5-phase-2 } : exigée à la bêta (~~ven. 20 nov.~~ **ven. 27 nov.**)"
    Vos chapitres passent du HTML statique (*phase 1*{ .w5-phase .w5-phase-1 }) à `data.json`. Votre chargement JSON fonctionne déjà? Gardez-le : vous êtes en avance.

[:material-file-tree: Arborescence du dépôt](arborescence-recit-defilant.md){ .md-button }

[:material-swap-horizontal: Passer du HTML statique au JSON](arborescence-recit-defilant.md#phase-2){ .md-button }

## Le chemin des données { #schema }

<div class="w5-schema-cadre" style="margin:1.5em 0;padding:1rem 1.2rem;background:var(--md-code-bg-color);border:1px solid var(--md-default-fg-color--lightest);border-radius:0.4rem;text-align:center">
<svg viewBox="0 0 780 230" width="100%" role="img" aria-label="Le chemin des données : data.json, chargé par loadChapters, parcouru avec forEach; createChapter construit chaque section, avec le média créé par le module du chapitre; les sections vont dans main id recit; puis animate du module de chaque chapitre" style="max-width:780px;font-family:inherit">
  <defs>
    <marker id="jc-fleche" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" fill="currentColor"/>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1.5">
    <rect x="5" y="40" width="130" height="56" rx="8"/>
    <rect x="165" y="40" width="140" height="56" rx="8" stroke="#FF2B47" stroke-width="2"/>
    <rect x="335" y="40" width="140" height="56" rx="8" stroke="#FF2B47" stroke-width="2"/>
    <rect x="505" y="40" width="120" height="56" rx="8"/>
    <rect x="655" y="40" width="120" height="56" rx="8" stroke="#FF2B47" stroke-width="2"/>
    <rect x="335" y="150" width="140" height="56" rx="8" stroke-dasharray="5 4"/>
    <rect x="655" y="150" width="120" height="56" rx="8" stroke-dasharray="5 4"/>
    <path d="M135 68 H161" marker-end="url(#jc-fleche)"/>
    <path d="M305 68 H331" marker-end="url(#jc-fleche)"/>
    <path d="M475 68 H501" marker-end="url(#jc-fleche)"/>
    <path d="M625 68 H651" marker-end="url(#jc-fleche)"/>
    <path d="M405 150 V100" marker-end="url(#jc-fleche)"/>
    <path d="M715 100 V146" marker-end="url(#jc-fleche)"/>
  </g>
  <g fill="currentColor" text-anchor="middle" font-size="14">
    <text x="390" y="22" font-size="12" opacity="0.7">en rouge : main.js, écrit ensemble sur main</text>
    <text x="70" y="65" font-weight="700">data.json</text>
    <text x="70" y="83" font-size="12" opacity="0.7">les chapitres</text>
    <text x="235" y="65" font-weight="700">loadChapters()</text>
    <text x="235" y="83" font-size="12" opacity="0.7">étapes 1 et 2</text>
    <text x="405" y="65" font-weight="700">createChapter()</text>
    <text x="405" y="83" font-size="12" opacity="0.7">étape 3</text>
    <text x="565" y="65" font-weight="700">#recit</text>
    <text x="565" y="83" font-size="12" opacity="0.7">étape 4</text>
    <text x="715" y="65" font-weight="700">animate()</text>
    <text x="715" y="83" font-size="12" opacity="0.7">étape 6</text>
    <text x="405" y="175" font-weight="700">createMedia()</text>
    <text x="405" y="193" font-size="12" opacity="0.7">étape 5 : ch-03.js</text>
    <text x="715" y="175" font-weight="700">vos animations</text>
    <text x="715" y="193" font-size="12" opacity="0.7">ch-03.js</text>
    <text x="555" y="225" font-size="12" opacity="0.7">en pointillé : le module de chaque chapitre, à chacun</text>
  </g>
</svg>
</div>

## Avant de commencer : la structure commune { #etape-0 }

Votre dépôt a déjà toute l'[arborescence](arborescence-recit-defilant.md) sur `main` (un fichier CSS et un fichier JS par chapitre), et une branche par personne? Passez à la suite.

??? note "Sinon : l'étape 0, ensemble, sur `main`"
    1. Créez tous les fichiers de [L'arborescence du dépôt](arborescence-recit-defilant.md), **même vides**, avec tous les `@import` et les `import` déjà écrits.
    2. Dans `index.html` : un `<main id="recit">`, et `main.js` chargé comme module (`type="module"`). Vos `<section>` statiques restent là jusqu'à l'étape 4.
    3. Dans `data/data.json` : **le squelette de tous vos chapitres**, dans l'ordre du récit. Un objet par chapitre, avec les clés communes (`id`, `numero`, `titre`, `responsable`, `texte`) et un `"contenu": {}` vide. Le format : [Les données : `data.json`](arborescence-recit-defilant.md#data-json). Vos autres idées du cahier de charges iront dans le `contenu`, au besoin.
    4. *Commit* `Commun : ajoute la structure de départ`, puis *push*.
    5. L'autre personne fait un *pull*. Puis chacun crée sa branche et la publie ([Git en équipe](git-en-equipe.md)).

    **Pourquoi le squelette d'abord?** Chacun remplira ensuite **ses** objets. Si chacun ajoute ses chapitres à la fin du fichier, vous modifiez les mêmes lignes : conflit garanti.

## Qui fait quoi { #qui-fait-quoi }

| | Personne A | Personne B |
|---|---|---|
| **1. Ensemble, un seul poste, sur `main`** | Au clavier, étapes 1 à 3 | Au clavier, étapes 4 à 6 |
| **2. Chacun, sur sa branche** | **Ses** chapitres dans les données | **Ses** chapitres dans les données |
| **3. À la fin** | Une *pull request* | Une *pull request* |

`main.js` est un fichier commun : on l'écrit ensemble, sinon c'est le conflit garanti. En alternant au clavier, **les deux** écrivent du code de chargement, et les deux devront l'expliquer. Celui qui n'est pas au clavier lit, propose et repère les erreurs.

## Partie 1 : ensemble, en 6 étapes { #ensemble }

C'est la même chose que l'[exercice « Du JSON à la carte »](../../exercices/ex-json-cartes/index.md) : gardez-le ouvert. **Vérifiez chaque étape** dans le navigateur avant de passer à la suivante.

| Étape | Vous codez | Vérification |
|---|---|---|
| **1. Charger** | `async loadChapters()` : va chercher `data/data.json` et retourne le tableau. Appelée dans `init()`. Voir [`fetch` et `async`](../../js/recap-js.md#async), [`init()`](../../js/recap-js.md#init). | `console.table()` : une ligne par chapitre |
| **2. Parcourir** | Avec [`forEach`](../../js/recap-js.md#foreach) : le numéro et le titre de chaque chapitre, dans la console. | Vos chapitres, dans l'ordre du récit |
| **3. Le HTML d'un chapitre** | `createChapter(chapter)` retourne une `<section>` : l'`id` du chapitre, un `<h2>`, un `<p>` par paragraphe de `texte`. Indice : [`map()` puis `join("")`](../../js/recap-js.md#map-join). | Le HTML du 1er chapitre, dans la console |
| **4. Dans la page** | Retirez vos `<section>` statiques : `<main id="recit">` est vide. Ajoutez-y le HTML de **chaque** chapitre. | Tous vos titres, dans l'ordre. Sans texte, un chapitre n'affiche que son titre : normal. |
| **5. Le média** | 2e paramètre de `createChapter` : le module du chapitre. Après les paragraphes : le HTML de `chapterModule.createMedia(chapter)`. | Vos médias réapparaissent |
| **6. Les animations** | À la fin de `init()` : la fonction `animate` du module de chaque chapitre, avec sa `<section>` et ses données. | Vos animations de la *phase 1*{ .w5-phase .w5-phase-1 } fonctionnent |

Le code des étapes 5 et 6 est fourni : [`main.js` dans l'arborescence](arborescence-recit-defilant.md#main-js).

!!! tip "Étape 5 : pourquoi le module du chapitre?"
    Chaque média est différent : une parallaxe, une spritesheet, une dataviz. C'est donc le module du chapitre qui le crée, pas `main.js`. Pour l'instant, chacun **copie le HTML de son média, tel quel**, depuis son ancienne `<section>`, dans le `return` de son `createMedia()`. Vous le relierez aux données à la partie 2.

!!! tip "Les animations se déclenchent au mauvais endroit?"
    ScrollTrigger calcule ses repères quand vous créez vos animations. Si la page change de hauteur après, ils sont décalés (activez `markers: true` pour le voir). Deux réflexes :

    - à la fin de `init()`, après les `animate()`, ajoutez `ScrollTrigger.refresh();`;
    - donnez un `width` et un `height` à vos `<img>` : la place est réservée avant le chargement.

Un chapitre n'a pas encore d'animation? Un `console.log("chapitre 3 prêt")` dans son `animate` suffit pour vérifier l'étape 6.

*Commit* `Commun : charge les chapitres depuis data.json`, puis *push*. L'autre personne fait un *pull*.

## Partie 2 : chacun ses chapitres { #chacun-ses-chapitres }

Sur **votre** branche, mise à jour avec `main` ([étape 5 de Git en équipe](git-en-equipe.md#etape-5)) :

1. **Le texte** : le vrai titre et les vrais paragraphes, dans **vos** objets de `data.json`.
2. **Le média** : dans `createMedia()`, ce qui vient des données devient `${...}` (les chemins des images, les textes alternatifs). Ces valeurs vont dans le `contenu` de votre chapitre. Le détail : [Passer à la *phase 2*{ .w5-phase .w5-phase-2 }](arborescence-recit-defilant.md#phase-2).
3. **Vérification** : vos chapitres s'affichent comme avant, et vos animations fonctionnent toujours.

## Les *pull requests* { #pull-requests }

1. *Commit* et *push* sur votre branche (ex. `Chapitre 3 : passe le texte et le média dans data.json`).
2. :material-github: Une *pull request* vers `main`, comme à la partie 4 de l'[exercice du conflit](../../exercices/ex-conflit-git/index.md).
3. La 2e PR est en conflit (des lignes voisines dans `data.json`)? Réglez-le **sur votre poste**, en mettant votre branche à jour avec `main` ([étape 5 de Git en équipe](git-en-equipe.md#etape-5)).
4. Chacun met ensuite sa branche à jour avec `main`.

**Résultat** : sur `main`, tous vos chapitres, chargés depuis `data.json`, avec leurs médias et leurs animations.

!!! danger "Live Server obligatoire"
    `fetch()` ne fonctionne pas si vous ouvrez `index.html` en double-cliquant (adresse `file:///...`). Il faut Live Server.
