---
tags:
  - Exercice
---

[:material-arrow-u-left-top: Cours 4](../cours04.md){.breadcrumb}

# Cartes philosophiques

Le but de cet exercice est de reproduire le résultat attendu avec les notions Bootstrap 5 suivantes :

* Alignement du texte
* Typographie (grosseur de texte)
* Couleurs
* Espacement
* Conteneur
* Système de grille
* Carte
* Icône Bootstrap
* Points d'arrêt

## Résultat attendu

<div class="grid" markdown>
Version Desktop
![](../assets/images/philo-desktop.png){data-zoom-image}

Version Mobile
![](../assets/images/philo-mobile.png){data-zoom-image}
</div>

## Contenus pour l'exercice

[Icône bootstrap](https://icons.getbootstrap.com/icons/chat-square-quote/)

## Instructions

* [ ] Effectuer un form du [Codepen de départ](https://codepen.io/tim-momo/pen/YzoMEoY??editors=1000)
* [ ] Analysez attentivement le code HTML et sa structure
* [ ] Ajoutez des classes CSS dans le HTML uniquement aux endroits où il est inscrit `class=""`
* [ ] D'abord il doit y avoir conteneur Bootstrap qui englobe le tout
* [ ] Sous le conteneur, il devrait y avoir une row. Appliquez lui la classe `g-3`.
* [ ] Tous les textes doivent être centrés.
* [ ] Dans le conteneur Bootstrap, il doit y avoir 3 colonnes. Chaque colonne doit arrêter d'en être une lorsque l'écran est plus petit que le breakpoint `md`
* [ ] Chaque colonne contient une Carte Bootstrap.
* [ ] Dans chaque carte, il y a un `<div>` pour son "body" (voir documentation pour connaître la classe à utiliser)
* [ ] La balise `<i>` contient l'icône Bootstrap. L'icône doit contenir la classe `display-3` pour être très grande. N'oubliez pas de changer sa couleur.
* [ ] La citation se trouve dans le `<p>` du `<blockquote>`. Elle doit être en `lead`.
* [ ] Le `<footer>` dans le `<blockquote>` doit afficher son texte en petit format et en couleur "muted" (voir la documentation Bootstrap pour savoir comment faire).
