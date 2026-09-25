# Source : JSON local

!!! abstract "L'essentiel en 3 points"
    1. Vos projets sont dans un fichier `data/projets.json`, directement dans votre dépôt. Aucun compte, aucun service externe.
    2. Vous pouvez l'écrire à la main, ou le produire à partir d'un fichier Excel (Excel → CSV → convertisseur en ligne).
    3. `fetch()` sur un fichier local ne fonctionne **pas** en ouvrant `index.html` en double-cliquant : il faut un serveur local, comme Live Server dans VS Code.

[:material-arrow-left: Retour : choisir sa source](index.md){ .md-button }

## 1. Préparer les données

Le fichier `data/projets.json` contient un **tableau** (`[ ]`) d'**objets** (`{ }`), un objet par projet, avec les propriétés du [format commun](index.md#le-format-commun-des-donnees).

```json
[
  {
    "id": "cafe-du-coin",
    "titre": "Café du coin",
    "description": "Identité visuelle et site web pour un café de quartier.",
    "categorie": "Design web",
    "annee": "2025",
    "image": "assets/images/cafe-du-coin.jpg",
    "lien": "https://exemple.com",
    "galerie": [
      "assets/images/cafe-du-coin-2.jpg",
      "assets/images/cafe-du-coin-3.jpg"
    ]
  },
  {
    "id": "biome",
    "titre": "Biome",
    "description": "Modélisation 3D d'un écosystème miniature.",
    "categorie": "3D",
    "annee": "2025",
    "image": "assets/images/biome.jpg",
    "video": "https://www.youtube.com/embed/XXXXXXXXXXX"
  }
]
```

Vous connaissez déjà le JSON de vos cours précédents. Rappel des règles qui font planter le fichier au complet si on en oublie une :

- **Guillemets doubles** partout, pour les clés et pour les textes. Jamais de guillemets simples.
- **Pas de virgule après le dernier élément** d'un objet ou d'un tableau.
- Pas de commentaires dans un fichier JSON.

!!! tip "Valider votre JSON"
    VS Code souligne en rouge les erreurs de syntaxe dans un fichier `.json`. Au moindre doute, collez votre contenu dans un validateur en ligne (ex. jsonlint.com).

!!! warning "Chemins des images : relatifs à la page HTML, pas au fichier JSON"
    Le chemin `assets/images/cafe-du-coin.jpg` est lu par le navigateur **depuis `index.html`**, pas depuis `data/projets.json`. N'écrivez donc pas `../assets/images/...`.

## 2. Option : produire le JSON à partir d'Excel

Si vous préférez remplir vos projets dans un tableur, Excel peut servir de point de départ. Attention : c'est une **conversion ponctuelle**. Si vous modifiez l'Excel ensuite, il faut refaire la conversion et remplacer le fichier JSON.

1. Dans Excel, une ligne par projet. **La première ligne contient les noms de propriétés** : `id`, `titre`, `description`, `categorie`, `annee`, `image`, `lien`...
2. **Fichier → Enregistrer sous → CSV UTF-8 (délimité par des virgules)**. Le « UTF-8 » est important : sans lui, vos accents risquent d'arriver brisés (`CafÃ©`).
3. Ouvrir un convertisseur CSV vers JSON en ligne, par exemple [csvjson.com](https://csvjson.com/csv2json) ou [convertcsv.com](https://www.convertcsv.com/csv-to-json.htm).
4. Coller le contenu du CSV (ou téléverser le fichier), choisir une sortie en **tableau d'objets**.
5. Copier le résultat dans `data/projets.json`.

!!! warning "Virgule ou point-virgule?"
    Avec un Windows configuré en français, Excel sépare parfois les colonnes par des **points-virgules** plutôt que par des virgules. Si le convertisseur vous donne une seule colonne géante, choisissez le point-virgule comme séparateur dans ses options.

!!! note "Les limites de la conversion"
    - Toutes les valeurs deviennent du texte, ce qui est correct pour notre format commun.
    - Une `galerie` (plusieurs images) ne peut pas vraiment s'écrire dans une seule cellule : ajoutez-la à la main dans le JSON après la conversion, sous forme de tableau.
    - Les outils en ligne changent parfois sans préavis. Si l'un ne fonctionne plus, un autre convertisseur CSV vers JSON fera la même chose.

## 3. Le code de `js/data.js`

**Avec `async` / `await`**

```js
// js/data.js
// Source : fichier JSON local

async function chargerProjets() {
  const reponse = await fetch('data/projets.json');

  if (!reponse.ok) {
    throw new Error(`Impossible de charger les projets (${reponse.status})`);
  }

  const projets = await reponse.json();
  return projets; // déjà dans le format commun
}
```

**Avec `.then()`**

```js
// js/data.js
// Source : fichier JSON local

function chargerProjets() {
  return fetch('data/projets.json')
    .then(reponse => {
      if (!reponse.ok) {
        throw new Error(`Impossible de charger les projets (${reponse.status})`);
      }
      return reponse.json(); // déjà dans le format commun
    });
}
```

Les deux versions font exactement la même chose. Choisissez celle avec laquelle vous êtes le plus à l'aise, et gardez la même partout dans votre projet.

Le JSON est **déjà** dans le format commun : il n'y a rien à transformer. C'est la version la plus courte des trois sources.

## 4. Pièges propres à cette source

!!! danger "« Failed to fetch » ou erreur CORS en ouvrant le fichier directement"
    Si l'adresse dans votre navigateur commence par `file:///C:/...`, `fetch()` refuse de lire les fichiers locaux, par sécurité. Ouvrez votre site avec **Live Server** (clic droit sur `index.html` → *Open with Live Server*) : l'adresse devient `http://127.0.0.1:5500/...` et tout fonctionne. Une fois en ligne sur GitHub Pages, aucun problème non plus.

- **Erreur 404** dans la console : le chemin dans `fetch()` ne correspond pas à l'emplacement réel du fichier. Vérifiez le nom du dossier (`data/`) et la casse (`Projets.json` n'est pas `projets.json` sur GitHub Pages).
- **`Unexpected token` ou `JSON.parse` dans la console** : erreur de syntaxe dans le fichier JSON (virgule en trop, guillemet manquant).

## 5. Vérifier que ça fonctionne

Temporairement, à la fin de `data.js` :

```js
chargerProjets().then(projets => console.log(projets[0].titre));
```

Vous voyez le titre de votre premier projet dans la console? Retirez cette ligne de test et passez à l'affichage.

[:material-cards-outline: Afficher les projets](afficher-projets.md){ .md-button .md-button--primary }
