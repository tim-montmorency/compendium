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

<!-- 
- Une vidéo plein écran, sans son, qui démarre seule et joue en boucle
- Un voile sombre par-dessus la vidéo pour rendre le texte lisible
- Le logo centré
- Le texte « Collège Montmorency » s'efface, puis est remplacé par « MOMO » 
-->

## Consignes

- [ ] [Accepter le devoir Classroom 50](https://classroom50.org/tim-w3/web-3/assignments/momo/accept)
- [ ] Cloner le répertoire avec GitHub Desktop
- [ ] Ouvrir le dossier cloné dans VSCode

  !!! bug "Le répertoire contient des médias non optimisés"

### Départ

- [ ] Dans le terminal, à la racine du répertoire cloné, créer le projet Vite **dans le dossier courant** (Vanilla, JavaScript)
- [ ] Nettoyer le projet de base en retirant le code exemple
- [ ] Installer Tailwind dans le projet (pas besoin de DaisyUI) :
  - [ ] Installer les paquets avec `npm`
  - [ ] Créer `vite.config.js` à la racine du projet et y ajouter le plugin Tailwind
  - [ ] Importer Tailwind dans `src/style.css`
  - [ ] Arrêter le serveur et le redémarrer (nécessaire pour que Vite reconnaisse `vite.config.js`)

  ??? tip "Indice"

      Reprenez les étapes de la section « Tailwind et DaisyUI » de l'exercice [Vite Vanille](../vite-default/index.md), sans la partie DaisyUI.
      
- [ ] Commit + push

### Vidéo

La vidéo fournie est beaucoup trop lourde pour le Web. Avant de l'intégrer :

- [ ] Dans Davinci Resolve : 
  - [ ] **Réduire la résolution** : 1920px de large au maximum (1200px pourrait même suffir pour une vidéo en background comme ça)
  - [ ] **Retirer la piste audio** (la vidéo sera muette de toute façon)
  - [ ] **Compresser** jusqu'à obtenir un fichier de `5 Mo` ou moins
- [ ] Convertir la vidéo en **WebM**
- [ ] Placer le fichier dans `src/assets/videos/`
- [ ] **Renommer** correctement le fichier (pas d'espace, pas d'accent, etc.)
- [ ] Commit + push

### Logo

- [ ] Redimensionner `logo.png` à **160&nbsp;px de large**
- [ ] Le convertir en **WebP** ou en **AVIF**
- [ ] Le placer dans `src/assets/images/`
- [ ] **Renommer** correctement le fichier (pas d'espace, pas d'accent, etc.)
- [ ] Commit + push

### Structure

Vous pouvez ici, soit mettre directement votre HTML dans `index.html` ou dans le fichier JavaScript. Cela revient au même.

- [ ] Reprendre la structure **« Texte sur image »** vue au cours 3
- [ ] Remplacer l'image d'arrière-plan par une balise `<video>` qui :
  - [ ] démarre seule, sans son, et joue en boucle
  - [ ] lis le WebM
  - [ ] couvre toute la section sans être déformée
- [ ] Ajouter le logo au centre
- [ ] Sous le logo, ajouter un titre `<h1>` contenant le texte « Collège Montmorency »
- [ ] Commit + push

### Typed.js

[Typed.js](https://mattboldt.com/demos/typed-js/) est une librairie qui simule l'écriture d'un texte au clavier, lettre par lettre !

- [ ] Trouver comment **installer Typed.js avec npm** et comment l'**importer** dans `main.js`
- [ ] Faire en sorte que le titre écrive « Collège Montmorency », l'efface, puis écrive « MOMO »

  ??? tip "Indice"

      La page de démonstration montre surtout des exemples. Les instructions d'installation sont plus claires sur la [page GitHub du projet](https://github.com/mattboldt/typed.js).

      Cherchez "General ESM Usage"
