# Transition

Les transitions permettent de passer d'un état A à un état B d'une façon élégante.


## transition-property

Définit la ou les propriété(s) affectées par une transition.

On peut utiliser la valeur `all` pour appliquer une transition à toutes les propriétés compatibles.

!!! warning 
    Utiliser `all` avec parcimonie afin d'éviter d'impacter négativement les performances de votre transition.

Il est aussi possible de spécifier plusieurs propriétés en les séparant par une virgule :

```css
transition-property: background-color, width, margin-top;
```

!!! danger "Erreur fréquente"
    Ce ne sont pas toutes les propriétés qui sont compatibles avec l'effet de transition. Par exemple, `display` ou `background-image` ne peuvent pas effectuer de transition. Voir la [liste MDN des propriétés capables d'effectuer une transition](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_animated_properties).

    Essentiellement, toute propriété acceptant des valeurs *numériques* ou de *couleur* peut faire l'objet d'une transition.


> 🛠️ **Outil** — [Animatable](https://projects.verou.me/animatable/)  
> Lea Verou 👩‍💻 a mis sur pied une page permettant de visualiser rapidement les différentes propriétés animables.


## transition-duration

Définit la durée de la transition. Ce nombre peut être en secondes ou en millisecondes. `1s = 1000ms`.

Par exemple, au survol trois fois la même transition, mais avec des durées différentes :

1. 0.5 seconde
2. 1 seconde
3. 1.5 secondes

<br>

<p class="codepen" data-theme-id="50210" data-height="300" data-pen-title="Transition-duration" data-default-tab="result" data-slug-hash="ExpMGBW" data-user="tim-momo" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tim-momo/pen/ExpMGBW">
  Transition-duration</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

<br>

> 📖 [En savoir plus sur la propriété `transition-duration` via MDN](https://developer.mozilla.org/fr/docs/Web/CSS/Reference/Properties/transition-duration)

<br>

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

<br> 

<p class="codepen" data-theme-id="50210" data-height="300" data-pen-title="Transition-timing-function" data-default-tab="result" data-slug-hash="XWBGOKR" data-user="tim-momo" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tim-momo/pen/XWBGOKR">
  Transition-timing-function</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

<br> 

> 📖 [En savoir plus sur la propriété `transition-timing-function` via MDN](https://developer.mozilla.org/fr/docs/Web/CSS/Reference/Properties/transition-timing-function)


<br>

> 🛠️ **Outil** — [Cubic-Bezier.com](https://cubic-bezier.com/)  
> Outil développé par Lea Verou permettant de créer et de visualiser facilement des courbes de Bézier.


## transition-delay

Définit le temps d'attente avant le début d'une transition. Par défaut, sa valeur est `0s`, ce qui signifie que la transition démarre immédiatement. Si une valeur négative est spécifiée, la transition commencera comme si ce laps de temps s'était déjà écoulé — l'animation démarrera donc à quelque part au milieu de sa course.

Par exemple au survol :

1. Aucun délai
2. Délai de 0.25s
3. Délai de -0.25s *(commence au milieu de l'animation)*


<br>

<p class="codepen" data-theme-id="50210" data-height="300" data-pen-title="Transition-delay" data-default-tab="result" data-slug-hash="wvxONgw" data-user="tim-momo" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tim-momo/pen/wvxONgw">
  Transition-delay</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

<br>

> 📖 [En savoir plus sur la propriété `transition-delay` via MDN](https://developer.mozilla.org/fr/docs/Web/CSS/Reference/Properties/transition-delay)


<br>


## Syntaxe courte

Afin de simplifier l'écriture des transitions, il est possible de regrouper toutes les propriétés précédentes en une seule, comme le font `margin` et `padding` avec `top`, `right`, `bottom` et `left`.

### Syntaxe courte: Valeurs obligatoires

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

### Syntaxe courte: Valeurs optionnelles

Il est aussi possible de spécifier les autres propriétés si désiré en les ajoutant à la suite. Par exemple, pour avoir un délai de `0.5s` et une transition linéaire :

```css
transition: transform 1s 0.5s linear;
```

Dans l'ordre: `transition-property` `transition-duration` `transition-delay` `transition-timing-function`.

<br>

> 📝 **Exercice** — [Transition - BoJack Horseman](exercices/bojack-horseman/)  
> Pour cet exercice nous allons animer les cartes présentant les personnages principaux de la série animée BoJack Horseman 🐴.


## Où définir la transition

Par défaut, *une transition définie sur l'élément de base* s'applique dans les deux sens : à l'entrée du survol et à la sortie.

En la plaçant sur `:hover` uniquement, la transition n'existe que lorsque l'état est actif donc le retour à l'état initial se fait donc sans animation.

**Par exemple :**

- **À gauche**: la durée de la transition est appliquée sur l'élément de base. Le navigateur applique donc le `transition-duration` en tout temps, que l'élément soit survolé ou non.
- **À droite**: le `transition-duration` est défini sur le `:hover` uniquement. La transition ne s'effectue qu'au survol. Dès que l'élément n'est plus survolé, il retourne abruptement à sa position de départ.

<p class="codepen" data-theme-id="50210" data-height="300" data-pen-title="Transition - Où définir" data-default-tab="result" data-slug-hash="WNKmPLG" data-user="tim-momo" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/tim-momo/pen/WNKmPLG">
  Transition - Où définir</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://public.codepenassets.com/embed/index.js"></script>

<small>À gauche, transition sur l’élément de base. <br>
À droite, transition sur l’élément survolé seulement.</small>


<br>

> 📝 **Exercice** — [Transition - Boutons](exercices/boutons/)  
> Pour cet exercice nous allons indiquer quel bouton est survolé à l'aide de l'émoji ☝️.

> 📝 **Exercice** — [Transition - Fantôme + Mario](exercices/fantome-mario/)  
> Pour cet exercice nous allons récupérer l'animation du déplacement de fantôme 👻 réalisée dans un exercice précédent. Cependant, comme tout bon fantôme, celui-ci devra se figer lorsque Mario le regardera 👀.
