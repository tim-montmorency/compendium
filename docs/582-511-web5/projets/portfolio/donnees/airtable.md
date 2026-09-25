# Source : Airtable

!!! abstract "L'essentiel en 3 points"
    1. Airtable est une base de données en ligne avec une interface de tableur : vous gérez vos projets (textes, images, vidéos) sans toucher au code, et sans dépendre d'un compte Google ou Microsoft.
    2. L'accès passe par un **jeton d'accès personnel** (PAT) : toujours **en lecture seule** et **limité à la base du portfolio**, parce qu'il sera visible dans votre code public.
    3. La réponse d'Airtable n'a pas la même forme qu'un JSON local : quelques lignes dans `data.js` la ramènent au format commun, et le reste du code ne voit aucune différence.

[:material-arrow-left: Retour : choisir sa source](index.md){ .md-button }

## 1. Créer le compte et la base

1. Aller sur [airtable.com/signup](https://airtable.com/signup). N'importe quel courriel fonctionne, incluant celui du collège. Aucune carte de crédit requise.
2. Sur la page d'accueil, cliquer **Créer votre propre app**. Airtable appelle maintenant une base « app » dans son interface : c'est la même chose.

!!! tip "Ignorer les autres tuiles de la page d'accueil"
    - **Commencer avec Omni** : leur générateur IA, pas ce qu'on veut ici.
    - **Modèles** : des bases préfabriquées, à éviter aussi.

## 2. Préparer les données

Renommer la table par défaut en `Projets` (**sans espace ni accent**), puis créer les champs du [format commun](index.md#le-format-commun-des-donnees), avec le bon **type de champ** :

| Champ | Type Airtable | Remarque |
|---|---|---|
| `id` | Texte sur une ligne | Identifiant lisible pour `projet.html?id=...` (ex. `cafe-du-coin`). Voir la note plus bas. |
| `titre` | Texte sur une ligne | |
| `description` | Texte long | |
| `categorie` | Sélection unique ou texte | |
| `annee` | Texte sur une ligne | |
| `images` | **Pièce jointe** (Attachment) | Plusieurs fichiers : la **première** image devient l'image principale, les suivantes la galerie. |
| `lien` | URL | |
| `video` | URL | Le lien d'intégration complet (voir section 6). |

!!! note "Le champ `id` est optionnel avec Airtable"
    Chaque enregistrement Airtable a déjà un identifiant unique, du genre `recA1b2C3d4E5f6G7`. Le code de `data.js` l'utilise automatiquement si vous ne créez pas de champ `id`. Créer votre propre `id` donne simplement de plus belles URL : `projet.html?id=cafe-du-coin` plutôt que `projet.html?id=recA1b2C3d4E5f6G7`.

## 3. Obtenir l'URL : Base ID et nom de la table

Dans Airtable, **Aide → API documentation** (ou [airtable.com/developers/web/api/introduction](https://airtable.com/developers/web/api/introduction) une fois connecté). La documentation générée est propre à votre base : le **Base ID** (commence par `app...`) est déjà inséré dans les exemples.

L'URL de votre table :

```text
https://api.airtable.com/v0/BASE_ID/Projets
```

Contrairement à opensheet, cette URL ne fonctionne **pas** directement dans le navigateur : il faut lui joindre un jeton.

## 4. Créer le jeton d'accès (PAT), restreint

Airtable n'utilise plus de clé API classique depuis 2024 : il faut un **jeton d'accès personnel** (*Personal Access Token*).

1. Avatar (coin supérieur droit) → **Builder hub** (ou *Developer hub*).
2. **Personal access tokens** → **Create token**.
3. Le nommer clairement, ex. `portfolio-lecture`.
4. **Scopes** : ajouter **seulement** `data.records:read`.
5. **Access** : choisir **uniquement** la base du portfolio, jamais « toutes les bases ».
6. **Create token**, puis le copier immédiatement : Airtable ne le réaffichera plus.

!!! danger "Pourquoi restreindre le jeton, pas juste le créer"
    Votre site est statique et son code est public : n'importe qui peut ouvrir l'inspecteur du navigateur et lire le jeton dans votre JS. On ne peut pas le cacher. Par contre, on contrôle **ce qu'il permet de faire**.

    À la création, c'est vous qui choisissez les droits (*scopes*) et les bases. Le risque, c'est de cocher trop large par facilité : droit d'écriture, ou accès à toutes les bases du compte.

    | | Jeton trop permissif | Jeton restreint (lecture seule, 1 base) |
    |---|---|---|
    | Si quelqu'un le trouve | Peut lire, modifier, supprimer | Peut seulement lire |
    | Portée | Toutes les bases du compte | La base du portfolio seulement |
    | Pire scénario | Toutes vos données Airtable compromises, incluant des bases personnelles sans lien avec le cours | Quelqu'un voit les mêmes informations qu'en visitant votre portfolio |

    La sécurité parfaite n'existe pas ici. Mais restreindre le jeton réduit les dégâts possibles à presque rien. Dans un vrai projet en production, le jeton resterait sur un serveur, jamais dans le code envoyé au navigateur.

## 5. Le code de `js/data.js`

**Avec `async` / `await`**

```js
// js/data.js
// Source : Airtable

const BASE_ID = 'appXXXXXXXXXXXXXX';   // votre Base ID
const TABLE = 'Projets';
const JETON = 'patXXXXXXXXXXXXXX';     // jeton en lecture seule, 1 base

async function chargerProjets() {
  const reponse = await fetch(`https://api.airtable.com/v0/${BASE_ID}/${TABLE}`, {
    headers: { Authorization: `Bearer ${JETON}` }
  });

  if (!reponse.ok) {
    throw new Error(`Impossible de charger les projets (${reponse.status})`);
  }

  const donnees = await reponse.json();

  // Ramener au format commun
  return donnees.records.map(record => {
    const champs = record.fields;
    const urlsImages = (champs.images || []).map(fichier => fichier.url);

    return {
      id: record.id,           // identifiant Airtable par défaut...
      ...champs,               // ...remplacé par votre champ id s'il existe
      image: urlsImages[0] || '',
      galerie: urlsImages.slice(1)
    };
  });
}
```

**Avec `.then()`**

```js
// js/data.js
// Source : Airtable

const BASE_ID = 'appXXXXXXXXXXXXXX';   // votre Base ID
const TABLE = 'Projets';
const JETON = 'patXXXXXXXXXXXXXX';     // jeton en lecture seule, 1 base

function chargerProjets() {
  return fetch(`https://api.airtable.com/v0/${BASE_ID}/${TABLE}`, {
    headers: { Authorization: `Bearer ${JETON}` }
  })
    .then(reponse => {
      if (!reponse.ok) {
        throw new Error(`Impossible de charger les projets (${reponse.status})`);
      }
      return reponse.json();
    })
    .then(donnees => donnees.records.map(record => {
      // Ramener au format commun
      const champs = record.fields;
      const urlsImages = (champs.images || []).map(fichier => fichier.url);

      return {
        id: record.id,           // identifiant Airtable par défaut...
        ...champs,               // ...remplacé par votre champ id s'il existe
        image: urlsImages[0] || '',
        galerie: urlsImages.slice(1)
      };
    }));
}
```

Les deux versions font exactement la même chose. Choisissez celle avec laquelle vous êtes le plus à l'aise, et gardez la même partout dans votre projet.

### Pourquoi cette transformation?

Airtable ne retourne pas directement un tableau de projets. Sa réponse ressemble à ceci :

```js
{
  records: [
    {
      id: 'recA1b2C3d4E5f6G7',
      createdTime: '2026-09-20T14:00:00.000Z',
      fields: {
        titre: 'Café du coin',
        description: '...',
        images: [
          { url: 'https://...photo1.jpg', filename: 'photo1.jpg', ... },
          { url: 'https://...photo2.jpg', filename: 'photo2.jpg', ... }
        ]
      }
    },
    // ...
  ]
}
```

Le `map()` fait trois choses :

1. **Il sort les données de `fields`** : `...champs` recopie tous les champs au premier niveau, donc `projet.titre` plutôt que `projet.fields.titre`.
2. **Il fournit un `id`** : celui d'Airtable par défaut. Comme `...champs` vient après, votre propre champ `id` le remplace s'il existe.
3. **Il transforme les pièces jointes** : le tableau d'objets `images` devient une URL `image` (la première) et un tableau d'URL `galerie` (les suivantes).

Résultat : exactement le même format que le JSON local. La page d'affichage n'a aucune idée que les données viennent d'Airtable.

## 6. Champs spéciaux

### Images : champ Pièce jointe

Le champ **Pièce jointe** (*Attachment*) accepte plusieurs fichiers par ligne, glissés-déposés directement dans la cellule. Airtable héberge vraiment les fichiers sur ses propres serveurs : pas besoin de les mettre dans votre dépôt.

!!! danger "Les URL des pièces jointes expirent : ne jamais les copier en dur"
    L'URL retournée par l'API pour un fichier joint est **temporaire** : elle expire après quelques heures, pour des raisons de sécurité.

    Tant que le `fetch()` se fait à chaque chargement de la page, aucun problème : l'API retourne une URL fraîche à chaque appel. Le piège : copier une de ces URL une fois pour la coller ailleurs (dans un JSON, directement dans le HTML). Le lien cesse de fonctionner quelques heures plus tard, et ça ressemble à un bogue mystérieux : « ça marchait hier ».

### Vidéos : champ URL, avec le lien d'intégration complet

Utiliser un champ **URL** plutôt que texte : Airtable valide que c'est un lien.

Stocker le **lien d'intégration complet** (*embed*), pas seulement l'identifiant de la vidéo :

- YouTube : `https://www.youtube.com/embed/XXXXXXXXXXX`
- Vimeo : `https://player.vimeo.com/video/000000000`

Pour l'obtenir : sur YouTube ou Vimeo, **Partager → Intégrer**, puis copier l'URL qui se trouve dans le `src="..."` du code fourni.

Pourquoi le lien complet? Parce qu'il s'injecte directement dans un `<iframe>`, sans manipulation de texte. Stocker seulement l'identifiant demanderait un champ de plus pour la plateforme (YouTube et Vimeo n'ont pas le même gabarit d'URL) et une fonction pour reconstruire l'URL. Cette règle vaut aussi pour les autres sources.

## 7. Pièges propres à cette source

- **Erreur 401 ou 403** : jeton invalide, mal copié, ou sans accès à cette base. Vérifiez les scopes et la section *Access* du jeton.
- **Erreur 404** : Base ID ou nom de table erroné. Le nom de la table est sensible à la casse et aux accents : `Projets`, pas `projets`.
- **Champ vide = propriété absente** : si une cellule est vide, Airtable n'inclut tout simplement pas ce champ dans `fields`. `projet.lien` vaut alors `undefined`. Le code d'affichage doit le prévoir (voir la page suivante).
- **Ordre des projets** : pour recevoir les projets dans l'ordre de votre vue Airtable, ajoutez le nom de la vue à l'URL : `` `https://api.airtable.com/v0/${BASE_ID}/${TABLE}?view=${encodeURIComponent('Nom de la vue')}` ``.
- **100 enregistrements maximum par requête** : largement suffisant pour un portfolio. Le plan gratuit permet 1000 enregistrements par base.

## 8. Vérifier que ça fonctionne

Temporairement, à la fin de `data.js` :

```js
chargerProjets().then(projets => console.log(projets[0].titre));
```

Vous voyez le titre de votre premier projet dans la console? Retirez cette ligne de test et passez à l'affichage.

[:material-cards-outline: Afficher les projets](afficher-projets.md){ .md-button .md-button--primary }
