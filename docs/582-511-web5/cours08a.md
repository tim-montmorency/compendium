# Cours 8.1
<!-- mer. 21 oct. -->

![](assets/cours08a-banniere.webp){.w-100}

<div class="class-content-link">
  <img src="assets/IA-restreinte.png">
  <span class="sidetext">Utilisation de l'IA restreinte : permise <strong>seulement pour créer vos médias</strong>, jusqu'à nouvel ordre. Le cahier de charges et le storyboard, c'est vous! <a class="lien-details" href="projets/recit-defilant/index.html#ia">Détails</a></span>
</div>

<div class="grid" markdown>

<div class="card" markdown>
:material-file-document-edit-outline: __Le cahier de charges__

---

Le gabarit et les consignes, section par section.

[:octicons-arrow-right-24: Gabarit et consignes](projets/recit-defilant/cahier-de-charges.md){ .stretched-link }
</div>

<div class="card" markdown>
:material-chart-bar: __Le moment dataviz__

---

Les ingrédients, des exemples à décortiquer et une démo avec des données réelles.

[:octicons-arrow-right-24: Le moment dataviz](projets/recit-defilant/dataviz.md){ .stretched-link }
</div>

<div class="card" markdown>
:material-book-open-page-variant-outline: __Les consignes du récit défilant__

---

Le projet au complet : produit, garde-fous, évaluation, calendrier.

[:octicons-arrow-right-24: Consignes complètes](projets/recit-defilant/index.md){ .stretched-link }
</div>

</div>

!!! danger "Avant tout : votre dépôt GitHub"
    **Faites-le en arrivant**, un membre de l'équipe suffit :

    1. **Rendez le dépôt privé** : *Settings* → *General* → tout en bas, *Danger Zone* → *Change repository visibility* → *Make private*.
    2. **Invitez votre coéquipier ou coéquipière et moi** comme collaborateurs : *Settings* → *Collaborators* → *Add people*. Mon nom d'utilisateur : `marie-michelle-ouellet`.

    Sans cette invitation, je ne peux ni voir ni évaluer votre remise du ven. 23 oct.

## Aujourd'hui

- [ ] **Avant tout** : dépôt GitHub privé, et `marie-michelle-ouellet` invitée comme collaboratrice
- [ ] Faire approuver votre thème avec moi, en équipe
- [ ] Le storyboard du défilement : plusieurs cadres par chapitre au besoin
- [ ] Le modèle de données JSON : votre objet « chapitre »
- [ ] La matrice de responsabilités : qui possède quoi
- [ ] Le moment dataviz : exemples et démo
- [ ] Rencontre d'équipe avec moi : votre avancement
- [ ] Temps de travail sur le cahier de charges
- [ ] Entrée au journal de bord

!!! warning "Remise 1 : ven. 23 oct., 23 h 59 (pas de cours ce jour-là)"
    Cahier de charges complet dans le dépôt, storyboard (lien Figma et `documentation/storyboard.pdf`), un journal par personne. [Liste de vérification de la remise 1](projets/recit-defilant/index.md#remise-1)

!!! danger "Remises formatives : l'échéance compte"
    Même si une remise est dite « formative », **son échéance compte**. Le respect des échéances de **toutes** les remises du projet (cahier de charges, point de contrôle, prototype, bêta) aura un **impact sur votre note finale**.

    Comme dans le monde professionnel : quand une étape est en retard, c'est toute l'équipe, et tout le projet, qui en souffre.

<!-- MM : ajouter le tutorat de la semaine, s'il y a lieu. -->

## Déroulement

Aujourd'hui, c'est surtout **votre** temps de travail. Quatre courtes notions, chacune suivie d'un moment pour l'appliquer à votre cahier de charges. Pendant ce temps, je rencontre chaque équipe.

## 1. Le storyboard du défilement

Un storyboard de défilement montre **la suite des moments** que vit le visiteur, pas chaque pixel.

- **Au moins un cadre par chapitre**, et plusieurs si un chapitre contient plusieurs animations.
- Dans la description de **chaque** cadre : le **numéro du chapitre**, ce qui bouge, ce qui le déclenche, la technique.
- Les médias peuvent être des boîtes grises ou des croquis.

[:material-file-document-edit-outline: Consignes du storyboard](projets/recit-defilant/cahier-de-charges.md#le-storyboard-dans-figma){ .md-button }

!!! warning "Faites approuver votre thème"
    **Dès que possible pendant l'atelier**, venez me voir **en équipe** (2 minutes) pour faire approuver votre thème, verbalement.

    Apportez votre idée résumée en **une phrase**, et votre brainstorm (FigJam ou photos). Une fois le thème approuvé, inscrivez-le dans le [fichier des équipes](https://cmontmorency365-my.sharepoint.com/:x:/g/personal/mariem_ouellet_cmontmorency_qc_ca/IQAjsQ0uE1HKRrkQXrMKFTAMAeVW1rYQkDk6AHIYjIdyfTs?e=dNPvKA){ :target="_blank" }.

**À faire (25 min)** : avancez vos cadres dans Figma, à partir du gabarit.

## 2. Le modèle de données JSON

Vos chapitres seront chargés avec `fetch()` depuis un fichier JSON, comme les projets de votre portfolio. Avant de coder, on décide **la forme d'un chapitre** : quelles propriétés, et pour quoi faire.

**Exemple 1 : un chapitre simple**, avec un texte et un média.

```json
{
  "id": "la-foret",
  "numero": 3,
  "titre": "Dans la forêt",
  "texte": ["Premier paragraphe...", "Deuxième paragraphe..."],
  "medias": [
    { "type": "calque", "src": "assets/images/foret-avant.webp", "alt": "" }
  ],
  "responsable": "Prénom"
}
```

**Exemple 2 : un chapitre en plusieurs plans.** Quand un chapitre est une **séquence** de moments animés, chacun avec son média et son animation, on ajoute un tableau `plans`. Le JavaScript boucle sur les plans d'un chapitre, exactement comme il boucle sur les chapitres.

```json
{
  "id": "la-tempete",
  "numero": 4,
  "titre": "La tempête",
  "type": "sequence",
  "plans": [
    {
      "id": "ciel-calme",
      "texte": "La mer est calme. Trop calme.",
      "media": {
        "type": "calques",
        "calques": [
          { "src": "assets/images/ciel-fond.webp", "vitesse": "lente" },
          { "src": "assets/images/vagues.webp", "vitesse": "rapide" }
        ],
        "alt": ""
      },
      "animation": { "technique": "css", "declencheur": "defilement" }
    },
    {
      "id": "eclair",
      "texte": "Un éclair déchire le ciel.",
      "media": {
        "type": "svg",
        "src": "assets/images/eclair.svg",
        "alt": "Un éclair zèbre le ciel"
      },
      "animation": { "technique": "gsap", "declencheur": "epingle" }
    },
    {
      "id": "bateau",
      "texte": "Le bateau tangue, puis disparaît.",
      "media": {
        "type": "spritesheet",
        "src": "assets/images/bateau.webp",
        "images": 12,
        "alt": "Un bateau secoué par les vagues"
      },
      "animation": { "technique": "observer", "declencheur": "entree" }
    }
  ],
  "responsable": "Prénom"
}
```

Ce qui change par rapport à l'exemple 1 :

- `"type": "sequence"` indique au JavaScript de construire plusieurs plans plutôt qu'un seul bloc.
- Chaque plan a **son propre** `id`, `texte`, `media` et `animation` : c'est le même découpage que vos cadres de storyboard.
- Les propriétés du média dépendent de son type : une liste de `calques` avec leur vitesse, un nombre d'`images` pour une spritesheet, un simple `src` pour un SVG.
- L'objet `animation` documente vos choix (technique, déclencheur). Le JavaScript peut s'en servir, ou ce peut être un simple aide-mémoire pour l'équipe.

Questions à vous poser :

- Le texte : une seule chaîne, ou un tableau de paragraphes?
- Les médias : de quels types (image, calque, spritesheet, SVG, vidéo)? Chacun a-t-il un `alt`?
- Vos chapitres affichent-ils des médias différents? Si oui, ajoutez une propriété `type` (ex. `"parallaxe"`, `"dataviz"`) : le JavaScript la lira pour savoir quel HTML construire (voir le [cahier de charges](projets/recit-defilant/cahier-de-charges.md#le-modele-de-donnees-json)).
- Un de vos chapitres contient-il plusieurs moments animés? Si oui, est-ce un chapitre en `plans`?

**À faire (20 min)** : section 5 du cahier, avec l'objet d'**un** de vos vrais chapitres.

## 3. La matrice de responsabilités

C'est la pièce maîtresse de votre **note individuelle**. Elle dit qui possède quoi, et c'est sur ces zones que porteront vos *commits*, votre contrôle de la qualité et votre défense du 9 décembre.

- Chaque personne : **au moins 3 chapitres** et **un média animable**.
- Le composant Vue, le *fetch* externe et le chargement du JSON ont chacun **un** responsable.
- Faites-la **ensemble**, et prenez-la au sérieux : impossible de défendre le code d'une zone qui n'est pas la vôtre.

**À faire (15 min)** : section 4 du cahier.

## 4. Le moment dataviz

Une question, une donnée réelle, une forme simple, une révélation au défilement, une chute. On regarde des exemples, puis une démo avec des données réelles.

[:material-chart-bar: Le moment dataviz : exemples et démo](projets/recit-defilant/dataviz.md){ .md-button .md-button--primary }

**À faire (15 min)** : section 6 du cahier. Décrivez l'idée, pas encore l'API.

## Rencontres d'équipe

L'approbation du thème (2 min) se fait dès que possible pendant l'atelier storyboard. La rencontre d'avancement (5 min) a lieu plus tard, pendant les temps de travail.

Pendant les temps de travail, je rencontre chaque équipe, **5 minutes**. Ayez à l'écran :

- la **trace de votre brainstorm** (FigJam ou photos) et le thème choisi;
- vos **chapitres** : ce que chacun raconte;
- votre **storyboard**, même commencé.

## Devoirs

- Entrée au **journal de bord** : 
  - les [5 questions](projets/recit-defilant/index.html#journal-de-bord-individuel) et vos réponses
  - **2 ou 3 animations qui vous inspirent**, notées personnellement au [cours 7.2](cours07b.md#sinspirer-seul) : pour chacune, le lien de l'exemple, ce qui bouge, ce qui le déclenche, et ce que vous aimeriez emprunter pour votre récit.
  - **Un lien vers le brainstorm de votre équipe**, fait au [cours 7.2](cours07b.md#choisir-un-theme-brainstorm-en-equipe) : le lien FigJam, ou un lien vers les photos dans `documentation/brainstorm/`.
- Terminez 
  - le cahier de charge (excepté section 8), 
  - le storyboard 
  - et votre journal personnel, 
- puis poussez le tout sur GitHub avant vendredi 23 octobre, 23 h 59. [Liste de vérification de la remise 1](projets/recit-defilant/index.md#remise-1)

!!! tip "Rappel : où créditer vos médias"
    **Tous vos médias sont crédités dans le `README.md`** de l'équipe, dans le tableau des crédits : la source, l'auteur, la licence, et si vous l'avez modifié. **Les médias générés par l'IA aussi** : indiquez l'outil utilisé comme source. Les crédits ne vont **pas** dans le journal.

