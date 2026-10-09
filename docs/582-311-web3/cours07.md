# Cours 7

*[CDN]: Content Delivery Network
*[DOM]: Document Object Model
*[npm]: Node Package Manager
*[WebP]: format d'image moderne de Google
*[AVIF]: format d'image basé sur le codec AV1

## Retour sur l'examen

![](./assets/images/8ae8d8b08324a5a0a2ea5aca07ece84319df965330b94afa.avif)

<!-- - Commit + Push à chaque étape -->

## JavaScript

![](./assets/images/javascript_banner.png)

Nous amorçons aujourd'hui un retour sur l'usage de JavaScript. 

Afin de vous accompagner dans cette deuxième partie du cours, vous pouvez consulter cet [aide mémoire](https://jfcmontmorency.github.io/aide-memoire/).

<div class="grid grid-1-2" markdown>
  ![](./activite/js-bootcamp/gijane.jpg)

  <small>Exercice - JavaScript</small><br>
  **[Camp d'entrainement](./activite/js-bootcamp/index.md){.stretched-link .back}**
</div>

## Vite

![](./assets/images/vite-banner.png){.w-100}

Jusqu'à aujourd'hui nous avons utilisé, d'une manière un peu détournée, Vite pour compiler notre CSS. Étant donné qu'on amorce la portion JavaScript du cours, nous pourrons maintenant utiliser la manière plus conventionnelle.

### La vrai installation 😅

L'installation normale fonctionne avec une logique de Javascript par défaut qu'on a évité volontairement jusqu'à présent pour se concentrer sur le CSS.

Quand on va sur [vite.dev](https://vite.dev/), il est dailleurs indiqué d'installer vite avec la commande suivante : 

<div class="grid align-items-top" markdown>
```bash title="Installe vite dans un dossier « timmomo »"
npm create vite@latest timmomo
```

```bash title="Installe vite dans le dossier en cours"
npm create vite@latest .
```
</div>

Une série de questions vous sera posé. Choisir les options suivantes : 

* Select a framework : **Vanilla** 👈
* Select a variant : **JavaScript** 👈
* Install with npm and start now ? **Yes**

Le serveur Vite parti, vous devriez voir ceci dans le navigateur : 

![Vite Default Page](./assets/images/vite-default-page.png){data-zoom-image}

### Structure d'un projet Vite

```txt
📁 timmomo
├── 📁 node_modules
├── 📁 public
│    ├── 🎆 favicon.svg
│    └── 🎆 icons.svg
├── 📁 src    
│    ├── 📁 assets
│    │    ├── 🎆 hero.png
│    │    ├── 🎆 javascript.svg
│    │    └── 🎆 vite.svg
│    ├── 📄 counter.js
│    ├── 📄 main.js
│    └── 📄 style.css
├── 📄 index.html
├── 📄 package.json
└── 📄 package-lock.json
```

!!! example "DEMO : Nouveau paradigme 🧠"

    1. Regardons ensemble ce qui se passe dans le code initial et retirons ce qui ne nous intéresse pas
    1. Installons Taiwind et DaisyUi dans ce nouveau contexte.
      - Nouveauté 1 : `vite.config.js` et non `vite.config.mjs`
      - Nouveauté 2 : fichier css est chargé en javascript 🤯

## Optimiser les médias 🎬

<!-- ![](./assets/images/squoosh.png){.w-100} -->

En Web, si on ne prépare pas les médias, ceux-ci rendent la page lente et font fuir les visiteurs.

### Les formats d'image

Chaque format a son usage. La règle d'or&nbsp;: **le plus léger qui fait le travail**.

| Format | Idéal pour | Notes |
| :--- | :--- | :--- |
| `JPEG` | Photos | Compression avec pertes, pas de transparence |
| `PNG` | Images nettes, transparence | Plus lourd |
| `WebP` | **Remplace JPEG et PNG** | ~30 % plus léger, transparence, largement supporté |
| `AVIF` | Photos, encore plus léger | Le plus performant, support quasi universel en 2026 |
| `SVG` | Logos, icônes, formes | Vectoriel&nbsp;: net à toute taille |

[CanIUse.com<br>![](./assets/images/caniuseavif.png){data-zoom-image .w-50}](https://caniuse.com/?search=AVIF)

### Compresser, dimensionner et convertir les images

1. **Compresser** afin d'obtenir une version le plus allégée possible, sans grande perte de qualité
  - [Squoosh](https://squoosh.app/)
  - [TinyPng](https://tinypng.com/)
2. **Redimensionner** pour le contexte d'affichage. Ne servez jamais une image de 4000&nbsp;px pour l'afficher à 400&nbsp;px. Ça ralenti le chargement du site et prends du data inutilement sur les téléphones
  - Figma
  - Photoshop
  - [image-resizer](https://web-toolbox.dev/en/tools/image-resizer)
3. **Convertir** lorsqu'on veut optimiser la page Web
  - [ezgif : gif à webp](https://ezgif.com/gif-to-webp)
  - [ezgif : jpg à avif](https://ezgif.com/jpg-to-avif)
  - [ezgif : png à avif](https://ezgif.com/apng-to-avif)

### Chargement « paresseux » d'une image

L'attribut `loading="lazy"` diffère le chargement des images **hors écran** jusqu'à ce qu'on approche par le défilement. Gratuit et efficace.

```html
<img src="./assets/images/chat.webp" alt="Chat" loading="lazy">
```

### La vidéo

**MP4** et **WebM** sont les deux standards Web. 

À des fins de compatibilité, on peut donner plusieurs choix au navigateur et celui-ci choisi en premier ce qu'il sait lire. Par exemple :

```html
<video controls poster="./assets/images/apercu.webp" width="640">
  <source src="./assets/videos/demo.webm" type="video/webm">
  <source src="./assets/videos/demo.mp4" type="video/mp4">
  Votre navigateur ne supporte pas la vidéo.
</video>
```

!!! warning "L'autoplay exige le silence"

    Pour garantir le démarrage automatique d'un fond vidéo sur tous les appareils (ordinateur et mobile), il faut combiner les attributs `muted` et `playsinline` pour répondre aux restrictions des navigateurs et d'Apple. 

    ```html
    <video autoplay loop muted playsinline>
      <source src="demo.webm" type="video/webm">
    </video>

    ```

#### Compresser et convertir une vidéo

Une vidéo sortie d'un téléphone ou d'un logiciel de montage pèse souvent plusieurs centaines de Mo. Pour le Web, une vidéo de fond de 10 à 20 secondes devrait peser **moins de 5 Mo**.

1. **Compresser et redimensionner**
  - [HandBrake](https://handbrake.fr/) (gratuit, Windows et macOS)
  - [ezgif : vidéo vers WebM](https://ezgif.com/video-to-webm)
2. **Choisir le bon format**
  - **MP4** (codec H.264)&nbsp;: lu partout, y compris sur les vieux appareils.
  - **WebM** (codec VP9)&nbsp;: plus léger, lu par tous les navigateurs modernes.
  - Pour les curieux&nbsp;: le codec **AV1**, encore plus efficace, peut remplacer VP9 dans un WebM
3. **Retirer le son** d'une vidéo de fond (`muted`)&nbsp;: c'est du poids inutile

!!! tip "Vidéos d'une minute et +"

    Mieux vaut intégrer la vidéo depuis **YouTube** ou **Vimeo** avec un `<iframe>`. Ces plateformes adaptent la qualité à la connexion de chaque visiteur et n'utilise pas la bande passante de votre serveur.

### L'audio

Mêmes principes&nbsp;: **MP3** (universel) et **OGG/Opus** ou **WebM** (plus légers). On peut aussi offrir plusieurs sources.

```html
<audio controls>
  <source src="./assets/audio/theme.webm" type="audio/webm">
  <source src="./assets/audio/theme.mp3" type="audio/mpeg">
</audio>
```

### Classement et nommage

| Bonne pratique | Exemple |
| :--- | :--- |
| Un dossier par type | `images/`, `videos/`, `audio/` |
| Minuscules, tirets | `hero-accueil.webp` (pas `Hero Accueil.PNG`) |
| Pas d'accents ni d'espaces | `plan-cegep.svg` (pas `plán cégep.svg`) |
| Noms descriptifs | `equipe-2026.webp` (pas `IMG_2381.jpg`) |

### Exercices - Médias

<div class="grid grid-1-2" markdown>
  ![](./activite/momo/momo.jpg){.aspect-4-3}

  <small>Exercice - Vite et médias</small><br>
  **[Momo](./activite/momo/index.md){.stretched-link .back}**
</div>