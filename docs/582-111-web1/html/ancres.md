# Ancre

La balise d'ancre `<a>` permet de connecter différentes ressources entre elles. Elle est généralement utilisée afin d'établir un lien vers un autre site web ou encore vers une section d'une page, mais elle peut aussi déclencher l'ouverture d'une fenêtre de courriel, un appel téléphonique, le téléchargement de fichiers, etc.

L'attribut href est l'attribut principal de la balise `<a>`. Il permet de définir la cible d'une ancre. Voyons cibles les plus courantes.

## Vers une page

Pour faire un lien vers une page, il suffit de spécifier l'url du site en question dans le href.

Par exemple:

```
<a href="https://site.com">Site</a>
```

## Target
Il est possible de choisir si un lien devrait s'ouvrir dans l'onglet courant du navigateur ou encore dans un onglet distinct. Pour ce faire, il suffit d'ajouter l'attribut target à une ancre.

- _self (par défaut) ouvre dans le même onglet.
- _blank ouvre dans un nouvel onglet.

**Par exemple:**

```
<a href="https://site.com" target="_blank">Site</a>
```

## ID

L'identifiant unique ou ID permet de cibler un élément en fonction de son id.

Exemple:
```
<div id="section1">
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
     Distinctio, quisquam. Fuga corrupti obcaecati veniam accusantium
     dolor at ipsum eos cumque aliquid commodi.Sit nemo dignissimos
     laborum officia architecto ea beatae.
  </p>
</div>
```

## Vers une section de page

Pour pointer vers une section de la page courante, il suffit dans le href de faire référence à l'id de l'élément désiré et de le préfixer avec un #.

Par exemple, pour qu'une ancre pointe vers l'élément ayant l'id section2, il est possible de faire:

```
<a href="#section2">Lien vers la section 2</a>

<div id="section1">Section 1</div>
<div id="section2">Section 2</div>
<div id="section3">Section 3</div>
```

Pour pointer vers une section d'une autre page, il suffit d'ajouter l'URL de la page en question avant le #.

Par exemple:

```
<a href="https://site.com#section2">Site</a>
```

!!! warning

    Seul un id peut-être utilisé pour pointer vers un élément, car les autres sélecteurs peuvent faire référence à plusieurs éléments, tandis que celui-ci est unique.

## Scroll-behavior

Par défaut, lorsque l'on pointe vers une section de page, le navigateur saute directement au id ciblé. Cependant, il est possible de faire en sorte que la page défile vers le id en question en spécifiant la propriété scroll-behavior: smooth à l'élément HTML.

Par exemple, cliquez sur les boutons 1 et 2 pour sauter d'une section à l'autre et refaite le, mais en changeant la valeur de scroll-behavior.
<iframe height="300" style="width: 100%;" scrolling="no" title="Scroll-behavior: smooth" src="https://codepen.io/tim-momo/embed/MWzpajX?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/MWzpajX">
  Scroll-behavior: smooth</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Composer un courriel ✉️

L'attribut href peut aussi contenir une adresse courriel préfixée par: mailto: afin d'indiquer au service de courrielleur de l'usager (Outlook, Gmail, etc.) de générer un nouveau message prêt à être rédigé.

Par exemple:

```
<a href="mailto:exemple@gmail.com">Écrivez-moi!</a>
```

## Démarrer un appel 📞

L'attribut href peut aussi contenir un numéro de téléphone préfixée par: tel: afin d'indiquer que le système d'exploitation devrait devrait déclencher un appel au numéro mentionné si cette fonctionnalité est supportée par celui-ci.

Par exemple:

```
<a href="tel:5551234567">Appelez-moi!</a>
```

!!! note

    Surtout pratique pour les appareils mobiles 📱


## Exercices

<div class="grid grid-auto" markdown>

![Capture d’écran, le 2024-09-06 à 11 06 28](https://github.com/user-attachments/assets/1bdcd3c7-0c1c-4bab-bacf-7510542e5c91)



  **Exercice sur les balises**<br>
  _Pour cet exercice, vous devez recréer un site web._<br>
  [Exercice sur les ancres](https://tim-montmorency.com/compendium/582-111%E2%80%93web1/exercices/ancres.html)
</div>


