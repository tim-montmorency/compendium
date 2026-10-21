# La Terre bouge : démo de moment dataviz

Démo du cours Web 5 (Collège Montmorency) : deux moments dataviz au défilement, avec des données réelles.

## Lancer la démo

Le site charge ses données avec `fetch()` : ouvrez-le **par un serveur** (Live Server dans VS Code), pas par un double-clic sur `index.html`.

## Les deux moments

| Moment | Forme | Données | API |
|---|---|---|---|
| 1 | Un chiffre géant, puis un point par séisme (taille selon la magnitude) | Séismes de magnitude 2,5 et plus, 7 derniers jours | [USGS](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php), sans clé |
| 2 | Des barres qui poussent | Température maximale à Montréal, 7 prochains jours | [Open-Meteo](https://open-meteo.com/), sans clé |

## Les 4 étapes, dans `js/dataviz.js`

1. **Attendre** que le moment approche de l'écran : `IntersectionObserver`.
2. **Charger** les données : `fetch()`.
3. **Construire** la forme en HTML, avec des variables CSS (`--taille`, `--hauteur`, `--i`).
4. **Révéler** : ajouter la classe `.est-visible`. Les transitions CSS font l'animation.

Sans animation (`prefers-reduced-motion`), tout s'affiche directement.

## Structure

```
demo-dataviz/
├── index.html
├── css/style.css
└── js/dataviz.js
```
