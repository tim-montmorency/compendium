# Formulaire
Les formulaires sont un incontournable du web, ils sont présents sur la majorité des sites et sont constitués de plusieurs balise. Voyons quelques une des balises de base permettant de réaliser un formulaire.

## Input text

Génère un champ texte sur une seule ligne. Ce champ est parfait pour les informations textuelles à caractère généralistes.

**Le type `text` est le type par défaut de la balise `<input>`**. Si aucun type n'est spécifié ou que le `type` utilisé n'est pas reconnu par le navigateur, celui-ci assumera automatiquement qu'il s'agit d'un champ texte.

<iframe height="300" style="width: 100%;" scrolling="no" title="Input text" src="https://codepen.io/tim-momo/embed/BaPEVEy?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/BaPEVEy">
  Input text</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Plusieurs attributs sont disponibles sur les champs texte. Voyons quelques-uns des plus populaires.

## Value
**L'attribut `value` permet de définir la valeur par défaut d'un champ.**

Par exemple, si des répondants doivent indiquer leur pays de résidence et que la majorité répondront Canada  🇨🇦, il est possible de prépopuler le formulaire avec cette valeur.

<iframe height="300" style="width: 100%;" scrolling="no" title="Input Value" src="https://codepen.io/tim-momo/embed/mdjgjVb?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/mdjgjVb">
  Input Value</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Placeholder
**L'attribut `placeholder` permet d'afficher un exemple de valeur possible à saisir dans le champ.** Bien que visible, cette valeur n'est pas réellement présente dans le champ contrairement à l'attribut `value`. Qui plus est, cette valeur disparaitra dès que l'utilisateur commencera à inscrire une nouvelle valeur.

Par exemple, pour indiquer que le nom du pays est requis et que le nom complet est désiré **(Canada)** et non l'abréviation **(Can)**, il est possible d'utiliser cet attribut.

<iframe height="300" style="width: 100%;" scrolling="no" title="Input Placeholder" src="https://codepen.io/tim-momo/embed/dyjLjWB?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/dyjLjWB">
  Input Placeholder</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Readonly
**L'attribut `readonly` permet d'indiquer à l'aide d'un booléen (true/false) si un champ est en lecture seule (impossible à modifier).** Si l'attribut `readonly` est ajouté sans booléen, le navigateur considèrera que le champ est en lecture seule, soit un équivalent de `readonly="true"`.

Par exemple, un formulaire de modification de profil permettant de mettre à jour ses informations personnelles et de voir son nom d'usager, mais ne permettant pas de modifier ce dernier.

<iframe height="300" style="width: 100%;" scrolling="no" title="Input Readonly" src="https://codepen.io/tim-momo/embed/abjrdor?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/abjrdor">
  Input Readonly</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

 

## Required
**L'attribut `required` permet d'indiquer à l'aide d'un booléen (true/false) si un champ est requis.** Si l'attribut required est ajouté sans booléen, le navigateur considèrera que le champ est requis, soit un équivalent de `required="true"`.

Par exemple, un champ non requis vs un champ requis:

<iframe height="300" style="width: 100%;" scrolling="no" title="Input Required" src="https://codepen.io/tim-momo/embed/VwBOeYv?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/VwBOeYv">
  Input Required</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


## Minlength & Maxlength
**Les attributs `minlength` & `maxlength` permettent de définir un nombre minimal et maximal de caractères pouvant-être inscrit dans un champ.**

Par exemple, un champ de code postal acceptant de 3 à 6 caractères:

<iframe height="300" style="width: 100%;" scrolling="no" title="Input Minlength &amp; Maxlength" src="https://codepen.io/tim-momo/embed/PoBvZqm?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/PoBvZqm">
  Input Minlength &amp; Maxlength</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Label

**Les libellés ou `<label>` permettent d'indiquer le rôle d'un élément (ex: un champ texte) au sein d'un formulaire.** Le libellé peut être associé à un élément de formulaire via l'attribut `for` ou encore en plaçant l'élément de formulaire à l'intérieur même de la balise `<label>`.

Par exemple, les deux méthodes suivantes de définition de libellé sont valides:

[<iframe height="300" style="width: 100%;" scrolling="no" title="Label" src="https://codepen.io/tim-momo/embed/BaPejjd?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/BaPejjd">
  Label</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>](https://codepen.io/Le-prof-de-Momo/pen/MWNjzzB)

### For
**L'attribut `for` permet d'associer un élément avec son libellé.** Pour se faire, sa valeur doit correspondre au `id` de l'élément qu'il désigne.

!!! note

    Lorsqu’un libellé est cliqué, le focus est automatiquement attribué à l’élément qu’il désigne.

## Form

**La balise `<form>` regroupe tous les éléments d'un formulaire.**
<iframe height="300" style="width: 100%;" scrolling="no" title="Form" src="https://codepen.io/tim-momo/embed/GRBaoqW?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/GRBaoqW">
  Form</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

#### Attributs de form
1. `action` permets de spécifier l'url où les informations du formulaire doivent être soumises.
1. `method` méthode http utilisée par le navigateur afin de soumettre le formulaire. Ses valeurs peuvent-être
  * `GET` **(par défaut)** stock les informations du formulaire dans l'URL après le symbole `?`.

  * `POST` envois les informations du formulaire dans la requête soumise à la page. Les informations ne sont donc pas visibles.

!!! warning

    Il est impossible d’avoir un formulaire à l’intérieur d’un autre formulaire.



## Input submit

**Génère un bouton permettant de soumettre un formulaire.**

<iframe height="300" style="width: 100%;" scrolling="no" title="Input Submit" src="https://codepen.io/tim-momo/embed/BaPeLpm?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/BaPeLpm">
  Input Submit</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Value
L'attribut `value` définit le texte à l'intérieur du bouton généré.


## Exercices

<div class="grid grid-auto" markdown>
![Capture d’écran, le 2024-09-24 à 17 23 47](https://github.com/user-attachments/assets/ad4d7ab2-9865-46af-b536-8e4d0da593cd)




  **Exercice Carte de crédit**<br>
  _Pour cet exercice vous devrez compléter un formulaire de carte de crédit déjà entamé._<br>
  [Carte de crédit](../exercices/carte-de-credit.md)
</div>


<small>Crédits : Simon Arnold</small>
