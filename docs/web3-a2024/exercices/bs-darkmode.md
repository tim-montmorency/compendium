---
tags:
  - Exercice
---

[:material-arrow-u-left-top: Cours 3](../cours03.md){.breadcrumb}

# Dark Vador

En cliquant sur une case à cocher, on doit changer le thème du site.

Important : l'attribut Bootstrap `data-bs-theme="dark"` est appliqué à la balise <html> au chargement de la page.

## Résultat attendu

<iframe height="300" style="width: 100%;" scrolling="no" title="Darkmode - Exercice Solution" src="https://codepen.io/tim-momo/embed/vYqvYVM/624137dc399fe3dbed82d363eff85447?default-tab=&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/vYqvYVM/624137dc399fe3dbed82d363eff85447">
  Darkmode - Exercice Solution</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Instructions

- [ ] Faire un fork du codepen : [https://codepen.io/tim-momo/pen/zYVyYJp](https://codepen.io/tim-momo/pen/zYVyYJp)
- [ ] Ajoutez un événement (`addEventListener()`) sur la case à cocher.
- [ ] Dans la fonction de l'événement, modifiez la valeur de l'attribut `data-bs-theme` de la balise `<html>`, soit la valeur `dark` pour le mode sombre ou `light` pour le mode clair.

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
