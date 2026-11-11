# :simple-vuedotjs:  Exercice : Cheese Kanye says

<div class="class-content-link">
  <img src="../../assets/IA-interdite.png">
  <span>Utilisation de l'IA interdite pour cette activité. Faites chauffer vos méninges!</span>
</div>

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. Un bouton qui affiche une citation de Kanye West, **reçue d'une API externe** : votre premier `fetch()` vers un autre site, lancé par une méthode Vue.
2. Notions : une méthode `async`, `fetch()` et `await`, une donnée mise à jour par la réponse, la gestion de la panne avec `try` / `catch`, puis `mounted()`.
3. **Seul, environ 45 minutes.** C'est la préparation du cours du vendredi 13 novembre : votre moment dataviz utilisera la même recette. Gardez [Récap JS : `async` / `await`](../../js/recap-js.md#async) ouvert à côté.

</div>

## Obtenir votre dépôt (5 min)

**[Accepter l'exercice dans Classroom 50](https://classroom50.org/apprendre-avec-mariemi/w5/assignments/exerc-vue-cheese-kanye-says/accept?k=rthn1z36){ :target="_blank" }**

1. Ouvrez le lien ci-dessus, connectez-vous avec **Sign in with GitHub**, puis acceptez l'exercice.
2. **Clonez** votre dépôt et ouvrez-le dans VS Code.
3. Ouvrez `index.html` avec **Live Server**.

L'app Vue est déjà créée dans `js/script.js`, avec une donnée `quote`. Le CSS est déjà fait.

## Aperçu du résultat

<video class="w-100" src="assets/apercu-kanye.webm" autoplay muted loop playsinline aria-label="Aperçu du résultat : à chaque clic sur le bouton, une nouvelle citation s'affiche dans la bulle"></video>

## Partie A : une méthode au clic (10 min)

- [ ] Créez une méthode `getQuote()`, appelée au clic sur le bouton **Nouvelle citation fromagée**.
- [ ] Pour l'instant, la méthode remplace la citation par ce texte : « La plus grande douleur de ma vie, c'est que je ne pourrai jamais me voir en spectacle. »

??? quote "Ce que vous devriez voir"
    Au clic, le texte de la bulle change. Un deuxième clic ne change plus rien : c'est toujours le même texte. La partie B règle ça.

- [ ] *Commit* (`Partie A : la méthode getQuote au clic`), puis *push*.

## Partie B : la citation vient de l'API (15 min)

L'API [Kanye.rest](https://kanye.rest/){ :target="_blank" } renvoie une citation au hasard à chaque requête.

- [ ] **D'abord, testez l'adresse** dans le navigateur : collez `https://api.kanye.rest/` dans la barre d'adresse. Que contient la réponse? Quel est le **chemin** vers le texte de la citation?
- [ ] Dans `getQuote()`, effacez le texte fixe. Faites plutôt un `fetch()` vers `https://api.kanye.rest/`, puis mettez la citation reçue dans la donnée `quote`.

??? tip "Indice : une méthode `async`"
    Pour utiliser `await` dans une méthode, la méthode doit être `async` :

    ```js
    methods: {
      async getQuote() {
        const response = await fetch("...");
        const data = await response.json();
        // ... puis la donnée : this.quote = ...
      },
    },
    ```

    C'est le même `fetch()` que pour votre `data.json`, avec une adresse sur un autre site.

??? quote "Ce que vous devriez voir"
    Chaque clic affiche une **nouvelle** citation, en anglais. Dans l'onglet **Réseau** des outils de développement, une requête vers `api.kanye.rest` apparaît à chaque clic.

- [ ] *Commit* (`Partie B : la citation vient de l'API`), puis *push*.

## Partie C : prévoir la panne (10 min)

Une API externe peut être lente, changer ou tomber en panne. Votre page doit rester utilisable.

- [ ] Placez le `fetch()` dans un `try` / `catch`.
- [ ] Si la réponse n'est pas correcte (`response.ok` est faux), lancez une erreur.
- [ ] Dans le `catch`, affichez l'erreur dans la console, et un message à la place de la citation : « Kanye ne répond pas. Réessayez plus tard. »

??? tip "Pour tester la panne"
    Changez l'adresse pour une adresse qui n'existe pas (`https://api.kanye.rest/oups`), cliquez : votre message doit s'afficher. Remettez ensuite la bonne adresse.

- [ ] *Commit* (`Partie C : un message si l'API ne répond pas`), puis *push*.

## Vérifiez votre travail { #verifier }

Testez votre page **sans regarder le code**, sauf quand l'énoncé le demande. Chaque énoncé doit être vrai **avant votre dernier *push***. Si un point coince, relisez la partie concernée et ses indices.

- [ ] **Partie A** : la méthode `getQuote()` est appelée au clic sur le bouton.
- [ ] **Partie B** : chaque clic affiche une **nouvelle** citation, et une requête vers `api.kanye.rest` apparaît dans l'onglet **Réseau**.
- [ ] **Partie B** : le texte fixe de la partie A n'est plus dans `js/script.js`.
- [ ] **Partie C** : avec une adresse erronée, la bulle affiche « Kanye ne répond pas. Réessayez plus tard. », l'erreur est dans la console, et la page n'est pas cassée.
- [ ] **Partie C** : j'ai remis la bonne adresse.
- [ ] La console n'affiche **aucune erreur** quand l'API répond, et mes *commits* sont sur github.com.

## Défi (facultatif)

- [ ] Au chargement de la page, la bulle affiche « Texte de citation ». Faites plutôt afficher **une vraie citation dès l'ouverture**, sans clic. Indice : `mounted()`, la fonction que Vue appelle une fois, quand l'app est branchée sur la page.
- [ ] *Commit* (`Défi : une citation dès l'ouverture`), puis *push*.

!!! warning "Pour remettre : un *push* sur `main`"
    Votre exercice est **remis** seulement quand vos *commits* sont **poussés** (*push*) sur la branche `main` de votre dépôt Classroom 50. Un *commit* qui reste sur votre poste, je ne le vois pas.

<small>Exercice adapté de l'exercice du même nom du cours Programmation interactive (582-518), TIM Montmorency. Citations : [Kanye.rest](https://kanye.rest/){ :target="_blank" }.</small>
