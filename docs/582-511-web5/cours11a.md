# Cours 11.1
<!-- mer. 11 nov. -->

![](assets/cours11a-banniere.webp){.w-100}

<div class="class-content-link">
  <img src="assets/IA-restreinte.png">
  <span>Utilisation de l'IA restreinte : permise <strong>seulement pour créer vos médias</strong>. Le code, c'est vous! <a class="lien-details" href="projets/recit-defilant/index.html#ia">Détails</a></span>
</div>

<div class="grid" markdown>

<div class="card" markdown>
:simple-vuedotjs: __Exercice : Tableau NBA__

---

Votre première app Vue : des pointages, deux clics, une propriété calculée.

[:octicons-arrow-right-24: L'exercice](exercices/ex-vue-nba/index.md){ .stretched-link }
</div>

<div class="card" markdown>
:simple-vuedotjs: __Exercice : Collection de films__

---

Une classe dynamique, puis une boucle `v-for` : un élément actif dans une liste.

[:octicons-arrow-right-24: L'exercice](exercices/ex-vue-films/index.md){ .stretched-link }
</div>

<div class="card" markdown>
:material-play-box-outline: __Le prototype, vendredi__

---

Une démo de 60 secondes de votre récit, sur votre poste. Rien à déposer.

[:octicons-arrow-right-24: Ce que je dois voir](projets/recit-defilant/index.md#prototype){ .stretched-link }
</div>

</div>

## Aujourd'hui

- [ ] Vos exercices GSAP : auto-validés et poussés sur `main`
- [ ] Vue.js : pourquoi un cadriciel
- [ ] Les principes de Vue : un tour des pages-sujets
- [ ] Exercice : Tableau NBA
- [ ] Exercice : Collection de films
- [ ] Dans votre projet : vos chapitres, pour le prototype de vendredi

## 1. :simple-vuedotjs:  Vue.js : pourquoi un cadriciel?

Un navigateur de chapitres se fait aussi en JavaScript seul. Vue est là pour deux raisons :

- **c'est comme ça que le web se construit** : la plupart des interfaces professionnelles utilisent un cadriciel (React, Vue, Svelte), et Vue est la porte d'entrée la plus douce;
- **ça change votre façon de coder** : au lieu de dire **comment** changer la page, étape par étape, vous décrivez **à quoi** elle doit ressembler selon vos données. Vue s'occupe du reste.

[:simple-vuedotjs: Pourquoi Vue, ici?](projets/recit-defilant/composant-vue.md#pourquoi){ .md-button }

## 2. :material-book-open-variant:  Les principes de Vue { #principes }

Avant de construire, un tour des idées de Vue. Chaque principe a sa page-sujet, avec des exemples à modifier : relisez-les après le cours, à votre rythme.

!!! info "Une seule façon d'écrire Vue dans ce cours : l'Options API"
    Dans la documentation, vous croiserez aussi la Composition API. Choisissez **Options** dans le sélecteur *Préférence d'API*, en haut à gauche de la [documentation de Vue](https://fr.vuejs.org/guide/introduction.html){ :target="_blank" }.

    [:simple-vuedotjs: Intro à Vue.js](vue/index.md){ .md-button }

**1. L'app** : `createApp()` crée l'app, et `mount()` la branche sur **une zone** du HTML. Vue contrôle cette zone, rien d'autre.

[:simple-vuedotjs: Création d'une app](vue/creation-app.md){ .md-button }

**2. Les données et l'interpolation** : `data()` contient ce qui peut changer, et `{{ }}` l'affiche. Quand la donnée change, le texte change : c'est la **réactivité**.

[:simple-vuedotjs: Interpolation](vue/interpolation.md){ .md-button }

**3. Les directives** : des attributs spéciaux dans le HTML. `v-for` répète un élément, `v-if` l'affiche ou non, `:class` ajoute une classe selon une condition.

[:simple-vuedotjs: Boucle `v-for`](vue/boucle.md){ .md-button }
[:simple-vuedotjs: Conditions `v-if`](vue/condition.md){ .md-button }
[:simple-vuedotjs: Classe dynamique](vue/classe-dynamique.md){ .md-button }

**4. Les méthodes et les événements** : `@click` appelle une **méthode**, une action du composant.

[:simple-vuedotjs: Méthodes et événements](vue/methodes-evenements.md){ .md-button }

**5. La propriété calculée** : une valeur **déduite** des données, recalculée seulement quand elles changent.

[:simple-vuedotjs: Propriété calculée](vue/propriete-calculee.md){ .md-button }

## 3. :material-pencil-ruler:  Pratiquer : deux exercices { #exercices }

Seul, dans Classroom 50 : le lien d'acceptation est au début de chaque exercice. Gardez les pages-sujets de la section 2 ouvertes à côté.

!!! warning "Auto-validez chaque exercice avant de le remettre"
    Chaque exercice se termine par une liste **Vérifiez votre travail**. Avant votre dernier *push*, testez votre page avec cette liste : chaque énoncé doit être vrai.

!!! tip "Corrigez vos exercices passés"
    Avec la grille **Vérifiez votre travail** de chaque énoncé, puis *push*, chacun dans son dépôt Classroom 50 :

    - [Exercice : le monstre responsive](exercices/ex-spritesheet/index.md#verifier);
    - [Exercice : la parallaxe en calques](exercices/ex-parallaxe/index.md#verifier);
    - [Exercice : Zombi](exercices/ex-gsap-zombi/index.md#verifier);
    - [Exercice : Magie](exercices/ex-gsap-magie/index.md#verifier);
    - [Exercice : la magie au défilement](exercices/ex-gsap-magie-defilement/index.md#verifier).

**1. Tableau NBA** (environ 40 min) : `data()`, `{{ }}`, `@click` et les méthodes, puis une propriété calculée.

[:simple-vuedotjs: Exercice : Tableau NBA](exercices/ex-vue-nba/index.md){ .md-button .md-button--primary }

**2. Collection de films** (environ 50 min) : la classe dynamique `:class`, puis la boucle `v-for`. C'est le cœur de votre navigateur de chapitres : un élément actif dans une liste.

[:simple-vuedotjs: Exercice : Collection de films](exercices/ex-vue-films/index.md){ .md-button .md-button--primary }

Vous finissez tôt? Les défis de chaque exercice, puis vos chapitres. Et pour aller plus loin, facultatif : [Cheese Kanye says](exercices/ex-vue-kanye/index.md), un premier `fetch()` vers une API externe, lancé par une méthode Vue.

## 4. :material-account-multiple-outline:  Dans votre projet

**D'abord vos chapitres** : le prototype de vendredi porte sur eux, pas sur Vue.

[:material-file-tree: *Phase 1*{ .w5-phase .w5-phase-1 } : vos chapitres en HTML](projets/recit-defilant/arborescence-recit-defilant.md#html-phase-1){ .md-button }

**Le composant Vue**, on le construit ensemble vendredi, en direct : la personne responsable l'intégrera ensuite, d'ici la bêta.

## Devoirs

<div class="class-content-link">
  <img src="assets/IA-restreinte.png">
  <span>Utilisation de l'IA restreinte : permise <strong>seulement pour créer vos médias</strong>. Le code, c'est vous! <a class="lien-details" href="projets/recit-defilant/index.html#ia">Détails</a></span>
</div>

### D'ici le ven. 13 nov. : le prototype (formatif), en *phase 1*{ .w5-phase .w5-phase-1 }

Rien à déposer : une **démo de 60 secondes** de votre récit qui défile, sur votre poste, pendant le cours.

- Le récit défile du premier au dernier chapitre, sans erreur dans la console.
- Chaque chapitre a son texte et au moins un média, même provisoires.
- Chaque personne : au moins une animation au défilement, et son travail fusionné dans `main`.

[:material-play-box-outline: Le prototype : ce que je dois voir](projets/recit-defilant/index.md#prototype){ .md-button .md-button--primary }

### Pour vendredi : préparer le choix de votre API

**La personne responsable de la dataviz** relit l'idée de la section 6 du cahier de charges, et arrive vendredi avec **deux API candidates**, trouvées dans les pistes de la page dataviz.

[:material-chart-bar: Le moment dataviz : les pistes d'API](projets/recit-defilant/dataviz.md#demo){ .md-button }
