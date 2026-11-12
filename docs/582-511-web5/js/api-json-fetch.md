# :material-api:  API, JSON et fetch : le trio du web moderne

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. Une **API** (*Application Programming Interface*), c'est la porte d'entrée d'un service : on lui envoie une requête, elle répond avec des **données**, pas avec une page.
2. Le **JSON**, c'est la langue de ces données : des paires clé-valeur, écrites comme un objet JavaScript, que tous les langages savent lire.
3. **`fetch()`**, c'est le messager du navigateur : il va chercher ces données **sans charger une nouvelle page**. Ce trio n'est pas un outil d'école : c'est la façon dont le web professionnel est construit aujourd'hui.

</div>

## Dans le web moderne professionnel { #monde-pro }

Le web moderne professionnel tourne sur ces trois morceaux. C'est même ce qui a changé la façon de construire un site dynamique.

### Avant : le serveur fabrique la page { #avant }

Pendant longtemps, un site dynamique fonctionnait comme ceci : à chaque clic, le navigateur charge une **nouvelle page**. L'adresse change dans la barre du navigateur, l'écran se vide un instant, et tout est redessiné, même ce qui n'a pas changé (l'en-tête, le menu, le pied de page). C'est le serveur qui fabrique cette page complète. Le serveur (souvent en PHP) interroge la base de données (souvent MySQL), **fabrique le HTML**, et renvoie la page au complet.

```text
Navigateur → serveur PHP → requête MySQL → page HTML complète → Navigateur
```

Le contenu et la présentation sont mêlés : le serveur décide de tout, et chaque clic charge une nouvelle page.

### Maintenant : le serveur envoie les données { #maintenant }

Aujourd'hui, le serveur expose une **API**. Il ne fabrique plus la page : il envoie seulement les **données**, en **JSON**. C'est le **frontend** (votre JavaScript, Vue, React) qui les place dans la page, avec `fetch()`. L'adresse ne change pas, la page reste là : seule la partie concernée se met à jour, dynamiquement, en temps réel, sans charger une nouvelle page.

```text
Navigateur (Vue, React...) → fetch() → API → base de données → JSON → Navigateur
```

!!! info "La base de données n'a pas disparu"
    Elle est toujours là, **derrière l'API**. Ce qui a changé, c'est **qui fabrique la page** : avant, le serveur; maintenant, le navigateur. Le frontend ne parle jamais directement à la base de données : il passe toujours par l'API, qui contrôle ce qu'on a le droit de lire ou de modifier.

### Des exemples concrets { #exemples }

- **Une application et son site, une seule API** : une banque, un service de musique ou un réseau social a une application iOS, une application Android et un site web. Les trois utilisent **la même API**, et reçoivent le même JSON.
- **Des services qu'on n'a pas à construire** : le paiement en ligne, les cartes, la météo, l'envoi de courriels ou la traduction sont offerts par des entreprises spécialisées, sous forme d'API. Un site les branche avec quelques requêtes.
- **Les CMS « sans tête »** (*headless*) : WordPress, par exemple, a une API qui renvoie ses articles en JSON. Le site peut alors être construit avec n'importe quel outil frontend, pendant que le contenu reste géré dans WordPress.
- **Les tableurs et les bases en ligne** : Airtable et Google Sheets ont une API. Le contenu est géré dans un outil simple, et le site l'affiche avec `fetch()`. C'est ce qu'ont fait ceux qui ont choisi Airtable pour leur portfolio.

### Et les métiers? { #metiers }

- Le **développeur frontend** (ou intégrateur) **consomme** des API : il va chercher les données et les met en page. C'est ce que vous faites.
- Le **développeur backend** **construit** les API : la base de données, la sécurité, les règles d'affaires.
- Entre les deux, le contrat, c'est l'API et son JSON. Savoir lire la documentation d'une API et la réponse qu'elle renvoie, c'est une compétence attendue dans presque tous les postes en web.

## Vous les utilisez déjà { #deja }

Ce trio, vous l'avez déjà mis en pratique, sans forcément le nommer :

- **dans votre portfolio** : vos projets venaient d'un fichier JSON, chargé avec `fetch()` (ou d'Airtable, par son API, pour quelques-uns);
- **dans votre récit** : à la *phase 2*{ .w5-phase .w5-phase-2 }, vos chapitres viennent de `data.json`;
- **dans votre moment dataviz** : les données viendront d'une **API externe**, sur le site de quelqu'un d'autre.

Les sections suivantes regardent chaque morceau du trio de plus près.

## L'API : la porte d'un service { #api }

Une **API** (*Application Programming Interface*) permet à deux applications de **communiquer** et d'**échanger des données**, à l'aide de requêtes HTTP.

Pensez à un restaurant. Le **menu**, c'est l'API : il dit ce qu'on peut commander, et comment. La **cuisine**, c'est le serveur : on n'y entre jamais, on ne voit pas comment les plats sont faits. On commande, et le plat arrive.

| Requête HTTP | Elle sert à... | Exemple |
|---|---|---|
| `GET` | **lire** des données | la météo de demain à Montréal |
| `POST` | **envoyer** des données | publier un commentaire |
| `PUT` | **modifier** des données | changer sa photo de profil |
| `DELETE` | **supprimer** des données | effacer un message |

Dans ce cours, vous utilisez seulement `GET` : vous **lisez** des données. C'est ce que fait `fetch()` par défaut.

**Pourquoi c'est important** : une API sépare le **frontend** (l'interface que voit l'utilisateur) du **backend** (la logique et la base de données, sur le serveur). Une application peut ainsi utiliser les services d'autres entreprises sans les reconstruire : une carte, un paiement, la météo, un fil de réseau social.

## Le JSON : la langue commune { #json }

Le **JSON** (*JavaScript Object Notation*) est un format **léger** pour écrire des données : des paires **clé-valeur**, avec la syntaxe des objets JavaScript. Il est simple à lire pour un humain, et simple à analyser pour une machine.

```json
{
  "ville": "Montréal",
  "temperature": 4,
  "previsions": [4, 6, 3, 2, 5, 7, 4]
}
```

Il est né de JavaScript, mais **presque tous les langages** le lisent et l'écrivent : Python, PHP, C#, Java. C'est ce qui en a fait la langue commune entre un serveur et un client, peu importe leur langage.

Avant lui, on utilisait surtout le **XML**, plus lourd. Les mêmes données :

```xml
<meteo>
  <ville>Montréal</ville>
  <temperature>4</temperature>
</meteo>
```

Chaque valeur est entourée de deux balises : plus long à écrire, plus long à transférer.

[:material-language-javascript: Récap JS : le JSON](recap-js.md#json){ .md-button }

## `fetch()` : le messager du navigateur { #fetch }

`fetch()` est une fonction **native** du navigateur : rien à installer. Elle envoie une requête HTTP, et récupère la réponse **de façon asynchrone** : la page continue de fonctionner pendant que la réponse arrive.

```js
async function loadWeather() {
  const response = await fetch("https://api.open-meteo.com/...");
  const data = await response.json(); // le JSON devient un objet JS
  console.log(data);
}
```

Avant `fetch()`, on utilisait `XMLHttpRequest`, la technique qu'on appelait **AJAX**. `fetch()` fait la même chose, avec un code beaucoup plus court et plus lisible, grâce aux **promesses** et à `async` / `await`.

[:material-language-javascript: Récap JS : `async` / `await`](recap-js.md#async){ .md-button }

## Trouver une donnée dans un JSON complexe { #chemin }

La réponse d'une vraie API est rarement petite. Elle contient des objets dans des tableaux dans des objets, et votre donnée est quelque part au fond. Pour l'atteindre, il faut écrire son **chemin**.

### La méthode : de l'extérieur vers l'intérieur { #chemin-methode }

À chaque niveau, regardez le **symbole** qui ouvre la valeur :

| Vous voyez... | C'est... | Vous écrivez... | Exemple |
|---|---|---|---|
| `{` | un **objet** | `.` et le nom de la clé | `data.sprites` |
| `[` | un **tableau** | `[` et la position, à partir de 0 | `data.types[0]` |
| une clé avec un tiret | un objet, mais... | des **crochets** et des guillemets | `data.sprites.other["official-artwork"]` |

Avancez **une étape à la fois**, et vérifiez chaque étape avec `console.log()` avant d'aller plus loin. Un `undefined`? L'étape précédente est la dernière qui fonctionne : relisez la réponse à cet endroit.

### Un exemple : la PokéAPI { #chemin-exemple }

Ouvrez [pokeapi.co/api/v2/pokemon/pikachu](https://pokeapi.co/api/v2/pokemon/pikachu){ :target="_blank" } dans Firefox, qui affiche le JSON avec des triangles pour plier et déplier. La réponse est longue! Voici quatre chemins, du plus simple au plus difficile :

```js
data.name
// "pikachu" : une clé, directement dans l'objet

data.sprites.front_default
// l'image : un objet (sprites), puis une clé

data.types[0].type.name
// "electric" : un tableau (types), sa 1re case, un objet, une clé

data.sprites.other["official-artwork"].front_default
// la grande image : la clé a un tiret, donc des crochets
```

!!! warning "Le piège du tiret"
    `data.sprites.other.official-artwork` ne fonctionne pas : JavaScript lit le tiret comme une **soustraction** (`official` moins `artwork`). Dès qu'une clé contient un tiret ou une espace, on passe aux crochets : `["official-artwork"]`.

### À vous : tester vos chemins { #chemin-fragment }

Choisissez un Pokémon, écrivez un chemin, et regardez chaque étape : objet, tableau ou valeur. Quand le chemin est faux, le fragment vous dit pourquoi.

<iframe src="https://tim-montmorency.com/Fragment/v/?f=w5-json-chemin&onglets=resultat,js&modifiable=1&boutons=rejouer,ouvrir" style="width:100%;height:700px;border:0" loading="lazy"></iframe>

??? question "Défi : les points de vie (*hp*) de Pikachu"
    Dans la réponse, cherchez `stats`. C'est un tableau d'objets : lequel contient `hp`, et où est la valeur?

??? success "Réponse"
    `data.stats[0].base_stat`. La 1re case du tableau `stats` est l'objet dont `stat.name` vaut `"hp"`, et sa valeur est dans `base_stat`.

### Plusieurs valeurs : `map()` { #chemin-map }

Pour **toutes** les capacités, pas seulement la première, on parcourt le tableau avec `map()`, et on écrit le chemin **à partir de chaque élément** :

```js
const abilities = data.abilities.map((item) => item.ability.name);
// ["static", "lightning-rod"]
```

Voir [Récap JS : `map()`](recap-js.md#map-join).

### Les outils { #chemin-outils }

- **Firefox** affiche le JSON joliment : collez l'adresse de l'API dans la barre d'adresse.
- **Chrome** : outils de développement, onglet **Réseau** (*Network*), cliquez sur la requête, onglet **Aperçu** (*Preview*), puis clic droit sur une valeur : **Copier le chemin de la propriété**.
- **La console** : `console.log(data)`, puis `console.log(data.types)`, puis `console.log(data.types[0])`... une étape à la fois.

## Pourquoi ce trio change tout { #pourquoi }

**1. Pas de nouvelle page.** Grâce à `fetch()`, une page va chercher de nouvelles données en arrière-plan, et les affiche sur place : pas de nouvelle adresse, pas d'écran qui se vide. Une messagerie qui affiche un nouveau courriel, un fil qui charge la suite quand on arrive en bas, une carte qui se met à jour quand on la déplace : c'est ce trio. Votre récit fait la même chose avec ses chapitres.

**2. Un serveur, plusieurs clients.** Le serveur peut être écrit dans n'importe quel langage : il expose une API et renvoie du JSON. Le site web, l'application mobile et la montre connectée peuvent tous utiliser **la même API**.

**3. Seulement les données.** Ce qui voyage, c'est du JSON, pas une page HTML complète. C'est plus léger, plus rapide, et le design reste entièrement entre les mains du frontend : le vôtre.

## Dans votre récit { #dans-votre-recit }

Votre moment dataviz réunit les trois : une **API externe**, qui répond en **JSON**, appelée avec **`fetch()`**, et lancée au bon moment par IntersectionObserver.

[:material-chart-bar: Choisir et tester votre API](../projets/recit-defilant/dataviz.md#api){ .md-button .md-button--primary }

## Références

- [Utiliser l'API Fetch (MDN)](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch){ :target="_blank" }
- [Travailler avec JSON (MDN)](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Scripting/JSON){ :target="_blank" }
- [Méthodes de requête HTTP (MDN)](https://developer.mozilla.org/fr/docs/Web/HTTP/Reference/Methods){ :target="_blank" }
