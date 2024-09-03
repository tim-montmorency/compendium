[:material-arrow-u-left-top:](../phaser-objects.md){ .breadcrumb }

# Installation de base

## Objectif

Installer un projet Phaser de base

## Code de départ

```html title="index.html"
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">

    <title>Modèle</title>
    <meta name="description" content="">
    <meta name="author" content="">

    <link href="./src/css/styles.css" rel="stylesheet">

    <script src="./node_modules/phaser/dist/phaser.min.js"></script>
    <script src="./src/js/scenes/Intro.js"></script>
    <script src="./src/js/init.js" defer></script>
</head>
<body>
    <div id="canvas-wrapper"></div>
</body>
</html>
```

```css title="src/css/styles.css"
body {
    font-family: Helvetica, Arial, sans-serif;
    color: #ccc;
    background-color: #222;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
}

canvas {
    border-radius: 1rem;
    border: 4px solid rgba(0,0,0,0.2);
}
```

```js title="src/js/init.js"
const config = {
    type: Phaser.AUTO,
    parent: "canvas-wrapper",
    width: 800,
    height: 600,
    scene: Intro
};
const game = new Phaser.Game(config);
```

```js title="src/js/scenes/Intro.js"
class Intro extends Phaser.Scene {

    preload() {

    }

    create() {
        const text = this.add.text(10, 10, "Ludwig van Beethoven");
    }

    update() {

    }
}
```

## Structure finale

```
Modele
│
├── index.html
├── node_module/
├── jsconfig.json
├── package-lock.json
├── package.json
└── src/
    ├── css/
    |   └── styles.css
    └── js/
        ├── init.js
        └── scenes/
            └── Intro.js
```

## Consignes

- [ ] Créer un nouveau dossier nommé « Modele »
- [ ] En ligne de commande, déplacez-vous dans ce dossier avec la commande `cd`
- [ ] Exécuter `npm install phaser@v3.80.1` pour installer la librairie Phaser
- [ ] (facultatif) Ajouter un fichier `jsconfig.json` à la racine et y inscrire `{"include": ["src/**/*", "node_modules/phaser/types/**/*.d.ts"]}` pour apprendre à VSCode les fonctionnalités de Phaser
- [ ] Ajouter un fichier `index.html` avec le contenu HTML indiqué plus haut
- [ ] Ajouter un fichier `styles.css` dans le dossier `src/css` avec le contenu CSS indiqué plus haut
- [ ] Ajouter un fichier `init.js` dans le dossier `src/js` avec le contenu JavaScript indiqué plus haut
- [ ] Ajouter un fichier `Intro.js` dans le dossier `src/js/scenes` avec le contenu JavaScript indiqué plus haut
- [ ] Dans VSCode, cliquez sur `index.html` puis sur « Go Live »
- [ ] Si vous lisez « Ludwig van Beethoven » dans votre navigateur, c'est que tout fonctionne parfaitement !
