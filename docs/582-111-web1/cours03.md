# Cours 3

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

### Anglicismes

Les anglicismes sont doivent être pris en charge de façon sémantique. Pour ce faire, il faut ajouter un attribut.

<iframe height="300" style="width: 100%;" scrolling="no" title="Web 1 - Formatage" src="https://codepen.io/tim-momo/embed/vEOwpGm?default-tab=html%2Cresult&editable=true&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/vEOwpGm">
  Web 1 - Formatage</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Balises génériques

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

## Caractères spéciaux

`&nbsp;`

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
[`<div>``<span>`](https://tim-montmorency.com/compendium/582-111%E2%80%93web1/html/div-span.html)
<br>
<br>
## Exercice sur Div & Span

![thumb (1)](https://github.com/user-attachments/assets/4be7a22f-5ea6-4f46-8184-4102ada109c3)
[Utiliser correctement les balises `<div>` et `<span>`](https://tim-montmorency.com/compendium/582-111%E2%80%93web1/exercices/div-span.html)
<br>
<br>
## Formatage HTML

![icon (7)](https://github.com/user-attachments/assets/5e5d4c55-7acd-4871-b764-2efb43bf93bc)
[`<u>`, `<b>`, `<strong>`, `<em>`, `<i>`, etc.](https://tim-montmorency.com/compendium/582-111%E2%80%93web1/html/formatage-html.html)
<br>
<br>
## Ancre

![ancres](https://github.com/user-attachments/assets/c1ecd875-0ca1-4c4d-9d47-0d509c4cd961)
[balise `<a>`](https://tim-montmorency.com/compendium/582-111%E2%80%93web1/html/ancres.html)
<br>
<br>
## Exercice sur les balises

![thumb (2)](https://github.com/user-attachments/assets/3ea787bd-95a3-44a4-9c80-56832e6424d8)
[Pour cet exercice, vous devez recréer un site web.](https://tim-montmorency.com/compendium/582-111%E2%80%93web1/exercices/ancres.html)
<br>
<br>

## Chemins d'accès

![icon (6)](https://github.com/user-attachments/assets/8103bdab-9823-44ce-a855-08d7b99b37fb)
[Absolue, relatif](https://tim-montmorency.com/compendium/582-111%E2%80%93web1/autres/chemins.html)
<br>
<br>

## Image

![icon (8)](https://github.com/user-attachments/assets/5c8dd778-425c-4051-86fb-8149c4e5b598)
[La balise `<img>` permet d'afficher une image](https://tim-montmorency.com/compendium/582-111%E2%80%93web1/html/image.html)

## Formats d'image

![icon (9)](https://github.com/user-attachments/assets/91b72dff-b528-4f55-8ef9-696286a3048e)
[gif, jpeg, png, webp](https://tim-montmorency.com/compendium/582-111%E2%80%93web1/autres/format-image.html)

## Vectoriel vs Matriciel

![icon (10)](https://github.com/user-attachments/assets/343eb750-1f49-4727-93fc-8857f7c67762)
[matrices & vecteurs](https://tim-montmorency.com/compendium/582-111%E2%80%93web1/autres/vectoriel-vs-matriciel.html)
