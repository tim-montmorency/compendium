# Sélecteurs
Les sélecteurs CSS permettent de cibler des éléments dans une page afin de leur appliquer des styles. Ainsi il est possible d'améliorer leur lisibilité ou de leur donner une personnalité.

## Type

Les sélecteurs de type ciblent les éléments en fonction d'une balise.

Par exemple, la règle suivante:

```
em { ... }
```

Permet de sélectionner les éléments utilisant la balise `<em>`.

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS Selectors - Type" src="https://codepen.io/tim-momo/embed/NWByMKE?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/NWByMKE">
  CSS Selectors - Type</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

!!!warning

    Bien que cette méthode est fonctionnelle et simple, il est déconseillé de styler un élément en fonction de sa balise, afin de garder une distinction entre son rôle sémantique et son apparence.

## ID

Les sélecteurs d'identifiant unique ou ID, permettent de cibler un élément en fonction de son id.

Par exemple, la règle suivante:

```
#no1 { ... }
```
Permet de modifier l'apparence de l'élément ayant l'id `no1`.

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS Selectors - ID" src="https://codepen.io/tim-momo/embed/yLqvjjY?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/yLqvjjY">
  CSS Selectors - ID</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

!!!warning

    Styler un élément en fonction de son `id` est généralement une mauvaise idée. Même si un élément est unique actuellement, rien ne garantit qu’il le sera toujours.

## Classe

Les sélecteurs de classe ciblent les éléments partageant une classe commune.

Par exemple, la règle suivante:

```
.element { ... }
```
Permet de sélectionner tous les éléments partageant la classe `element`.

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS Selectors - Classes" src="https://codepen.io/tim-momo/embed/GRBQGwp?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/GRBQGwp">
  CSS Selectors - Classes</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

!!!note

    Les classes existent spécifiquement pour styliser des éléments. Elles sont performantes, flexibles et réutilisables. Utilisez-les!

## Combinaisons

Lorsque deux sélecteurs sont **collés** `(sans espace entre eux)`, seuls les éléments possédant **les deux sélecteurs** sont retournés.

Par exemple, la règle suivante:

```
span.element { ... }
```

Permet de sélectionner les éléments avec la classe `.element`, mais uniquement si la classe est appliquée sur un `<span>`.

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS Selectors - Combination" src="https://codepen.io/tim-momo/embed/bGjLKPW?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/bGjLKPW">
  CSS Selectors - Combination</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Un élément peut avoir plusieurs classes.

Par exemple, `<div class="msg important">` cet élément possède la classe `.msg`, ainsi que la classe `.important`. Il est donc possible de sélectionner uniquement les messages qui possèdent ces deux classes avec `.msg.important { ... }`.

## Descendants

À l'opposée des <u>combinaisons</u>, les descendants ont un **espace entre les sélecteurs** permettant ainsi d'indiquer que seuls les descendants du premier sélecteur devraient être ciblés.

Par exemple, la règle suivante:

```
.group .element { ... }
```

Permet de sélectionner les éléments avec la classe `.element`, mais uniquement s'ils sont enfants d'une balise possédant la classe `.group`.
<iframe height="300" style="width: 100%;" scrolling="no" title="CSS Selectors - Descendant" src="https://codepen.io/tim-momo/embed/YzjejGw?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/YzjejGw">
  CSS Selectors - Descendant</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Dans l'exemple précédent, `.group` est ce que l'on appel le parent de `.element`.

Cependant, plusieurs balises auraient pu séparer `.group` de ses descendants `.element` sans problème. Tout comme plusieurs générations peuvent séparer une personne de ses ancètres, elle n'en reste pas moins sa descendance.


## Outils

<div class="grid grid-auto" markdown>

  <img width="178" alt="Capture d’écran, le 2024-10-15 à 09 46 39" src="https://github.com/user-attachments/assets/529da087-cb93-440c-ba49-8645f0c3f2fa">

  **Selectors explained**<br>
  _Traduire ses sélecteurs CSS en texte humainement lisible afin de valider leur portée._<br>
  [Selectors explained](https://kittygiraudel.github.io/selectors-explained/)

  
</div>

## Exercices

<div class="grid grid-auto" markdown>

<img width="181" alt="Capture d’écran, le 2024-10-15 à 09 49 29" src="https://github.com/user-attachments/assets/ff759039-c907-48bd-8125-f5c119227e91">



  **CSS Diner - Niveaux 1 à 8**<br>
  _Complétez les 8 premiers niveaux de CSS Diner 🍎_<br>
  [CSS Diner - Niveaux 1 à 8](https://flukeout.github.io/)
</div>

