# Cours 11.1
<!-- mer. 11 nov. -->

<div class="class-content-link">
  <img src="assets/IA-restreinte.png">
  <span>Utilisation de l'IA restreinte : permise <strong>seulement pour créer vos médias</strong>. Le code, c'est vous! <a class="lien-details" href="projets/recit-defilant/index.html#ia">Détails</a></span>
</div>

<div class="grid" markdown>

<div class="card" markdown>
:simple-vuedotjs: __Le composant Vue__

---

Navigateur de chapitres et barre de progression : le code, pièce par pièce.

[:octicons-arrow-right-24: La référence](projets/recit-defilant/composant-vue.md){ .stretched-link }
</div>

<div class="card" markdown>
:material-play-box-outline: __Le prototype, vendredi__

---

Une démo de 60 secondes de votre récit, sur votre poste. Rien à déposer.

[:octicons-arrow-right-24: Ce que je dois voir](projets/recit-defilant/index.md#prototype){ .stretched-link }
</div>

<div class="card" markdown>
:material-chart-bar: __Le moment dataviz__

---

Vendredi, on choisit et on teste votre API. Relisez votre idée d'ici là.

[:octicons-arrow-right-24: Le moment dataviz](projets/recit-defilant/dataviz.md){ .stretched-link }
</div>

</div>

## Aujourd'hui

- [ ] Vue.js : pourquoi un cadriciel
- [ ] Le composant, construit en direct : vous codez avec moi, dans un bac à sable
- [ ] Dans votre projet : vos chapitres d'abord, puis le composant Vue

## 1. :simple-vuedotjs:  Vue.js : pourquoi un cadriciel?

Votre récit a besoin d'un **navigateur de chapitres** ou d'une **barre de progression** : des éléments qui changent **à chaque défilement**. En JavaScript seul, il faudrait ajouter et retirer des classes à la main, à chaque fois.

Avec Vue, on change **une donnée**, et la page suit. C'est la **réactivité**.

[:simple-vuedotjs: Pourquoi Vue, ici?](projets/recit-defilant/composant-vue.md#pourquoi){ .md-button }

## 2. :material-code-braces:  Le composant, construit en direct

On le construit ensemble, pièce par pièce. **Vous codez avec moi**, dans un bac à sable : un petit dossier à part, **hors de votre dépôt**.

**Le bac à sable**, à créer avant de commencer :

1. Un dossier `bac-a-sable-vue/`, ouvert dans VS Code.
2. Un fichier `index.html`, avec ce départ :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Bac à sable Vue</title>
  <style>
    .chapitre { min-height: 100vh; padding: 2rem; }
  </style>
</head>
<body>
  <div id="navigation"></div>

  <main>
    <section class="chapitre" id="la-foret"><h2>La forêt</h2></section>
    <section class="chapitre" id="la-maison"><h2>La maison</h2></section>
    <section class="chapitre" id="le-loup"><h2>Le loup</h2></section>
    <section class="chapitre" id="la-fin"><h2>La fin</h2></section>
  </main>

  <script src="https://cdn.jsdelivr.net/npm/vue@3.5.13/dist/vue.global.js">
  </script>
  <script type="module" src="js/main.js"></script>
</body>
</html>
```

3. Deux fichiers vides : `js/main.js` et `js/navigation.js`.
4. Ouvert avec **Live Server**.

!!! tip "Pourquoi `vue.global.js`, sans `.prod`?"
    Dans le bac à sable, on prend la version de **développement** : ses messages d'erreur dans la console sont beaucoup plus clairs. Dans votre projet, prenez la version `.prod`, plus légère.

**Les pièces, dans l'ordre :**

- [ ] `createApp()` et `mount()` : Vue prend le contrôle de `#navigation`
- [ ] `data()` et `{{ }}` : la réactivité
- [ ] `v-for` : la liste des chapitres
- [ ] `:class` : le chapitre actif
- [ ] `@click` et une méthode : aller au chapitre
- [ ] `mounted()` : écouter le défilement
- [ ] `computed` : le titre du chapitre actif
- [ ] Options API et Composition API : reconnaître l'autre façon

[:simple-vuedotjs: Le composant Vue : la référence complète](projets/recit-defilant/composant-vue.md){ .md-button .md-button--primary }

## 3. :material-account-multiple-outline:  Dans votre projet

**D'abord vos chapitres** : le prototype de vendredi porte sur eux, pas sur Vue.

[:material-file-tree: *Phase 1*{ .w5-phase .w5-phase-1 } : vos chapitres en HTML](projets/recit-defilant/arborescence-recit-defilant.md#html-phase-1){ .md-button }

**Ensuite, la personne responsable du composant Vue** (voir votre matrice de responsabilités) l'intègre d'ici la **bêta** (ven. 20 nov.) :

1. Sur sa branche, crée `js/navigation.js` à partir du bac à sable.
2. Ajoute la zone `#navigation` et la balise de Vue dans `index.html` : c'est un fichier **commun**, prévenez votre coéquipier ou coéquipière.
3. Branche le composant dans `main.js`, avec la liste des chapitres lue dans le HTML (*phase 1*{ .w5-phase .w5-phase-1 }).
4. *Pull request* dès qu'il s'affiche, même sans style.

[:simple-vuedotjs: Brancher le composant à la *phase 1*{ .w5-phase .w5-phase-1 }](projets/recit-defilant/composant-vue.md#brancher-phase-1){ .md-button }

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
