# :material-sitemap-outline:  Le récit en un coup d'œil

## La "big picture" { #big-picture }

À la *phase 2*{ .w5-phase .w5-phase-2 }, quand tout est en place.

<div class="w5-schema-cadre" style="margin:1.5em 0;padding:1rem 1.2rem;background:var(--md-code-bg-color);border:1px solid var(--md-default-fg-color--lightest);border-radius:0.4rem;text-align:center">
<svg viewBox="0 0 960 600" width="100%" role="img" aria-label="Vue d'ensemble du récit défilant : main.js charge data.json, construit les chapitres dans main id recit, le texte et le média venant du createMedia de chaque module, puis appelle animate de chaque module de chapitre et branche les deux composants Vue; le chapitre dataviz appelle une API externe; index.html contient les trois zones; style.css importe les autres feuilles" style="max-width:960px;font-family:inherit">
  <defs>
    <marker id="ve-f" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" fill="currentColor"/>
    </marker>
  </defs>

  <!-- Les boîtes -->
  <g fill="none" stroke="currentColor" stroke-width="1.5">
    <!-- données -->
    <rect x="10" y="70" width="170" height="70" rx="8" stroke="#FF2B47" stroke-width="2"/>
    <rect x="10" y="400" width="170" height="70" rx="8" stroke-dasharray="2 4"/>
    <!-- main.js -->
    <rect x="250" y="40" width="230" height="200" rx="8" stroke="#FF2B47" stroke-width="2"/>
    <!-- modules des chapitres -->
    <rect x="250" y="320" width="230" height="200" rx="8" stroke-dasharray="6 4"/>
    <!-- Vue -->
    <rect x="550" y="40" width="170" height="70" rx="8" stroke-dasharray="6 4"/>
    <rect x="550" y="130" width="170" height="70" rx="8" stroke-dasharray="6 4"/>
    <!-- index.html -->
    <rect x="760" y="20" width="190" height="440" rx="8" stroke="#FF2B47" stroke-width="2"/>
    <rect x="772" y="60" width="166" height="34" rx="5"/>
    <rect x="772" y="104" width="166" height="34" rx="5"/>
    <rect x="772" y="190" width="166" height="255" rx="5"/>
    <rect x="786" y="225" width="138" height="44" rx="4" stroke-dasharray="6 4"/>
    <rect x="786" y="279" width="138" height="44" rx="4" stroke-dasharray="6 4"/>
    <rect x="786" y="333" width="138" height="44" rx="4" stroke-dasharray="6 4"/>
    <!-- CSS et CDN -->
    <rect x="550" y="490" width="400" height="90" rx="8"/>
  </g>

  <!-- Les flèches -->
  <g fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M180 105 H246" marker-end="url(#ve-f)"/>
    <path d="M480 75 H546" marker-end="url(#ve-f)"/>
    <path d="M480 165 H546" marker-end="url(#ve-f)"/>
    <path d="M720 77 H768" marker-end="url(#ve-f)"/>
    <path d="M720 165 C745 165 745 121 768 121" marker-end="url(#ve-f)"/>
    <path d="M480 220 H740 V207 H768" marker-end="url(#ve-f)"/>
    <path d="M365 240 V316" marker-end="url(#ve-f)"/>
    <path d="M480 400 H782" marker-end="url(#ve-f)"/>
    <path d="M250 435 H184" marker-end="url(#ve-f)"/>
  </g>

  <g fill="currentColor" font-size="13">
    <!-- données -->
    <text x="95" y="100" text-anchor="middle" font-weight="700" font-size="15">data/data.json</text>
    <text x="95" y="120" text-anchor="middle" opacity="0.75">les chapitres</text>
    <text x="95" y="430" text-anchor="middle" font-weight="700" font-size="15">API externe</text>
    <text x="95" y="450" text-anchor="middle" opacity="0.75">les vraies données</text>
    <text x="213" y="96" text-anchor="middle" font-size="11" opacity="0.75">fetch()</text>

    <!-- main.js -->
    <text x="265" y="66" font-weight="700" font-size="15">js/main.js</text>
    <text x="265" y="94" font-family="monospace">init()</text>
    <text x="265" y="116" font-family="monospace">loadChapters()</text>
    <text x="265" y="138" font-family="monospace">createChapter()</text>
    <text x="265" y="168" opacity="0.75">importe tous les modules,</text>
    <text x="265" y="186" opacity="0.75">puis appelle, dans l'ordre :</text>
    <text x="265" y="206" opacity="0.75">construire, animer, brancher</text>

    <!-- modules -->
    <text x="265" y="346" font-weight="700" font-size="15">js/chapitres/ch-03.js</text>
    <text x="265" y="364" opacity="0.75">son texte et son média</text>
    <text x="265" y="392" font-family="monospace">createMedia(chapter)</text>
    <text x="265" y="414" font-family="monospace">animate(section, chapter)</text>
    <text x="265" y="442" opacity="0.75">GSAP, ScrollTrigger,</text>
    <text x="265" y="460" opacity="0.75">IntersectionObserver</text>
    <text x="265" y="488" opacity="0.75">le chapitre dataviz :</text>
    <text x="265" y="506" opacity="0.75">son fetch() vers l'API</text>
    <text x="373" y="285" font-size="11" opacity="0.75">createMedia(),</text>
    <text x="373" y="300" font-size="11" opacity="0.75">puis animate()</text>
    <text x="217" y="426" text-anchor="middle" font-size="11" opacity="0.75">fetch()</text>

    <!-- Vue -->
    <text x="565" y="70" font-weight="700" font-size="15">js/navigation.js</text>
    <text x="565" y="92" font-family="monospace" font-size="12">createNavigation()</text>
    <text x="565" y="160" font-weight="700" font-size="15">js/progression.js</text>
    <text x="565" y="182" font-family="monospace" font-size="12">createProgressBar()</text>
    <text x="635" y="30" text-anchor="middle" font-size="12" opacity="0.75">Vue.js : un composant par personne</text>

    <!-- index.html -->
    <text x="775" y="46" font-weight="700" font-size="15">index.html</text>
    <text x="784" y="82" font-family="monospace" font-size="12">#navigation</text>
    <text x="784" y="126" font-family="monospace" font-size="12">#barre-progression</text>
    <text x="784" y="214" font-family="monospace" font-size="12">&lt;main id="recit"&gt;</text>
    <text x="855" y="252" text-anchor="middle" font-size="12">&lt;section&gt; ch. 1</text>
    <text x="855" y="306" text-anchor="middle" font-size="12">&lt;section&gt; ch. 2</text>
    <text x="855" y="360" text-anchor="middle" font-size="12">&lt;section&gt; ch. 3</text>
    <text x="855" y="410" text-anchor="middle" font-size="12">...</text>
    <text x="610" y="212" text-anchor="middle" font-size="11" opacity="0.75">innerHTML</text>
    <text x="640" y="392" text-anchor="middle" font-size="11" opacity="0.75">chaque module anime sa section</text>

    <!-- CSS et CDN -->
    <text x="565" y="516" font-weight="700" font-size="14">css/style.css</text>
    <text x="565" y="536" opacity="0.75">importe commun.css et chapitres/ch-03.css</text>
    <text x="565" y="562" font-weight="700" font-size="14">GSAP et Vue, par CDN</text>
    <text x="745" y="562" opacity="0.75">dans index.html, avant main.js</text>

    <!-- légende -->
    <rect x="10" y="545" width="26" height="14" rx="3" fill="none" stroke="#FF2B47" stroke-width="2"/>
    <text x="44" y="557" font-size="12">commun : toute l'équipe</text>
    <rect x="10" y="570" width="26" height="14" rx="3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/>
    <text x="44" y="582" font-size="12">à une personne : son chapitre, son composant</text>
  </g>
</svg>
</div>

## Dans quel ordre? { #ordre }

Au chargement de la page :

1. `index.html` charge **GSAP et Vue** (par CDN), puis `main.js`.
2. `init()` appelle `loadChapters()`, qui va chercher `data.json`.
3. `createChapter()` construit chaque `<section>` et son `<h2>`. Sous le titre, le `createMedia()` du chapitre ajoute **son texte et son média**. Le tout va dans `<main id="recit">`.
4. Le `animate()` de **chaque** module : GSAP, ScrollTrigger, IntersectionObserver.
5. `createNavigation(chapters)` et `createProgressBar()` : les composants Vue démarrent.
6. `ScrollTrigger.refresh()` : les repères sont recalculés, maintenant que la page est complète.

Puis, **au défilement** : ScrollTrigger anime, IntersectionObserver lance le `fetch()` de la dataviz quand le visiteur approche, et Vue met à jour le chapitre actif et la barre.

!!! info "À la *phase 1*{ .w5-phase .w5-phase-1 }"
    Les `<section>` sont écrites dans `index.html` : pas de `data.json`, pas de `createChapter()`. `main.js` appelle seulement le `animate()` de chaque module, et donne aux composants Vue la liste des chapitres lue dans le HTML. Les modules, eux, ne changent pas d'une phase à l'autre.

## Chaque pièce, sa page { #pieces }

| Pièce | Son rôle | À qui | La référence |
|---|---|---|---|
| `index.html` | La page : les zones `#navigation`, `#barre-progression` et `<main id="recit">`, les balises de GSAP et de Vue, puis `main.js`. | L'équipe | [Le HTML](arborescence-recit-defilant.md#html-phase-2) |
| `data/data.json` | Les chapitres : les clés communes (`id`, `titre`, `texte`...) et le `contenu` de chacun. | Clés communes : l'équipe. `contenu` : le responsable du chapitre. | [Les données](arborescence-recit-defilant.md#data-json) |
| `js/main.js` | Charge, construit, puis appelle les modules et les composants. | L'équipe, écrit ensemble | [Du JSON aux chapitres](json-chapitres.md) |
| `js/chapitres/ch-03.js` | Le texte et le média (`createMedia`), et leurs animations (`animate`), d'**un** chapitre. | Le responsable du chapitre | [Le fichier d'un chapitre](arborescence-recit-defilant.md#fichier-chapitre) |
| La dataviz | Dans le module de son chapitre : IntersectionObserver, `fetch()` vers l'API, puis la forme qui se révèle. | Le responsable de la dataviz | [La dataviz](dataviz.md), [Choisir et tester votre API](dataviz.md#api) |
| `js/navigation.js` | Composant Vue : la liste des chapitres, le chapitre actif. | Une personne | [Le navigateur](composant-vue.md#js-navigation) |
| `js/progression.js` | Composant Vue : la barre de progression. | L'autre personne | [La barre](composant-vue.md#js-progression) |
| `css/style.css` | Importe `commun.css` (l'équipe) et le CSS de chaque chapitre (`ch-03.css`, son responsable). | L'équipe | [Arborescence et code de départ](arborescence-recit-defilant.md#css) |

[:material-file-tree: Arborescence et code de départ](arborescence-recit-defilant.md){ .md-button .md-button--primary }

[:material-book-open-page-variant-outline: Les consignes complètes](index.md){ .md-button }
