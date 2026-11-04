# Cours 10.1
<!-- mer. 4 nov. -->

<div class="class-content-link">
  <img src="assets/IA-restreinte.png">
  <span class="sidetext">Utilisation de l'IA restreinte : permise <strong>seulement pour créer vos médias</strong>. Le code, c'est vous! <a class="lien-details" href="projets/recit-defilant/index.html#ia">Détails</a></span>
</div>

<div class="grid" markdown>

<div class="card" markdown>
:material-animation-play-outline: __GSAP : tweens (interpolations) et timelines__

---

Animer une chose, puis enchaîner : le pont depuis Anime.js.

[:octicons-arrow-right-24: La référence](js/gsap-bases.md){ .stretched-link }
</div>

<div class="card" markdown>
:material-gesture-swipe-vertical: __GSAP : ScrollTrigger__

---

Déclencher, suivre le défilement, épingler une scène.

[:octicons-arrow-right-24: La référence](js/gsap-scrolltrigger.md){ .stretched-link }
</div>

<div class="card" markdown>
:material-eye-outline: __IntersectionObserver__

---

Déclencher une action une seule fois : un `fetch`, une classe.

[:octicons-arrow-right-24: La référence](js/intersection-observer.md){ .stretched-link }
</div>

</div>

## Aujourd'hui

- [ ] Pourquoi GSAP, si le CSS sait déjà animer au défilement?
- [ ] Les tweens (interpolations) : exercice Zombi
- [ ] La timeline : exercice Magie
- [ ] ScrollTrigger : exercice la magie au défilement
- [ ] IntersectionObserver : déclencher une fois
- [ ] Dans votre projet : vos premières scènes GSAP

## 1. :material-scale-balance:  Pourquoi GSAP?

Vous savez animer au défilement en CSS. GSAP sert pour ce que le CSS fait mal : **enchaîner** une séquence, **épingler** une scène, fonctionner **partout** (Firefox compris), et déclencher du JavaScript au bon moment.

La règle du cours : **le CSS d'abord**, GSAP quand le CSS ne suffit pas.

Dans la démo du Petit Chaperon rouge : 

- la forêt (chapitre 3) et la maison (chapitre 6) sont des scènes GSAP épinglées;
- le loup (chapitre 4) se dessine avec DrawSVG, un extension de GSAP.

## 2. :material-animation-play-outline:  Les tweens (interpolations)

`gsap.to()`, `from()`, `fromTo()`, `set()` : une cible, des propriétés, des paramètres. Vous connaissez déjà le principe avec Anime.js.

[:material-animation-play-outline: GSAP : tweens et timelines](js/gsap-bases.md){ .md-button .md-button--primary }
[:material-pencil-ruler: Exercice : Zombi](exercices/ex-gsap-zombi/index.md){ .md-button }

## 3. :material-timeline-outline:  La timeline

Enchaîner plusieurs tweens, comme un scénario, et régler le moment de chacun avec le paramètre de position.

[:material-timeline-outline: La timeline](js/gsap-bases.md#la-timeline){ .md-button .md-button--primary }
[:material-pencil-ruler: Exercice : Magie](exercices/ex-gsap-magie/index.md){ .md-button }

## 4. :material-gesture-swipe-vertical:  ScrollTrigger

On accroche la timeline au défilement : `start`, `end`, `markers`, puis `scrub` et `pin`. Vous reprenez **votre** timeline de Magie : vous ne la réécrivez pas, vous lui ajoutez un `scrollTrigger`.

[:material-gesture-swipe-vertical: GSAP : ScrollTrigger](js/gsap-scrolltrigger.md){ .md-button .md-button--primary }
[:material-pencil-ruler: Exercice : la magie au défilement](exercices/ex-gsap-magie-defilement/index.md){ .md-button }

## 5. :material-eye-outline:  IntersectionObserver

Pas pour animer : pour **déclencher une action**, une seule fois. C'est la bonne façon de lancer le `fetch` de votre dataviz quand le visiteur arrive au chapitre.

[:material-eye-outline: IntersectionObserver : déclencher une fois](js/intersection-observer.md){ .md-button }

## 6. :material-account-multiple-outline:  Dans votre projet

**En équipe, puis chacun dans ses chapitres.**

1. **Ensemble, sur `main`** : dans `index.html`, les balises de GSAP et de ScrollTrigger, **avant** `main.js`. Dans `main.js`, `gsap.registerPlugin(ScrollTrigger);`, une seule fois, avant d'appeler les `animate()`.
2. **Chacun, sur sa branche** : dans la fonction `animate()` d'un de vos chapitres, une première animation GSAP, dans `gsap.matchMedia()`. Le modèle est dans [Dans votre récit : un module de chapitre](js/gsap-scrolltrigger.md#dans-votre-recit).
3. Rappel des garde-fous : **au plus 2 sections épinglées** dans tout le récit, et au moins une animation de chaque technique (CSS au défilement, GSAP + ScrollTrigger, IntersectionObserver).

[:material-file-tree: Arborescence du dépôt](projets/recit-defilant/arborescence-recit-defilant.md){ .md-button }

## Devoirs

<div class="class-content-link">
  <img src="assets/IA-restreinte.png">
  <span class="sidetext">Utilisation de l'IA restreinte : permise <strong>seulement pour créer vos médias</strong>. Le code, c'est vous! <a class="lien-details" href="projets/recit-defilant/index.html#ia">Détails</a></span>
</div>

### D'ici le ven. 6 nov. (cours 10.2)

#### Terminez les exercices, chacun dans son dépôt Classroom 50

- [Exercice : Zombi](exercices/ex-gsap-zombi/index.md);
- [Exercice : Magie](exercices/ex-gsap-magie/index.md);
- [Exercice : la magie au défilement](exercices/ex-gsap-magie-defilement/index.md).

#### Et dans votre projet

<!-- MM : à confirmer, ce qui est attendu au point de contrôle formatif du 10.2. -->

- Chacun a au moins **une animation** dans ses chapitres, sur sa branche, fusionnée dans `main`.
- Le **point de contrôle (formatif)** du 10.2 : une rencontre d'équipe sur l'avancement.
