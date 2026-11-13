# :material-api:  API, JSON et fetch : le trio du web moderne

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. Une **API** (*Application Programming Interface*), c'est la porte d'entrée d'un service : on lui envoie une requête, elle répond avec des **données**, pas avec une page.
2. Le **JSON**, c'est la langue de ces données : des paires clé-valeur, que tous les langages savent lire.
3. **`fetch()`**, c'est le messager du navigateur : il va chercher ces données **sans charger une nouvelle page**. C'est ainsi que le web professionnel est construit aujourd'hui.

</div>

## Le trio en un schéma { #trio }

`fetch()` porte la demande, l'API y répond, et la réponse revient en JSON.

<div class="w5-schema-cadre" style="margin:1.5em 0;padding:1rem 1.2rem;background:var(--md-code-bg-color);border:1px solid var(--md-default-fg-color--lightest);border-radius:0.4rem;text-align:center">
<svg class="w5-schema" style="width:100%;height:auto;max-width:720px" viewBox="0 0 720 200" role="img" aria-labelledby="t-trio d-trio" font-family="inherit" font-size="14" fill="currentColor">
<title id="t-trio">Le trio : fetch(), l'API et le JSON</title>
<desc id="d-trio">Votre page envoie une demande avec fetch(), le messager. L'API, la porte du service, la reçoit et consulte le serveur et sa base de données. La réponse revient à la page en JSON, la langue des données.</desc>
<defs>
<marker id="ft" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="11" markerHeight="11" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="currentColor" fill-opacity=".7"/></marker>
<marker id="fta" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="13" markerHeight="13" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#FF2B47"/></marker>
</defs>
<!-- Votre page -->
<rect x="10" y="30" width="140" height="90" rx="10" fill="none" stroke="currentColor" stroke-opacity=".45"/>
<text x="80" y="62" text-anchor="middle" font-weight="600">Votre page</text>
<rect x="35" y="78" width="90" height="8" rx="2" fill="currentColor" fill-opacity=".15"/>
<rect x="35" y="92" width="56" height="16" rx="2" fill="#FF2B47"/>
<rect x="97" y="92" width="28" height="16" rx="2" fill="currentColor" fill-opacity=".15"/>
<!-- fetch() : la demande -->
<line x1="152" y1="60" x2="416" y2="60" stroke="currentColor" stroke-opacity=".6" stroke-width="2" marker-end="url(#ft)"/>
<rect x="222" y="42" width="124" height="36" rx="18" fill="#FF2B47"/>
<text x="284" y="65" text-anchor="middle" font-weight="700" fill="#fff" font-family="ui-monospace, monospace">fetch()</text>
<text x="284" y="28" text-anchor="middle" font-size="12" fill-opacity=".75">le messager</text>
<!-- L'API -->
<rect x="420" y="20" width="150" height="100" rx="10" fill="none" stroke="currentColor" stroke-width="2"/>
<text x="495" y="66" text-anchor="middle" font-size="26" font-weight="700">API</text>
<text x="495" y="92" text-anchor="middle" font-size="12" fill-opacity=".75">la porte du service</text>
<!-- Derrière l'API -->
<line x1="572" y1="70" x2="606" y2="70" stroke="currentColor" stroke-opacity=".35" stroke-dasharray="4 4"/>
<rect x="608" y="38" width="104" height="64" rx="10" fill="none" stroke="currentColor" stroke-opacity=".3" stroke-dasharray="4 4"/>
<text x="660" y="66" text-anchor="middle" font-size="12" fill-opacity=".6">serveur et</text>
<text x="660" y="82" text-anchor="middle" font-size="12" fill-opacity=".6">base de données</text>
<!-- La réponse : du JSON -->
<path d="M495 122 L495 160 L80 160 L80 124" fill="none" stroke="#FF2B47" stroke-width="2.5" marker-end="url(#fta)"/>
<rect x="222" y="142" width="124" height="36" rx="18" fill="#FF2B47"/>
<text x="284" y="165" text-anchor="middle" font-weight="700" fill="#fff" font-family="ui-monospace, monospace">{ } JSON</text>
<text x="284" y="196" text-anchor="middle" font-size="12" fill-opacity=".75">la langue des données</text>
</svg>
</div>

## Deux façons de construire un site { #monde-pro }

Un site dynamique se construit de deux façons. Toute la différence : **qui fabrique la page**, le serveur ou le navigateur? Les deux existent aujourd'hui, souvent dans le même site.

### Essayez { #essayer }

Cette page de musée est branchée sur la vraie API du Cleveland Museum of Art. Cliquez **Page suivante** en mode **Site multipage**, puis tapez quelques lettres et cliquez **Charger plus** en mode **Application web**. Comparez le panneau **Ce qui voyage**.

<iframe src="https://tim-montmorency.com/Fragment/v/?f=w5-api-galerie&onglets=resultat,js&boutons=rejouer,ouvrir" style="width:100%;height:1000px;border:0" loading="lazy"></iframe>

### Site multipage (web classique) { #avant }

**Le serveur envoie la page** (rendu côté serveur, *SSR*). À chaque clic, il interroge la base de données, fabrique le HTML et renvoie une page complète : l'adresse change, et tout l'écran est redessiné.

<div class="w5-schema-cadre" style="margin:1.5em 0;padding:1rem 1.2rem;background:var(--md-code-bg-color);border:1px solid var(--md-default-fg-color--lightest);border-radius:0.4rem;text-align:center">
<svg class="w5-schema" style="width:100%;height:auto;max-width:720px" viewBox="0 0 720 225" role="img" aria-labelledby="t-mpa d-mpa"
     font-family="inherit" font-size="14" fill="currentColor">
  <title id="t-mpa">Site multipage : le serveur envoie la page</title>
  <desc id="d-mpa">Le navigateur demande une nouvelle adresse. Le serveur interroge la base de données, fabrique une page HTML complète et la renvoie. Toute la page est redessinée.</desc>
  <defs>
    <marker id="fl-mpa" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" fill="currentColor" fill-opacity=".7"/>
    </marker>
    <marker id="fa-mpa" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" fill="#FF2B47"/>
    </marker>
    <marker id="fb-mpa" viewBox="0 0 10 10" refX="7" refY="5" markerUnits="userSpaceOnUse" markerWidth="22" markerHeight="22" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" fill="currentColor" fill-opacity=".55"/>
    </marker>
  </defs>
  <!-- Le navigateur, avec sa petite page -->
  <rect x="10" y="20" width="160" height="190" rx="10" fill="none" stroke="currentColor" stroke-opacity=".45"/>
    <text x="90.0" y="46" text-anchor="middle" font-weight="600">Navigateur</text>
    <text x="90.0" y="66" text-anchor="middle" font-size="12" fill-opacity=".7">charge une nouvelle page</text>
  <g transform="translate(35,92)">
    <rect x="0" y="0" width="110" height="12" rx="2" fill="#FF2B47"/>
    <rect x="0" y="18" width="110" height="6" rx="2" fill="#FF2B47"/>
    <rect x="0" y="30" width="70" height="34" rx="2" fill="#FF2B47"/>
    <rect x="76" y="30" width="34" height="34" rx="2" fill="#FF2B47"/>
    <rect x="0" y="70" width="110" height="8" rx="2" fill="#FF2B47"/>
  </g>
  <text x="90" y="198" text-anchor="middle" font-size="11" fill="#FF2B47" font-weight="600">toute la page est redessinée</text>
  <!-- Le serveur et la base de données -->
  <rect x="360" y="50" width="160" height="70" rx="10" fill="none" stroke="currentColor" stroke-opacity=".45"/>
    <text x="440.0" y="76" text-anchor="middle" font-weight="600">Serveur</text>
    <text x="440.0" y="96" text-anchor="middle" font-size="12" fill-opacity=".7">fabrique la page</text>
  <rect x="580" y="50" width="130" height="70" rx="10" fill="none" stroke="currentColor" stroke-opacity=".45"/>
    <text x="645.0" y="76" text-anchor="middle" font-weight="600">Base de données</text>
    <text x="645.0" y="96" text-anchor="middle" font-size="12" fill-opacity=".7">MySQL, etc.</text>
  <!-- Serveur et base de données se parlent -->
  <line x1="522" y1="76" x2="576" y2="76" stroke="currentColor" stroke-opacity=".6" marker-end="url(#fl-mpa)"/>
  <line x1="576" y1="96" x2="522" y2="96" stroke="currentColor" stroke-opacity=".6" marker-end="url(#fl-mpa)"/>
  <!-- La requête -->
  <path d="M172 70 L356 70" fill="none" stroke="currentColor" stroke-opacity=".6" marker-end="url(#fl-mpa)"/>
  <text x="264" y="44" text-anchor="middle" font-size="12">nouvelle adresse</text>
  <text x="264" y="61" text-anchor="middle" font-size="12" font-family="ui-monospace, monospace">/collection?page=2</text>
  <!-- La réponse -->
  <path d="M440 124 L440 160 L178 160" fill="none" stroke="currentColor" stroke-opacity=".55" stroke-width="7"
        marker-end="url(#fb-mpa)"/>
  <text x="310" y="186" text-anchor="middle" font-size="13" font-weight="600">page HTML complète (≈ 70 Ko)</text>
</svg>
</div>

### Application web (web moderne) { #maintenant }

**Le serveur envoie les données** (rendu côté client, *CSR*). Il expose une API qui répond en JSON, et votre JavaScript les place dans la page avec `fetch()` : l'adresse ne change pas, et seule une zone se met à jour, sans charger une nouvelle page.

<div class="w5-schema-cadre" style="margin:1.5em 0;padding:1rem 1.2rem;background:var(--md-code-bg-color);border:1px solid var(--md-default-fg-color--lightest);border-radius:0.4rem;text-align:center">
<svg class="w5-schema" style="width:100%;height:auto;max-width:720px" viewBox="0 0 720 225" role="img" aria-labelledby="t-app d-app"
     font-family="inherit" font-size="14" fill="currentColor">
  <title id="t-app">Application web : le serveur envoie les données</title>
  <desc id="d-app">Le navigateur appelle l'API avec fetch(). Le serveur interroge la base de données et renvoie seulement du JSON. JavaScript met à jour une seule zone de la page.</desc>
  <defs>
    <marker id="fl-app" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" fill="currentColor" fill-opacity=".7"/>
    </marker>
    <marker id="fa-app" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" fill="#FF2B47"/>
    </marker>
    <marker id="fb-app" viewBox="0 0 10 10" refX="7" refY="5" markerUnits="userSpaceOnUse" markerWidth="22" markerHeight="22" orient="auto-start-reverse">
      <path d="M0 0 L10 5 L0 10 z" fill="currentColor" fill-opacity=".55"/>
    </marker>
  </defs>
  <!-- Le navigateur, avec sa petite page -->
  <rect x="10" y="20" width="160" height="190" rx="10" fill="none" stroke="currentColor" stroke-opacity=".45"/>
    <text x="90.0" y="46" text-anchor="middle" font-weight="600">Navigateur</text>
    <text x="90.0" y="66" text-anchor="middle" font-size="12" fill-opacity=".7">JS place les données</text>
  <g transform="translate(35,92)">
    <rect x="0" y="0" width="110" height="12" rx="2" fill="currentColor" fill-opacity=".15"/>
    <rect x="0" y="18" width="110" height="6" rx="2" fill="currentColor" fill-opacity=".15"/>
    <rect x="0" y="30" width="70" height="34" rx="2" fill="#FF2B47"/>
    <rect x="76" y="30" width="34" height="34" rx="2" fill="currentColor" fill-opacity=".15"/>
    <rect x="0" y="70" width="110" height="8" rx="2" fill="currentColor" fill-opacity=".15"/>
  </g>
  <text x="90" y="198" text-anchor="middle" font-size="11" fill="#FF2B47" font-weight="600">une seule zone se met à jour</text>
  <!-- Le serveur et la base de données -->
  <rect x="360" y="50" width="160" height="70" rx="10" fill="none" stroke="currentColor" stroke-opacity=".45"/>
    <text x="440.0" y="76" text-anchor="middle" font-weight="600">Serveur</text>
    <text x="440.0" y="96" text-anchor="middle" font-size="12" fill-opacity=".7">l'API répond</text>
  <rect x="580" y="50" width="130" height="70" rx="10" fill="none" stroke="currentColor" stroke-opacity=".45"/>
    <text x="645.0" y="76" text-anchor="middle" font-weight="600">Base de données</text>
    <text x="645.0" y="96" text-anchor="middle" font-size="12" fill-opacity=".7">MySQL, etc.</text>
  <!-- Serveur et base de données se parlent -->
  <line x1="522" y1="76" x2="576" y2="76" stroke="currentColor" stroke-opacity=".6" marker-end="url(#fl-app)"/>
  <line x1="576" y1="96" x2="522" y2="96" stroke="currentColor" stroke-opacity=".6" marker-end="url(#fl-app)"/>
  <!-- La requête -->
  <path d="M172 70 L356 70" fill="none" stroke="currentColor" stroke-opacity=".6" marker-end="url(#fl-app)"/>
  <text x="264" y="44" text-anchor="middle" font-size="12">fetch()</text>
  <text x="264" y="61" text-anchor="middle" font-size="12" font-family="ui-monospace, monospace">/api/artworks?skip=6</text>
  <!-- La réponse -->
  <path d="M440 124 L440 160 L178 160" fill="none" stroke="#FF2B47" stroke-width="2.5"
        marker-end="url(#fa-app)"/>
  <text x="310" y="186" text-anchor="middle" font-size="13" font-weight="600" fill="#FF2B47">JSON seulement (≈ 18 Ko)</text>
</svg>
</div>

!!! note "Les deux cohabitent"
    Un site multipage n'est pas dépassé : des millions de sites WordPress fabriquent encore leurs pages en PHP, et c'est souvent le bon choix. Le même WordPress peut **aussi** offrir une API. Dans les deux cas, la base de données est toujours là, derrière le serveur ou derrière l'API.

### Vous le faites tous les jours { #exemples }

- **« Charger plus » et le défilement infini** : TikTok, Reddit, Twitch. La suite s'ajoute en bas, et vous restez où vous êtes.
- **Les suggestions pendant la frappe** : la recherche de jeux sur Steam, de chaînes sur Twitch.
- **La recherche de GIF dans Discord** : les résultats s'affichent sans quitter la conversation.

??? info "Et le clavardage en direct de Discord ou de Twitch?"
    Il utilise une autre technique : les **WebSockets**. La connexion reste ouverte, et le serveur envoie chaque nouveau message dès qu'il arrive, sans attendre qu'on le demande.

??? example "Des API ouvertes, pour créer"
    - **Les collections de musées** : le [Cleveland Museum of Art](https://openaccess-api.clevelandart.org/){ :target="_blank" } (la source de la démo) et le [Met (New York)](https://metmuseum.github.io/){ :target="_blank" }, avec les images.
    - **Les couleurs** : [The Color API](https://www.thecolorapi.com/){ :target="_blank" } donne le nom d'une couleur et ses harmonies.
    - **Les mots** : [PoetryDB](https://poetrydb.org/){ :target="_blank" } renvoie des poèmes classiques (en anglais).

### Dans le monde professionnel { #metiers }

- **Une seule API pour tout** : l'application iOS, l'application Android et le site d'une banque ou d'un réseau social reçoivent le même JSON.
- **Des services qu'on ne construit pas** : le paiement, les cartes, l'envoi de courriels, la traduction. Un site les branche par API.
- **Les CMS « sans tête »** (*headless*) : le contenu reste géré dans WordPress, et le site est construit avec n'importe quel outil frontend.
- **Les métiers** : le développeur **frontend** (vous) **consomme** les API; le développeur **backend** les **construit**. Entre les deux, le contrat, c'est l'API et son JSON.

## L'API : la porte d'un service { #api }

Une **API** permet à deux applications d'**échanger des données**, à l'aide de requêtes HTTP. Pensez à un restaurant :

- le **menu**, c'est l'**API** : ce qu'on peut commander, et comment;
- la **cuisine**, c'est le **serveur web** : on n'y entre jamais, et le plat arrive;
- la personne qui prend la commande et rapporte l'assiette? Piège du mot « serveur » : ici, c'est **`fetch()`**, le messager.

| Requête HTTP | Elle sert à... | Exemple |
|---|---|---|
| `GET` | **lire** des données | les œuvres d'un musée |
| `POST` | **envoyer** des données | publier un commentaire |
| `PUT` | **modifier** des données | changer sa photo de profil |
| `DELETE` | **supprimer** des données | effacer un message |

Dans ce cours, vous utilisez seulement `GET`, ce que fait `fetch()` par défaut.

## Le JSON : la langue commune { #json }

Le **JSON** (*JavaScript Object Notation*) écrit les données en paires **clé-valeur**, avec la syntaxe des objets JavaScript. Né de JavaScript, il est lu par **presque tous les langages** : c'est la langue commune entre serveur et navigateur.

```json
{
  "title": "Twilight in the Wilderness",
  "creation_date": "1860",
  "creators": ["Frederic Edwin Church"],
  "has_image": true
}
```

??? note "Avant le JSON : le XML"
    Les mêmes données, en XML. Chaque valeur est entourée de deux balises : plus long à écrire, plus long à transférer.

    ```xml
    <artwork>
      <title>Twilight in the Wilderness</title>
      <creation_date>1860</creation_date>
    </artwork>
    ```

[:material-language-javascript: Récap JS : le JSON](recap-js.md#json){ .md-button }

## `fetch()` : le messager du navigateur { #fetch }

`fetch()` est **native** : rien à installer. Elle envoie la requête et attend la réponse **de façon asynchrone**, pendant que la page continue de fonctionner. Elle remplace l'ancienne technique **AJAX** (`XMLHttpRequest`), avec un code plus court.

```js
const API_URL = "https://openaccess-api.clevelandart.org/api/artworks/";

async function loadArtworks() {
  const response = await fetch(API_URL + "?q=landscape&limit=6");
  const data = await response.json(); // le JSON devient un objet JS
  console.log(data.data[0].title);    // le titre de la 1re œuvre
}
```

[:material-language-javascript: Récap JS : `async` / `await`](recap-js.md#async){ .md-button }

## Trouver une donnée dans un JSON complexe { #chemin }

La réponse d'une vraie API est rarement petite : des objets dans des tableaux dans des objets. Pour atteindre votre donnée, il faut écrire son **chemin**. La méthode, une démo pour tester vos chemins, et les outils de Firefox et de Chrome sont sur leur propre page.

[:material-code-json: Trouver une donnée dans un JSON](json-chemin.md){ .md-button .md-button--primary }

## Dans vos projets { #dans-votre-recit }

<span id="deja"></span>Vous utilisez déjà ce trio :

- **votre portfolio** chargeait ses projets depuis un fichier JSON, avec `fetch()`;
- **votre récit**, à la *phase 2*{ .w5-phase .w5-phase-2 }, charge ses chapitres depuis `data.json`;
- **votre moment dataviz** réunit les trois : une API externe, qui répond en JSON, appelée avec `fetch()` au bon moment, grâce à IntersectionObserver.

[:material-chart-bar: Choisir et tester votre API](../projets/recit-defilant/dataviz.md#api){ .md-button .md-button--primary }

## Références

- [Utiliser l'API Fetch (MDN)](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch){ :target="_blank" }
- [Travailler avec JSON (MDN)](https://developer.mozilla.org/fr/docs/Learn_web_development/Core/Scripting/JSON){ :target="_blank" }
- [Méthodes de requête HTTP (MDN)](https://developer.mozilla.org/fr/docs/Web/HTTP/Reference/Methods){ :target="_blank" }
