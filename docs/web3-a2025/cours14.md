# Cours 14

## Optimisation

![](./assets/images/borg.gif){.w-100}

En Web, le temps de chargement constitue un enjeu central. Il est donc essentiel d’optimiser autant que possible les performances du site (images, scripts, requêtes, ressources inutiles), afin d’offrir une expérience fluide, inclusive et mieux positionnée dans les moteurs de recherche.

### Images

Les images sont souvent ce qui alourdit les pages Web. Il faut donc :

#### Redimensionner

Toutes les images doivent être à la taille **réelle** à laquelle elles seront affichées.  
Utilisez votre logiciel d’édition d’image ou un outil en ligne comme [ImageResizer.com](https://imageresizer.com/).

<iframe height="300" style="width: 100%;" scrolling="no" title="Bootstrap - Image fluid" src="https://codepen.io/tim-momo/embed/dyBYbqr?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/dyBYbqr">
  Bootstrap - Image fluid</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
      </iframe>

#### Compresser

![](./assets/images/reSmush.it.webp){data-zoom-image .w-50}

Une compression est effectuée automatiquement avec [reSmush.it](http://resmush.it/).  
Vous pouvez aussi optimiser vos images avec des outils comme [TinyPNG](https://tinypng.com/).

#### Choisir un bon format

Les formats modernes permettent de réduire le poids sans perte visible de qualité :

- [WebP](https://developer.mozilla.org/fr/docs/Glossary/WebP) : format d’image compressé (avec ou sans perte), développé par Google.
- [AVIF](https://developer.mozilla.org/fr/docs/Web/Media/Guides/Formats/Image_types) : format plus récent, souvent encore plus léger que WebP.

L'app web <https://squoosh.app/> permet d'exporter facilement en WebP ou AVIF.

### Compression du code

![](./assets/images/minify-css.png){data-zoom-image}

Pour accélérer le chargement des pages, il est important de réduire la taille des fichiers **CSS** et **JavaScript**.

On utilise pour cela la **minification** :

- suppression des espaces et retours de ligne inutiles ;
- suppression des commentaires ;
- parfois renommage de certaines variables ou fonctions.

### Optimisation des vidéos

![](./assets/images/webm.png){data-zoom-image .w-50}

Les vidéos sont des fichiers très lourds. Quelques bonnes pratiques :

- Toujours **compresser** la vidéo avant de la publier (ex. : avec [HandBrake](https://handbrake.fr/)) ;
- Éviter d’héberger directement sur le site des vidéos trop lourdes (ex. : > 50 Mo) ;
- Privilégier un **hébergement externe** (YouTube, Vimeo, etc.) et intégrer la vidéo avec une balise `<iframe>`.

#### Formats recommandés

- **MP4** : très compatible avec la plupart des navigateurs et appareils.
- [**WebM**](https://developer.mozilla.org/fr/docs/Glossary/WebM) : souvent plus léger à qualité équivalente, idéal pour le Web.

<!-- --------- -->
<!-- --------- -->
<!-- --------- -->

## Introduction aux classes JavaScript

![](./assets/images/clone.gif){.w-100}

Une **classe** en JavaScript, c’est une façon de créer un **modèle** (comme un _blueprint_) pour fabriquer plusieurs objets qui partagent la même structure et le même comportement.

### Pourquoi utiliser ça ?

Imaginez que vous voulez programmer une page Web dans laquelle des poissons nagent indépendamment.

Vous pourriez écrire le code d’un premier poisson… puis copier-coller ce code pour en avoir un deuxième, un troisième, etc.  
Rapidement, on obtient beaucoup de répétition et le code devient exponentiellement difficile à maintenir.

Avec une classe :

- On définit une seule fois une classe `Poisson`.
- Chaque nouveau poisson créé à partir de cette classe utilise le **même code**.
- Que vous ajoutiez 3 poissons ou 1 000 000, ils partagent tous la même logique.

### Comment ça fonctionne ?

On commence par créer une classe avec un **constructeur**. En gros, c'est une fonction spéciale qui sert à **initialiser les propriétés** de chaque objet créé.

```js
class Poisson {
  constructor(nom, couleur) {
    this.nom = nom;
    this.couleur = couleur;
  }

  etat() {
    console.log(`${this.nom} (${this.couleur}) nage joyeusement.`);
  }

  greetings(target) {
    console.log(`${this.nom} salue ${target.nom}`);
  }
}

// Création de trois instances (objets) de la classe Poisson
const poisson1 = new Poisson("Nemo", "orange");
const poisson2 = new Poisson("Dory", "bleu");
const poisson3 = new Poisson("Sharky", "gris");

// Appel d'une méthode sur chaque poisson
poisson1.etat(); // Nemo (orange) nage joyeusement.
poisson2.etat(); // Dory (bleu) nage joyeusement.
poisson3.etat(); // Sharky (gris) nage joyeusement.

// Interaction entre deux poissons
poisson3.greetings(poisson1); // Sharky salue Nemo
```

## Exercices

<div class="grid grid-1-2" markdown>
  ![](./exercices/dnd/dnd.png)

  <small>Exercice - Classes JavaScript</small><br> 
  **[D&D](./exercices/dnd/index.md){.stretched-link .back}**
</div>

<div class="grid grid-1-2" markdown>
  ![](./exercices/1001poissons/preview.webp)

  <small>Exercice facultatif - JavaScript</small><br>
  **[1001 poissons](./exercices/1001poissons/index.md){.stretched-link .back}**
</div>

## TP2
 
<div class="grid grid-1-2" markdown>
  ![](./tp/hud/giphy.gif)

  <small>TP</small><br>
  **[HUD](./tp/hud/index.md){.stretched-link .back}**
</div>

[STOP]

Notions omises : 

- Héritage
- Variables publiques et privées
- Méthodes statiques
