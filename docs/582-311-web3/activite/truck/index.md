---
tags:
  - Exercice
  - Vite
  - GSAP
---

# J'en ai mon truck

> [En avoir son truck](https://fr.wiktionary.org/wiki/en_avoir_son_truck)

L'objectif de cet exercice est de faire traverser le paysage à un monster truck, de gauche à droite et en boucle, tout en faisant tourner ses roues avec GSAP.

## Résultat attendu

<iframe class="aspect-16-9" height="300" style="width: 100%;" scrolling="no" title="Monster truck" src="https://codepen.io/tim-momo/embed/qEbpYvo?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/qEbpYvo">
  Monster truck</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Consignes

### Préparation

- [ ] [Accepter le devoir Classroom 50](https://classroom50.org/tim-w3/web-3/assignments/truck/accept)
- [ ] Cloner le répertoire avec GitHub Desktop
- [ ] Ouvrir le dossier cloné dans VSCode

- [ ] Dans le terminal, faire un `npm install`, puis `npx vite` pour lancer le projet

### GSAP

- [ ] Installer GSAP avec `npm`
- [ ] Créer le fichier `src/gsap.js` avec la fonction `gsapAnimations()` et l'appeler dans `src/main.js`

#### Animer la voiture

- [ ] À l'aide de `gsap.fromTo()`, animer le camion sur l'axe des X :
  - [ ] Départ **à l'extérieur gauche** de la page (`x: "-30vw"`)
  - [ ] Arrivée **à l'extérieur droit** de la page, à la même distance du bord que le départ
  - [ ] Durée de 4 secondes
  - [ ] Vitesse constante (linéaire)
  - [ ] Répétition à l'infini

#### Animer les roues

- [ ] Faire faire un **tour complet** aux deux roues en l'espace d'une seconde, à vitesse constante et à l'infini

  ??? quote "Deux roues, un seul tween"

      Inutile d'écrire deux tweens identiques. Comme en CSS, un sélecteur peut viser plusieurs éléments à la fois en séparant les classes par une virgule&nbsp;: `".roue1, .roue2"`.

- [ ] Commit + push