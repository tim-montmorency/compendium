# :material-file-tree:  Le récit défilant : la structure du projet

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. **Un fichier CSS et un fichier JS par chapitre**, dans des dossiers `chapitres/`. Chaque fichier appartient à la personne responsable du chapitre.
2. **Quelques fichiers communs** (`index.html`, `commun.css`, `main.js`, `data.json`) : à toute l'équipe. On se prévient avant d'y toucher.
3. Toute la structure, **avec un fichier par chapitre, même vide**, se crée **une seule fois, ensemble, sur `main`**, au début. Ensuite, chacun travaille dans ses fichiers, sur sa branche.

</div>

## Pourquoi un fichier par chapitre?

- **Moins de conflits** : un conflit arrive quand deux personnes modifient les mêmes lignes du même fichier. Si chacun travaille surtout dans ses propres fichiers, ça arrive rarement.
- **Votre travail est visible** : votre matrice de responsabilités correspond à des fichiers précis. L'historique Git de `ch-03.js` montre qui l'a écrit.
- **À la défense**, on ouvre vos fichiers, et vous les expliquez.

## L'arborescence

Exemple pour 6 chapitres :

```text
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
  data.json                  ← commun : le squelette de vos chapitres
assets/images/
```

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

## Le JavaScript : des modules

Un **module**, c'est un fichier JavaScript qui garde ses variables et ses fonctions pour lui. Il partage seulement ce qu'il **exporte** (`export`), et un autre fichier s'en sert en l'**important** (`import`). Résultat : deux chapitres peuvent avoir une fonction qui porte le même nom sans se nuire.

Vous n'avez pas à maîtriser les modules en détail : utilisez le code ci-dessous tel quel, et complétez-le.

### Le fichier d'un chapitre

Chaque chapitre exporte **une fonction `animate`**. `main.js` l'appelle une fois le HTML du chapitre dans la page, et lui donne la `<section>` du chapitre.

```js
// js/chapitres/ch-03.js
// Chapitre 3 : responsable, Prénom

// Appelée par main.js, une fois le HTML du chapitre dans la page.
// section : l'élément <section> de ce chapitre.
export function animate(section) {
  // Vos animations ici : IntersectionObserver, GSAP...
  // Cherchez vos éléments DANS la section :
  // section.querySelector(".loup")
}
```

Vous pouvez écrire d'autres fonctions dans ce fichier : seule `animate` est exportée, les autres restent privées au chapitre.

### `main.js` : importer tous les chapitres { #main-js }

```js
// js/main.js
// Un module par chapitre, dans l'ordre du récit
import * as ch01 from "./chapitres/ch-01.js";
import * as ch02 from "./chapitres/ch-02.js";
import * as ch03 from "./chapitres/ch-03.js";
// ... un import par chapitre

const chapterModules = [ch01, ch02, ch03];

async function init() {
  // 1. Charger les chapitres et construire leur HTML
  //    (voir « Du JSON aux chapitres »)
  const chapters = await loadChapters();
  // ... le HTML de chaque chapitre dans #recit

  // 2. Puis, chaque chapitre anime sa propre section
  chapters.forEach((chapter, index) => {
    const section = document.getElementById(chapter.id);
    chapterModules[index].animate(section);
  });
}

init();
```

L'ordre du tableau `chapterModules` doit suivre l'ordre des chapitres dans `data.json`.

!!! warning "Live Server obligatoire"
    Les modules, comme `fetch()`, ne fonctionnent pas si vous ouvrez `index.html` en double-cliquant (adresse `file:///...`). Ouvrez toujours la page avec Live Server.

!!! info "GSAP et Vue, chargés par CDN"
    Une librairie chargée avec une balise `<script>` classique (GSAP, Vue) reste disponible partout, y compris dans vos modules : `gsap.to(...)` fonctionne dans `ch-03.js` sans `import`. Placez ces balises **avant** celle de `main.js`.

## Qui touche à quoi

| Fichier | À qui | Règle |
|---|---|---|
| `css/chapitres/ch-03.css`, `js/chapitres/ch-03.js` | Le responsable du chapitre 3 | Sur sa branche, librement |
| `data.json` | Chacun pour **ses** objets | Le squelette ne bouge plus : on remplit seulement ses chapitres |
| `index.html`, `commun.css`, `main.js`, `style.css` | Toute l'équipe | On se prévient avant d'y toucher, et on fusionne vite |

## Créer la structure, au début

**Une seule fois, ensemble, sur un seul poste, sur `main`** : tous les fichiers, avec **un fichier CSS et un fichier JS par chapitre, même vides**, et tous les `@import` et les `import` déjà écrits. Puis *commit* (`Commun : ajoute la structure de départ`) et *push*. Ensuite, chacun crée sa branche.

C'est le même principe que le squelette de `data.json` : si chacun ajoutait ses fichiers et ses `import` plus tard, vous modifieriez tous les deux les mêmes lignes de `style.css` et de `main.js`, et le conflit serait garanti.

[:material-code-json: Du JSON aux chapitres : les étapes](json-chapitres.md){ .md-button .md-button--primary }
[:material-account-multiple-outline: Git en équipe](git-en-equipe.md){ .md-button }
