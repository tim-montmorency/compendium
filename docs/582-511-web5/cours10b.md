# Cours 10.2
<!-- ven. 6 nov. -->

<div class="class-content-link">
  <img src="assets/IA-restreinte.png">
  <span>Utilisation de l'IA restreinte : permise <strong>seulement pour créer vos médias</strong>. Le code, c'est vous! <a class="lien-details" href="projets/recit-defilant/index.html#ia">Détails</a></span>
</div>

<div class="grid" markdown>

<div class="card" markdown>
:material-flag-checkered: __Le point de contrôle__

---

La liste complète de ce qui est attendu aujourd'hui.

[:octicons-arrow-right-24: Le point de contrôle](projets/recit-defilant/index.md#point-de-controle){ .stretched-link }
</div>

<div class="card" markdown>
:material-eye-outline: __IntersectionObserver__

---

Déclencher une action une seule fois : un `fetch`, une classe.

[:octicons-arrow-right-24: La référence](js/intersection-observer.md){ .stretched-link }
</div>

<div class="card" markdown>
:material-movie-open-outline: __Un chapitre, plusieurs médias__

---

Une scène épinglée, 5 calques, deux personnages : un exemple complet.

[:octicons-arrow-right-24: L'exemple](projets/recit-defilant/exemple-chapitre-complexe.md){ .stretched-link }
</div>

</div>

## Annonce

!!! info "Nouveau : votre récit se construit en deux phases"
    1. **Phase 1, intégration statique** : vos chapitres écrits **directement en HTML et en CSS**, puis animés. Accepté jusqu'au prototype (ven. 13 nov.).
    2. **Phase 2, intégration dynamique** : le texte et les médias déplacés dans `data.json`. Exigé à la bêta (ven. 20 nov.).

    Écrivez votre HTML comme le JavaScript le construira : vos animations ne changeront pas à la phase 2. [Les détails](projets/recit-defilant/arborescence-recit-defilant.md#deux-phases)

## Aujourd'hui

- [ ] Point de contrôle : 5 minutes pour compléter votre remise
- [ ] Rencontres d'équipe : on valide votre point de contrôle ensemble
- [ ] IntersectionObserver : déclencher une fois
- [ ] Explorer les extensions de GSAP
- [ ] Dans votre projet : construire vos chapitres

## 1. :material-flag-checkered:  Le point de contrôle

!!! warning "Rappel : vous avez 5 minutes pour compléter votre remise"
    Dernières vérifications, dernier *commit*, et *push* sur `main`. Après ces 5 minutes, votre dépôt sur GitHub est votre remise.

Ensuite, je passe **d'équipe en équipe** pour faire le point de contrôle avec vous. Préparez-vous à me montrer, sur votre poste :

- votre dépôt sur GitHub : l'arborescence, et la *pull request* fusionnée de chacun;
- votre page avec Live Server : une `<section>` avec son `id` par chapitre, et l'animation test de chacun;
- vos médias, dans `assets/images/ch-XX/`, et leurs crédits dans le `README.md`;
- le journal du bloc 2 de chacun.

En attendant votre tour, avancez vos chapitres (section 3).

[:material-flag-checkered: Le point de contrôle : la liste complète](projets/recit-defilant/index.md#point-de-controle){ .md-button .md-button--primary }

## 2. :material-eye-outline:  IntersectionObserver

Pas pour animer : pour **déclencher une action**, une seule fois. C'est la bonne façon de lancer le `fetch` de votre dataviz quand le visiteur arrive au chapitre.

[:material-eye-outline: IntersectionObserver : déclencher une fois](js/intersection-observer.md){ .md-button }

## 3. :material-puzzle-outline:  Explorer les extensions GSAP

GSAP a des **extensions** pour des effets qu'on ne fait pas avec un simple tween : faire apparaître un titre lettre par lettre, faire suivre un chemin à un personnage, dessiner un trait, transformer une forme en une autre. Depuis GSAP 3.13, elles sont toutes gratuites, sur le même CDN que GSAP.

Chacune a sa page-sujet, avec une démo, l'installation et un exemple pour un chapitre de votre récit. Prenez le temps de les parcourir : l'une d'elles pourrait devenir le moment fort d'un de vos chapitres.

- :material-format-text: [TextPlugin : la machine à écrire](js/gsap-text.md)
- :material-format-letter-case: [SplitText : des lettres, des mots, des lignes](js/gsap-splittext.md)
- :material-shuffle-variant: [ScrambleText : l'effet décodage](js/gsap-scrambletext.md)
- :material-vector-curve: [MotionPath : suivre un tracé](js/gsap-motionpath.md)
- :material-draw: [DrawSVG : dessiner un trait](js/gsap-drawsvg.md)
- :material-shape-outline: [MorphSVG : changer de forme](js/gsap-morphsvg.md)
- :material-view-grid-outline: [Flip : changer de mise en page](js/gsap-flip.md)
- :material-arrow-down-circle-outline: [ScrollTo : défiler jusqu'à un chapitre](js/gsap-scrollto.md)

## 4. :material-account-multiple-outline:  Dans votre projet : construire vos chapitres

**Chacun dans ses chapitres, sur sa branche.** C'est la phase 1, l'intégration statique :

1. Le HTML de vos sections, directement dans `index.html` : le texte, puis vos médias.
2. Le CSS de vos chapitres, dans `css/chapitres/`.
3. Vos animations JavaScript dans la fonction `animate()` du fichier de votre chapitre (`js/chapitres/ch-03.js`) : GSAP, ScrollTrigger. Les animations CSS au défilement, elles, vont dans `css/chapitres/`.
4. *Pull request* quand une étape fonctionne : on fusionne souvent, par petits morceaux.

[:material-file-tree: Phase 1 : vos chapitres en HTML](projets/recit-defilant/arborescence-recit-defilant.md#html-phase-1){ .md-button }
[:material-language-javascript: Phase 1 : vos animations en JavaScript](projets/recit-defilant/arborescence-recit-defilant.md#fichier-chapitre){ .md-button }

[:material-movie-open-outline: Exemple : un chapitre, plusieurs médias en timeline](projets/recit-defilant/exemple-chapitre-complexe.md){ .md-button }

## Devoirs

<div class="class-content-link">
  <img src="assets/IA-restreinte.png">
  <span>Utilisation de l'IA restreinte : permise <strong>seulement pour créer vos médias</strong>. Le code, c'est vous! <a class="lien-details" href="projets/recit-defilant/index.html#ia">Détails</a></span>
</div>

### D'ici le mer. 11 nov. (cours 11.1)

#### Terminez les exercices, chacun dans son dépôt Classroom 50

- [Exercice : Zombi](exercices/ex-gsap-zombi/index.md);
- [Exercice : Magie](exercices/ex-gsap-magie/index.md);
- [Exercice : la magie au défilement](exercices/ex-gsap-magie-defilement/index.md).

#### Corrigez la spritesheet et la parallaxe

Avec la grille **Vérifiez votre travail** de chaque énoncé, puis *push* :

- [Exercice : le monstre responsive](exercices/ex-spritesheet/index.md#verifier);
- [Exercice : la parallaxe en calques](exercices/ex-parallaxe/index.md#verifier).

### D'ici le ven. 13 nov. : le prototype (formatif)

Votre récit est **navigable et animé**. Vos chapitres peuvent encore être en HTML statique (phase 1, intégration statique). [Voir le calendrier](projets/recit-defilant/index.md#calendrier).
