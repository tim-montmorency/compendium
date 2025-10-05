# App web créative

## Choix parmis

- *Mémoires interactives* - Musée personnel émotionnel
- *Choisis ta voie* - Roman visuel interactif moderne


## *1. "Mémoires interactives" - Musée personnel émotionnel*

### Concept

Une application où l'utilisateur crée et explore un musée de souvenirs personnels ou fictifs, où chaque "salle" représente une émotion/période.

### Techniques/technologies à utliser

- **Vue.js** : Composants pour chaque type de salle/mémoire, routing entre salles
- **SASS/SCSS** : Thématisation par émotion (palettes couleurs dynamiques)
- **GSAP + ScrollTrigger** : Transitions entre salles, révélation des souvenirs au scroll
- **Logiciels collaboratifs** : Travail d'équipe via Git, documentation
- **Authentification** : Système de login pour sauvegarder son musée
- **Cahier de charges** : Conception complète avant développement
- **Qualité** : Validation des inputs, gestion d'erreurs, accessibilité
- **Créatif et original** : Expérience émotionnelle unique

#### Autre technologies spécifiques

- **Vite** pour le build rapide et la gestion des dépendances
- **LocalStorage** pour la sauvegarde locale des musées
- **API simple (JSON)** pour synchronisation ou partage en ligne
- **Systèmes de filtres et recherche** pour explorer les souvenirs
- **Export** du musée en format partageable (lien ou fichier)

### Calendrier pour 8 semaines:

- **Semaines 1-2**: Cahier de charges, maquettes, structure de données, setup Vite+Vue
- **Semaines 3-4**: Composants de base (salles, médias), système de navigation Vue Router
- **Semaines 5-6**: GSAP/animations, intégration médias, authentification
- **Semaines 7-8**: Polish, accessibilité, déploiement, documentation

### Division naturelle du travail (3 personnes):

- **Personne A**: Architecture Vue (composants, router, state management)
- **Personne B**: Design & animations (SASS, GSAP, transitions)
- **Personne C**: Backend/données (auth, API/localStorage, validation)
- *(Pour équipe de 4: ajout personne D sur UX/contenus/accessibilité)*

### Couverture exhaustive des savoirs:

- **Respect des rôles**: Chef de projet naturel, designers, développeurs
- **Répartition des tâches**: Modules clairs et interdépendants
- **Authentification**: Login pour sauvegarder son musée
- **Logiciels collaboratifs**: Git workflows obligatoires
- **Cahier de charges complet**: Structure de données complexe à planifier
- **Intégration composantes web**: Système complet Vue+Vite
- **Familiarisation systèmes**: Vue, Vite, potentiellement API
- **CSS3**: Conventions BEM, SMACSS ou autre méthodologie
- **Intégrer médias**: Images, sons, peut-être vidéos
- **Interactivité**: Filtres, recherche, système de tags
- **Anticipation problèmes**: Gestion upload médias, taille fichiers
- **Qualité produit**: Validation, accessibilité, responsive
- **Designer Web**: Mise en ligne, documentation
- **Créatif et original**: Chaque équipe aura un musée unique!

### Features escaladables (du MVP au wow!)

#### MVP (minimal viable - semaines 1-5)

- 3-4 salles thématiques
- Upload d'images + textes
- Navigation entre salles (Vue Router)
- Animations de base GSAP
- LocalStorage pour sauvegarder

#### Version standard (semaines 6-7)

- Authentification simple
- 6-8 salles avec thèmes variés
- Sons d'ambiance par salle
- Filtres et recherche
- Animations GSAP avancées
- Export/partage de musée

#### Version avancée (équipes + rapides)

- API backend (Node/Express simple ou Firebase)
- Galerie publique de musées
- Mode collaboratif (inviter des amis)
- ScrollTrigger pour révélations progressives
- Transitions 3D entre salles
- Timeline interactive de souvenirs

### Avantages pédagogiques

- ✨ **Émotionnellement engageant**: Les étudiants s'investissent (c'est *leur* musée)
- 🎨 **Liberté créative**: Chaque équipe peut avoir un style visuel unique
- 🔧 **Technique riche**: Touche à tout (Vue, state, animations, médias, données)
- 📦 **Portfolio-ready**: Projet impressionnant à montrer

---

## *2. "Choisis ta voie" - Roman visuel interactif moderne*

### Concept

Une histoire à embranchements multiples avec esthétique contemporaine. Style *ScrollyTelling* mais avec *Vue Router* pour la navigation entre chapitres, choix qui persistent, et système d'inventaire/personnages.

Évolution naturelle d'une histoire animée style ScrollyTelling, mais avec Vue!

### Technologies

- **Vue Router** : Navigation entre chapitres/scènes
- **Composants Vue** : Personnages réutilisables, inventaire, stats
- **GSAP + ScrollTrigger** : Animations immersives dans chaque scène
- **State Management (Vuex ou Pinia)** : Gestion des choix et conséquences
- **LocalStorage** : Sauvegardes multiples
- **Médias riches** : Sons, musiques, images, vidéos éventuelles
- **Système de branches** : Visualisation de l'arbre narratif


### Structure du projet

- Roman interactif avec embranchements narratifs
- Chaque "chapitre" = composant Vue + route
- Choix persistent via state management (Pinia/Vuex)
- Animations GSAP dans chaque scène
- Système d'inventaire/stats de personnage

### Division du travail:

- **Personne A**: Architecture Vue (Router, State, logique de branches)
- **Personne B**: Animations GSAP, transitions, effets visuels
- **Personne C**: Contenus (écriture histoire), design UI, médias
- *(Équipe de 4: Personne D sur la narration + système de sauvegarde)*

### Calendrier pour 8 semaines

- **Semaines 1-2**: Cahier de charges, arbre narratif, maquettes, structure
- **Semaines 3-4**: Composants Vue, Router, 3-4 chapitres de base
- **Semaines 5-6**: Système de choix/conséquences, animations GSAP
- **Semaines 7-8**: Plus de branches, polish, sons, accessibilité

### Couverture des savoirs

- **Respect des rôles**: Chef de projet naturel, designers, développeurs
- **Répartition des tâches**: Modules clairs et interdépendants
- **Authentification**: Login pour sauvegarder son musée
- **Logiciels collaboratifs**: Git workflows obligatoires
- **Cahier de charges complet**: Structure de données complexe à planifier
- **Intégration composantes web**: Système complet Vue+Vite
- **Familiarisation systèmes**: Vue, Vite, potentiellement API
- **CSS3**: Conventions BEM, SMACSS ou autre méthodologie
- **Intégrer médias**: Images, sons, peut-être vidéos
- **Interactivité**: Filtres, recherche, système de tags
- **Anticipation problèmes**: Gestion upload médias, taille fichiers
- **Qualité produit**: Validation, accessibilité, responsive
- **Designer Web**: Mise en ligne, documentation
- **Créatif et original**: Chaque équipe aura un musée unique!


### Features escaladables (du MVP au wow!)

#### MVP (minimal viable - semaines 1-5)

5 chapitres linéaires avec 2-3 choix, animations de base

#### Version standard (semaines 6-7)

8-10 chapitres, 5-6 fins différentes, inventaire, sons

#### Version avancée (équipes + rapides)

Visualisation arbre de choix, système de "rejouabilité", stats de personnage

### Défi

Création de contenu narratif peut être chronophage. Faut s'assurer que les équipes ont des histoires *simples* pour éviter le "scope creep".