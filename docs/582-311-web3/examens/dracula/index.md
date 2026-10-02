# Examen 01

![](./dracula.jpg){ .w-100 }

L'examen est sur 20 points et représente **25 %** de la note finale.

Durée **2 h 45**

## Résultat attendu

[Ouvrir dans le navigateur](https://tim-w3.github.io/dracula-solution/){ .md-button .md-button--primary }

## Consignes 

### Mise en place :coin:

- [ ] [Accepter le devoir Classroom 50](https://classroom50.org/tim-w3/web-3/assignments/dracula/accept)
- [ ] Cloner le répertoire avec GitHub Desktop
- [ ] Ouvrir le dossier cloné dans VSCode
- [ ] Installer les packages de départ du `package.json`
- [ ] Lancer le serveur de développement Vite et ouvrir l'adresse affichée

### Packages :coin::coin:

Le site utilise trois _packages_ supplémentaires : **Fontsource** (UnifrakturCook), **Lucide** et **Animate.css**.

- [ ] Installer les trois paquets
- [ ] Vérifier dans `package.json` que les trois _packages_ y sont
- [ ] Dans `style.css` :
  - [ ] Importer la fonte « UnifrakturCook » et l'appliquer à tout le site (police `sans` par défaut)
  - [ ] Importer Lucide
  - [ ] Importer animate.css
- [ ] Effectuer un commit et un push

### Thèmes :coin::coin:

- [ ] Configurer DaisyUI avec le thème `dracula` (par défaut)
- [ ] Appliquer le thème `dracula` sur la balise `<html>`
- [ ] Le `<body>` occupe au minimum toute la hauteur de l'écran et utilise la couleur de fond `base-200`
- [ ] Effectuer un commit et un push

### Structure :coin::coin::coin::coin::coin:

- [ ] Dans le `<body>`, ajouter un conteneur (`<div>`) qui occupe toute la hauteur de l'écran
- [ ] Ce conteneur est une colonne flex dont le contenu est centré horizontalement et verticalement, avec un espacement de `4` entre les éléments
- [ ] Y ajouter un titre 1 « Dracula »
  - [ ] Très grand texte (`6xl`)
  - [ ] Couleur `neutral` du thème
- [ ] Sous le titre, ajouter une `<div>` qui sera une grille à 3 colonnes
  - [ ] Espacement de `4` entre les cellules
  - [ ] Taille de texte `6xl` (pour les icônes)
- [ ] Effectuer un commit et un push

### Tic-tac-toe :coin::coin::coin::coin::coin:

- [ ] Dans la grille à 3 colonnes, ajouter 9 `div` carrées (ratio 1:1)
- [ ] Dans chaque cellule, placer une icône Lucide : [`x`](https://lucide.dev/icons/x) ou [`circle-small`](https://lucide.dev/icons/circle-small)
- [ ] Respecter la disposition et les couleurs du thème suivantes :

|   | Colonne 1 | Colonne 2 | Colonne 3 |
| :--- | :---: | :---: | :---: |
| **Rangée 1** | ✕ `secondary` | ○ `primary` | ○ `accent` |
| **Rangée 2** | ✕ `secondary` | ○ `accent` | ✕ `secondary` |
| **Rangée 3** | ○ `accent` | ✕ `secondary` | ○ `primary` |

- [ ] Effectuer un commit et un push

### Animations :coin::coin:

Les animations proviennent d'Animate.css

- [ ] Le titre apparaît en glissant du haut (`fadeInDown`)
- [ ] La grille apparaît en glissant du bas (`fadeInUp`)
- [ ] Chaque **✕** apparaît en tournant (`rotateIn`)
- [ ] Effectuer un commit et un push

### Finition :coin:

- [ ] Indenter correctement le code
- [ ] Effectuer un commit et un push

### GitHub Pages :coin::coin:

- [ ] Dans votre compte GitHub, créer un nouveau répertoire nommé « dracula-NOM-PRENOM » (remplacer NOM et PRENOM par votre nom et prénom)
- [ ] Y ajouter le contenu d'un build Vite (ex. : `index.html` et le dossier `/assets`)
- [ ] Configurer GitHub Pages pour mettre le build en ligne
- [ ] Dans le fichier `README.md` de l'examen, à la racine du devoir Classroom, ajouter l'URL du site
- [ ] Effectuer un commit et un push

Bravo c'est fini !