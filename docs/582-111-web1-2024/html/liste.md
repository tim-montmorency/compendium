# Les listes

## Les listes

En HTML, une liste est constituée de plusieurs éléments de liste. Visuellement, une liste est affichée de la manière suivante:

- Premier élément de ma liste
- Deuxième élément de ma liste
- Troisième élément de ma liste

Les listes nous permettent de regrouper plusieurs éléments sous une même catégorie, créant ainsi une relation entre eux que les navigateurs et les moteurs de recherche peuvent reconnaître.

Les listes sont très utiles pour apporter de la clarté et de l'organisation à nos documents. En plus de cela, nous pouvons également utiliser les listes HTML pour créer des menus de navigation.

### Les différents types de liste

Actuellement au nombre de 3, les différents types de listes vont vous servir pour lister différentes catégories d’informations. Nous retrouverons donc des listes non-ordonnées, des listes ordonnées et des listes de description (ou de définition).

## Les listes non-ordonnées

Les listes non-ordonnées pourront vous servir à énumérer une suite d’informations ne nécessitant pas forcément de classement alphabétique ou numérique.

Pour créer une liste en HTML, on utilise les balises HTML `<ul>` `</ul>` et pour remplir cette liste d’éléments, on utilise les balises `<li>` `</li>` pour définir un élément de la liste.

Exemple de liste non-ordonnée:

```
<ul>
        <li>Élément</li>
        <li>Élément</li>
        <li>Élément</li>
</ul>
```


## Les listes ordonnées

Les listes ordonnées servent à classer des informations pour les lister dans un ordre précis qui ne peut pas être changé.

Une liste ordonnée en HTML se crée par l’utilisation des balises `<ol>` `</ol>` et tout comme pour les listes non-ordonnées vous pouvez remplir les listes ordonnées d’éléments par l’utilisation des balises `<li>` `</li>`.

Exemple de liste ordonnée:

```
<ol>
        <li>Élément 1</li>
        <li>Élément 2</li>
        <li>Élément 3</li>
</ol>
```


## Créer une liste imbriquée

Une liste imbriquée est simplement une liste dans une liste, le concept est simple et son utilisation aussi. Que ce soit une liste ordonnée ou une liste non-ordonnée il suffit d’ajouter un nouvel élément HTML `<ul>` ou `<ol>` dans un précédent élément de liste.

Voici un exemple d’une liste imbriquée d’une liste ordonnée imbriquée dans une liste non-ordonnée:

```
<ul>
        <li>Élément</li>
        <li>Élément</li>
        <ol>
            <li>Élément 1</li>
            <li>Élément 2</li>
            <li>Élément 3</li>
        </ol>
</ul>
```


Vous pouvez donc imbriquer une liste ordonnée dans une liste non-ordonnée et inversement. Mais vous pouvez aussi sans souci imbriquer une ou plusieurs listes dans une autre liste du même genre.
