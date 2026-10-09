---
tags:
  - Exercice
  - Vite
  - Médias
---

# Momo

![](./momo.jpg){.w-100}

L'objectif de cet exercice est de monter un projet Vite, d'y intégrer des **médias optimisés** et d'installer **seul** une nouvelle librairie JavaScript.

## Résultat attendu

![type:video](./preview.webm){.h-auto}

- Une vidéo plein écran, sans son, qui démarre seule et joue en boucle
- Un voile sombre par-dessus la vidéo pour rendre le texte lisible
- Le logo centré
- Le texte « Collège Montmorency » s'efface, puis est remplacé par « MOMO »

## Consignes

- [ ] [Accepter le devoir Classroom 50](https://classroom50.org/tim-w3/web-3/assignments/momo/accept)
- [ ] Cloner le répertoire avec GitHub Desktop
- [ ] Ouvrir le dossier cloné dans VSCode

Le répertoire contient deux médias non optimisés :

| Fichier | État |
| --- | --- |
| `Vidéo pas optimisée 5c43af714.mp4` | 15 secondes, 4K, avec piste audio, environ 30&nbsp;Mo |
| `logo.png` | PNG pleine résolution |

### 1. Le projet Vite

- [ ] Dans le terminal, à la racine du répertoire cloné, créer le projet Vite **dans le dossier courant**&nbsp;:
    ```bash
    npm create vite@latest .
    ```
    - Framework&nbsp;: **Vanilla**
    - Variante&nbsp;: **JavaScript**
- [ ] Nettoyer le projet de base&nbsp;: vider `src/style.css`, retirer le code de démonstration de `src/main.js` et de `index.html`, supprimer `counter.js`
- [ ] Vérifier que la page s'affiche (vide) avec `npx vite`

### 2. Tailwind

- [ ] Installer Tailwind dans le projet, comme vu au cours 7
- [ ] Vérifier que `src/style.css` est bien **importé par `main.js`**
- [ ] Tester avec une classe Tailwind quelconque avant de passer à la suite

### 3. La vidéo

La vidéo fournie est beaucoup trop lourde pour le Web. Avant de l'intégrer&nbsp;:

- [ ] **Renommer** le fichier&nbsp;: minuscules, sans espace ni accent, avec un nom descriptif (ex.&nbsp;: `fond-momo`)
- [ ] **Réduire la résolution**&nbsp;: 1920&nbsp;px de large au maximum (1280&nbsp;px suffit pour un fond)
- [ ] **Retirer la piste audio**&nbsp;: la vidéo sera muette de toute façon
- [ ] **Compresser** jusqu'à obtenir un fichier de **moins de 5&nbsp;Mo**
- [ ] Produire deux versions&nbsp;: une en **WebM**
- [ ] Placer le fichiers dans `src/assets/videos/`

??? tip "Outils"

    DaVinci Resolve permet de tout faire&nbsp;: redimensionner, retirer l'audio, compresser et exporter en MP4 ou en WebM ;)

### 4. Le logo

- [ ] Redimensionner `logo.png` à **160&nbsp;px de large**
- [ ] Le convertir en **WebP** ou en **AVIF**
- [ ] Le placer dans `src/assets/images/`, avec un nom en minuscules (ex.&nbsp;: `logo-momo.webp`)

??? tip "Outil"

    [Squoosh](https://squoosh.app/) redimensionne et convertit en une seule étape.

### 5. La structure

- [ ] Dans `index.html`, reprendre la structure **« Texte sur image »** vue au cours 3
- [ ] Remplacer l'image d'arrière-plan par une balise `<video>` qui&nbsp;:
    - [ ] démarre seule, sans son, et joue en boucle, **aussi sur mobile**
    - [ ] lis le WebM
    - [ ] couvre toute la section sans être déformée
- [ ] Ajouter le logo au centre
- [ ] Sous le logo, ajouter un titre `<h1>` contenant le texte « Collège Montmorency »

### 6. Typed.js

[Typed.js](https://mattboldt.com/demos/typed-js/) est une librairie qui simule l'écriture d'un texte au clavier, lettre par lettre.

- [ ] Trouver comment **installer Typed.js avec npm** et comment l'**importer** dans `main.js`
- [ ] Faire en sorte que le titre écrive « Collège Montmorency », l'efface, puis écrive « MOMO »

??? tip "Indice"

    La page de démonstration montre surtout des exemples. Les instructions d'installation sont plus claires sur la [page GitHub du projet](https://github.com/mattboldt/typed.js).

    Cherchez "General ESM Usage"
