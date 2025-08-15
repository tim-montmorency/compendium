# Cours 8

*[CSS]: Cascading Style Sheets

## CSS

Le CSS (aussi appelé **feuille de style**) est un langage qui permet de **mettre en forme** les éléments d’une page Web : couleurs, tailles, polices, espacements, bordures, alignements, etc.

## La syntaxe

```css
selector {
  property: value;
}
```

<iframe class="aspect-16-9" height="300" style="width: 100%;" scrolling="no" title="Web 1 - CSS Cascade" src="https://codepen.io/tim-momo/embed/KwdgxXB?default-tab=css%2Cresult&editable=true&theme-id=50210" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/KwdgxXB">
  Web 1 - CSS Cascade</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Un **sélecteur** est l’élément HTML qu’on souhaite cibler avec du style. Voici les types fréquents :

| Type de sélecteur | Syntaxe | Cible |
| ----------------- | ------- | ----- |
| Balise | `p` | Tous les paragraphes |
| Classe | `.highlight` | Tous les éléments avec `class="highlight"` |
| Identifiant | `#main` | Un seul élément avec `id="main"` |
| Universel | `*` | Tous les éléments |
| Combinés | `nav ul li a` | Tous les liens dans des listes dans un nav |

```css
h1 { color: red; }
.intro { font-weight: bold; }
#header { background-color: lightgray; } 
/* En général on évite d'appliquer un style sur un id="", car c'est trop spécifique */
```

### Cascade

On peut ajouter de la précision en assemblant les sélecteurs. Par exemple, on pourrait cibler seulement les paragraphes situés à l'intérieur d'une balise blockquote.

<iframe height="300" style="width: 100%;" scrolling="no" title="Web 1 - Audio" src="https://codepen.io/tim-momo/embed/azvmapr?default-tab=html%2Cresult&editable=true&theme-id=50210" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/azvmapr">
  Web 1 - Audio</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Usage

Il existe trois façons d’intégrer du CSS dans une page HTML :

### CSS inline

Le style est appliqué directement dans une balise HTML, via l’attribut `style=""`.

```html
<p style="color: pink;">BLΛƆKPIИK</p>
```

### CSS interne

Le CSS est écrit **dans le même fichier HTML**, à l’intérieur d’une balise `<style>` située dans la portion `<head>` du document.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS interne</title>
    <style>
      p {
        color: pink; 
      }
    </style>
</head>
<body>
    <p>BLΛƆKPIИK</p>
</body>
</html>
```

### CSS externe

Le CSS est écrit dans un fichier séparé (avec l’extension .css), puis lié au fichier HTML avec une balise `<link>` dans le `<head>`.

```html title="index.html"
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS externe</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <p>BLΛƆKPIИK</p>
</body>
</html>
```

```css title="styles.css"
p {
  color: pink;
}
```

!!! info "À propos de la balise `<link>`"

    La balise `<link>` permet de **lier des ressources externes** à la page HTML (feuilles de style, icônes, etc.).  
    Elle se place dans le `<head>` et est autofermante.

    Exemple :

    ```html
    <link rel="stylesheet" href="style.css">
    ```

	L’attribut `rel` indique **la nature du lien**. On l'utile la plupart du temps pour les feuilles de styles et le favicon.

    Exemple pour un favicon :

    ```html
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    ```

## Modèle des boîtes CSS

Chaque élément HTML est une boîte constituée de :

```text
+-------------------------+
|         margin          |
|  +-------------------+  |
|  |      border       |  |
|  |  +-------------+  |  |
|  |  |   padding   |  |  |
|  |  | +---------+ |  |  |
|  |  | | contenu | |  |  |
|  |  | +---------+ |  |  |
|  |  +-------------+  |  |
|  +-------------------+  |
+-------------------------+
```

Propriétés principales :
	•	padding : espace intérieur
	•	margin : espace extérieur
	•	border : contour
	•	box-sizing : définit le calcul des dimensions (content-box ou border-box)

```css title="exemple"
div {
  padding: 10px;
  margin: 20px;
  border: 2px solid black;
  box-sizing: border-box;
}
```

🔹 `box-sizing: border-box;` est recommandé pour éviter les surprises dans le calcul des largeurs et hauteurs :  
les `padding` et `border` seront inclus **dans** la dimension totale de l’élément.

## Arrière-plan

Propriétés de base :
	•	background-color
	•	background-image
	•	background-repeat
	•	background-position
	•	background-size

```css
body {
  background-color: #f0f0f0;
  background-image: url('fond.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
```

## Propriété display

Tous les éléments HTML ont un comportement d’affichage par défaut (ex. : `div` = block, `span` = inline).  
On peut modifier ce comportement avec la propriété `display`.

Voici des valeurs courantes :

| Valeur | Description |
| ------ | ----------- |
| block  | Prend toute la largeur disponible |
| inline | S’aligne sur une ligne de texte, mais a des limitations sur son modèle de boite. |
| inline-block | Combinaison des deux |
| none | Cache l’élément |

On peut aussi aligner les éléments inline vertivalement avec la propriété `vertical-align`.

```css title="exemple"
span {
  display: inline-block;
  vertical-align: middle;
}
```

[STOP]

## Anatomie d'une règle
![icon (18)](https://github.com/user-attachments/assets/712da69d-b3cd-4078-b777-14f6b06be142)


[Structure, ancêtre, déclaration](./css/anatomie-regle.md)
<br>
<br>


## Sélecteurs

![icon (19)](https://github.com/user-attachments/assets/02172ff4-7f1b-4f31-a252-541a923b2575)


[balise, #, ., combinaison, descendant](./css/selecteurs.md)
<br>
<br>


## CSS Diner - Niveaux 1 à 8

![thumb (5)](https://github.com/user-attachments/assets/bbf4c552-a9a3-4624-a2f2-5a186a317b73)


[Complétez les 8 premiers niveaux de CSS Diner 🍎](https://flukeout.github.io/)
<br>
<br>


## Flux

![icon (20)](https://github.com/user-attachments/assets/6a69838c-3810-4c5e-b4af-5f59c8782993)


[L’affichage de base des éléments dans une page](./css/flux.md)
<br>
<br>


## Padding

![icon (21)](https://github.com/user-attachments/assets/c3f08d22-fc0b-4765-a42d-e232d95e3ac5)


[marge intérieur](./css/padding.md)
<br>
<br>


## Margin

![icon (22)](https://github.com/user-attachments/assets/da7575c9-774f-4323-9116-14d6d54c2fd9)


[marge extérieur](./css/margin.md)
<br>
<br>


## Background

![icon (23)](https://github.com/user-attachments/assets/6f455992-36e5-4236-a2ac-62267f349a5a)


[color, image, gradient](./css/background.md)
<br>
<br>


## Background - Candy Crush

![thumb (6)](https://github.com/user-attachments/assets/428b4319-7c08-489b-a76a-59241c648248)


[Pour cet exercice, vous devrez recréer des mises en page inspirées du jeux Candy Crush en mettant à profit vos connaissances sur la propriété CSS background.](./exercices/candy-crush.md)
<br>
<br>


## Display

![icon (24)](https://github.com/user-attachments/assets/556870af-013b-4231-af69-ad6f83c5ba16)


[block, inline, inline-block, none](./css/display.md)
<br>
<br>


## Display - Celeste

![thumb (7)](https://github.com/user-attachments/assets/633c1ddd-b569-49fa-8281-3c697115e191)


[Pour cet exercice, vous devrez complétez la carte de présentation de Madeline, l’héroine du jeu Celeste.](./exercices/celeste.md)
<br>
<br>


## Vertical-align

![icon (25)](https://github.com/user-attachments/assets/ba8cd02d-4d5b-45a0-9466-afc8e6cd7727)


[baseline, top, middle, bottom, super, sub](./css/vertical-align.md)
<br>
<br>


## Position

![icon (26)](https://github.com/user-attachments/assets/b4dba7ff-b07e-4be4-b7e8-b13bb2d5725e)


[static, relative, absolute, fixed, sticky](./css/position.md)
<br>
<br>


## Cat in the box - Niveaux 1 à 13

![thumb (8)](https://github.com/user-attachments/assets/a29b873c-f07e-4745-a2d3-8eafe2ae3b2c)


[Utilisez la propriété position afin de déplacer les chats dans leurs boites respectives.](https://cdpn.io/smnarnold/debug/ZEpZWPB/)
<br>
<br>
