# La parallaxe

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. La **parallaxe**, c'est l'illusion de profondeur créée quand des plans placés à des distances différentes **se déplacent à des vitesses différentes** : ce qui est loin bouge lentement, ce qui est proche bouge vite.
2. Sur le Web, c'est **le défilement qui fait bouger la « caméra »**. On découpe une scène en calques, et chaque calque défile à sa propre vitesse.
3. Bien dosée, elle donne de la profondeur et du rythme à un récit. Exagérée, elle étourdit : on la garde **subtile**, et on respecte **`prefers-reduced-motion`**.

</div>

## D'où vient le mot

Tendez le bras, levez le pouce, et regardez-le en fermant un œil, puis l'autre. Votre pouce semble sauter par rapport au mur du fond. Ce déplacement apparent, selon le point de vue, c'est la **parallaxe**.

Vous la vivez aussi en train ou en voiture : les poteaux au bord de la route défilent à toute vitesse, les arbres un peu plus loin passent plus lentement, et les montagnes à l'horizon semblent presque immobiles. **La vitesse apparente dit la distance.** C'est un des indices que votre cerveau utilise pour percevoir la profondeur.

## Avant le Web : l'animation et les jeux vidéo

- **Au cinéma d'animation** : dès les années 1930, les studios Disney utilisent la [caméra multiplane (en anglais)](https://en.wikipedia.org/wiki/Multiplane_camera){ :target="_blank" }, où les décors sont peints sur des plaques de verre superposées, à des distances différentes. En déplaçant les plaques à des vitesses différentes, une image plate prend de la profondeur.
- **Dans les jeux vidéo en 2D** : dans les jeux de plateforme à défilement horizontal, l'arrière-plan est composé de plusieurs bandes (le ciel, les montagnes, la forêt) qui défilent chacune à sa vitesse derrière le personnage.

Dans les deux cas, le principe est celui que vous allez coder : **des calques, et une vitesse par calque**.

## Sur le Web, au défilement

Sur une page, il n'y a pas de caméra : c'est **le défilement** qui la remplace. Quand le visiteur défile, tout le contenu monte à l'écran à la même vitesse. Pour créer la profondeur, on ralentit ou on accélère certains calques par rapport au défilement :

| Calque | Vitesse par rapport au défilement | Effet |
|---|---|---|
| Le fond (ciel, montagnes) | beaucoup plus lent | semble très loin |
| Les plans du milieu | un peu plus lent | semble à mi-distance |
| Le contenu (texte) | la même vitesse | le plan de référence |
| L'avant-plan (feuillage, objets) | plus rapide | semble passer tout près |

On rencontre surtout trois formes :

1. **L'arrière-plan lent** : une seule image de fond défile plus lentement que le texte. C'est la forme la plus simple, et la plus courante.
2. **La scène en calques** : une image découpée en plans (fond, milieu, avant), chacun à sa vitesse. C'est le **média animable « image en calques »** de votre récit défilant.
3. **La parallaxe au pointeur** : les calques bougent selon la position de la souris (ou l'inclinaison du téléphone) plutôt qu'au défilement. Même principe, autre déclencheur.

## Les bonnes pratiques

- **Subtile** : quelques pourcentages de différence de vitesse suffisent. Au-delà, la page « flotte » et le texte devient difficile à suivre.
- **Le texte reste stable** : on fait bouger le décor, pas ce qu'on doit lire.
- **Animer seulement `transform`** : jamais `top`, `margin` ou `background-position`, qui ralentissent la page.
- **`prefers-reduced-motion`** : pour les personnes sensibles au mouvement, la parallaxe peut causer des étourdissements ou des nausées. Avec le mouvement réduit, les calques restent immobiles.
- **Sur mobile** : moins de calques, des amplitudes plus petites, ou pas de parallaxe du tout.

## Des exemples

<!-- MM : The Boat se charge (vérifié). Keith Clark et la recherche CodePen non vérifiés par Claude : à tester. -->

- [Firewatch](https://www.firewatchgame.com/){ :target="_blank" } : le site du jeu. Défilez au tout début : six calques de paysage, du ciel jusqu'aux arbres du premier plan. Un classique de la scène en calques.
- [Paysage en parallaxe, de isladjan](https://codepen.io/isladjan/pen/abdyPBw){ :target="_blank" } (CodePen) : une scène de paysage animée au défilement, avec le code à côté.
- [Ballons dans le ciel](https://tim-montmorency.com/timdoc/582-424MO/gsap/exercices/gsap-scrollTrigger-parallax/images/ballons-parallax.mp4){ :target="_blank" } (vidéo) : un ancien exercice du programme, des ballons et des nuages à des vitesses différentes. Le même principe que votre exercice.
- [The Goonies](https://the-goonies.webflow.io/){ :target="_blank" } : un hommage au film. On plonge vers la côte, entre des plans qui défilent à des vitesses différentes.
- [Montagnes, forêt et nuages](https://parallax-bgsprod.webflow.io/){ :target="_blank" } : un exemple simple et très propre de scène en calques. Proche de ce que vous ferez.
- [The Boat](https://www.sbs.com.au/theboat/){ :target="_blank" } (SBS, Australie) : un roman graphique interactif, avec du son. Les dessins sont découpés en plans qui glissent à des vitesses différentes : la parallaxe au service d'un récit défilant.
- [Une parallaxe en CSS pur, de Keith Clark](https://keithclark.co.uk/articles/pure-css-parallax-websites/demo3/){ :target="_blank" } : une démo sans JavaScript. Ouvrez les outils de développement pour voir les calques.


## Le faire en CSS

[:material-code-tags: La technique : un classique, le parallax](animations-scroll.md#un-classique-le-parallax){ .md-button .md-button--primary }
[:material-pencil-ruler: Exercice : la parallaxe en calques](exercice-parallaxe.md){ .md-button }
