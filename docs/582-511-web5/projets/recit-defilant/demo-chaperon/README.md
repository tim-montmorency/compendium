# Le Petit Chaperon rouge : démo de récit défilant

Démo du projet **Récit défilant** du cours Web 5 (Collège Montmorency). Elle montre, dans un petit récit en 8 chapitres, chacune des exigences du projet.

**Équipe (fictive)** : Personne A, Personne B

## Lancer la démo

Le site charge ses chapitres avec `fetch()` : il doit être ouvert **par un serveur**, pas par un double-clic sur `index.html`.

- Dans VS Code : clic droit sur `index.html` → **Open with Live Server**;
- ou en ligne, sur GitHub Pages.

## Où trouver chaque exigence

| Exigence | Où | Fichier |
|---|---|---|
| Chapitres chargés en **JSON** | Tout le récit | `data/chapitres.json`, `js/main.js` |
| **CSS au défilement** (`animation-timeline: view()`) | Le titre qui explose, chapitre 1 (parallaxe), chapitre 7 (les répliques grossissent) | `css/style.css` |
| **IntersectionObserver** | Chapitre 2 (le panier), chapitre 5 (déclenchement de la météo), chapitre 8 (la page vire au rouge) | `js/animations.js`, `js/meteo.js` |
| **GSAP + ScrollTrigger** (section épinglée 1 sur 2) | Chapitre 3 : la forêt s'assombrit, les yeux s'allument | `js/animations.js` |
| **GSAP + DrawSVG** | Chapitre 4 : le loup se dessine trait par trait. Chapitre 5 : les deux chemins | `js/animations.js` |
| **GSAP + ScrollTrigger** (section épinglée 2 sur 2) | Chapitre 6 : la maison, puis on plonge dans la porte | `js/animations.js` |
| ***Fetch* externe** et dataviz | Chapitre 5 : la météo du jour (Open-Meteo, sans clé) | `js/meteo.js` |
| **Composant Vue** (Options API, par CDN) | Barre de progression et navigateur de chapitres | `js/navigation.js`, `index.html` |
| **Média animable : calques** | Chapitre 1 : 3 plans de forêt | `assets/images/foret-*.svg` |
| **Média animable : spritesheet** | Chapitre 3 : 8 images de marche | `assets/images/chaperon-marche.webp` |
| **Média animable : SVG préparé** | Chapitre 4 (traits `.loup-trait`) et chapitre 6 (groupes `#porte`, `#lumiere`, `#fumee`) | `assets/images/loup.svg`, `assets/images/maison.svg` |
| `prefers-reduced-motion` | Tout le récit reste lisible sans animation | `css/style.css`, `js/animations.js` |
| Responsive | Navigation masquée et maison empilée sous 700 px | `css/style.css` |

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

```
demo-chaperon/
├── index.html
├── css/style.css
├── js/
│   ├── main.js          charger le JSON, afficher les chapitres, tout lancer
│   ├── animations.js    IntersectionObserver, GSAP + ScrollTrigger + DrawSVG
│   ├── meteo.js         fetch externe et graphique SVG
│   └── navigation.js    composant Vue
├── data/chapitres.json
└── assets/images/
```

## Crédits des médias

| Média | Chapitre | Source | Auteur | Licence | Modifié? |
|---|---|---|---|---|---|
| `foret-fond.svg`, `foret-milieu.svg`, `foret-avant.svg` | 1 | Produit pour la démo | Démo Web 5 | : | 3 calques sur fond transparent |
| `chaperon-marche.webp` | 3 | Produit pour la démo | Démo Web 5 | : | 8 images, 160 × 200 px |
| `loup.svg` | 4 | Produit pour la démo | Démo Web 5 | : | Traits séparés (`.loup-trait`) pour DrawSVG |
| `chemins.svg` | 5 | Produit pour la démo | Démo Web 5 | : | Deux tracés avec `id` pour DrawSVG |
| `maison.svg` | 6 | Produit pour la démo | Démo Web 5 | : | Groupes nommés pour GSAP |
| Données météo | 5 | [Open-Meteo](https://open-meteo.com/) | Open-Meteo | CC BY 4.0 | : |

Texte librement adapté de *Le Petit Chaperon rouge*, de Charles Perrault (1697), domaine public.

Librairies : [GSAP](https://gsap.com/) 3.13, ScrollTrigger et DrawSVG, [Vue.js](https://vuejs.org/) (par CDN). Police : Poppins (Google Fonts).
