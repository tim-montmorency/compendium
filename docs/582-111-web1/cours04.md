# Cours 4

[STOP]

Médias et formats Web
Transparence
Contexte de navigation imbriqué (iframe)
Figure et légende
blockquote / cite

## Formats d’image

![](./assets/images/vector-bitmap-banner.jpg)

https://developer.mozilla.org/fr/docs/Web/Media/Guides/Formats/Image_types

Il existe essentiellement deux types d’images utilisés en Web : les images **vectorielles** et les images **matricielles** (ou *bitmap* en anglais).

## Vectoriel vs Matriciel

![icon (10)](https://github.com/user-attachments/assets/343eb750-1f49-4727-93fc-8857f7c67762)
[matrices & vecteurs](./autres/vectoriel-vs-matriciel.md)

### Vectoriel

Les images vectorielles sont construites à partir de **vecteurs mathématiques**. Ce type d’image est parfois un peu plus exigeant à charger pour le processeur, mais il a l’avantage de rester lisse lorsqu'on l'étire ou on l'agrandit.

Pour créer ou modifier une image vectorielle, on utilise des logiciels de dessin **vectoriel**, comme :

- [Adobe Illustrator](https://www.adobe.com/ca_fr/products/illustrator.md)
- [Figma](https://www.figma.com/fr-fr/)
- [Affinity Designer](https://affinity.serif.com/en-us/designer/)

Le format utilisé en Web est le `.svg` (Scalable Vector Graphics).

### Matriciel

Les images matricielles, quant à elles, sont composées de **pixels**. C’est comme un tableau dans lequel chaque case représente un pixel. 

Lorsqu’on agrandit ce type d'image, on perd en qualité, car les pixels deviennent visibles. C’est ce qu’on appelle la **pixellisation** 😡.

Les formats courants sont :

| Format | Description |
|--------|-------------|
| `.jpg` ou `.jpeg` | Compression avec perte. Idéal pour les photos. Pas de transparence. |
| `.png` | Compression sans perte. Supporte la transparence alpha. |
| `.gif` | 256 couleurs maximum. Supporte l’animation et la transparence binaire. |
| `.webp` / `.avif` | Format moderne au poids optimisé. Très léger. |

Ces formats sont généralement produits avec des outils comme :

- [Photoshop](https://www.adobe.com/fr/products/photoshop.md)
- [Photopea](https://www.photopea.com/) (en ligne)
- [Affinity Photo](https://affinity.serif.com/fr/photo/)

!!! example "Exercice éclair"

    <div class="grid-auto grid" markdown>
    ![](./assets/images/wizard.gif)

    > « Observe les deux images ci-dessous. Peux-tu identifier laquelle est une image **vectorielle** et laquelle est **matricielle** ? »
    </div>

    <div class="grid">
    <figure>
    <iframe height="300" style="width: 100%;" scrolling="no" title="Web 1 - Formatage" src="https://codepen.io/tim-momo/embed/bNdyvar?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href="https://codepen.io/tim-momo/pen/bNdyvar">
    Web 1 - Formatage</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
    on <a href="https://codepen.io">CodePen</a>.
    </iframe>
    <figcaption>A</figcaption>
    </figure>

    <figure>
    <iframe height="300" style="width: 100%;" scrolling="no" title="Web 1 - Vector" src="https://codepen.io/tim-momo/embed/raVgKNM?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href="https://codepen.io/tim-momo/pen/raVgKNM">
    Web 1 - Vector</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
    on <a href="https://codepen.io">CodePen</a>.
    </iframe>
    <figcaption>B</figcaption>
    </figure>
    </div>

## Types de transparence

Il existe deux types de transparence : **alpha** et **binaire**.

- La **transparence binaire** signifie qu’un pixel est soit **totalement opaque**, soit **totalement transparent**. Il n’y a pas d'entre deux.
- La **transparence alpha** permet d'avoir des pixels partiellement transparents.

Voici un exemple de la même image enregistrée en `.png` et en `.gif` :

<div class="grid" markdown>
<figure markdown>
![](./assets/images/alpha.png){ data-zoom-image }
<figcaption>Transparence alpha (png)</figcaption>
</figure>

<figure markdown>
![](./assets/images/alpha.gif){ data-zoom-image }
<figcaption>Transparence binaire (gif)</figcaption>
</figure>
</div>

## Médias

### Audio

Balise : [`<audio>`](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/audio)

```html title="Exemple le plus simple"
<audio controls src="musique.mp3"></audio>
```

Attributs

* **autoplay** :octicons-play-16: : Démarre la lecture automatiquement. Désactivé par défaut sur la plupart des navigateurs pour des raisons de UX.
* **controls** :material-play-pause: : Affiche les contrôles du lecteur (lecture, pause, volume). Pas obligatoire, mais un peu oui ;), parce que l'autoplay ne fonctionne pas vraiment.
* **loop** :material-repeat-variant: : Fait jouer l’audio en boucle.
* **muted** :material-volume-mute: : L’audio est désactivé.
* **preload** :material-progress-download: : Indique comment le navigateur doit gérer le chargement de l’audio :
  * none : Ne préchargera rien (idéal si on veut économiser la bande passante)
  * metadata : Préchargera uniquement les métadonnées (durée, dimensions)
  * auto : Laisse le navigateur choisir (c'est la valeur par défaut)

Formats recommandés :

* `.mp3`
* `.ogg`
* `.wav`

C'est possible aussi d'utiliser une méthode de chargement avec la balise [`<source>`](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/source). 

Elle permet de fournir **plusieurs formats** au navigateur et le laisse choisir celui qui est compatible. Celui-ci commence par essayer la lecture du premier format. S'il n'est pas compatible, il essaye le deuxième et ainsi de suite.

Si rien ne fait, le navigateur peut afficher un message spécifié dans la balise `<audio>`. Voici un exemple : 

```html title="Exemple complet"
<audio controls loop preload="metadata">
  <source src="https://assets.codepen.io/9367036/NyanCatoriginal.ogg" type="audio/ogg; codecs=vorbis" />
  <source src="https://assets.codepen.io/9367036/NyanCatoriginal.mp3" type="audio/mpeg">
  <p>
    Votre navigateur ne prend pas en charge l'audio HTML.
    <a href="https://assets.codepen.io/9367036/NyanCatoriginal.mp3" download>Télécharger l’audio</a>.
  </p>
</audio>
```

<iframe height="300" style="width: 100%;" scrolling="no" title="Web 1 - Formatage" src="https://codepen.io/tim-momo/embed/ZYbWWrJ?default-tab=html%2Cresult&editable=true&theme-id=50210" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/ZYbWWrJ">
  Web 1 - Formatage</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Vidéo

Balise : `<video>`

Attributs :

* controls, autoplay, loop, muted, poster, width, height

Formats recommandés :

* `.mp4` (H.264)
* `.webm`
* `.ogg`

Exemple :

```html
<video controls width="400">
  <source src="video.mp4" type="video/mp4">
  Votre navigateur ne supporte pas l’élément vidéo.
</video>
```


## La balise `<img>` et ses attributs

### Syntaxe de base

```html
<img src="chaton.jpg" alt="Un petit chat mignon" width="300" height="200" title="Ceci est un chaton trop mignon">
```

### Attributs principaux

- `src` : chemin de l’image
- `alt` : description pour l’accessibilité (obligatoire)
- `title` : info-bulle au survol
- `width` / `height` : dimensions de l’image

### ✅ Bonnes pratiques

- Toujours inclure `alt`
- Redimensionner l’image avant l’import si nécessaire
- Éviter les images trop lourdes ou disproportionnées

## `<figure>` et `<figcaption>`

Permet de regrouper une image et sa légende de manière sémantique :

```html
<figure>
  <img src="lune.jpg" alt="La Lune vue de la Terre">
  <figcaption>La Lune, notre unique satellite naturel.</figcaption>
</figure>
```

## Intégration de médias externes avec `<iframe>`

### Utilisation de la balise `<iframe>`

Permet d’intégrer du contenu externe, comme :

- **Vidéos YouTube ou Vimeo**
- **Cartes interactives Google Maps**

### Exemples :

```html
<!-- Vidéo YouTube -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowfullscreen></iframe>

<!-- Carte Google Maps -->
<iframe 
  src="https://www.google.com/maps/embed?pb=..." 
  width="600" 
  height="450" 
  style="border:0;" 
  allowfullscreen>
</iframe>
```

### Conseils

- Adapter les dimensions à votre mise en page
- Toujours tester le lien intégré
- S’assurer que le contenu soit pertinent et bien intégré

## Citations en HTML

| Balise         | Usage                                              |
|----------------|----------------------------------------------------|
| `<q>`          | Courte citation à l’intérieur d’un paragraphe      |
| `<blockquote>` | Citation longue en bloc                            |
| `<cite>`       | Source d’une œuvre ou citation                     |

### Exemples :

```html
<p>Comme disait Socrate : <q>Connais-toi toi-même</q>.</p>

<blockquote>
  <p>L’art de la citation est l’art de ceux qui ne savent pas réfléchir par eux-mêmes.</p>
  <cite>— Voltaire</cite>
</blockquote>
```

## Audio

![icon-2](https://github.com/user-attachments/assets/78a79fa3-26b2-4f43-98a1-ed3c6c06aa76)

[La balise `<audio>`](https://tim-montmorency.com/compendium/582-111–web1/html/audio.md)


## Formats Audio

![icon-3](https://github.com/user-attachments/assets/ed7e34fd-6758-4d62-8c4b-471843167243)

[MP3, AAC, OGG, AV, FLAC, WebM, M4A](https://tim-montmorency.com/compendium/582-111–web1/autres/formats-audio.md)


## Video

![icon-4](https://github.com/user-attachments/assets/96389013-540b-4fa5-b71a-e74a22ca47f0)
[La balise `<video>`](https://tim-montmorency.com/compendium/582-111–web1/html/video.md)


## Formats Video

![icon-5](https://github.com/user-attachments/assets/82375a28-e835-44a5-b59c-1ba6244d3b67)
[MP4, MKV, MOV, WMV, WebM](https://tim-montmorency.com/compendium/582-111–web1/autres/formats-video.md)


## Légende de média

![icon (11)](https://github.com/user-attachments/assets/06b771e6-f137-4ea3-9b38-2676b1663d45)
[figure, figcaption](https://tim-montmorency.com/compendium/582-111–web1/html/legende-media.md)
<br>
<br>

## iFrame

![icon](https://github.com/user-attachments/assets/a91b30c9-6f96-4ee5-87cc-9869d982689a)
[youtube, vimeo, google map, etc.](https://tim-montmorency.com/compendium/582-111–web1/html/iframe.md)
<br>
<br>

## Citation

![icon (13)](https://github.com/user-attachments/assets/11b190dc-1e88-41a5-a222-e4411af99ebc)
[q, blockquote, cite](https://tim-montmorency.com/compendium/582-111–web1/html/citation.md)

## Exercice sur les balises HTML

![1-290880aa](https://github.com/user-attachments/assets/029a2a4d-b521-4345-ad0a-050a7e65b6a8)
[Exercice sur les balises en HTML](https://tim-montmorency.com/compendium/582-111–web1/exercices/les-balises.md)

## TP

