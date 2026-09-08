# Cours 3

[STOP]

<!-- **Savoirs :** #5 Cadriciel facilitant l'intégration · #6 Réutilisation de composantes -->
<!-- @sudo : Mini changement relatif au plan de cours. Je vais montrer HyperUi et d'autres options avant d'embarquer dans daisy. -->

*[CDN]: Content Delivery Network
*[npm]: Node Package Manager
*[HMR]: Hot Module Replacement
*[CLI]: Command-Line Interface

## Retour sur les exercices

[Bases, _Layout_ et _Responsive_](https://jfcmontmorency.codeberg.page/tailwind-basics/)

## Tailwind, la suite

![](./assets/images/tailwind-banner.png)

Ci-dessous, quelques exemples de mise en forme utiles.

### Colonne centrée

<p class="codepen" data-theme-id="50173" data-height="300" data-pen-title="Tailwind - Structures fréquentes - Colonne centrée" data-version="2" data-default-tab="result" data-slug-hash="bNqpYzV" data-user="tim-momo" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/editor/tim-momo/pen/01a07d9d-a32d-70c9-9836-cbf8d7769dc2">
  Tailwind - Structures fréquentes - Colonne centrée</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

```html
<div class="max-w-2xl mx-auto">
  <p>...</p>
</div>
```

### Layout header + aside + main + footer

<p class="codepen aspect-16-9" data-theme-id="50173" data-height="300" data-pen-title="Tailwind - Structures fréquentes - Squelette" data-version="2" data-default-tab="result" data-slug-hash="OPpNzVy" data-user="tim-momo" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/editor/tim-momo/pen/01a07dc6-4b5f-777f-93c2-94132edc969c">
  Tailwind - Structures fréquentes - Squelette</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

```html
<div class="grid grid-rows-[auto_1fr_auto] min-h-screen">

  <header>...</header>

  <div class="grid sm:grid-cols-[16rem_1fr]">
    <aside>...</aside>
    <main>...</main>
  </div>

  <footer>...</footer>

</div>
```

### Image + contenu

<p class="codepen aspect-4-3" data-theme-id="50173" data-height="300" data-pen-title="Tailwind - Structures fréquentes - Paires" data-version="2" data-default-tab="result" data-slug-hash="jEBqYPB" data-user="tim-momo" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/editor/tim-momo/pen/01a07dc6-9f7f-766c-93e9-acba38dd0af0">
  Tailwind - Structures fréquentes - Paires</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

```html
<section class="grid gap-4 items-center sm:grid-cols-2">
  <img src="..." alt="" class="rounded-lg aspect-16/9 object-cover" />
  <div>
    <p>...</p>
  </div>
</section>

<section class="grid gap-4 items-center sm:grid-cols-2 sm:text-right">
  <img src="..." alt="" class="rounded-lg aspect-16/9 object-cover sm:order-2" />
  <div>
    <p>...</p>
  </div>
</section>
```

### Colonne contrée + 3 colonnes

<p class="codepen" data-theme-id="50173" data-height="300" data-pen-title="Tailwind - Structures fréquentes - Colonne centrée  + 3 colonnes" data-version="2" data-default-tab="result" data-slug-hash="dPvMJor" data-user="tim-momo" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/editor/tim-momo/pen/01a07dc9-f5d1-7631-8603-06b2db1ae14d">
  Tailwind - Structures fréquentes - Colonne centrée  + 3 colonnes</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

```html
<div class="max-w-xl mx-auto">
  <div class="grid gap-4 sm:grid-cols-3">
    <div>...</div>
    <div>...</div>
    <div>...</div>
  </div>
</div>
```

### Text sur image

<p class="codepen" data-theme-id="50173" data-height="300" data-pen-title="Tailwind - Structures fréquentes - Superposition" data-version="2" data-default-tab="result" data-slug-hash="yyMOpNo" data-user="tim-momo" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/editor/tim-momo/pen/01a07dc7-6122-74e7-ac50-e875bb298f61">
  Tailwind - Structures fréquentes - Superposition</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

```html
<section class="relative min-h-dvh grid place-items-center">
  <img src="..." alt="" class="absolute inset-0 size-full object-cover">
  <div class="absolute inset-0 bg-black/50"></div>
  <div class="relative text-center">
    <p>...</p>
  </div>
</section>
```

### Image et ratio

<p class="codepen" data-theme-id="50173" data-height="300" data-pen-title="Tailwind - Structures fréquentes - Images" data-version="2" data-default-tab="result" data-slug-hash="pveypJw" data-user="tim-momo" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/editor/tim-momo/pen/01a07dc7-12be-7148-94e1-b96732e20daa">
  Tailwind - Structures fréquentes - Images</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

```html
<img src="..." alt="" class="aspect-16/9 object-cover" />
```

### À propos de Tailwind

![](./assets/images/the-big-lebowski-thats-like-your-opinion-man.gif){.w-50}

En soi, Tailwind n'a pas de style prédéfini. On dit que Tailwind est non opinionné (***unopinionated***). C'est-à-dire qu'il n'impose ni direction artistique ni identité visuelle. Il ne fournit que les outils pour styliser un site.

<figure markdown>
![](./assets/images/styles.jpg){data-zoom-image .w-50}
<figcaption>Même base Tailwind, deux styles complètement différents</figcaption>
</figure>

C'est très **flexible** et ça permet de faire un peu tout, mais disposer d'une **maquette avec un système de design** aide énormément à garder le cap sur le style à maintenir d'une page à l'autre.

Quand on n'en a pas, il faut trouver des solutions pour **ne pas réinventer la roue**, comme l'exercice du QR code 😜

## HyperUI

![](./assets/images/hyper-ui.png){data-zoom-image .w-100}

[HyperUI](https://hyperui.dev/) permet de magasiner des composantes responsives déjà faites (_opinionated_), construites avec des classes Tailwind.

Trois styles sont disponibles :

- **Application** : style pour des interfaces de gestion
- **Marketing** : style pour des sites promotionnels simples
- **Neobrutalism** : style plus original, mais moins passe-partout

### Générateur de mode sombre

Certaines composantes sont disponibles en mode sombre (_dark mode_), d'autres non. Pour pallier ce manque, on peut utiliser l'outil « [Dark Mode Generator](https://hyperui.dev/tools/dark-mode-generator/) ».

![](./assets/images/dark-mode-generator.png){data-zoom-image .w-25}

### Modèles HyperUI

Des [modèles de pages](https://hyperui.dev/components/templates/) complets (_templates_) sont également disponibles.

![](./assets/images/hyper-ui-template.png){data-zoom-image .w-25}

!!! warning "Attention"

    Il manque certaines fonctionnalités JavaScript, pour le menu mobile par exemple. C'est à prendre en considération.

### Installation

C'est tout l'avantage d'HyperUI, il n'y a rien à installer ! Ça utilise seulement les classes Tailwind 4 et rien d'autre 🤷

<div class="grid grid-1-2" markdown>
  ![](./activite/hyperui/giphy.gif){.aspect-4-3}

  <small>Exercice - Tailwind</small><br>
  **[HyperUI](./activite/hyperui/index.md){.stretched-link .back}**
</div>

## DaisyUI

![](./assets/images/daisyui-banner.png){.w-100}

Entièrement construite sur Tailwind, [DaisyUI](https://daisyui.com/) est une bibliothèque de classes sémantiques qui simplifie grandement le HTML.

En contrepartie, elle impose ses propres choix de design (_opinionated_). L'apparence des éléments étant définie à l'avance, cela peut représenter un inconvénient pour les projets nécessitant une interface sur mesure.

=== ":simple-tailwindcss: Tailwind"

    <br>
    ![](./assets/images/bouton-tailwind.png)

    ```html
    <button class="bg-zinc-100 border font-semibold text-zinc-900 text-sm px-4 
    duration-200 py-2.5 transition-all hover:border-zinc-300 hover:bg-zinc-200 
    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 
    active:translate-y-[0.5px] inline-flex gap-2 rounded-sm active:border-zinc-300 
    active:bg-zinc-200 active:shadow-none text-center align-middle cursor-pointer 
    border-zinc-200 dark:border-zinc-700 dark:bg-neutral-700 dark:text-zinc-300 
    dark:hover:border-zinc-950 dark:hover:bg-zinc-950 dark:focus-visible:outline-zinc-200 
    dark:active:border-zinc-950 dark:active:bg-zinc-900">
    Bouton Tailwind
    </button>
    ```
    
=== "DaisyUI"

    <br>
    ![](./assets/images/bouton-daisyui.png)

    ```html
    <button class="btn">
    Bouton DaisyUI
    </button>
    ```

!!! question "Quoi ? Tailwind c'est déjà fini ?"

    Non non !! Les deux cohabitent.
    
    Tailwind va continuer à être utilisé pour les notions de `Layout`, `Sizing`, `Flexbox`, `Grid`, `Alignment` et `Spacing`.

    DaisyUI va surtout servir à tout ce qui est de l'ordre du style.

### Thèmes

![](./assets/images/daisy-ui-themes-gif.webp){data-zoom-image .w-100}

DaisyUI vient avec une multitude de [thèmes](https://daisyui.com/docs/themes/#list-of-themes). En changeant de thème, toutes les composantes s'ajustent dynamiquement. 

<!-- Vous pouvez même [créer votre propre thème](https://daisyui.com/theme-generator/). -->

### Sémantique

![](./assets/images/talking-thinking.gif){.w-50}

DaisyUI utilise un vocabulaire sémantique pour ses classes. C'est pratique parce que peu importe le thème, c'est toujours les mêmes [noms des couleurs](https://daisyui.com/docs/colors/#list-of-all-daisyui-color-names) :

`Primary`, `Secondary`, `Info`, `Success`, `Warning`, `Error`, `Accent`, `Neutral` et `Base`

<div class="grid" markdown>
![](./assets/images/daisyui-theme-garden-btn.png){data-zoom-image}

![](./assets/images/daisyui-theme-pastel-btn.png){data-zoom-image}
</div>

!!! question "C'est quoi déjà la sémantique ?"

    La sémantique Web sert à nommer sous forme de concept et non par attribut.
    
    C'est-à-dire qu'au lieu de spécifier une classe `bg-yellow-500` pour une zone d'avertissement, on va plutôt utiliser une classe `bg-warning`.
    
    Ainsi, en la lisant, on comprend à quoi elle sert. En indiquant que c'est jaune, on n'apprend rien d'autre que sa couleur.

### Installation du CDN

Comme Tailwind, DaisyUI possède aussi une méthode d'[installation par CDN](https://daisyui.com/docs/cdn/). Les deux s'installent conjointement dans la partie `<head>` du site :

```html title="Tailwind + DaisyUI"
<link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
<link href="https://cdn.jsdelivr.net/npm/daisyui@5/themes.css" rel="stylesheet" type="text/css" />
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script> 
```

### Composantes

![](./assets/images/57545698-ce5f2380-7320-11e9-8682-903df232d7b0.png)

Une fois DaisyUI installée, on peut utiliser ses [composantes](https://daisyui.com/components/). Elles sont catégorisées ainsi :

- ***Actions*** (composantes interactives) : Bouton, dropdown, Modal
- ***Data display*** (affichage de données) : Accordion, Card, List, Table
- ***Navigation*** : Breadcrumb, Navbar, Tab
- ***Feedback*** (rétroaction utilisateur) : Alert, Progress, Tooltip
- ***Data input*** (composantes de formulaire) : Input field, Checkbox, Select
- ***Layout*** (mise en page) : Hero, Footer, Drawer
- ***Mockup*** (simulation visuelle)

<!-- Todo : Afficher des exemples un sous l'autre avec grid-1-2 -->

### Spécifier un thème

Il suffit d'ajouter l'[identifiant du thème](https://daisyui.com/docs/themes/#list-of-themes) choisi à la balise `<html>` :

```html
<html data-theme="forest">
  ...
</html>
```

### Usage d'une composante

Pour ajouter un bouton :

1. Aller sur la page de la [documentation du bouton](https://daisyui.com/components/button/)
1. Trouver l'exemple pour un bouton `primary`
1. Cliquer sur l'onglet `HTML`
1. Copier la partie du code qui nous intéresse. Par exemple : <div>
```html
<button class="btn btn-soft btn-primary">Primary</button>
```
</div>
1. Coller dans le HTML de son projet.

<figure markdown>
![](./assets/images/daisyui-button-example.png){data-zoom-image .w-50}
</figure>

### Mode sombre

Il faut savoir que chaque thème DaisyUI incarne soit un mode `dark`, soit un mode `light`, mais jamais les deux.

Lorsqu'on utilise DaisyUI avec un CDN, il faut en choisir un par défaut. On ne peut pas configurer un thème en fonction du `prefers-color-scheme` du système de l'utilisateur.

Pour passer de l'un à l'autre, il faut donc permuter la valeur de `data-theme` avec un [contrôleur de thème](https://daisyui.com/components/theme-controller/).

```html
<input type="checkbox" class="theme-controller" value="id-du-theme-ici" />
```

<p class="codepen aspect-16-9" data-theme-id="50173" data-height="300" data-pen-title="DaisyUI Darkmode Toggle" data-version="2" data-default-tab="result" data-slug-hash="vExGedJ" data-user="tim-momo" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tim-momo/pen/vExGedJ">
  DaisyUI Darkmode Toggle</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

Todo : exercice Daisy

---

---

## Mode pro

Au dernier cours, vous avez branché Tailwind à votre projet **Digger** avec un simple `<script>` CDN. Rapide, mais c'est une solution jetable&nbsp;: on dépend d'un serveur externe et on ne contrôle rien.

Aujourd'hui, on passe en **mode professionnel**&nbsp;:

<div class="grid grid-1-4" markdown>
  ![](./assets/images/npm.gif){.aspect-4-3 .w-100}

  :material-package-variant-closed: Installer nos librairies avec **npm**
</div>

<div class="grid grid-1-4" markdown>
  ![](./assets/images/vite-banner.png){.aspect-4-3 .w-100}

  :simple-vite: Automatiser le développement avec **Vite**
</div>

<div class="grid grid-1-4" markdown>
  ![](./assets/images/daisyui-banner.png){.aspect-4-3 .w-100}

  :material-flower: Assembler des interfaces avec **DaisyUI**
</div>

## Du CDN au gestionnaire de paquets

Le CDN, c'est du code **hébergé ailleurs**. C'est parfait pour tester, mais c'est pas viable à long terme&nbsp;: on dépend d'un serveur externe, on ne peut pas travailler hors ligne, et il devient difficile de figer les versions.

La façon contemporaine d'ajouter du code externe, c'est un **gestionnaire de paquets** (_package manager_) comme **npm**.

!!! note "npm est déjà installé au Cégep. Il s'installe **automatiquement** avec [Node.js](https://nodejs.org/fr/download)."

!!! question "Cool cool, mais c'est quoi un _package manager_ ?"

    C'est un **:fontawesome-brands-app-store: App Store**, mais pour développeurs.

    Au lieu d'aller sur plein de sites différents, de télécharger des fichiers de code, de les copier dans tes dossiers et de gérer les mises à jour toi-même, un _package manager_ le fait pour toi.

Voici les commandes `npm` que vous utiliserez cette session&nbsp;:

| Commande | Rôle |
| :--- | :--- |
| `npm install <paquet>` | Installe une librairie (dépendance de production) |
| `npm install -D <paquet>` | Installe un outil de développement (_dev dependency_) |
| `npm uninstall <paquet>` | Désinstalle une librairie |
| `npm install` | Réinstalle **tout** ce qui est listé dans `package.json` |
| `npm run <script>` | Exécute un script défini dans `package.json` |

### :material-numeric-1-box: Installer Milligram sans CDN

- [ ] Retirez les `<link>` CDN de `normalize` et `milligram`, mais gardez la ligne de la Google Font.

- [ ] Dans le dossier « Digger », en ligne de commande, exécutez&nbsp;:

    ```bash
    npm install milligram normalize.css
    ```

Trois nouveautés apparaissent dans le projet&nbsp;:

* :material-file-code:**`package.json`**<br>Carte d'identité du projet. Contient la liste de ses librairies installées par `npm`
* :material-file-code:**`package-lock.json`**<br>Versions exactes installées (à ne jamais modifier à la main)
* :file_folder:**`node_modules/`**<br>Code des librairies téléchargées

!!! example "À quoi ressemble un `package.json`"

    ```json title="package.json"
    {
      "name": "digger",
      "version": "1.0.0",
      "dependencies": {
        "milligram": "^1.4.1",
        "normalize.css": "^8.0.1"
      }
    }
    ```

    Le `^` devant la version signifie « cette version **ou** une mise à jour mineure compatible ». C'est ce qu'on appelle le _versionnage sémantique_ (`MAJEUR.MINEUR.CORRECTIF`).

!!! warning "`node_modules` ne se sauvegarde JAMAIS sur Git"

    Ce dossier est énorme et se régénère avec `npm install`. On l'ignore donc avec un fichier `.gitignore`&nbsp;:

    ```txt title=".gitignore"
    node_modules
    dist
    ```

    Vous récupérez un projet sans son `node_modules`&nbsp;? Un simple `npm install` le reconstruit à partir du `package.json`.

### :material-numeric-2-box: Lier les fichiers téléchargés

Le code de Milligram est maintenant **dans notre projet**, sous `node_modules`.

- [ ] Liez au HTML les fichiers téléchargés&nbsp;:

    ```html title="index.html"
    <link rel="stylesheet" href="./node_modules/normalize.css/normalize.css">
    <link rel="stylesheet" href="./node_modules/milligram/dist/milligram.min.css">
    ```

- [ ] Rechargez la page. Vous devriez voir le même résultat qu'avec le CDN.

!!! warning "Un peu fastidieux quand même !"

    Lier chaque fichier à la main depuis `node_modules`, ce n'est pas idéal. D'ailleurs, personne fait ça 😆

    Imaginez un projet avec 20 librairies&nbsp;: 20 `<link>` et `<script>` à gérer, dans le bon ordre, avec les bons chemins… Un cauchemar. Un outil comme :simple-vite: **Vite** va automatiser tout ça.

## Preline

## Vite, l'usine à sites

![](./assets/images/vite-banner.png){.w-100}

**[Vite](https://vite.dev/)** (prononcé « veet », comme le mot français 😉) est un **outil de construction** (_build tool_). C'est un peu comme une usine&nbsp;: on lui donne notre code source, elle nous retourne un site optimisé et prêt à publier.

Pourquoi s'embêter avec ça&nbsp;? Pour quatre grosses raisons&nbsp;:

<div class="grid cards" markdown>

- :material-puzzle: **Composantes**<br>Découper un long code en petits morceaux réutilisables au lieu d'un seul fichier géant.
- :material-rocket-launch: **Build optimisé**<br>Un environnement de développement rapide **et** une version de production allégée pour la mise en ligne.
- :material-bug: **Gestion des erreurs**<br>Vite affiche les erreurs clairement, directement à l'écran, pendant le développement.
- :material-flash: **Hot reload (HMR)**<br>La page se met à jour instantanément à chaque sauvegarde, sans rechargement complet (comme le _Go Live_, mais en mieux).

</div>

### :material-numeric-3-box: Créer un projet Vite

- [ ] Dans le dossier « Digger », en ligne de commande, exécutez&nbsp;:

    ```bash
    npm create vite@latest ./ -- --template vanilla
    ```

    !!! info "« vanilla » ?"

        _Vanilla_ signifie « sans saveur ajoutée »&nbsp;: du HTML/CSS/JS pur, sans cadriciel comme React ou Vue. Parfait pour apprendre les fondations.

- [ ] Installez les dépendances puis démarrez le serveur de développement&nbsp;:

    ```bash
    npm install
    npm run dev
    ```

- [ ] Ouvrez l'adresse locale affichée dans le terminal (ex.&nbsp;: `http://localhost:5173`).

Un projet Vite « vanilla » a cette structure&nbsp;:

```txt
digger/
├── index.html          ← point d'entrée
├── package.json        ← dépendances + scripts
├── vite.config.js      ← configuration de Vite
├── public/             ← fichiers copiés tels quels (images, favicon…)
└── src/
    ├── main.js         ← JavaScript principal
    └── style.css       ← CSS principal
```

Vite définit trois scripts dans le `package.json`. On les lance avec `npm run`&nbsp;:

| Script | Commande | Rôle |
| :--- | :--- | :--- |
| **dev** | `npm run dev` | Serveur de **développement** local, avec HMR |
| **build** | `npm run build` | Génère la version **de production** dans `dist/` |
| **preview** | `npm run preview` | Prévisualise localement le `dist/` généré |

!!! tip "Tester le Hot Module Replacement"

    Serveur `dev` lancé, modifiez une couleur dans `src/style.css` et sauvegardez. La page se met à jour **instantanément**, sans rechargement 🔥. C'est le HMR.

!!! note "`npm run build` ?"

    On y reviendra en détail au **cours 5**, lors de la mise en ligne. Retenez seulement qu'il produit un dossier `dist/` optimisé, prêt à publier.

## Brancher Tailwind (pour de vrai)

Fini le `<script>` CDN du cours 2. On installe Tailwind **dans le projet**, ce qui donne l'autocomplétion, la performance et le contrôle des versions.

| | CDN (cours 2) | Build avec Vite (maintenant) |
| :--- | :--- | :--- |
| Installation | 1 `<script>` | `npm install` + config |
| Hors ligne | ✗ | ✓ |
| Autocomplétion VS Code | Limitée | ✓ complète |
| Performance en production | Lourde | CSS minifié, allégé |
| Usage | Prototype | Projet réel |

- [ ] Installez Tailwind et son greffon Vite&nbsp;:

    ```bash
    npm install tailwindcss @tailwindcss/vite
    ```

- [ ] Ajoutez le greffon dans `vite.config.js`&nbsp;:

    ```js title="vite.config.js"
    import { defineConfig } from 'vite'
    import tailwindcss from '@tailwindcss/vite'

    export default defineConfig({
      plugins: [
        tailwindcss(),
      ],
    })
    ```

- [ ] Dans `src/style.css`, remplacez tout par&nbsp;:

    ```css title="src/style.css"
    @import "tailwindcss";
    ```

- [ ] Assurez-vous que `src/style.css` est bien importé dans `src/main.js`&nbsp;:

    ```js title="src/main.js"
    import './style.css'
    ```

Et voilà&nbsp;: toutes les classes Tailwind du cours 2 fonctionnent, sans CDN 🎉.

## DaisyUI par-dessus Tailwind

![](./assets/images/daisyui-banner.png){.w-100}

Rappelez-vous la comparaison du cours 2&nbsp;:

=== "Milligram (sémantique)"

    ```html
    <a href="#" class="button">Voir la bande annonce</a>
    ```

    Simple… mais rigide et daté.

=== "Tailwind (utilitaire)"

    ```html
    <a href="#" class="px-6 py-2 bg-purple-600 text-white rounded font-bold uppercase">
      Voir la bande annonce
    </a>
    ```

    Puissant… mais verbeux.

=== "DaisyUI (le meilleur des deux)"

    ```html
    <a href="#" class="btn btn-primary">Voir la bande annonce</a>
    ```

    Sémantique **et** bâti sur Tailwind, donc surchargeable.

**[DaisyUI](https://daisyui.com/)**, c'est le **meilleur des deux mondes**&nbsp;: des composantes sémantiques (`btn`, `card`, `navbar`…) **construites avec Tailwind**. On garde la simplicité de Milligram tout en pouvant surcharger avec les utilitaires Tailwind.

### Pourquoi DaisyUI ?

Tailwind seul, c'est puissant, mais ça devient vite **verbeux et répétitif**. Un simple bouton, répété sur toutes vos pages&nbsp;:

```html
<button class="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-400">
  Envoyer
</button>
```

Multipliez ça par tous vos boutons, cartes et alertes&nbsp;: le HTML devient illisible, et le moindre ajustement de style doit être recopié partout 😵.

DaisyUI règle le problème en **empaquetant** ces motifs dans des classes sémantiques&nbsp;:

```html
<button class="btn btn-primary">Envoyer</button>
```

Situons DaisyUI sur le **spectre des outils** CSS, du plus manuel au plus « clé en main »&nbsp;:

| Approche | Effort | Lisibilité | Flexibilité |
| :--- | :--- | :--- | :--- |
| CSS à la main | 🔴 élevé | 🟢 bonne | 🟢 totale |
| Tailwind seul | 🟡 moyen | 🔴 verbeux | 🟢 totale |
| **DaisyUI + Tailwind** | 🟢 faible | 🟢 bonne | 🟢 surcharge Tailwind |
| Framework rigide (Bootstrap) | 🟢 faible | 🟢 bonne | 🔴 dur à personnaliser |

!!! question "Pourquoi pas Bootstrap, comme dans les anciennes versions du cours ?"

    Bootstrap mélange deux mondes (ses propres classes **et** du CSS sur mesure), et le personnaliser en profondeur revient souvent à « se battre » contre le framework.

    DaisyUI, lui, est **100 % Tailwind** en dessous&nbsp;: aucune rupture de paradigme, et on surcharge n'importe quelle composante avec les utilitaires déjà appris au cours 2. C'est aussi la direction actuelle de l'industrie (utilitaires + composantes).

!!! success "En résumé"

    DaisyUI = la **rapidité** d'un framework de composantes + la **flexibilité totale** de Tailwind. On code vite, on reste lisible, et rien n'est verrouillé.

### :material-numeric-4-box: Installer DaisyUI

- [ ] Installez DaisyUI&nbsp;:

    ```bash
    npm install -D daisyui@latest
    ```

- [ ] Ajoutez-le comme greffon dans votre CSS, **après** l'import de Tailwind&nbsp;:

    ```css title="src/style.css"
    @import "tailwindcss";
    @plugin "daisyui";
    ```

- [ ] Activez un thème sur la balise `<html>`&nbsp;:

    ```html
    <html data-theme="light">
    ```

C'est tout&nbsp;! Les classes DaisyUI sont maintenant disponibles.

### Les couleurs sémantiques

C'est **le** concept clé de DaisyUI. Au lieu d'une couleur fixe comme `bg-red-500`, on utilise une couleur **sémantique** (liée à son rôle). Changez de thème et toutes ces couleurs s'adaptent automatiquement.

| Couleur | Usage | Texte lisible dessus |
| :--- | :--- | :--- |
| `primary` | Couleur de marque principale | `primary-content` |
| `secondary` | Couleur d'appoint | `secondary-content` |
| `accent` | Accent, mise en évidence | `accent-content` |
| `neutral` | Éléments neutres | `neutral-content` |
| `base-100` | Fond de page | `base-content` |
| `base-200` / `base-300` | Fonds légèrement contrastés | `base-content` |
| `info` / `success` / `warning` / `error` | États et rétroactions | `*-content` |

Ces couleurs se combinent avec les préfixes Tailwind habituels&nbsp;: `bg-primary`, `text-secondary`, `border-accent`, `bg-base-200`…

## Composantes de base

On pige dans la [documentation DaisyUI](https://daisyui.com/components/) 🌼. Chaque composante suit la même logique&nbsp;: une **classe de base**, puis des **modificateurs** (couleur, taille, style).

### Bouton (`btn`)

La composante la plus utilisée. Anatomie&nbsp;: `btn` + une couleur + (optionnel) un style + (optionnel) une taille.

```html
<button class="btn btn-primary btn-lg">Cliquez-moi</button>
```

| Catégorie | Classes |
| :--- | :--- |
| **Couleurs** | `btn-primary` · `btn-secondary` · `btn-accent` · `btn-neutral` · `btn-info` · `btn-success` · `btn-warning` · `btn-error` |
| **Styles** | `btn-outline` · `btn-soft` · `btn-dash` · `btn-ghost` · `btn-link` |
| **Tailles** | `btn-xs` · `btn-sm` · `btn-md` _(défaut)_ · `btn-lg` · `btn-xl` |
| **Formes** | `btn-wide` · `btn-block` · `btn-square` · `btn-circle` |

<!-- CODEPEN: Constructeur de boutons DaisyUI (couleur × style × taille) -->

### Badge (`badge`)

Petite étiquette, souvent pour un statut ou un compteur.

```html
<span class="badge badge-primary">Nouveau</span>
<span class="badge badge-outline badge-lg">42</span>
```

Mêmes modificateurs de couleur que le bouton, plus les styles `badge-outline`, `badge-soft`, `badge-dash`, `badge-ghost` et les tailles `badge-xs` à `badge-xl`.

### Alerte (`alert`)

Message contextuel adressé à l'utilisateur.

```html
<div class="alert alert-success">
  <span>✅ Votre profil a été enregistré.</span>
</div>
```

| Catégorie | Classes |
| :--- | :--- |
| **Couleurs** | `alert-info` · `alert-success` · `alert-warning` · `alert-error` |
| **Styles** | `alert-outline` · `alert-soft` · `alert-dash` |

<!-- CODEPEN: Les 4 types d'alertes DaisyUI côte à côte -->

### Carte (`card`)

Conteneur polyvalent pour regrouper image, titre, texte et actions.

```html
<div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="./assets/images/chat.jpg" alt="Chat"></figure>
  <div class="card-body">
    <h2 class="card-title">Mon chat</h2>
    <p>Le plus beau des félins.</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Adopter</button>
    </div>
  </div>
</div>
```

| Sous-classe / variante | Rôle |
| :--- | :--- |
| `card-body` | Zone de contenu (padding intérieur) |
| `card-title` | Titre de la carte |
| `card-actions` | Zone des boutons |
| `card-side` | Image à côté du contenu plutôt qu'au-dessus |
| `image-full` | Image en arrière-plan, contenu par-dessus |

<!-- CODEPEN: Carte DaisyUI (verticale, card-side, image-full) -->

### Navbar (`navbar`)

Barre de navigation en haut de page. On la structure en trois zones.

```html
<div class="navbar bg-base-100 shadow-sm">
  <div class="navbar-start">
    <a class="btn btn-ghost text-xl">Digger</a>
  </div>
  <div class="navbar-center">
    <ul class="menu menu-horizontal px-1">
      <li><a>Accueil</a></li>
      <li><a>Contact</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <button class="btn btn-primary">Connexion</button>
  </div>
</div>
```

`navbar-start`, `navbar-center` et `navbar-end` répartissent le contenu à gauche, au centre et à droite.

### Menu (`menu`)

Liste de liens verticale ou horizontale, utilisée seule ou dans une navbar / un tiroir.

```html
<ul class="menu bg-base-200 rounded-box w-56">
  <li class="menu-title">Sections</li>
  <li><a class="menu-active">Accueil</a></li>
  <li><a>Galerie</a></li>
  <li><a>Contact</a></li>
</ul>
```

Utilisez `menu-horizontal` pour l'afficher en ligne, `menu-title` pour un en-tête de groupe, et `menu-active` sur le lien courant.

!!! tip "Combiner DaisyUI + Tailwind"

    Une composante DaisyUI reste **surchargeable** avec les utilitaires Tailwind. Par exemple, pour arrondir davantage un bouton, l'espacer et l'agrandir au survol&nbsp;:

    ```html
    <button class="btn btn-primary rounded-full mt-4 hover:scale-105">Go</button>
    ```

    On approfondira cette surcharge, ainsi que les composantes **interactives** (drawer, tabs, carousel…) et les **thèmes**, au **cours 4**.

## Devoir 1

<!-- À COMPLÉTER : présentation du premier devoir.
Carte de devoir au format habituel, ex. :

<div class="grid grid-1-2" markdown>
  ![](./devoir/daisy-devoir1/preview.jpg){.aspect-4-3}

  <small>Devoir 1</small><br>
  **[Titre du devoir](./devoir/daisy-devoir1/index.md){.stretched-link .back}**
</div>
-->

## Exercice

<!-- À COMPLÉTER : carte d'exercice DaisyUI (dossier activite/daisyui à créer), même gabarit que les cartes du cours 2. -->

- [ ] Migrez le projet **Digger** vers **Vite** (npm + build).
- [ ] Remplacez le CDN Tailwind par l'installation via `@tailwindcss/vite`.
- [ ] Ajoutez **DaisyUI** et reconstruisez la page d'accueil avec une `navbar`, une `card` et des `btn`.
