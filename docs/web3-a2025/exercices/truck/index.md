# Le truck

L'objectif de cet exercice est d'animer la voiture de gauche à droite tout en animant ses roues.

## Résultat attendu

<iframe class="aspect-16-9" height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/tim-momo/embed/qEbpYvo?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/qEbpYvo">
  Untitled</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Consignes

### Préparation

- [ ] Créer un dossier « truck »
- [ ] Dans le dossier truck, faire un `npm init -y` pour initialiser le projet
- [ ] Dans le dossier truck, faire un `npm i animejs` pour installer AnimeJS
- [ ] Dans le dossier truck, créer un dossier « assets »
- [ ] Dans le dossier assets, créer un dossier « img »
- [ ] Télécharger les [images](./images.zip){download} et les déplacer dans le dossier img
- [ ] Dans le dossier truck, créer un dossier « src »
- [ ] Dans src, créer un dossier « js » et un dossier « css »
- [ ] Dans le dossier css, créer un fichier `styles.css`
- [ ] Dans le dossier js, créer un fichier `script.js`
- [ ] Dans le dossier truck, créer un fichier `index.html`, inclure la structure HTML de base et lier les fichiers css et js
- [ ] Dans `<body>`, ajouter une div avec la classe `car`
- [ ] Dans la div, ajouter l'image `frame.png` et et deux images `wheel.png`
- [ ] Sur chaque image, ajouter une classe

### `styles.css`

- [ ] Sur body, ajouter l'image `landscape.jpg` en background image
- [ ] Sur body, ajouter un `background-size` de `auto 100%` pour créer un fond infini sur l'axe des X
- [ ] Sur body, configurer une hauteur minimale de `100vh`
- [ ] Sur body, appliquer un `overflow` à `hidden` pour éviter les scrolls

- [ ] Sur `.car`, ajouter une position absolue et positionner la voiture verticalement en pourcentage.

- [ ] Positionner coorectement les deux roues en position absolue 

### `script.js`

- [ ] Importer la librairie `animate` et `waapi` d'AnimeJS
- [ ] Animer la voiture sur l'axe des x
  - [ ] Boucler l'animation
  - [ ] Durée 4 secondes
  - [ ] Lissage linéaire
- [ ] Animer les roues en lissage linéaire également

- [ ] BONUS, animer le tout avec `waapi` 🤌