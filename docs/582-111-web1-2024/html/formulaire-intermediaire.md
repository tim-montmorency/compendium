# Formulaire intermédiaire
Heureusement, les formulaires ne se limitent pas aux `<input type="text">`. Ils acceptent une variété de champs adaptés a différents type d'information. Voyons quelques-uns de ces champs.

## Checkbox

Les boîtes à cocher permettent de définir individuellement un statut booléen **(true/false)** pour une option ☑. Leur usage est approprié lorsque des choix optionnels sont disponibles.

Par exemple, si des options en extra sont offertes sur une pizza 🍕

<iframe height="300" style="width: 100%;" scrolling="no" title="Checkbox" src="https://codepen.io/tim-momo/embed/KKBORzq?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/KKBORzq">
  Checkbox</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Attributs de checkbox
- `name` nom de référence lorsque le formulaire est soumis.
- `checked` permet de spécifier à l'aide d'un booléen (true/false) si l'option devrait être cochée ou non. Si aucune valeur n'est attribuée, la simple présence de l'attribut suffit à cocher l'élément.
- `value` cet attribut est optionnel. S'il n'est pas spécifié et que l'option Olives est cochée, la soumission du formulaire retourne olives: "on". Si une value est spécifiée, comme dans le cas de l'option Oignons, le formulaire retourne oignons: "oui svp".
- `disabled` permet d'afficher en lecture seule une boite à cochée afin d'indiquer que bien qu'elle soit normalement disponible, elle ne l'est pas en ce moment.


!!! warning

    Contrairement aux autres `<input>`, les boîtes à cocher ne sont incluses dans les soumissions du formulaire uniquement si celles-ci sont cochées ✅.


## Radio

Les boutons radio permettent de choisir une seule option parmi un groupe 🔘. Leur usage est approprié lorsque peu d'options sont disponibles ou qu'il est important que l'usager puisse voir toutes les options disponibles.

Par exemple, si seulement une option de pizza 🍕 peut-être sélectionnée:

<iframe height="300" style="width: 100%;" scrolling="no" title="Radio" src="https://codepen.io/tim-momo/embed/mdjNzpB?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/mdjNzpB">
  Radio</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Attributs de radio
* `name` tous les boutons radio partageant le même name font partie d'un même groupe. Seul une option/un bouton radio parmi ce groupe peut être sélectionnée à la fois.

!!! example

    Par exemple, il est impossible de sélectionner les options **Végétarienne** et **Toute garnie** en même temps, puisqu'elles font toutes deux partie du groupe pizza.
* `checked` permet de spécifier à l'aide d'un booléen **(true/false)** si l'élément doit-être sélectionné. Si aucune valeur n'est attribuée, la simple présence de l'attribut suffit à sélectionner l'élément.

* `value` indique la valeur associée au bouton radio. Ainsi lorsque le formulaire est soumis, la valeur associée au name est celle de l'élément checked.

!!! example

    Par exemple, si le formulaire est soumis sans que les boutons radio soient touchés, la valeur reçue sera pizza: "toute-garnie".
* `disabled` permet d'afficher en lecture seule une option afin d'indiquer que bien qu'elle soit normalement disponible, celle-ci ne l'est pas en ce moment.

## Exercices

<div class="grid grid-auto" markdown>

![Capture d’écran, le 2024-09-24 à 17 30 03](https://github.com/user-attachments/assets/e03d3919-871b-4220-85ed-ac64ea1be91e)



  **Exercice Dragonball**<br>
  _Pour cet exercice, nous allons modifier l’action performée par Goku, le personnage principal de Dragonball, en fonction du bouton radio sélectionné._<br>
  [Dragonball](../exercices/dragonball.md)
</div>



## Select

Les `<select>` permettent de choisir une seule option parmi un groupe 🔽. Leur usage est approprié lorsque plusieurs options sont disponibles et qu'il n'est pas nécessaire pour l'usager de tous les voir.

Par exemple, pour choisir une plage horaire de livraison, il n'est pas nécessaire une fois sa plage trouvée de voir les autres options:

<iframe height="300" style="width: 100%;" scrolling="no" title="Select" src="https://codepen.io/tim-momo/embed/JjBgmeb?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/JjBgmeb">
  Select</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Attributs de select
- `name` nom de référence lorsque le formulaire est soumis.
- `multiple` permet la sélection de plusieurs options.
- `disabled` permet d'afficher en lecture seule le <select>.
### Attributs d'option
- `value` indique la valeur associée au `<select>`. Ainsi lorsque le formulaire est soumis, la valeur associée au `name` est celle de l'option sélectionnée.
- `selected` permet de spécifier à l'aide d'un booléen **(true/false)** si l'option devrait être sélectionnée. Si aucune valeur n'est attribuée, la simple présence de l'attribut suffit à sélectionner l'élément.
- `disabled` permet d'afficher en lecture seule une option en particulier. Par exemple, la page horaire 15h dans l'exemple précédent est visible, mais n'est pas sélectionnable.

## Exercices

<div class="grid grid-auto" markdown>
![Capture d’écran, le 2024-09-24 à 17 32 35](https://github.com/user-attachments/assets/3c6180f1-136b-4c38-b722-b7693a6aca60)


  **Exercice Twitter**<br>
  _Pour cet exercice, vous devrez compléter le formulaire de Twitter demandant la date de naissance de son nouveau membre._<br>
  [Exercice Twitter](../exercices/twitter.md)
</div>







## Textarea

Similaire au champ texte de base, `<textarea>` permet de définir une zone de texte sur plusieurs lignes, permettant ainsi à l'usager d'inscrire un contenu plus long. Au besoin, cette boite de texte peut être redimensionée grâce à sa poignée dans le coin inférieur droit.

<iframe height="300" style="width: 100%;" scrolling="no" title="Textarea" src="https://codepen.io/tim-momo/embed/qByeLZQ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/qByeLZQ">
  Textarea</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Attributs de textarea
- `cols` définit la largeur de base du textarea.
- `rows` définit la hauteur de base du textarea.
- Cette balise accepte aussi les mêmes attributs qu'un champ texte régulier, tel que: `readonly`, `placeholder`, `required`, `minlength`, `maxlength`, etc.


<small>Crédits : Simon Arnold</small>
