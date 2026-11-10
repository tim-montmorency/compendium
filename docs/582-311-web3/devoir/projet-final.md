---
tags:
  - Projet
---

[:material-arrow-u-left-top: Cours 11](../cours11.md){.breadcrumb}

# Projet final - Microsite de lancement

Le projet final est l'**épreuve intégratrice** du cours. Il réunit tout ce qui a été vu depuis l'examen&nbsp;: Vite et npm, médias optimisés, GSAP, contrôle des médias par programmation, 3D et sauvegarde côté client. La mise en page, elle, repose sur les acquis du bloc 1 (Tailwind et DaisyUI).

Vous réalisez le **microsite de lancement d'un jeu vidéo**&nbsp;: un petit site de **trois pages** qui donne envie de jouer, dont les médias (logo, captures, vidéo, musique, effets sonores) sont la matière première.

Il vaut **50 % de la note de session**.

!!! abstract "Objectif intégrateur"

    Programmer l'interface audiovisuelle d'un site Web à l'aide de **librairies** et d'un **cadriciel**.

## Le calendrier

| Cours | Ce qui se passe |
| :--: | --- |
| **11** | Présentation de l'énoncé · choix du volet · collecte des médias |
| **12** | Plan du site (contenu de chaque page) et **maquette de l'accueil** · 3D et `localStorage`, utiles au projet |
| **13** | Atelier encadré&nbsp;: intégration, médias, animations, formulaire EmailJS |
| **14** | Atelier encadré&nbsp;: gel des fonctionnalités, validation, mise en ligne, préparation de l'oral |
| **15** | **Remise et présentation orale** |

## Deux volets, un même barème

=== "Volet A - Mon jeu (par défaut)"

    Microsite du **jeu que vous développez en Interactivité ludique**. Les médias du jeu sont réutilisés&nbsp;: logo, captures d'écran, personnages, trame sonore et effets sonores 🎮.

    **Exigence propre au volet**&nbsp;: le bouton d'appel à l'action de l'accueil mène à la **page itch.io du jeu** (build WebGL publié en Interactivité ludique).

    **Vidéo**&nbsp;: elle est captée dans votre propre jeu (Unity Recorder ou OBS).

    !!! info "Un projet, deux cours"

        Le **jeu** est évalué en Interactivité ludique. Ici, c'est le **microsite** qui est évalué&nbsp;: son intégration, ses médias, ses animations et sa mise en ligne.

=== "Volet B - Un jeu existant ou fictif"

    Pour les étudiants qui ne suivent pas Interactivité ludique. Microsite d'un **jeu existant** (sortie récente ou à venir) ou d'un **jeu fictif** inventé pour l'occasion.

    **Exigence propre au volet**&nbsp;: le bouton d'appel à l'action de l'accueil mène à la **page officielle du jeu** ou à sa boutique (itch.io, Steam…). Pour un jeu fictif, il mène à une page itch.io.

    **Vidéo**&nbsp;: elle vient d'une autre source (bande-annonce ou bannière animée officielle, vidéo libre de droits), créditée dans `CREDITS.md`.

    Le jeu choisi doit être approuvé par l'enseignant **avant la fin du cours 12**.

!!! warning "Droits et crédits"

    Les médias proviennent de votre propre jeu, de contenus promotionnels officiels, de sources libres de droits, ou sont créés par vous (y compris par IA, alors citée selon la PIÉA, art. 6.1.2).

    Un fichier `CREDITS.md` à la racine du répertoire liste chaque média avec sa source et sa licence. **Il est obligatoire dans les deux volets.**

## Les pages

Le site compte **trois pages**. Chacune porte une partie des exigences techniques, pour que tout ne s'entasse pas sur l'accueil.

| Page | Fichier | Contenu attendu | Notions mises en valeur |
| --- | --- | --- | --- |
| **Accueil** | `index.html` | Hero avec logo, accroche et bouton d'appel à l'action (itch.io ou page officielle) · aperçu des autres pages en cartes · bloc *Lancement*&nbsp;: date de sortie, plateformes, prix ou « gratuit » | Timeline d'introduction · apparitions au défilement |
| **Le jeu** | `jeu.html` | Le concept et l'univers du jeu, en quelques sections courtes · le parcours du joueur (volet A&nbsp;: les **trois zones** du projet d'Interactivité ludique) · les **contrôles** · la *touche au choix* | Parallaxe · apparitions · animation pilotée par le défilement · MotionPath ou DrawSVG |
| **Contact** | `contact.html` | Formulaire de contact ou d'inscription à l'infolettre | EmailJS · message de succès ou d'erreur |

La vidéo, les captures d'écran et les autres médias se placent là où ils servent le mieux le jeu.

!!! tip "Réutiliser le travail d'Interactivité ludique"

    Le projet final d'Interactivité ludique fournit déjà la matière de la page *Le jeu*&nbsp;: le concept et la boucle de jeu (présentés au *post mortem*), les **trois zones** et leur progression, les **commandes** (déjà listées dans le `README` et sur la page itch.io), et les captures de l'écran titre, du HUD et de chaque zone.

**Sur toutes les pages**&nbsp;:

- [ ] La **même navbar** DaisyUI, avec le lien de la **page active** mis en évidence et le **bouton son** (activer / couper)
- [ ] Le **même pied de page**&nbsp;: crédits, liens
- [ ] Un `<title>` propre à chaque page

!!! tip "La navbar et le pied de page"

    Le plus simple&nbsp;: copier le même HTML dans chaque page, puis ajouter à la main la classe `menu-active` sur le lien de la page courante.

## Un site de plusieurs pages avec Vite

En développement, Vite sert toutes les pages HTML sans configuration. Par contre, **`npm run build` ne garde que `index.html`**&nbsp;: les autres pages disparaissent de `dist/` sans aucun message d'erreur. Il faut donc les déclarer dans `vite.config.js`.

```js title="vite.config.js" hl_lines="6-14"
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  base: './',
  build: {
    rolldownOptions: {
      input: {
        index: 'index.html',
        jeu: 'jeu.html',
        contact: 'contact.html',
      },
    },
  },
})
```

- [ ] Toutes les pages sont à la **racine** du projet, à côté de `index.html`
- [ ] Chaque page charge le **même** `src/main.js` avec `<script type="module" src="./src/main.js"></script>`
- [ ] Tous les chemins internes commencent par `./`, jamais par `/`&nbsp;: liens entre les pages (`href="./jeu.html"`), images, vidéos, favicon. Un chemin en `/` ne fonctionne qu'à la racine d'un serveur&nbsp;: il brise le site dès qu'il est publié dans un sous-dossier (GitHub Pages, cPanel)
- [ ] Après `npm run build`, vérifier que les **trois** fichiers HTML sont bien dans `dist/`

!!! tip "Un seul `gsap.js` pour trois pages"

    Toutes les animations restent dans `src/gsap.js`. Comme ce fichier est chargé sur chaque page, une animation dont la cible n'existe pas sur la page courante affiche un avertissement dans la console. Pour l'éviter, regrouper les animations de chaque page dans un bloc conditionnel&nbsp;:

    ```js title="src/gsap.js"
    // Page Le jeu seulement
    if (document.querySelector("#parallaxe")) {
      // animations de la page Le jeu
    }
    ```

## Exigences techniques

Chaque exigence correspond à une ligne du barème. Le cours où la notion a été vue est indiqué entre parenthèses.

### Projet

- [ ] Projet **Vite** Vanilla (JavaScript), dépendances installées avec **npm** seulement — aucun CDN *(cours 8)*
- [ ] Les trois pages déclarées dans `vite.config.js` *(voir plus haut)*
- [ ] Toutes les animations dans **`src/gsap.js`**, importé dans `main.js` *(cours 9)*

### JavaScript

- [ ] Le code est découpé en **fonctions** et en **modules**&nbsp;: un fichier par rôle (son, formulaire, icônes…), importé dans `main.js` *(cours 7 et 9)*
- [ ] Au moins une **classe de librairie** instanciée avec `new` (`new Howl()`, `new Chart()`…) *(cours 11)*
- [ ] Au moins une **classe sur mesure**, même simple&nbsp;: un `constructor` et au moins une méthode utilisée par le site (ex.&nbsp;: une classe qui regroupe la musique, les effets sonores et le réglage du son) *(cours 11)*

### Médias

- [ ] Images converties en **WebP ou AVIF** et **dimensionnées** à leur taille d'affichage *(cours 8)*
- [ ] `loading="lazy"` sur les images sous la ligne de flottaison *(cours 8)*
- [ ] Au moins **une vidéo** en **WebM**, compressée et dimensionnée *(cours 8)*
- [ ] Cette vidéo est intégrée selon une **stratégie au choix** (voir l'encadré ci-dessous)
- [ ] Médias classés dans `src/assets/` (`images/`, `videos/`, `audio/`) et nommés sans espace ni accent *(cours 8)*
- [ ] **Musique d'ambiance** contrôlée par programmation&nbsp;: lancée et coupée par le bouton son, jamais au chargement *(cours 11)*
- [ ] Au moins un **effet sonore** déclenché par une interaction (survol, clic, envoi du formulaire), avec Howler ou Tone.js *(cours 11)*

!!! example "Stratégies vidéo"

    La vidéo n'a pas de place imposée&nbsp;: elle se choisit selon le jeu et le design du site. Quelques stratégies possibles&nbsp;:

    * **Vidéo d'arrière-plan avec contenu superposé**&nbsp;: une boucle muette (`autoplay muted loop playsinline`) sous un titre, une accroche et un bouton, rendus lisibles par un voile *(cours 8)*
    * **Séquence de jeu ou bande-annonce** avec `controls` et `poster`, ou un lecteur maison contrôlé par programmation *(cours 11)*
    * **Vidéo déclenchée par le visiteur**&nbsp;: au survol d'une carte, ou à l'entrée dans l'écran avec ScrollTrigger *(cours 10 et 11)*

    Une vidéo qui démarre seule doit être **muette** (sans piste audio).

### Animation - GSAP

- [ ] Une **timeline d'introduction** jouée au chargement du hero de l'accueil *(cours 9)*
- [ ] Des **apparitions au défilement** (ScrollTrigger + `toggleActions`) sur au moins trois sections, réparties sur au moins deux pages *(cours 10)*
- [ ] Au moins une animation **pilotée par le défilement** (`scrub`, avec ou sans `pin`) *(cours 10)*
- [ ] Une **parallaxe** d'au moins deux couches à des vitesses différentes *(cours 10)*
- [ ] Un **plugin** au choix&nbsp;: MotionPathPlugin **ou** DrawSVGPlugin *(cours 11)*
- [ ] Une adaptation au mobile avec **`matchMedia()`** (animation simplifiée ou retirée sur petit écran) *(cours 11)*

### Interactivité et sauvegarde

- [ ] Le choix du visiteur (son activé ou coupé, **ou** thème clair / sombre) est **mémorisé avec `localStorage`** *(cours 12)*
- [ ] Ce choix est **restauré sur chaque page**&nbsp;: en passant de l'accueil à la page *Le jeu*, le visiteur retrouve son réglage *(cours 12)*
- [ ] Formulaire **EmailJS** fonctionnel, avec un message de succès ou d'erreur affiché au visiteur *(cours 13)*

!!! info "Le son et le changement de page"

    Le navigateur bloque tout son tant que le visiteur n'a pas cliqué **sur la page courante**, même si le son était activé à la page précédente. Au chargement, on restaure donc l'**état du bouton**&nbsp;; la musique, elle, repart au premier clic.

### Une touche au choix

Au moins **une** des librairies suivantes, intégrée de façon pertinente&nbsp;:

* **`<model-viewer>`** — vitrine 3D d'un personnage ou d'un objet du jeu *(cours 12)*
* **Tone.js** — petite séquence musicale, clavier ou ambiance générée *(cours 11)*
* **Chart.js** — fiche de statistiques des personnages ou des zones *(cours 12, bonus)*

### Mise en page (acquis du bloc 1)

- [ ] Une **maquette de l'accueil** (Figma, ou croquis numérisé), déposée dans `maquette/`, et une intégration **fidèle** à cette maquette *(cours 12)*
- [ ] **Thème DaisyUI personnalisé** aux couleurs du jeu *(cours 4)*

!!! warning "Thème maison sans thème intégré"

    Avec `themes: false`, le thème maison remplace complètement les thèmes de DaisyUI&nbsp;: il doit alors définir **toutes** les variables, pas seulement les couleurs. Sans `--border`, `--size-selector`, `--size-field`, `--depth` et `--noise`, les badges perdent leur padding et les champs, leur bordure. Le plus simple&nbsp;: partir du code produit par le [générateur de thèmes DaisyUI](https://daisyui.com/theme-generator/), ou garder un thème intégré par défaut (`themes: dark --default`) et ne redéfinir que les couleurs, comme au cours 4.

- [ ] **Police** installée avec **Fontsource** (npm), aucune police chargée depuis Google Fonts ou un CDN *(cours 4)*
- [ ] **Icônes** installées avec npm&nbsp;: **Lucide**, ou une autre librairie d'icônes (Iconify…) *(cours 4)*
- [ ] Composantes DaisyUI **adaptées** (pas laissées telles quelles) *(cours 3 et 4)*
- [ ] Site **responsive**&nbsp;: mobile, tablette, bureau *(cours 2)*
- [ ] **Bouton d'appel à l'action** vers la page itch.io (volet A) ou la page officielle du jeu (volet B)
- [ ] Section **Contrôles** sur la page *Le jeu*&nbsp;: les commandes du jeu (touches, souris ou manette) présentées avec la composante `kbd` de DaisyUI *(cours 3 et 4)*

### Validation et compatibilité

- [ ] HTML des trois pages validé au [W3C](https://validator.w3.org/), sans erreur *(cours 5)*
- [ ] Aucune erreur dans la console *(cours 11)*
- [ ] Site testé dans au moins **trois navigateurs** (Chrome, Firefox, Safari ou Edge)&nbsp;: affichage, animations et son fonctionnent partout *(cours 14)*

!!! note "L'IA"

    L'IA peut aider à **comprendre** une notion ou un message d'erreur. Le code remis doit toutefois s'appuyer sur les notions vues en classe, et chaque ligne doit pouvoir être expliquée à l'oral. Une technique non vue en cours, qu'il est impossible d'expliquer, ne rapporte pas de points.

## Critères d'évaluation

La plupart des critères valent **1 point&nbsp;: fait ou pas fait**. La colonne *Savoirs* renvoie aux savoirs essentiels du plan de cours. Quelques critères qualitatifs valent **2** (très bien fait), **1** (fait) ou **0** (absent).

| # | Volet | Critère | Savoirs | Pts |
|:-:|---|---|:-:|:-:|
| | **Projet et structure** | | | **6** |
| 1 | | `npm install` puis `npm run dev` fonctionnent sans erreur | 5 | 1 |
| 2 | | `npm run build` fonctionne | 5 | 1 |
| 3 | | Les trois pages sont présentes dans `dist/` | 5 | 1 |
| 4 | | Un `<title>` propre à chaque page | 12 | 1 |
| 5 | | `.gitignore` exclut `node_modules` et `dist` | 5 | 1 |
| 6 | | Animations regroupées dans `src/gsap.js`, aucun CDN | 5, 16 | 1 |
| | **JavaScript** | | | **3** |
| 7 | | Code découpé en fonctions et en modules | 1 | 1 |
| 8 | | Classe de librairie instanciée avec `new` | 13 | 1 |
| 9 | | Classe sur mesure utilisée par le site | 14 | 1 |
| | **Mise en page et navigation** | | | **13** |
| 10 | | Maquette de l'accueil dans `maquette/` | 9 | 1 |
| 11 | | Intégration fidèle à la maquette *(2 / 1 / 0)* | 9 | 2 |
| 12 | | Thème DaisyUI personnalisé aux couleurs du jeu | 6 | 1 |
| 13 | | Police installée avec Fontsource | 5 | 1 |
| 14 | | Icônes Lucide (ou autre librairie d'icônes) installées avec npm | 5 | 1 |
| 15 | | Composantes DaisyUI adaptées | 6 | 1 |
| 16 | | Même navbar et même pied de page sur les trois pages | 6 | 1 |
| 17 | | Page active mise en évidence dans la navbar | 15 | 1 |
| 18 | | Bouton d'appel à l'action vers itch.io (A) ou la page officielle (B) | 15 | 1 |
| 19 | | Section Contrôles avec la composante `kbd` | 6 | 1 |
| 20 | | Responsive&nbsp;: mobile, tablette, bureau *(2 / 1 / 0)* | 17 | 2 |
| | **Médias** | | | **8** |
| 21 | | Images en WebP ou AVIF, dimensionnées | 8 | 1 |
| 22 | | `loading="lazy"` sur les images sous la ligne de flottaison | 8 | 1 |
| 23 | | Vidéo en WebM, compressée et dimensionnée (muette si elle démarre seule) | 8 | 1 |
| 24 | | Vidéo intégrée selon une stratégie pertinente | 2 | 1 |
| 25 | | Musique d'ambiance contrôlée par le bouton son | 3, 10 | 1 |
| 26 | | Effet sonore déclenché par une interaction | 3, 10 | 1 |
| 27 | | Classement dans `src/assets/` et nomenclature des fichiers | 7 | 1 |
| 28 | | `CREDITS.md` complet (chaque média, sa source, sa licence) | 7 | 1 |
| | **Animation - GSAP** | | | **8** |
| 29 | | Timeline d'introduction au chargement de l'accueil | 16 | 1 |
| 30 | | Apparitions au défilement sur au moins trois sections | 10, 16 | 1 |
| 31 | | Animation pilotée par le défilement (`scrub`) | 10, 16 | 1 |
| 32 | | Parallaxe d'au moins deux couches | 16 | 1 |
| 33 | | MotionPathPlugin ou DrawSVGPlugin | 16 | 1 |
| 34 | | Adaptation au mobile avec `matchMedia()` | 16, 17 | 1 |
| 35 | | Animations fluides, au service du contenu, sans `markers` oubliés *(2 / 1 / 0)* | 16 | 2 |
| | **Interactivité et sauvegarde** | | | **4** |
| 36 | | Choix du visiteur mémorisé avec `localStorage` | 11 | 1 |
| 37 | | Choix restauré sur chaque page | 11 | 1 |
| 38 | | Formulaire EmailJS qui envoie réellement un courriel | 10, 15 | 1 |
| 39 | | Message de succès ou d'erreur affiché au visiteur | 15 | 1 |
| | **Une touche au choix** | | | **2** |
| 40 | | `<model-viewer>`, Tone.js ou Chart.js, intégré de façon pertinente *(2 / 1 / 0)* | 15 | 2 |
| | **Mise en ligne, validation et compatibilité** | | | **6** |
| 41 | | Site en ligne (GitHub Pages ou cPanel), tous les médias s'affichent | 5 | 1 |
| 42 | | Tous les liens entre les pages fonctionnent en ligne | 5 | 1 |
| 43 | | HTML des trois pages validé au W3C, sans erreur | 12 | 1 |
| 44 | | Aucune erreur dans la console | 12 | 1 |
| 45 | | Testé dans trois navigateurs, sans problème | 4 | 1 |
| 46 | | `README.md` complet&nbsp;: lien du site, volet, librairies utilisées | — | 1 |
| | **Présentation orale** | | | **3** |
| 47 | | Démonstration en 3 minutes ou moins | — | 1 |
| 48 | | Justification claire des choix techniques *(2 / 1 / 0)* | — | 2 |
| | **Qualité et créativité** | | | **2** |
| 49 | | Design soigné et cohérent d'une page à l'autre, au service du jeu *(2 / 1 / 0)* | 9 | 2 |
| | | **Total** | | **/55** |

!!! info "Méthode non respectée"

    Une solution qui fonctionne sans respecter la méthode demandée (CDN au lieu de npm, CSS maison au lieu des classes Tailwind, etc.) peut recevoir une fraction du point.

!!! warning "Français"

    Des points de français peuvent être retirés jusqu'à concurrence de **10 %** de la note de l'évaluation (PIÉA, art. 5.4).

## Livrable

Au cours 15, dans le devoir **Projet final** sur Teams&nbsp;:

- [ ] Le **lien du répertoire GitHub** (public)
- [ ] Le **lien du site en ligne**

!!! tip "Avant de remettre"

    - [ ] Ouvrir le répertoire en **navigation privée**&nbsp;: tout doit être visible
    - [ ] Cloner le répertoire ailleurs, faire `npm install` puis `npm run dev`&nbsp;: le site doit fonctionner
    - [ ] En ligne, **visiter les trois pages** à partir de la navbar
    - [ ] Ouvrir le site en ligne sur un **téléphone**
    - [ ] Retirer les `console.log` et les `markers: true`

!!! danger "Présence obligatoire"

    La présentation orale a lieu au cours 15. Une absence entraîne la note 0 pour cette évaluation, même si le projet a été remis (PIÉA, art. 7.2).
