# Atelier progressif

[< retour au *cours 8*](../../cours08.md)

## Activité 4 : Atelier progressif — Responsive en paliers (60 min)

<!-- Slide 10 -->

> 🎮 **Univers de l'atelier : ZONEOUT 2026**
> Tu travailles sur le site officiel de **ZONEOUT**, un tournoi battle royale québécois annuel basé sur le jeu fictif **Dropzone**. Le site doit être accessible autant sur mobile (les joueurs vérifient leurs stats entre deux parties) que sur desktop (pour les spectateurs en direct).

### Objectif

Consolider la compréhension des media queries à travers des défis de complexité croissante.

### Consignes générales

- Travaille en autonomie ou en équipe de deux.
- Avance à ton rythme : il n'est pas obligatoire de tout terminer en classe.
- Ce qui n'est pas terminé en classe est à compléter **avant le cours 9**.
- Pose des questions à l'enseignante si tu es bloqué·e plus de 5 minutes.

---

### 🟢 Niveau 1 — Navigation du tournoi

**Défi :** La barre de navigation du site ZONEOUT est horizontale sur grand écran. Sur mobile, elle doit s'empiler verticalement pour rester utilisable.

**Code de départ :**

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ZONEOUT 2026</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }

    body { font-family: sans-serif; }

    .site-nav {
      background-color: #0d0d1a;
      padding: 1rem 2rem;
      border-bottom: 3px solid #ff4fcb;
    }

    .site-nav__logo {
      color: #ff4fcb;
      font-weight: 900;
      font-size: 1.2rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }

    .site-nav__list {
      list-style: none;
      display: flex;
      /* À modifier avec une media query */
    }

    .site-nav__list a {
      color: #eee;
      text-decoration: none;
      padding: 0.5rem 1rem;
      display: block;
      text-transform: uppercase;
      font-size: 0.85rem;
      letter-spacing: 0.05em;
    }

    .site-nav__list a:hover {
      color: #ff4fcb;
      background-color: rgba(255, 79, 203, 0.1);
      border-radius: 4px;
    }
  </style>
</head>
<body>
  <nav class="site-nav">
    <div class="site-nav__logo">ZONEOUT</div>
    <ul class="site-nav__list">
      <li><a href="#">Accueil</a></li>
      <li><a href="#">Tournois</a></li>
      <li><a href="#">Classement</a></li>
      <li><a href="#">Équipes</a></li>
      <li><a href="#">Billetterie</a></li>
    </ul>
  </nav>
</body>
</html>
```

**Résultat attendu :**

- **≥ 768px** : liens côte à côte (horizontal)
- **< 768px** : liens empilés (vertical), pleine largeur

**Critères de réussite :**

- [ ] La navigation fonctionne dans les deux configurations
- [ ] Le code est mobile-first (on part du petit, on ajoute pour le grand)
- [ ] Aucun overflow horizontal

---

### 🟡 Niveau 2 — Leaderboard des joueurs

**Défi :** La page de classement affiche les fiches joueurs en grille. Elle passe de 1 → 2 → 3 colonnes selon l'espace disponible.

**Code de départ :**

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ZONEOUT 2026 — Classement</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: sans-serif;
      padding: 2rem;
      background: #0d0d1a;
      color: #eee;
    }

    .leaderboard-title {
      font-size: 1.5rem;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #ff4fcb;
      margin-bottom: 1.5rem;
    }

    .player-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
    }

    .player-card {
      background: #1a1a2e;
      border-radius: 8px;
      padding: 1.5rem;
      border: 1px solid #2a2a4a;
      /* Quelle largeur par défaut (mobile) ? */
    }

    .player-card__avatar {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: #ff4fcb;
      margin-bottom: 0.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.2rem;
      color: #0d0d1a;
    }

    .player-card__name {
      font-weight: 700;
      font-size: 1rem;
      margin-bottom: 0.25rem;
    }

    .player-card__rank {
      font-size: 0.8rem;
      color: #ff4fcb;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 0.75rem;
    }

    .player-card__stats {
      display: flex;
      gap: 1rem;
      font-size: 0.85rem;
      color: #aaa;
    }

    .player-card__stat span {
      display: block;
      font-weight: 700;
      color: #eee;
      font-size: 1rem;
    }
  </style>
</head>
<body>
  <h2 class="leaderboard-title">🏆 Classement — ZONEOUT 2026</h2>
  <div class="player-grid">

    <div class="player-card">
      <div class="player-card__avatar">D</div>
      <div class="player-card__name">DragonSlyr</div>
      <div class="player-card__rank">⚡ Légendaire</div>
      <div class="player-card__stats">
        <div class="player-card__stat">K/D <span>4.2</span></div>
        <div class="player-card__stat">Winrate <span>68%</span></div>
      </div>
    </div>

    <div class="player-card">
      <div class="player-card__avatar">M</div>
      <div class="player-card__name">xX_Maple_Xx</div>
      <div class="player-card__rank">🔥 Diamant</div>
      <div class="player-card__stats">
        <div class="player-card__stat">K/D <span>3.7</span></div>
        <div class="player-card__stat">Winrate <span>61%</span></div>
      </div>
    </div>

    <div class="player-card">
      <div class="player-card__avatar">Z</div>
      <div class="player-card__name">ZephyrQC</div>
      <div class="player-card__rank">🔥 Diamant</div>
      <div class="player-card__stats">
        <div class="player-card__stat">K/D <span>3.1</span></div>
        <div class="player-card__stat">Winrate <span>55%</span></div>
      </div>
    </div>

    <div class="player-card">
      <div class="player-card__avatar">N</div>
      <div class="player-card__name">N0vaStrike</div>
      <div class="player-card__rank">💎 Platine</div>
      <div class="player-card__stats">
        <div class="player-card__stat">K/D <span>2.8</span></div>
        <div class="player-card__stat">Winrate <span>49%</span></div>
      </div>
    </div>

    <div class="player-card">
      <div class="player-card__avatar">V</div>
      <div class="player-card__name">VortexMTL</div>
      <div class="player-card__rank">💎 Platine</div>
      <div class="player-card__stats">
        <div class="player-card__stat">K/D <span>2.5</span></div>
        <div class="player-card__stat">Winrate <span>44%</span></div>
      </div>
    </div>

    <div class="player-card">
      <div class="player-card__avatar">P</div>
      <div class="player-card__name">PixelPoutine</div>
      <div class="player-card__rank">🥈 Or</div>
      <div class="player-card__stats">
        <div class="player-card__stat">K/D <span>1.9</span></div>
        <div class="player-card__stat">Winrate <span>38%</span></div>
      </div>
    </div>

  </div>
</body>
</html>
```

**Résultat attendu :**

- **Mobile (< 600px)** : 1 colonne
- **Tablette (600px–899px)** : 2 colonnes
- **Desktop (≥ 900px)** : 3 colonnes

**Indice :** Pour gérer les colonnes avec Flexbox, pense à `flex-basis` et `calc()` pour tenir compte du `gap`.

**Critères de réussite :**

- [ ] Les trois paliers fonctionnent correctement
- [ ] Les cartes ont la même hauteur dans une même rangée (bonus)
- [ ] L'approche mobile-first est respectée

---

### 🔴 Niveau 3 — Page d'accueil du tournoi

**Défi :** Le héros de la page d'accueil ZONEOUT se réorganise complètement entre mobile et desktop, avec des changements typographiques.

**Point de départ :** Structure HTML fournie — à toi d'écrire tout le CSS responsive.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ZONEOUT 2026 — Tournoi Battle Royale</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: sans-serif; background: #0d0d1a; color: #eee; }

    /* Écris tout ton CSS ici */
    /* Pense mobile-first */

  </style>
</head>
<body>
  <section class="tournament-hero">

    <div class="tournament-hero__content">
      <span class="tournament-hero__label">Battle Royale • Édition 2026</span>
      <h1 class="tournament-hero__title">Entre dans la zone. Sors en champion.</h1>
      <p class="tournament-hero__desc">
        ZONEOUT est le plus grand tournoi Dropzone du Québec.
        256 joueurs. Un seul vainqueur. Inscris-toi avant le 15 avril.
      </p>
      <div class="tournament-hero__actions">
        <a href="#" class="btn btn--primary">S'inscrire maintenant</a>
        <a href="#" class="btn btn--secondary">Voir le classement</a>
      </div>
    </div>

    <div class="tournament-hero__visual">
      <!-- Simuler une image avec un bloc coloré -->
    </div>

  </section>
</body>
</html>
```

**Exigences :**

| Propriété | Mobile | Desktop (≥ 768px) |
|-----------|--------|-------------------|
| Layout `.tournament-hero` | en colonne | en rangée (50/50) |
| `.tournament-hero__title` font-size | `clamp(1.75rem, 5vw, 1.75rem)` | `clamp(1.75rem, 4vw, 3rem)` |
| `.tournament-hero__visual` hauteur | `200px` | hauteur de la section |
| `.tournament-hero__visual` background | `#ff4fcb` | `#ff4fcb` |
| Boutons `.tournament-hero__actions` | empilés (colonne) | côte à côte (rangée) |
| Padding `.tournament-hero__content` | `2rem` | `4rem` |

**Critères de réussite :**

- [ ] Les deux configurations sont visuellement propres
- [ ] `clamp()` est utilisé pour la typographie
- [ ] L'approche mobile-first est respectée
- [ ] Le code est commenté (pourquoi ce breakpoint, pourquoi cette valeur)

---

## Synthèse — La règle à retenir

> **Ajoute un breakpoint quand ton contenu te le demande.**
> Jamais parce que c'est la taille d'un appareil populaire.

### Checklist responsive de base

Avant de déclarer ton interface responsive, vérifie :

- [ ] `<meta name="viewport" content="width=device-width, initial-scale=1.0">` est présent
- [ ] Aucune barre de défilement horizontale à aucune taille
- [ ] Le texte est lisible sans zoom sur mobile
- [ ] Les cibles tactiles (liens, boutons) font au moins 44px de hauteur
- [ ] Tes breakpoints ont été choisis en observant le contenu, pas un appareil spécifique
- [ ] L'approche mobile-first est respectée (`min-width`, pas `max-width`)

---

## Références utiles

- [Notes du cours Web 2 - Responsive, media queries, breakpoints...](../../css/mediaqueries-breakpoints.md)
- [MDN — Media queries](https://developer.mozilla.org/fr/docs/Web/CSS/Guides/Media_queries/Using)
- [MDN — Viewport meta tag](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/meta/name/viewport)
- [CSS Tricks — A Complete Guide to CSS Media Queries (anglais)](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
- [La Console — Responsive](https://laconsole.dev/formations/css/media-queries)
