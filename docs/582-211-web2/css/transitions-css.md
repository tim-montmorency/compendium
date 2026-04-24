# Transition

Les transitions permettent de passer d'un état A à un état B d'une façon élégante.


## transition-property

Définit la ou les propriété(s) affectées par une transition.

On peut utiliser la valeur `all` pour appliquer une transition à toutes les propriétés compatibles.

> ⚠️ Utiliser `all` avec parcimonie afin d'éviter d'impacter négativement les performances de votre transition.

Il est aussi possible de spécifier plusieurs propriétés en les séparant par une virgule :

```css
transition-property: background-color, width, margin-top;
```

> ❌ **Erreur fréquente** — Ce ne sont pas toutes les propriétés qui sont compatibles avec l'effet de transition. Par exemple, `display` ou `background-image` ne peuvent pas effectuer de transition. Voir la [liste MDN des propriétés capables d'effectuer une transition](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_animated_properties).
>
> Essentiellement, toute propriété acceptant des valeurs *numériques* ou de *couleur* peut faire l'objet d'une transition.

> 🛠️ **Outil** — [Animatable](https://projects.verou.me/animatable/)  
> Lea Verou 👩‍💻 a mis sur pied une page permettant de visualiser rapidement les différentes propriétés animables.


## transition-duration

Définit la durée de la transition. Ce nombre peut être en secondes ou en millisecondes. `1s = 1000ms`.

Par exemple, au survol trois fois la même transition, mais avec des durées différentes :

1. 0.5 seconde
2. 1 seconde
3. 1.5 secondes

> 📝 **Exercice** — [Transition - Spider-Man](exercices/spider-man/)  
> Pour cet exercice nous allons effectuer une transition sur le masque de Spider-Man afin de le faire passer d'un costume à un autre.


## transition-timing-function

Dicte le rythme de la transition. Par exemple, dans la transition précédente on remarque que chaque carré accélère progressivement avant de ralentir ensuite. Ce rythme est appelé `ease` et est celui par défaut des transitions.

L'exemple suivant contient six fois la même transition au survol, mais avec des rythmes différents :

1. `linear` — n'accélère ou ne ralentit jamais ↗️
2. `ease` — accélère progressivement et ralentit en fin de parcours *(comportement par défaut)*
3. `ease-in-out` — commence lentement et ralentit en fin de parcours
4. `ease-in` — commence lentement ⤴️
5. `ease-out` — ralentit en fin de parcours ⤵️
6. `cubic-bezier` — rythme personnalisable via une courbe de Bézier

> 🛠️ **Outil** — [Cubic-Bezier.com](https://cubic-bezier.com/)  
> Outil développé par Lea Verou permettant de créer et de visualiser facilement des courbes de Bézier.


## transition-delay

Définit le temps d'attente avant le début d'une transition. Par défaut, sa valeur est `0s`, ce qui signifie que la transition démarre immédiatement. Si une valeur négative est spécifiée, la transition commencera comme si ce laps de temps s'était déjà écoulé — l'animation démarrera donc à quelque part au milieu de sa course.

Par exemple au survol :

1. Aucun délai
2. Délai de 0.25s
3. Délai de -0.25s *(commence au milieu de l'animation)*


## Syntaxe courte

Afin de simplifier l'écriture des transitions, il est possible de regrouper toutes les propriétés précédentes en une seule, comme le font `margin` et `padding` avec `top`, `right`, `bottom` et `left`.

Il suffit d'appeler la propriété `transition` et de lui passer au minimum deux valeurs :

1. La ou les propriétés à transitionner
2. La durée de la transition

Par exemple :

```css
transition-property: transform;
transition-duration: 1s;
```

Pourrait devenir :

```css
transition: transform 1s;
```

Il est aussi possible de spécifier les autres propriétés si désiré en les ajoutant à la suite. Par exemple, pour avoir un délai de `0.5s` et une transition linéaire :

```css
transition: transform 1s 0.5s linear;
```

> 📝 **Exercice** — [Transition - BoJack Horseman](exercices/bojack-horseman/)  
> Pour cet exercice nous allons animer les cartes présentant les personnages principaux de la série animée BoJack Horseman 🐴.


## Où définir sa transition

Si les propriétés d'une transition sont définies sur un état en particulier, par exemple `:hover`, et non à sa base, cette propriété ne s'appliquera que lorsque cet état sera activé.

Par exemple :

- **À gauche** — la durée de la transition est appliquée sur l'élément de base. Le navigateur applique donc le `transition-duration` en tout temps, que l'élément soit survolé ou non.
- **À droite** — le `transition-duration` est défini sur le `:hover` uniquement. La transition ne s'effectue qu'au survol. Dès que l'élément n'est plus survolé, il retourne abruptement à sa position de départ.

> 📝 **Exercice** — [Transition - Boutons](exercices/boutons/)  
> Pour cet exercice nous allons indiquer quel bouton est survolé à l'aide de l'émoji ☝️.

> 📝 **Exercice** — [Transition - Fantôme + Mario](exercices/fantome-mario/)  
> Pour cet exercice nous allons récupérer l'animation du déplacement de fantôme 👻 réalisée dans un exercice précédent. Cependant, comme tout bon fantôme, celui-ci devra se figer lorsque Mario le regardera 👀.
