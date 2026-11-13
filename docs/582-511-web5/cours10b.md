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

## Nouveau : votre récit se construit en deux phases.

### *Phase 1*{ .w5-phase .w5-phase-1 }: intégration *statique*

*Phase 1*{ .w5-phase .w5-phase-1 }, **intégration statique** : vos chapitres écrits **directement en HTML et en CSS**, puis animés. **Du 6 au ~~13~~ 18 nov.**, accepté jusqu'au prototype (~~ven. 13 nov.~~ mer. 18 nov.).

### *Phase 2*{ .w5-phase .w5-phase-2 }: intégration *dynamique*

*Phase 2*{ .w5-phase .w5-phase-2 }, intégration **dynamique** : le texte et les médias déplacés dans `data.json`. **Du ~~13 au 20 nov.~~ 18 nov. à la bêta**, exigé à la bêta (~~ven. 20 nov.~~ reportée, date à confirmer).

Écrivez votre HTML comme le JavaScript le construira : vos animations ne changeront pas à la *phase 2*{ .w5-phase .w5-phase-2 }.

**Comment faire :**

- *Phase 1*{ .w5-phase .w5-phase-1 } : du 6 au ~~13~~ 18 nov., dès aujourd'hui, [écrire vos chapitres en HTML (*phase 1*{ .w5-phase .w5-phase-1 })](projets/recit-defilant/arborescence-recit-defilant.md#html-phase-1), et [où mettre vos animations en JavaScript](projets/recit-defilant/arborescence-recit-defilant.md#fichier-chapitre);
- *Phase 2*{ .w5-phase .w5-phase-2 } : du ~~13 au 20 nov.~~ 18 nov. à la bêta, [passer à la *phase 2*{ .w5-phase .w5-phase-2 }](projets/recit-defilant/arborescence-recit-defilant.md#phase-2), puis [les étapes du chargement JSON](projets/recit-defilant/json-chapitres.md).

## Rappel pour les images non créées pas vous même

- **Banques d'images libres permises** (ex. [Unsplash](https://unsplash.com/){ :target="_blank" }, [Pexels](https://www.pexels.com/){ :target="_blank" }), selon leur licence.
- **Images générées par IA permises**, si elles sont créditées dans le `README.md`, avec l'outil comme source.
- **Autre images qui ne sont pas de vous**
  
**Tous les médias sont crédités** dans le `README.md`, dans un tableau : média, chapitre, source, auteur, licence, modifié ou non.

```markdown
## Crédits des médias

| Média | Chapitre | Source | Auteur | Licence | Modifié? |
|---|---|---|---|---|---|
| `foret-fond.webp` | 1 | [Unsplash](lien) | Nom auteur | Licence Unsplash | Découpé 3 calques |
| `renard.svg` | 3 | Firefly | Généré par IA | : | Vectorisé, groupes nommés |
```

## Aujourd'hui

- [ ] Point de contrôle : 5 minutes pour compléter votre remise
- [ ] Rencontres d'équipe : on valide votre point de contrôle ensemble
- [ ] IntersectionObserver : déclencher une fois
- [ ] Mini-atelier en équipe (obligatoire) : choisir votre extension GSAP
- [ ] Dans votre projet : construire vos chapitres

## 1. :material-flag-checkered:  Le point de contrôle

!!! warning "Rappel : vous avez 5 minutes pour compléter votre remise"
    Dernières vérifications, dernier *commit*, et *push* sur `main`. Après ces 5 minutes, votre dépôt sur GitHub est votre remise.

Ensuite, je passe **d'équipe en équipe** pour faire le point de contrôle avec vous. Préparez-vous à me montrer, sur votre poste :

- votre dépôt sur GitHub : l'arborescence, et la *pull request* fusionnée de chacun;
- votre page avec Live Server : une `<section>` avec son `id` par chapitre, et l'animation test de chacun;
- vos médias, dans `assets/images/ch-XX/`, et leurs crédits dans le `README.md`;
- le journal du bloc 2 de chacun.

En attendant votre tour : le **mini-atelier des extensions** (section 3), obligatoire, puis vos chapitres (section 4).

[:material-flag-checkered: Le point de contrôle : la liste complète](projets/recit-defilant/index.md#point-de-controle){ .md-button .md-button--primary }

## 2. :material-eye-outline:  IntersectionObserver

Pas pour animer : pour **déclencher une action**, une seule fois. C'est la bonne façon de lancer le `fetch` de votre dataviz quand le visiteur arrive au chapitre.

[:material-eye-outline: IntersectionObserver : déclencher une fois](js/intersection-observer.md){ .md-button }

## 3. :material-puzzle-outline:  Mini-atelier en équipe : choisir votre extension GSAP { #atelier-extensions }

GSAP a des **extensions** pour des effets qu'on ne fait pas avec un simple tween : faire apparaître un titre lettre par lettre, faire suivre un chemin à un personnage, dessiner un trait, transformer une forme en une autre. Depuis GSAP 3.13, elles sont toutes gratuites, sur le même CDN que GSAP.

Chacune a sa page-sujet, avec une démo, l'installation et un exemple pour un chapitre de votre récit. L'une d'elles pourrait devenir le moment fort d'un de vos chapitres.

!!! warning "Nouvelle exigence du projet : au moins une extension"
    Votre récit doit contenir **au moins un effet** fait avec une extension de GSAP, au moins une fois par équipe. ScrollTrigger ne compte pas : il est déjà exigé. Choisissez l'extension qui sert votre histoire.

    [Voir les exigences du projet](projets/recit-defilant/index.md#ce-qui-est-obligatoire)

!!! danger "Atelier obligatoire : à terminer avant de quitter la classe aujourd'hui"
    Pendant que je passe d'équipe en équipe, faites cet atelier **en équipe**. Je vérifie votre *commit* avant votre départ.

**1. Explorez** (chacun de son côté)

Partagez-vous la liste plus bas : une personne prend les 4 premières extensions, l'autre les 4 dernières. Pour chacune, regardez la démo et la section « Dans votre récit ». Notez celles qui pourraient servir **votre** histoire.

**2. Décidez** (ensemble)

Présentez-vous vos trouvailles, puis répondez ensemble à trois questions :

- **Quelle extension?** Celle qui sert le mieux votre histoire, pas la plus spectaculaire.
- **À quel moment de l'histoire?** Le chapitre, et le moment précis dans votre storyboard.
- **Qui l'intègre?** Une personne responsable, idéalement dans un de **ses** chapitres.

**3. Documentez** (ensemble, sur `main`)

Dans la section 4 de votre `CAHIER-DE-CHARGES.md` (la matrice de responsabilités), ajoutez la ligne :

```markdown
| Extension GSAP : [nom de l'extension], chapitre [numéro] | [Prénom] | L'effet et son intégration |
```

Puis *commit* (`Cahier : ajoute l'extension GSAP`) et *push*.

**Les extensions à explorer** :

- :material-format-text: [TextPlugin : la machine à écrire](js/gsap-text.md)
- :material-format-letter-case: [SplitText : des lettres, des mots, des lignes](js/gsap-splittext.md)
- :material-shuffle-variant: [ScrambleText : l'effet décodage](js/gsap-scrambletext.md)
- :material-vector-curve: [MotionPath : suivre un tracé](js/gsap-motionpath.md)
- :material-draw: [DrawSVG : dessiner un trait](js/gsap-drawsvg.md)
- :material-shape-outline: [MorphSVG : changer de forme](js/gsap-morphsvg.md)
- :material-view-grid-outline: [Flip : changer de mise en page](js/gsap-flip.md)
- :material-arrow-down-circle-outline: [ScrollTo : défiler jusqu'à un chapitre](js/gsap-scrollto.md)

## 4. :material-account-multiple-outline:  Dans votre projet : construire vos chapitres

**Chacun dans ses chapitres, sur sa branche.** C'est la *phase 1*{ .w5-phase .w5-phase-1 }, l'intégration statique :

1. Le HTML de vos sections, directement dans `index.html` : le texte, puis vos médias.
2. Le CSS de vos chapitres, dans `css/chapitres/`.
3. Vos animations JavaScript dans la fonction `animate()` du fichier de votre chapitre (`js/chapitres/ch-03.js`) : GSAP, ScrollTrigger. Les animations CSS au défilement, elles, vont dans `css/chapitres/`.
4. *Pull request* quand une étape fonctionne : on fusionne souvent, par petits morceaux.

[:material-file-tree: *Phase 1*{ .w5-phase .w5-phase-1 } : vos chapitres en HTML](projets/recit-defilant/arborescence-recit-defilant.md#html-phase-1){ .md-button }

[:material-language-javascript: *Phase 1*{ .w5-phase .w5-phase-1 } : vos animations en JavaScript](projets/recit-defilant/arborescence-recit-defilant.md#fichier-chapitre){ .md-button }

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

### D'ici le ~~ven. 13 nov.~~ mer. 18 nov. : le prototype (formatif), en *phase 1*{ .w5-phase .w5-phase-1 }

Reporté pour cause de levée de cours. La **bêta est aussi reportée** : nouvelle date à confirmer, au moins une semaine après le prototype.

Rien à déposer : une **démo de 60 secondes** de votre récit qui défile, sur votre poste, pendant le cours. *Phase 1*{ .w5-phase .w5-phase-1 } : **intégration statique** acceptée : vos chapitres peuvent encore être en HTML statique. [Ce que je dois voir](projets/recit-defilant/index.md#prototype). La *phase 2*{ .w5-phase .w5-phase-2 } : **intégration dynamique** sera exigée à la bêta (~~ven. 20 nov.~~ reportée, date à confirmer). [Voir le calendrier](projets/recit-defilant/index.md#calendrier).
