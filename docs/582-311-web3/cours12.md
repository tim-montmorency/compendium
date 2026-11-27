# Cours 12

*[DOM]: Document Object Model
*[npm]: Node Package Manager
*[API]: Application Programming Interface
*[AR]: Augmented Reality (réalité augmentée)
*[glTF]: GL Transmission Format
*[GLB]: glTF Binary
*[JS]: JavaScript

## Médias et JavaScript

![type:video](./assets/videos/tv.webm){.h-auto}

Les balises `<video>` et `<audio>` viennent avec plusieurs fonctionnalités contrôlables en JavaScript (**propriétés**, **méthodes** et **événements**). 

```html title="HTML"
<video id="exemple" src="miaw.webm"></video>
<!-- ou -->
<audio id="exemple" src="miaw.mp3"></audio>
```

```js title="Sélectionner la vidéo"
const media = document.querySelector("#exemple");
```

<div class="grid align-items-top" markdown>
```js title="Lancer la lecture"
/* Set */
media.play();
```

```js title="Pause"
/* Set */
media.pause();

/* Get (false ou true) */
console.log( media.paused );
```
</div>

!!! warning "Autoplay bloqué"

    Les navigateurs refusent de jouer du **son** avant une **première interaction** du visiteur (clic, toucher, touche du clavier). Un `play()` lancé au chargement de la page est donc bloqué : le son se déclenche toujours depuis un clic.

    Seule exception : une vidéo **muette** (`muted`) peut démarrer seule, par exemple une vidéo d'arrière-plan (`autoplay muted loop playsinline`).

```js title="Régler le volume"
/* Set : 0 = muet, 1 = max */
media.volume = 0.5;

/* Set */
media.muted = true;
```

```js title="Tête de lecture"
/* Set (va à 12.34 secondes)*/
media.currentTime = 12.34;

/* Set : vitesse de lecture. 2 = vite, 0.5 = ralenti */
media.playbackRate = 2;

/* Get */
console.log( media.currentTime );

/* Get : durée totale. À utiliser avec loadedmetadata 👇 */
console.log( media.duration );
```

```js title="Événements"
/* Attend que le navigateur lise les métadonnées du fichier */
media.addEventListener("loadedmetadata", () => {
  // ...
});

/* Pendant la lecture (se déclenche ~4x / seconde)  */
media.addEventListener("timeupdate", () => {
  // ... 
});

/* Quand la lecture est terminée */
media.addEventListener("ended", () => {
  // ...
});
```

### Déboguer avec DevTools

Quand quelque chose ne fonctionne pas comme on veut, ayez le réflexe d'ouvrir **DevTools** (++f12++).

- L'onglet **Console** affiche les erreurs et vos `console.log(...)`
- L'onglet **Réseau** montre si le fichier média se charge (ou renvoie une erreur 404)

### Exercice sur les médias

<div class="grid grid-1-2" markdown>
  ![](./activite/woof/preview.png){.aspect-4-3}

  <small>Exercice - Médias</small><br>
  **[Woof](./activite/woof/index.md){.stretched-link .back}**
</div>

## Sauvegarde en Web

<iframe src="https://tim-montmorency.com/Fragment/v/?f=localstorage&onglets=html,js,resultat&actif=resultat&modifiable=1&disposition=onglets&numeros=1" class="aspect-16-9" style="width:100%;border:0" loading="lazy"></iframe>

Le saviez-vous ? On peut sauvegarder plein de choses dans le navigateur grâce à `localStorage` en JavaScript. C'est très semblable à la notion de cookie.

Voyez ça comme une variable de texte, mais au lieu de s'appeler variable, ça s'appelle une clé.

```js
const maCle = "couleur-perso"

// Écrire
localStorage.setItem(maCle, "#e63946")

// Lire (null si la clé n'existe pas)
const couleur = localStorage.getItem(maCle)

// Effacer
localStorage.removeItem(maCle)
```

!!! tip "Voir le contenu du `localStorage`"

    DevTools > onglet **Application** > **Local Storage**. On y voit chaque clé, on peut les modifier ou les supprimer à la main pour tester.

### `localStorage` et daisyUI

Vous vous souvenez du `theme-controller` de daisyUI ? Ça changeait le thème, mais ça « oubliait » sa sélection au rechargement de page. On peut maintenant y remédier.

```html title="index.html"
<input type="checkbox" value="dark" class="toggle theme-controller" />
```

```js title="src/main.js"
const interrupteur = document.querySelector(".theme-controller")

// Au chargement, on vérifie le contenu du localStorage
// et on coche le theme controller selon la condition
if (localStorage.getItem('theme') === 'dark') {
  interrupteur.checked = true
}

// Au changement, on sauvegarde
interrupteur.addEventListener("change", () => {
  if (interrupteur.checked) {
    localStorage.setItem('theme', 'dark')
  } else {
    localStorage.setItem('theme', 'light')
  }
})
```

!!! tip "C'est le même principe si on a un bouton qui fait jouer de l'audio 😜"

### Exercice sur la sauvegarde

<div class="grid grid-1-2" markdown>
  ![](./activite/1984/prev.png){.aspect-4-3}

  <small>Exercice - Sauvegarde</small><br>
  **[1984](./activite/1984/index.md){.stretched-link .back}**
</div>

## Site de plusieurs pages

Le projet final est un microsite de **plusieurs pages**. Avec Vite, ajouter une page semble facile, mais un piège attend au moment de la mise en ligne !!

1. Créer un fichier `jeu.html` à la racine du projet (à côté de `index.html`) et mettre un lien depuis l'accueil (`<a href="./jeu.html">`)
1. Avec `npx vite`, tout fonctionne. On clique et la page s'affiche
1. Maintenant, lancer `npx vite build`, puis ouvrir le dossier `dist/`. **`jeu.html` n'est pas là** 😱

Il faut juste configurer les pages manuellement dans `vite.config.js` :

```js title="vite.config.js" hl_lines="7-15"
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

Relancer `npx vite build` et toutes les pages déclarées sont maintenant dans `dist/`.

<!-- 
### Les règles à suivre

- Toutes les pages sont à la **racine** du projet, à côté de `index.html`
- Chaque page charge le **même** script : `<script type="module" src="./src/main.js"></script>`
- Tous les chemins internes commencent par `./`, jamais par `/` : liens entre les pages, images, vidéos, modèles 3D. Un chemin en `/` ne fonctionne qu'à la racine d'un serveur, et il brise le site dès qu'il est publié dans un sous-dossier, comme sur GitHub Pages
- La navbar et le pied de page sont **copiés** dans chaque page. Le lien de la page courante est mis en évidence (ex. : la classe `menu-active` de DaisyUI sur le bon lien) 
-->

### Bonne pratique

Comme `main.js` est chargé sur chaque page, tout le JavaScript s'exécute partout. Par exemple, une animation GSAP dont la cible n'existe pas sur la page courante affiche un avertissement dans la console et un `querySelector` qui ne trouve rien retourne `null`.

Il faut donc idéalement vérifier la présence de ce qu'on veut modifier avant de faire quoi que ce soit :

```js title="src/main.js"
// Page Le jeu seulement
if (document.querySelector("#parallaxe")) {
  // animations de la page Le jeu
}
```

## Projet final

Il est tant attendu ! Le voici, le voilà !

[Énoncé du projet final](./devoir/projet-final/index.md){ .md-button .md-button--primary }

---

<div class="grid grid-1-2" markdown>
  ![](./activite/k-go/prev.gif){.aspect-4-3}

  **[K.. go !](./activite/k-go/index.md){.stretched-link .back}**
</div>
