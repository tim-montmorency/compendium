# :material-eye-outline:  IntersectionObserver : déclencher une fois

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
  rootMargin: "0px 0px -20% 0px",        // 20 % avant le bas de l'écran
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
- **`rootMargin`** : agrandit ou rétrécit la zone de l'écran. `"0px 0px -20% 0px"` : il faut que l'élément monte de 20 % dans l'écran. `"0px 0px 50% 0px"` : il se déclenche une demi-hauteur d'écran **avant** d'entrer (pratique pour charger des données d'avance).

<iframe src="https://tim-montmorency.com/Fragment/v/?f=w5-intersection-observer&onglets=js,css,resultat&modifiable=1&boutons=rejouer,ouvrir" style="width:100%;height:850px;border:0" loading="lazy"></iframe>

## Dans votre récit

Dans la démo du Petit Chaperon rouge, le fichier commun `js/outils.js` contient une petite fonction réutilisable, et le chapitre 5 s'en sert pour charger la météo seulement quand le chapitre approche :

```js
// js/outils.js
export function observerUneFois(element, action, marge = "0px") {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      action(entry.target);
      observer.unobserve(entry.target);
    });
  }, { rootMargin: marge });
  observer.observe(element);
}
```

```js
// js/chapitres/ch-05.js
import { observerUneFois } from "../outils.js";

export function animate(section, chapitre) {
  const meteo = section.querySelector(".meteo");
  const lieu = chapitre.contenu.lieu;
  // Le fetch part une demi-hauteur d'écran AVANT le chapitre
  observerUneFois(
    meteo,
    (el) => afficherMeteo(el, lieu),
    "0px 0px 50% 0px"
  );
}
```

!!! tip "Et avec ScrollTrigger?"
    `ScrollTrigger.create({ trigger, onEnter, once: true })` fait la même chose. Si vous chargez déjà GSAP, les deux conviennent. L'`IntersectionObserver` a l'avantage de fonctionner sans librairie, et de continuer à fonctionner avec le mouvement réduit (vos données doivent se charger même si rien ne bouge).

## Références

- [IntersectionObserver (MDN)](https://developer.mozilla.org/fr/docs/Web/API/Intersection_Observer_API){ :target="_blank" }
