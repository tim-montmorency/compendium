# Formats d'image
Il existe plusieurs formats d'images supportées dans les navigateurs. Concentrons-nous pour l'instant sur les formats les plus répandus.

## Gif

Le format `GIF` **(Graphics Interchange Format)** est un format d'image mis au point en 1987 utilisant une compression sans perte et pouvant être utilisé pour des animations. Il peut utiliser jusqu'à 8 bits par pixel avec un maximum de 256 couleurs parmi des nuances sur 24 bits.

➕ Supporte les animations.<br>
➕ Supporte la transparence.<br>
➖ Palette de couleurs limitée.<br>
➖ Peu performant.<br>

!!! warning

    Il est maintenant généralement plus performant d’utiliser une vidéo qu’un `GIF` pour afficher une animation.

## SVG

`SVG`**(Scalable Vector Graphics)** est un format d'image basé sur XML **(Extensible Markup Language)** qui est utilisé pour représenter des graphiques vectoriels. Contrairement aux images matricielles **(bitmap)** qui sont composées de pixels, les images vectorielles SVG sont composées de formes géométriques et de trajectoires mathématiques, ce qui leur permet de maintenir leur qualité et leur netteté, peu importe leur taille.

➕ Sans perte de qualité<br>
➕ Taille de fichier compacte<br>
➖ Complexité<br>
➖ Support limité par les anciens navigateurs<br>

!!! note

    SVG est utilisé dans divers contextes, notamment pour les logos, les icônes, les graphiques de données, les animations interactives et bien plus encore.

    Sa polyvalence et sa capacité à maintenir la qualité graphique en font un choix populaire pour la conception web et la création d'éléments visuels sur diverses plateformes.

## JPEG

Le `JPEG` ou `JPG` est un format d'image sorti en 1992. Il s'agit actuellement du format de compression avec perte le plus populaire. Il est particulièrement efficace avec les images numériques **(photographies)**. Cependant, son usage avec les diagrammes ou textes demandant des contours bien définis peut produire des résultats indésirables **(flou)**.

➕ Bon rendu des photographies.<br>
➕ Bonne performance.<br>
➖ Perte de qualité.<br>
➖ Rends flous les textes et lignes droites.<br>
➖ Aucun support pour les animations.<br>
➖ Aucune transparence.<br>


## PNG

Le `PNG` **(Portable Network Graphics)** est un format de fichiers sorti en 1996 supportant la compression de données sans perte. Autrement dit, il permet à une image de rester plus nette qu'avec un `JPEG`. En contre partie, son poids est généralement plus élevé.

➕ Aucune perte de qualité.<br>
➕ Garde les textes et lignes droites nettes.<br>
➕ Supporte la transparence.<br>
➖ Moins bonne performance que les JPEG.<br>
➖ Aucun support pour les animations.<br>


## WebP

Le format `WebP` est le plus jeune des formats parmi ceux mentionnés.** Il fut développé en 2010 par Google** dans le but de réduire la quantité de données circulant sur le web. C'est un format de compression d'image avec ou sans perte, selon la configuration choisie. En moyenne, une image `WebP` pèse 30% de moins qu'une image compressée en `JPEG` et offre une meilleure qualité d'image.

- Comparaison avec des JPEG
- Comparaison avec des PNG<br><br><br>
➕ Contrôle sur la qualité.<br>
➕ Garde les textes et lignes droites nettes.<br>
➕ Supporte les animations.<br>
➕ Supporte la transparence.<br>
➖ Non supporté sur Safari avant Big Sur (2020).<br>
➖ Non supporté sur Internet Explorer.<br>
