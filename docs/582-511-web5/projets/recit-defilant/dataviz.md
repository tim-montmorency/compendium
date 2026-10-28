# Le récit défilant : le moment dataviz

<!-- MM : vérifier chaque lien avant le cours. -->

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. Votre récit contient au moins un **moment dataviz** : des **données réelles** qui apparaissent au bon moment et font avancer l'histoire.
2. Une bonne dataviz de récit, c'est **une question, une donnée, une forme simple, une révélation au défilement, une chute**.
3. Pour le cahier de charges, décrivez seulement **l'idée** (section 6). L'API se choisit et se teste au cours du **mer. 11 nov.**

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

## La démo : la Terre bouge

Une petite démo avec **deux moments dataviz** et des données réelles, chargées au moment où on les atteint :

1. **Un chiffre géant, puis une unité par donnée** : le nombre de séismes de la semaine (API USGS), puis un point par séisme, dont la taille suit la magnitude.
2. **Des barres qui poussent** : la température maximale des 7 prochains jours à Montréal (API Open-Meteo).

Le code est commenté dans `js/dataviz.js`. Il suit toujours les mêmes 4 étapes : **attendre** que le moment approche (`IntersectionObserver`), **charger** les données (`fetch`), **construire** la forme, puis **révéler** avec une classe CSS.

[:material-chart-bar: Voir la démo](demo-dataviz/index.html){ .md-button .md-button--primary :target="_blank" }

!!! info "Pas besoin de tout comprendre aujourd'hui"
    `fetch` vers une API externe et `IntersectionObserver` seront vus en classe en novembre. Aujourd'hui, regardez **ce que fait** la démo, pas encore comment.

!!! tip "Pour explorer, si vous êtes curieux (facultatif)"

    - [**Public APIs**](https://github.com/public-apis/public-apis){ :target="_blank" } : une grande liste d'API gratuites, classées par thème. Visez les colonnes **Auth : `No`** (sans clé) et **CORS : `Yes`** (utilisable depuis le navigateur).
    - [**Données Québec**](https://www.donneesquebec.ca/){ :target="_blank" } et les [**données ouvertes de Montréal**](https://donnees.montreal.ca/){ :target="_blank" } : des données d'ici, en français. Plusieurs jeux de données sont des fichiers à télécharger plutôt qu'une API : on en reparlera au cours.
    - Quelques API sans clé, à tester le 11 nov. : [Open-Meteo](https://open-meteo.com/){ :target="_blank" } (météo, climat), [REST Countries](https://restcountries.com/){ :target="_blank" } (pays), [Art Institute of Chicago](https://api.artic.edu/docs/){ :target="_blank" } (œuvres d'art), [USGS](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php){ :target="_blank" } (séismes en temps réel), [PokéAPI](https://pokeapi.co/){ :target="_blank" }, [Open Library](https://openlibrary.org/developers/api){ :target="_blank" } (livres), [Sunrise-Sunset](https://sunrise-sunset.org/api){ :target="_blank" } (lever et coucher du soleil).

## Pour votre cahier de charges

Dans la **section 6** du gabarit, décrivez votre idée :

- **dans quel chapitre** arrive le moment dataviz;
- **la question** à laquelle il répond, et **le genre de données** que vous aimeriez montrer;
- **la forme** que vous imaginez : une donnée qui change le décor, des unités à l'image de votre sujet, une donnée qui pilote une animation, une échelle au défilement… (voir [plus haut](#plus-loin));
- **la chute** : ce que la donnée raconte dans votre histoire.

Ajoutez un cadre pour ce moment dans votre storyboard. L'API se choisit au cours du **mer. 11 nov.** : des pistes pour explorer sont dans le [cahier de charges](cahier-de-charges.md#le-moment-dataviz).
