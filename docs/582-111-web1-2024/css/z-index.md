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

Le concept de **contexte d'empilement** est un peu comme des **« couches »** dans une pile de papiers transparents. Imagine que chaque élément (ou bloc) sur une page est comme un morceau de papier dans cette pile.

- **z-index** nous aide à décider quel morceau de papier est au-dessus ou en-dessous d’un autre.
- **Contexte d’empilement :** Certains morceaux de papier agissent comme des « groupes » et définissent leurs propres petites piles internes. Ils limitent le z-index de tous les éléments qu’ils contiennent.

### Imagine un exemple avec trois carrés transparents :
- **Carré bleu (A)** : En haut de la pile.
- **Carré vert (B)** : Sous le bleu, mais il a un carré rouge en lui.
- **Carré rouge (C)** : Contenu dans le carré vert.

**Dans cet exemple :**

1. **Carré bleu** est au-dessus de tout le reste, donc on le voit en premier.
2. **Carré vert** est juste en-dessous du carré bleu. En tant que parent du carré rouge, il crée un nouveau contexte d’empilement, un peu comme une petite pile à l'intérieur de la grande pile.
3. **Carré rouge** est dans le contexte limité du carré vert, donc il ne peut jamais dépasser le carré bleu, même si on lui donne un z-index très élevé. C'est parce que le z-index ne peut jouer que dans sa « petite pile », qui est limitée au carré vert.

!!!note

    En résumé : Un parent avec une position autre que static crée une petite pile (ou un contexte d’empilement) pour ses enfants, qui limite leur z-index à ce contexte, peu importe leur valeur de z-index par rapport aux éléments de l’extérieur.


## Exercices

<div class="grid grid-auto" markdown>

![Capture d’écran, le 2024-11-05 à 19 47 14](https://github.com/user-attachments/assets/1888bd99-1c7c-420d-b77f-a047ab3a94a7)

  **Z-index - Mains de Monstres**<br>
  _Pour cet exercice, vous devez recréer une scène où des monstres jouent au jeu d’enfants d’empilement des mains._<br>
  [Z-index - Mains de Monstres](../exercices/mains-de-monstres.md)
</div>
