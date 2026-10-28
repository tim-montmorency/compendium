# Cours 9.1
<!-- mer. 28 oct. -->

## Annonces

!!! danger "Le centre d'aide C-1602 n'est pas un lieu pour jouer à des jeux vidéo"
    Le local du Centre d'aide est un lieu de travail. Silencieux, comme dans une bibliothèque. On y travaille, c'est la priorité de ce local.

!!! success "Sondage: TUTORAT"
    Quels seraient le moment le plus utile ? [Remplir le formulaire](https://forms.cloud.microsoft/r/147C3TKbpC)

![](assets/cours09a-banniere.webp){.w-100}

<div class="class-content-link">
  <img src="assets/IA-restreinte.png">
  <span class="sidetext">Utilisation de l'IA restreinte : permise <strong>seulement pour créer vos médias</strong>. Le code, c'est vous! <a class="lien-details" href="projets/recit-defilant/index.html#ia">Détails</a></span>
</div>

<div class="grid" markdown>

<div class="card" markdown>
:material-source-branch: __Git en équipe__

---

Une branche par personne, les *pull requests*, les conflits et la convention de *commits*.

[:octicons-arrow-right-24: Git en équipe](projets/recit-defilant/git-en-equipe.md){ .stretched-link }
</div>

<div class="card" markdown>
:material-source-merge: __Exercice : un conflit__

---

En duo, dans un dépôt d'exercice Classroom 50 : provoquer un conflit exprès, puis le régler.

[:octicons-arrow-right-24: L'exercice](projets/recit-defilant/exercice-conflit.md){ .stretched-link }
</div>

<div class="card" markdown>
:material-book-open-page-variant-outline: __Les consignes du récit défilant__

---

Le projet au complet : produit, garde-fous, évaluation, calendrier.

[:octicons-arrow-right-24: Consignes complètes](projets/recit-defilant/index.md){ .stretched-link }
</div>

</div>

## Aujourd'hui

- [ ] Retour sur le cahier de charges, et vos prochaines étapes
- [ ] Git en équipe : branches, *pull requests*, conflits, convention de *commits*
- [ ] Exercice en duo : provoquer et régler un conflit
- [ ] Dans votre projet : la structure commune sur `main`, puis une branche chacun
- [ ] Animations CSS : la spritesheet et la parallaxe
- [ ] Entrée au journal de bord

<!-- MM : ajouter le tutorat de la semaine, s'il y a lieu. -->

## 1. Retour sur le cahier de charges

Je vous remets vos commentaires sur le cahier de charges. Prenez 10 minutes en équipe pour les lire et noter ce que vous ajusterez.

Puis, relisez la **section 9** de votre cahier : **vos prochaines étapes**. Ce que vous aviez prévu pour aujourd'hui, est-ce fait? Notez-le dans votre journal.

## 2. Git en équipe

À deux dans le même dépôt, on ne travaille plus comme au portfolio. Aujourd'hui : une branche par personne, la fusion par *pull request*, les conflits, et une façon commune de nommer vos *commits*.

[:material-source-branch: Git en équipe](projets/recit-defilant/git-en-equipe.md){ .md-button .md-button--primary }
[:material-presentation-play: Présentation (PowerPoint)](assets/documents/Web5_git-en-equipe.pptx){ .md-button }

## 3. Exercice : provoquer et régler un conflit

**En duo, 25 minutes.** Dans un petit dépôt d'exercice créé par Classroom 50, vous allez provoquer un conflit exprès, et le régler. Chacun en règle un.

[:material-source-merge: L'exercice, étape par étape](projets/recit-defilant/exercice-conflit.md){ .md-button }

## 4. Dans votre projet

**En équipe, 20 minutes.** Maintenant, pour vrai :

1. **Ensemble, sur un seul poste**, sur `main` : la structure commune (`index.html`, `css/style.css`, `js/main.js`, `data/data.json`, `assets/images/`), avec le **squelette de tous vos chapitres** dans `data.json`. *Commit* (`Commun : ajoute la structure de départ`), puis *push*.
2. L'autre personne fait un *pull*.
3. **Chacun crée sa branche**, à son prénom, et la publie.
4. Vérifiez sur github.com : le menu des branches affiche `main` et vos deux branches.

À partir de maintenant : **plus personne ne code sur `main`**.

## 5. Animations CSS : parallaxe et spritesheet

Deux des trois formats de **média animable** se jouent en CSS.

**La spritesheet** : toutes les images d'une animation côte à côte dans un seul fichier, montrées une à la fois avec `steps()`. Pour votre projet, la version responsive, avec `transform`.

[:material-filmstrip: Animation par spritesheet](css/animation-spritesheet.md){ .md-button .md-button--primary }

**La parallaxe en calques** : des plans qui défilent à des vitesses différentes, pour donner de la profondeur.

[:material-layers-outline: La parallaxe](css/animations-scroll.md#un-classique-le-parallax){ .md-button }

**À faire** : chacun commence la préparation de **son** média animable (calques, spritesheet ou SVG), sur **sa** branche.

## Devoirs

- Entrée au **journal de bord** : les 5 questions.
- Sur **votre** branche : commencez la préparation de votre média animable.
- Faites votre premier *commit* selon la convention de l'équipe : `Zone : ce qui a changé`.
