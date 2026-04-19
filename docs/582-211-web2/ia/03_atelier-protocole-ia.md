# Atelier : Le protocole IA → Audit → Amélioration

**Durée estimée : 45–60 minutes**  
**Format : Travail individuel en classe**

---

## Objectif

Expérimenter un workflow professionnel complet avec l'IA : de la génération jusqu'à la livraison d'un code de qualité, en passant par l'analyse critique et la refactorisation. Chaque étape laisse une trace écrite qui prouve l'engagement cognitif de l'étudiant.

---

## Brief du composant à réaliser

> Crée un composant **"carte de témoignage"** (testimonial card) qui contient :
> - Une citation (texte)
> - Un nom d'auteur
> - Un titre ou rôle
> - Un avatar (image ou initiales)
>
> Le composant doit s'adapter à son conteneur avec des **container queries** et utiliser des **custom properties** pour les couleurs, la typographie et les espacements.

---

## Les 4 étapes du protocole

---

### ÉTAPE 1 — Générer (10 min)

Soumettre **deux prompts différents** à un outil IA de ton choix et conserver les deux résultats.

**Prompt A — prompt vague :**
```
Fais-moi une carte de témoignage en HTML et CSS.
```

**Prompt B — prompt précis :**
```
Génère un composant HTML/CSS "carte de témoignage" qui contient une citation, 
un nom d'auteur, un titre et un avatar. Utilise des container queries pour 
l'adaptation au conteneur, des custom properties CSS pour les couleurs 
(--color-bg, --color-text, --color-accent) et les espacements (--space-sm, 
--space-md, --space-lg). Nomme les classes selon une méthodologie BEM.
```

**Ce que tu remets pour cette étape :**
- Les deux prompts (copiés textuellement)
- Le code brut généré pour chacun (sans modification)

> 💡 *Ne corrige rien encore. L'objectif est d'observer la différence de qualité entre les deux sorties.*

---

### ÉTAPE 2 — Comparer (10 min)

Remplis le tableau suivant en comparant les deux versions générées.

| Critère | Version A (prompt vague) | Version B (prompt précis) |
|---|---|---|
| Utilisation des custom properties | | |
| Qualité du nommage des classes | | |
| Présence et pertinence des container queries | | |
| Lisibilité et structure du CSS | | |
| Accessibilité (alt, sémantique HTML) | | |
| Ce que tu garderais | | |
| Ce que tu changerais | | |

**Conclusion en 2–3 phrases :**  
Quelle version est la meilleure base ? Pourquoi ? Qu'est-ce que le prompt précis a changé concrètement ?

---

### ÉTAPE 3 — Auditer (15 min)

Prends la version que tu as choisie comme base et audite-la en ajoutant des **commentaires CSS inline**.

Utilise les balises suivantes dans ton code :

```css
/* ✅ BON : [explication de pourquoi c'est une bonne décision] */

/* ⚠️ DISCUTABLE : [explication du problème] */

/* ❌ ERREUR : [description de l'erreur] → À corriger : [ta proposition] */
```

**Minimum attendu :**
- 3 commentaires `✅ BON`
- 2 commentaires `⚠️ DISCUTABLE`
- 1 commentaire `❌ ERREUR` (avec proposition de correction)

> 💡 *Si tu ne trouves pas d'erreurs, c'est probablement que tu n'as pas encore assez cherché — ou que ton prompt était très bon. Dans ce cas, cherche ce qui manque (états hover/focus, texte alternatif, robustesse sur petit écran).*

---

### ÉTAPE 4 — Améliorer (15–20 min)

Refactorise le code en appliquant tes corrections. Le résultat final doit être un composant que tu serais prêt à livrer à un client.

**Checklist de qualité avant de terminer :**

- [ ] Les custom properties sont définies dans `:root` ou dans le composant
- [ ] Les classes sont nommées de façon contextuelle et cohérente (BEM ou autre méthodologie)
- [ ] Les container queries sont syntaxiquement correctes et logiquement placées
- [ ] Les états interactifs (`hover`, `focus`) sont présents sur le bouton ou les éléments cliquables
- [ ] L'image avatar a un attribut `alt` approprié
- [ ] Le CSS est lisible : indenté, regroupé par composant, sans répétition inutile

**Justification finale — 3 à 5 décisions à expliquer :**

Pour chacune des décisions ci-dessous, écris une phrase :

1. Pourquoi tu as utilisé telle unité (`rem`, `%`, `em`) à tel endroit ?
2. Pourquoi tu as structuré le HTML de cette façon ?
3. Pourquoi tu as gardé (ou modifié) les valeurs des container queries ?
4. Qu'est-ce que l'IA avait fait que tu as conservé, et pourquoi ?
5. Qu'est-ce que l'IA avait fait que tu as changé, et pourquoi ?

---

## Ce qui est évalué dans cet atelier

| Élément | Ce qu'on regarde |
|---|---|
| Les deux prompts | Comprend-il la différence entre un prompt vague et précis ? |
| Le tableau comparatif | A-t-il réellement lu et comparé les deux versions ? |
| Les commentaires d'audit | Ses observations sont-elles pertinentes et justifiées ? |
| Le code final | Est-il de meilleure qualité que la version originale ? |
| Les justifications | Peut-il expliquer ses décisions dans ses propres mots ? |

> ⚠️ **Ce qui n'est pas évalué :** la beauté visuelle du composant ou la complexité du code. Un composant simple, bien compris et bien justifié vaut plus qu'un composant élaboré copié-collé.

---

## Remise

Déposer dans le dépôt GitHub du cours un dossier `atelier-protocole-ia/` contenant :
- `prompts.md` — les deux prompts et les deux codes bruts
- `comparaison.md` — le tableau comparatif et la conclusion
- `audit.css` — le code audité avec commentaires inline
- `final/` — le dossier avec le code refactorisé final (`index.html` + `style.css`)
- `decisions.md` — les 3 à 5 justifications de décisions techniques
