---
tags:
  - Exercice
---

# DnD

L'objectif de cet exercice est de mettre en pratique la notion de classe JavaScript.

## Résultat attendu

<iframe class="aspect-4-3" height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/tim-momo/embed/LENrvwQ?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true">
      See the Pen <a href="https://codepen.io/tim-momo/pen/LENrvwQ">
  Untitled</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
      </iframe>

## Consignes

- [ ] Effectuer un fork du [Codepen de départ](https://codepen.io/tim-momo/pen/jEqKoMq)

Compléter le code manquant pour chaque commentaire : 

- [ ] ⚔️ #1 - Assigner les paramètres reçus à des propriétés équivalentes pour l'objet Character
- [ ] ⚔️ #2 - Réduire la santé de la cible en fonction de la force de l'attaquant
- [ ] ⚔️ #3 - S'assurer que la santé ne descend pas en dessous de zéro
- [ ] ⚔️ #4 - Retourne `true` si la santé est supérieure à zéro, sinon retourne `false`
- [ ] ⚔️ #5 - Créer une instance de Character pour les personnages suivants : 

    <div class="grid" markdown>
    <div markdown>
    > Personnage principal :
    >
    > - Nom : "Paladin" <br>
    > - 100 de santé<br>
    > - 9 de force<br>
    > - Image : "warrior.png"
    </div>
    
    <div markdown>
    > Ennemi :
    >
    > - Nom : "La mort" <br>
    > - 100 de santé <br>
    > - 666 de force <br>
    > - Image : "enemy.png"
    </div>
    </div>

- [ ] ⚔️ #6 - Mettre à jour le contenu textuel du site pour les deux personnages en utilisant leur instance respective : 

    > - Nom
    > - Santé
    > - Force
    > - Image (Exemple d'URL : "https://assets.codepen.io/9367036/warrior.png")

- [ ] ⚔️ #7 - Lorsque le bouton "Attaquer" est cliqué, le personnage principal attaque l'ennemi, puis les statistiques sont mises à jour.
- [ ] ⚔️ #8 - Si l'ennemi n'est plus en vie après l'attaque, modifier le texte du `h1` pour afficher "Victoire !" et rendre l'image de l'ennemi invisible en réglant son opacité à 0.
