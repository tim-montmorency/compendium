# Éclipse

![](./giphy.gif){.w-100}

L'objectif de cet exercice est de mettre en pratique les notions Zdog et AnimeJS dans un même projet.

## Résultat attendu

<iframe class="aspect-4-3" height="300" style="width: 100%;" scrolling="no" title="Zdog - EXERCICE - Éclipse SOLUTION" src="https://codepen.io/tim-momo/embed/wBGPOzb?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true">
      See the Pen <a href="https://codepen.io/tim-momo/pen/wBGPOzb">
  Zdog - EXERCICE - Éclipse SOLUTION</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
      </iframe>

## Consignes

- [ ] Effectuer un fork du [CodePen de départ](https://codepen.io/tim-momo/pen/myPqoOQ)
- [ ] Afficher une illustration zdog sur l'élément `.zdog-canvas`
- [ ] Ajouter une `Hemisphere`, d'un diamètre de 50, avec la couleur `#eeaa11` et le `backface` à `#000`
- [ ] Créer un objet javascript dans une variable avec les paramètres suivants : `y`, `zoom`

Avec anime js, animer la variable créée en modifiant ses paramètres : 

- [ ] Durée aléatoire entre 300 et 2000ms
- [ ] `y` aléatoire entre -2π et 2π
- [ ] `zoom` aléatoire entre 1 et 4
- [ ] Animation en boucle
- [ ] Dans la fonction `onUpdate`, appliquer les valeurs `y` et `zoom` sur l'illustration
- [ ] À chaque boucle, faire un refresh pour appliquer de nouvelles valeurs aléatoires

En CSS

- [ ] Ajouter le style `mix-blend-mode: color-dodge;` au canvas du zdog