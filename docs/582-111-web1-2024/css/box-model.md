# Box-model

En CSS, chaque élément constituant une page est une boîte rectangulaire

Qu’il s’agisse d’un texte, d'une image ou encore de n’importe quel autre élément, une boîte rectangulaire l’englobe toujours. Ce concept est appelé le Box model 📦.

Par exemple, voici un extrait du site de Radio-Canada. Afin de démontrer que chaque élément est bel et bien une boite rectangulaire, une bordure jaune a été ajoutée en CSS à tous les éléments de ladite page.

<br>
![box-model-radio-canada](https://github.com/user-attachments/assets/bdeea9e9-4f3d-410a-aca1-f367d639bee9)
<br>
<br>

**La boite en CSS est constituée de 4 parties:**

- Le contenu la zone de base définie par le texte/image ou encore le `width` et le `height`.
- La marge intérieure `padding` l’espace vide entre le contenu et sa bordure.
- La bordure `border` la bordure entourant l’élément.
- La marge extérieure `margin` l’espace entre la boîte et celles à proximité.
<br>
<br>
![box-model](https://github.com/user-attachments/assets/06889571-176c-4c7d-98f3-4c1033c4ce39)
<br>
<br>
Par défaut, lorsque les propriétés `width` ou `height` sont attribuées à un élément, seules la largeur et la hauteur du contenu de l'élément sont impactées. Autrement dit, pour obtenir la dimension réelle de l'élément, il faut ajouter la marge intérieure <b>(padding)</b> et la bordure <b>(border)</b>.

!!!warning

    La marge extérieure n’affecte pas la dimension réelle d’un élément puisque cet espace se trouve à l’extérieur de celui-ci.

Par exemple, si le contenu d'un élément a une largeur 200px et une marge intérieure <b>(padding)</b> de 50px, sa dimension réelle est donc de 300px.

| Valeur {style="background-color: red;"}| Propriété {style="background-color: red;"}|
| --- | --- |
| 200px {style="background-color: rgba(0,0,0,.05)"}| width {style="background-color: rgba(0,0,0,.05)"}|
| 50px | padding-left |
| 50px {style="background-color: rgba(0,0,0,.05)"}| padding-right {style="background-color: rgba(0,0,0,.05)"}|
| **300px** | **Total** |


## Exercices

<div class="grid grid-auto" markdown>

<img width="179" alt="Capture d’écran, le 2024-10-22 à 20 59 45" src="https://github.com/user-attachments/assets/7e85234a-c8aa-4dd2-a886-0df9340f5b73">


  **Box-model - Marc Séguin**<br>
  _Pour cet exercice, vous devez mettre en valeur des toiles de l’artiste peintre québécois Marc Séguin en ajoutant uniquement du CSS._<br>
  [Box-model - Marc Séguin](../exercices/marc-seguin.md)
</div>



<div class="grid grid-auto" markdown>

<img width="180" alt="Capture d’écran, le 2024-10-22 à 20 59 21" src="https://github.com/user-attachments/assets/2d9bc978-ade3-4d16-89be-876c403619ec">


  **Box-model - Broforce**<br>
  _Pour cet exercice, vous devez complétez en CSS une interface permettant à deux joueurs de sélectionner leurs personnages en mode versus à Broforce._<br>
  [Box-model - Broforce](../exercices/broforce.md)
</div>
