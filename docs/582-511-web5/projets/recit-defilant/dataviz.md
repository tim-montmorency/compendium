# :material-chart-bar:  Le récit défilant : le moment dataviz

<!-- MM : vérifier chaque lien avant le cours. -->

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. Votre récit contient au moins un **moment dataviz** : des **données réelles** qui apparaissent au bon moment et font avancer l'histoire.
2. Une bonne dataviz de récit, c'est **une question, une donnée, une forme simple, une révélation au défilement, une chute**.
3. L'API (*Application Programming Interface*) se choisit et se teste au cours du **ven. 13 nov.** : [choisir et tester votre API](#api). Elle doit fonctionner **à la bêta** (ven. 20 nov.).

</div>

## Ce qui fait un bon moment dataviz

Une dataviz de récit n'est pas un tableau de bord. Elle ne montre pas *toutes* les données : elle en montre **une**, au moment où le lecteur en a besoin.

| Ingrédient | La question à se poser | Exemple |
|---|---|---|
| **Une question** | Qu'est-ce que le lecteur se demande à ce moment du récit? | « Combien de fois la Terre a-t-elle tremblé cette semaine? » |
| **Une donnée** | Quelle donnée réelle y répond? | Les séismes des 7 derniers jours |
| **Une forme simple** | Quelle forme se comprend en 2 secondes? | Un chiffre géant, puis un point par séisme |
| **Une révélation** | Qu'est-ce qui bouge, et quand? | Le chiffre compte jusqu'à sa valeur quand on l'atteint |
| **Une chute** | Quelle phrase dit ce que la donnée raconte? | « Le plus fort : magnitude 6,8 » |

## Des formes simples qui marchent

Pas besoin de librairie de graphiques : ces formes se font en HTML, en CSS et avec un peu de JavaScript.

- **Le chiffre géant** : une seule valeur, très grande, qui compte jusqu'à sa valeur finale.
- **Une unité par donnée** : un point, une icône ou un carré par élément. Le nombre devient visible.
- **Les barres** : comparer quelques valeurs. Elles poussent quand on les atteint. Attention : c'est la forme la plus courante, donc la moins mémorable (voir plus bas).
- **L'échelle** : comparer une valeur à quelque chose de connu (la hauteur d'un immeuble, la taille d'un terrain de soccer).
- **La ligne du temps** : une valeur qui change avec les années, révélée au fil du défilement.

## Visez plus loin que le graphique à barres { #plus-loin }

Un graphique à barres ou en pointe de tarte, c'est la forme **par défaut** : il informe, mais il ne raconte rien, et il ressemble à tous les rapports. Dans un récit défilant, la donnée doit **prendre la forme de votre histoire**.

Le graphique à barres n'est pas interdit, mais c'est **le minimum**. La [créativité compte](index.md#creativite) aussi pour votre moment dataviz.

| Idée | Le principe | Par exemple |
|---|---|---|
| **La donnée change le décor** | La donnée ne s'affiche pas : elle **modifie la scène**. | La météo réelle d'un lieu change le ciel de votre illustration : pluie, neige, nuages. S'il pleut aujourd'hui dans la forêt du Chaperon, il pleut dans le chapitre. |
| **Des unités à l'image de votre sujet** | Une icône **de votre univers** par donnée, plutôt qu'un point ou une barre. | Une goutte par litre, un arbre par hectare, une silhouette par personne. |
| **La donnée pilote une animation** | La valeur règle la **vitesse**, la **taille** ou l'**intensité** d'une animation. | La magnitude du plus gros séisme fait trembler l'écran plus ou moins fort; la vitesse du vent pousse les nuages. |
| **L'échelle au défilement** | Le défilement **devient la mesure**. | Comme The Deep Sea : la profondeur, une distance, une durée qu'on parcourt en défilant. |
| **Le lieu, dans votre style** | Les données placées sur une illustration ou une carte **dessinée dans votre style**. | Les séismes de la semaine sur un globe dessiné à la main. |
| **Le temps réel** | La page change selon **le moment de la visite**. | L'heure du coucher du soleil règle la lumière de la page. |

!!! tip "Le test du rapport annuel"
    Si votre dataviz pourrait se retrouver telle quelle dans le rapport annuel d'une entreprise, poussez-la plus loin. Elle doit avoir **le style de votre récit** : votre palette, votre typographie, vos images.

Une seule idée, bien réalisée, suffit. Et aucune de ces idées n'a besoin d'une librairie de graphiques.

## Des exemples à décortiquer

Ouvrez-les sur un ordinateur, défilez lentement, et repérez les 5 ingrédients.

<div class="grid" markdown>

<div class="card" markdown>
:material-waves: __The Deep Sea, Neal Agarwal__

---

On descend au fond de l'océan en défilant, avec la profondeur affichée en continu. **Le défilement lui-même devient la donnée.** À observer : à quel moment apparaissent les repères qui nous font réaliser la profondeur.

[:octicons-arrow-right-24: neal.fun/deep-sea](https://neal.fun/deep-sea/){ .stretched-link :target="_blank" }
</div>

<div class="card" markdown>
:material-cash-multiple: __Wealth, Shown to Scale__

---

La fortune des milliardaires, à l'échelle : un pixel vaut 1 000 dollars, et on défile, longtemps. À observer : comment une **comparaison** rend un chiffre impossible à imaginer enfin concret.

[:octicons-arrow-right-24: eattherichtextformat.github.io](https://eattherichtextformat.github.io/1-pixel-wealth/){ .stretched-link :target="_blank" }
</div>

<div class="card" markdown>
:material-school-outline: __A Visual Introduction to Machine Learning, R2D3__

---

Un classique primé : des centaines de points qui se déplacent et se trient au fil du défilement. À observer : **les mêmes données** changent de forme à chaque étape de l'explication.

[:octicons-arrow-right-24: narrative-flow.github.io](https://narrative-flow.github.io/exploratory-study-2/){ .stretched-link :target="_blank" }
</div>

<div class="card" markdown>
:material-microphone-variant: __The Largest Vocabulary in Hip Hop, The Pudding__

---

Des rappeurs classés selon le nombre de mots différents dans leurs textes. À observer : un graphique qui **se construit étape par étape**, avec une phrase pour chaque étape.

[:octicons-arrow-right-24: pudding.cool](https://pudding.cool/projects/vocabulary/){ .stretched-link :target="_blank" }
</div>

<div class="card" markdown>
:material-account-group-outline: __The Fallen of World War II__

---

Un documentaire interactif sur les victimes de la Seconde Guerre mondiale, où les données sont racontées comme un film. À observer : **une unité par personne**, et l'effet des chiffres qui s'empilent.

[:octicons-arrow-right-24: fallen.io](https://www.fallen.io/ww2/){ .stretched-link :target="_blank" }
</div>

<div class="card" markdown>
:material-earth: __Our World in Data__

---

Des milliers de graphiques sur la santé, l'environnement, la société. **Une mine d'idées et de données** pour votre thème. À observer : le titre de chaque graphique est une phrase qui dit ce qu'il montre.

[:octicons-arrow-right-24: ourworldindata.org](https://ourworldindata.org/){ .stretched-link :target="_blank" }
</div>

</div>

Vous trouverez d'autres exemples, dont The Pudding et Pixel Space, dans la page [exemples et inspirations](inspirations.md).

## La démo : la Terre bouge { #demo }

Une petite démo avec **deux moments dataviz** et des données réelles, chargées au moment où on les atteint :

1. **Un chiffre géant, puis une unité par donnée** : le nombre de séismes de la semaine (API USGS), puis un point par séisme, dont la taille suit la magnitude.
2. **Des barres qui poussent** : la température maximale des 7 prochains jours à Montréal (API Open-Meteo).

Le code est commenté dans `js/dataviz.js`. Il suit toujours les mêmes 4 étapes : **attendre** que le moment approche (`IntersectionObserver`), **charger** les données (`fetch`), **construire** la forme, puis **révéler** avec une classe CSS.

[:material-chart-bar: Voir la démo](demo-dataviz/index.html){ .md-button .md-button--primary :target="_blank" }

!!! info "Pas besoin de tout comprendre aujourd'hui"
    Regardez d'abord **ce que fait** la démo. Le comment est expliqué plus bas, étape par étape : [choisir et tester votre API](#api).

!!! tip "Pour explorer, si vous êtes curieux (facultatif)"

    - [**Public APIs**](https://github.com/public-apis/public-apis#index){ :target="_blank" } : une grande liste d'API gratuites, classées par thème. Visez les colonnes **Auth : `No`** (sans clé d'identification : ni `apiKey`, ni `OAuth`) et **CORS : `Yes`** (utilisable depuis le navigateur; `Unknown` est permis, mais testez avant de choisir). L'index des catégories est loin dans la page : [les liens directs par catégorie](#api-choisir).
    - [**Données Québec**](https://www.donneesquebec.ca/){ :target="_blank" } et les [**données ouvertes de Montréal**](https://donnees.montreal.ca/){ :target="_blank" } : des données d'ici, en français. Plusieurs jeux de données sont des fichiers à télécharger plutôt qu'une API : on en reparlera au cours.
    - Quelques API sans clé, à tester le 13 nov. : [Open-Meteo](https://open-meteo.com/){ :target="_blank" } (météo, climat), [REST Countries](https://restcountries.com/){ :target="_blank" } (pays), [Cleveland Museum of Art](https://openaccess-api.clevelandart.org/){ :target="_blank" } (œuvres d'art, avec images), [USGS](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php){ :target="_blank" } (séismes en temps réel), [PokéAPI](https://pokeapi.co/){ :target="_blank" }, [Open Library](https://openlibrary.org/developers/api){ :target="_blank" } (livres), [Sunrise-Sunset](https://sunrise-sunset.org/api){ :target="_blank" } (lever et coucher du soleil).

## Choisir et tester votre API { #api }

Une **API**, c'est une adresse web qui renvoie des données en JSON au lieu d'une page. Vous connaissez déjà `fetch()` : vous l'utilisez pour `data.json`. Interroger une API, c'est le même `fetch()`, avec une adresse sur un autre site.

Ce qui est nouveau, c'est seulement : **choisir** l'API, **lire** sa réponse, et **prévoir** qu'elle tombe en panne.

### 1. Choisir une API { #api-choisir }

Une bonne API pour votre récit coche ces 4 cases :

- **sans clé d'identification** : pas d'inscription, pas de jeton (*token*). Dans Public APIs, c'est la colonne **Auth** : visez `No`. Évitez `apiKey` (une clé à demander et à cacher) et `OAuth` (une connexion avec un compte);
- **CORS : `Yes`** (ou `Unknown`) : utilisable depuis le navigateur. Sans CORS, le navigateur bloque la réponse. `Unknown` veut dire que personne ne l'a vérifié : l'API fonctionne peut-être. **Testez-la avant de la choisir** ([tester le CORS](#api-cors)) : si la console affiche *blocked by CORS policy*, choisissez-en une autre;
- elle renvoie du **JSON**;
- elle contient **votre donnée**, celle qui répond à la question de votre moment dataviz.

Des pistes : la liste [Public APIs](https://github.com/public-apis/public-apis#index){ :target="_blank" }, et les API sans clé de l'encadré *Pour explorer*, [sous la démo](#demo).

!!! tip "Public APIs, par catégorie"
    La liste est classée par thème, mais l'index des catégories est loin dans la page, après la présentation du projet. Allez-y directement :

    [Animaux](https://github.com/public-apis/public-apis#animals){ :target="_blank" } · [Art et design](https://github.com/public-apis/public-apis#art--design){ :target="_blank" } · [Livres](https://github.com/public-apis/public-apis#books){ :target="_blank" } · [Environnement](https://github.com/public-apis/public-apis#environment){ :target="_blank" } · [Nourriture](https://github.com/public-apis/public-apis#food--drink){ :target="_blank" } · [Jeux et BD](https://github.com/public-apis/public-apis#games--comics){ :target="_blank" } · [Géolocalisation](https://github.com/public-apis/public-apis#geocoding){ :target="_blank" } · [Santé](https://github.com/public-apis/public-apis#health){ :target="_blank" } · [Musique](https://github.com/public-apis/public-apis#music){ :target="_blank" } · [Données ouvertes](https://github.com/public-apis/public-apis#open-data){ :target="_blank" } · [Sciences et maths](https://github.com/public-apis/public-apis#science--math){ :target="_blank" } · [Sports](https://github.com/public-apis/public-apis#sports--fitness){ :target="_blank" } · [Transport](https://github.com/public-apis/public-apis#transportation){ :target="_blank" } · [Météo](https://github.com/public-apis/public-apis#weather){ :target="_blank" }

    Dans chaque catégorie, un tableau : regardez les colonnes **Auth** (`No`) et **CORS** (`Yes`, ou `Unknown` à tester).

!!! tip "Pas d'API pour votre donnée?"
    Un jeu de données ouvert (Données Québec, Montréal, Statistique Canada) est souvent un fichier CSV à télécharger, pas une API. Vous pouvez le convertir en JSON et le mettre dans votre dépôt, comme au portfolio. Mais le `fetch()` vers une **API externe** reste exigé : ajoutez alors un petit élément « vivant » (la météo, l'heure du coucher du soleil) ailleurs dans le récit.

### 2. Tester l'adresse dans le navigateur { #api-tester }

Avant d'écrire une ligne de code, **collez l'adresse dans la barre d'adresse** du navigateur. Firefox affiche le JSON joliment, avec des triangles pour plier et déplier. Dans Chrome, cochez *Impression élégante*.

Par exemple, la température maximale des 7 prochains jours à Montréal : [l'adresse Open-Meteo](https://api.open-meteo.com/v1/forecast?latitude=45.5&longitude=-73.57&daily=temperature_2m_max&timezone=auto){ :target="_blank" }.

La plupart des API se **règlent dans l'adresse**, après le `?` : `latitude=45.5`, `daily=temperature_2m_max`. Changez une valeur, rechargez : vous voyez tout de suite ce que ça change. Plusieurs API, comme Open-Meteo, ont même un **générateur d'adresse** dans leur documentation.

#### Tester le CORS { #api-cors }

La barre d'adresse **ne vérifie pas le CORS** : une API peut s'afficher très bien là, et être bloquée dans votre page. Le test se fait **depuis une page web** :

1. Ouvrez n'importe quelle page web, par exemple ces notes de cours.
2. Ouvrez la console (++f12++, onglet **Console**).
3. Collez ces lignes, avec l'adresse de votre API, puis ++enter++ :

    ```js
    const url = "https://openaccess-api.clevelandart.org/api/artworks/";
    await fetch(url + "?limit=1").then((r) => r.json());
    ```

4. Lisez le résultat :
    - **un objet s'affiche** : le CORS passe, l'API est utilisable;
    - **un message rouge** avec *blocked by CORS policy* : le navigateur bloque la réponse. Choisissez une autre API.

!!! tip "Rien ne s'affiche?"
    Vérifiez le menu des niveaux, en haut à droite de la console : **Infos** doit être coché. Sinon, la console cache les `console.log()`.

!!! example "Un vrai cas : deux musées"
    L'API du **Cleveland Museum of Art** passe le test. Celle de l'**Art Institute of Chicago** répond dans la barre d'adresse, mais la console affiche une erreur CORS : elle est inutilisable dans votre page.

### 3. Trouver le chemin vers votre donnée { #api-chemin }

La réponse contient souvent beaucoup plus que ce qu'il vous faut. Cherchez **le chemin** vers votre valeur, comme dans un objet JS :

```text
data                        l'objet reçu
  .daily                    la propriété « daily »
    .temperature_2m_max     un tableau de 7 températures
```

En code : `data.daily.temperature_2m_max`. Un tableau d'objets? `data.features[0].properties.mag`.

[:material-code-json: Trouver une donnée dans un JSON complexe : la méthode, et un outil pour tester vos chemins](../../js/json-chemin.md){ .md-button }

!!! tip "Copier le chemin dans Chrome"
    Outils de développement, onglet **Réseau** (*Network*), filtre **Fetch/XHR**. Cliquez sur la requête, onglet **Aperçu** (*Preview*), puis clic droit sur la valeur : **Copier le chemin de la propriété**.

### 4. Le `fetch()`, dans le fichier de votre chapitre { #api-fetch }

Le moment dataviz appartient à un chapitre : son code va dans **le fichier de ce chapitre**.

```js
// js/chapitres/ch-05.js
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast"
  + "?latitude=45.5&longitude=-73.57"
  + "&daily=temperature_2m_max&timezone=auto";

async function loadWeather() {
  const response = await fetch(WEATHER_URL);
  if (!response.ok) {
    throw new Error("Météo introuvable (" + response.status + ")");
  }
  const data = await response.json();
  console.log(data); // d'abord, regardez ce qui arrive
  return data.daily.temperature_2m_max; // 7 valeurs
}
```

C'est le même `fetch()` que pour `data.json` : voir [Récap JS : `async` / `await`](../../js/recap-js.md#async).

### 5. Charger au bon moment { #api-moment }

Pas au chargement de la page : **quand le visiteur approche du chapitre**. C'est le rôle d'[IntersectionObserver](../../js/intersection-observer.md), avec un `rootMargin` qui le déclenche un peu avant, pour que les données soient là à temps.

### 6. Prévoir la panne { #api-panne }

Une API externe peut être lente, changer, ou tomber en panne. **Le jour de votre présentation aussi.** Votre récit doit rester lisible si elle ne répond pas :

```js
async function showWeather(section) {
  let temperatures;
  try {
    temperatures = await loadWeather();
  } catch (error) {
    console.error(error);
    // Valeurs de secours : le récit continue
    temperatures = [4, 6, 3, 2, 5, 7, 4];
    section.querySelector(".source").textContent =
      "Données hors ligne : relevé du 13 novembre";
  }
  // ... construire la forme avec temperatures
}
```

Gardez des **valeurs de secours** réelles (copiées de la réponse un jour où l'API fonctionnait), et dites-le au lecteur.

### 7. Documenter votre choix { #api-documenter }

Dans la section 6 de votre `CAHIER-DE-CHARGES.md`, ajoutez :

- **l'API** : son nom et le lien vers sa documentation;
- **l'adresse** que vous interrogez;
- **le chemin** de la valeur utilisée (ex. `data.daily.temperature_2m_max`).

Puis *commit* (`Cahier : ajoute l'API de la dataviz`) et *push*.

## Pour votre cahier de charges

Dans la **section 6** du gabarit, décrivez votre idée :

- **dans quel chapitre** arrive le moment dataviz;
- **la question** à laquelle il répond, et **le genre de données** que vous aimeriez montrer;
- **la forme** que vous imaginez : une donnée qui change le décor, des unités à l'image de votre sujet, une donnée qui pilote une animation, une échelle au défilement… (voir [plus haut](#plus-loin));
- **la chute** : ce que la donnée raconte dans votre histoire.

Ajoutez un cadre pour ce moment dans votre storyboard. L'API se choisit au cours du **ven. 13 nov.** : voir [Choisir et tester votre API](#api).
