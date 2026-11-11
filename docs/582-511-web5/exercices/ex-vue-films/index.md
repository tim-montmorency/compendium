# :simple-vuedotjs:  Exercice : Collection de films

<div class="class-content-link">
  <img src="../../assets/IA-interdite.png">
  <span>Utilisation de l'IA interdite pour cette activité. Faites chauffer vos méninges!</span>
</div>

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. Une petite app pour votre collection de films : on choisit une **année de sortie** avec deux boutons, et les films de cette année s'allument.
2. Notions : les méthodes, la **classe dynamique** `:class`, puis la boucle **`v-for`** sur un tableau de données. C'est le cœur de votre navigateur de chapitres : un élément actif dans une liste.
3. **Seul, environ 50 minutes.** Gardez les pages [Classe dynamique](../../vue/classe-dynamique.md) et [Boucle `v-for`](../../vue/boucle.md) ouvertes à côté.

</div>

## Obtenir votre dépôt (5 min)

**[Accepter l'exercice dans Classroom 50](https://classroom50.org/apprendre-avec-mariemi/w5/assignments/exerc-vue-collection-de-films/accept?k=rthn1z36){ :target="_blank" }**

1. Ouvrez le lien ci-dessus, connectez-vous avec **Sign in with GitHub**, puis acceptez l'exercice.
2. **Clonez** votre dépôt et ouvrez-le dans VS Code.
3. Ouvrez `index.html` avec **Live Server**.

Vue est chargé par CDN dans `index.html`, **avant** `js/script.js`. Le CSS est déjà fait, y compris les classes `.selectedYear`, `.disabled` et `.strikeout` dont vous aurez besoin.

## Aperçu du résultat

<video class="w-100" src="assets/apercu-films.webm" autoplay muted loop playsinline aria-label="Aperçu du résultat : les boutons moins et plus changent l'année, et les films de cette année passent en orange et en gras"></video>

## Partie A : l'année et les boutons (15 min)

- [ ] Créez l'app Vue dans `js/script.js`, et montez-la sur `#app`.
- [ ] Créez une donnée `year`, à `2022`. Affichez-la entre les boutons **-** et **+**, à la place du `2022` écrit dans le HTML.
- [ ] Créez deux méthodes, `previousYear()` et `nextYear()`, qui enlèvent ou ajoutent 1 à l'année. Appelez-les au clic sur les boutons.

??? quote "Ce que vous devriez voir"
    Un clic sur **+** ou **-** change l'année affichée. Les films, eux, ne changent pas encore.

- [ ] *Commit* (`Partie A : l'année change avec les boutons`), puis *push*.

## Partie B : la classe dynamique (15 min)

- [ ] Sur chaque `<li>`, ajoutez la classe `selectedYear` **seulement si** l'année du film est égale à `year`.
- [ ] Gardez la classe `static-class` déjà là : un élément peut avoir une classe fixe (`class`) et une classe dynamique (`:class`) en même temps.

??? tip "Indice : la syntaxe objet"
    `:class="{ nomDeLaClasse: condition }"` : la classe est ajoutée quand la condition est vraie. Ici, la condition compare l'année écrite du film (`2019`, `2022`...) à la donnée `year`. Voir [Classe dynamique](../../vue/classe-dynamique.md).

??? quote "Ce que vous devriez voir"
    À `2022`, deux films passent en orange et en gras. Changez d'année : d'autres s'allument.

- [ ] *Commit* (`Partie B : les films de l'année choisie ressortent`), puis *push*.

Vous avez écrit la même condition 12 fois, en changeant l'année à la main. Ça fonctionne, mais imaginez 200 films. C'est le problème que règle la partie C.

## Partie C : les films dans un tableau, avec `v-for` (15 min)

- [ ] Dans `data()`, ajoutez le tableau `movies` ci-dessous.
- [ ] Dans `index.html`, effacez les 12 `<li>`, et remplacez-les par **un seul** `<li>`, répété avec `v-for` pour chaque film du tableau.
- [ ] Affichez le titre et l'année de chaque film avec `{{ }}`, et remettez la classe dynamique : cette fois, elle compare `movie.year` à `year`.
- [ ] N'oubliez pas `:key` : un identifiant unique par film (le titre fera l'affaire).

```js
movies: [
  { title: "Parasite", year: 2019, viewed: true },
  { title: "Joker", year: 2019, viewed: true },
  { title: "La déesse des mouches à feu", year: 2020, viewed: false },
  { title: "The Power of the Dog", year: 2021, viewed: false },
  { title: "Don't Look Up", year: 2021, viewed: false },
  { title: "Ligne de fuite", year: 2022, viewed: false },
  { title: "Guillermo del Toro's Pinocchio", year: 2022, viewed: true },
  { title: "Simple comme Sylvain", year: 2023, viewed: false },
  { title: "Le plongeur", year: 2023, viewed: false },
  { title: "Dune: Part Two", year: 2024, viewed: true },
  { title: "The Substance", year: 2024, viewed: false },
  { title: "Perfect Days", year: 2024, viewed: false },
],
```

??? quote "Ce que vous devriez voir"
    **Exactement le même résultat** qu'à la partie B, avec un seul `<li>` dans le HTML. Ajoutez un film au tableau : il apparaît tout seul.

- [ ] *Commit* (`Partie C : les films viennent d'un tableau, avec v-for`), puis *push*.

## Vérifiez votre travail { #verifier }

Testez votre page **sans regarder le code**, sauf quand l'énoncé le demande. Chaque énoncé doit être vrai **avant votre dernier *push***. Si un point coince, relisez la partie concernée et ses indices.

- [ ] **Partie A** : au chargement, l'année affichée est **2022**. Les boutons **-** et **+** la changent d'une année à la fois.
- [ ] **Partie B** : à 2022, deux films sont en orange et en gras. Je change d'année : ce sont les films de **cette** année qui ressortent, et seulement eux.
- [ ] **Partie B** : les pastilles jaunes devant les films sont toujours là (la classe `static-class`).
- [ ] **Partie C** : dans `index.html`, il n'y a **qu'un seul** `<li>`.
- [ ] **Partie C** : j'ajoute un film au tableau `movies` : il apparaît dans la liste, et il s'allume quand je choisis son année.
- [ ] La console n'affiche **aucune erreur**, et mes *commits* sont sur github.com.

## Défis (facultatifs)

- [ ] **Le bouton + bloqué** : on ne peut pas dépasser l'année courante. Créez une donnée `currentYear`, puis, dans `nextYear()`, n'augmentez l'année que si elle est plus petite. Ajoutez la classe `disabled` au bouton **+** quand on y est.
- [ ] **Les films déjà vus** : barrez-les avec la classe `strikeout`, grâce à la clé `viewed` du tableau. Un même `:class` peut contenir deux classes, séparées par une virgule.
- [ ] *Commit* (`Défis : bouton bloqué et films vus`), puis *push*.

??? tip "Indice : l'année courante"
    `new Date().getFullYear()` retourne l'année en cours.

!!! warning "Pour remettre : un *push* sur `main`"
    Votre exercice est **remis** seulement quand vos *commits* sont **poussés** (*push*) sur la branche `main` de votre dépôt Classroom 50. Un *commit* qui reste sur votre poste, je ne le vois pas.

[:simple-vuedotjs: L'exercice suivant : Cheese Kanye says](../ex-vue-kanye/index.md){ .md-button .md-button--primary }

<small>Exercice adapté de l'exercice « Collection de films » (parties 1 et 2) du cours Programmation interactive (582-518), TIM Montmorency.</small>
