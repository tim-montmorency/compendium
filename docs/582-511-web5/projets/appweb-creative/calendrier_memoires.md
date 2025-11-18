# Calendrier Hebdomadaire Détaillé - Mémoires Interactives

**Durée totale:** 8 semaines  
**Heures en classe:** 8h/semaine (3h théorie + 5h pratique)  
**Heures hors classe:** ~3h/semaine (travail sur le projet)  
**Total par semaine:** ~11h effectives

---

## 📅 SEMAINE 1-2: Planification et Design (2 semaines)

### 🎯 Objectifs

- Définir le concept et la vision du projet
- Créer le cahier de charges complet
- Concevoir les maquettes Figma
- Définir l'architecture technique
- Setup initial du projet

### 📚 En classe (16h sur 2 semaines)

**Semaine 1 - Jour 1 (3h):**

- Introduction au projet (30 min)
- Formation des équipes et attribution des rôles (30 min)
- Brainstorming sur les concepts de musée (1h)
- Début de rédaction du cahier de charges (1h)

**Semaine 1 - Jour 2 (5h):**

- Atelier Figma: maquettage (2h)
- Définition de l'architecture de données (1h)
- Planification des sprints (1h)
- Création du repo GitHub et structure de dossiers (1h)

**Semaine 2 - Jour 1 (3h):**

- Révision des cahiers de charges (présentations 15 min/équipe)
- Feedback enseignant
- Finalisation des maquettes

**Semaine 2 - Jour 2 (5h):**

- Setup du projet Vite + Vue (1h)
- Installation des dépendances (Pinia, GSAP, SASS) (1h)
- Configuration ESLint + Prettier (30 min)
- Création des premiers composants "skeleton" (2h30)

### 🏠 Hors classe (~6h sur 2 semaines)

**Semaine 1:**

- Recherche d'inspirations visuelles (1h)
- Rédaction du cahier de charges (sections individuelles) (2h)

**Semaine 2:**

- Finalisation du cahier de charges (1h)
- Complétion des maquettes Figma (2h)

### ✅ Livrables de fin de période

- [ ] **Cahier de charges complet** (à remettre fin semaine 2)
- [ ] **Maquettes Figma** (minimum 5 écrans + version mobile)
- [ ] **Repo GitHub** configuré avec structure de base
- [ ] **Project board** (Trello/GitHub Projects) avec toutes les tâches
- [ ] **Projet Vite+Vue** initialisé et fonctionnel

---

## 📅 SEMAINE 3: Foundation - Structure de base

### 🎯 Objectifs

- Mettre en place la structure de composants
- Configurer Vue Router
- Créer les stores Pinia de base
- Développer les composants de layout

### 📚 En classe (8h)

**Jour 1 (3h):**

- Mini-cours: Architecture de composants Vue (30 min)

- Création des composants de layout:
  - `AppHeader.vue` (navigation)
  - `AppFooter.vue`
  - `Sidebar.vue` (menu des salles)
- Mise en place du système de routing

**Jour 2 (5h):**

- Mini-cours: Pinia en profondeur (45 min)

- Création des stores:
  - `museum.js` (structure de base)
  - `memory.js` (structure de base)
- Développement des composants clés:
  - `RoomCard.vue` (carte de salle)
  - `MemoryCard.vue` (carte de mémoire)
  - `MemoryList.vue` (grille de mémoires)

### 🏠 Hors classe (3h)

- Complétion des composants commencés en classe (2h)
- Ajout de données mockées (JSON) pour tester l'affichage (1h)

### ✅ Livrables de fin de semaine

- [ ] **Minimum 6-8 composants** créés et fonctionnels
- [ ] **Vue Router** configuré avec 4+ routes
- [ ] **2 stores Pinia** créés avec state/actions/getters de base
- [ ] **Navigation fonctionnelle** entre les pages
- [ ] **Données mockées** affichées correctement

### 🎯 Checkpoint enseignant

- Revue de code (15 min/équipe)
- Vérification de l'architecture des composants
- Feedback sur la structure Pinia

---

## 📅 SEMAINE 4: Interactivité - CRUD et Formulaires

### 🎯 Objectifs
- Implémenter le CRUD complet des mémoires
- Créer les formulaires d'ajout/édition
- Ajouter la validation des données
- Implémenter les filtres et la recherche

### 📚 En classe (8h)

**Jour 1 (3h):**

- Mini-cours: Validation de formulaires Vue (30 min)
- Développement du formulaire d'ajout de mémoire:
  - `MemoryForm.vue` (champs, validation)
  - Intégration avec le store
  - Gestion des erreurs

**Jour 2 (5h):**

- Implémentation CRUD complète:
  - Create: Ajout de mémoire
  - Read: Affichage (déjà fait)
  - Update: Édition de mémoire
  - Delete: Suppression avec confirmation
- Système de recherche:
  - Barre de recherche
  - Filtrage par tags
  - Filtrage par salle

### 🏠 Hors classe (3h)

- Complétion des fonctionnalités CRUD (1h30)
- Tests et correction de bugs (1h30)

### ✅ Livrables de fin de semaine

- [ ] **Formulaire d'ajout** complet et validé
- [ ] **Formulaire d'édition** fonctionnel
- [ ] **Suppression** avec confirmation
- [ ] **Recherche** par mot-clé fonctionnelle
- [ ] **Filtres** par tags et par salle
- [ ] **Messages d'erreur** clairs et pertinents

### 🎯 Checkpoint enseignant

- Test des fonctionnalités CRUD
- Vérification de la validation des données
- Feedback sur l'UX des formulaires

---

## 📅 SEMAINE 5: Animations et Médias

### 🎯 Objectifs

- Intégrer GSAP et créer des animations fluides
- Implémenter ScrollTrigger
- Ajouter le système d'upload d'images
- Intégrer des sons d'ambiance (optionnel)

### 📚 En classe (8h)

**Jour 1 (3h):**

- Mini-cours: GSAP + Vue 3 (45 min)
- Animations de transitions:
  - Transitions entre pages (Vue Router)
  - Animations d'apparition des cartes
  - Hover effects sur les éléments interactifs

**Jour 2 (5h):**

- Atelier GSAP avancé (1h30):
  - ScrollTrigger pour révélations au scroll
  - Animations de timeline
  - Easing et timing personnalisés
- Upload d'images:
  - Input file avec preview
  - Conversion en base64 ou URL
  - Validation de taille/format
  - Compression (optionnel)

### 🏠 Hors classe (3h)

- Ajout d'animations supplémentaires (1h30)
- Intégration de sons d'ambiance par salle (optionnel) (1h30)

### ✅ Livrables de fin de semaine

- [ ] **Minimum 5 animations GSAP** différentes
- [ ] **ScrollTrigger** utilisé (au moins 2 fois)
- [ ] **Transitions entre pages** fluides
- [ ] **Upload d'images** fonctionnel avec preview
- [ ] **Validation** de taille et format d'images
- [ ] **Sons d'ambiance** (optionnel - bonus)

### 🎯 Checkpoint enseignant

- Démonstration des animations (session collective)
- Feedback sur la fluidité et pertinence
- Vérification de la performance (60 FPS)

---

## 📅 SEMAINE 6: Persistance et Authentification

### 🎯 Objectifs

- Implémenter LocalStorage complet
- Ajouter export/import JSON
- Créer un système d'authentification simple (optionnel)
- Commencer Firebase (équipes avancées - optionnel)

### 📚 En classe (8h)

**Jour 1 (3h):**
- Mini-cours: LocalStorage et gestion d'erreurs (30 min)
- Implémentation LocalStorage:
  - Auto-save après chaque action
  - Chargement au démarrage
  - Gestion du quota dépassé
  - Gestion des erreurs de parsing

**Jour 2 (5h):**
- Export/Import:
  - Bouton export en JSON
  - Upload et import de fichier JSON
  - Validation du format importé
- Authentification simple (optionnel):
  - Login avec nom d'utilisateur
  - Multi-utilisateurs via LocalStorage
  - État d'authentification dans Pinia

**Atelier optionnel Firebase (1h):**

- Pour les équipes avancées
- Configuration Firebase
- Premier test de sauvegarde cloud

### 🏠 Hors classe (3h)

- Tests approfondis de la persistance (1h)
- Gestion des cas limites (erreurs, quota, etc.) (1h)
- Firebase: continuer l'intégration (équipes avancées) (1h)

### ✅ Livrables de fin de semaine

- [ ] **LocalStorage** fonctionnel à 100%
- [ ] **Auto-save** après chaque modification
- [ ] **Chargement** automatique au démarrage
- [ ] **Export JSON** fonctionnel
- [ ] **Import JSON** avec validation
- [ ] **Gestion d'erreurs** complète
- [ ] **Authentification simple** (optionnel)
- [ ] **Firebase** basique (équipes avancées - optionnel)

### 🎯 Checkpoint enseignant

- Test de persistance (fermer/rouvrir l'app)
- Vérification des cas d'erreur
- Review du code de gestion d'état

---

## 📅 SEMAINE 7: Polish et Accessibilité

### 🎯 Objectifs

- Rendre le projet 100% responsive
- Implémenter l'accessibilité (WCAG AA)
- Optimiser les performances
- Corriger tous les bugs
- Ajouter du contenu additionnel

### 📚 En classe (8h)

**Jour 1 (3h):**

- Mini-cours: Accessibilité web (45 min)
- Tests et corrections responsive:
  - Mobile (320px-768px)
  - Tablette (768px-1024px)
  - Desktop (1024px+)
- Tests sur différents navigateurs

**Jour 2 (5h):**

- Implémentation accessibilité:
  - Navigation au clavier
  - ARIA labels
  - Contraste des couleurs (WCAG AA)
  - Balises sémantiques HTML5
- Optimisation:
  - Compression des images
  - Lazy loading
  - Code splitting (si nécessaire)
- Ajout de contenu:
  - Plus de salles
  - Plus de mémoires mockées
  - Textes finaux

**Atelier optionnel: Accessibilité avancée (1h)**

- Screen readers
- Skip links
- Focus management

### 🏠 Hors classe (3h)

- Tests utilisateurs avec amis/famille (1h)
- Corrections de bugs identifiés (1h30)
- Polish visuel et animations (30 min)

### ✅ Livrables de fin de semaine

- [ ] **Responsive** parfait sur 3 breakpoints
- [ ] **Navigation clavier** fonctionnelle
- [ ] **ARIA labels** sur tous les éléments interactifs
- [ ] **Contraste WCAG AA** respecté
- [ ] **Aucun bug bloquant** restant
- [ ] **Performance** optimisée (< 3s chargement)
- [ ] **Contenu complet** (6+ salles, 20+ mémoires mockées)

### 🎯 Checkpoint enseignant

- Tests d'accessibilité (keyboard, screen reader)
- Tests responsive sur appareils réels
- Liste de bugs à corriger

---

## 📅 SEMAINE 8: Finalisation et Déploiement

### 🎯 Objectifs

- Finaliser la documentation
- Déployer le projet en ligne
- Créer une vidéo de présentation
- Préparer la démo finale
- Rétrospective d'équipe

### 📚 En classe (8h)

**Jour 1 (3h):**

- Rédaction du README complet:
  - Description du projet
  - Installation et utilisation
  - Technologies utilisées
  - Captures d'écran
  - Crédits
- Déploiement:
  - Netlify ou Vercel
  - Configuration du build
  - Test du site en production

**Jour 2 (5h):**

- Création de la vidéo de présentation (2-3 min):
  - Démo des fonctionnalités clés
  - Showcase des animations
  - Voix-off explicative
- Préparation de la présentation finale:
  - Slides de support
  - Répartition des rôles de présentation
  - Répétition
- Rétrospective d'équipe:
  - Ce qui a bien fonctionné
  - Difficultés rencontrées
  - Apprentissages clés

### 🏠 Hors classe (3h)

- Finitions de dernière minute (1h)
- Répétition de la présentation (1h)
- Préparation des réponses aux questions potentielles (1h)

### ✅ Livrables FINAUX

- [ ] **README.md complet** avec toutes les sections
- [ ] **Projet déployé** en ligne (URL fonctionnelle)
- [ ] **Vidéo de présentation** (2-3 min)
- [ ] **Slides de présentation** préparés
- [ ] **Code propre** et commenté
- [ ] **Aucune erreur console**
- [ ] **Documentation technique** complète

### 🎯 PRÉSENTATIONS FINALES

**Format:** 15 minutes par équipe (10 min présentation + 5 min questions)

**Structure suggérée:**

1. Introduction et concept (2 min)
2. Démo live des fonctionnalités (5 min)
3. Aspects techniques intéressants (2 min)
4. Défis et solutions (1 min)
5. Questions et réponses (5 min)

---

## 📊 Récapitulatif des Livrables par Semaine

| Semaine | Livrable principal | Poids évaluation |
|---------|-------------------|------------------|
| 2 | Cahier de charges + Maquettes | 15% |
| 3 | Architecture Vue + Composants de base | Checkpoint |
| 4 | CRUD complet + Filtres | Checkpoint |
| 5 | Animations GSAP + Upload médias | Checkpoint |
| 6 | Persistance LocalStorage | Checkpoint |
| 7 | Responsive + Accessibilité | Checkpoint |
| 8 | **Projet final complet + Présentation** | 85% |

---

## 🚨 Points de Vigilance par Semaine

### Semaine 1-2

- ⚠️ Ne pas sous-estimer le temps de maquettage
- ⚠️ Définir des objectifs réalistes (pas trop ambitieux)
- ⚠️ S'assurer que tous comprennent l'architecture technique

### Semaine 3

- ⚠️ Bien structurer les composants dès le départ (éviter le refactoring)
- ⚠️ Conventions de nommage claires pour l'équipe
- ⚠️ Commits réguliers et branches bien nommées

### Semaine 4

- ⚠️ Ne pas négliger la validation des formulaires
- ⚠️ Gérer tous les cas d'erreur (input vide, format invalide, etc.)
- ⚠️ Tester le CRUD intensivement

### Semaine 5

- ⚠️ Attention aux performances avec GSAP (ne pas exagérer)
- ⚠️ Tester les animations sur mobile (peuvent être lentes)
- ⚠️ Limiter la taille des images uploadées

### Semaine 6

- ⚠️ Tester la perte de données (effacer localStorage, quota dépassé)
- ⚠️ Valider le format JSON avant d'importer
- ⚠️ Sauvegarder régulièrement (backups manuels)

### Semaine 7

- ⚠️ Tests sur vrais appareils mobiles (pas juste DevTools)
- ⚠️ Tests avec screen readers (NVDA ou VoiceOver)
- ⚠️ Corriger les bugs critiques en priorité

### Semaine 8

- ⚠️ Prévoir du temps pour les imprévus de déploiement
- ⚠️ Répéter la présentation plusieurs fois
- ⚠️ Avoir un plan B si la démo ne fonctionne pas

---

## 💡 Conseils pour Rester sur la Bonne Voie

### Daily/Weekly Practices

**Chaque jour de cours:**

- 5 min: Stand-up d'équipe (avancement, blocages)
- Temps de dev
- 10 min: Commit et push du travail

**Chaque semaine:**

- Réunion d'équipe (30 min) pour planifier la semaine suivante
- Mise à jour du project board
- Mini-retrospective (qu'est-ce qui a bien/mal fonctionné?)

### Communication

- **Teams:** Questions rapides, partage de liens
- **GitHub Issues:** Bugs et features à implémenter
- **Pull Requests:** Reviews de code entre membres

### Time Management

**Répartition suggérée du temps en classe:**

- 20% Mini-cours / théorie
- 60% Développement pratique
- 10% Questions / déblocage
- 10% Stand-up / planning

---

## 🎯 Checklist de Fin de Projet

Avant la remise finale, vérifiez que:

### Code

- [ ] Aucune erreur ou warning console
- [ ] Code commenté aux endroits clés
- [ ] Variables et fonctions bien nommées
- [ ] Pas de code mort (commenté ou inutilisé)
- [ ] ESLint passe sans erreur

### Fonctionnalités

- [ ] Toutes les routes fonctionnent
- [ ] CRUD complet fonctionnel
- [ ] Recherche et filtres opérationnels
- [ ] Animations fluides
- [ ] Persistance LocalStorage fiable
- [ ] Export/Import JSON fonctionnels

### Qualité

- [ ] Responsive sur tous les breakpoints
- [ ] Accessible (navigation clavier, ARIA)
- [ ] Performance optimisée
- [ ] Tests sur Chrome, Firefox, Safari

### Documentation

- [ ] README complet et clair
- [ ] Instructions d'installation
- [ ] Captures d'écran
- [ ] URL du site déployé
- [ ] Crédits et licences

### Présentation

- [ ] Vidéo de 2-3 minutes prête
- [ ] Slides préparés
- [ ] Rôles de présentation répartis
- [ ] Démo répétée 2-3 fois

---

**Bonne chance! 🚀**