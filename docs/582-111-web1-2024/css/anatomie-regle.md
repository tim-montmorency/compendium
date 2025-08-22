# Anatomie d'une règle
Le but du CSS est d'indiquer au navigateur comment afficher différents éléments sur une page **(couleur, dimension, position, etc.)**. Pour ce faire, des règles CSS indiquant quels éléments devraient avoir quelle apparence sont utilisées.

Cet aspect peut paraitre simple, mais une règle CSS se découpe en divers sous-éléments. Afin d'éviter toute confusion et d'avoir des bases solide en CSS, il est préférable de connaitre la terminologie associée à ces sous-éléments.

## Règle CSS

Une règle CSS est constituée d'un sélecteur CSS, d'accolades `{…}` et de tout ce qui se trouve entre elles.

Par exemple, voici une règle CSS simple:

```
p {
  font-size: 16px;
  font-family: Arial;
}
```
## Sélecteur

Le sélecteur est ce qui se trouve avant l'accolade ouvrante. Il permet d'identifier quels éléments dans la page devraient être affectés par les styles se trouvant à l'intérieur desdites accolades.

Dans l'exemple précédent, `p` est le sélecteur indiquant que tous les paragraphes de la page devraient avoir une taille de police de `16px` et utiliser la police `Arial`.

## Groupe de sélecteurs
Un groupe de sélecteurs est le nom donné lorsque plusieurs sélecteurs sont présents avant une accolade.

Par exemple:

```
.article p {
  font-size: 16px;
  font-family: Arial;
}
```

Le groupe de sélecteurs dans l'exemple ci-dessus ☝️ est `.article p` indiquant que tous les paragraphes se trouvant à l'intérieur d'une balise ayant la classe `.article` doivent utiliser les styles entres définis entre accolades.

!!! note

    Dans un groupe de sélecteurs, les sélecteurs sont lus de droite à gauche ⬅️.

    Autrement dit, dans l’exemple précédent, le navigateur sélectionnerait en premier temps tous les paragraphes de la page. Ensuite, il ne garderait que ceux ayant un ancêtre possédant la classe `.article`.

## Ancêtre
Le ou les ancêtres sont les sélecteurs séparés par un espace se trouvant à gauche du dernier sélecteur.

Dans l'exemple précédent, il n'y a qu'un ancêtre, soit: `.article`. Autrement dit, seuls les paragraphes se trouvant à l'intérieur d'un élément HTML possédant cette classe seront ciblés par la règle CSS.

Un ancêtre est considéré comme étant un **parent** si le paragraphe est **directement enfant** de celui-ci.

Par exemple:

```
<div class="article">
    <p>Lorem ipsum</p>
</div>
```

Dans la même lignée, un ancêtre peut être **grands-parents si un seul élément les sépares**.

Par exemple, la classe `.intro` est le parent et la classe `.article` est le grands-parents du paragraphe. Cependant `.intro` et `.article` sont tous deux des ancêtres du paragraphe.

```
<div class="article">
    <div class="intro">
        <p>Lorem ipsum</p>
    </div>
</div>
```

Un sélecteur peut aussi être un arrière-grands-parents si deux éléments HTML les séparent et ainsi de suite.

!!!note

    Puisque les règles CSS sont lues de droite à gauche ⬅️, il n’est pas nécessaire de nommer tous les sélecteurs disponibles dans une règle CSS.

    .`article p { ... }` sélectionenra tous les paragraphes à l’intérieur de l’élément avec la classe `.article`, même si `.intro` est omis.

## Déclaration

À l'intérieur des accolades se trouvent les instructions concernant l'apparence des éléments référencés par le sélecteur. Ces instructions portent le nom de déclarations.

Par exemple, le code suivant est une déclaration:

```
font-size: 16px;
```

L'ensemble des déclarations dans une règle CSS est quant à elle appelé un bloc de déclaration.

Par exemple:

```
font-size: 16px;
font-family: Arial;
```

## Propriété & Valeur

Chaque <u>déclaration</u> est constituée d'une propriété et d'une valeur. La propriété étant le texte se trouvant avant les deux points `:` et indiquant l'aspect de l'élément devant être stylé.

Par exemple `font-size`, indiquant que la taille de la police des paragraphes doit-être altéré.

De l'autre côté du `:` se trouve la valeur. Par exemple, `16px` indiquant la taille à donner.
