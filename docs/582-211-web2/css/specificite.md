# Spécificité CSS`

## Concept de spécificité synthétisé

### Pointage par type de sélecteur

| Type de sélecteur | Exemple | Pointage | Remarque pédagogique |
|------------------|--------|----------|----------------------|
| Universel | `*` | 0 | Le plus faible. Écrasé par tous les autres. |
| Balise | `div`, `p`, `h1` | 1 | Très faible spécificité. |
| Classe | `.element` | 10 | Sélecteur courant et recommandé. |
| Pseudo-classe | `.element:hover`, `:focus` | 10 | Toujours combinée à un autre sélecteur. |
| Attribut | `[title="demo"]` | 10 | Même poids qu’une classe. |
| ID | `#no1` | 100 | Très fort. À utiliser avec parcimonie. |
| Style en ligne | `style="color: blue"` | 1000 | Très difficile à écraser. À éviter. |
| `!important` | `color: red !important` | 10 000 | Dernier recours. Mauvaise pratique courante. |

###  Sélecteurs combinés et addition des points

| Sélecteur CSS | Détails du calcul | Pointage total |
|--------------|------------------|----------------|
| `div` | 1 (balise) | 1 |
| `.item` | 10 (classe) | 10 |
| `div.item` | 1 (balise) + 10 (classe) | 11 |
| `.item.no1` | 10 (classe) + 10 (classe) | 20 |
| `div.item.no1` | 1 (balise) + 10 (classe) + 10 (classe) | 21 |
| `#no1` | 100 (ID) | 100 |
| `div#no1.item` | 1 (balise) + 100 (ID) + 10 (classe) | 111 |
| `.item:hover` | 10 (classe) + 10 (pseudo-classe) | 20 |



## Introduction à la spécificité CSS

Chaque sélecteur en CSS se voit attribuer un pointage. Lorsque deux sélecteurs ciblent les mêmes propriétés d’un même élément, le sélecteur avec le plus haut pointage l’emporte. Le style de sa propriété est donc attribué à l’élément ciblé au détriment de celui du sélecteur plus faible.

En règle générale, il est conseillé de garder le pointage de ses sélecteurs le plus faible possible. Ainsi, si l’apparence d’un élément doit changer dans un contexte spécifique, il sera facilement possible d’écraser ses styles de bases avec un sélecteur doté d’un plus grand pointage.

## Pointage par sélecteurs

### Universel

Le sélecteur universel `*` est le plus faible des sélecteurs avec une valeur de **_0 point_**. Il peut donc être écrasé par tout autre sélecteur.

```
* { ... }
```

### Balise

Un sélecteur avec une balise à une valeur de **_1 point_**.

```
div { ... }
```

### Classe, pseudo-classe et attribut

Ont tous une valeur de **_10 points de spécificité_**.

```
.element { ... }
.element:hover { ... }
.element[title="demo"] { ... }
```

!!! note Normalement, une pseudo-classe est combinée à un autre sélecteur et n’est pas utilisé seul.

### ID

Un sélecteur avec un ID à une valeur de **_100 points_**.

```
#no1 { ... }
```

### Style en ligne

Les styles en ligne ont une valeur de **_1 000 points_**, ils sont donc extrêmement difficiles à écraser en cas de besoin, d’où pourquoi leur usage est à éviter autant que possible.

```
<div style="color: blue;">...</div>
```

### !important

En dernier recours, il est possible d’ajouter la mention `!important` à la fin d’une déclaration CSS afin de lui attribuer **_10 000 points_** de spécificité et ainsi s’assurer d’écraser tout autre style.

```
.element {
    color: blue !important; /* 10 000 points */
    background: red; /* 10 points */
}
```

Puisque `!important` est ajouté à une propriété directement, sa présence n’impacte que la valeur de cette propriété et non celle de l'ensemble de la règle CSS.

!!! warning La présence d’un `!important` dans un code est généralement mal perçu et synonyme de problème de structure de code.

## Combinaison de sélecteurs


La valeur de chaque sélecteur s'additionne dans un groupe de sélecteurs.

Par exemple l’élément HTML suivant:

```
<div class="element no1">
```

### Balise seule

Ciblé avec uniquement sa balise

```
div { … }
```

La balise ne vaut que **_1 point_**.

```
.item { … }
```

La classe seule ne vaut que **_10 points_**.

### Balise & Classe

Combiné la balise et une classe

```
div.item { … }
```

donne au groupe de sélecteur une valeur de **_11 points_**.

### Classe & Classe

Combiner les 2 classes

```
.item.no1 { … }
```

donne une valeur de **_20 points_**.

### Balise & Classe & Classe

Et finalement combiner la balise aux deux classes

```
div.item.no1 { … }
```

donne **_21 points_**.

## Égalité de pointage


Lorsque deux sélecteurs ont un pointage identique.

Par exemple pour l’élément HTML suivant:

```
<div class="element no1">
```

Les sélecteurs ci-dessous auront tous deux une valeur de spécificité équivalente à **_10 points_**.

```
.element { … }
.no1 { … }
```

Cependant, les styles du sélecteur .no1 auront priorité sur ceux de .element puisque .no1 est écrit en dernier et est donc considéré comme étant la définition la plus récente, donc celle prioritaire en cas d’égalité.

Le simple fait d’inverser ces sélecteurs dans le code CSS donnerait priorité aux styles de .element au détriment de ceux de .no1.


## Ressources supplémentaires

- [Spécificité CSS - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
- [Spécificité CSS - W3Schools](https://www.w3schools.com/css/css_specificity.asp)


## Exercice

Un quiz amusant pour apprendre et pratiquer la spécificité en CSS.

- [Exercice: spécificité CSS - 20 questions 20 questions. ](https://css-specificity.smnarnold.com/?level=tag-vs-class)
