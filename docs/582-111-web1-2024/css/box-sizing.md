# Box-sizing
La propriété `box-sizing` permet de spécifier si la marge intérieure **(padding)** et la bordure **(border)** d'un élément doivent compter dans sa dimension réelle.

Afin d'illustrer l'impact de cette propriété, une boite de 200x200px contenant 5 lettres sera utilisée avec les différentes valeurs de box-sizing.

## content-box

**Est la valeur par défaut** attribué à la propriété `box-sizing`. Par défaut, tous les éléments d'une page utilisent ce <u>box-model</u>. Ce mode donne priorité au contenu. Évitant ainsi que l'espace alloué au contenu change de dimension lorsqu'une marge intérieure **(padding)** ou une bordure **(border)** lui est ajoutée.

Par exemple, la boite ayant le contenu **(A - B - C - D - E)** ne change pas la disposition de son contenu même si un padding de 40px lui est ajouté. En contrepartie, la boite mesure maintenant réellement 280px **(40px + 200px + 40px)**.

![content-box](https://github.com/user-attachments/assets/25f0043c-c921-444a-b0d1-a322efaa2da9){ style="display: block; margin: 0 auto" }


<p style="text-align: center;">À gauche, sans padding.</p>
<p style="text-align: center;">À droite, avec un padding de 40px.</p>


## border-box

Ce mode sert à donner priorité à la dimension réelle de la boite. Évitant ainsi qu'elle change de dimension lorsqu'une marge intérieure **(padding)** ou une bordure **(border)** lui est ajoutée.

Par exemple, la boite ayant le contenu **(A - B - C - D - E)** ne change jamais de dimension **(200x200px)**. En contrepartie, Le contenu **(A - B - C - D - E)** doit ajuster sa disposition lorsqu'un padding de 40px est ajouté à la boite, puisque l'espace alloué au contenu se trouve réduit afin de ne pas modifier la dimension réelle de la boite.

![border-box](https://github.com/user-attachments/assets/dddb1870-f64d-4dbf-a30c-73f0252ba766){ style="display: block; margin: 0 auto" }

<p style="text-align: center;">À gauche, sans padding.</p>
<p style="text-align: center;">À droite, avec un padding de 40px.</p>

`border-box `est particulièrement utile lorsque des éléments ont une dimension en %.

Par exemple, une boite prenant toute la largeur de la fenêtre et ayant une marge intérieure de 20px:

```
.box {
  width: 100%;
  padding: 20px;
}
```
En `box-sizing: content-box`, la taille réelle de cette boite dépasserait celle de la fenêtre. Créant ainsi une barre de défilement horizontale et une mise en page quelque peu étrange.

Tandis qu'en `box-sizing: border-box`, puisque les marges intérieures **(padding)** sont comptées à même la largeur totale, la boite est en mesure de prendre toute la largeur de la fenêtre, d'avoir ses marges intérieures sans pour autant dépasser de ladite fenêtre.

<iframe height="300" style="width: 100%;" scrolling="no" title="Content-box vs Border-box" src="https://codepen.io/tim-momo/embed/mdjKKaQ?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/mdjKKaQ">
  Content-box vs Border-box</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

De nos jours, la majorité des développeurs convertissent toutes les boites de leurs pages en `border-box` via le code suivant placé en début de feuille CSS:

```
* {
 box-sizing: border-box;
}
```

Ceci permet de simplifier la réalisation de mises en page.







## EXERCICE

<div class="grid grid-auto" markdown>

![Capture d’écran, le 2024-10-29 à 17 47 28](https://github.com/user-attachments/assets/e5445557-8982-4f9f-960b-e21095cabea0)

  **Box-sizing - Illustrator**<br>
  _Pour cet exercice vous devez compléter une mise en page déjà entamée d’un écran de démarrage du logiciel Adobe Illustrator._<br>
  [Box-sizing - Illustrator](../exercices/illustrator.md)
</div>
