# :material-pencil-ruler:  Exercice : la parallaxe en calques

<video class="w-100" src="assets/apercu-resultat.mp4" autoplay muted loop playsinline aria-label="Aperçu du résultat : on descend du ciel jusqu'aux champs, les nuages, les montgolfières et les collines défilent chacun à sa vitesse"></video>

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. Toute la page est une scène : on descend du ciel jusqu'aux champs, à travers **13 calques** (nuages, montgolfières, collines, sol). Chaque calque a une **classe de profondeur** (`loin`, `proche`...). Rien ne bouge encore.
2. Vous faites défiler chaque profondeur **à sa propre vitesse**, en CSS, au rythme du défilement de **toute la page** (`scroll()`), selon la règle : **plus c'est loin, plus on compense le défilement**.
3. C'est exactement ce que vous ferez avec votre média animable « image en calques ».

</div>

**Seul, environ 40 minutes.** Pour le principe et des exemples, voyez [La parallaxe](../../css/parallaxe.md). Gardez aussi la section [Le faire en CSS](../../css/parallaxe.md#en-css) ouverte à côté, et jouez avec le [Labo parallaxe](../../css/labo-parallaxe.html){ :target="_blank" } : c'est le même principe.

## Obtenir votre dépôt (5 min)

**[Accepter l'exercice dans Classroom 50](https://classroom50.org/apprendre-avec-mariemi/w5/assignments/exercice-parallaxe/accept?k=rthn1z36){ :target="_blank" }**

1. Ouvrez le lien ci-dessus, connectez-vous avec **Sign in with GitHub**, puis acceptez l'exercice.
2. Quand le dépôt est prêt, **clonez**-le sur votre poste et ouvrez-le dans VS Code.
3. Ouvrez `index.html` avec **Live Server**, et défilez : la scène est en place, mais tout défile d'un bloc, comme une image plate.

Le dépôt contient :

- `index.html` : la page, avec la scène et ses calques;
- `css/style.css` : la mise en place des calques, et la place pour vos réponses de la partie 1;
- `assets/images/` : les images des calques, en SVG.

## Le principe, en une phrase

Quand on défile, tout monte à l'écran. Un calque qu'on **descend** pendant ce temps (`translateY` positif) semble monter **moins vite** : il paraît plus loin. Plus on le descend, plus il paraît loin. Un calque qu'on **monte** (`translateY` négatif) monte **plus vite** que la page : il paraît tout près.

Dans le HTML, la 2e classe de chaque calque dit sa profondeur :

```text
profondeur     calques                               compensation
tres-loin      nuages lointains, collines au loin    beaucoup
loin           petite montgolfière, collines         un peu moins
milieu         nuages, montgolfière bleue            encore moins
proche         montgolfière rouge, montgolfière      très peu
               bleue du bas
devant         le gros nuage                         à l'envers : il monte
                                                     plus vite que la page
premier-plan   la montgolfière géante                à l'envers, encore
                                                     plus vite
(aucune)       le sol                                aucune : il défile
                                                     avec la page
```

L'effet se voit surtout **là où les calques se croisent** : les montgolfières qui passent devant les collines, le gros nuage qui passe devant la montgolfière rouge, la montgolfière géante qui traverse tout.

## Partie 1 : lire la scène (5 min)

Dans le commentaire prévu en haut de `css/style.css`, répondez :

1. Dans quel ordre les calques sont-ils empilés? Qu'est-ce qui décide lequel passe devant l'autre?
2. Pourquoi la petite montgolfière du ciel (`calque--ballon-loin`) est-elle si petite, et la montgolfière géante (`calque--ballon-geant`) si grande?
3. Repérez la propriété de `.scene` qui va empêcher votre animation de fonctionner. Que faut-il mettre à la place? (Relisez [le piège de `overflow: hidden`](../../css/animations-scroll.md#piege-overflow).)

## Partie 2 : animer les calques (20 min)

Ici, la scène **est** la page : on n'a pas besoin de nommer sa timeline. Les calques suivent le défilement de toute la page, avec `scroll()` : 0 % tout en haut, 100 % tout en bas.

- [ ] Corrigez le piège de la partie 1.
- [ ] Reliez **tous** les calques au défilement de la page : `animation-timeline: scroll();` sur `.calque`.
- [ ] Créez **une animation par profondeur** (`@keyframes tres-loin`, `loin`, `milieu`, `proche`), qui fait descendre le calque pendant qu'on défile : de `translateY(0)` à `translateY(X)`.
- [ ] Appliquez-la avec la classe de profondeur : `.loin { animation-name: loin; }`. Une seule règle anime tous les calques de cette profondeur.
- [ ] Utilisez les amplitudes proposées dans le tableau ci-dessous. Vous pourrez les ajuster ensuite, si vous avez le temps.
- [ ] Les profondeurs `devant` et `premier-plan` vont **à l'envers** : de `translateY(0)` à `translateY(-X)`. Le premier plan, encore plus vite que `devant`.

**Vérifiez** : défilez lentement. Les nuages lointains et l'horizon semblent loin, la montgolfière géante passe en coup de vent, les trois bandes de collines glissent les unes sur les autres, le sol suit la page.

Les amplitudes proposées, pour gagner du temps :

| Profondeur | Fin de l'animation (`to`) | Vitesse à l'écran, comparée à la page |
|---|---|---|
| `tres-loin` | `translateY(100vh)` | 50 % : très lent |
| `loin` | `translateY(60vh)` | 70 % |
| `milieu` | `translateY(35vh)` | environ 80 % |
| `proche` | `translateY(12vh)` | environ 95 % |
| `devant` | `translateY(-40vh)` | 120 % : plus vite que la page |
| `premier-plan` | `translateY(-110vh)` | environ 155 % : en coup de vent |
| le sol | aucune animation | 100 % : la référence |

Chaque animation commence à `translateY(0)` (`from`).

!!! tip "Pourquoi des `vh`, et pourquoi si grandes?"
    Un pourcentage dans `translateY` se calcule sur la hauteur **du calque lui-même** : `20%` d'une petite montgolfière, c'est presque rien; `20%` d'une bande de collines, c'est beaucoup. Avec des `vh`, toutes les amplitudes se comparent directement.

    La page fait `300vh` : on défile donc de `200vh` (300vh moins la hauteur de l'écran). Un calque qui descend de `100vh` pendant ce temps monte deux fois moins vite que la page. Un calque qui bouge de `5vh`, ça ne se voit presque pas.

!!! info "`scroll()` ou une timeline nommée?"
    Dans votre récit, un chapitre est **une section parmi d'autres** : ses calques suivront la visibilité de **la section**, avec une [timeline nommée](../../css/parallaxe.md#en-css) (`view-timeline-name`), comme dans le [Labo parallaxe](../../css/labo-parallaxe.html){ :target="_blank" }. Ici, la scène occupe toute la page : le défilement de la page, `scroll()`, suffit.

## Partie 3 : les deux règles obligatoires (5 min)

- [ ] **`@supports`** : les animations ne s'appliquent que si le navigateur comprend `animation-timeline`. Sinon, la scène reste fixe, et tout est lisible.
- [ ] **`prefers-reduced-motion`** : avec le mouvement réduit, aucun calque ne bouge.

Pour tester `prefers-reduced-motion` : dans Chrome, inspecteur → menu **⋮** → **More tools** → **Rendering** → *Emulate CSS media feature prefers-reduced-motion*.

## Bonus : les montgolfières décollent (10 min)

*Facultatif, pour ceux qui veulent aller plus loin.*

Le titre dit que les montgolfières « quittent le sol ». Faites-le voir :

- [ ] La montgolfière rouge (`calque--montgolfiere-1`) **monte** pendant le défilement, plus vite que la page : elle va dans l'autre sens que les autres calques.
- [ ] Elle **se balance** légèrement en montant (une petite rotation, quelques degrés).
- [ ] Les nuages **dérivent** un peu vers la droite, poussés par le vent.

Indices :

- `transform` peut combiner plusieurs fonctions.
- Pensez à `transform-origin` pour la rotation : une montgolfière se balance depuis le haut, pas depuis son centre.
- La montgolfière rouge a déjà l'animation `proche`. Écrivez votre règle `.calque--montgolfiere-1` **après** celle de `.proche` : à spécificité égale, la dernière règle gagne.

## Vos *commits* et la remise

Un *commit* à la **fin de chaque partie**, puis *push* :

```text
Partie 1 : répond aux questions
Partie 2 : anime les calques au défilement
Partie 3 : ajoute @supports et le mouvement réduit
Bonus : fait monter les montgolfières
```

La dernière ligne est **facultative** : seulement si vous avez fait le bonus.

!!! warning "Pour remettre : un *push* sur `main`"
    Votre exercice est **remis** seulement quand vos *commits* sont **poussés** (*push*) sur la branche `main` de votre dépôt Classroom 50. Un *commit* qui reste sur votre poste, je ne le vois pas, et l'exercice compte comme non fait.

    **Vérifiez** : sur github.com, ouvrez votre dépôt. Votre dernier *commit* apparaît en haut de la liste des fichiers.

C'est un exercice de pratique, non noté. Je vois votre dépôt et vos *commits* dans Classroom 50. Gardez-le : il vous servira de référence pour votre média animable.

!!! info "Pas d'IA"
    Comme dans votre projet, Copilot est désactivé dans ce dépôt (`.vscode/settings.json`). Le code, c'est vous!
