L'unité CSS permet de dire au navigateur l'échelle à utiliser pour une valeur de taille donnée.

Par exemple, si je souhaite donner une marge à mes paragraphes, je pourrais utiliser le code suivant:

```
p { 
    margin: 20px;
}
```

Dans ce cas, j'ai:

*   Un sélecteur: `p`
*   Une propriété: `margin`
*   Une valeur: `20px`

Cette valeur est à son tour composé de deux éléments: une taille `20` et une unité CSS px. Combiné, ce code permet de dire au navigateur d'appliquer une marge de `20px` à tous mes paragraphes. Bien que l'unité `px` soit la plus fréquente, elle n'est pas toujours la mieux adaptée à toutes les situations.

Voyons voir pourquoi ✨

## Absolues

Les unités absolues gardent leurs dimensions, peu importe leur contexte. Ces unités sont pratiques pour des éléments que l'on souhaite immuables.

!!!warning

    Les unités absolues peuvent causer des enjeux lorsque l’on souhaite créer des sites responsives.

Les pixels _(`px`)_ sont l'unité absolue la plus répandue, ce qui fait du sens puisque la majorité des codes CSS sont écrits pour gérer l'affichage sur un écran. Néanmoins, il existe plusieurs autres valeurs absolues:

*   `cm` - Centimètres
*   `mm` - Millimètres
*   `in` - Pouces

## Relatives

Contrairement aux unités absolues, les unités relatives se basent sur la dimension d'un parent pour déterminer leur dimension, ce qui les rend particulièrement utiles pour créer un site web responsive.

Ces unités peuvent paraîtres plus complexes de prime abord, mais leur utilisation permet souvent d'éviter de redéfinir des valeurs en fonctions des multiples résolutions d'écrans supportées.

*   `%` - Relatif au parent
*   `em` - Relatif à la taille fonte courante
*   `rem` - Relatif à la taille à la racine du document `<html>`

### Relatives vs Absolues


![type:video](https://github.com/user-attachments/assets/37df0fe3-48df-4d95-bc4c-158d51e2021c)


## Quand utiliser quelle unité?

Voici quelques exemples où une unité est préférable à une autre.

### %

Pour qu'un élément prenne la moitié de la largeur de son parent, peu importe la largeur du parent en question.

```
.element {
    width: 50%;
}
```

### em

Pour qu'un texte ayant la classe `.small` ait une taille équivalente à la moitié du texte courant, peu importe la taille du texte courant.

```
.small {
    font-size: 0.5em;
}
```

### rem

Pour que nos éléments de titre affichent toujours de la même taille, soit 2x celle de notre texte de base, peu importe la taille du texte courant.

```
.title {
     font-size: 2rem;
}
```

## En résumé

Pour choisir la bonne unité CSS vous devrez vous poser les questions suivantes:

*   Est-ce que cet élément devrait toujours avoir une taille fixe?
*   Si non, quel élément devrait le faire varier? La dimension de son parent, la taille de la fonte courante ou celle à la base du document, etc.

!!!note

    0, peu importe l’unité de mesure, reste 0. Il n’est donc pas nécessaire de spécifier l’unité de mesure: 0px, 0em, 0% = 0. CSS Units Explained
