# Exercice guidé: requête média (media query)

[< retour au *cours 8*](../../cours08.md)

## Activité 3 — Exercice : une media query (30 min)

<!-- Slide 8 -->

### Objectif

Faire fonctionner la mécanique de base une première fois dans tes mains — d'abord à l'intérieur d'un composant, ensuite sur la mise en page globale.



## Phase 1 — La carte qui se retourne

### Point de départ

- [ ] Dans ton dossier de classement de fichiers du cours "Web2", crée un dossier `exerc-mediaqueries` et ouvre ce dossier dans VS Code.
- [ ] Dans ce dossier, via VS Code, crée un fichier `index.html` et ajoutes-y ce code :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Albums à écouter</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: sans-serif;
      background-color: #111;
      color: #eee;
      padding: 2rem;
    }

    h1 {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      color: #fff;
    }

    /* --- Conteneur de la grille --- */
    .grille {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    /* --- Carte individuelle --- */
    .card {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1.2rem;
      background-color: #1e1e1e;
      border-radius: 10px;
    }

    /* --- Pochette (bloc coloré) --- */
    .card__img {
      border-radius: 6px;
      overflow: hidden;
      height: 200px;
      flex-shrink: 0;
      display: flex;
      align-items: flex-end;
      padding: 1rem;
    }

    .card__img span {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.5px;
      line-height: 1.3;
      text-transform: uppercase;
    }

    /* Couleurs uniques par album */
    .card--billie   .card__img { background: linear-gradient(135deg, #1a3a5c, #0a1628); }
    .card--billie   .card__img span { color: #7ab8e8; }

    .card--sabrina  .card__img { background: linear-gradient(135deg, #c8a882, #7a4f2e); }
    .card--sabrina  .card__img span { color: #f5e6d3; }

    .card--charli   .card__img { background: linear-gradient(135deg, #7ab84a, #3d6020); }
    .card--charli   .card__img span { color: #d4f0a8; }

    .card--weeknd   .card__img { background: linear-gradient(135deg, #1a0a2e, #4a1a6e); }
    .card--weeknd   .card__img span { color: #c8a0e8; }

    /* --- Contenu texte --- */
    .card__txt {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .card__genre {
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #aaa;
    }

    .card__title {
      font-size: 1.2rem;
      font-weight: 700;
      color: #fff;
    }

    .card__artist {
      font-size: 0.95rem;
      color: #bbb;
    }

    .card__desc {
      font-size: 0.88rem;
      color: #888;
      line-height: 1.6;
    }

    .card__tag {
      display: inline-block;
      margin-top: 0.25rem;
      font-size: 0.75rem;
      background-color: #333;
      color: #ccc;
      padding: 3px 10px;
      border-radius: 20px;
      align-self: flex-start;
    }

    /* ================================
       Tes media queries vont ici
       ================================ */

  </style>
</head>
<body>

  <h1>🎧 Albums à écouter absolument</h1>

  <div class="grille">

    <!-- Carte 1 -->
    <div class="card card--billie">
      <div class="card__img">
        <span>Billie Eilish<br>Hit Me Hard and Soft</span>
      </div>
      <div class="card__txt">
        <span class="card__genre">Pop alternative</span>
        <h2 class="card__title">HIT ME HARD AND SOFT</h2>
        <p class="card__artist">Billie Eilish · 2024</p>
        <p class="card__desc">Un album intime et sans compromis. Billie y explore l'identité, la célébrité et les relations amoureuses avec une vulnérabilité rare. Le titre <em>Birds of a Feather</em> est devenu incontournable.</p>
        <span class="card__tag">17 titres</span>
      </div>
    </div>

    <!-- Carte 2 -->
    <div class="card card--sabrina">
      <div class="card__img">
        <span>Sabrina Carpenter<br>Short n' Sweet</span>
      </div>
      <div class="card__txt">
        <span class="card__genre">Pop</span>
        <h2 class="card__title">Short n' Sweet</h2>
        <p class="card__artist">Sabrina Carpenter · 2024</p>
        <p class="card__desc">L'album de l'été 2024. Avec <em>Espresso</em> et <em>Please Please Please</em>, Sabrina Carpenter a dominé les charts mondiaux avec un mélange de pop rétro, d'humour et d'audace assumée.</p>
        <span class="card__tag">12 titres</span>
      </div>
    </div>

    <!-- Carte 3 -->
    <div class="card card--charli">
      <div class="card__img">
        <span>Charli XCX<br>BRAT</span>
      </div>
      <div class="card__txt">
        <span class="card__genre">Hyperpop · Dance</span>
        <h2 class="card__title">BRAT</h2>
        <p class="card__artist">Charli XCX · 2024</p>
        <p class="card__desc">Le disque le plus polarisant de 2024. Agressif, festif et confessionnel à la fois — <em>brat summer</em> est devenu un phénomène culturel bien au-delà de la musique.</p>
        <span class="card__tag">15 titres</span>
      </div>
    </div>

    <!-- Carte 4 -->
    <div class="card card--weeknd">
      <div class="card__img">
        <span>The Weeknd<br>Hurry Up Tomorrow</span>
      </div>
      <div class="card__txt">
        <span class="card__genre">R&B · Synth-pop</span>
        <h2 class="card__title">Hurry Up Tomorrow</h2>
        <p class="card__artist">The Weeknd · 2025</p>
        <p class="card__desc">La conclusion de la trilogie commencée avec <em>After Hours</em>. Un album sombre et cinématographique qui clôt un chapitre majeur de la carrière de l'artiste canadien.</p>
        <span class="card__tag">22 titres</span>
      </div>
    </div>

  </div><!-- fin .grille -->

</body>
</html>
```

### Ta mission — Phase 1

À partir de **1600px de large**, chaque carte doit passer en disposition horizontale : pochette à gauche, texte à droite.

**Ajoute une media query** dans le fichier pour obtenir ce résultat. Tu n'as pas le droit de modifier le HTML.

```css
/* Indice de structure */
@media (min-width: ???) {
  .card {
    /* flex-direction: ??? */
  }

  .card__img {
    /* width: ??? */
    /* height: ??? */
    /* flex-shrink: 0 */
  }
}
```

### Validation — Phase 1

- [ ] Rétrécis et agrandis la fenêtre : la transition doit se faire proprement sur les 4 cartes.
- [ ] Aucune barre de défilement horizontale ne doit apparaître.
- [ ] La pochette et le texte restent lisibles dans les deux configurations.

> **Note :** As-tu inclus `<meta name="viewport" ...>` ? Sans lui, la media query ne fonctionnera pas sur mobile. Vérifie.



## Phase 2 — La grille qui se réorganise

Tu as maintenant une carte qui s'adapte à l'intérieur. Il est temps d'adapter la **mise en page globale** — c'est-à-dire comment les cartes se placent les unes par rapport aux autres.

### Ta mission — Phase 2

Le conteneur `.grille` doit changer de nombre de colonnes selon la largeur de l'écran :

| Largeur de fenêtre | Disposition |
|--------------------|-------------|
| Moins de 600px | **1 colonne** — les cartes s'empilent *(déjà en place)* |
| Entre 600px et 1599px | **2 colonnes** — les cartes côte à côte |
| 1600px et plus | **1 colonne** — toutes les cartes s'empilent |

**Ajoute les media queries nécessaires** sur `.grille` et `.card`. Tu n'as toujours pas le droit de modifier le HTML.

```css
/* Indice de structure */
/* La disposition par défaut (1 colonne) est déjà dans ton CSS de base.
   Il te reste à ajouter les deux breakpoints suivants : */

@media (min-width: ???) {
  .grille {
    /* flex-direction: ??? */
    /* flex-wrap: ??? */
  }

  .card {
    /* Quelle largeur donner à chaque carte pour qu'il y en ait 2 par rangée ? */
    /* Pense à calc() et au gap... */
  }
}

@media (min-width: ???) {

  .grille {
    /* flex-direction: ??? */
    /* flex-wrap: ??? */
  }

  .card {
   
  }
}
```

> 💡 **Indice :** En phase 2, tu travailles sur `.grille` (comment les cartes se placent entre elles) et non plus sur `.card` (ce qui se passe à l'intérieur d'une carte). Ce sont deux niveaux distincts.

> 💡 **Rappel `calc()` :** Pour obtenir 2 cartes par rangée avec un `gap` de `1.5rem`, la largeur de chaque carte se calcule ainsi : `calc(50% - 0.75rem)`. Pourquoi `-0.75rem` ? Parce que le gap total (`1.5rem`) est divisé entre les deux cartes — chacune cède la moitié.

### Validation — Phase 2

- [ ] À moins de 600px : les cartes s'empilent en 1 colonne.
- [ ] Entre 600px et 1599px : les cartes s'affichent en 2 colonnes.
- [ ] À 1600px et plus : les cartes s'empilent en 1 colonne (mais elles ont un style horizontal)
- [ ] Aucun débordement horizontal à aucune taille d'écran.
- [ ] **Bonus :** Les cartes d'une même rangée ont toutes la même hauteur.
