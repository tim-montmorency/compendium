# **Exercice** :simple-vuedotjs:  Révision : la chasse aux bogues

<div class="class-content-link">
  <img src="../../assets/IA-interdite.png">
  <span>Utilisation de l'IA interdite pour cette activité. Faites chauffer vos méninges!</span>
</div>

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. Le code de l'[exercice Collection de films](index.md), avec **5 bogues** cachés dedans. À vous de les trouver, et d'expliquer pourquoi chacun brise la page.
2. **En duo, 15 minutes.** Idéalement, une personne qui a fait l'exercice avec une personne qui ne l'a pas fait.
3. Ce sont les erreurs que vous allez faire dans votre composant Vue. Les reconnaître maintenant, c'est gagner du temps à l'atelier, et à la défense.

</div>

## Les fichiers { #fichiers }

[📥 Télécharger les fichiers](chasse-aux-bogues.zip){ .md-button }

Dézippez le dossier, mais **ne l'ouvrez pas tout de suite avec Live Server** : on commence par lire.

## Étape 1 : lire, sans exécuter (5 min) { #lire }

- [ ] Lisez le code ci-dessous, ensemble, **sans lancer la page**.
- [ ] Pour chaque bogue que vous soupçonnez, notez le **fichier**, la **ligne** et ce qui, selon vous, va se passer à l'écran.

On cherche à **prédire** : un bon programmeur sait ce que son code va faire avant de l'exécuter.

```html title="index.html" linenums="1"
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Collection de films : chasse aux bogues</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <main id="app">
    <h1>Ma collection de films</h1>

    <h2>Quelle année de sortie?</h2>
    <div class="year-picker">
      <button class="btn" @click="previousYear">-</button>
      <span class="year">{{ year }}</span>
      <button class="btn" @click="nextYear">+</button>
    </div>

    <hr>

    <ul>
      <li v-for="movie in movies"
          class="static-class"
          :class="{ selectedYear: movie.year === year }">
        {{ movies.title }} ({{ movie.year }})
      </li>
    </ul>
  </main>

  <script src="js/script.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vue@3.5.13/dist/vue.global.js"></script>
</body>
</html>
```

```js title="js/script.js" linenums="1"
const app = Vue.createApp({
  data() {
    return {
      year: "2022",
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
    };
  },

  methods: {
    previousYear() {
      this.year--;
    },

    nextYear() {
      year++;
    },
  },
});

app.mount("app");
```

## Étape 2 : vérifier, et corriger un bogue à la fois (8 min) { #corriger }

- [ ] Ouvrez maintenant `index.html` avec **Live Server**, la **console** ouverte.
- [ ] Corrigez **un seul bogue à la fois**, puis rechargez. Pour chacun, notez :
  - *le symptôme* : ce qu'on voit à l'écran ou dans la console;
  - *la correction*;
  - *pourquoi* ça brisait la page, en une phrase.
- [ ] Testez les boutons **-** et **+**, et regardez quels films s'allument.

??? tip "Indice 1 : par où commencer?"
    Un des bogues empêche **tout le reste** de fonctionner : la page affiche les `{{ }}` tels quels. Commencez par l'erreur rouge dans la console, et lisez son numéro de ligne.

??? tip "Indice 2 : les `{{ }}` sont encore là, mais l'erreur rouge a disparu"
    Lisez l'avertissement jaune `[Vue warn]` : Vue ne trouve pas sa zone.

??? tip "Indice 3 : au chargement, aucun film ne s'allume"
    Cliquez sur **-**. Puis sur **+**. Que remarquez-vous? Quel est le **type** de la donnée au départ?

??? tip "Indice 4 : il manque les titres"
    Lisez lentement ce qui est entre les `{{ }}` du `<li>`, lettre par lettre.

??? tip "Indice 5 : le bouton + ne fait rien"
    Regardez la console **au moment du clic**. Dans une méthode, comment rejoint-on une donnée?

??? quote "Ce que vous devriez voir à la fin"
    À 2022, deux films en orange et en gras, avec leur titre. Les boutons **-** et **+** changent l'année, et ce sont les films de cette année qui s'allument. Aucune erreur dans la console.

**Défi : le 6e bogue, qui ne se voit pas.** Tout fonctionne, et pourtant il manque quelque chose dans le `<li>`. Aucun symptôme à l'écran ni dans la console : c'est la page [Boucle `v-for`](../../vue/boucle.md) qui vous le dira.

## Étape 3 : le pont vers votre composant (2 min) { #pont }

Le navigateur de chapitres, c'est **cet exercice**, avec des chapitres à la place des films. Trouvez la correspondance de chaque ligne :

| Collection de films | Navigateur de chapitres |
|---|---|
| le tableau `movies` | ? |
| la donnée `year` | ? |
| la classe `selectedYear` | ? |
| `movie.year === year` | ? |
| `@click="nextYear"` | ? |

On met les réponses en commun avant la démo.
