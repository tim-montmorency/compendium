# Optimiser les médias

!!! abstract "L'essentiel en 3 points"
    1. Les images et les vidéos pèsent presque toujours plus lourd que tout le reste du site réuni. Les optimiser, c'est le gain de vitesse le plus facile à obtenir.
    2. Quatre gestes : le **bon format**, les **bonnes dimensions**, le **chargement différé** (`loading="lazy"`) et la **place réservée** (`width` et `height`).
    3. On **mesure avant et après** dans l'onglet Réseau (Network) : c'est la preuve à inscrire dans l'onglet Correctifs de votre fichier QA.

<br>

C'est un indicateur du **critère 1** de votre grille : « Traitement optimisé des médias pour le web : format adapté à l'usage, compression appropriée, dimensions adéquates ». Le scénario 11 du gabarit QA le teste.

[:material-clipboard-check-multiple: Retour aux consignes QA du portfolio](../projets/portfolio/qa-portfolio.md){ .md-button }

## Mesurer d'abord { #mesurer }

![Impression-écran de la console, onglet "Réseau/Network"](./assets/optim-media-console-onglet-reseau.png)

1. Ouvrez votre site en ligne, puis l'inspecteur (F12) → onglet **Réseau** (Network).
2. Cochez **Désactiver le cache** (Disable cache), puis filtrez sur **[Img]**.
3. Rechargez la page (Ctrl + F5).
4. En bas de l'onglet : le **nombre *x*** d'images (*x* / y requests) et le **poids total *x*** transféré (*x* kB / y kB transferred).
5. Triez la colonne **Taille** (Size) : les plus lourdes en haut. Ce sont elles qu'on traite en premier.

!!! tip "Un repère"
    Une image de carte de projet devrait peser **quelques dizaines de Ko**, et une grande image d'en-tête rarement plus de **200 à 300 Ko**. Une photo de 3 Mo sortie directement de l'appareil ou de Figma, c'est un écart **majeur**. C'est trop lourd et ça ralentit le site. On peut facilement descendre à 100 à 200 Ko, voire moins, sans perte visible.

Notez le poids total **avant** vos corrections : vous le comparerez après.

## 1. Le bon format { #format }

| Contenu | Format | Pourquoi |
|---|---|---|
| Photo, capture, visuel de projet | **WebP** (ou AVIF) | Beaucoup plus léger que JPG ou PNG, à qualité égale. Supporté par tous les navigateurs récents. |
| Logo, icône, illustration vectorielle | **SVG** | Net à toutes les tailles, très léger. |
| Image avec transparence | **WebP** | Remplace le PNG, en plus léger. |
| Vidéo | **MP4** (H.264) | Lu partout. |

Pour convertir et compresser, sans rien installer : [Squoosh](https://squoosh.app/){ :target="_blank" }. Glissez l'image, choisissez **WebP** à droite, réglez la qualité (75 à 80, c'est souvent invisible), comparez avec le curseur au centre, puis téléchargez.

## 2. Les bonnes dimensions { #dimensions }

Une image de 4000 px de large affichée dans une carte de 400 px : le navigateur télécharge 10 fois trop de pixels, puis les jette.

**Règle simple** : environ **2 fois** la largeur d'affichage, pour rester net sur les écrans haute densité (ex. une carte affichée à 400 px → une image de 800 px).

Pour connaître la largeur d'affichage : inspecteur → survolez l'image dans l'onglet Éléments, sa taille s'affiche. Redimensionnez ensuite dans Squoosh (**Resize**), en même temps que la conversion.

## 3. Le chargement différé : `loading="lazy"` { #lazy }

Par défaut, le navigateur télécharge **toutes** les images de la page dès l'ouverture, même celles tout en bas que le visiteur ne verra peut-être jamais. Avec `loading="lazy"`, une image n'est téléchargée qu'à l'approche du défilement.

```html
<img src="assets/images/biome.webp"
     alt="Interface mobile de Biome : carte des sentiers"
     loading="lazy">
```

### Dans vos cartes générées en JavaScript

Une seule ligne de plus dans le gabarit de `createProjectCard()`, et toutes vos cartes en profitent :

```js
return `
  <article class="project-card">
    <img class="project-card__image"
         src="${project.image}"
         alt="${project.title}"
         loading="lazy">
    ...
  </article>
`;
```

!!! danger "Pas de `lazy` sur l'image du haut de la page"
    L'image d'en-tête (le *hero*), visible dès l'ouverture, doit s'afficher **tout de suite**. Avec `loading="lazy"`, elle arriverait en retard. Le chargement différé, c'est pour ce qui est **plus bas** dans la page.

## 4. Réserver la place : `width` et `height` { #dimensions-html }

Sans dimensions dans le HTML, le navigateur ne sait pas quelle place prendra l'image avant qu'elle arrive : le texte s'affiche, puis **saute** vers le bas quand l'image se charge. Avec `width` et `height`, la place est réservée d'avance.

```html
<img src="assets/images/biome.webp"
     alt="Interface mobile de Biome : carte des sentiers"
     width="800" height="600"
     loading="lazy">
```

Ce sont les dimensions **réelles du fichier**. Votre CSS garde le contrôle de la taille affichée :

```css
.project-card__image {
  width: 100%;
  height: auto;
}
```

Le navigateur s'en sert seulement pour connaître la **proportion** (ici 4:3) et réserver la bonne hauteur.

## Les vidéos { #videos }

Une vidéo de démo pèse souvent plus lourd que tout le reste du site. Deux attributs empêchent qu'elle se télécharge au complet avant qu'on clique sur Lecture :

```html
<video controls preload="none"
       poster="assets/images/biome-poster.webp">
  <source src="assets/videos/biome.mp4" type="video/mp4">
</video>
```

| Attribut | Rôle |
|---|---|
| `preload="none"` | Ne rien télécharger avant le clic sur Lecture |
| `poster` | L'image affichée à la place, en attendant |

Une vidéo longue ou très lourde? Hébergez-la sur YouTube ou Vimeo et intégrez-la : c'est leur serveur qui fait le travail.

## Mesurer après, et le documenter { #documenter }

Refaites la mesure de la [première section](#mesurer). Dans l'onglet **Correctifs** de votre fichier QA :

- **Correctif apporté** : « Images converties en WebP et redimensionnées à 800 px, `loading="lazy"` sur les cartes »;
- **Comment j'ai validé** : « Onglet Réseau (Network), filtre Img : 8,4 Mo → 620 Ko ».

Un avant et un après chiffrés : c'est exactement la preuve qu'attend la grille.

## Références

- [Chargement différé des images (MDN, en anglais)](https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Lazy_loading){ :target="_blank" }
- [L'élément `<img>` (MDN, en français)](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/img){ :target="_blank" }
- [Squoosh](https://squoosh.app/){ :target="_blank" } : convertir et compresser dans le navigateur
