# Grille d'Évaluation - Trace ton chemin

**Nom de l'équipe:** _______________  
**Projet:** _______________  
**Date d'évaluation:** _______________  
**Évaluateur:** _______________

---

## 📊 Barème Total: 100 points

---

## 1. Cahier de Charges (15 points)

### 1.1 Qualité du document (7 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| Document complet et structuré | /2 | | |
| Synopsis et concept clairs | /2 | | |
| Arbre narratif détaillé et cohérent | /2 | | |
| Planning prévisionnel réaliste | /1 | | |
| **Sous-total** | **/7** | | |

### 1.2 Maquettes Figma (5 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| Minimum 5 écrans maquettés | /2 | | |
| Design cohérent et lisible | /1 | | |
| Interface de choix bien pensée | /1 | | |
| Version mobile présente | /1 | | |
| **Sous-total** | **/5** | | |

### 1.3 Architecture narrative (3 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| Arbre de décisions bien structuré | /2 | | |
| Système de conséquences défini | /1 | | |
| **Sous-total** | **/3** | | |

**Total Section 1:** **/15**

---

## 2. Architecture Vue.js (20 points)

### 2.1 Structure des composants (10 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| Minimum 8 composants pertinents créés | /3 | | |
| Composants bien découpés (responsabilité unique) | /2 | | |
| Props correctement typées (avec validation) | /2 | | |
| Events personnalisés utilisés appropriément | /2 | | |
| Pas de prop drilling excessif | /1 | | |
| **Sous-total** | **/10** | | |

### 2.2 Vue Router (5 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| Minimum 5 routes fonctionnelles | /2 | | |
| Paramètres de route utilisés (:chapterId) | /1 | | |
| Navigation guards (si nécessaire) | /1 | | |
| Transitions entre routes | /1 | | |
| **Sous-total** | **/5** | | |

### 2.3 Composables (bonus 5 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| Au moins 1 composable créé et utilisé | /3 | | |
| Logique réutilisable bien isolée | /2 | | |
| **Sous-total (bonus)** | **/5** | | |

**Total Section 2:** **/20** (+/5 bonus)

---

## 3. Gestion d'État (Pinia) (15 points)

### 3.1 Configuration et structure (5 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| Pinia correctement configuré (main.js) | /1 | | |
| Minimum 2 stores créés (story + player) | /2 | | |
| State bien organisé et nommé | /2 | | |
| **Sous-total** | **/5** | | |

### 3.2 Getters (3 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| Au moins 3 getters pertinents | /2 | | |
| Getters utilisés dans les composants | /1 | | |
| **Sous-total** | **/3** | | |

### 3.3 Actions (5 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| Actions de navigation (loadChapter, makeChoice) | /2 | | |
| Actions de gestion du joueur (stats, inventory) | /2 | | |
| Pas de mutation directe du state | /1 | | |
| **Sous-total** | **/5** | | |

### 3.4 Utilisation dans composants (2 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| Stores correctement importés et utilisés | /1 | | |
| Réactivité fonctionnelle | /1 | | |
| **Sous-total** | **/2** | | |

**Total Section 3:** **/15**

---

## 4. Styles CSS (10 points)

### 4.1 Organisation (4 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| Structure de fichiers CSS claire | /1 | | |
| Variables définies et utilisées | /1 | | |
| Mixins créés et réutilisés | /1 | | |
| Méthodologie CSS appliquée (BEM/SMACSS) | /1 | | |
| **Sous-total** | **/4** | | |

### 4.2 Qualité du CSS (6 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| Design cohérent et esthétique | /2 | | |
| Lisibilité du texte excellente | /1 | | |
| Palette de couleurs harmonieuse | /1 | | |
| Espacements cohérents | /1 | | |
| Pas de code redondant | /1 | | |
| **Sous-total** | **/6** | | |

**Total Section 4:** **/10**

---

## 5. Animations GSAP (10 points)

### 5.1 Intégration GSAP (4 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| GSAP correctement installé et importé | /1 | | |
| Au moins 4 animations différentes | /2 | | |
| Animations fluides (pas de lag) | /1 | | |
| **Sous-total** | **/4** | | |

### 5.2 Animations narratives (4 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| Transitions entre chapitres | /2 | | |
| Apparition du texte animée | /1 | | |
| Animations des boutons de choix | /1 | | |
| **Sous-total** | **/4** | | |

### 5.3 Qualité des animations (2 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| Animations pertinentes au ton narratif | /1 | | |
| Timing et easing appropriés | /1 | | |
| **Sous-total** | **/2** | | |

**Total Section 5:** **/10**

---

## 6. Gestion des Données (10 points)

### 6.1 LocalStorage - Sauvegardes (7 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| Système de 3 slots fonctionnel | /2 | | |
| Sauvegarde manuelle fonctionnelle | /2 | | |
| Chargement de sauvegarde fonctionnel | /2 | | |
| Affichage des infos de sauvegarde (date, progression) | /1 | | |
| **Sous-total** | **/7** | | |

### 6.2 Gestion de la progression (3 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| Tracking des chapitres visités | /1 | | |
| Tracking des choix effectués | /1 | | |
| Sauvegarde de l'état du joueur (stats/inventory) | /1 | | |
| **Sous-total** | **/3** | | |

**Total Section 6:** **/10**

---

## 7. Fonctionnalités et Interactivité (10 points)

### 7.1 Système de navigation narrative (4 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| Navigation entre chapitres fluide | /1 | | |
| Affichage correct du texte narratif | /1 | | |
| Gestion des chapitres linéaires vs choix | /1 | | |
| Minimum 8 chapitres fonctionnels | /1 | | |
| **Sous-total** | **/4** | | |

### 7.2 Système de choix (4 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| Affichage des choix clair et attractif | /1 | | |
| Sélection et redirection fonctionnelles | /2 | | |
| Conséquences des choix appliquées | /1 | | |
| **Sous-total** | **/4** | | |

### 7.3 Fins multiples (2 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| Minimum 3 fins différentes accessibles | /1 | | |
| Écrans de fin avec récapitulatif | /1 | | |
| **Sous-total** | **/2** | | |

**Total Section 7:** **/10**

---

## 8. Qualité et Accessibilité (10 points)

### 8.1 Responsive Design (4 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| Mobile (320px-768px) fonctionnel | /2 | | |
| Tablette/Desktop adapté | /1 | | |
| Pas de débordement horizontal | /1 | | |
| **Sous-total** | **/4** | | |

### 8.2 Accessibilité (4 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| Navigation au clavier fonctionnelle | /1 | | |
| ARIA labels présents | /1 | | |
| Contraste texte/fond WCAG AA | /1 | | |
| Balises sémantiques HTML5 | /1 | | |
| **Sous-total** | **/4** | | |

### 8.3 Performance (2 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| Temps de chargement < 3 secondes | /1 | | |
| Pas d'erreurs console bloquantes | /1 | | |
| **Sous-total** | **/2** | | |

**Total Section 8:** **/10**

---

## 9. Qualité Narrative (10 points)

### 9.1 Histoire et cohérence (4 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| Histoire cohérente du début à la fin | /2 | | |
| Personnages crédibles | /1 | | |
| Univers bien développé | /1 | | |
| **Sous-total** | **/4** | | |

### 9.2 Qualité d'écriture (3 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| Aucune faute d'orthographe majeure | /1 | | |
| Style d'écriture agréable | /1 | | |
| Dialogues naturels | /1 | | |
| **Sous-total** | **/3** | | |

### 9.3 Impact des choix (3 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| Choix ayant un impact réel sur l'histoire | /2 | | |
| Conséquences logiques et cohérentes | /1 | | |
| **Sous-total** | **/3** | | |

**Total Section 9:** **/10**

---

## 10. Travail d'Équipe et Documentation (5 points)

### 10.1 Collaboration Git (2 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| Commits réguliers et bien nommés | /1 | | |
| Branches et pull requests utilisés | /1 | | |
| **Sous-total** | **/2** | | |

### 10.2 Documentation (3 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| README complet (installation, utilisation) | /2 | | |
| Code commenté aux endroits clés | /1 | | |
| **Sous-total** | **/3** | | |

**Total Section 10:** **/5**

---

## 11. Présentation Finale (5 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| Démo fonctionnelle et fluide | /2 | | |
| Présentation claire et structurée | /1 | | |
| Réponses aux questions pertinentes | /1 | | |
| Retour critique sur le processus | /1 | | |
| **Total Section 11** | **/5** | | |

---

## 📊 RÉCAPITULATIF FINAL

| Section | Points possibles | Points obtenus | % |
|---------|------------------|----------------|---|
| 1. Cahier de charges | 15 | | |
| 2. Architecture Vue.js | 20 | | |
| 3. Gestion d'état (Pinia) | 15 | | |
| 4. Styles CSS | 10 | | |
| 5. Animations GSAP | 10 | | |
| 6. Gestion des données | 10 | | |
| 7. Fonctionnalités | 10 | | |
| 8. Qualité/Accessibilité | 10 | | |
| 9. Qualité narrative | 10 | | |
| 10. Travail d'équipe | 5 | | |
| 11. Présentation | 5 | | |
| **TOTAL** | **120** | | |

**Note finale (sur 100):** _____ / 100

---

## 💬 Commentaires généraux

**Points forts:**


**Points à améliorer:**


**Appréciation de l'histoire:**


**Appréciation globale:**


---

**Évaluateur:** _______________  
**Signature:** _______________  
**Date:** _______________