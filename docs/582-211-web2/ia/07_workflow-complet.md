# Workflow professionnel : IA → Audit → Amélioration

> *Ce document est une fiche de référence que tu peux garder ouverte pendant tes projets.*


## Vue d'ensemble du workflow

```
BRIEF
  ↓
PROMPT (structuré, avec contraintes)
  ↓
GÉNÉRATION (par l'IA)
  ↓
LECTURE (avant d'exécuter)
  ↓
EXÉCUTION + OBSERVATION VISUELLE
  ↓
AUDIT (code smells, accessibilité, cohérence)
  ↓
COMPARAISON (si plusieurs variantes)
  ↓
REFACTORISATION
  ↓
DOCUMENTATION (commentaires + justifications)
  ↓
LIVRAISON
```


## Étape par étape

### 1. Préparer le brief

Avant d'ouvrir l'outil IA, réponds à ces questions :

- Quel est le composant ? Quelle est sa fonction ?
- Quelles données contient-il ?
- Dans quel contexte sera-t-il utilisé (grille, sidebar, pleine largeur) ?
- Quelles propriétés de mon système dois-je respecter (y a-t-il des variables CSS à utiliser/respecter) ?
- Quelle convention de nommage est-ce que j'utilise dans ce projet ?
- Y a-t-il des contraintes d'accessibilité spécifiques ?

> Plus tu réponds à ces questions avant de prompter, moins tu refactoriseras après.


<br>

---

### 2. Rédiger le prompt

Utilise la structure suivante :

```
[Composant + contenu] + [contraintes CSS] + [conventions] + [contexte d'utilisation]
```

Inclure dans le prompt :

- Les noms de variables CSS à utiliser (ou la liste de celles disponibles)
- La méthode de nommage (BEM, etc.)
- Le système d'adaptation préféré (container queries vs media queries)
- Les unités à utiliser (`rem` pour la typo, `%` ou `vw` pour les largeurs fluides)
- La demande explicite d'états interactifs (`:hover`, `:focus-visible`)


<br>

---

### 3. Lire avant d'exécuter

Après la génération, **ne pas exécuter immédiatement**.

Lire le code de haut en bas et noter :

- Est-ce que la structure HTML est sémantiquement correcte ?
- Est-ce que les variables utilisées existent dans mon système ?
- Est-ce que le nommage respecte mes conventions ?
- Est-ce que je vois des signaux d'alarme évidents (valeurs magiques, `!important`, sélecteurs profonds) ?


<br>

---

### 4. Exécuter et observer

Afficher dans le navigateur. Se poser les questions :

- Est-ce que ça ressemble à ce que j'ai demandé ?
- Qu'est-ce qui manque visuellement ?
- Est-ce que le composant "casse" à certaines tailles ?
- Est-ce que la navigation au clavier fonctionne (tab, focus visible) ?


<br>

---

### 5. Auditer

Parcourir le code avec la grille des 7 questions (voir *Code Smells en CSS*) :

| Question | Code smell détecté |
|---|---|
| Valeurs numériques sans variable ? | Valeurs magiques |
| Sélecteurs > 2 niveaux de profondeur ? | Spécificité excessive |
| Présence de `!important` ? | Capitulation de cascade |
| Propriété déclarée deux fois ? | Redondance |
| Propriétés par défaut déclarées ? | Superflu |
| Nommage cohérent ? | Convention de nommage |
| États `:hover` et `:focus-visible` présents ? | États manquants |

Ajouter des commentaires inline dans le code :

```css
/* ✅ BON : … */
/* ⚠️ DISCUTABLE : … */
/* ❌ ERREUR : … → À corriger : … */
```


<br>

---

### 6. Comparer (si plusieurs variantes)

Si tu as généré plusieurs versions avec des prompts différents, comparer sur :

- Qualité du nommage
- Utilisation du système de design (variables CSS)
- Logique de l'adaptation (container queries bien placées ?)
- Lisibilité et maintenabilité
- Accessibilité

Choisir la meilleure base — pas forcément la plus élaborée.


<br>

---

### 7. Refactoriser

Appliquer les corrections identifiées lors de l'audit :

- Remplacer les valeurs magiques par des variables
- Simplifier les sélecteurs
- Supprimer le superflu
- Ajouter les états manquants
- Regrouper et réorganiser selon une logique lisible

Tester visuellement après chaque modification significative.


<br>

---

### 8. Documenter

Deux niveaux de documentation :

**Commentaires dans le CSS** (pour le lecteur du code) :

```css
/* Conteneur principal — container-type requis pour les container queries enfants */
.testimonial-card {
  container-type: inline-size;
}

/* Layout en colonne par défaut (mobile-first) */
.testimonial-card__body {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

/* En ligne quand le conteneur est assez large */
@container (min-width: 480px) {
  .testimonial-card__body {
    flex-direction: row;
    align-items: center;
  }
}
```

**Justifications de décisions** (pour le projet ou la présentation) :

- Pourquoi container queries plutôt que media queries ?
- Pourquoi cette valeur de breakpoint ?
- Pourquoi ce nommage plutôt qu'un autre ?
- Qu'est-ce que l'IA a bien fait ? Qu'est-ce que tu as dû corriger ?


<br>

---

### 9. Livrer

Un composant est prêt à livrer quand :

- [ ] Il fonctionne aux résolutions prévues
- [ ] Il est navigable au clavier (tab, focus visible)
- [ ] Les variables CSS utilisées sont toutes définies dans le système
- [ ] Le nommage est cohérent avec le reste du projet
- [ ] Les états interactifs sont présents et accessibles
- [ ] Le code est commenté aux endroits non évidents
- [ ] Les décisions non évidentes sont justifiées


## Résumé en une phrase

> **Laisse l'IA générer la structure, mais garde toi la responsabilité des décisions.**
