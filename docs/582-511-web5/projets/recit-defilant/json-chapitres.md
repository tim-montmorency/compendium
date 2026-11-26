# **Récit défilant** :material-code-json:  Du JSON aux chapitres : dans votre projet

<div class="class-content-link">
  <img src="../../assets/IA-interdite.png">
  <span>L'utilisation de l'IA pour coder le projet Récit défilant est <strong>strictement interdite</strong>. Désactivez Copilot dans votre projet.</span>
</div>

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. La mécanique, vous la connaissez : [`fetch`](../../js/recap-js.md#async), [`forEach`](../../js/recap-js.md#foreach), [gabarit littéral](../../js/recap-js.md#gabarits), comme dans votre portfolio. Cette fois, ce sont **vos chapitres**.
2. :material-account-group-outline: **Ensemble**, sur un seul poste : le chargement dans `main.js`. Puis :material-account-outline: **chacun sur sa branche** : ses chapitres dans `data.json` et dans `createMedia()`.
3. Résultat : tous vos chapitres chargés depuis le JSON, et une *pull request* par personne.

</div>

!!! info "La *phase 2*{ .w5-phase .w5-phase-2 } : exigée à la bêta (~~ven. 20 nov.~~ **mer. 2 déc.**)"
    Vos chapitres passent du HTML statique (*phase 1*{ .w5-phase .w5-phase-1 }) à `data.json`. Votre chargement JSON fonctionne déjà? Gardez-le : vous êtes en avance.

[:material-file-tree: Arborescence et code de départ](arborescence-recit-defilant.md){ .md-button }

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
    <text x="405" y="193" font-size="12" opacity="0.7">étape 5 : texte, média</text>
    <text x="715" y="175" font-weight="700">vos animations</text>
    <text x="715" y="193" font-size="12" opacity="0.7">ch-03.js</text>
    <text x="555" y="225" font-size="12" opacity="0.7">en pointillé : le module de chaque chapitre, à chacun</text>
  </g>
</svg>
</div>

## :material-account-group-outline: Avant de commencer : la structure commune { #etape-0 }

Votre dépôt a déjà toute l'[arborescence](arborescence-recit-defilant.md) sur `main` (un fichier CSS et un fichier JS par chapitre), et une branche par personne? Passez à la suite.

??? note "Sinon : l'étape 0, ensemble, sur `main`"
    1. Créez tous les fichiers de [Arborescence et code de départ](arborescence-recit-defilant.md#arborescence), **même vides**, avec tous les `@import` et les `import` déjà écrits.
    2. Dans `index.html` : un `<main id="recit">`, et `main.js` chargé comme module (`type="module"`). Vos `<section>` statiques restent là jusqu'à l'étape 4.
    3. Dans `data/data.json` : **le squelette de tous vos chapitres**, dans l'ordre du récit. Un objet par chapitre, avec les propriétés communes (`id`, `numero`, `titre`, `responsable`, `texte`) et un `"contenu": {}` vide. Le format : [Les données : `data.json`](arborescence-recit-defilant.md#data-json). Vos autres idées du cahier de charges iront dans le `contenu`, au besoin.
    4. *Commit* `Commun : ajoute la structure de départ`, puis *push*.
    5. L'autre personne fait un *pull*. Puis chacun crée sa branche et la publie ([Git en équipe](git-en-equipe.md)).

    **Pourquoi le squelette d'abord?** Chacun remplira ensuite **ses** objets. Si chacun ajoute ses chapitres à la fin du fichier, vous modifiez les mêmes lignes : conflit garanti.

## Qui fait quoi { #qui-fait-quoi }

| | :material-account-outline: Personne A | :material-account-outline: Personne B |
|---|---|---|
| :material-account-group-outline: **1. Ensemble, en équipe, un seul poste, sur `main`** | Au clavier, étapes 1 à 3 | Au clavier, étapes 4 à 6 |
| :material-account-outline: **2. Chacun, sur sa branche** | **Ses** chapitres dans les données | **Ses** chapitres dans les données |
| **3. À la fin** | Une *pull request* | Une *pull request* |

`main.js` est un fichier commun : on l'écrit ensemble, en équipe, sinon c'est le conflit garanti. En alternant au clavier, **les deux** écrivent du code de chargement, et les deux devront l'expliquer. Celui qui n'est pas au clavier lit, propose et repère les erreurs.

## :material-account-group-outline: *Phase 2*{ .w5-phase .w5-phase-2 } Partie 1 : en équipe, en 6 étapes { #ensemble }

<div class="class-content-link">
  <img src="../../assets/IA-interdite.png">
  <span>L'utilisation de l'IA pour coder le projet Récit défilant est <strong>strictement interdite</strong>. Désactivez Copilot dans votre projet.</span>
</div>

C'est la même chose que l'[exercice « Du JSON à la carte »](../../exercices/ex-json-cartes/index.md) : gardez-le ouvert. **Vérifiez chaque étape** dans le navigateur avant de passer à la suivante.

Les étapes 1 à 6 se codent toutes dans **`js/main.js`**.

### 1. Charger les chapitres { #ensemble-1 }

- Dans `js/main.js`, codez la fonction `async loadChapters()`.
- Elle va chercher `data/data.json` et **retourne le tableau**.
- Appelez-la dans `init()`.
- Au besoin : [`fetch` et `async`](../../js/recap-js.md#async), [`init()`](../../js/recap-js.md#init).

*Vérification* : `console.table()` affiche une ligne par chapitre.

### 2. Parcourir les chapitres { #ensemble-2 }

- Dans `init()`, rangez le résultat de `loadChapters()` de l'étape précédente dans une constante `chapters`.
- Parcourez-la avec [`forEach`](../../js/recap-js.md#foreach).
- Pour chaque chapitre : son numéro et son titre, dans la console.

*Vérification* : vos chapitres, dans l'ordre du récit.

### 3. La structure HTML de base d'un chapitre (`<section>` et `<h2>`) { #ensemble-3 }

- Dans `js/main.js`, codez la fonction `createChapter(chapter)`.
- Elle retourne une `<section>`, avec l'`id` du chapitre.
- Dans la `<section>` : un `<h2>` avec le titre du chapitre.
- Pour tester, dans `init()` : `console.log(createChapter(chapters[0]))`.

*Vérification* : le HTML du 1er chapitre, dans la console.

### 4. Les chapitres dans la page { #ensemble-4 }

- **D'abord, la copie de sécurité** (voir l'encadré ci-dessous).
- Retirez vos `<section>` statiques : `<main id="recit">` est vide.
- Ajoutez-y le HTML de **chaque** chapitre.
- Dans `init()`, appelez `createChapter()` pour chaque chapitre avec `map()`, collez le tout avec `join("")`, puis placez-le dans `<main id="recit">` avec `innerHTML` ([Récap JS : `map()` et `join()`](../../js/recap-js.md#map-join)).

*Vérification* : tous vos titres, dans l'ordre. Le texte et les médias reviennent à l'étape 5.

??? danger "Copie de sécurité AVANT de retirer vos sections"
    Vos `<section>` statiques contiennent tout votre travail de la *phase 1*{ .w5-phase .w5-phase-1 } : à l'étape 5, chacun en aura besoin pour remplir son `createMedia()`. Avant de les retirer de `index.html` :

    1. Dans VS Code, clic droit sur `index.html`, **Copier**.
    2. Clic droit sur le dossier `documentation/`, **Coller**.
    3. Renommez la copie **`index-phase-1.html`**.
    4. *Commit* : `Commun : copie de sécurité de la phase 1`.

    Ensuite seulement, retirez les sections. Vous irez chercher votre HTML dans `documentation/index-phase-1.html`.

### 5. Le contenu : texte et médias { #ensemble-5 }

- Ajoutez un 2e paramètre à `createChapter` : le **module** du chapitre.
- Sous le `<h2>` : le HTML retourné par `chapterModule.createMedia(chapter)`.
- `createMedia()` retourne le texte **et** le média du chapitre.
- Le code est fourni : [`main.js`, dans Arborescence et code de départ](arborescence-recit-defilant.md#main-js).

*Vérification* : vos textes et vos médias réapparaissent.

??? tip "Pourquoi le module du chapitre?"
    Chaque chapitre est différent : un texte avant la parallaxe, un texte par plan, un titre qui s'écrit lettre par lettre. C'est donc le module du chapitre qui crée **son texte et son média**, pas `main.js`. Pour l'instant, chacun **copie tout ce qui suit le `<h2>`** de son ancienne `<section>`, dans `documentation/index-phase-1.html`, tel quel, dans le `return` de son `createMedia()`. Vous le relierez aux données à la partie 2.

### 6. Les animations { #ensemble-6 }

- À la fin de `init()`, appelez la fonction `animate` du module de chaque chapitre.
- Passez-lui sa `<section>` et ses données.
- Puis ajoutez `ScrollTrigger.refresh();` (voir l'encadré ci-dessous).
- Le code est fourni : [`main.js`, dans Arborescence et code de départ](arborescence-recit-defilant.md#main-js).

*Vérification* : vos animations de la *phase 1*{ .w5-phase .w5-phase-1 } fonctionnent.

??? warning "`ScrollTrigger.refresh()` à la fin de `init()`"
    ScrollTrigger calcule ses repères quand vous créez vos animations. Vos chapitres arrivent par `fetch()`, et la page change de hauteur après : sans recalcul, vos animations partent au mauvais endroit (activez `markers: true` pour le voir). Deux réflexes :

    - à la fin de `init()`, après les `animate()`, ajoutez `ScrollTrigger.refresh();`;
    - donnez un `width` et un `height` à vos `<img>` : la place est réservée avant le chargement.

    [Pourquoi, et comment le vérifier](../../js/gsap-scrolltrigger.md#refresh)

??? warning "DrawSVG, MorphSVG : le SVG doit être dans la page AVANT `animate()`"
    Ces extensions de GSAP animent les traits d'un SVG : le SVG doit être **dans le HTML** (pas dans une balise `<img>`), et déjà dans la page quand `animate()` s'exécute. Comme vos chapitres sont construits par JavaScript, il faut attendre.

    Comme dans la démo du Petit Chaperon rouge :

    - dans `createMedia()`, un conteneur vide qui indique le fichier : `<div class="loup" data-svg="medias/loup.svg"></div>`;
    - dans `main.js`, une fonction qui insère chaque SVG dans son conteneur;
    - dans `init()`, après le `innerHTML` et **avant** les `animate()` : `await injectSvg();`.

    ```js
    // js/main.js
    // Insère chaque fichier SVG dans la page,
    // pour que DrawSVG atteigne ses traits
    async function injectSvg() {
      const containers = document.querySelectorAll("[data-svg]");
      for (const container of containers) {
        const response = await fetch(container.dataset.svg);
        container.innerHTML = await response.text();
      }
    }
    ```

    [DrawSVG](../../js/gsap-drawsvg.md)

??? warning "SplitText, ScrambleText : dans `animate()`, et SplitText attend les polices"
    Le texte est déjà dans le HTML de `createMedia()` : il est dans la page quand `animate()` s'exécute. Deux précautions :

    - **appelez l'extension dans `animate()`**, jamais en haut du fichier du chapitre : ce code-là s'exécute à l'`import`, avant que le HTML existe;
    - **SplitText découpe en lignes** selon la largeur du texte. Si la police n'est pas encore chargée, les lignes sont mal coupées. Dans `init()`, avant les `animate()` : `await document.fonts.ready;`.

    [SplitText](../../js/gsap-splittext.md), [ScrambleText](../../js/gsap-scrambletext.md)

??? tip "Un chapitre n'a pas encore d'animation?"
    Un `console.log("chapitre 3 prêt")` dans son `animate` suffit pour vérifier l'étape 6.

### 7. Mise en commun Git { #ensemble-7 }

- *Commit* : `Commun : charge les chapitres depuis data.json`.
- *Push*.
- L'autre personne fait un *pull*.

## :material-account-outline: *Phase 2*{ .w5-phase .w5-phase-2 } Partie 2 : chacun ses chapitres { #chacun-ses-chapitres }

<div class="class-content-link">
  <img src="../../assets/IA-interdite.png">
  <span>L'utilisation de l'IA pour coder le projet Récit défilant est <strong>strictement interdite</strong>. Désactivez Copilot dans votre projet.</span>
</div>

Sur **votre** branche, mise à jour avec `main` ([étape 5 de Git en équipe](git-en-equipe.md#etape-5)) :

- [ ] **Le texte** : le vrai titre, et le vrai texte de **vos** chapitres dans `data.json`. Votre `createMedia()` le lit et construit le HTML **dans l'ordre dont votre chapitre a besoin** : c'est la structure de votre JSON qui décide. Un chapitre simple? Le tableau `texte`, avec [`map()` puis `join("")`](../../js/recap-js.md#map-join). Texte et images en alternance? Une liste de blocs dans votre `contenu` : voir [Texte et médias en alternance](arborescence-recit-defilant.md#alternance).
- [ ] **Le média** : dans `createMedia()`, ce qui vient des données devient `${...}` (les chemins des images, les textes alternatifs). Ces valeurs vont dans le `contenu` de votre chapitre. Le détail : [Passer à la *phase 2*{ .w5-phase .w5-phase-2 }](arborescence-recit-defilant.md#phase-2).
- [ ] **Vérification** : vos chapitres s'affichent comme avant, et vos animations fonctionnent toujours.

## :material-account-outline: Les pull requests { #pull-requests }

1. *Commit* et *push* sur votre branche (ex. `Chapitre 3 : passe le texte et le média dans data.json`).
2. :material-github: Une *pull request* vers `main`, comme à la partie 4 de l'[exercice du conflit](../../exercices/ex-conflit-git/index.md).
3. La 2e PR est en conflit (des lignes voisines dans `data.json`)? Réglez-le **sur votre poste**, en mettant votre branche à jour avec `main` ([étape 5 de Git en équipe](git-en-equipe.md#etape-5)).
4. Chacun met ensuite sa branche à jour avec `main`.

**Résultat** : sur `main`, tous vos chapitres, chargés depuis `data.json`, avec leurs médias et leurs animations.

!!! danger "Live Server obligatoire"
    `fetch()` ne fonctionne pas si vous ouvrez `index.html` en double-cliquant (adresse `file:///...`). Il faut Live Server.
