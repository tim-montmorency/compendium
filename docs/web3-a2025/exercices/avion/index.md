# L'avion

L'objectif de cet exercice est d'animer simplement une image de gauche à droite avec AnimeJS. Afin de réussir correctement l'exercice, vous devrez utiliser les notions suivantes : 

* `offsetWidth` : Pour prévoir la distance à parcourir
* `loop` : pour boucler l'animation
* `duration` : pour contrôler la vitesse de l'animation

## Résultat attendu

<iframe class="aspect-16-9" height="300" style="width: 100%;" scrolling="no" title="AnimeJS - Avion" src="https://codepen.io/tim-momo/embed/zxrpjaw?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/zxrpjaw">
  AnimeJS - Avion</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Consignes

### Préparation

- [ ] Créer un dossier « avion »
- [ ] Dans le dossier avion, faire un `npm init -y` pour initialiser le projet
- [ ] Dans le dossier avion, faire un `npm i animejs` pour installer AnimeJS
- [ ] Dans le dossier avion, créer un dossier « assets »
- [ ] Dans le dossier assets, créer un dossier « img »
- [ ] Télécharger les [images](./images.zip){download} et les déplacer dans le dossier img
- [ ] Dans le dossier avion, créer un dossier « src »
- [ ] Dans src, créer un dossier « js » et un dossier « css »
- [ ] Dans le dossier css, créer un fichier `styles.css`
- [ ] Dans le dossier js, créer un fichier `script.js`
- [ ] Dans le dossier avion, créer un fichier `index.html`, inclure la structure HTML de base et lier les fichiers css et js
- [ ] Dans `<body>`, ajouter l'image de l'avion en papier

### `styles.css`

- [ ] Sur body, ajouter l'image `top-view.jpg` en background image cover
- [ ] Sur body, appliquer un display grid
- [ ] Sur body, aligner les items au centre
- [ ] Sur body, justifier le contenu au `start`
- [ ] Sur body, configurer une hauteur minimale de `100vh`

- [ ] Ajouter un style sur les **images** et y appliquer un `width` de `100px`

### `script.js`

- [ ] Importer la librairie `animate` d'AnimeJS
- [ ] Déterminer la largeur de la page dans une variable (avec `offsetWidth`)
- [ ] Déterminer la largeur de l'image avec `offsetWidth`
- [ ] Créer une animation AnimeJS : 
  - [ ] Translation sur l'axe des X comme dans le résultat attendu (noter que l'avion ne dépasse pas le cadre de la page)
  - [ ] Boucler l'animation
  - [ ] La durée de l'animation devrait être de 4 secondes

