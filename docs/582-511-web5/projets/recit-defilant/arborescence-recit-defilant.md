# :material-file-tree:  Arborescence du dépôt récit défilant

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. **Un fichier CSS et un fichier JS par chapitre**, dans des dossiers `chapitres/`. Chaque fichier appartient à la personne responsable du chapitre.
2. **Quelques fichiers communs** (`index.html`, `commun.css`, `main.js`, `data.json`) : à toute l'équipe. On se prévient avant d'y toucher. Dans `data.json`, seules les **clés communes** sont fixes : le **`contenu`** de chaque chapitre appartient à son responsable, qui le change librement.
3. Toute la structure, **avec un fichier par chapitre, même vide**, se crée **une seule fois, ensemble, sur `main`**, au début. Ensuite, chacun travaille dans ses fichiers, sur sa branche.

</div>

## Pourquoi un fichier par chapitre?

- **Moins de conflits** : un conflit arrive quand deux personnes modifient les mêmes lignes du même fichier. Si chacun travaille surtout dans ses propres fichiers, ça arrive rarement.
- **Votre travail est visible** : votre matrice de responsabilités correspond à des fichiers précis. L'historique Git de `ch-03.js` montre qui l'a écrit.
- **À la défense**, on ouvre vos fichiers, et vous les expliquez.

## L'arborescence

Exemple pour 6 chapitres. Le `README.md` et le dossier `documentation/` existent déjà depuis la remise du cahier de charges : on ajoute le reste autour.

```text
.vscode/settings.json        ← commun : désactive Copilot (voir plus bas)
README.md                    ← déjà là : équipe, thème, lien Figma, crédits
documentation/               ← déjà là : la planification
  CAHIER-DE-CHARGES.md
  storyboard.pdf             ← v1, à garder tel quel
  storyboard-v2.pdf
  JOURNAL-prenom.md          ← un journal par personne
  JOURNAL-prenom.md
  brainstorm/                ← les photos, si brainstorm sur papier
index.html                   ← commun
css/
  style.css                  ← commun : importe tous les autres
  commun.css                 ← commun : couleurs, typographie, mise en page
  chapitres/
    ch-01.css                ← le responsable du chapitre 1
    ch-02.css
    ...
    ch-06.css
js/
  main.js                    ← commun : fetch, construction des chapitres
  chapitres/
    ch-01.js                 ← le responsable du chapitre 1
    ch-02.js
    ...
    ch-06.js
data/
  data.json                  ← commun : clés communes fixes, contenu libre
assets/images/
```

!!! tip "Désactiver Copilot dans votre projet"
    Créez le fichier `.vscode/settings.json` à la racine de votre dépôt, et *commitez*-le :

    ```json
    {
      "github.copilot.enable": { "*": false }
    }
    ```

    Les complétions de Copilot sont alors désactivées dans ce projet seulement. Vos autres projets ne changent pas. N'utilisez pas non plus le chat de Copilot.

## Le HTML

Une seule page. Les chapitres sont construits par le JavaScript, à partir de `data.json`.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Notre récit</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <main id="recit"></main>

  <!-- type="module" : main.js peut importer les fichiers des chapitres -->
  <script type="module" src="js/main.js"></script>
</body>
</html>
```

## Le CSS : un fichier qui importe tous les autres

`style.css` ne contient que des `@import`, dans l'ordre : le commun, puis chaque chapitre.

```css
/* Le CSS commun, puis un fichier par chapitre */
@import url("commun.css");
@import url("chapitres/ch-01.css");
@import url("chapitres/ch-02.css");
@import url("chapitres/ch-03.css");
/* ... un @import par chapitre */
```

Dans le fichier d'un chapitre, ciblez toujours **sa section**, avec l'`id` du chapitre dans `data.json`. Ainsi, vos règles ne touchent jamais les chapitres des autres :

```css
/* Chapitre 3 : responsable, Prénom */
#la-foret h2 {
  color: #2E5E3A;
}
```

## Les données : `data.json` { #data-json }

Un objet par chapitre, dans l'ordre du récit. Chaque objet a **deux parties** :

```json
{
  "id": "la-foret",
  "numero": 3,
  "titre": "Dans la forêt",
  "responsable": "Zoé",
  "texte": ["Premier paragraphe...", "Deuxième paragraphe..."],
  "contenu": {
    "sprite": "assets/images/chaperon-marche.webp",
    "images": 8,
    "alt": "Le Petit Chaperon rouge marche dans la forêt"
  }
}
```

### Les clés communes : fixes

`id`, `numero`, `titre`, `responsable` et `texte` : `main.js` s'en sert pour construire chaque section. Elles sont **les mêmes pour toutes les équipes et tous les chapitres**, et elles **ne changent pas** en cours de route.

### `contenu` : libre, au responsable du chapitre

Tout ce qui est propre à votre chapitre va dans `contenu` : vos images, vos calques et leur vitesse, le nombre d'images de votre spritesheet, des répliques, le lieu pour votre API... Vous inventez les clés dont vous avez besoin, et **vous les changez quand vous voulez** : seul le module de votre chapitre (`ch-03.js`) lit son `contenu`. Votre coéquipier ne peut pas planter à cause de vos changements.

Vous ne savez pas encore ce qu'il vous faut? C'est normal. Commencez avec `"contenu": {}`, et ajoutez des clés à mesure que vous découvrez ce dont votre chapitre a besoin.

### Qui change quoi

| Vous changez... | Ce que vous faites |
|---|---|
| Le `contenu` de **votre** chapitre | Rien de spécial : c'est votre espace. Votre `createMedia` et votre `animate` lisent les nouvelles clés. |
| Une **clé commune** (en ajouter une, en renommer une) | Comme pour `main.js` : vous en parlez **avant** à votre coéquipier. Une personne modifie **tous** les chapitres d'un coup, et `main.js` s'il le faut, puis *commit* (`Données : ajoute la clé sousTitre`), *push*, et chacun met sa branche à jour avec `main`. |

!!! tip "Votre cahier de charges, section 5"
    Le format décrit à la section 5 de votre cahier est votre **version de départ** : il va évoluer, c'est prévu. À la fin du projet, mettez la section 5 à jour : vos clés communes, et un exemple de `contenu` pour un de vos chapitres.

## Le JavaScript : des modules

Un **module**, c'est un fichier JavaScript qui garde ses variables et ses fonctions pour lui. Il partage seulement ce qu'il **exporte** (`export`), et un autre fichier s'en sert en l'**important** (`import`). Résultat : deux chapitres peuvent avoir une fonction qui porte le même nom sans se nuire.

Vous n'avez pas à maîtriser les modules en détail : utilisez le code ci-dessous tel quel, et complétez-le.

### Le fichier d'un chapitre

Chaque chapitre exporte **deux fonctions**, toujours les mêmes. `main.js` les appelle et leur donne l'objet du chapitre dans `data.json` (`chapter`).

```js
// js/chapitres/ch-03.js
// Chapitre 3 : responsable, Prénom

// Appelée par main.js pendant la construction de la section.
// Retourne le HTML du média de ce chapitre.
export function createMedia(chapter) {
  // Vos données : chapter.contenu (ex. chapter.contenu.sprite)
  return `<div class="foret"></div>`;
}

// Appelée par main.js, une fois tout le HTML dans la page.
// section : l'élément <section> de ce chapitre.
export function animate(section, chapter) {
  // Vos animations ici : IntersectionObserver, GSAP...
  // Cherchez vos éléments DANS la section :
  // section.querySelector(".foret")
}
```

- Pas encore de média? `return "";`.
- Pas d'animation en JavaScript (tout est en CSS)? Laissez `animate` vide.
- Mais les deux fonctions **doivent exister** : `main.js` les appelle pour chaque chapitre.

Vous pouvez écrire d'autres fonctions dans ce fichier : seules `createMedia` et `animate` sont exportées, les autres restent privées au chapitre.

### `main.js` : importer tous les chapitres { #main-js }

```js
// js/main.js
// Un module par chapitre, dans l'ordre du récit
import * as ch01 from "./chapitres/ch-01.js";
import * as ch02 from "./chapitres/ch-02.js";
import * as ch03 from "./chapitres/ch-03.js";
// ... un import par chapitre

const chapterModules = [ch01, ch02, ch03];

// Une section par chapitre : le texte (commun à tous),
// puis le média, créé par le module du chapitre
function createChapter(chapter, chapterModule) {
  // ... les paragraphes (voir « Du JSON aux chapitres », étape 3)
  return `
    <section class="chapitre" id="${chapter.id}">
      <h2>${chapter.titre}</h2>
      ${paragraphs}
      ${chapterModule.createMedia(chapter)}
    </section>
  `;
}

async function init() {
  // 1. Charger les chapitres (voir « Du JSON aux chapitres »)
  const chapters = await loadChapters();

  // 2. Le HTML de chaque chapitre, avec le module du même rang
  const recit = document.querySelector("#recit");
  recit.innerHTML = chapters
    .map((chapter, index) => createChapter(chapter, chapterModules[index]))
    .join("");

  // 3. Puis, chaque chapitre anime sa propre section
  chapters.forEach((chapter, index) => {
    const section = document.getElementById(chapter.id);
    chapterModules[index].animate(section, chapter);
  });
}

init();
```

L'ordre du tableau `chapterModules` doit suivre l'ordre des chapitres dans `data.json` : le 3e objet du JSON va avec le 3e module.

!!! warning "Live Server obligatoire"
    Les modules, comme `fetch()`, ne fonctionnent pas si vous ouvrez `index.html` en double-cliquant (adresse `file:///...`). Ouvrez toujours la page avec Live Server.

!!! info "GSAP et Vue, chargés par CDN"
    Une librairie chargée avec une balise `<script>` classique (GSAP, Vue) reste disponible partout, y compris dans vos modules : `gsap.to(...)` fonctionne dans `ch-03.js` sans `import`. Placez ces balises **avant** celle de `main.js`.

## Qui touche à quoi

| Fichier | À qui | Règle |
|---|---|---|
| `css/chapitres/ch-03.css`, `js/chapitres/ch-03.js` | Le responsable du chapitre 3 | Sur sa branche, librement |
| `data.json`, le `contenu` d'un chapitre | Le responsable du chapitre | Librement : seul son module le lit |
| `data.json`, les clés communes | Toute l'équipe | On s'entend avant, et une personne modifie tous les chapitres d'un coup ([voir plus haut](#data-json)) |
| `index.html`, `commun.css`, `main.js`, `style.css` | Toute l'équipe | On se prévient avant d'y toucher, et on fusionne vite |

## Créer la structure, au début

**Une seule fois, ensemble, sur un seul poste, sur `main`** : tous les fichiers, avec **un fichier CSS et un fichier JS par chapitre, même vides**, et tous les `@import` et les `import` déjà écrits. Puis *commit* (`Commun : ajoute la structure de départ`) et *push*. Ensuite, chacun crée sa branche.

Même principe pour le squelette de `data.json` : un objet par chapitre, avec les clés communes et un `"contenu": {}` vide. Et pour les fichiers : si chacun ajoutait ses objets, ses fichiers et ses `import` plus tard, vous modifieriez tous les deux les mêmes lignes de `style.css` et de `main.js`, et le conflit serait garanti.

[:material-code-json: Du JSON aux chapitres : les étapes](json-chapitres.md){ .md-button .md-button--primary }
[:material-account-multiple-outline: Git en équipe](git-en-equipe.md){ .md-button }
