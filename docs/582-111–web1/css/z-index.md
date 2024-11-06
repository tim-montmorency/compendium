# Z-index
Par défaut, le flux de la page, ou en anglais **page flow**, fait en sorte qu'une balise HTML se positionne toujours par-dessus celles qui la précède. Ainsi, dans le cas où deux balises se superposent, celle apparaissant en dernier dans le code affichera par-dessus la première.

<iframe height="300" style="width: 100%;" scrolling="no" title="Z-Index" src="https://codepen.io/tim-momo/embed/wvxxmbW?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/wvxxmbW">
  Z-Index</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Il est cependant possible de modifier l'ordre d'empilement des balises en spécifiant une valeur de `z-index`. Attention, seules les balises ayant la propriété CSS `position` de défini à une valeur autre que `static` sont impactés par `z-index`.

Dans l'exemple ci-dessous, `z-index: 1` est ajouté à l'élément vert 🟩. Remarquez cependant comment cette propriété n'a aucun effet tant qu'une position n'est pas définie.

<iframe height="300" style="width: 100%;" scrolling="no" title="Z-Index - Position" src="https://codepen.io/tim-momo/embed/MWBBVMr?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/MWBBVMr">
  Z-Index - Position</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Contexte d'empilement

Les éléments partageant un même parent peuvent être déplacés en avant ou en arrière les uns des autres grâce à `z-index`, c'est ce que l'on appelle le contexte d'empilement.

Cependant, quand un parent à une position autre que `static` de défini, il créer un nouveau contexte d'empilement pour ses enfants. Ce contexte limite la portée du `z-index` des enfants à ce parent. Autrement dit, si le carré bleu est par-dessus le carré vert et que ce dernier contient un carré rouge, même si ce carré avait un z-index d'un million, celui-ci resterait sous le carré bleu puisque son contexte d'empilement est limité à son parent, soit le carré vert.


## Exercices

<div class="grid grid-auto" markdown>

![Capture d’écran, le 2024-11-05 à 19 47 14](https://github.com/user-attachments/assets/1888bd99-1c7c-420d-b77f-a047ab3a94a7)

  **Z-index - Mains de Monstres**<br>
  _Pour cet exercice, vous devez recréer une scène où des monstres jouent au jeu d’enfants d’empilement des mains._<br>
  [Z-index - Mains de Monstres](https://tim-montmorency.com/compendium/582-111%E2%80%93web1/exercices/mains-de-monstres.html)
</div>
