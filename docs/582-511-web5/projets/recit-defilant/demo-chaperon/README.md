# Le Petit Chaperon rouge : démo de récit défilant

Démo du projet **Récit défilant** du cours Web 5 (Collège Montmorency). Elle montre, dans un petit récit en 8 chapitres, chacune des exigences du projet.

**Équipe (fictive)** : Personne A, Personne B

## Lancer la démo

Le site charge ses chapitres avec `fetch()` et ses scripts sont des **modules** (`type="module"`) : il doit être ouvert **par un serveur**, pas par un double-clic sur `index.html`.

- Dans VS Code : clic droit sur `index.html` → **Open with Live Server**;
- ou en ligne, sur GitHub Pages.

## Où trouver chaque exigence

| Exigence | Où | Fichier |
|---|---|---|
| Chapitres chargés en **JSON** | Tout le récit | `data/chapitres.json`, `js/main.js` |
| **CSS au défilement** (`animation-timeline: view()`) | Le titre qui explose, chapitre 1 (parallaxe), chapitre 7 (les répliques grossissent) | `css/commun.css`, `css/chapitres/ch-01.css`, `ch-07.css` |
| **IntersectionObserver** | Chapitre 2 (le panier), chapitre 5 (déclenchement de la météo), chapitre 8 (la page vire au rouge) | `js/outils.js`, `js/chapitres/ch-02.js`, `ch-05.js`, `ch-08.js` |
| **GSAP + ScrollTrigger** (section épinglée 1 sur 2) | Chapitre 3 : la forêt s'assombrit, les yeux s'allument | `js/chapitres/ch-03.js` |
| **GSAP + DrawSVG** | Chapitre 4 : le loup se dessine trait par trait. Chapitre 5 : les deux chemins | `js/chapitres/ch-04.js`, `ch-05.js` |
| **GSAP + ScrollTrigger** (section épinglée 2 sur 2) | Chapitre 6 : la maison, puis on plonge dans la porte | `js/chapitres/ch-06.js` |
| ***Fetch* externe** et dataviz | Chapitre 5 : la météo du jour (Open-Meteo, sans clé) | `js/chapitres/ch-05.js` |
| **Composant Vue** (Options API, par CDN) | Barre de progression et navigateur de chapitres | `js/navigation.js`, `index.html` |
| **Média animable : calques** | Chapitre 1 : 3 plans de forêt | `assets/images/foret-*.svg` |
| **Média animable : spritesheet** | Chapitre 3 : 8 images de marche | `assets/images/chaperon-marche.webp` |
| **Média animable : SVG préparé** | Chapitre 4 (traits `.loup-trait`) et chapitre 6 (groupes `#porte`, `#lumiere`, `#fumee`) | `assets/images/loup.svg`, `assets/images/maison.svg` |
| `prefers-reduced-motion` | Tout le récit reste lisible sans animation | `css/commun.css`, chaque `css/chapitres/ch-0X.css`, `js/outils.js` |
| Responsive | Navigation masquée et maison empilée sous 700 px | `css/commun.css`, `css/chapitres/ch-06.css` |

**DrawSVG est gratuit** depuis GSAP 3.13 (2025), comme tous les plugins de GSAP. On le charge par CDN, comme ScrollTrigger, puis on l'enregistre : `gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin)`. Il dessine le **contour** (*stroke*) d'un `path`, `line`, `polyline`, `polygon`, `rect` ou `circle` : vos traits doivent donc avoir un `stroke`, pas seulement un `fill`.

Le **repli Firefox** : si le navigateur ne supporte pas `animation-timeline`, le bloc `@supports` ne s'applique pas : les calques, le titre et les répliques restent immobiles. Le récit fonctionne quand même.

## Matrice de responsabilités (exemple)

| Élément | Responsable |
|---|---|
| Chapitres 1, 2, 6 et 7 | Personne A |
| Chapitres 3, 4, 5 et 8 | Personne B |
| Média animable : calques (ch. 1) | Personne A |
| Média animable : spritesheet (ch. 3) | Personne B |
| Composant Vue | Personne A |
| *Fetch* externe et dataviz | Personne B |

## Structure

Un fichier CSS et un fichier JS **par chapitre** : chacun appartient à la personne responsable du chapitre (voir la matrice). Les fichiers communs appartiennent à toute l'équipe.

```
demo-chaperon/
├── index.html               commun
├── css/
│   ├── style.css            commun : importe tous les autres (@import)
│   ├── commun.css           commun : couleurs, typographie, en-tête, nav
│   └── chapitres/
│       ├── ch-01.css        un fichier par chapitre
│       ├── ...
│       └── ch-08.css
├── js/
│   ├── main.js              commun : charger le JSON, construire les sections
│   ├── outils.js            commun : moinsDeMouvement, observerUneFois
│   ├── navigation.js        commun : composant Vue
│   └── chapitres/
│       ├── ch-01.js         createMedia() et animate()
│       ├── ...
│       └── ch-08.js
├── data/chapitres.json      commun
└── assets/images/
```

Chaque chapitre exporte deux fonctions :

- `createMedia(chapitre)` : retourne le HTML du média du chapitre;
- `animate(section, chapitre)` : anime la `<section>` du chapitre, une fois tout le HTML dans la page.

`main.js` importe les 8 modules, construit chaque section (le texte, puis `createMedia()`), puis appelle `animate()` pour chaque chapitre. Les chapitres 1 et 7 n'ont pas d'animation en JavaScript (CSS seulement) : leur `animate()` est vide, mais elle existe.

## Le modèle de données

Dans `data/chapitres.json`, chaque chapitre a les mêmes clés communes (`id`, `numero`, `titre`, `responsable`, `texte`) et un objet **`contenu`**, libre : les calques du chapitre 1, les objets du panier du chapitre 2, le lieu de la météo du chapitre 5, les répliques du chapitre 7. Seul le module du chapitre lit son `contenu`.

## Crédits des médias

| Média | Chapitre | Source | Auteur | Licence | Modifié? |
|---|---|---|---|---|---|
| `foret-fond.svg`, `foret-milieu.svg`, `foret-avant-sol.svg` | 1 | Produit pour la démo | Démo Web 5 | : | 3 calques sur fond transparent; l'avant-plan a un sol qui dépasse sous le cadre |
| `foret-avant.svg` | 3 | Produit pour la démo | Démo Web 5 | : | Arbres de l'avant-plan de la forêt |
| `chaperon-marche.webp` | 3 | Produit pour la démo | Démo Web 5 | : | 8 images, 160 × 200 px |
| `loup.svg` | 4 | Produit pour la démo | Démo Web 5 | : | Traits séparés (`.loup-trait`) pour DrawSVG |
| `chemins.svg` | 5 | Produit pour la démo | Démo Web 5 | : | Deux tracés avec `id` pour DrawSVG |
| `maison.svg` | 6 | Produit pour la démo | Démo Web 5 | : | Groupes nommés pour GSAP |
| Données météo | 5 | [Open-Meteo](https://open-meteo.com/) | Open-Meteo | CC BY 4.0 | : |

Texte librement adapté de *Le Petit Chaperon rouge*, de Charles Perrault (1697), domaine public.

Librairies : [GSAP](https://gsap.com/) 3.13, ScrollTrigger et DrawSVG, [Vue.js](https://vuejs.org/) (par CDN). Police : Poppins (Google Fonts).
