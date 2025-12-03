# Grille de Test Externe - Contrôle Qualité

**Équipe testeuse :** [Votre équipe]  
**Projet testé :** [Nom du projet de l'autre équipe]  
**Type de projet :** [Mémoires interactives / Trace ton chemin]  
**Date des tests :** [Date]

---

## 📋 Instructions

**Comment utiliser cette grille :**

1. ✅ Testez CHAQUE élément de la checklist
2. 📝 Cochez les éléments qui fonctionnent
3. 🐛 Pour chaque bug trouvé :
   - Créez une carte Trello avec le template fourni
   - Prenez un screenshot
   - Notez le numéro de la carte dans cette grille
4. 📊 Remplissez le résumé à la fin

**Différenciez :**
- 🐛 **Bug** = Ne fonctionne PAS comme prévu (à reporter)
- 💡 **Suggestion** = Idée d'amélioration (ne PAS reporter comme bug)
- ❌ **Feature manquante** = Pas un bug si c'était optionnel

---

## ✅ TESTS FONCTIONNELS DE BASE

### 1. Navigation (PRIORITÉ HAUTE)

| Test | ✓ | Bug # | Notes |
|------|---|-------|-------|
| Je peux accéder à toutes les pages/salles/chapitres | ☐ | |  |
| Les liens de navigation fonctionnent | ☐ | | |
| Le bouton retour du navigateur fonctionne | ☐ | | |
| Les URLs directes fonctionnent (copier-coller URL) | ☐ | | |
| Aucun lien cassé (erreur 404) | ☐ | | |
| Le menu est accessible sur toutes les pages | ☐ | | |

**Bugs trouvés dans cette section :** [Nombre]

---

### 2. Fonctionnalités principales (PRIORITÉ HAUTE)

#### Pour "Mémoires interactives" SEULEMENT

| Test | ✓ | Bug # | Notes |
|------|---|-------|-------|
| **AJOUT DE MÉMOIRE** | | | |
| Le formulaire d'ajout s'ouvre correctement | ☐ | | |
| Je peux remplir tous les champs (titre, description, date, tags) | ☐ | | |
| Je peux uploader une image | ☐ | | |
| La validation fonctionne (champs obligatoires) | ☐ | | |
| La mémoire s'ajoute à la liste après sauvegarde | ☐ | | |
| La mémoire est encore là après rafraîchissement (F5) | ☐ | | |
| **ÉDITION DE MÉMOIRE** | | | |
| Je peux ouvrir le formulaire d'édition | ☐ | | |
| Les champs se pré-remplissent avec les données existantes | ☐ | | |
| Je peux modifier les informations | ☐ | | |
| Les modifications sont sauvegardées correctement | ☐ | | |
| **SUPPRESSION DE MÉMOIRE** | ☐ | | |
| Je peux supprimer une mémoire | ☐ | | |
| La mémoire disparaît de la liste | ☐ | | |
| La suppression est permanente (après F5) | ☐ | | |
| **AFFICHAGE** | | | |
| Toutes les mémoires s'affichent correctement | ☐ | | |
| Les images s'affichent | ☐ | | |
| Les tags sont visibles | ☐ | | |
| La mise en page des cartes est correcte | ☐ | | |
| **FILTRES ET RECHERCHE** | | | |
| La recherche par mot-clé fonctionne | ☐ | | |
| Le filtre par tag fonctionne | ☐ | | |
| Le filtre par salle fonctionne | ☐ | | |
| Je peux retirer les filtres | ☐ | | |

**Bugs trouvés dans cette section :** [Nombre]

---

#### Pour "Trace ton chemin" SEULEMENT

| Test | ✓ | Bug # | Notes |
|------|---|-------|-------|
| **LECTURE DE L'HISTOIRE** | | | |
| Le texte s'affiche correctement | ☐ | | |
| Le texte est lisible (taille, contraste) | ☐ | | |
| Les images/backgrounds s'affichent | ☐ | | |
| Je peux naviguer entre les chapitres | ☐ | | |
| **SYSTÈME DE CHOIX** | | | |
| Les boutons de choix s'affichent | ☐ | | |
| Les choix sont cliquables | ☐ | | |
| Cliquer sur un choix mène au bon chapitre suivant | ☐ | | |
| Les différents choix mènent à des chapitres DIFFÉRENTS | ☐ | | |
| **BRANCHES NARRATIVES** | | | |
| Les branches fonctionnent (pas juste linéaire) | ☐ | | |
| Aucun "dead-end" (chapitre sans suite) | ☐ | | |
| **FINS** | | | |
| J'ai réussi à atteindre au moins 2 fins différentes | ☐ | | |
| Les écrans de fin s'affichent correctement | ☐ | | |
| **TRACKING (si implémenté)** | | | |
| Le karma/stats se met à jour après les choix | ☐ | | |
| L'inventaire fonctionne (si applicable) | ☐ | | |
| L'historique des décisions se remplit | ☐ | | |

**Bugs trouvés dans cette section :** [Nombre]

---

## 📱 TESTS RESPONSIVE

| Appareil | Taille | ✓ | Bug # | Notes |
|----------|--------|---|-------|-------|
| **Mobile** | 375px | | | |
| - Tout s'affiche correctement (pas de débordement) | ☐ | | |
| - Navigation fonctionne | ☐ | | |
| - Boutons sont assez grands pour cliquer | ☐ | | |
| - Formulaires fonctionnent | ☐ | | |
| - Texte est lisible | ☐ | | |
| **Tablette** | 768px | | | |
| - Tout s'affiche correctement | ☐ | | |
| - Navigation fonctionne | ☐ | | |
| - Mise en page adaptée | ☐ | | |
| **Desktop** | 1920px | | | |
| - Tout s'affiche correctement | ☐ | | |
| - Pas de stretching excessif | ☐ | | |

**Comment tester :**
1. Ouvrir DevTools (F12)
2. Cliquer sur l'icône téléphone/tablette
3. Sélectionner la taille d'écran
4. Tester les fonctionnalités principales

**Bugs trouvés dans cette section :** [Nombre]

---

## 🌐 TESTS MULTI-NAVIGATEURS

| Navigateur | Version | ✓ | Bug # | Notes |
|------------|---------|---|-------|-------|
| **Chrome** | [X] | | | |
| - Toutes les fonctionnalités marchent | ☐ | | |
| - Pas d'erreurs dans la console | ☐ | | |
| **Firefox** | [X] | | | |
| - Toutes les fonctionnalités marchent | ☐ | | |
| - Pas d'erreurs dans la console | ☐ | | |
| **Safari** (si accessible) | [X] | | | |
| - Toutes les fonctionnalités marchent | ☐ | | |
| - Pas d'erreurs dans la console | ☐ | | |

**Note :** Si vous n'avez pas accès à Safari, notez-le dans le rapport.

**Bugs trouvés dans cette section :** [Nombre]

---

## ♿ TESTS D'ACCESSIBILITÉ

| Test | ✓ | Bug # | Notes |
|------|---|-------|-------|
| **Navigation au clavier** | | | |
| Tab fonctionne pour naviguer entre les éléments | ☐ | | |
| Shift+Tab fonctionne pour revenir en arrière | ☐ | | |
| Focus visible sur les éléments (outline/border) | ☐ | | |
| Enter/Space activent les boutons | ☐ | | |
| **Images** | | | |
| Toutes les images ont un attribut alt | ☐ | | |
| Les alt sont descriptifs (pas juste "image") | ☐ | | |
| Images décoratives ont alt="" (vide) | ☐ | | |
| **Formulaires** | | | |
| Tous les champs ont des labels visibles | ☐ | | |
| Les erreurs sont clairement indiquées | ☐ | | |
| **Contraste** | | | |
| Texte principal lisible (bon contraste) | ☐ | | |
| Boutons lisibles (bon contraste) | ☐ | | |
| Liens visibles | ☐ | | |

**Comment tester le contraste :**
Utiliser : https://webaim.org/resources/contrastchecker/

**Bugs trouvés dans cette section :** [Nombre]

---

## 🐛 TESTS DE CAS LIMITES

| Test | ✓ | Bug # | Notes |
|------|---|-------|-------|
| **Formulaires avec données inhabituelles** | | | |
| Soumettre un formulaire vide → message d'erreur ? | ☐ | | |
| Texte très long (1000 caractères) dans un champ | ☐ | | |
| Caractères spéciaux : émojis 🌍, accents é, apostrophes ' | ☐ | | |
| **Upload d'images (si applicable)** | | | |
| Petite image (100 KB) fonctionne | ☐ | | |
| Grande image (5 MB) → bloquée ou message ? | ☐ | | |
| Image très large (5000px) ne casse pas la mise en page | ☐ | | |
| **Navigation inhabituelle** | | | |
| Bouton retour du navigateur après plusieurs actions | ☐ | | |
| Rafraîchir la page (F5) ne perd pas les données | ☐ | | |
| URL directe vers une page spécifique fonctionne | ☐ | | |

**Bugs trouvés dans cette section :** [Nombre]

---

## 🚀 TESTS DE PERFORMANCE (optionnel mais recommandé)

**Lighthouse (Chrome DevTools) :**

| Page testée | Performance | Accessibility | Best Practices | Notes |
|-------------|------------|---------------|----------------|-------|
| Page d'accueil | /100 | /100 | /100 | |
| [Page principale] | /100 | /100 | /100 | |

**Comment faire Lighthouse :**
1. F12 → Onglet Lighthouse
2. Cocher : Performance, Accessibility, Best Practices
3. Mode : Desktop OU Mobile
4. Cliquer "Analyze page load"

**Temps de chargement perçu :**
- Page d'accueil : [X] secondes
- Page principale : [X] secondes

---

## 📊 RÉSUMÉ DES TESTS

### Statistiques

**Total de tests effectués :** [X]  
**Tests réussis :** [X]  
**Bugs trouvés :** [X]

**Répartition par priorité :**
- 🔴 **Critiques** (bloquants) : [X] bugs
- 🟠 **Majeurs** (impact important) : [X] bugs
- 🟡 **Mineurs** (améliorations) : [X] bugs

### Environnements testés

- ✅ Chrome Desktop
- ✅ Firefox Desktop
- ⚠️ Mobile (DevTools uniquement)
- ❌ Safari (pas d'accès)

### Temps consacré aux tests

**Total :** environ [X] heures

---

## ⭐ IMPRESSION GÉNÉRALE

**Évaluation globale (1-5 étoiles) :**

| Critère | Note | Commentaire |
|---------|------|-------------|
| **Facilité d'utilisation** | ⭐⭐⭐⭐☆ | [Ex: Interface intuitive, facile à comprendre] |
| **Stabilité** (peu de bugs) | ⭐⭐⭐☆☆ | [Ex: Quelques bugs mais pas critiques] |
| **Design visuel** | ⭐⭐⭐⭐⭐ | [Ex: Très soigné et moderne] |
| **Performance** | ⭐⭐⭐☆☆ | [Ex: Un peu lent au chargement] |

**Commentaire général (3-4 phrases) :**

[Décrivez votre expérience globale en testant le projet. Qu'est-ce qui fonctionne bien ? Qu'est-ce qui pourrait être amélioré ? Recommanderiez-vous ce projet à un ami ?]

---

## 🎁 BONUS : Points forts du projet

**3 choses que nous avons particulièrement aimées :**

1. [Ex: Design très soigné avec palette de couleurs cohérente]
2. [Ex: Navigation fluide et intuitive]
3. [Ex: Fonctionnalités bien implémentées et fonctionnelles]

---

## 💡 SUGGESTIONS (optionnel - PAS des bugs)

**Idées d'amélioration si l'équipe avait plus de temps :**

- [Ex: Ajouter un mode sombre]
- [Ex: Animations sur les transitions]
- [Ex: Tutoriel au premier lancement]

**Note :** Ces suggestions ne sont PAS des bugs et ne doivent PAS être dans Trello avec les bugs.

---

## ✅ VALIDATION

**Cette grille a été complétée par :**
- [Nom membre 1] - [X] heures de tests
- [Nom membre 2] - [X] heures de tests  
- [Nom membre 3] - [X] heures de tests

**Date de complétion :** [Date]

**Lien vers Trello avec toutes les cartes de bugs :** [URL]