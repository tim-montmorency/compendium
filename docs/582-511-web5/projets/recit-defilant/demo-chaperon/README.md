# Le Petit Chaperon rouge : démo de récit défilant

Démo du projet **Récit défilant** du cours Web 5 (Collège Montmorency). Elle montre, dans un petit récit en 6 chapitres, chacune des exigences du projet.

**Équipe (fictive)** : Personne A, Personne B

## Lancer la démo

Le site charge ses chapitres avec `fetch()` : il doit être ouvert **par un serveur**, pas par un double-clic sur `index.html`.

- Dans VS Code : clic droit sur `index.html` → **Open with Live Server**;
- ou en ligne, sur GitHub Pages.

## Où trouver chaque exigence

| Exigence | Où | Fichier |
|---|---|---|
| Chapitres chargés en **JSON** | Tout le récit | `data/chapitres.json`, `js/main.js` |
| **CSS au défilement** (`animation-timeline: view()`) | Chapitre 1 : la parallaxe | `css/style.css` |
| **IntersectionObserver** | Chapitre 2 : le panier, et le déclenchement de la météo | `js/animations.js`, `js/meteo.js` |
| **GSAP + ScrollTrigger** (section épinglée) | Chapitre 3 : la forêt | `js/animations.js` |
| **GSAP + ScrollTrigger** (SVG animé) | Chapitre 5 : la maison | `js/animations.js` |
| ***Fetch* externe** et dataviz | Chapitre 4 : la météo du jour (Open-Meteo, sans clé) | `js/meteo.js` |
| **Composant Vue** (Options API, par CDN) | Barre de progression et navigateur de chapitres | `js/navigation.js`, `index.html` |
| **Média animable : calques** | Chapitre 1 : 3 plans de forêt | `assets/images/foret-*.svg` |
| **Média animable : spritesheet** | Chapitre 3 : 8 images de marche | `assets/images/chaperon-marche.webp` |
| **Média animable : SVG préparé** | Chapitre 5 : groupes nommés (`#porte`, `#fenetre`, `#fumee`) | `assets/images/maison.svg` |
| `prefers-reduced-motion` | Tout le récit reste lisible sans animation | `css/style.css`, `js/animations.js` |
| Responsive | Navigation masquée et marges réduites sous 700 px | `css/style.css` |

Le **repli Firefox** : si le navigateur ne supporte pas `animation-timeline`, le bloc `@supports` ne s'applique pas et les calques restent immobiles. Le récit fonctionne quand même.

## Matrice de responsabilités (exemple)

| Élément | Responsable |
|---|---|
| Chapitres 1, 2 et 5 | Personne A |
| Chapitres 3, 4 et 6 | Personne B |
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
│   ├── animations.js    IntersectionObserver, GSAP + ScrollTrigger
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
| `maison.svg` | 5 | Produit pour la démo | Démo Web 5 | : | Groupes nommés pour GSAP |
| Données météo | 4 | [Open-Meteo](https://open-meteo.com/) | Open-Meteo | CC BY 4.0 | : |

Texte librement adapté de *Le Petit Chaperon rouge*, de Charles Perrault (1697), domaine public.

Librairies : [GSAP](https://gsap.com/) et ScrollTrigger, [Vue.js](https://vuejs.org/) (par CDN). Police : Poppins (Google Fonts).
