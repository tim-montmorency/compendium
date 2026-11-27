# Cours 12

*[DOM]: Document Object Model
*[npm]: Node Package Manager
*[API]: Application Programming Interface
*[AR]: Augmented Reality (réalité augmentée)
*[glTF]: GL Transmission Format
*[GLB]: glTF Binary
*[JS]: JavaScript

[STOP]

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

Quand quelquechose ne fonctionne pas comme on veut, ayez le réflex d'ouvrir **DevTools** (++f12++).

- L'onglet **Console** affiche les erreurs et vos `console.log(...)`
- L'onglet **Réseau** montre si le fichier média se charge (ou renvoie une erreur 404)

### Exercice sur les médias

<div class="grid grid-1-2" markdown>
  ![](./activite/woof/preview.png){.aspect-4-3}

  <small>Exercice - Médias</small><br>
  **[Woof](./activite/woof/index.md){.stretched-link .back}**
</div>

## Savegarde en Web

Saviez-vous ? On peut savegarder plein de choses dans le navigateur grace à `localStorage` en JavaScript. C'est très semblable à la notion de cookie.

Voyez ça comme une variable de texte. On peut la sauvegarder comme une variable (clé) et le nagivateur s'en souviendra, même après l'avoir fermé.

```js
// Écrire
localStorage.setItem("couleur-perso", "#e63946")

// Lire (null si la clé n'existe pas)
const couleur = localStorage.getItem("couleur-perso")

// Effacer
localStorage.removeItem("couleur-perso")
```

!!! tip "Voir le contenu du `localStorage`"

    DevTools > onglet **Application** > **Local Storage**. On y voit chaque clé, on peut les modifier ou les supprimer à la main pour tester.

### `localStorage` et DaisyUI

Vous vous souvenez du `theme-controller` de daisyUI ? Ça changeait le thème, mais ça « oubliait » sa sélection au rechargement de page. On peut maintenant y remédier.

```html title="index.html"
<input type="checkbox" value="dark" class="toggle theme-controller" />
```

```js title="src/main.js"
const interrupteur = document.querySelector(".theme-controller")

// Au chargement, on vérifie le contenu du localstorage
// et on coche le theme controller selon la condition
if (localStorage.getItem('theme') === 'light') {
  controller.checked = true
}

// Au changement, on sauvegarde
interrupteur.addEventListener("change", () => {
  if (interrupteur.checked) {
    localStorage.setItem('theme', 'light')
  } else {
    localStorage.setItem('theme', 'dark')
  }
})
```

!!! tip "Même principe si on a un bouton qui fait jouer de l'audio"

### Exercice sur la sauvegarde

<div class="grid grid-1-2" markdown>
  ![](./activite/cameleon/preview.png){.aspect-4-3}

  <small>Exercice - Sauvegarde</small><br>
  **[Caméléon](./activite/cameleon/index.md){.stretched-link .back}**
</div>

## Site de plusieurs pages

Le projet final est un microsite de **plusieurs pages** (`index.html`, `jeu.html`, `contact.html`). Avec Vite, ajouter une page semble facile, mais un piège attend au moment de la mise en ligne.

### Le piège

1. Créer un fichier `jeu.html` à la racine du projet, à côté de `index.html`, et y mettre un lien depuis l'accueil (`<a href="./jeu.html">`)
1. Avec `npx vite`, tout fonctionne : la page s'affiche
1. Lancer `npx vite build`, puis ouvrir le dossier `dist/` : **`jeu.html` n'y est pas**

Vite ne garde au *build* que `index.html`, et il n'affiche **aucun message d'erreur**. Une fois le site en ligne, le lien vers `jeu.html` mène à une page 404.

### La solution : déclarer les pages

Chaque page du site se déclare dans `vite.config.js` :

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

Relancer `npx vite build` : les trois fichiers HTML sont maintenant dans `dist/`.

### Les règles à suivre

- Toutes les pages sont à la **racine** du projet, à côté de `index.html`
- Chaque page charge le **même** script : `<script type="module" src="./src/main.js"></script>`
- Tous les chemins internes commencent par `./`, jamais par `/` : liens entre les pages, images, vidéos, modèles 3D. Un chemin en `/` ne fonctionne qu'à la racine d'un serveur, et il brise le site dès qu'il est publié dans un sous-dossier, comme sur GitHub Pages
- La navbar et le pied de page sont **copiés** dans chaque page. Le lien de la page courante est mis en évidence (ex. : la classe `menu-active` de DaisyUI sur le bon lien)

### Le code qui cible un élément absent

Comme `main.js` est chargé sur **chaque** page, tout le JavaScript s'exécute partout. Une animation GSAP dont la cible n'existe pas sur la page courante affiche un avertissement dans la console, et un `querySelector` qui ne trouve rien retourne `null`. On regroupe donc le code propre à une page dans un bloc conditionnel :

```js title="src/gsap.js"
// Page Le jeu seulement
if (document.querySelector("#parallaxe")) {
  // animations de la page Le jeu
}
```

!!! tip "Vérifier avant chaque remise"

    Après `npx vite build`, ouvrir `dist/` et compter les fichiers HTML : il doit y en avoir **autant que de pages** dans le site.

### Exercice sur les sites de plusieurs pages

<div class="grid grid-1-2" markdown>
  ![](./activite/archipel/preview.png){.aspect-4-3}

  <small>Exercice - Vite</small><br>
  **[Archipel](./activite/archipel/index.md){.stretched-link .back}**
</div>

---

## Projet final

Le projet final est un microsite de lancement pour le jeu développé en Interactivité ludique.

[Énoncé du projet final](./devoir/projet-final/index.md){ .md-button .md-button--primary }

Des librairies facultatives, utiles comme **touche supplémentaire** du projet (3D, graphiques, musique entre les pages…), sont présentées dans une page à part : [Extras pour le projet final](./extras.md).


<!-- ## Le calendrier

| Cours | Ce qui se passe |
| :--: | --- |
| **11** | Plugins GSAP · présentation de l'énoncé · choix du volet · collecte des médias |
| **12** | Plan du site (contenu de chaque page) et **maquette de l'accueil** · médias par programmation, `localStorage` et site de plusieurs pages, utiles au projet |
| **13** | Atelier encadré : intégration, médias, animations, formulaire EmailJS |
| **14** | Atelier encadré : gel des fonctionnalités, validation, mise en ligne, préparation de l'oral · **remise la veille du cours 15, à 23 h 59** |
| **15** | **Démonstration et entrevue individuelle** | -->