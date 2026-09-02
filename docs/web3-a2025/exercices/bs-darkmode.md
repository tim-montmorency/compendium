---
tags:
  - Exercice
---

# 🌑 Dark Vador

Le but de cet exercice est de **basculer le thème du site entre clair et sombre** en cliquant sur une case à cocher (_checkbox_).

Au chargement de la page, la balise `<html>` possède déjà l’attribut `data-bs-theme="dark"`.

## Résultat attendu

<iframe height="300" style="width: 100%;" scrolling="no" title="Darkmode - Exercice Solution" src="https://codepen.io/tim-momo/embed/vYqvYVM/624137dc399fe3dbed82d363eff85447?default-tab=&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/vYqvYVM/624137dc399fe3dbed82d363eff85447">
  Darkmode - Exercice Solution</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Indices

Cherchez `addEventListener`, `querySelector`, `getAttribute` et `setAttribute` dans l'[aide mémoire](https://jfcmontmorency.github.io/aide-memoire/).

Qui sait, ça pourrait peut-être vous être utile 😜

## Instructions

- [ ] Ouvrez le CodePen de départ : <https://codepen.io/tim-momo/pen/zYVyYJp>
- [ ] Cliquez sur _Fork_ afin de créer votre propre copie du projet
- [ ] En JavaScript, sélectionnez la case à cocher avec `querySelector`.  
- [ ] Ajoutez un événement `click` dessus avec `addEventListener`.  
- [ ] Dans la fonction de l’événement, changez l’attribut `data-bs-theme` sur la balise `<html>` :  
  - `dark` : pour activer le mode sombre  
  - `light` : pour revenir au mode clair  

[STOP]

## Code de base

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

<input type="checkbox" id="dark-mode-switch" checked />
```

```css
html:not([data-bs-theme="dark"]) body {
  background: url("https://assets.codepen.io/9367036/anakin.jpg") center center;
  background-size: cover;
}
html[data-bs-theme="dark"] body {
  background: url("https://assets.codepen.io/9367036/vador.jpg") center center;
  background-size: cover;
}
input {
  transform: scale(4);
}
```

```js
document.addEventListener("DOMContentLoaded", () => {
  // Ajoutez votre code ici
});
```
