# Reprise Examen 01

L'examen est sur 20 points et représente **25 %** de la note finale.

**À remettre le 9 octobre avant minuit**

## Résultat attendu

![type:video](./preview.webm){.h-auto}

## Consignes 

### Mise en place :coin:

- [ ] [Accepter le devoir Classroom 50](https://classroom50.org/tim-w3/web-3/assignments/reprise-examen-01/accept)
- [ ] Cloner le répertoire avec GitHub Desktop
- [ ] Ouvrir le dossier cloné dans VSCode
- [ ] Installer les packages de départ du `package.json`
- [ ] Lancer le serveur de développement Vite et ouvrir l'adresse affichée

### Packages :coin::coin:

Le site utilise trois _packages_ supplémentaires : **Fontsource** (Permanent Marker), **Lucide** et **Animate.css**.

- [ ] Installer les trois paquets
- [ ] Vérifier dans `package.json` que les trois _packages_ y sont
- [ ] Dans `style.css` :
  - [ ] Importer la fonte « Permanent Marker » et l'appliquer à tout le site (police `sans` par défaut)
  - [ ] Importer Lucide
  - [ ] Importer animate.css
- [ ] Effectuer un commit et un push

### Thèmes :coin::coin:

- [ ] Configurer DaisyUI avec le thème `nord` (par défaut)
- [ ] Appliquer le thème `nord` sur la balise `<html>`
- [ ] Le `<body>` occupe au minimum toute la hauteur de l'écran et utilise la couleur de fond `base-300`
- [ ] Effectuer un commit et un push

### Structure :coin::coin::coin::coin::coin:

- [ ] Dans le `<body>`, ajouter un conteneur (`<div>`) qui occupe toute la hauteur de l'écran
- [ ] Ce conteneur est une colonne flex dont le contenu est centré horizontalement et verticalement, avec un espacement de `4` entre les éléments
- [ ] Y ajouter un titre 1 « Poker »
  - [ ] Très grand texte (`8xl`)
  - [ ] Couleur `accent` du thème
- [ ] Sous le titre, ajouter une `<div>` qui sera une grille à 2 colonnes
  - [ ] Espacement de `4` entre les cellules
  - [ ] Taille de texte `9xl` (pour les icônes)
- [ ] Effectuer un commit et un push

### Cartes :coin::coin::coin::coin:

- [ ] Dans la grille, ajouter 4 `div` carrées (ratio 1:1)
- [ ] Dans chaque cellule, placer une icône Lucide : [`diamond`](https://lucide.dev/icons/diamond), [`club`](https://lucide.dev/icons/club), [`spade`](https://lucide.dev/icons/spade) ou [`heart`](https://lucide.dev/icons/heart)
- [ ] Respecter l'ordre et les couleurs du thème suivants :

| Cellule 1 | Cellule 2 | Cellule 3 | Cellule 4 |
| :---: | :---: | :---: | :---: |
| ♦ `diamond` | ♣ `club` | ♠ `spade` | ♥ `heart` |
| `primary` | `secondary` | `primary` | `secondary` |

- [ ] Effectuer un commit et un push

### Animations :coin::coin:

Les animations proviennent d'Animate.css

- [ ] Le titre apparaît en glissant du haut (`fadeInDown`)
- [ ] La grille apparaît en glissant du bas (`fadeInUp`)
- [ ] Chaque icône apparaît en grossissant (`zoomIn`)
- [ ] Effectuer un commit et un push

### Responsive :coin:

- [ ] Sous le breakpoint `md`, la grille de cartes est cachée (seul le titre reste affiché)
- [ ] À partir de `md`, la grille s'affiche sur 2 colonnes (2 × 2)
- [ ] À partir de `xl`, la grille s'affiche sur 4 colonnes (une seule rangée)
- [ ] Effectuer un commit et un push

### Finition :coin:

- [ ] Indenter correctement le code
- [ ] Effectuer un commit et un push

### GitHub Pages :coin::coin:

- [ ] Dans votre compte GitHub, créer un nouveau répertoire nommé « poker-NOM-PRENOM » (remplacer NOM et PRENOM par votre nom et prénom)
- [ ] Y ajouter le contenu d'un build Vite (ex. : `index.html` et le dossier `/assets`)
- [ ] Configurer GitHub Pages pour mettre le build en ligne
- [ ] Dans le fichier `README.md` de l'examen, à la racine du devoir Classroom, ajouter l'URL du site
- [ ] Effectuer un commit et un push
