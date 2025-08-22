# Formulaire avancé
En 2008, alors que HTML5 voyait le jour, les formulaires furent bonifiés avec de nouvelles balises simplifiant la vie des développeurs et des internautes. En voici quelques unes des plus communes parmi celles-ci.

## Number

Parfait pour les valeurs numériques 🔢, ce champ empêche l'usager d'entrer des valeurs alphabétique et ajoute des flèches permettant d'incrémenter / décrémenter le nombre saisi ↕️.

Il permet entre autre d'éviter qu'un usager entre le texte **"deux"** plutôt que le chiffre **"2"** afin d'indiquer le nombre de pizzas désirées.

<iframe height="300" style="width: 100%;" scrolling="no" title="Input number" src="https://codepen.io/tim-momo/embed/PoBMXjZ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/PoBMXjZ">
  Input number</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


### Attributs de number
- `name` nom de référence lorsque le formulaire est soumis.
- `min` et `max` permettent de spécifier un nombre minimal et maximal à respecter.
- `step` définit la granularité. Autrement dit, le saut entre chaque valeur. Par défaut, la valeur de step est à 1. Cependant, il est possible de modifier cette valeur. Par exemple, `step: 2` fait en sorte que les valeurs 0, 2, 4, 6, 8 et 10 sont possibles, mais non la valeur 9.
- `disabled` permet d'afficher en lecture seule le champ number.
### Mobile
Sur mobile, lorsque ce champ reçoit le focus, un pavé numérique est affiché à la place du traditionnel clavier alphanumérique, simplifiant ainsi l'entrée de données à l'usager.

![input-number](https://github.com/user-attachments/assets/b04a8696-9534-41dd-987a-88566df55643)


## Range

Permets de choisir une valeur entre deux extrémités. Leur usage est approprié lorsqu'une valeur approximative est suffisante.

Par exemple, choisir plus ou moins de sauce sur une pizza est plus intuitif à l'aide de ce type de contrôle que de spécifier une quantité en millilitres🥫:

<iframe height="300" style="width: 100%;" scrolling="no" title="Range" src="https://codepen.io/tim-momo/embed/dyjxwRB?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/dyjxwRB">
  Range</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Attributs de range
- `name` nom de référence lorsque le formulaire est soumis.
- `min` et `max` permettent de spécifier un nombre minimal et maximal à respecter.
- `step` définit la granularité. Autrement dit, le saut entre chaque valeur. Par exemple, `step: 100 `fait en sorte que les valeurs 0, 100, 200, 300, etc. sont possibles, mais non la valeur 150.
- `disabled` permet d'afficher en lecture seule un widget range.

## Password

Comme son nom l'indique, ce champ conviens aux mots de passe 🔑. Il permet entre autre d'entrer son mot de passe en toute discrétion, puisque les caractères affichés à l'écran sont remplacés par des •.

<iframe height="300" style="width: 100%;" scrolling="no" title="Input password" src="https://codepen.io/tim-momo/embed/QWBezMg?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/QWBezMg">
  Input password</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Mobile
Sur mobile, les boutons 😀 et 🎙 sont retirés puisque la majorités des mots de passe ne supportent pas les émojis et que l'utilisation du dictaphone implique forcément de dire son mot de passe à voix haute, ce qui peut causer des enjeux de confidentialité.

![input-password](https://github.com/user-attachments/assets/1d2e6e13-3f47-435d-93cd-68393227111e)


## Email

Comme son nom l'indique, ce champ est conçu afin de gérer les courriels ✉️. Il ajoute automatiquement les pseudo-classes `:valid` et `:invalid` en fonction du texte qui lui est inséré, permettant ainsi d'ajuster le visuel du champ en CSS afin de fournir une rétroaction à l'utilisateur.

<iframe height="300" style="width: 100%;" scrolling="no" title="Input email" src="https://codepen.io/tim-momo/embed/xxJvmLm?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/xxJvmLm">
  Input email</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

!!! warning

    À moins d’être requis (avoir l’attribut required), un champ de type email vide est considéré comme étant valide puisqu’il est théoriquement optionel.

### Mobile
Sur mobile, le bouton 🎙 du clavier est remplacé par les boutons @ et . qui sont plus pratiques puisqu'ils sont systématiquement présent dans une adresse courriel.

![input-email](https://github.com/user-attachments/assets/65a21cf8-2080-4dec-9d74-2f0821a0b562)



## Tel

Évidemment, ce champ est conçu pour les numéros de téléphone 📞. Les navigateurs suggèreront généralement des numéros précédemment entrés afin de faire sauver du temps à l'usager.

Contrairement au `champ de type email`, ce champ ne fait aucune validation par défaut, puisque les numéros de téléphone varient grandement de format d'un pays à l'autre.

<iframe height="300" style="width: 100%;" scrolling="no" title="Input tel" src="https://codepen.io/tim-momo/embed/NWBQeap?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/NWBQeap">
  Input tel</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Attributs de tel
- `inputmode="decimal"` affichent un pavé numérique agrémenté des symboles +*# sur les appareils mobile afin de simplifier la vie de l'usager.
- `disabled` permet d'afficher en lecture seule le champ de téléphone.

### Mobile
Lorsque l'attribut `inputmode="decimal"` est ajouté au champs téléphone.

![input-tel](https://github.com/user-attachments/assets/fb98736f-3863-499f-bbc1-d63362cd93d9)


## Search

Ce champ est conçu pour les barres de recherche 🔍. Il ajoute automatiquement une croix permettant d'effacer rapidement le texte saisi ❌. ce qui s'avère souvent utile dans le cadre d'une recherche. Certains navigateurs proposent même une autocomplétition sur ces champs avec des valeurs précédemment utilisées.

<iframe height="300" style="width: 100%;" scrolling="no" title="Input search" src="https://codepen.io/tim-momo/embed/wvxVRPo?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/wvxVRPo">
  Input search</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Mobile
Sur mobile, le clavier est pratiquement identique à celui par défaut outre la présence du bouton . qui est ajouté.

![input-search](https://github.com/user-attachments/assets/b57c9074-7d28-45e8-9da1-a2bb5aa51a2d)


## Date

Permets, comme son nom l'indique, de sélectionner une date dans un calendrier 📅.

<iframe height="300" style="width: 100%;" scrolling="no" title="Input search" src="https://codepen.io/tim-momo/embed/qByeLVw?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/qByeLVw">
  Input search</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Attributs de date
- `min` et `max` permettent de spécifier une date minimale et maximale à respecter. Par exemple, min="1980-01-01" fait en sorte qu'aucune date inférieure au 1er janvier 1980 ne puisse être sélectionnée.
- `disabled` permet d'afficher en lecture seule l'outil de sélection de date.

### Mobile
Sur mobile, un calendrier ou une molette de date comme sur l'image suivante sera affiché.

![input-date](https://github.com/user-attachments/assets/ef0aab44-5633-4e70-9394-7e8ff54b6e76)


## Time

Permets de saisir une heure 🕰.

<iframe height="300" style="width: 100%;" scrolling="no" title="Input time" src="https://codepen.io/tim-momo/embed/poZMqpp?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/poZMqpp">
  Input time</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Attributs de time
- Les attributs `min` et `max` permettent de spécifier une heure minimale et maximale à respecter. Par exemple, `min="09:00"` fait en sorte qu'aucune heure avant 9am ne puisse être sélectionnée.
- `disabled` permet d'afficher en lecture seule l'outil de sélection d'heure.

### Mobile
Sur mobile, une horloge ou une molette d'heures comme sur l'image suivante sera affichée.

![input-time](https://github.com/user-attachments/assets/47af2947-895c-447a-adc8-915e238c4467)


## Color

Permet de choisir une couleur à l'aide d'un sélecteur de couleurs **(colors picker)** 🎨, plutôt que d'avoir a entrer un code hexadécimal, RGB ou autre.

<iframe height="300" style="width: 100%;" scrolling="no" title="Input color" src="https://codepen.io/tim-momo/embed/QWBezmM?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/QWBezmM">
  Input color</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Attributs de color
- `name` nom de référence lorsque le formulaire est soumis.
- `value` code de la couleur par défaut. Si cet attribut est omis, la couleur utilisée par défaut sera **(noir ⬛️).**
- `disabled` permet d'afficher en lecture seule l'outil de sélection de couleur.

## Exercices

<div class="grid grid-auto" markdown>

<img width="183" alt="Capture d’écran, le 2024-09-27 à 15 38 54" src="https://github.com/user-attachments/assets/39016596-2f63-4041-a0e2-0ef834c46894">



  **Exercice Among Us**<br>
  _Pour cet exercice nous allons créer un formulaire permettant de générer un personnage du célèbre jeu Among Us._<br>
  [Exercice Among Us](../exercices/amongus.md)
</div>


<small>Crédits : Simon Arnold</small>
