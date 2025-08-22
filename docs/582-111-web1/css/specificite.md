# Spécificité
Chaque sélecteur en CSS se voit attribuer un pointage. Lorsque deux sélecteurs ciblent les mêmes propriétés d’un même élément, le sélecteur avec le plus haut pointage l’emporte. Le style de sa propriété est donc attribué à l’élément ciblé au détriment de celui du sélecteur plus faible.

En règle générale, il est conseillé de garder le pointage de ses sélecteurs le plus faible possible. Ainsi, si l’apparence d’un élément doit changer dans un contexte spécifique, il sera facilement possible d’écraser ses styles de bases avec un sélecteur doté d’un plus grand pointage.

## Pointage par sélecteurs

### Universel *
Le sélecteur universel `*` est le plus faible des sélecteurs avec une valeur de **0 point**. Il peut donc être écrasé par tout autre sélecteur.

`* { ... }`

### Balise
Un sélecteur avec une balise à une valeur de **1 point**.

`div { ... }`


### Classe, pseudo-classe et attribut
Ont tous une valeur de **10 points de spécificité**.

```
.element { ... }
.element:hover { ... }
.element[title="demo"] { ... }
```
!!!note

    Normalement, une pseudo-classe est combinée à un autre sélecteur et n’est pas utilisé seul.


### ID
Un sélecteur avec un ID à une valeur de **100 points**.

`#no1 { ... }`


### Style en ligne
Les styles en ligne ont une valeur de **1 000 points**, ils sont donc extrêmement difficiles à écraser en cas de besoin, d’où pourquoi leur usage est à éviter autant que possible.

`<div style="color: blue;">...</div>`


### !important
En dernier recours, il est possible d’ajouter la mention `!important` à la fin d’une déclaration CSS afin de lui attribuer **10 000 points** de spécificité et ainsi s’assurer d’écraser tout autre style.

```
.element {
  color: blue !important; /* 10 000 points */
  background: red; /* 10 points */
}
```
Puisque `!important` est ajouté à une propriété directement, sa présence n’impacte que la valeur de cette propriété et non celle de l'ensemble de la règle CSS.

!!!warning

    La présence d’un `!important` dans un code est généralement mal perçu et synonyme de problème de structure de code.


## Combinaison de sélecteurs

La valeur de chaque sélecteur s'additionne dans un groupe de sélecteurs.

Par exemple l’élément HTML suivant:

`<div class=”element no1”>`

  
### Balise seule
Ciblé avec uniquement sa balise

`div { … }`

La balise ne vaut que **1 point**.

`.item { … }`

La classe seule ne vaut que **10 points**.

### Balise & Classe
Combiné la balise et une classe

`div.item { … }`

donne au groupe de sélecteur une valeur de **11 points**.

### Classe & Classe
Combiner les 2 classes

`.item.no1 { … }`

donne une valeur de **20 points**.

### Balise & Classe & Classe

Et finalement combiner la balise aux deux classes

`div.item.no1 { … }`

donne **21 points**.

## Égalité de pointage

Lorsque deux sélecteurs ont un pointage identique.

Par exemple pour l’élément HTML suivant:

`<div class=”element no1”>`

Les sélecteurs ci-dessous auront tous deux une valeur de spécificité équivalente à **10 points**.

```
.element { … }
.no1 { … }
```
Cependant, les styles du sélecteur `.no1` auront priorité sur ceux de `.element` puisque `.no1` est écrit en dernier et est donc considéré comme étant la définition la plus récente, donc celle prioritaire en cas d’égalité.

Le simple fait d’inverser ces sélecteurs dans le code CSS donnerait priorité aux styles de `.element` au détriment de ceux de `.no1`.


## EXERCICE

<div class="grid grid-auto" markdown>

![Capture d’écran, le 2024-10-29 à 17 50 56](https://github.com/user-attachments/assets/0edd76b9-9ce6-4e39-a655-8b200bbbf733)

  **Spécificité CSS**<br>
  _Un quiz amusant pour apprendre et pratiquer la spécificité en CSS._<br>
  [Spécificité CSS](https://css-specificity.smnarnold.com/?level=tag-vs-class)
</div>
