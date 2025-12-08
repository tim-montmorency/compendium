# Calendrier du projet

## Le calendrier en bref:

<small>Dernière mise-à-jour du calendrier de projet: <em>16 novembre</em></small>

- [ ] PHASE 1: PLANIFICATION ET DESIGN: 22 oct.
- [ ] PHASE 2: FONDATION: 19 nov.
- [ ] PHASE 3: INTERACTIVITÉ: 1er déc.
- [ ] ❌ ~~PHASE 4: ANIMATIONS ~GSAP~~~
- [ ] ⚠️ OPTIONNEL PHASE 5: PERSISTANCE ET SAUVEGARDE DES DONNÉES
- [ ] PHASE 6: AFFINAGE pour la version BETA: 3 déc.
- [ ] PHASE 7: CONTRÔLE QUALITÉ ET CORRECTIONS: 8 déc
- [ ] PHASE 8: REMISE FINALE ET PRÉSENTATION: 10 déc.
- [ ] PHASE 9: POST-MORTEM: 12 déc.

## PHASE 1: PLANIFICATION ET DESIGN

**Du 8 au 22 octobre**

*Remise 22 octobre | 15%*

- Rédaction du cahier de charges
- Création des maquettes Figma
- Planification du projet KANBAN dans Trello
- Répertoire git et README.md

## PHASE 2: FONDATION

**Du 2 au 19 novembre**

*Remise Phases 2 FONDATION 19 novembre | 7.5%*

- Structure des composants de base
- Vue Router configuré
- Pinia stores créés
- *musée:* Premiers composants structurés (header, rooms, memory)
- *chemin:* Premiers chapitres (texte + affichage)
- *chemin:* Système de choix** fonctionnel

### Détail de la remise FONDATION

- [ ] Créez une branche git *Phase2* à partir de la version que vous voulez remettre aujourd'hui et ne la touchez plus par la suite.
- [ ] Votre code doit-être bien *commenté* en détail pour démontrer votre compréhension.

**Livrables pour *mémoire interactive**

- [ ] **Projet Vite+Vue** initialisé et fonctionnel
- [ ] **Structure complète des dossier et fichiers**
- [ ] **Minimum 4-6 composants et views** créés et fonctionnels
- [ ] **Documentation des composants et views** dans un fichier `COMPONENTS.md`*
- [ ] **Vue Router** configuré avec min. 3 routes
- [ ] **Documentation des routes** dans un fichier `ROUTES.md`**
- [ ] **2 stores Pinia** (museum et memory) créés avec state/actions/getters de base
- [ ] **Navigation fonctionnelle** entre les pages
- [ ] **Données mockées** affichées correctement (données mockée = données fictives pour faire des tests)

**Livrables pour *trace ton chemin**

- [ ] **Projet Vite+Vue** initialisé et fonctionnel
- [ ] **Structure complète des dossier et fichiers**
- [ ] **Minimum 4-6 composants** créés et fonctionnels
- [ ] **Documentation des composants et views** dans un fichier `COMPONENTS.md`*
- [ ] **Vue Router** configuré avec routes par chapitre
- [ ] **Documentation des routes** dans un fichier `ROUTES.md`**
- [ ] **2 stores Pinia** (story et player) créés avec state/actions/getters de base
- [ ] **Navigation fonctionnelle** entre chapitres
- [ ] **Minimum 6-7 chapitres** dans le fichier JSON
- [ ] **Affichage du texte** fonctionnel (3-4 chapitres minimum)
- [ ] **Système de choix** complet et fonctionnel

*Documenter vos `components` et vos `views` dans `COMPONENTS.ms`

- Liste dans un fichier `COMPONENTS.md` (sauvegarder dans le dossier `src` de votre projet)
- Pour chaque composant: nom, responsabilité, props attendues, événements émis (emits)

**Documenter vos `routes` dans `ROUTES.md`

- Créer un fichier `ROUTES.md`
- Pour chaque route, lister: path, name, composant (la view) et une description

## PHASE 3: INTERACTIVITÉ

**Du 19 au 1er décembre**

*Remise Phases 3 INTERACTIVITÉ: 1er décembre 7.5%*

### Mémoires interactives

- Ajouts/éditions de mémoires
  - Création des formulaires d'ajout/édition
  - CRUD des mémoires (CRUD: Create, Read, Update, Delete)
  - Validation des données entrées dans les formulaires
  - Upload et gestion d'images

- Implémentation des filtres et de la recherche
  - Filtre par tag
  - Filtre par 
  - Recherche

### Trace ton chemin

- Système de tracking des conséquences (minimum un des 4 systèmes listés ci-dessous)
  - Système de flags (événements déclenchés)
  - Karma/statistiques
  - Inventaire
  - Relations avec personnages

- Logique des fins implémentée (conditions d'accès à la fin)

- Implémentation de l'historique des décisions du joueur
  - Enregistrement de chaque décision
  - Affichage dans un menu (optionnel)

## ❌ ANNULÉ ~~PHASE 4: ANIMATIONS ~GSAP~~~

Vous pouvez le faire et je vous encourage à l'explorer mais ce n'est plus exigé.

*Mémoires interactives*

- ❌Animations de transitions:
  - ❌Transitions entre pages (Vue Router)
  - ❌Animations d'apparition des cartes
  - ❌Hover effects sur les éléments interactifs
  - ❌Caroussel animé des cartes-mémoires

*Trace ton chemin*

- ❌Animations de texte
  - ❌Effet d'apparition progressive (style dactylo typewriter) (optionnel)
  - ❌Fade in des paragraphes
  - ❌Animations des dialogues
- ❌Transitions entre chapitres



## ⚠️ OPTIONNEL PHASE 5: PERSISTANCE ET SAUVEGARDE DES DONNÉES 

Remise formative annulée. Cette partie du projet est maintenant optionnelle.

Le code nécessaire pour cette partie vous sera fourni à la demande, vous n'aurez qu'à l'analyser et l'intégrer à votre projet, dans votre propre structure.

- ⚠️Sauvegarde dans le LocalStorage
- ⚠️Import/Export JSON
- ⚠️Gestion des erreurs d'import ou de sauvegarde
- ~~Firebase~~

## PHASE 6: AFFINAGE pour la version BETA


*Remise version *BETA* le 3 décembre | Formatif*

- Toute les données sont créés
- Tout est stylisé et responsive (desktop et mobile)


## PHASE 7: CONTRÔLE QUALITÉ ET CORRECTIONS

<!-- Semaine 8 -->
**Du 3 au 8 décembre**

*Remise Phase 7 RAPPORT DU CONTRÔLE DE LA QUALITÉ : 8 décembre | 10%*

- Tests de toutes les branches de l'histoire
- Tests fonctionnels
- Tests multi-plateformes (navigateurs et appareils)
- Relecture et corrections
- Optimisation de la performance
- Gestion des bogues

## PHASE 8:  FINALISATION
<!-- Semaine 8 + 2 jours-->

**Du 3 au 10 décembre** (peut-être fait en parallèle avec la phase 7)

*Remise et présentation finale : 10 décembre | 50%*

- Documentation (README complet comprenant la documentation que vous avez fait tout le long du projet (mis à jour), `COMPONENTS.md`, `ROUTES.md` etc)
- Déploiement - Mise en ligne (GitHub)
- Vidéo de présentation
- Préparation de la démo en classe

## PHASE 9: POST-MORTEM

**Du 10 au 12 décembre**

*Remise de l'analyse réflexive et suivi de l'évaluation de mi-parcours: 12 décembre | 5%*
