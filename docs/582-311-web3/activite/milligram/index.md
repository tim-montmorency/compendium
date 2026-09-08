---
tags:
  - Exercice
---

# Mon premier _framework_

![](./banner.gif){.w-100}

*[CDN]: Content Delivery Network

L'objectif ici est simplement d'installer un cadriciel (_framework_) et d'en faire usage.

<!-- [^frameworkcss]: [List of awesome CSS frameworks](https://github.com/troxler/awesome-css-frameworks) -->

## Consignes

- [ ] [Accepter le devoir Classroom 50](https://classroom50.org/tim-w3/web-3/assignments/milligram/accept)
- [ ] Cloner le dépôt avec GitHub Desktop
- [ ] Ouvrir le dossier cloné dans VSCode

---

- [ ] Ouvrir `digger.html` dans le navigateur
- [ ] Dans `digger.html`, ajouter ces **3 lignes** dans le `<head>` pour installer le framework **Milligram**&nbsp;: 
  ```html
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic">

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/milligram@1.4.1/dist/milligram.min.css">
  ```    
- [ ] Sauvegarder, puis recharger le navigateur

  !!! note "Observation"

      Les liens utilisés pour installer le framework proviennent de ce qu'on appelle un CDN.

      Un CDN, c'est un réseau d'ordinateurs situés un peu partout dans le monde qui distribuent les mêmes fichiers. Ça peut servir à tester rapidement un framework par exemple 😜 C'est pratique parce qu'on n'a pas besoin de télécharger manuellement quoi que ce soit, c'est directement en ligne.

      ![](../../assets/images/cdn-map.jpg){data-zoom-image .w-50}

### Usage du cadriciel

Le pouvoir d'un framework CSS réside dans ses **classes CSS** préfaites. 

À chaque étape, observez le résultat.

- [ ] Ajouter la classe `container` sur le `<main>`

<!-- Ça centre le contenu de la page et limite sa largeur. -->

- [ ] Ajouter la classe `row` à l'enfant direct de `<main>`, puis ajouter la classe `column` aux enfants de `.row`

<!-- `row` + `column` placent les div en **colonnes** (flexbox) -->

- [ ] Ajouter la classe `button` sur le lien `<a>`

<!-- , et `button` transforme le lien en **bouton**. -->

- [ ] Ajouter une deuxième classe (`row-center`) à la div `row`.

 <!-- pour **centrer** les colonnes verticalement. -->

### Réflexion

Vous devriez avoir ce résultat : ![](./digger-result.png){.w-10 data-zoom-image}. L'idée ici est simplement de comprendre le concept d'un Framework CSS afin d'avoir une base de comparaison pour la suite. 

Milligram spécifiquement n'est pas important à connaître. Vous pouvez d'ailleurs l'oublier pour toujours.

![](./thanos-thanos-snap.gif){.w-50}

### Finale

- [ ] Dans GitHub Desktop, effectuer un `commit`
- [ ] Pousser votre commit (`push`)

Vous venez de remettre votre premier devoir Classroom50 💅