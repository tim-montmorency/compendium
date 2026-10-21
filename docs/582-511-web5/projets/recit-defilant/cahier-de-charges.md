# Le cahier de charges : gabarit et consignes

<div class="class-content-link">
  <img src="../../assets/IA-restreinte.png">
  <span class="sidetext">Utilisation de l'IA restreinte : permise <strong>seulement pour créer vos médias</strong>, jusqu'à nouvel ordre. Le code, c'est vous! <a class="lien-details" href="index.html#ia">Détails</a></span>
</div>

<div class="essentiel" markdown>
<p class="essentiel__titre">L'essentiel en 3 points</p>

1. Le cahier de charges fixe **ce que votre équipe va construire, et qui fait quoi**, avant d'écrire une ligne de code.
2. Vous partez du **gabarit** ci-dessous : copiez-le dans `documentation/CAHIER-DE-CHARGES.md`, puis remplissez chaque section, en équipe.
3. À déposer **au plus tard le ven. 23 oct., 23 h 59**, avec le storyboard (lien Figma et export PDF). C'est la remise 1 (5 %, note d'équipe).

</div>

[:material-file-document-outline: Consignes complètes du récit défilant](index.md){ .md-button }

!!! warning "Le processus est évalué"
    Le cahier de charges est la première étape de votre processus. Au cours du **mer. 21 oct.**, vous me présenterez votre avancement (concept, chapitres, début du storyboard). Le cahier et le storyboard se font **sans IA** : c'est votre réflexion que je veux voir.

!!! danger "Remises formatives : l'échéance compte"
    Même si une remise est dite « formative », **son échéance compte**. Le respect des échéances de **toutes** les remises du projet (cahier de charges, point de contrôle, prototype, bêta) aura un **impact sur votre note finale**.

    Comme dans le monde professionnel : quand une étape est en retard, c'est toute l'équipe, et tout le projet, qui en souffre.

## Comment s'y prendre

Vous avez deux semaines, incluant un cours  : le **mer. 21 oct.**, arrivez avec votre concept et vos chapitres (étapes 1 et 2); on avance ensemble le storyboard et la matrice. Voici un ordre qui fonctionne :

1. **Le thème et le concept** (section 1). Partez de votre brainstorm (FigJam ou papier), et discutez-en à deux jusqu'à pouvoir le résumer en une phrase.
2. **Le découpage en chapitres** (section 3) : ce que chaque chapitre raconte, avant de penser aux animations.
3. **Le storyboard dans Figma** (section 2) : à quoi ressemble chaque chapitre, et ce qui bouge quand on défile.
4. **Les animations** de chaque chapitre, en respectant les garde-fous (section 3).
5. **La matrice de responsabilités** (section 4) : qui possède quoi. À faire **ensemble**, et à prendre au sérieux : c'est la base de votre note individuelle.
6. **Le reste** : données, dataviz, médias, technologies, calendrier, risques.

## Le storyboard dans Figma

Un storyboard de défilement n'est pas une maquette de chaque pixel. C'est **la suite des moments** que vit le visiteur.

**Partez du gabarit** : il contient des cadres desktop et mobile, prêts à dupliquer autant de fois que nécessaire.

[:material-download: Télécharger le gabarit de storyboard (Figma)](../../assets/documents/Storyboard_Gabarit_Mobile_Desktop.fig){ .md-button .md-button--primary download }

Pour l'ouvrir : dans l'accueil de Figma, cliquez sur **Importer** (ou glissez le fichier `.fig` dans la fenêtre), puis partagez le fichier avec votre coéquipier ou coéquipière.

- **Au moins un cadre (*frame*) par chapitre**, en format desktop. Un chapitre où plusieurs animations se produisent, en même temps ou l'une après l'autre, peut avoir **plusieurs cadres** : un par moment important.
- Ajoutez des cadres mobiles pour les chapitres les plus animés.
- Dans la description de **chaque** cadre, **indiquez le numéro du chapitre** (ex. « Ch. 3 »), puis annotez :
  - ce qui **apparaît**, **bouge** ou **reste épinglé**;
  - **ce qui le déclenche** : l'entrée dans l'écran, la progression du défilement, un clic;
  - **la technique** prévue : CSS au défilement, GSAP + ScrollTrigger ou IntersectionObserver.
- Les **médias** peuvent être des boîtes grises ou des croquis : ce qui compte, c'est le déroulement.
- Repérez votre **moment dataviz** et votre **composant Vue** (navigateur de chapitres ou barre de progression).

### Remettre le storyboard : le lien et le PDF

Vous remettez votre storyboard **de deux façons** :

- **Le lien Figma**, dans le `README.md` et dans le cahier (section 2), avec accès donné à `marie-michelle.ouellet@cmontmorency.qc.ca`. C'est la version vivante : je pourrai y laisser des commentaires.
- **Un export PDF**, déposé dans le dépôt : `documentation/storyboard.pdf`. C'est la version **figée au moment de la remise** : elle montre ce qui était fait à l'échéance.

Pour exporter : dans Figma, menu principal → *File* → *Export frames to PDF*. Vérifiez que tous vos cadres y sont, dans l'ordre du récit.

Pas d'outils IA de Figma pour le storyboard : dans ce projet, l'IA sert **seulement à créer vos médias**, jusqu'à nouvel ordre.

## Le modèle de données JSON { #le-modele-de-donnees-json }

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
- Vos chapitres affichent-ils des médias différents? Si oui, ajoutez une propriété `type` (ex. `"parallaxe"`, `"dataviz"`) : le JavaScript la lira pour savoir quel HTML construire (voir plus bas).
- Un de vos chapitres contient-il plusieurs moments animés? Si oui, est-ce un chapitre en `plans`?

### À quoi sert la propriété `type`?

Ce n'est pas un type de donnée JavaScript (`string`, `number`) : c'est une **étiquette que vous inventez** dans votre JSON pour dire au JavaScript **quel genre de chapitre** construire.

Le texte se construit toujours de la même façon, mais le média, lui, demande un HTML différent : une parallaxe en calques, une spritesheet, une dataviz. Une seule boucle passe sur tous les chapitres, et pour chacun, un `switch` lit le `type` et choisit le bon gabarit HTML :

```js
function createMedia(chapter) {
  switch (chapter.type) {
    case "parallaxe":
      return `<div class="parallaxe">...</div>`;
    case "dataviz":
      return `<div class="dataviz">...</div>`;
    default:
      return "";
  }
}
```

Sans `type`, il faudrait deviner à partir des autres propriétés (fragile), ou tester l'`id` de chaque chapitre (il faudrait modifier le code chaque fois qu'on renomme un chapitre). C'est le même principe pour `"type": "sequence"` dans l'exemple 2 : il dit au JavaScript de construire plusieurs plans.

## Le moment dataviz

Votre récit doit contenir au moins un moment où des **données réelles** apparaissent : un graphique, un chiffre qui bouge, un élément « vivant » (la météo du jour, l'heure du coucher du soleil, etc.). Ces données viendront d'une **API**, un service en ligne qui renvoie des données en JSON quand on lui envoie une requête avec `fetch()`.

**Au cahier de charges, pas besoin de trouver l'API.** On apprend à interroger une API externe au cours du **mer. 11 nov.**, et c'est là que vous la choisirez et la testerez. Pour l'instant, décrivez seulement :

- **le moment** : dans quel chapitre, et ce que les données apportent à votre histoire;
- **le genre de données** que vous aimeriez montrer (ex. « la température dans une ville », « le nombre de séismes cette semaine », « des œuvres d'un musée »).

Restez souple : si aucune API ne fournit exactement vos données, on ajustera l'idée ensemble.

!!! tip "Pour explorer, si vous êtes curieux (facultatif)"

    - [**Public APIs**](https://github.com/public-apis/public-apis){ :target="_blank" } : une grande liste d'API gratuites, classées par thème. Visez les colonnes **Auth : `No`** (sans clé) et **CORS : `Yes`** (utilisable depuis le navigateur).
    - [**Données Québec**](https://www.donneesquebec.ca/){ :target="_blank" } et les [**données ouvertes de Montréal**](https://donnees.montreal.ca/){ :target="_blank" } : des données d'ici, en français. Plusieurs jeux de données sont des fichiers à télécharger plutôt qu'une API : on en reparlera au cours.
    - Quelques API sans clé, à tester le 11 nov. : [Open-Meteo](https://open-meteo.com/){ :target="_blank" } (météo, climat), [REST Countries](https://restcountries.com/){ :target="_blank" } (pays), [Art Institute of Chicago](https://api.artic.edu/docs/){ :target="_blank" } (œuvres d'art), [USGS](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php){ :target="_blank" } (séismes en temps réel), [PokéAPI](https://pokeapi.co/){ :target="_blank" }, [Open Library](https://openlibrary.org/developers/api){ :target="_blank" } (livres), [Sunrise-Sunset](https://sunrise-sunset.org/api){ :target="_blank" } (lever et coucher du soleil).

## Le gabarit

Copiez tout le bloc ci-dessous (bouton de copie en haut à droite) dans `documentation/CAHIER-DE-CHARGES.md`. Remplacez les indications entre crochets.

````markdown
# Cahier de charges : [Titre du récit]

**Équipe** : [Prénom Nom], [Prénom Nom]
**Thème** : [une cause / un mini-documentaire / une vitrine / un explicatif / une fiction]
**Brainstorm** : [lien FigJam, ou lien vers les photos dans `documentation/brainstorm/`]
**Storyboard Figma** : [lien]
**Storyboard PDF** : [documentation/storyboard.pdf](storyboard.pdf)

## 1. Le concept

[En 3 à 5 phrases : de quoi parle votre récit, quelle émotion ou quelle idée le visiteur doit retenir, et à qui il s'adresse.]

**En une phrase** : [votre récit résumé en une seule phrase]

## 2. Le storyboard

[Le lien Figma, et 2 ou 3 phrases sur le déroulement général : comment le récit commence, où est le point culminant, comment il se termine.]

## 3. Les chapitres

6 à 8 chapitres, environ 100 à 250 mots chacun. Au plus 1 animation signature par chapitre, et au plus 2 sections épinglées dans tout le récit.

| # | Titre | Ce que le chapitre raconte | Animation signature | Technique | Médias | Responsable |
|---|---|---|---|---|---|---|
| 1 | [Ex. La forêt s'éveille] | [Ex. On découvre le lieu, au lever du jour] | [Ex. Parallaxe des arbres au défilement] | [CSS au défilement] | [Ex. Image en calques, 3 plans] | [Prénom] |
| 2 | | | | | | |
| 3 | | | | | | |
| 4 | | | | | | |
| 5 | | | | | | |
| 6 | | | | | | |
| 7 | | | | | | |
| 8 | | | | | | |

Vérification : chaque technique (CSS au défilement, GSAP + ScrollTrigger, IntersectionObserver) apparaît au moins une fois.

## 4. La matrice de responsabilités

| Élément | Responsable | Ce que ça comprend |
|---|---|---|
| Chapitres [numéros] | [Prénom] | Contenu, intégration, animations |
| Chapitres [numéros] | [Prénom] | Contenu, intégration, animations |
| Média animable 1 : [format] | [Prénom] | Préparation et intégration |
| Média animable 2 : [format] | [Prénom] | Préparation et intégration |
| Composant Vue : [navigateur de chapitres ou barre de progression] | [Prénom] | |
| *Fetch* externe et dataviz | [Prénom] | |
| Chargement des chapitres (JSON) | [Prénom] | |
| Structure commune (HTML, CSS de base, mise en page) | [Ensemble ou Prénom] | |

## 5. Le modèle de données

Un exemple d'objet chapitre, tel qu'il sera dans votre fichier JSON (inspirez-vous des [deux exemples plus haut](#le-modele-de-donnees-json)) :

```json
{
  "id": 1,
  "titre": "La forêt s'éveille",
  "texte": "...",
  "medias": [
    { "type": "image", "src": "assets/images/foret-fond.webp", "alt": "..." }
  ]
}
```

[Ajoutez ou retirez des propriétés selon vos besoins, et expliquez en 1 ou 2 phrases vos choix.]

## 6. La dataviz

L'API sera choisie au cours du mer. 11 nov. Pour l'instant, décrivez l'idée.

- **Chapitre** : [numéro]
- **La question** à laquelle le moment répond : [ex. combien de fois la Terre a-t-elle tremblé cette semaine?]
- **Genre de données souhaitées** : [ex. la température heure par heure dans une ville]
- **La forme imaginée** : [chiffre géant / une unité par donnée / barres / échelle / ligne du temps / autre]
- **Ce qu'elles racontent dans le récit** : [1 ou 2 phrases : la chute]
- **Pistes d'API, si vous en avez trouvé** : [facultatif]

## 7. L'inventaire des médias

| Média | Chapitre | Source (produit, banque, IA) | Format | Responsable |
|---|---|---|---|---|
| | | | | |

Médias animables choisis :

- [Prénom] : [image en calques / spritesheet / SVG préparé pour GSAP], pour le chapitre [numéro]
- [Prénom] : [image en calques / spritesheet / SVG préparé pour GSAP], pour le chapitre [numéro]

## 8. Les choix technologiques

[Pour chaque outil, 1 ou 2 phrases : pourquoi lui, pour ce projet.]

- **GSAP + ScrollTrigger** : [...]
- **Vue.js (CDN)** : [...]
- **Hébergement** : [...]
- **Autres** (Anime.js, Chart.js, etc., s'il y a lieu) : [...]

## 9. Le calendrier de l'équipe (jusqu'au prototype du 13 nov.)

| Semaine | [Prénom] | [Prénom] |
|---|---|---|
| 23 oct. | | |
| 28 oct. | | |
| 4 nov. | | |
| 11 nov. | | |

## 10. Les risques et le plan B

[2 ou 3 risques, et ce que vous couperez ou simplifierez si le temps manque. Ex. « Si la spritesheet prend trop de temps, on réduit à 8 images. »]
````

## Avant de remettre

- [ ] Toutes les sections sont remplies : aucun crochet ne reste.
- [ ] Chaque personne a au moins 3 chapitres et un média animable dans la matrice.
- [ ] Chaque technique d'animation apparaît au moins une fois dans le tableau des chapitres.
- [ ] Le moment dataviz est décrit : chapitre, genre de données, ce qu'elles racontent.
- [ ] La trace du brainstorm est accessible : lien FigJam partagé, ou photos lisibles dans `documentation/brainstorm/`.
- [ ] Le lien Figma du storyboard fonctionne, avec accès donné à `marie-michelle.ouellet@cmontmorency.qc.ca`.
- [ ] Le storyboard est exporté en PDF dans `documentation/storyboard.pdf`, avec tous les cadres.
- [ ] Le tout est poussé sur GitHub **au plus tard le ven. 23 oct., 23 h 59**.
