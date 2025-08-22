# Résumé du HTML 5

## Balises en paires

balise d’ouverture `<title>`+ texte + balise de fermeture `</title>`

!!! note


    `<title>` Ceci est le titre de ma 1ère page Web `</title>`



## Balises orphelines

- Ne contiennent pas de texte, n’ont pas de balise de fermeture
- Utilisées pour insérer un élément à un endroit précis de la page

!!! note

    **Exemple**: Les balises images, `<img>`



## Balises avec attributs

Une balise peut avoir des attributs avec ou sans valeurs
```
<img src="images/blocnotes.png" alt="Bloc-Notes">
```


## Structure de base HTML

```
<!DOCTYPE html>
    <html>
        <head>
            <title>Le titre de ma page</title>
        </head>

        <body>

        </body>
    </html>
```


## Balises sémantiques

- `<article>` : pour indiquer que c’est l’article d’un blog ou d’un journal
- `<section>` : section de contenu – utilisé si l’on a plusieurs sections d’un document.
- `<nav>` : liens de navigation
- `<header>` : en-tête de la page
- `<footer>` : pied de page
- `<aside>` : lien indirect avec le sujet principal de la page

## Balises non-sémantiques

- `<div>` `</div>` : bloc de texte – généralement utilisé pour découper un document en bloc.
- `<span>` `</span>` : la balise est un conteneur en ligne.

## Balises titre

`<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>` : **h1** étant le niveau le titre le plus haut et **h6** le sous-titre le plus bas

## Balises de texte

- `<p>` `</p>` : paragraphe
- `<br>` : saut de ligne
- `<hr>` : ligne horizontale

## Les commentaires
!!! note


    <!–- Ceci est un commentaire -->


## Les citations

- `<q>` : permet d'insérer dans un texte une courte citation sans créer un nouveau bloc de contenu.
- `<blockquote>` : permet de définir un bloc de citation relativement long.
- `<cite>` : permet de spécifier la source d'une citation.

## Balises de formatage

- `<u>` - Texte souligné
- `<b>` - Texte en gras
- `<strong>` - Texte important
- `<i>` - Texte en italique
- `<em>` - Mettre l'accent sur le texte (emphase)
- `<mark>` - Texte marqué (surligné)
- `<small>` - Texte plus petit
- `<del>` - Texte supprimé
- `<ins>` - Texte inséré
- `<sub>` - Texte d'indice (sous la ligne de base et généralement plus petit)
- `<sup>` - Texte en exposant

## Liste non-ordonnée

- `<ul>` `</ul>` : : indique que c’est une liste non ordonnée
- `<li>` `</li>`: définit les différents élements de la liste

Liste ordonnée

- `<ol>` `</ol>` : indique que c’est une liste ordonnée
- `<li>` `</li>`: définit les différents élements de la liste

## Ancre

Lien vers une page Web
```
    <a href="https://www.google.ca">Google</a>
```


## Tableau

Tableau se construit ligne par ligne.

Chaque ligne doit contenir la liste des cellules.

- `<table>` `</table>` : indique que ce qui suit est un tableau
- `<caption>` `</caption>` : indique titre du tableau
- `<tr>` `</tr>` : indique que c’est une ligne du tableau
- `<th>` `</th>` : indique que c’est l’en-tête du tableau (1ère ligne du tableau)
- `<td>` `</td>` : indique que c’est une cellule/case du tableau

## Tableau structuré

Division en 3 parties: en-tête, corps et pied du tableau.

- `<thead>` `</thead>` : indique que c’est l’en-tête du tableau
- `<tbody>` `</tbody>`: : indique que c’est le corps tableau
- `<tfoot>` `</tfoot>` : indique que c’est le pied du tableau
- `<th>` `</th>` : indique que c’est l’en-tête du tableau (1ère ligne du tableau)
- `<td>` `</td>` : indique que c’est une cellule/case du tableau

## Fusion de cellules

- **Fusion Horizontale** : fusion de colonnes en utilisant **colspan**
- **Fusion Verticale**; fusion de lignes en utilisant **rowspan**

## Images

`<img>` : indique que l’on va insérer une image

* **src** : indique source de l’image (i.e. où se trouve l’image)
* **alt** : indique un texte alternatif pour décrire l’image
* **height** et **width** : hauteur et largeur de l’image


## Légende de média

- La balise `<figure>` permet d'associer un élément **(image, vidéo, diagramme, etc.)**
- La légende de la figure utilise la balise `<figcaption>`

## Audio

`<audio>` `</audio>` : indique l’insertion d’un élément de type audio

Attribut de base :

* **src** : source de l’audio
* **controls** : indique qu’il faut la barre de défilement + boutons Lecture & Pause
* **loop** : indique de jouer le morceau audio en boucle
* **autoplay** : indique que le morceau audio démarrera dès le début

## Vidéo

`<video>` `</video>` : indique l’insertion d’un élément de type video

Attribut de base : 

* **src** : source de la vidéo
* **poster** : indique l’image à afficher en attendant que la video soit chargée
* **controls** : indique qu’il faut la barre de défilement + boutons Lecture & Pause
* **width** : indique la largeur du lecteur vidéo si l’on veut la modifier
* **height** : indique la hauteur du lecteur vidéo si l’on veut la modifier
* **loop** : indique de jouer le morceau audio en boucle
* **autoplay** : indique que le morceau audio démarrera dès le début
* **muted** : indique au navigateur de jouer la vidéo en mode silencieux
* **playsinline** : spécifie de jouer la vidéo dans son cadre d’origine

## Formulaire

Balise de base pour création d’un formulaire

`<form>` `</form> `: indique que l’on va insérer un formulaire

Attributs de base

* **method** : indique comment envoyer les informations
  * **GET** (par défaut) stock les informations du formulaire dans l'URL après le symbole ?.
  * **POST** envois les informations du formulaire dans la requête soumise à la page.
* **action** : indique l’adresse de la page ou du programme qui va traiter les informations.



## Input text

- `<input type="text">`
- `<input>` : indique que l’on va créer une zone de texte
- `<label>` `</label>` : indique le libellé de la zone de texte

Attributs pour zone de texte

- **type** : indique le type des informations saisies
- **name** : nom de la zone de texte
- **id** : identifiant de la zone de texte pour lier le label à la zone de texte
- **for** : aura la même valeur que id de la zone de texte pour lier le label
- **readonly** : champ en lecture seule
- **required** : le champ est requis
- **minlength** & maxlength : nombre limite de caractères
- **value** : valeur par défaut si l’on veut mettre une valeur initiale
- **placeholder** : explication/exemple concernant le contenu du champ

```
<div>
  <label for="pays-residence">Pays de résidence</label><br>
  <input type="text" id="pays-residence">
</div>
```


## Input submit

Génère un bouton permettant de soumettre un formulaire.

```
 
     <input type="submit" value="Soumettre">
```


## Checkbox

```
<label>
  <input type="checkbox" name="olives"> Olives </label><br>
<label>
```


Attributs pour les checkbox

- **checked** : permet de spécifier si l'option devrait être cochée ou non
- **name** : nom de la zone de texte
- **disabled** : permet d'afficher en lecture seule une boite à cochée
- **value** : valeur par défaut si l’on veut mettre une valeur initiale


## Radio

```
<label>
  <input type="radio" name="pizza" value="vege"> Végétarienne</label><br>
<label>
```


Attributs pour les Radios

- **checked** : permet de spécifier si l'option devrait être cochée ou non
- **name** : nom de la zone de texte
- **disabled** : permet d'afficher en lecture seule une boite à cochée
- **value** : valeur par défaut si l’on veut mettre une valeur initiale

## Select

```
<select>
  <option value="12:00">12h</option>
  <option value="13:00">13h</option>
  <option value="14:00">14h</option>
  <option value="15:00" disabled>15h</option>
</select>
```


Attributs pour les select

- `multiple` : permet la sélection de plusieurs options.
- `name` : nom de la zone de texte
- `disabled` : permet d'afficher en lecture seule une boite à cochée
- `value` : valeur par défaut si l’on veut mettre une valeur initiale
- `selected` : permet de spécifier si l'option devrait être sélectionnée.

## Textarea

```
<textarea cols="30" rows="5"></textarea>
```


Attributs pour les textarea

- **cols** : définit la largeur de base du textarea.
- **rows** : définit la hauteur de base du textarea.
- **type** : indique le type des informations saisies
- **name** : nom de la zone de texte
- **id** : identifiant de la zone de texte pour lier le label à la zone de texte
- **for** : aura la même valeur que id de la zone de texte pour lier le label
- **readonly** : champ en lecture seule
- **required** : le champ est requis
- **minlength & maxlength** : nombre limite de caractères
- **value** : valeur par défaut si l’on veut mettre une valeur initiale
- **placeholder** : explication/exemple concernant le contenu du champ

## Number

```
<input type="number" value="0" min="0" max="10" step="2">
```


Attributs pour les number

- **min & max**: permettent de spécifier un nombre minimal et maximal à respecter.
- **name** : nom de la zone de texte
- **disabled** : permet d'afficher en lecture seule le champ number
- **step** : définit le saut entre chaque valeur.

## Range

```
<input type="range" min="0" max="1000" step="100">
```


Attributs pour les range

- **min & max** : permettent de spécifier un nombre minimal et maximal à respecter.
- **name** : nom de la zone de texte
- **disabled** : permet d'afficher en lecture seule un widget range
- **step** : définit le saut entre chaque valeur.

## Password

```
<input type="password" value="sans-anchois">
```


## Email

```
<input type="email">
```


## Tel

```
<input type="tel" inputmode="decimal">
```

Attributs pour les number

- **inputmode="decimal"**: affichent un pavé numérique agrémenté des symboles +*# sur les appareils mobile afin de simplifier la vie de l'usager.
- **disabled** : permet d'afficher en lecture seule le champ de téléphone

## Search

```
<input type="search" value="Hawaienne">
```


## Date

```
<input type="date" min="1980-01-01" max="2000-01-01">
```


Attributs pour les dates

- **min & max** : permettent de spécifier une date minimale et maximale à respecter.
- **disabled** : permet d'afficher en lecture seule un widget range

## Time

```
<input type="time" min="09:00" max="17:00">
```


Attributs pour time

- **min & max** : permettent de spécifier une heure minimale et maximale à respecter.
- **disabled** : permet d'afficher en lecture seule l'outil de sélection d'heure.

## Color

```
<input type="color" value="#00c774">
```


Attributs pour color

- **name** : nom de référence lorsque le formulaire est soumis.
- **value** : code de la couleur par défaut.
- **disabled** :permet d'afficher en lecture seule l'outil de sélection de couleur.
