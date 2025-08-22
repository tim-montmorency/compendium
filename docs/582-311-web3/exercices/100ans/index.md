---
tags:
  - Exercice
---

# La guerre de Cent Ans

![](./cent-ans.jpg){.w-100}

On appelle « Guerre de Cent Ans » un gros conflit médiéval entre la 🇫🇷 France et 🏴󠁧󠁢󠁥󠁮󠁧󠁿 l'Angleterre. _Spoiler alert_ : non, ça n'a pas duré exactement 100 ans 😅

L'objectif de cet exercice est de créer une mini page interactive qui pose la question :

> « Combien d’années a duré la guerre de 100 ans ? »

Le but est d'afficher si la réponse de l'utilisateur est bonne ou pas.

## Données historiques

- Date de début : 1337 (😱 l'année du *leet*[^leet] !)  
- Date de fin : 1453  

<!-- Durée réelle : 116 ans -->

[^leet]: <https://fr.wikipedia.org/wiki/Leet_speak>

### Fun facts

![](./3ca4f428a7e76ad741ba8e920a615549.jpg){.w-50}

Pendant la période, il y a eu de longues pauses : certaines années, personne se battait vraiment. La Peste noire (~1347 à ~1351) a ralenti un peu les hostilités mettons. Il y avait un peu moins de soldats vivants 🙃.

![](./Joan-of-Arc-Coronation-Charles-VII-Reims-1854.webp){.w-50}

La fameuse Jeanne d'Arc apparaît vers 1429. Son intervention est hyper courte (même pas un an), mais elle a vraiment boosté le moral des français, ça leur a permis de gagner la guerre.

## Résultat attendu

<iframe height="300" style="width: 100%;" scrolling="no" title="100 ans Réponse" src="https://codepen.io/tim-momo/embed/jOjxqVL/afcf4b025a192a853d143a63cf298ca7?default-tab=result&theme-id=50173" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tim-momo/pen/jOjxqVL/afcf4b025a192a853d143a63cf298ca7">
  100 ans Réponse</a> by TIM Montmorency (<a href="https://codepen.io/tim-momo">@tim-momo</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Consignes

- [ ] Créer un fichier `index.html` et un fichier `script.js`
- [ ] Associez le script au html avec la balise `<script>`
- [ ] Ajouter un champ pour l'année : `<input type="number" id="answerInput" placeholder="Entrez votre réponse">`
- [ ] Ajouter un bouton de validation : `<button id="submitAnswer">Valider</button>`
- [ ] Ajouter un conteneur pour le résultat : `<p id="resultMessage"></p>`. (pour afficher le message)
- [ ] Dans `script.js`, ajouter le JavaScript nécessaire afin de valider la réponse de l'utilisateur. Si l'année est juste, écris « Bravo, c'est la bonne réponse ! » dans le conteneur `resultMessage`. Sinon écrire « Non, ce n'est pas ==ANNÉE_ENTRÉE== ans. »
- [ ] Présenter le code au prof :nerd:
