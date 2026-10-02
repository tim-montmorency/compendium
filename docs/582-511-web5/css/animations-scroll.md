# Animations pilotées par le défilement (CSS)

!!! abstract "L'essentiel en 3 points"
    1. Une animation CSS normale avance avec le **temps** (`2s`, `500ms`). Avec `animation-timeline`, elle avance avec le **défilement** : on fait défiler, l'animation progresse; on remonte, elle recule.
    2. Deux timelines à connaître : `scroll()` suit le défilement de **toute la page**, `view()` suit la visibilité d'**un élément** dans l'écran.
    3. Toujours envelopper dans `@supports` (tous les navigateurs ne suivent pas encore) et dans `prefers-reduced-motion` (respecter les personnes qui demandent moins de mouvement).

[:material-play-circle: Voir la démo](demo-animations-scroll.html){ .md-button .md-button--primary :target="_blank" }

Faites défiler la démo, puis ouvrez l'inspecteur : tout le CSS est dans la page, commenté exemple par exemple.

## Ce que vous savez déjà

Vous connaissez les animations CSS depuis Web 2 : des `@keyframes`, puis la propriété `animation` sur l'élément.

```css
@keyframes reveal {
  from { opacity: 0; transform: translateY(60px); }
  to   { opacity: 1; transform: translateY(0); }
}

.card {
  animation: reveal 1s ease-out;
}
```

Ici, l'animation dure 1 seconde et démarre au chargement de la page, que la carte soit visible ou non.

Pour déclencher une animation au défilement, vous avez peut-être déjà utilisé du JavaScript : un écouteur `scroll`, ou un `IntersectionObserver`, puis une classe ajoutée à l'élément. Le CSS moderne fait maintenant ça **seul**, sans une ligne de JavaScript.

## Le principe : remplacer le temps par le défilement

On garde exactement les mêmes `@keyframes`. On change seulement ce qui fait avancer l'animation :

```css
.card {
  animation: reveal linear both;
  animation-timeline: view();
}
```

| Propriété | Rôle |
|---|---|
| `animation: reveal linear both` | Le nom des keyframes. **Pas de durée** : c'est le défilement qui décide. `linear` pour que l'animation suive le défilement sans accélération, `both` pour garder l'état de départ avant et l'état final après. |
| `animation-timeline: view()` | Ce qui fait avancer l'animation : ici, la visibilité de la carte dans l'écran. |

!!! danger "`animation-timeline` toujours **après** `animation`"
    Le raccourci `animation` remet `animation-timeline` à sa valeur par défaut (le temps). Si vous l'écrivez après, votre `animation-timeline` est annulée sans message d'erreur, et l'animation joue au chargement comme avant.

## Les deux timelines

### `scroll()` : le défilement de la page

L'animation va de 0 % (en haut de la page) à 100 % (en bas de la page). Idéal pour un élément **fixe** qui réagit à la lecture : une barre de progression, un en-tête qui change.

```css
.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6px;
  background: var(--color-accent);
  transform-origin: left;
  transform: scaleX(0);
}

@keyframes grow {
  to { transform: scaleX(1); }
}

.progress-bar {
  animation: grow linear both;
  animation-timeline: scroll();
}
```

### `view()` : la visibilité d'un élément

Chaque élément a **sa propre** timeline : elle commence quand il entre dans l'écran par le bas, et se termine quand il en sort par le haut. Idéal pour faire apparaître vos cartes de projets, des images, des titres.

```css
.project-card {
  animation: reveal linear both;
  animation-timeline: view();
}
```

!!! tip "Ça fonctionne aussi avec vos cartes générées en JavaScript"
    Le CSS s'applique à tous les éléments qui ont la classe, même ceux ajoutés par `innerHTML` après le `fetch()`. Aucune modification à votre `main.js`.

## Choisir quand l'animation joue : `animation-range`

Par défaut, une animation `view()` s'étire sur **tout** le trajet de l'élément dans l'écran : elle serait à moitié faite quand la carte est au milieu. En général, on veut que l'apparition soit **terminée** dès que l'élément est entré.

```css
.project-card {
  animation: reveal linear both;
  animation-timeline: view();
  animation-range: entry 0% entry 100%;
}
```

| Plage | Moment |
|---|---|
| `entry` | Pendant que l'élément **entre** dans l'écran (par le bas) |
| `exit` | Pendant qu'il **sort** de l'écran (par le haut) |
| `cover` | Tout le trajet, de sa première apparition à sa disparition complète |
| `contain` | Pendant qu'il est **entièrement** visible |

Les pourcentages précisent le début et la fin : `entry 0% entry 100%` = du tout début à la toute fin de l'entrée.

!!! tip "Une apparition plus visible : `contain`"
    Avec `entry 0% entry 100%`, la carte apparaît pendant qu'elle entre, dès qu'on en voit le premier pixel : l'effet est discret, parfois terminé avant qu'on le remarque. Pour un effet plus évident :

    ```css
    animation-range: contain 0% contain 40%;
    ```

    La carte attend d'être **entièrement** visible, puis apparaît sur une courte distance de défilement. C'est la version utilisée dans l'exemple 2 de la démo. Essayez les deux et comparez.

Pour tester différentes plages visuellement : [View Progress Timeline : Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/){ :target="_blank" }.

## Un classique : le parallax

Le **parallax**, c'est l'illusion de profondeur : l'arrière-plan défile **plus lentement** que le contenu, comme un paysage au loin vu d'une voiture. En CSS, on anime l'arrière-plan dans le **même sens** que le défilement : il « recule » à l'écran, donc il semble plus lent.

```css
.parallax {
  position: relative;
  /* surtout pas hidden (voir le piège ci-dessous) */
  overflow: clip;
  /* on nomme la timeline de la section */
  view-timeline-name: --parallax;
}

.parallax__bg {
  position: absolute;
  /* plus grand que la section : de la marge pour bouger */
  inset: -25% 0;
}

@keyframes parallax {
  from { transform: translateY(-20%); }
  to   { transform: translateY(20%); }
}

.parallax__bg {
  animation: parallax linear both;
  /* l'arrière-plan suit la visibilité de la SECTION */
  animation-timeline: --parallax;
}
```

Nouveauté ici : `view-timeline-name`. Au lieu que l'arrière-plan suive sa propre visibilité, on donne un nom à la timeline de la **section**, et l'arrière-plan l'utilise. Le contenu, lui, n'a aucune animation : il défile normalement. Plusieurs couches avec des amplitudes différentes (`20%`, `10%`...) donnent encore plus de profondeur : voir l'exemple 5 de la démo.

!!! danger "Piège : `overflow: hidden` sur un parent"
    Un parent avec `overflow: hidden` (ou `auto`, `scroll`) devient un **conteneur de défilement**. `view()` et `scroll()` suivent alors ce conteneur, qui ne défile pas, au lieu de la page : l'animation reste figée, sans message d'erreur.

    Si vous devez couper ce qui dépasse (un arrière-plan de parallax, un grand texte qui glisse), utilisez **`overflow: clip`** : même effet visuel, sans créer de conteneur de défilement.

## Quoi animer? La performance

Pour une animation fluide, animez en priorité :

- `transform` (`translate`, `scale`, `rotate`);
- `opacity`;
- [`clip-path`](https://css-tricks.com/animating-with-clip-path/) et [`filter`](https://developer.mozilla.org/fr/docs/Web/CSS/Guides/Filter_effects), avec modération.

Évitez d'animer `width`, `height`, `top`, `margin`, etc. : ces propriétés forcent le navigateur à recalculer la mise en page à chaque image, et l'animation saccade.

## Deux règles obligatoires

### 1. `@supports` : tous les navigateurs ne suivent pas encore

Chrome, Edge et Safari (version 26 et plus) supportent les animations pilotées par le défilement. Firefox est en train de les ajouter : vérifiez l'état actuel sur [Can I use](https://caniuse.com/mdn-css_properties_animation-timeline){ :target="_blank" }.

!!! note "Tester dans Firefox"
    Dans la version courante de Firefox, la fonctionnalité existe mais est désactivée par défaut (elle est active seulement dans Firefox Nightly). Pour l'essayer sur votre poste : tapez `about:config` dans la barre d'adresse, cherchez `layout.css.scroll-driven-animations.enabled`, et mettez-la à `true`. Vos visiteurs, eux, n'auront pas ce réglage : d'où l'importance de `@supports`.

Dans un navigateur qui ne comprend pas `animation-timeline`, la ligne est ignorée : il reste `animation: reveal linear both`, une animation de **0 seconde**, donc aucun effet. Et si vous aviez placé l'état de départ directement sur l'élément (ex. `opacity: 0` sur la carte), la carte resterait **invisible**. On n'active donc les animations que si le navigateur les comprend :

```css
@supports (animation-timeline: scroll()) {
  .project-card {
    animation: reveal linear both;
    animation-timeline: view();
    animation-range: entry 0% entry 100%;
  }
}
```

Sans support : pas d'animation, mais un contenu parfaitement visible. C'est le bon compromis.

### 2. `prefers-reduced-motion` : respecter l'accessibilité

<div style="max-width: 640px"><div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;"><iframe src="https://cmontmorency365-my.sharepoint.com/personal/mariem_ouellet_cmontmorency_qc_ca/_layouts/15/embed.aspx?UniqueId=67cf1a3d-0060-44c0-b289-a5f91aa47e9a&embed=%7B%22hvm%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" width="640" height="360" frameborder="0" scrolling="no" allowfullscreen title="parametres-accessibilité-preferred-reduced-motion.mp4" style="border:none; position: absolute; top: 0; left: 0; right: 0; bottom: 0; height: 100%; max-width: 100%;"></iframe></div></div>

Certaines personnes activent, dans leur système, l'option « réduire les animations » : le mouvement peut leur causer des nausées ou des maux de tête. On la respecte en n'activant les animations que si elle n'est **pas** demandée :

```css
@supports (animation-timeline: scroll()) {
  @media (prefers-reduced-motion: no-preference) {
    .project-card {
      animation: reveal linear both;
      animation-timeline: view();
      animation-range: entry 0% entry 100%;
    }
  }
}
```

C'est le patron complet à retenir : **les keyframes à l'extérieur, l'activation à l'intérieur des deux conditions.**

!!! tip "Tester `prefers-reduced-motion` sans changer vos réglages"
    Dans Chrome : inspecteur (F12) → menu ⋮ → *More tools* → *Rendering* → *Emulate CSS media feature prefers-reduced-motion* → `reduce`.

## Idées pour votre portfolio

| Effet | Timeline | Keyframes |
|---|---|---|
| Cartes de projets qui apparaissent | `view()`, `entry 0% entry 100%` (discret) ou `contain 0% contain 40%` (plus visible) | `opacity` + `translateY` |
| Barre de progression de lecture | `scroll()` | `transform: scaleX()` |
| Image d'un projet qui se dévoile | `view()`, `entry 20% cover 50%` | `clip-path: inset()` |
| Grand titre qui glisse horizontalement | `view()` | `translateX` |
| Image qui grossit légèrement | `view()` | `transform: scale(0.9)` → `scale(1)` |
| Parallax sur une section d'en-tête | `view-timeline-name` sur la section | `translateY` sur l'arrière-plan |

Une ou deux animations bien choisies valent mieux que tout animer. Reliez-les aux idées d'animation que vous aviez notées dans votre `PLANIFICATION.md`, et documentez tout changement dans votre `JOURNAL.md`.

!!! note "Et GSAP?"
    Les animations CSS pilotées par le défilement couvrent la majorité des besoins d'un portfolio. Pour des scénarios plus complexes (épingler une section, enchaîner plusieurs animations dans une ligne du temps), on verra **GSAP et ScrollTrigger** dans le projet intégrateur.

## Références

- [Scroll-driven animations (MDN, en anglais)](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations){ :target="_blank" }
- [scroll-driven-animations.style](https://scroll-driven-animations.style/){ :target="_blank" } : démos et outils visuels, par un ingénieur de l'équipe Chrome
