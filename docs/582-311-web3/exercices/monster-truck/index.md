---
tags:
  - Exercice
  - Vite
  - GSAP
---

# Truck

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
- [ ] À l'aide de `gsap.fromTo()`, animer le camion sur l'axe des X :
  - [ ] Départ **à l'extérieur gauche** de la page (`x: -200`)
  - [ ] Arrivée **à l'extérieur droit** de la page
  - [ ] Durée de 4 secondes
  - [ ] Vitesse constante
  - [ ] Répétition à l'infini
  
  ??? tip "Indice : la largeur de la page"

      La largeur de la fenêtre s'obtient en JavaScript avec `window.innerWidth`. Pour que le camion sorte complètement de l'écran, il faut aller un peu plus loin que cette valeur.

- [ ] Faire faire un **tour complet** aux deux roues en l'espace d'une seconde, à vitesse constante et à l'infini
- [ ] Commit + push

!!! note "Pas responsive, pour le moment"

    Si vous redimentionnez la fenêtre, effectuez un rafraichissement de page, car nos animations ne sont pas encore responsive.