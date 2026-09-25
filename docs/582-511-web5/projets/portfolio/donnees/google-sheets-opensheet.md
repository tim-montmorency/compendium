# Source : Google Sheets + opensheet

!!! abstract "L'essentiel en 3 points"
    1. Vos projets sont dans une feuille Google Sheets, une ligne par projet. Vous les modifiez dans le tableur, le site se met à jour sans toucher au code.
    2. [opensheet](https://github.com/benborgers/opensheet) est un petit service gratuit qui transforme une feuille partagée en JSON : une seule URL, aucune clé d'API, aucun jeton à cacher.
    3. La réponse est déjà un tableau d'objets, presque identique à un `projets.json` local.

[:material-arrow-left: Retour : choisir sa source](index.md){ .md-button }

!!! info "Pour qui?"
    Pour ceux qui ont un **compte Google personnel**. Au collège, tout le monde n'en a pas : si ce n'est pas votre cas, choisissez le JSON local ou Airtable.

## 1. Préparer les données

1. Créer une nouvelle feuille dans Google Sheets.
2. Renommer l'onglet du bas (par défaut « Feuille 1 ») en `Projets`, **sans espace ni accent**.
3. **Première ligne = noms de propriétés** du [format commun](index.md#le-format-commun-des-donnees) : `id`, `titre`, `description`, `categorie`, `annee`, `image`, `lien`, `video`, `galerie`.
4. Une ligne par projet à partir de la ligne 2.

| id | titre | description | categorie | annee | image | lien | galerie |
|---|---|---|---|---|---|---|---|
| cafe-du-coin | Café du coin | Identité visuelle... | Design web | 2025 | https://... | https://... | https://...2.jpg, https://...3.jpg |
| biome | Biome | Modélisation 3D... | 3D | 2025 | https://... | | |

!!! warning "Les images doivent être des URL"
    Une image **insérée dans une cellule** (Insertion → Image) ne passe pas dans le JSON. La colonne `image` doit contenir du **texte** : soit une URL complète (`https://...`), soit un chemin vers une image de votre dépôt (`assets/images/cafe-du-coin.jpg`).

Pour la `galerie`, on écrit plusieurs URL dans la même cellule, **séparées par des virgules**. Le code de `data.js` les transformera en tableau.

## 2. Obtenir l'URL

### Partager la feuille en lecture

**Partager** (en haut à droite) → **Accès général** → **Tous les utilisateurs disposant du lien** → rôle **Lecteur**.

!!! note "Ce que ça veut dire"
    N'importe qui avec le lien peut *lire* la feuille. C'est normal : ce sont les mêmes informations que celles affichées publiquement sur votre portfolio. Ne mettez rien de privé dans cette feuille.

### Trouver l'ID de la feuille

Dans l'adresse de votre feuille, l'ID est la longue chaîne entre `/d/` et `/edit` :

```text
https://docs.google.com/spreadsheets/d/1AbC2dEf3GhI4jKl5MnO6pQr7StU8vWx9Yz/edit#gid=0
                                       └──────────── ID de la feuille ────────┘
```

### Construire l'URL opensheet

```text
https://opensheet.elk.sh/ID_DE_LA_FEUILLE/Projets
```

Le dernier segment est le **nom de l'onglet**. Collez cette URL directement dans votre navigateur : vous devez voir vos projets en JSON. Si oui, la source est prête.

## 3. Le code de `js/data.js`

**Avec `async` / `await`**

```js
// js/data.js
// Source : Google Sheets via opensheet

const ID_FEUILLE = '1AbC2dEf3GhI4jKl5MnO6pQr7StU8vWx9Yz'; // votre ID
const ONGLET = 'Projets';

async function chargerProjets() {
  const reponse = await fetch(`https://opensheet.elk.sh/${ID_FEUILLE}/${ONGLET}`);

  if (!reponse.ok) {
    throw new Error(`Impossible de charger les projets (${reponse.status})`);
  }

  const lignes = await reponse.json();

  // Ramener au format commun : seule la galerie demande une transformation
  return lignes.map(ligne => ({
    ...ligne,
    galerie: ligne.galerie ? ligne.galerie.split(',').map(url => url.trim()) : []
  }));
}
```

**Avec `.then()`**

```js
// js/data.js
// Source : Google Sheets via opensheet

const ID_FEUILLE = '1AbC2dEf3GhI4jKl5MnO6pQr7StU8vWx9Yz'; // votre ID
const ONGLET = 'Projets';

function chargerProjets() {
  return fetch(`https://opensheet.elk.sh/${ID_FEUILLE}/${ONGLET}`)
    .then(reponse => {
      if (!reponse.ok) {
        throw new Error(`Impossible de charger les projets (${reponse.status})`);
      }
      return reponse.json();
    })
    .then(lignes => lignes.map(ligne => ({
      ...ligne,
      galerie: ligne.galerie ? ligne.galerie.split(',').map(url => url.trim()) : []
    })));
}
```

Les deux versions font exactement la même chose. Choisissez celle avec laquelle vous êtes le plus à l'aise, et gardez la même partout dans votre projet.

Qu'est-ce que fait le `map()`?

- `...ligne` recopie toutes les colonnes telles quelles (`id`, `titre`, `description`...).
- `galerie` : le texte `"url1, url2"` devient le tableau `["url1", "url2"]`. Si la cellule est vide, on retourne un tableau vide.

Si vous n'utilisez pas de galerie, `return lignes;` suffit : c'est alors exactement le même code que pour le JSON local, seule l'URL change.

## 4. Pièges propres à cette source

- **Tout arrive en texte**, même les nombres : `annee` vaut `"2025"`, pas `2025`. Pour notre format commun, c'est correct. Si un jour vous devez trier ou calculer, convertissez avec `Number(projet.annee)`.
- **Les en-têtes de colonnes deviennent les noms de propriétés**, caractère pour caractère. `Titre` avec une majuscule ou `titre ` avec une espace à la fin donnent des propriétés différentes de `titre`.
- **Cellules vides** : prévoyez que la propriété puisse être vide ou absente (ex. un projet sans `lien`). Le code d'affichage doit le gérer, on le voit dans la page suivante.
- **Délai de mise à jour** : opensheet garde la réponse en cache quelques secondes. Si une modification n'apparaît pas tout de suite, attendez un peu et rechargez.
- **Erreur dans la réponse** : si l'URL affiche un message d'erreur plutôt que vos données, vérifiez le partage (« Tous les utilisateurs disposant du lien ») et le nom exact de l'onglet.

!!! note "Un service gratuit maintenu par une seule personne"
    opensheet fonctionne très bien, mais il n'offre aucune garantie. Pour un portfolio scolaire, c'est un compromis raisonnable. Pour un site professionnel à long terme, gardez en tête qu'une copie en JSON local est toujours possible : **Fichier → Télécharger → CSV**, puis la même conversion que pour Excel ([JSON local](json-local.md#2-option-produire-le-json-a-partir-dexcel)).

## 5. Vérifier que ça fonctionne

Temporairement, à la fin de `data.js` :

```js
chargerProjets().then(projets => console.log(projets[0].titre));
```

Vous voyez le titre de votre premier projet dans la console? Retirez cette ligne de test et passez à l'affichage.

[:material-cards-outline: Afficher les projets](afficher-projets.md){ .md-button .md-button--primary }
