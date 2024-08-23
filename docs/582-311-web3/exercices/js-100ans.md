---
tags:
  - Exercice
---

[:material-arrow-u-left-top: Cours 1](../cours01.md){.breadcrumb}

# La guerre de Cent Ans

![](../assets/images/cent-ans.jpg)

Demander à l’utilisateur la question : « Combien d’années a duré la guerre de 100 ans ? », puis valider sa réponse.

Affichez un message indiquant si la réponse est correcte ou incorrecte.

## Réponse

Date de début : 1337 (c'est pas une blague[^leet]!)

Date de fin : 1453

[^leet]: https://fr.wikipedia.org/wiki/Leet_speak

> La Guerre de Cent Ans a duré 116 ans, de 1337 à 1453. Malgré son nom, elle ne s’est pas limitée à 100 ans. Ce conflit a opposé principalement le royaume de France et le royaume d’Angleterre, avec des phases de trêve et de combats intermittents.

## Résultat attendu

<iframe height="300" style="width: 100%;" scrolling="no" title="100 ans Réponse" src="https://codepen.io/tim-momo/embed/jOjxqVL/afcf4b025a192a853d143a63cf298ca7?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/jOjxqVL/afcf4b025a192a853d143a63cf298ca7">
  100 ans Réponse</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Instructions

- [ ] Créer un fichier `index.html` et un fichier `script.js`.
- [ ] Associez le script à javascript au html avec la balise `<script>`.
- [ ] Ajouter un champ pour l'année : `<input type="number" id="answerInput" placeholder="Entrez votre réponse">`.
- [ ] Ajouter un bouton de validation : `<button id="submitAnswer">Valider</button>`.
- [ ] Ajouter un conteneur pour le résultat : `<p id="resultMessage"></p>`.
- [ ] Dans `script.js`, ajouter le JavaScript nécessaire afin de valider la réponse de l'utilisateur. Si l'année est juste, écrire « Bravo, c'est la bonne réponse ! » dans le conteneur du résultat. Sinon écrire « Non, ce n'est pas ==ANNÉE_ENTRÉE== ans. ».
- [ ] Présenter le code au prof :nerd:.