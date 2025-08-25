# Cours 9

[STOP]

PRÉVOIR UNE ÉVALUATION FORMATIVE

## Propriétés typographiques

### font-family

Définit la police utilisée.

```css
body {
  font-family: Arial, Helvetica, sans-serif;
}
```

Bonnes pratiques :
	•	Utiliser une pile de polices (fallbacks)
	•	Préférer des polices Web-safe ou utiliser Google Fonts

### font-size

Taille du texte.

```css
h1 {
  font-size: 2em;
}
```

Unités communes :
	•	px : pixels fixes
	•	em / rem : relatives (accessibilité recommandée)

### font-weight

Épaisseur de la police.

```css
a {
  font-weight: bold; /* ou 700 */
}
```

### line-height**

Espacement entre les lignes.

```css
p {
  line-height: 1.5;
}
```

## Alignements et décorations

### text-align

Alignement horizontal :

```css
p {
  text-align: center;
}
```

### text-decoration

Ajoute une ligne :

```css
a {
  text-decoration: underline;
}
```

Autres valeurs : none, overline, line-through

### text-transform

Transforme la casse :

```css
h1 {
  text-transform: uppercase;
}
```

## Couleurs et unités

Couleurs CSS
	•	Mots-clés : black, white, red, etc.
	•	Hexadécimal : #ff0000
	•	RGB / RGBA : rgb(255, 0, 0), rgba(255, 0, 0, 0.5)
	•	HSL / HSLA : hsl(0, 100%, 50%)

Bonnes pratiques :
	•	Contraste suffisant pour l’accessibilité
	•	Cohérence visuelle (charte graphique)

## Unités CSS

| Unité | Signification | Exemple |
| ----- | ------------- | ------- |
| px    | pixels (absolue) | font-size: 16px; |
| % | pourcentage par rapport au parent | width: 80%; |
| em | relatif à la taille du parent | font-size: 1.2em; |
| rem | relatif à la taille du html root | font-size: 1rem; |

## États interactifs CSS

Les pseudo-classes permettent de styliser les éléments en interaction.

### :hover

Quand la souris survole :

```css
a:hover {
  color: orange;
}
```

### :active

Quand on clique :

```css
button:active {
  transform: scale(0.98);
}
```

### :focus

Quand un élément est sélectionné (formulaire par exemple) :

```css
input:focus {
  outline: 2px solid blue;
}
```

## Dimensions et bordures

width / height
```css
img {
  width: 300px;
  height: auto;
}
```

border

```css
p {
  border: 1px solid #ccc;
}
```

Permet de dessiner un contour :

Options :
	•	Epaisseur (1px)
	•	Style (solid, dashed, dotted)
	•	Couleur

Bordures arrondies

```css
div {
  border-radius: 10px;
}
```

[STOP]

## Unités de mesure

![icon (27)](https://github.com/user-attachments/assets/b31cd86a-995e-4437-8694-d82f492b3c92)


[absolue, relative, %, em, rem](./css/unites-de-mesures.md)
<br>
<br>


## Font

![icon (28)](https://github.com/user-attachments/assets/596f22c1-5cf7-47d1-ae0c-c3936c0692e7)

[color, family, weight, size, style, line-height](./css/font.md)
<br>
<br>


## Text

![icon (29)](https://github.com/user-attachments/assets/0368bb51-35c1-429f-8cfe-f7df3d5ec5d1)

[align, decoration, transform, stroke, shadow](./css/text.md)
<br>
<br>


## Text - Focus

![thumb (9)](https://github.com/user-attachments/assets/20972e3c-ddb7-48e5-928c-dbace657b931)

[Pour cet exercice, vous devez manipuler les propriétés de texte en CSS afin de recréer un effet typographique.](./exercices/focus.md)
<br>
<br>


## Width & Height

![icon (30)](https://github.com/user-attachments/assets/976018f5-1ab2-4d61-9d60-79c7091bdb69)

[min-width/height, max-width/height](./css/width-height.md)
<br>
<br>


## Width/Height - System32

![thumb (10)](https://github.com/user-attachments/assets/06fb578e-a59c-45c1-a4a1-5e91ffd42e60)

[Pour cet exercice, vous devez créer en HTML et CSS une page présentant une bande dessinée d’Andrew AKA system32comics.](./exercices/system-32.md)
<br>
<br>


## Width/Height - Prévert

![thumb (11)](https://github.com/user-attachments/assets/311cf19e-31ac-4fe4-ba48-9dbb1549ce3b)


[Pour cet exercice vous devrez en CSS compléter l’affichage du célèbre poème: Le cancre, du français Jacques Prévert.](./exercices/prevert.md)
<br>
<br>


## Border

![icon (31)](https://github.com/user-attachments/assets/5adb8634-9acd-4c88-b0c1-758d3e5ed2f2)

[border, border-radius](./css/border.md)
<br>
<br>


## Border-radius - Q-bitz

![thumb (12)](https://github.com/user-attachments/assets/af6e97b3-f370-42ec-9764-7c27dd59ff65)

[Pour cet exercice vous devez recréer un motif à partir de tuiles contenant des formes, comme dans le célèbre jeu de scociété Q-bitz.](./exercices/q-bitz.md)
<br>
<br>


## Box-model

![icon (32)](https://github.com/user-attachments/assets/1157d53b-a6f5-45a0-bdb0-1d0c5f9bfc72)

[Chaque élément d'une page est une boîte rectangulaire](./css/box-model.md)
<br>
<br>


## Box-model - Broforce

![thumb (13)](https://github.com/user-attachments/assets/72ae9c62-003b-4628-888e-272ab38c89cf)

[Pour cet exercice, vous devez complétez en CSS une interface permettant à deux joueurs de sélectionner leurs personnages en mode versus à Broforce.](./exercices/broforce.md)
<br>
<br>


## Box-model - Marc Séguin

![thumb (14)](https://github.com/user-attachments/assets/f3237a67-c28f-4a79-ae0a-019818c375e5)

[Pour cet exercice, vous devez mettre en valeur des toiles de l’artiste peintre québécois Marc Séguin en ajoutant uniquement du CSS.](./exercices/marc-seguin.md)
<br>
<br>


## Métadonnées

![icon (33)](https://github.com/user-attachments/assets/63ac5eab-ccbf-4d97-acea-9dc46c0df041)

[type, title, description, image, url, etc.](./html/metadonnees.md)
<br>
<br>


## Unités de couleur

![icon (34)](https://github.com/user-attachments/assets/33391f82-c560-4ff9-b4ed-5eef66a32820)

[hex, rgb, hsl, etc.](./css/unitees-de-couleur.md)
<br>
<br>


