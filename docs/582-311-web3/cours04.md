# Cours 4

[STOP]

*[CDN]: Content Delivery Network
*[npm]: Node Package Manager
*[HMR]: Hot Module Replacement

## Retour sur les exercices

![](./assets/images/this-is-fine.gif){.w-100}

[DaisyUI](./activite/daisyui-cdn/index.md) · [DaisyUI + Vite](./activite/daisyui-vite/index.md)

## Récapitulatif

<did class="grid" markdown>
![](./assets/images/recap-dev.jpg){data-zoom-image}
![](./assets/images/recap-dev-back.jpg){data-zoom-image}
</div>

!!! note "Go Live"

    « Live Server » et « Vite » affichent tous deux la page dans le navigateur en hot reload. 
    
    💅 La différence est que Vite lit sa configuration (`vite.config.mjs`), va chercher les librairies dans `node_modules` et transforme le code.

## Vite + `style.css`

| Instruction | Rôle | Exemple |
| :--- | :--- | :--- |
| `@import` | Ajoute le css des classes tailwind dans le html | `@import "tailwindcss";` |
| `@plugin` | Ajoute les classes daisyui présentes dans le html | `@plugin "daisyui";` |

La recette est toujours la même :

1. Installer le paquet : `npm install nom-du-paquet`
1. Ajouter **une ligne** dans `style.css`
1. Utiliser les nouvelles classes dans le HTML

## Thèmes avec Vite

Avec le CDN, on liait `daisyui@5` et `daisyui@5/themes.css` (tous les thèmes).

Avec npm, on ne va charger que ce qu'on a besoin.

Dans `style.css`, la ligne `@plugin "daisyui";` active `light` et `dark`. C'est tout.

### Activer des thèmes

```css title="style.css"
@import "tailwindcss";
@plugin "daisyui" {
  themes: emerald --default, synthwave --prefersdark;
}
```

| Drapeau | Rôle |
| :--- | :--- |
| `--default` | Thème appliqué par défaut |
| `--prefersdark` | Thème utilisé si le système est en mode sombre |
| `themes: all;` | Active **tous** les thèmes intégrés (comme le CDN) |


On choisit ensuite le thème actif avec l'attribut `data-theme` :

```html
<html data-theme="synthwave">
```

et le controlleur de thème fonctionne de la même façon :

```html title="Interrupteur clair/sombre"
<input type="checkbox" value="synthwave" class="toggle theme-controller" />
```

## Thème personnalisé

<https://daisyui.com/theme-generator/>

```css title="style.css"
@import "tailwindcss";
@plugin "daisyui";
@plugin "daisyui/theme" {
  name: "momo-light";
  color-scheme: "light";
  ...
}
@plugin "daisyui/theme" {
  name: "momo-dark";
  color-scheme: "dark";
  ...
}
```

!!! warning "Thème maison et configuration"

    Les premières lignes du thème personnalisé servent à remplacer la configuration dans `@plugin "daisyui"` : 

    ```css
    @plugin "daisyui/theme" {
      name: "momo-light";
      color-scheme: "light";
      default: false; 👈
      prefersdark: false; 👈
      ...
    }
    ```

## Polices : Fontsource

Google Fonts ne publie **pas** de paquet `npm` officiel. [Fontsource](https://fontsource.org/) empaquette les mêmes polices libres (et d'autres) pour `npm`. Les fichiers de police sont alors **inclus dans le projet** : aucune requête vers Google, et la page fonctionne hors ligne !

### Installation

1. Chercher la police sur [fontsource.org](https://fontsource.org/)
1. Installer le paquet (ex. la fonte Poppins) :<div markdown>
  ```sh
  npm install @fontsource/poppins
  ```
  </div>
1. Importer les graisses voulues dans `style.css` :<div markdown>
  ```css title="style.css"
  @import "tailwindcss";
  @import "@fontsource/poppins"; 
  @import "@fontsource/poppins/700.css";
  ```
  </div>
1. Déclarer la police comme police par défaut de Tailwind :<div markdown>
  ```css title="style.css"
  @theme {
    --font-sans: "Poppins", sans-serif;
  }
  ```
  </div>

## Icônes

![](./assets/images/lucide.png){.w-100}

[Lucide](https://lucide.dev/icons/) propose plus de 1 500 icônes libres. 

<!-- [Iconify](https://iconify.design/docs/usage/css/tailwind/tailwind4/) est une autre alternative. -->

```sh
npm install lucide-static
```

<!-- ```css title="style.css"
@plugin "@iconify/tailwind4";
``` -->

```css title="style.css"
@import "tailwindcss";
@import "lucide-static/font/lucide.css";
```

```html
<div class="icon-send"></div>
```

<!-- ```html
<span class="icon-[lucide--rocket]"></span>
<span class="icon-[lucide--heart] size-8 text-error"></span>
``` -->

<!-- La classe suit le modèle `icon-[collection--nom-de-l-icone]`. L'icône prend la couleur du texte et se dimensionne avec `size-*`. -->

<!-- !!! tip "Changer de collection" -->

<!-- Iconify donne accès à plus de 200 collections. Il suffit d'installer le paquet correspondant, par exemple `@iconify-json/ph` pour Phosphor, puis d'utiliser `icon-[ph--rocket]`. Le nom exact de chaque icône se trouve sur [icon-sets.iconify.design](https://icon-sets.iconify.design/). -->

<!-- !!! example "Bouton clair/sombre avec icônes" -->

<!-- La composante [`swap`](https://daisyui.com/components/swap/) combinée au `theme-controller` : -->

<!-- ```html
<label class="swap swap-rotate">
  <input type="checkbox" value="dark" class="theme-controller" />
  <span class="swap-off icon-[lucide--sun] size-6"></span>
  <span class="swap-on icon-[lucide--moon] size-6"></span>
</label>
``` -->

## Typographie

Tailwind retire tous les styles par défaut : un `<h2>`, un `<ul>` ou un `<blockquote>` s'affichent comme du texte ordinaire. Le plugin [Typography](https://github.com/tailwindlabs/tailwindcss-typography) règle ça avec une seule classe.

```sh
npm install -D @tailwindcss/typography
```

```css title="style.css"
@plugin "@tailwindcss/typography";
```

```html
<article class="prose">
  <h1>Titre</h1>
  <p>Paragraphe…</p>
  <ul><li>Liste</li></ul>
  <blockquote>Citation</blockquote>
</article>
```

| Classe | Effet |
| :--- | :--- |
| `prose` | Met en forme tout le contenu enfant |
| `prose-sm` / `prose-lg` / `prose-xl` | Taille générale du texte |

## Animations : Animate.css

[Animate.css](https://animate.style/) est une bibliothèque d'animations CSS.

```sh
npm install animate.css
```

```css title="style.css"
@import "animate.css";
```

```html
<h1 class="animate__animated animate__fadeInDown">Bienvenue</h1>
```

| Classe | Effet |
| :--- | :--- |
| `animate__animated` | Obligatoire, active l'animation |
| `animate__bounce`, `animate__fadeInUp`… | L'animation choisie ([liste complète](https://animate.style/)) |
| `animate__delay-1s` … `animate__delay-5s` | Délai avant le départ |
| `animate__slow` / `animate__fast` | Durée |
| `animate__infinite` | Répétition sans fin |

!!! note "Au chargement seulement"

    Sans JavaScript, l'animation joue **une fois, au chargement de la page**. Déclencher une animation au défilement ou au clic viendra plus tard, avec **GSAP**.

## Récapitulatif

```css title="style.css"
/* 1. Imports (toujours en haut) */
@import "tailwindcss";
@import "@fontsource/poppins";
@import "@fontsource/poppins/700.css";
@import "animate.css";

/* 2. Plugins */
@plugin "daisyui" {
  themes: light --default, dark --prefersdark;
}
@plugin "@tailwindcss/typography";
@plugin "@iconify/tailwind4";

/* 3. Thème maison */
@plugin "daisyui/theme" {
  name: "montmorency";
  color-scheme: light;
  --color-primary: oklch(55% 0.3 264);
}

/* 4. Variables Tailwind */
@theme {
  --font-sans: "Poppins", sans-serif;
}
```

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

Règle simple&nbsp;: **DaisyUI pose la base, Tailwind ajuste**. Si une composante ne correspond pas exactement à la maquette, on ajoute des utilitaires Tailwind plutôt que de repartir de zéro.

!!! tip "Les couleurs sémantiques, encore"

    Toujours utiliser les couleurs **sémantiques** (`bg-primary`, `text-base-content`, `badge-error`) plutôt que les couleurs fixes de Tailwind (`bg-red-500`). Pourquoi&nbsp;? Parce qu'au prochain changement de thème, **tout** s'adapte automatiquement. C'est tout l'intérêt des thèmes.

## Exercices

<div class="grid grid-1-2" markdown>
  <!-- TODO : ajouter un aperçu (giphy.gif) -->
  ![](./activite/daisyui-vitrine/preview.png){.aspect-4-3}

  <small>Exercice - DaisyUI + Vite</small><br>
  **[Vitrine](./activite/daisyui-vitrine/index.md){.stretched-link .back}**
</div>

<div class="grid grid-1-2" markdown>
  <!-- TODO : ajouter un aperçu (giphy.gif) -->
  ![](./activite/npm-article/preview.png){.aspect-4-3}

  <small>Exercice - npm</small><br>
  **[Article](./activite/npm-article/index.md){.stretched-link .back}**
</div>
