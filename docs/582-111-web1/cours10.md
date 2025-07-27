# Cours 10

## Rappel du modèle de boîte

Revue du modèle vu précédemment :

```css
element {
  width: 300px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}
```

Problème : largeur totale imprévisible si on n’utilise pas box-sizing.

## box-sizing : contrôle total de la boîte

| Valeur | Description |
| ------ | ----------- |
| content-box | valeur par défaut, largeur exclut padding et border |
| border-box | largeur inclut padding et border – recommandée |

```css
* {
  box-sizing: border-box;
}
```

## Les types de positionnement CSS

### static

* L’élément suit le flux normal du document.
* Pas d’effet des propriétés top, left, etc.

### relative

L’élément reste dans le flux, mais on peut le décaler.

```css
position: relative;
top: 10px;
left: 20px;
```

### absolute

L’élément est retiré du flux, positionné relativement à son ancêtre positionné.

```css
position: absolute;
top: 0;
right: 0;
```

### fixed

L’élément est fixé par rapport à la fenêtre (viewport).

```css
position: fixed;
bottom: 0;
left: 0;
```

## Disposition avec float

```css
float: left; /* ou right */
```

## Dégradés

La propriété background permet les dégradés CSS :

```css
background: linear-gradient(to right, red, orange, yellow);
```

Variantes :
	•	to top, to left, to bottom right, etc.
	•	Couleurs multiples
	•	Transparence :

```css
background: linear-gradient(to right, rgba(0,0,0,0.5), transparent);
```

Utilisations :
	•	Fonds décoratifs
	•	Superpositions (overlay)
	•	Boutons animés

[STOP]

## Linear-gradient

![icon (35)](https://github.com/user-attachments/assets/6f73a468-730e-4196-898e-08ad4add85f4)

[Générer un dégradé](https://tim-montmorency.com/compendium/582-111%E2%80%93web1/css/linear-gradient.html)
<br>
<br>


## Linear-gradient - Igloofest

![thumb (15)](https://github.com/user-attachments/assets/91634eaf-e692-404f-ba25-6c37ed797249)


[Pour cet exercice, vous devez compléter la mise en page d’un carton promotionnel de l’Igloofest.](https://tim-montmorency.com/compendium/582-111%E2%80%93web1/exercices/igloofest.html)
<br>
<br>


## Nommage et formatage

![icon (38)](https://github.com/user-attachments/assets/6638b3ef-1be7-4921-a90d-55b4a28a6c80)


[À priori, nommer des éléments peut sembler facile.](https://tim-montmorency.com/compendium/582-111%E2%80%93web1/css/nommage-et-formatage.html)
<br>
<br>


## Box-sizing

![icon (36)](https://github.com/user-attachments/assets/d48189c1-ac34-44c2-a55d-04ea8afb3bb1)


[border-box, content-box](https://tim-montmorency.com/compendium/582-111%E2%80%93web1/css/box-sizing.html)
<br>
<br>


## Box-sizing - Illustrator

![thumb (16)](https://github.com/user-attachments/assets/c631ee38-ed4a-4577-994a-fc96572773d3)

[Pour cet exercice vous devez compléter une mise en page déjà entamée d’un écran de démarrage du logiciel Adobe Illustrator.](https://tim-montmorency.com/compendium/582-111%E2%80%93web1/exercices/illustrator.html)
<br>
<br>


## Float

![icon (37)](https://github.com/user-attachments/assets/0548380f-c082-4d8d-a0df-03a73b7ead0a)

[Permet à un élément de flotter à gauche ou à droite](https://tim-montmorency.com/compendium/582-111%E2%80%93web1/css/float.html)
<br>
<br>


## Float - Rupi Kaur

![thumb (17)](https://github.com/user-attachments/assets/99dc4e72-d8a4-4fac-9385-f1692d5157b1)

[Pour cet exercice vous devrez mettre en forme un poème de Rupi Kaur: une poétesse, écrivaine et féministe canadienne, née en Inde.](https://tim-montmorency.com/compendium/582-111%E2%80%93web1/exercices/rupi-kaur.html)
<br>
<br>


## Spécificité

![icon (39)](https://github.com/user-attachments/assets/7149bf9d-c686-4b85-999a-0989e4ac22b4)

[Chaque sélecteur en CSS se voit attribuer un pointage.](https://tim-montmorency.com/compendium/582-111%E2%80%93web1/css/specificite.html)
<br>
<br>


## Spécificité CSS

![thumb (18)](https://github.com/user-attachments/assets/4dbb524a-4f8c-45a1-8302-40770d7bbc78)

[Un quiz amusant pour apprendre et pratiquer la spécificité en CSS.](https://css-specificity.smnarnold.com/?level=tag-vs-class)
<br>
<br>

