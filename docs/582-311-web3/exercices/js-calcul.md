---
tags:
  - Exercice
---

[:material-arrow-u-left-top: Cours 6](../cours06.md){.breadcrumb}

# Gros calculs scientifiques

En JavaScript, calculez la somme, le plus grand et le plus petit nombre à partir d’une liste de valeurs saisies.

## Résultat attendu

<iframe class="aspect-1-1" height="300" style="width: 100%;" scrolling="no" title="JavaScript - Exercice - Calcul (SOLUTION)" src="https://codepen.io/tim-momo/embed/ExqjNKB?default-tab=result&editable=false&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/ExqjNKB">
  JavaScript - Exercice - Calcul (SOLUTION)</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Instructions

- [ ] Effectuer un fork du [Codepen de départ](https://codepen.io/tim-momo/pen/YzoMEoY??editors=1000)
- [ ] Crée un `addEventListener()` pour l'événement « click » du bouton « Calculer »
- [ ] Utilise `document.getElementById()` pour récupérer les valeurs des champs de saisie de chaque nombre
- [ ] Convertis les valeurs récupérées en nombres entiers avec la méthode `parseInt()` de JavaScript
- [ ] Crée un tableau (array) dans lequel tu vas stocker tous les nombres que l’utilisateur a saisis
- [ ] Créé une variable "sum" et utilise une boucle pour calculer la somme de tous les nombres présents dans le tableau
- [ ] Juste avant la boucle, ajoute une nouvelle variable nommée "max" pour le plus grand nombre, en lui donnant comme valeur le premier élément du tableau.
- [ ] Parcours le tableau avec une boucle pour comparer chaque nombre avec la variable "max". Si le nombre est plus grand que "max", remplace "max" par la valeur par le nombre
- [ ] Fais de même pour trouver le plus petit nombre dans une autre boucle. Utilise une variable qui s'appelle "min".
- [ ] Affiche les résultats de "sum", "max" et "min" dans l'élément avec le id "resultats".
- [ ] Vérifie que le code fonctionne en testant différentes valeurs dans les champs de saisie.
