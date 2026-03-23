# Atelier progressif

[< retour au *cours 8*](../../cours08.md)

## Activité 4: Atelier progressif : Responsive en paliers (60 min)

.

<!-- Slide 10 -->

### Objectif

Consolider la compréhension des media queries à travers des défis de complexité croissante.

### Consignes générales

- Travaille en autonomie ou en équipe de deux.
- Avance à ton rythme: il n'est pas obligatoire de tout terminer en classe.
- Ce qui n'est pas terminé en classe est à compléter **avant le cours 9**.
- Pose des questions à l'enseignante si tu es bloqué·e plus de 5 minutes.

---

### 🟢 Niveau 1 — Navigation qui se replie

**Défi :** Une navigation horizontale sur grand écran doit devenir verticale sur mobile.

**Code de départ :**

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nav responsive</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }

    body { font-family: sans-serif; }

    .nav {
      background-color: #1a1a2e;
      padding: 1rem 2rem;
    }

    .nav__liste {
      list-style: none;
      display: flex;
      /* À modifier avec une media query */
    }

    .nav__liste a {
      color: #eee;
      text-decoration: none;
      padding: 0.5rem 1rem;
      display: block;
    }

    .nav__liste a:hover {
      background-color: rgba(255,255,255,0.1);
      border-radius: 4px;
    }
  </style>
</head>
<body>
  <nav class="nav">
    <ul class="nav__liste">
      <li><a href="#">Accueil</a></li>
      <li><a href="#">À propos</a></li>
      <li><a href="#">Portfolio</a></li>
      <li><a href="#">Contact</a></li>
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
- [ ] Le code mobile-first (on part du petit, on ajoute pour le grand)
- [ ] Aucun overflow horizontal

---

### 🟡 Niveau 2 — Grille de cartes adaptative

**Défi :** Une grille de cartes qui passe de 1 → 2 → 3 colonnes selon l'espace disponible.

**Code de départ :**

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grille responsive</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }

    body { font-family: sans-serif; padding: 2rem; background: #f5f5f5; }

    .grille {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
    }

    .carte {
      background: white;
      border-radius: 8px;
      padding: 1.5rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      /* Quelle largeur par défaut (mobile) ? */
    }

    .carte h3 { margin-bottom: 0.5rem; color: #1a1a2e; }
    .carte p  { color: #666; font-size: 0.9rem; line-height: 1.5; }
  </style>
</head>
<body>
  <div class="grille">
    <div class="carte"><h3>Projet 1</h3><p>Description courte du projet multimédia réalisé durant la session.</p></div>
    <div class="carte"><h3>Projet 2</h3><p>Description courte du projet multimédia réalisé durant la session.</p></div>
    <div class="carte"><h3>Projet 3</h3><p>Description courte du projet multimédia réalisé durant la session.</p></div>
    <div class="carte"><h3>Projet 4</h3><p>Description courte du projet multimédia réalisé durant la session.</p></div>
    <div class="carte"><h3>Projet 5</h3><p>Description courte du projet multimédia réalisé durant la session.</p></div>
    <div class="carte"><h3>Projet 6</h3><p>Description courte du projet multimédia réalisé durant la session.</p></div>
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

### 🔴 Niveau 3 — Composant héros complexe

**Défi :** Un composant "héros" (section d'accueil) qui se réorganise complètement selon la résolution, avec changements typographiques.

**Point de départ :** Structure HTML fournie — à toi d'écrire tout le CSS responsive.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Héros responsive</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: sans-serif; }

    /* Écris tout ton CSS ici */
    /* Pense mobile-first */

  </style>
</head>
<body>
  <section class="hero">
    <div class="hero__contenu">
      <span class="hero__etiquette">Nouveauté 2026</span>
      <h1 class="hero__titre">Créer des interfaces qui s'adaptent vraiment</h1>
      <p class="hero__description">
        Apprends à penser en CSS fluide avant de penser en breakpoints.
        Le responsive commence bien avant les media queries.
      </p>
      <div class="hero__actions">
        <a href="#" class="btn btn--primaire">Commencer</a>
        <a href="#" class="btn btn--secondaire">En savoir plus</a>
      </div>
    </div>
    <div class="hero__visuel">
      <!-- Simuler une image avec un bloc coloré -->
    </div>
  </section>
</body>
</html>
```

**Exigences :**

| Propriété | Mobile | Desktop (≥ 768px) |
|-----------|--------|-------------------|
| Layout | `.hero` en colonne | `.hero` en rangée (50/50) |
| `.hero__titre` font-size | `clamp(1.75rem, 5vw, 1.75rem)` | `clamp(1.75rem, 4vw, 3rem)` |
| `.hero__visuel` hauteur | 200px | Hauteur de la section |
| `.hero__visuel` background | `#1a1a2e` | `#1a1a2e` |
| Boutons | empilés (colonne) | côte à côte (rangée) |
| Padding `.hero__contenu` | `2rem` | `4rem` |

**Critères de réussite :**

- [ ] Les deux configurations sont visuellement propres
- [ ] `clamp()` est utilisé pour la typographie
- [ ] L'approche mobile-first est respectée
- [ ] Le code est commenté (pourquoi ce breakpoint, pourquoi cette valeur)



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



## Références utiles

- [MDN — Media queries](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [MDN — Viewport meta tag](https://developer.mozilla.org/fr/docs/Web/HTML/Viewport_meta_tag)
- [CSS Tricks — A Complete Guide to CSS Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
- [La Console — Responsive](https://laconsole.dev)
