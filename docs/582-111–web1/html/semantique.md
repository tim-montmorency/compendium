# Sémantique

Lors de la création d'une page, plusieurs balises HTML sont utilisées. Certaines de ces balises ont une valeur sémantique, tandis que d'autres non. On dit d'une balise qu'elle a une valeur sémantique lorsqu'elle permet de mieux comprendre son contenu ou encore son contexte.

Par exemple, les balises `<div>` et **<span>** sont des balises non sémantiques. En les apercevant, il est impossible de deviner la nature de leur contenu ou encore leur rôle dans la page. Cependant, si une balise `<header>` est utilisée à la place d'une balise `<div>`, il devient soudainement plus évident que l'intention derrière cette balise est de regrouper les éléments constituant un entête.

## Pourquoi?

### Bonification des fonctionnalités

Une bonne sémantique permet d'améliorer l'expérience de ses usagers de plusieurs façons.

Par exemple, certaines personnes ont recours à un assistant vocal **(Siri, Alexa, L'assistant Google, etc.)** leur permettant de se faire narrer le contenu des pages sur lesquelles ils naviguent alors qu'ils s'adonnent à d'autres tâches **(cuisine, conduite, ménage, etc.)**. D'autres, atteints d'une déficience visuelle, utilisent pour leur part un lecteur d'écran **(Jaws, VoiceOver, eSpeak, etc.)** afin de leur permettre de naviguer de façon auditive le web 🔊.

Imaginons un instant que nous sommes l'une de ces personnes et que nous consultons tous les matins **LaPresse.ca**📰. Heureusement pour nous, les assistants vocaux et lecteurs d'écran reconnaissent les balises `<header>` et nous offrent de les sauter. Cette option serait impossible si une balise `<div>` était utilisée. Il faudrait donc écouter en entier la narration de l'entête de La Presse à chaque fois que nous consultons un article 😩.

### Performance sur les moteurs de recherche

Une sémantique adéquate permet aux différents moteurs de recherche **(Google, Bing, Yahoo, etc.)** de mieux comprendre et d'analyser le contenu d'une page afin de mieux l'indexer.

Par exemple, il est possible de modifier l'apparence d'un texte dans un `<div>` avec du CSS afin de l'afficher en plus gros que le texte régulier. Bien que cette approche permette aux lecteurs de comprendre qu'il s'agit d'un titre, il n'en va pas de même pour les moteurs de recherche qui ne seront pas à même de faire cette nuance. Parcontre, si une balise `<h1>` est utilisée à la place d'une balise `<div>`, il devient soudainement plus évident pour ces moteurs que cet extrait de texte devrait être utilisé pour présenter cette page dans un résultat de recherche.

### Simplification du développement

Une bonne sémantique permet de simplifier le développement pour soi et pour les individus qui pourraient être amenés à interagir avec notre code. Il est plus simple de repérer des ouverture et fermeture de balises lorsquelles correspondent à des éléments tangibles dans une page.

Par exemple, si une dizaine de balises se ferment une à la suite de l'autre, il peut-être ardu au premier regard de déterminer laquelle correspond à la fin de l'entête d'un site si toutes ces balises sont des `</div>`. Cependant, si dans le lot une fermeture de balise **</header>** est utilisée, il devient soudainement évident où l'entête se termine.

![semantic](https://github.com/user-attachments/assets/16ad9411-b0f4-45e1-ba7d-4f5b0133ab82)

<div style="text-align: center;">À gauche, sans balises sémantiques.</div>
<div style="text-align: center;">À droite, avec balises sémantiques.</div>

## Header

La balise `<header>` représente un entête dans son contexte.

Par exemple, si elle n'est pas utilisée à l'intérieur d'une autre balise ayant une valeur sémantique, elle représente l'entête du site. Elle pourrait contenir entre autres un logo, un titre, une barre de recherche, etc.

```
  <header>

    <img src="logo-du-site.png" alt="Logo">
    <h1>Nom du site</h1>

  </header>
```


Elle pourrait aussi être utilisée pour représenter l'entête d'un article incluant le nom de l'article, son auteur, sa date de publication, etc.

Bref, plusieurs possibilités existent. Il est donc possible d'avoir plusieurs balises `<header>` sur une même page. Puisqu'il s'agit d'une balise de type bloc, elle se comporte exactement comme une balise `<div>`.

[Mozilla Header](https://developer.mozilla.org/fr/docs/Web/HTML/Element/header)  [W3Schools Header](https://www.w3schools.com/tags/tag_header.asp)

## Footer

La balise `<footer>` représente le pied de page de son contexte.

Par exemple, si elle n'est pas utilisée à l'intérieur d'une autre balise aillant une valeur sémantique, elle représente le pied de page du site. Elle pourrait contenir entre autre les informations de contact, la mention de droits d'auteur, le plan du site, etc.

```
<footer>

  <div class="contact">infos@site.com</div>
  <span class="copy">©2021 Nom du site</span>

</footer>
```

Elle pourrait aussi être utilisée pour représenter le pied de page d'un article incluant des liens de partage sur les réseaux sociaux, un rappel de l'auteur, etc.

Bref, plusieurs possibilités existent. Il est donc possible d'avoir plusieurs balises `<footer>` sur une même page. Puisqu'il s'agit d'une balise de type bloc, elle se comporte exactement comme une balise `<div>`.

[Mozilla Footer](https://developer.mozilla.org/fr/docs/Web/HTML/Element/footer)  [W3Schools Footer](https://www.w3schools.com/tags/tag_footer.asp)

## Nav

Comme son nom l'indique, la balise `<nav>` représente un élément de navigation. Elle contient donc un groupe de liens permettant de naviguer sur le site ou encore sur la page actuelle.

- Un menu
- Une table des matières
- Un fil d'Ariane
- Etc.

```
<nav>
  <ul>
    <li><a href="./accueil.html">Accueil</a></li>
    <li><a href="./produits.html">Produits</a></li>
    <li><a href="./contact.html">Contact</a></li>
  </ul>
</nav>
```
Il s'agit aussi d'une balise de type bloc, elle se comporte donc exactement comme une balise `<div>`.

[Mozilla Nav](https://developer.mozilla.org/fr/docs/Web/HTML/Element/nav)  [W3Schools Nav](https://www.w3schools.com/tags/tag_nav.asp)

## Main

La balise `<main>` représente le contenu principal d'une page. Elle ne doit pas contenir les éléments qui se répètent d'une page à l'autre, par exemple l'entête et le pied de page d'un site.

Il est impossible d'avoir plus d'une balise `<main>` sur une même page, puisqu'il ne peut y avoir qu'un seul contenu principal.

```
<header>
  <h1>Nom du site</h1>
  ...
</header>

<main>
  <h2>Sujet principal du site</h2>
  <img src="sujet.png" alt="Sujet">
  ...
</main>

<footer>
  <div class="contact">infos@site.com</div>
  ...
</footer>
```

Puisqu'il s'agit d'une balise de type bloc, elle se comporte exactement comme une balise `<div>`.

!!! warning

    La balise `<main>` ne devrait pas être enfant des balises sémantique `<article>`, `<aside>`, `<footer>`, `<header>` ou `<nav>`.

    
[Mozilla Main](https://developer.mozilla.org/fr/docs/Web/HTML/Element/main)  [W3Schools Main](https://www.w3schools.com/tags/tag_main.asp)

## Section

La balise `<section>` représente un groupe d'éléments étant liés par un thème.

Par exemple, sur la page d'accueil d'un journal, plusieurs aperçus d'articles sont disponibles. Ces articles sont souvent regroupés en thèmes **(actualités, international, sports, etc.)**. Puisqu'il s'agit d'une balise de type bloc, elle se comporte exactement comme une balise `<div>`.

Une structure comme celle-ci 👇 serait donc possible.

```
<section>
  <h2>Actualités</h2>
  <a href="page-1.html">Québec se rectifie</a>
  <a href="page-2.html">Deux députés sanctionnés</a>
  ...
</section>

<section>
  <h2>Sports</h2>
  <a href="page-3.html">Le Canadien l'emporte</a>
  <a href="page-4.html">Le onze montréalais triomphe</a>
  ...
</section>
```
[Mozilla Section](https://developer.mozilla.org/fr/docs/Web/HTML/Element/section)  [W3Schools Section](https://www.w3schools.com/tags/tag_section.asp)


## Article

La balise `<article>` représente, comme son nom l'indique, un article ou encore un billet de blog. Plus précisément, une entité qui pourrait consommée seule, sans le contexte du reste du site et néanmoins faire du sens.

Par exemple, un billet sur les réseaux sociaux pourrait être un `<article>`, puisqu'il n'est pas nécessaire de lire les autres billets dans un fil d'actualité afin de le comprendre.

Une structure comme celle-ci 👇 serait donc possible.

```
<article>
  <header>
    <h2>Le Canadien l'emporte</h2>
  </header>
  <p>Le CH a remporté une victoire in extrémis hier...</p>
</article>
```
Comme les précédentes balises, il s'agit d'une balise de type bloc, elle se comporte donc exactement comme une balise `<div>`.


[Mozilla Article](https://developer.mozilla.org/fr/docs/Web/HTML/Element/article)  [W3Schools Article](https://www.w3schools.com/tags/tag_article.asp)


## Aside

La balise `<aside>` est utilisée pour contenir du contenu qui est lié de manière indirecte au contenu principal de la page. Par exemple, dans un article, le `<aside>` pourrait contenir des informations supplémentaires, des citations, des publicités, ou des liens vers des articles connexes.

### Exemple simple

Dans un article sur les chats, un `<aside>` pourrait inclure une petite section sur les meilleures marques de nourriture pour chats. Ce n'est pas le sujet principal, mais c'est lié et peut être intéressant pour le lecteur.

### En résumé

- **Contenu secondaire :** Le contenu de <aside> est lié, mais pas essentiel, au contenu principal.
- **Exemples d'utilisation :** Informations supplémentaires, liens connexes, citations, publicités.

Il s'agit aussi d'une balise de type bloc, elle se comporte donc exactement comme une balise `<div>`.

[Mozilla Aside](https://developer.mozilla.org/fr/docs/Web/HTML/Element/aside)  [W3Schools Aside](https://www.w3schools.com/tags/tag_aside.asp)

