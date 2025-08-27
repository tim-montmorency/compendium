# Cours 3

[STOP]

PRÉVOIR UNE ÉVALUATION FORMATIVE

Retour sur l'inspecteur : 

!!! example "Essayons ensemble l'inspecteur 🕵"
    1. Ouvrir la page Web créée plus tôt
    1. Ouvrir l'inspecteur et observer le contenu de l'onglet « Éléments »
    1. Trouver le moyen de changer le contenu du HTML


## Validateur W3C

![](./assets/images/W3C®_Icon.png)

Vous vous souvenez du validateur W3C ? Il y a mieux ;) Pourquoi pas avoir l'équivalent directement dans vscode !

Par exemple, [Webhint](https://marketplace.visualstudio.com/items?itemName=webhint.vscode-webhint), [HTMLHint](https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint) ou [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) font _grosso modo_ la même chose que le validateur du W3C.

## Formatage du texte HTML

| Balise | Description | Exemple |
|--------|-------------|---------|
| `<strong>` | Texte en **gras** avec importance | `<strong>Attention!</strong>` |
| `<em>` | Texte en *italique* avec emphase | `<em>Mise en valeur</em>` |
| `<u>` | Texte souligné (peu utilisé en HTML5) | `<u>Texte souligné</u>` |

Il existe aussi les balises `<b>` et `<i>`, qui produisent un effet visuel similaire, mais sans signification sémantique. Il est donc préférable d’utiliser `<strong>` et `<em>` lorsque le contenu a une importance ou une emphase réelle.

<iframe height="300" style="width: 100%;" scrolling="no" title="Web 1 - Formatage et anglicismes" src="https://codepen.io/tim-momo/embed/myJYXKY?default-tab=html%2Cresult&editable=true&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/myJYXKY">
  Web 1 - Formatage et anglicismes</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Balises sémantiques

| Balise      | Rôle |
| ----------- | ---- |
| `<header>`  | En-tête du site ou d’une section |
| `<nav>`     | Zone de navigation |
| `<main>`    | Contenu principal unique |
| `<section>` | Regroupement logique de contenu |
| `<article>` | Contenu autonome (ex. : blogue) |
| `<aside>`   | Contenu secondaire (infos connexes, pub) |
| `<footer>`  | Pied de page |

DEMO: faire un site avec ca.

Sémantique

![logo-2582748_640](https://github.com/user-attachments/assets/41d98834-b49e-453d-857e-830ac6c4dbaa)

[header, footer, nav, main, section, aside](https://tim-montmorency.com/compendium/582-111-web1/html/semantique.md)


Mes premières balises

![balises](https://github.com/user-attachments/assets/dc60993a-4390-4485-a20d-a008d2f3551e)

[Exercice sur les balises sémantiques HTML](./exercices/mes_premieres_balises.md)

### Anglicismes

Les anglicismes sont doivent être pris en charge de façon sémantique. Pour ce faire, il faut ajouter un attribut.

<iframe height="300" style="width: 100%;" scrolling="no" title="Web 1 - Formatage" src="https://codepen.io/tim-momo/embed/vEOwpGm?default-tab=html%2Cresult&editable=true&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/vEOwpGm">
  Web 1 - Formatage</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Balises génériques (non sémantiques)

| Balise | Type | Usage typique |
|--------|------|---------------|
| `<div>` | bloc | Conteneur de sections (ex. : regroupement de paragraphes, structure d’une page) |
| `<span>` | inline | Mise en forme ou manipulation de mots précis dans une ligne de texte |

```html
<div class="carte">
  <h2>Produit</h2>
  <p>Prix : <span class="prix">29.99$</span></p>
</div>
```

## Attributs

https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Global_attributes

<mark>@todo</mark>

Classe

Id (un seul par page)

data-machintruc

## Liens hypertexte

La syntaxe

```html
<a href="https://www.google.com">Visiter Google</a>
```

### Types de liens

| Type | Exemple | Description |
|------|---------|-------------|
| **Externe** | `<a href="https://example.com">Lien externe</a>` | Va vers un autre site |
| **Interne** | `<a href="page2.html">Page interne</a>` | Va vers une autre page du site |
| **Ancre** | `<a href="#section2">Aller à Section 2</a>` | Saute à une section de la même page |

### Créer une ancre

```html
<a href="#contact">Aller à Contact</a>

<!-- Plus bas dans la page -->
<h2 id="contact">Section Contact</h2>
```

### Et si on imbriquait ?

Faut-il mettre un `<strong>` **dans** un `<a>`, ou l’inverse ?

Les deux sont valides, parce que ce sont toutes les deux des balises **inline** (on verra ce que ça veut dire un peu plus tard). Alors, comment choisir ?

```html
<p>
    J'ai écrit un article sur le film 
    <a href="https://www.themoviedb.org/movie/71883"><strong>Redline</strong></a>.
</p>
<!-- 
  Signification sémantique :
  Le lien est important. Clique dessus, c’est crucial !
-->
```

```html
<p>
    J'ai écrit un article sur le film 
    <strong><a href="https://www.themoviedb.org/movie/71883">Redline</a></strong>.
</p>
<!-- 
  Signification sémantique :
  Le film Redline est important. Ah, et en passant, c’est aussi un lien.
-->
```

!!! info Indentation

    Dès qu'on commence à imbriquer, il faut penser à indenter!


Components Atomic : https://blog.kamathrohan.com/atomic-design-methodology-for-building-design-systems-f912cf714f53

## Chemins d’accès absolus vs relatifs

| Type | Exemple | Description |
|------|---------|-------------|
| **Absolu** | `https://site.com/images/logo.png` | Lien complet vers un fichier sur le Web |
| **Relatif** | `./images/logo.png` | Lien par rapport à l’emplacement actuel |

### Variants de chemins relatifs

| Chemin | Signification |
|--------|---------------|
| `./` | Dossier actuel |
| `../` | Remonte d’un dossier |
| `/` | Racine du site (si serveur configuré) |

### Exemple
```
index.html
pages/
  contact.html
images/
  logo.png
```

Dans `contact.html`, pour viser `logo.png` :
```html
<img src="../images/logo.png" alt="Logo">
```



[STOP]

Vérification des devoirs Arborescence et 1ère balises<br><br>
![icon](https://github.com/user-attachments/assets/6541edcc-ae55-4317-893e-0ccbe9cce778)
![balises](https://github.com/user-attachments/assets/931683cd-8075-4cfc-8dec-33438a68706a)

<br>
<br>

## Les Balises Div et Span 

![icon (4)](https://github.com/user-attachments/assets/326c8ec2-4914-4f88-bda6-d43892f5a72d)
[`<div>``<span>`](./html/div-span.md)
<br>
<br>
## Exercice sur Div & Span

![thumb (1)](https://github.com/user-attachments/assets/4be7a22f-5ea6-4f46-8184-4102ada109c3)
[Utiliser correctement les balises `<div>` et `<span>`](./exercices/div-span.md)
<br>
<br>
## Formatage HTML

![icon (7)](https://github.com/user-attachments/assets/5e5d4c55-7acd-4871-b764-2efb43bf93bc)
[`<u>`, `<b>`, `<strong>`, `<em>`, `<i>`, etc.](./html/formatage-html.md)
<br>
<br>
## Ancre

![ancres](https://github.com/user-attachments/assets/c1ecd875-0ca1-4c4d-9d47-0d509c4cd961)
[balise `<a>`](./html/ancres.md)
<br>
<br>
## Exercice sur les balises

![thumb (2)](https://github.com/user-attachments/assets/3ea787bd-95a3-44a4-9c80-56832e6424d8)
[Pour cet exercice, vous devez recréer un site web.](./exercices/ancres.md)
<br>
<br>

## Chemins d'accès

![icon (6)](https://github.com/user-attachments/assets/8103bdab-9823-44ce-a855-08d7b99b37fb)
[Absolue, relatif](./autres/chemins.md)
<br>
<br>

## Image

![icon (8)](https://github.com/user-attachments/assets/5c8dd778-425c-4051-86fb-8149c4e5b598)
[La balise `<img>` permet d'afficher une image](./html/image.md)

## Formats d'image

![icon (9)](https://github.com/user-attachments/assets/91b72dff-b528-4f55-8ef9-696286a3048e)
[gif, jpeg, png, webp](./autres/format-image.md)

## Vectoriel vs Matriciel

![icon (10)](https://github.com/user-attachments/assets/343eb750-1f49-4727-93fc-8857f7c67762)
[matrices & vecteurs](./autres/vectoriel-vs-matriciel.md)
