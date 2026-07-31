# Cours 4 | DaisyUI avancé

[STOP]

<!-- **Savoirs :** #6 Réutilisation de composantes adaptées · #17 Réactivité -->

*[HMR]: Hot Module Replacement

![](./assets/images/daisyui-banner.png){.w-100}

Au dernier cours, vous avez installé DaisyUI et utilisé ses composantes de base (`btn`, `card`, `navbar`…). Aujourd'hui, on monte d'un cran&nbsp;:

<div class="grid grid-1-4" markdown>
  ![](./assets/images/interactive.gif){.aspect-4-3 .w-100}

  :material-cursor-default-click: Des composantes **interactives** (souvent sans JavaScript)
</div>

<div class="grid grid-1-4" markdown>
  ![](./assets/images/allumette.gif){.aspect-4-3 .w-100}

  :material-palette: La gestion des **thèmes** - le super-pouvoir de DaisyUI
</div>

## Composantes avancées

Contrairement aux composantes de base, celles-ci gèrent souvent de l'**interactivité** (ouverture, défilement, onglets…). Le plus surprenant&nbsp;: la plupart fonctionnent **sans une seule ligne de JavaScript**, grâce à des astuces HTML/CSS. On pige toujours dans la [documentation](https://daisyui.com/components/).

### Hero

Le [`hero`](https://daisyui.com/components/hero/) est une grande bannière d'accueil, idéale en haut de page.

```html
<div class="hero min-h-96 bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">Bienvenue</h1>
      <p class="py-6">Le meilleur site de la session.</p>
      <button class="btn btn-primary">Commencer</button>
    </div>
  </div>
</div>
```

Pour un hero avec **image de fond** et voile assombri, on ajoute `hero-overlay`&nbsp;:

```html
<div class="hero min-h-96" style="background-image: url(./assets/images/fond.jpg);">
  <div class="hero-overlay"></div>
  <div class="hero-content text-neutral-content text-center">
    <h1 class="text-5xl font-bold">Digger</h1>
  </div>
</div>
```

<!-- CODEPEN: Hero simple vs hero avec image de fond + overlay -->

### Tabs (onglets)

Les [`tabs`](https://daisyui.com/components/tab/) organisent le contenu en onglets. Avec des `<input type="radio">` partageant le même `name`, on obtient des onglets **fonctionnels sans JavaScript**.

```html
<div class="tabs tabs-border">
  <input type="radio" name="mes_onglets" class="tab" aria-label="Onglet 1" checked>
  <div class="tab-content p-4">Contenu du premier onglet</div>

  <input type="radio" name="mes_onglets" class="tab" aria-label="Onglet 2">
  <div class="tab-content p-4">Contenu du deuxième onglet</div>
</div>
```

| Style de conteneur | Effet |
| :--- | :--- |
| `tabs-border` | Soulignement sous l'onglet actif |
| `tabs-lift` | Onglets « soulevés » (style dossier) |
| `tabs-box` | Onglets dans une boîte arrondie |

!!! warning "Le piège du `name`"

    Tous les `<input>` d'un même groupe d'onglets **doivent partager le même `name`**. Deux groupes d'onglets sur la même page&nbsp;? Deux `name` différents, sinon ils se contrôlent entre eux.

<!-- CODEPEN: Tabs (tabs-border, tabs-lift, tabs-box) -->

### Dropdown (menu déroulant)

Le [`dropdown`](https://daisyui.com/components/dropdown/) affiche un menu au clic.

```html
<div class="dropdown">
  <div tabindex="0" role="button" class="btn m-1">Menu ▾</div>
  <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Profil</a></li>
    <li><a>Déconnexion</a></li>
  </ul>
</div>
```

| Modificateur | Effet |
| :--- | :--- |
| `dropdown-end` | Aligne le menu à droite |
| `dropdown-top` / `dropdown-left` / `dropdown-right` | Direction d'ouverture |
| `dropdown-hover` | Ouvre au survol plutôt qu'au clic |

<!-- CODEPEN: Dropdown (positions et dropdown-hover) -->

### Carousel

Le [`carousel`](https://daisyui.com/components/carousel/) fait défiler des éléments horizontalement.

```html
<div class="carousel rounded-box w-64">
  <div class="carousel-item w-full">
    <img src="./assets/images/1.jpg" alt="Image 1">
  </div>
  <div class="carousel-item w-full">
    <img src="./assets/images/2.jpg" alt="Image 2">
  </div>
</div>
```

Ajoutez `carousel-center` pour centrer l'élément actif, ou `carousel-vertical` pour un défilement vertical. Des ancres (`#slide1`, `#slide2`…) permettent d'ajouter des boutons de navigation précédents/suivants.

<!-- CODEPEN: Carousel avec boutons de navigation -->

### Drawer (tiroir latéral)

Le [`drawer`](https://daisyui.com/components/drawer/) est un panneau latéral coulissant, parfait pour un menu mobile.

```html
<div class="drawer">
  <input id="mon-tiroir" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <label for="mon-tiroir" class="btn btn-primary drawer-button">Ouvrir le menu</label>
  </div>
  <div class="drawer-side">
    <label for="mon-tiroir" class="drawer-overlay"></label>
    <ul class="menu bg-base-200 min-h-full w-80 p-4">
      <li><a>Accueil</a></li>
      <li><a>Contact</a></li>
    </ul>
  </div>
</div>
```

| Modificateur | Effet |
| :--- | :--- |
| `drawer-end` | Tiroir à droite |
| `lg:drawer-open` | Tiroir **toujours visible** sur grand écran (menu fixe), coulissant sur mobile |

!!! tip "Responsive : le meilleur des deux mondes"

    `lg:drawer-open` transforme le tiroir en menu latéral permanent sur écran large, tout en gardant le bouton hamburger sur mobile. Un seul composant, deux comportements.

!!! note "Interactivité « gratuite »"

    Tabs, dropdown et drawer fonctionnent grâce à des astuces HTML/CSS (`radio`, `checkbox`, `tabindex`), **sans JavaScript**. On verra plus tard, avec **Alpine.js**, comment ajouter de l'interactivité plus poussée (états dynamiques, données, conditions).

## Adapter et surcharger une composante

La grande force de DaisyUI&nbsp;: une composante n'est pas figée. On **combine** ses classes avec les utilitaires **Tailwind** pour l'ajuster au pixel près.

=== "DaisyUI seul"

    ```html
    <button class="btn btn-primary">Envoyer</button>
    ```

=== "DaisyUI + Tailwind"

    ```html
    <button class="btn btn-primary rounded-full px-10 shadow-lg hover:scale-105 transition">
      Envoyer
    </button>
    ```

Règle simple&nbsp;: **DaisyUI pose la base, Tailwind ajuste**. Si une composante ne correspond pas exactement à votre maquette, ajoutez des utilitaires Tailwind plutôt que de repartir de zéro.

!!! tip "Les couleurs sémantiques, encore"

    Utilisez toujours les couleurs **sémantiques** (`bg-primary`, `text-base-content`, `badge-error`) plutôt que les couleurs fixes de Tailwind (`bg-red-500`). Pourquoi&nbsp;? Parce qu'au prochain changement de thème, **tout** s'adapte automatiquement. C'est exactement l'objet de la section suivante.

## Les thèmes

C'est LE super-pouvoir de DaisyUI. Un **thème**, c'est une palette complète de couleurs sémantiques appliquée d'un coup. DaisyUI en fournit une trentaine [prêts à l'emploi](https://daisyui.com/docs/themes/).

Quelques thèmes intégrés&nbsp;: `light` · `dark` · `cupcake` · `synthwave` · `retro` · `cyberpunk` · `valentine` · `dracula` · `night` · `coffee` · `winter` · `nord` · `sunset`… (34 au total).

### Activer des thèmes

On gère les thèmes en ajoutant des accolades après `@plugin "daisyui"` dans le CSS&nbsp;:

```css title="src/style.css"
@import "tailwindcss";
@plugin "daisyui" {
  themes: light --default, dark --prefersdark, cupcake, synthwave;
}
```

| Drapeau | Rôle |
| :--- | :--- |
| `--default` | Thème appliqué par défaut |
| `--prefersdark` | Thème utilisé si le système est en mode sombre |
| `themes: all;` | Active **tous** les thèmes intégrés |
| `themes: false;` | Désactive les thèmes et retire les couleurs DaisyUI |

On choisit ensuite le thème actif avec l'attribut `data-theme`&nbsp;:

```html
<html data-theme="cupcake">
```

!!! info "Un thème pour une seule section"

    `data-theme` fonctionne sur **n'importe quel** élément, et les thèmes s'imbriquent sans limite&nbsp;:

    ```html
    <div data-theme="dark">
      Sombre ici… <span data-theme="retro">…mais rétro ici !</span>
    </div>
    ```

<!-- CODEPEN: Même page rendue avec 3 thèmes différents (data-theme) -->

### Bouton clair/sombre

DaisyUI offre une classe [`theme-controller`](https://daisyui.com/components/theme-controller/) qui change le thème **sans JavaScript**. N'importe quel `<input>` (case à cocher, radio, `toggle`, `swap`) portant cette classe applique le thème indiqué dans son `value` quand il est activé.

```html title="Interrupteur clair/sombre"
<input type="checkbox" value="dark" class="toggle theme-controller" />
```

```html title="Choix parmi plusieurs thèmes (radio)"
<input type="radio" name="theme" value="light"    class="radio theme-controller" checked />
<input type="radio" name="theme" value="dark"     class="radio theme-controller" />
<input type="radio" name="theme" value="cupcake"  class="radio theme-controller" />
```

!!! note "Et pour mémoriser le choix ?"

    `theme-controller` change le thème, mais ne le **retient pas** au rechargement. Pour ça, il faut du JavaScript et du `localStorage` - on verra exactement ça avec **Alpine.js** plus tard dans la session.

<!-- CODEPEN: theme-controller (toggle clair/sombre + radios de thèmes) -->

### Créer son thème maison

On définit un thème sur mesure avec `@plugin "daisyui/theme"`. Chaque couleur est une variable en **OKLCH** (vu au cours 2 😉).

```css title="src/style.css"
@import "tailwindcss";
@plugin "daisyui";
@plugin "daisyui/theme" {
  name: "montmorency";
  default: true;            /* thème par défaut */
  color-scheme: light;      /* couleur des contrôles natifs du navigateur */

  --color-primary: oklch(55% 0.3 264);
  --color-primary-content: oklch(98% 0.01 264);
  --color-secondary: oklch(70% 0.25 200);
  --color-accent: oklch(65% 0.25 160);
  --color-base-100: oklch(98% 0.02 240);
  --color-base-content: oklch(20% 0.05 240);

  --radius-box: 0.5rem;     /* arrondi des cartes, alertes… */
  --radius-field: 0.25rem;  /* arrondi des boutons, champs… */
  --border: 1px;            /* épaisseur des bordures */
}
```

Les principales variables d'un thème&nbsp;:

| Variable | Contrôle |
| :--- | :--- |
| `--color-primary` … `-content` | Couleur principale et son texte lisible |
| `--color-secondary` / `--color-accent` | Couleurs d'appoint |
| `--color-base-100/200/300` | Fonds de la page |
| `--color-info/success/warning/error` | Couleurs d'état |
| `--radius-box` / `--radius-field` / `--radius-selector` | Arrondis (cartes / champs / sélecteurs) |
| `--border` | Épaisseur des bordures |
| `--depth` / `--noise` | Effets de profondeur et de grain |

!!! tip "Le générateur de thèmes"

    Plutôt que d'écrire les couleurs à la main, utilisez le [générateur de thèmes DaisyUI](https://daisyui.com/theme-generator/)&nbsp;: vous choisissez visuellement, il génère le code à coller. Idéal pour partir d'une charte graphique.

!!! example "Personnaliser un thème existant"

    Vous aimez `light` mais voulez juste changer le primaire&nbsp;? Redéfinissez le thème avec le **même nom**&nbsp;; le reste est hérité.

    ```css
    @plugin "daisyui/theme" {
      name: "light";
      default: true;
      --color-primary: blue;
    }
    ```

## Exercice

<!-- À COMPLÉTER : carte d'exercice DaisyUI avancé (dossier activite à créer), même gabarit que les cartes du cours 2. -->

- [ ] Ajoutez à votre projet **Digger** un `hero`, un menu `drawer` responsive (`lg:drawer-open`) et un bouton `theme-controller` clair/sombre.
- [ ] Intégrez une section en `tabs` et un `carousel` d'images.
- [ ] Créez un **thème maison** aux couleurs de votre choix avec le générateur, et faites-en le thème par défaut.
