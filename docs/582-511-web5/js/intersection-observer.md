# **JavaScript** :material-eye-outline:  Intersection Observer: déclencher 1 fois

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. Un **`IntersectionObserver`** surveille des éléments, et appelle votre fonction quand l'un d'eux **entre dans l'écran** (ou en sort).
2. Il ne sert pas à animer au défilement (le CSS et GSAP le font), mais à **déclencher une action** au bon moment : ajouter une classe, lancer un `fetch`, démarrer une vidéo.
3. Pas de librairie : c'est du JavaScript natif, dans tous les navigateurs.

</div>

## Quand l'utiliser?

| Besoin | L'outil |
|---|---|
| Une animation qui suit le défilement | CSS (`animation-timeline`) ou GSAP (`scrub`) |
| Une scène épinglée, une séquence | GSAP + ScrollTrigger |
| **Une action, une seule fois** : charger les données de la dataviz quand le chapitre approche | **IntersectionObserver** |
| Ajouter une classe quand un élément est visible (la transition est en CSS) | IntersectionObserver |

Dans votre récit, c'est la façon recommandée de lancer le **`fetch` externe** de votre dataviz : seulement quand le visiteur arrive au chapitre, pas au chargement de la page.

## Le code

```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;   // pas encore visible

    entry.target.classList.add("is-loaded");
    // ou : loadWeather(entry.target);

    observer.unobserve(entry.target);    // une seule fois
  });
}, {
  threshold: 1,                          // visible à 100 %
});

document.querySelectorAll(".card").forEach((card) => {
  observer.observe(card);
});
```

Les morceaux :

- **`new IntersectionObserver(fonction, options)`** : la fonction reçoit un tableau `entries`, une entrée par élément dont la visibilité a changé.
- **`entry.isIntersecting`** : `true` si l'élément est dans l'écran.
- **`entry.target`** : l'élément lui-même.
- **`observer.unobserve()`** : on arrête de le surveiller. C'est ce qui fait « une seule fois ».
- **`threshold`** : la part de l'élément qui doit être visible. `0` (par défaut) : dès le premier pixel. `0.5` : la moitié. `1` : l'élément au complet.
- **`rootMargin`** : agrandit ou rétrécit la zone de l'écran. `"0px 0px -20% 0px"` : il faut que l'élément monte de 20 % dans l'écran. `"0px 0px 50% 0px"` : il se déclenche une demi-hauteur d'écran **avant** d'entrer (pratique pour charger des données d'avance).

<iframe src="https://tim-montmorency.com/Fragment/v/?f=w5-intersection-observer&onglets=js,html,css,resultat&modifiable=1&boutons=rejouer,ouvrir" style="width:100%;height:850px;border:0" loading="lazy"></iframe>

## Dans votre récit { #dans-votre-recit }

Dans la démo du Petit Chaperon rouge, le fichier commun `js/utils.js` contient une petite fonction réutilisable, et le chapitre 5 s'en sert pour charger la météo seulement quand le chapitre approche :

```js
// js/utils.js
// Appelle callback une seule fois, quand element entre dans l'écran.
// margin (facultatif) : agrandit la zone de l'écran, comme rootMargin.
export function observeOnce(element, callback, margin = "0px") {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // Pas encore visible : on attend
      if (!entry.isIntersecting) return;
      // Visible : on lance la fonction reçue, avec l'élément
      callback(entry.target);
      // On arrête de le surveiller : une seule fois
      observer.unobserve(entry.target);
    });
  }, { rootMargin: margin });
  // On commence à surveiller l'élément
  observer.observe(element);
}
```

```js
// js/chapitres/ch-05.js
import { observeOnce } from "../utils.js";

// main.js appelle animate() une fois le chapitre dans la page
export function animate(section, chapter) {
  // L'élément où afficher la météo, dans la section du chapitre
  const weather = section.querySelector(".meteo");
  // Le lieu, lu dans data.json : chapter.contenu.lieu
  const place = chapter.contenu.lieu;

  // showWeather() : une fonction du chapitre, qui contient le fetch()
  // vers l'API météo, puis affiche le résultat dans el
  // Rappel, dans utils.js : observeOnce(element, callback, margin)
  observeOnce(
    weather,                          // element : l'élément à surveiller
    (el) => showWeather(el, place),   // callback : le fetch, une fois
    "0px 0px 50% 0px"                 // margin : margin-bottom de 50 %
  );
}
```

??? example "Voir la vidéo de la démo du Petit Chaperon rouge"
    <video class="w-100" src="../projets/recit-defilant/assets/demo-chaperon-defilement.webm" controls muted playsinline preload="none" aria-label="La démo du Petit Chaperon rouge, en défilement, du premier au dernier chapitre"></video>

!!! tip "Et avec ScrollTrigger?"
    `ScrollTrigger.create({ trigger, onEnter, once: true })` fait la même chose. Si vous chargez déjà GSAP, les deux conviennent. L'`IntersectionObserver` a l'avantage de fonctionner sans librairie, et de continuer à fonctionner avec le mouvement réduit (vos données doivent se charger même si rien ne bouge).

## Références

- [IntersectionObserver (MDN)](https://developer.mozilla.org/fr/docs/Web/API/Intersection_Observer_API){ target="_blank" }
