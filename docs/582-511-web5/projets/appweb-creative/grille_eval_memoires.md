# Grille d'Évaluation - Mémoires Interactives

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
| Objectifs clairs et réalistes | /2 | | |
| Architecture technique détaillée | /2 | | |
| Planning prévisionnel cohérent | /1 | | |
| **Sous-total** | **/7** | | |

### 1.2 Maquettes Figma (5 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| Minimum 5 écrans maquettés | /2 | | |
| Design cohérent et esthétique | /1 | | |
| Interactions/états représentés | /1 | | |
| Version mobile présente | /1 | | |
| **Sous-total** | **/5** | | |

### 1.3 Structure de données (3 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| Modèle de données bien défini | /2 | | |
| Relations entre entités claires | /1 | | |
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
| Paramètres de route utilisés (:id) | /1 | | |
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
| Minimum 2 stores créés | /2 | | |
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
| Actions CRUD complètes (Create, Read, Update, Delete) | /3 | | |
| Pas de mutation directe du state | /1 | | |
| Gestion d'erreurs dans les actions | /1 | | |
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
| Palette de couleurs harmonieuse | /1 | | |
| Typographie lisible et appropriée | /1 | | |
| Espacements cohérents | /1 | | |
| Pas de code redondant | /1 | | |
| **Sous-total** | **/6** | | |

**Total Section 4:** **/10**

---

## 5. Animations ~GSAP~ (10 points)

### 5.1 Intégration ~GSAP~ (4 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| ~GSAP~ correctement installé et importé | /1 | | |
| Au moins 5 animations différentes | /2 | | |
| Animations fluides (pas de lag) | /1 | | |
| **Sous-total** | **/4** | | |

### 5.2 ScrollTrigger (3 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| ScrollTrigger utilisé (au moins 2 fois) | /2 | | |
| Animations au scroll pertinentes | /1 | | |
| **Sous-total** | **/3** | | |

### 5.3 Qualité des animations (3 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| Animations pertinentes (pas excessives) | /1 | | |
| Transitions entre pages/sections | /1 | | |
| Easing approprié (pas juste linear) | /1 | | |
| **Sous-total** | **/3** | | |

**Total Section 5:** **/10**

---

## 6. Gestion des Données (10 points)

### 6.1 LocalStorage (7 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| Sauvegarde automatique fonctionnelle | /2 | | |
| Chargement au démarrage fonctionnel | /2 | | |
| Structure de données JSON cohérente | /1 | | |
| Gestion des erreurs de stockage | /1 | | |
| Export en fichier JSON | /1 | | |
| **Sous-total** | **/7** | | |

### 6.2 CRUD Operations (3 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| Ajout de mémoires fonctionnel | /1 | | |
| Modification de mémoires fonctionnelle | /1 | | |
| Suppression de mémoires fonctionnelle | /1 | | |
| **Sous-total** | **/3** | | |

**Total Section 6:** **/10**

---

## 7. Fonctionnalités et Interactivité (10 points)

### 7.1 Navigation et filtres (5 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| Navigation entre salles fluide | /1 | | |
| Système de recherche fonctionnel | /2 | | |
| Filtres par tags fonctionnels | /1 | | |
| Affichage des résultats pertinent | /1 | | |
| **Sous-total** | **/5** | | |

### 7.2 Upload et gestion médias (3 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| Upload d'images fonctionnel | /2 | | |
| Validation de taille/format | /1 | | |
| **Sous-total** | **/3** | | |

### 7.3 Formulaires (2 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| Validation des champs | /1 | | |
| Messages d'erreur clairs | /1 | | |
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
| Contraste WCAG AA respecté | /1 | | |
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

## 9. Créativité et Originalité (10 points)

### 9.1 Concept (4 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| Thématique originale et personnelle | /2 | | |
| Expérience utilisateur émotionnelle | /2 | | |
| **Sous-total** | **/4** | | |

### 9.2 Design visuel (3 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| Identité visuelle unique | /2 | | |
| Attention aux détails | /1 | | |
| **Sous-total** | **/3** | | |

### 9.3 Innovation technique (3 points)

| Critère | Points | Note | Commentaires |
|---------|--------|------|--------------|
| Utilisation créative des technologies | /2 | | |
| Features bonus implémentées | /1 | | |
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
| 5. Animations ~GSAP~ | 10 | | |
| 6. Gestion des données | 10 | | |
| 7. Fonctionnalités | 10 | | |
| 8. Qualité/Accessibilité | 10 | | |
| 9. Créativité | 10 | | |
| 10. Travail d'équipe | 5 | | |
| 11. Présentation | 5 | | |
| **TOTAL** | **120** | | |

**Note finale (sur 100):** _____ / 100

---

## 💬 Commentaires généraux

**Points forts:**


**Points à améliorer:**


**Appréciation globale:**


---

**Évaluateur:** _______________  
**Signature:** _______________  
**Date:** _______________