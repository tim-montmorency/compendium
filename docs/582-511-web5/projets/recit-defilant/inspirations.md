# Le récit défilant : exemples et inspirations

<!-- MM : vérifier chaque lien avant le cours. Les sites anciens disparaissent ou cassent souvent. -->

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. Regardez ces exemples **avec des yeux de développeur** : pas seulement « c'est beau », mais **qu'est-ce qui bouge, et pourquoi à ce moment-là?**
2. Pour chaque exemple, repérez les **techniques du projet** : calques, section épinglée, animation liée au défilement, déclencheur, média animable, moment dataviz.
3. Gardez **2 ou 3 inspirations** pour votre concept, et notez-les dans votre journal : ce que vous empruntez, et ce que vous en ferez.

</div>

## Le récit défilant, en bref

Le terme anglais *scrollytelling* contracte *scroll* (défiler) et *storytelling* (raconter). Le principe : l'histoire avance au rythme du défilement. Le texte, les images, les sons, les vidéos et les données arrivent au moment où le lecteur les atteint.

La forme vient du journalisme. L'exemple fondateur est [*Snow Fall : The Avalanche at Tunnel Creek*](https://www.nytimes.com/projects/2012/snow-fall/index.html){ :target="_blank" }, publié par le **New York Times** en 2012. Depuis, on la retrouve dans les récits illustrés, les rapports annuels, les pages de produits et les sites promotionnels.

L'effet le plus connu est la **parallaxe** : des plans qui défilent à des vitesses différentes, pour créer une impression de profondeur. Mais un bon récit défilant ne se résume pas à ses effets : **chaque animation sert l'histoire**.

## Comment regarder un exemple

Ouvrez l'exemple sur un ordinateur, défilez **lentement**, puis remontez. Posez-vous ces questions :

| Ce que vous observez | La question à vous poser | La technique, dans votre projet |
|---|---|---|
| Des plans qui bougent à des vitesses différentes | Combien de calques? Lequel va le plus vite? | Image en calques, CSS au défilement |
| Une section qui reste figée pendant que des choses changent | Combien de temps reste-t-elle épinglée? | GSAP + ScrollTrigger, `pin` |
| Un mouvement qui avance et recule avec le défilement | L'animation suit-elle exactement mon doigt? | `scrub`, `animation-timeline` |
| Un élément qui apparaît d'un coup, une seule fois | Qu'est-ce qui le déclenche? | IntersectionObserver |
| Un personnage ou un objet qui s'anime image par image | Combien d'images? | Spritesheet |
| Un dessin qui se trace, une forme qui change | Quelles parties bougent séparément? | SVG préparé, DrawSVG |
| Un graphique, un chiffre, une donnée réelle | Qu'est-ce que la donnée ajoute à l'histoire? | Moment dataviz, `fetch()` |
| Un repère de progression, un menu de chapitres | Comment sait-on où on est dans le récit? | Composant Vue |

## Des histoires

<div class="grid" markdown>

<div class="card" markdown>
:material-sail-boat: __The Boat__

---

Une nouvelle adaptée en roman graphique défilant : dessins à l'encre, son, texte qui bouge. **La référence du genre.** À observer : comment le texte lui-même devient une animation.

[:octicons-arrow-right-24: sbs.com.au/theboat](https://www.sbs.com.au/theboat){ .stretched-link :target="_blank" }
</div>

<div class="card" markdown>
:material-teddy-bear: __The Bear and His Scarf__

---

Une histoire illustrée, simple et touchante. **Très proche de ce que vous pouvez réaliser en 8 semaines.** À observer : le rythme, une idée par écran.

[:octicons-arrow-right-24: thebearandhisscarf.com](https://thebearandhisscarf.com){ .stretched-link :target="_blank" }
</div>

<div class="card" markdown>
:material-fire: __Firestorm, The Guardian__

---

L'histoire d'une famille réfugiée sous un quai pendant un feu de forêt en Tasmanie (2013), racontée en chapitres avec photos, vidéo et son. À observer : comment le récit est découpé en chapitres, et comment chaque média ouvre une nouvelle étape.

[:octicons-arrow-right-24: theguardian.com](https://www.theguardian.com/world/interactive/2013/may/26/firestorm-bushfire-dunalley-holmes-family){ .stretched-link :target="_blank" }
</div>

<div class="card" markdown>
:material-snowflake: __Snow Fall__

---

Le pionnier (New York Times, 2012). Les effets ont vieilli, mais la structure est toujours un modèle. À observer : comment chaque média arrive **au bon moment** du texte.

[:octicons-arrow-right-24: nytimes.com](https://www.nytimes.com/projects/2012/snow-fall/index.html){ .stretched-link :target="_blank" }
</div>

</div>

## Des données qui racontent

Pour votre **moment dataviz** : les données ne sont pas un tableau ajouté à la fin, elles font avancer le récit.

<div class="grid" markdown>

<div class="card" markdown>
:material-chart-box-outline: __The Pudding__

---

Un site entier de récits défilants construits sur des données (musique, culture, société). **Le meilleur modèle pour votre moment dataviz.** À observer : un graphique qui se construit étape par étape.

[:octicons-arrow-right-24: pudding.cool](https://pudding.cool/){ .stretched-link :target="_blank" }
</div>

<div class="card" markdown>
:material-earth: __Pixel Space__

---

Le système solaire à l'échelle, où **un pixel vaut la taille de la Lune**. À observer : le défilement lui-même devient la mesure. Une idée simple, un effet énorme.

[:octicons-arrow-right-24: joshworth.com](https://joshworth.com/dev/pixelspace/pixelspace_solarsystem.html){ .stretched-link :target="_blank" }
</div>

<div class="card" markdown>
:material-chart-line: __COVID-19 en Afrique, Fondation Mo Ibrahim__

---

Un rapport de recherche transformé en récit. À observer : comment un graphique est introduit, expliqué, puis commenté.

[:octicons-arrow-right-24: mo.ibrahim.foundation](https://mo.ibrahim.foundation/our-research/data-stories/covid-19-africa-challenging-road-recovery){ .stretched-link :target="_blank" }
</div>

<div class="card" markdown>
:material-calendar-star: __Bilan 2021, Pine Cove__

---

Un rapport annuel d'organisme en récit défilant. À observer : des chiffres qui deviennent des moments forts plutôt qu'un tableau.

[:octicons-arrow-right-24: stories.pinecove.com](https://stories.pinecove.com/2021-recap/){ .stretched-link :target="_blank" }
</div>

</div>

## Des techniques à décortiquer

<div class="grid" markdown>

<div class="card" markdown>
:material-image-filter-hdr: __Firewatch__

---

Un paysage en calques qui défilent à des vitesses différentes. **Exactement le média animable « image en calques ».** À observer : combien de plans, et lequel va le plus vite.

[:octicons-arrow-right-24: firewatchgame.com](https://www.firewatchgame.com/){ .stretched-link :target="_blank" }
</div>

<div class="card" markdown>
:material-headphones: __AirPods Pro, Apple__

---

Un produit qui tourne et se démonte au défilement : une **séquence d'images** pilotée par le scroll. C'est le cousin de la spritesheet. À observer : les sections épinglées.

[:octicons-arrow-right-24: apple.com](https://www.apple.com/airpods-pro/){ .stretched-link :target="_blank" }
</div>

<div class="card" markdown>
:material-codepen: __Parallaxe, CodePen d'isladjan__

---

Un paysage animé au défilement, **avec son code ouvert**. À observer : ouvrez les onglets HTML, CSS et JS, et repérez comment les calques sont construits.

[:octicons-arrow-right-24: codepen.io](https://codepen.io/isladjan/pen/abdyPBw){ .stretched-link :target="_blank" }
</div>

<div class="card" markdown>
:material-star-shooting-outline: __La vitrine de GSAP__

---

Des sites primés faits avec GSAP, la librairie que vous utiliserez. À observer : choisissez un site, défilez lentement, et repérez les sections épinglées et les animations liées au défilement (ScrollTrigger).

[:octicons-arrow-right-24: gsap.com/showcase](https://gsap.com/showcase/){ .stretched-link :target="_blank" }
</div>

<div class="card" markdown>
:material-book-open-page-variant-outline: __Introduction au scrollytelling, Shorthand__

---

Un récit défilant qui explique les récits défilants. À observer : les grands types de mise en page (plein écran, texte par-dessus l'image, image épinglée).

[:octicons-arrow-right-24: shorthand.com](https://shorthand.com/the-craft/an-introduction-to-scrollytelling/index.html){ .stretched-link :target="_blank" }
</div>

<div class="card" markdown>
:material-language-css3: __scroll-driven-animations.style__

---

Des démos des animations CSS pilotées par le défilement (`animation-timeline`, `scroll()`, `view()`), par l'équipe de Chrome. **La technique de la parallaxe en CSS, sans librairie.**

[:octicons-arrow-right-24: scroll-driven-animations.style](https://scroll-driven-animations.style/){ .stretched-link :target="_blank" }
</div>

</div>

## Démo ancien étudiants présentés en classe

### Lilo

[Lilo](https://cmontmorency365-my.sharepoint.com/:v:/g/personal/mariem_ouellet_cmontmorency_qc_ca/IQA5NPFFkjFgTr9QNkn2yV1aAccrS5dJDtznjA9LfrGWfgE?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=0VNkqU)


<iframe src="https://cmontmorency365-my.sharepoint.com/personal/mariem_ouellet_cmontmorency_qc_ca/_layouts/15/embed.aspx?UniqueId=45f13439-3192-4e60-bf50-3649f6c95d5a&embed=%7B%22hvm%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" width="1280" height="720" frameborder="0" scrolling="no" allowfullscreen title="demo-ancien-projet-lilo.mp4"></iframe>



!!! tip "Dans votre journal"
    Notez **2 ou 3 inspirations** : le lien, ce que vous en retenez, et comment vous l'adapterez à **votre** histoire. S'inspirer, ce n'est pas copier : on emprunte une idée de mise en scène, pas le contenu ni le design.
