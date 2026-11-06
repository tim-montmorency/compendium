# :material-file-tree:  Arborescence du dépôt récit défilant

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. **Un fichier CSS et un fichier JS par chapitre**, dans des dossiers `chapitres/`. Chaque fichier appartient à la personne responsable du chapitre.
2. **Quelques fichiers communs** (`index.html`, `commun.css`, `main.js`, `data.json`) : à toute l'équipe. On se prévient avant d'y toucher. Dans `data.json`, seules les **clés communes** sont fixes : le **`contenu`** de chaque chapitre appartient à son responsable, qui le change librement.
3. Toute la structure, **avec un fichier par chapitre, même vide**, se crée **une seule fois, ensemble, sur `main`**, au début. Ensuite, chacun travaille dans ses fichiers, sur sa branche.

</div>

!!! info "Votre récit se construit en deux phases { #deux-phases }"
    1. *Phase 1*{ .w5-phase .w5-phase-1 } : **intégration statique.** Vous écrivez vos chapitres **directement en HTML et en CSS**, puis vous les animez. Vous voyez vos éléments dans le code et dans l'inspecteur : c'est plus simple pour concevoir et animer. Accepté jusqu'au **prototype** (ven. 13 nov.).
    2. *Phase 2*{ .w5-phase .w5-phase-2 } : **intégration dynamique.** Vous déplacez le texte et les médias de vos chapitres dans `data.json`, et le JavaScript construit les sections. **Exigé à la bêta** (ven. 20 nov.).

    Si votre HTML statique est écrit **comme le JavaScript le construira** (même `<section>`, mêmes classes), le passage à la *phase 2*{ .w5-phase .w5-phase-2 } ne change pas une ligne de vos animations. [Comment passer à la *phase 2*{ .w5-phase .w5-phase-2 }](#phase-2).

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
  nuage.svg                  ← commun : revient dans plusieurs chapitres
  ch-01/                     ← les médias du chapitre 1
  ch-02/
  ...
  ch-06/
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

Une seule page.

### *Phase 1*{ .w5-phase .w5-phase-1 }, intégration statique : vos chapitres écrits en HTML { #html-phase-1 }

Chaque chapitre est une `<section>`, écrite à la main dans `index.html`. Écrivez-la **exactement comme le JavaScript la construira à la phase 2** : la classe `chapitre`, l'`id` du chapitre, un `<h2>`, les paragraphes, puis le média.

```html
<main id="recit">
  <!-- Chapitre 1 : responsable, Prénom -->
  <section class="chapitre" id="la-foret">
    <h2>La forêt</h2>
    <p>Il était une fois...</p>
    <!-- Le média : à la phase 2, createMedia() le retournera -->
    <div class="foret">
      <img class="foret__fond" alt=""
           src="assets/images/ch-01/foret-fond.webp">
      <img class="foret__avant" alt=""
           src="assets/images/ch-01/foret-avant.webp">
    </div>
  </section>

  <!-- Chapitre 2 : responsable, Prénom -->
  <section class="chapitre" id="la-tempete">
    <h2>La tempête</h2>
    <p>...</p>
  </section>
</main>
```

!!! warning "Un seul `index.html` pour deux : chacun ses sections"
    Créez **ensemble, sur `main`**, toutes les `<section>` vides, avec leur `id` et un commentaire qui dit à qui elles sont. Ensuite, chacun remplit **seulement ses sections**, sur sa branche. Git fusionne sans problème deux modifications à des endroits différents du même fichier : le conflit arrive seulement si vous touchez aux mêmes lignes.

### *Phase 2*{ .w5-phase .w5-phase-2 }, intégration dynamique : les chapitres construits par le JavaScript { #html-phase-2 }

Le `<main>` est vide : les chapitres sont construits par le JavaScript, à partir de `data.json`.

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

Un objet par chapitre, dans l'ordre du récit. Chaque objet a **deux parties** : les **clés communes**, toujours les mêmes, et le **`contenu`**, propre au chapitre.

### Un chapitre simple

Un texte et un média : ici, une parallaxe en deux calques.

```json
{
  "id": "la-foret",
  "numero": 1,
  "titre": "Dans la forêt",
  "responsable": "Zoé",
  "texte": ["Premier paragraphe...", "Deuxième paragraphe..."],
  "contenu": {
    "calques": [
      { "src": "assets/images/ch-01/foret-fond.webp", "vitesse": "lente" },
      { "src": "assets/images/ch-01/foret-avant.webp", "vitesse": "rapide" }
    ]
  }
}
```

### Un chapitre en plusieurs plans

Quand un chapitre est une **séquence** de moments animés, chacun avec son média, son `contenu` peut contenir un tableau `plans`. Le module du chapitre boucle sur les plans, exactement comme `main.js` boucle sur les chapitres.

```json
{
  "id": "la-tempete",
  "numero": 2,
  "titre": "La tempête",
  "responsable": "Léo",
  "texte": ["La mer est calme. Trop calme."],
  "contenu": {
    "plans": [
      {
        "id": "eclair",
        "texte": "Un éclair déchire le ciel.",
        "media": {
          "src": "assets/images/ch-02/eclair.svg",
          "alt": "Un éclair zèbre le ciel"
        }
      },
      {
        "id": "bateau",
        "texte": "Le bateau tangue, puis disparaît.",
        "media": {
          "src": "assets/images/ch-02/bateau.webp",
          "images": 12,
          "alt": "Un bateau secoué par les vagues"
        }
      }
    ]
  }
}
```

Les clés communes sont identiques dans les deux chapitres. Seul le `contenu` change : chaque responsable y met ce dont **son** chapitre a besoin.

### Le fichier complet, avec 2 chapitres

`data.json` est **un tableau** (`[ ]`) qui contient les objets des chapitres, dans l'ordre du récit, séparés par des **virgules** :

```json
[
  {
    "id": "la-foret",
    "numero": 1,
    "titre": "Dans la forêt",
    "responsable": "Zoé",
    "texte": ["Premier paragraphe...", "Deuxième paragraphe..."],
    "contenu": {
      "calques": [
        { "src": "assets/images/ch-01/foret-fond.webp", "vitesse": "lente" },
        { "src": "assets/images/ch-01/foret-avant.webp", "vitesse": "rapide" }
      ]
    }
  },
  {
    "id": "la-tempete",
    "numero": 2,
    "titre": "La tempête",
    "responsable": "Léo",
    "texte": ["La mer est calme. Trop calme."],
    "contenu": {
      "plans": [
        {
          "id": "eclair",
          "texte": "Un éclair déchire le ciel.",
          "media": {
            "src": "assets/images/ch-02/eclair.svg",
            "alt": "Un éclair zèbre le ciel"
          }
        },
        {
          "id": "bateau",
          "texte": "Le bateau tangue, puis disparaît.",
          "media": {
            "src": "assets/images/ch-02/bateau.webp",
            "images": 12,
            "alt": "Un bateau secoué par les vagues"
          }
        }
      ]
    }
  }
]
```

!!! warning "Les erreurs JSON les plus fréquentes"
    - Une **virgule après le dernier** élément d'un tableau ou d'un objet (`}, ]`) : le JSON est invalide, et `fetch()` échoue.
    - Une virgule **oubliée** entre deux chapitres (`} {`).
    - Des guillemets simples (`'...'`) : le JSON n'accepte que les guillemets doubles (`"..."`).

    Le fichier ne se charge pas? Ouvrez la console : l'erreur indique souvent la ligne. VS Code souligne aussi les erreurs en rouge dans `data.json`.

### Les clés communes : fixes

`id`, `numero`, `titre`, `responsable` et `texte` : `main.js` s'en sert pour construire chaque section. Elles sont **les mêmes pour toutes les équipes et tous les chapitres**, et elles **ne changent pas** en cours de route.

### `contenu` : libre, au responsable du chapitre

Tout ce qui est propre à votre chapitre va dans `contenu` : vos images, vos calques et leur vitesse, le nombre d'images de votre spritesheet, des répliques, le lieu pour votre API... Vous inventez les clés dont vous avez besoin, et **vous les changez quand vous voulez** : seul le module de votre chapitre (`ch-03.js`) lit son `contenu`. Votre coéquipier ne peut pas planter à cause de vos changements.

Vous ne savez pas encore ce qu'il vous faut? C'est normal. Commencez avec `"contenu": {}`, et ajoutez des clés à mesure que vous découvrez ce dont votre chapitre a besoin.

!!! example "Plusieurs médias animés dans un même chapitre?"
    Une scène épinglée, 5 calques, deux personnages, une explosion : comment ranger tout ça dans `contenu`, et comment `animate()` le retrouve. Voir l'exemple complet, avec sa démo.

    [:material-movie-open-outline: Exemple : un chapitre, plusieurs médias en timeline](exemple-chapitre-complexe.md){ .md-button }

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

### Le fichier d'un chapitre { #fichier-chapitre }

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

### `main.js`, à la *phase 1*{ .w5-phase .w5-phase-1 } { #main-js-phase-1 }

À la *phase 1*{ .w5-phase .w5-phase-1 }, les sections sont déjà dans le HTML. `main.js` les trouve, et demande à chaque module d'animer **sa** section. Les modules et la fonction `animate(section)` sont **les mêmes qu'à la phase 2** : c'est ce qui rend le passage facile.

```js
// js/main.js, phase 1 : les chapitres sont dans le HTML
import * as ch01 from "./chapitres/ch-01.js";
import * as ch02 from "./chapitres/ch-02.js";
// ... un import par chapitre

gsap.registerPlugin(ScrollTrigger);

// Dans le même ordre que les sections du HTML
const chapterModules = [ch01, ch02];

const sections = document.querySelectorAll(".chapitre");

sections.forEach((section, index) => {
  chapterModules[index].animate(section);
});
```

À la *phase 1*{ .w5-phase .w5-phase-1 } :

- `createMedia()` n'est pas appelée : laissez-la dans votre module, avec `return "";`. Elle servira à la *phase 2*{ .w5-phase .w5-phase-2 }.
- `animate()` reçoit seulement `section` : n'utilisez pas encore `chapter`.

### `main.js`, à la *phase 2*{ .w5-phase .w5-phase-2 } : importer tous les chapitres { #main-js }

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

`.map()` transforme chaque chapitre en HTML, et `.join("")` colle le tout en un seul texte : voir [Récap JS : `map()` et `join()`](../../js/recap-js.md#map-join). Et `forEach` : [Récap JS : parcourir un tableau](../../js/recap-js.md#foreach).

!!! warning "Live Server obligatoire"
    Les modules, comme `fetch()`, ne fonctionnent pas si vous ouvrez `index.html` en double-cliquant (adresse `file:///...`). Ouvrez toujours la page avec Live Server.

!!! info "GSAP et Vue, chargés par CDN"
    Une librairie chargée avec une balise `<script>` classique (GSAP, Vue) reste disponible partout, y compris dans vos modules : `gsap.to(...)` fonctionne dans `ch-03.js` sans `import`. Placez ces balises **avant** celle de `main.js`.

## Passer à la *phase 2*{ .w5-phase .w5-phase-2 } { #phase-2 }

Votre chapitre fonctionne en HTML statique? Pour le passer aux données, chapitre par chapitre :

1. **Le texte** : copiez le titre et les paragraphes de votre `<section>` dans votre objet de `data.json` (`titre`, `texte`).
2. **Le média** : copiez le HTML de votre média dans `createMedia()`, dans le [gabarit littéral](../../js/recap-js.md#gabarits) (les accents graves). Remplacez ce qui vient des données par `${...}`, par exemple les chemins des images : `${chapter.contenu.fond}`.
3. **Retirez** votre `<section>` du `index.html`.
4. Quand toute l'équipe a fait les étapes 1 à 3, `index.html` n'a plus qu'un `<main id="recit"></main>` vide, et `main.js` passe à [la version de la *phase 2*{ .w5-phase .w5-phase-2 }](#main-js).

Vos animations, elles, **ne changent pas** : `animate(section)` reçoit la même `<section>`, avec les mêmes classes. Si une animation ne marche plus, comparez dans l'inspecteur le HTML construit avec votre ancien HTML statique : une classe a changé.

[:material-code-json: Du JSON aux chapitres : les étapes](json-chapitres.md){ .md-button }

## Qui touche à quoi

| Fichier | À qui | Règle |
|---|---|---|
| `css/chapitres/ch-03.css`, `js/chapitres/ch-03.js` | Le responsable du chapitre 3 | Sur sa branche, librement |
| `data.json`, le `contenu` d'un chapitre | Le responsable du chapitre | Librement : seul son module le lit |
| `data.json`, les clés communes | Toute l'équipe | On s'entend avant, et une personne modifie tous les chapitres d'un coup ([voir plus haut](#data-json)) |
| `index.html`, `commun.css`, `main.js`, `style.css` | Toute l'équipe | On se prévient avant d'y toucher, et on fusionne vite |

## Créer la structure, au début

**Une seule fois, ensemble, sur un seul poste, sur `main`** : tous les fichiers, avec **un fichier CSS et un fichier JS par chapitre, même vides**, et tous les `@import` et les `import` déjà écrits. À la *phase 1*{ .w5-phase .w5-phase-1 }, ajoutez aussi dans `index.html` **toutes les `<section>` vides**, avec leur `id`. Puis *commit* (`Commun : ajoute la structure de départ`) et *push*. Ensuite, chacun crée sa branche.

Même principe pour le squelette de `data.json` : un objet par chapitre, avec les clés communes et un `"contenu": {}` vide. Et pour les fichiers : si chacun ajoutait ses objets, ses fichiers et ses `import` plus tard, vous modifieriez tous les deux les mêmes lignes de `style.css` et de `main.js`, et le conflit serait garanti.

[:material-code-json: Du JSON aux chapitres : les étapes](json-chapitres.md){ .md-button .md-button--primary }
[:material-account-multiple-outline: Git en équipe](git-en-equipe.md){ .md-button }
