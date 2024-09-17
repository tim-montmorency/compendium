# Les tableaux

## Les tableaux

La balise en paire `<table>` `</table>` indique le début et la fin d'un tableau. Cette balise est de type block , on va donc la placer en dehors d'un paragraphe ou d'une `<div>`.

**Indiquez les valeurs du tableau avec les balises HTML `<tr>` et `<td>`**

Pour construire un tableau ligne par ligne, on indique pour chaque ligne,`<tr>` (pour **table row** ou "**rangée du tableau**"), le contenu des différentes cellules, `<td>` (pour **table data** ou "**donnée**" ou "**entrée**"):
- `<tr>` `</tr>` indique le début et la fin d'une ligne du tableau
- `<td>` `</td>` indique le début et la fin du contenu d'une cellule
![cellule](https://github.com/user-attachments/assets/5e46aa52-68bb-40c9-a64e-d13f22fbfe00)



On a une balise de ligne **<tr>** qui englobe un groupe de cellules **<td>**.

Par exemple, si je veux faire un tableau à deux lignes, avec trois cellules par ligne (donc trois colonnes), je devrai taper ceci :

```
<table>
    <tr>
        <td>Carmen</td>
        <td>33 ans</td>
        <td>Espagne</td>
    </tr>
    <tr>
        <td>Michelle</td>
        <td>26 ans</td>
        <td>États-Unis</td>
    </tr>
</table>
```


Le résultat est un peu déprimant :
<img width="598" alt="resultat-tableau" src="https://github.com/user-attachments/assets/b6b41782-e938-485d-9445-7ea61d89a7db">


On peut embellir le résultat avec du CSS mais continuons sans CSS.

## En-tête d’un tableau

La ligne d'en-tête se crée avec un `<tr>` mais les cellules qu'elle contient sont, cette fois, encadrées par des balises <th> (pour table header ou "en-tête de tableau" en français) et non pas `<td>`

```
<table>
    <tr>
        <th>Nom</th>
        <th>Âge</th>
        <th>Pays</th>
    </tr>
    <tr>
        <td>Carmen</td>
        <td>33 ans</td>
        <td>Espagne</td>
    </tr>
    <tr>
        <td>Michelle</td>
        <td>26 ans</td>
        <td>États-Unis</td>
    </tr>
</table>
```


La ligne d'en-tête est très facile à reconnaître pour deux raisons:

- Les cellules sont des <th>au lieu des `<td>` habituels
  
- C'est la première ligne du tableau

!!! note

    Comme vous pouvez le constater, le navigateur a mis en gras le texte des cellules d'en-tête. C'est ce que font en général les navigateurs mais, si vous le désirez, vous pouvez changer cela à coups de CSS : modifier la couleur de fond des cellules d'en-tête, leur police, leur bordure, etc. Pour cela, il vous suffit d'utiliser le sélecteur th dans le CSS !

## Titre d'un tableau

Normalement, chaque tableau devrait être accompagné d'un titre. Le titre du tableau permet d'informer rapidement le visiteur sur le contenu et le contexte du tableau. Dans notre exemple, nous présentons une liste de personnes... Sans titre de tableau, il est facile de se sentir perdu.

Heureusement, la balise `<caption>` vient à notre secours pour ajouter un titre à notre tableau!

Cette balise doit être placée au début du tableau, juste avant l'en-tête. Son contenu correspond au titre que vous souhaitez attribuer au tableau.

```
<table>
        <caption>Passagers du vol 377</caption>
        <tr>
            <th>Nom</th>
            <th>Âge</th>
             <th>Pays</th>
        </tr>
        <tr>
            <td>Carmen</td>
            <td>33 ans</td>
            <td>Espagne</td>
        </tr>
        <tr>
            <td>Michelle</td>
            <td>26 ans</td>
            <td>États-Unis</td>
        </tr>
</table>

```


## Un grand tableau avec des balises HTML

Divisez un tableau avec les balises HTML thead, tbody et tfoot

Si votre tableau est assez gros, vous aurez tout intérêt à le découper en plusieurs parties. Pour cela, il existe des balises HTML qui permettent de définir les trois “zones” du tableau:
- 
- **L'en-tête du tableau** (en haut) se définit avec les balises `<thead>` `</thead>`
- **Le corps du tableau** (au centre) se définit avec les balises `<tbody>` `</tbody>`
- **Le pied du tableau** (en bas) se définit avec les balises `<tfoot>` `</tfoot>`

!!! note

    Vous vous servirez de ces balises, surtout si votre tableau est assez gros, et que vous avez besoin de l'organiser plus clairement. Pour les “petits” tableaux, vous pouvez garder sans problème l'organisation plus simple que nous avons vue au début.

Vous pouvez par exemple y mettre un résumé, ou un total. Le pied de tableau se mettra, comme l'en-tête, par défaut, en **gras**:
<img width="581" alt="grand-tableau" src="https://github.com/user-attachments/assets/a7465c0c-e320-4647-b99f-a5106b91ed9d">


Dans cet exemple de tableau, il peut sembler redondant de mettre le même contenu dans l'en-tête et le pied du tableau. Cependant, cette pratique peut s'avérer utile lorsque le tableau est très long.

Lorsqu'un tableau contient un grand nombre de lignes et que l'utilisateur fait défiler la page pour le parcourir, il peut être pratique de répéter le contenu de l'en-tête dans le pied du tableau. Ainsi, lorsque l'utilisateur atteint la fin du tableau, il peut facilement visualiser les informations clés de chaque colonne sans avoir à remonter vers l'en-tête.

Cette répétition de contenu facilite la consultation du tableau et permet de garder une vue d'ensemble, même lorsque l'utilisateur se trouve loin de l'en-tête. Cependant, il est important de noter que cette pratique peut augmenter la taille du tableau et nécessite une attention particulière pour maintenir la cohérence des données entre l'en-tête et le pied du tableau.

## Fusionnez les cellules d'un tableau

Fusionnez des cellules du tableau avec les attributs **colspan** et **rowspan**

Pour fusionner des cellules entre elles, il suffit d'ajouter un attribut dans la balise HTML `<td>`. Cela permet d'indiquer le nombre de cellules à fusionner entre elles (la balise des cellules).

II existe deux attributs pour deux types de fusions différentes:

- **L'attribut `colspan` permet de fusionner des colonnes:** la fusion s'effectue horizontalement, aussi bien sur les lignes d'en-tête que sur le contenu lui-même.
- **L'attribut `rowspan` permet de fusionner des lignes:** là, deux lignes seront groupées entre elles. La fusion s'effectuera verticalement.

Voyons tout de suite à quoi cela peut ressembler:
<img width="598" alt="fusion-cellule" src="https://github.com/user-attachments/assets/10d45a01-0e15-47a9-8dd3-8469bbe03fc5">


## Exercices

<div class="grid grid-auto" markdown>

<img width="185" alt="Capture d’écran, le 2024-09-17 à 10 54 51" src="https://github.com/user-attachments/assets/76c39db5-60a7-45fc-9734-8b25db39d708">



  **Exercice tableaux no1**<br>
  _Pour cet exercice, vous devez recréer un tableau._<br>
  [Exercice tableaux no1](https://tim-montmorency.com/compendium/582-111%E2%80%93web1/exercices/div-span.html)
</div>


<div class="grid grid-auto" markdown>

<img width="186" alt="Capture d’écran, le 2024-09-17 à 10 55 03" src="https://github.com/user-attachments/assets/dd935160-3b2d-406e-9360-e2a56caaf019">




  **Exercice tableaux no2**<br>
  _Pour cet exercice, vous devez recréer un tableau._<br>
  [Exercice tableaux no2](https://tim-montmorency.com/compendium/582-111%E2%80%93web1/exercices/div-span.html)
</div>


