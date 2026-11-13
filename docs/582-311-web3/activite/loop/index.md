---
tags:
  - Exercice
  - Vite
  - GSAP
  - Figma
---

# Loop

![type:video](./loop.webm){.h-auto}

L'objectif de cet exercice est de **préparer un SVG** pour l'animer, puis de mettre en pratique les plugins **DrawSVGPlugin** et **MotionPathPlugin**.

<!-- Inspiré de https://codepen.io/cassie-codes/pen/mdddaRG -->

## Consignes

### Préparation

- [ ] [Accepter le devoir Classroom 50](https://classroom50.org/tim-w3/web-3/assignments/loop/accept)
- [ ] Cloner le répertoire avec GitHub Desktop
- [ ] Ouvrir le dossier cloné dans VSCode
- [ ] Dans le terminal, installer les dépendances, puis lancer le projet Vite.

### Exploration du projet

- [ ] Repérer le fichier `logo.svg` à la racine du projet. C'est le tracé à animer, mais il n'est pas prêt à être utilisé.
- [ ] Ouvrir `index.html` : le SVG nettoyé ira à l'endroit indiqué par le commentaire.
- [ ] Ouvrir `src/style.css` : il ne contient que l'import de Tailwind. L'apparence du SVG (couleurs, épaisseur et forme du trait) sera réglée dans Figma, puis directement dans le SVG.

### Nettoyer le SVG dans Figma

- [ ] Glisser `logo.svg` dans un fichier Figma
- [ ] Examiner le panneau des calques. Supprimer **tout ce qui n'est pas le tracé en boucles**.
- [ ] Sur le tracé, retirer le **remplissage** (*Fill*)
- [ ] Ajouter un **contour** (*Stroke*) au tracé :
  - [ ] Couleur hexadécimale : `#393B54`
  - [ ] Épaisseur : `5`
  - [ ] Dans les paramètres du tracé, configurer les options « Extrémités » et « Fusionner » à Arrondi
- [ ] Sélectionner le tracé, puis, dans la section *Export*, choisir **SVG** et exporter
- [ ] Ouvrir le SVG dans VSCode pour voir le code. Si c'est l'image qui apparaît, trouver l'option pour afficher le code

### Intégrer le SVG dans le HTML

- [ ] Copier le code du SVG dans le `index.html` à l'endroit indiqué
- [ ] Sur la balise `<svg>` :
  - [ ] Retirer les attributs `width` et `height` (garder le `viewBox`)
  - [ ] Ajouter les classes `w-[70vw] max-w-4xl` pour une taille responsive (ces classes ont déjà été vues ; au besoin, poser la question)
  - [ ] Ajouter la classe `overflow-visible` pour que la bille ne soit pas coupée aux extrémités du tracé
- [ ] En code, ajouter `id="guide"` au `<path>`. C'est le tracé complet, pâle, qui reste affiché sous le trait qui sera dessiné.
- [ ] Copier-coller le `<path>` juste **en dessous** de `#guide`. Sur la copie :
  - [ ] Changer le `id` pour `trace`
  - [ ] Changer la couleur du trait pour `#7D7F8E`
- [ ] Juste avant `</svg>`, ajouter la petite bille à animer :

  ```html
  <circle id="bille" r="3" fill="#64C898" />
  ```

- [ ] Vérifier dans le navigateur que le tracé s'affiche au centre de la page
- [ ] Commit + push

### Activer les plugins

- [ ] Ouvrir `src/gsap.js`. Tout le code GSAP de l'exercice devra être écrit dans la fonction `gsapAnimations()`.
- [ ] Sous la ligne `import gsap from "gsap"`, importer **DrawSVGPlugin** et **MotionPathPlugin**, puis les activer avec `registerPlugin`

### Dessiner le trait

- [ ] Avec un `set()`, rendre `#trace` invisible au départ (`drawSVG: "0% 0%"`)
- [ ] Avec un `to()`, dessiner `#trace` au complet (`"0% 100%"`) en 3 secondes
- [ ] Vérifier que le trait se dessine du début à la fin, par-dessus le guide
- [ ] Commit + push

### La bille sur le tracé

- [ ] Mettre l'animation précédente en commentaire
- [ ] Animer `#bille` en 3 secondes avec `motionPath` :
  - [ ] `path` et `align` à `"#trace"`
  - [ ] `alignOrigin` au milieu de la bille
- [ ] Commit + push

### La timeline

- [ ] Commenter les animations précédentes. 
- [ ] Créer une timeline qui répète à l'infini les animations suivantes :
  - [ ] La bille apparaît au début du tracé (`scale` de 0 à 1, lissage `"back.out(3)"`)
  - [ ] La bille parcourt le tracé **pendant que** le trait se dessine derrière elle
  - [ ] La bille « rebondit » à l'arrivée. On voit un grossissement rapide qui revient (`yoyo` et `repeat: 1`)
  - [ ] La bille revient au début **pendant que** le trait s'efface derrière elle
  - [ ] La bille disparaît
  - [ ] Pause de 0,8 seconde avant de recommencer

??? tip "Indice"

    Pour placer la bille au début du tracé avant qu'elle apparaisse, `set()` accepte aussi la propriété `motionPath`, avec les mêmes réglages qu'à l'étape précédente et `end: 0`.

- [ ] Commit + push

## Défis

- [ ] **Orientation** : remplacer la bille par une forme non ronde (ex. : une icône) et ajouter `autoRotate: true` dans `motionPath`
- [ ] Commit + push
