# Plan de cours

## Phase 1 : Le Sandbox Guidé (Semaines 1–5)

* Objectif pédagogique : Apprivoiser l'interface, comprendre la physique 2D, s'initier à la logique C# et publier un premier projet en ligne.
* Projet fil rouge : Clone de jeu d'arcade 2D physique (Flappy Bird ou Shoot 'em up).

### Semaine 1 : Le Moteur, l'Interface et la Physique (Zéro Code)

* Savoirs essentiels enseignés : 
	
  * Logiciels d’intégration d’expériences ludiques (Unity Hub & Éditeur). 
	* Choix, installation et configuration des ressources nécessaires. 
	* Classement des fichiers et des médias (Dossiers Sprites, Scenes, Prefabs). 
	* Configuration de la caméra virtuelle 2D.

* Savoirs essentiels évalués : 
	
  * Intégration d’images dans l’environnement virtuel (Sprites 2D). 
	* Configuration de composants physiques (Rigidbody2D, Collider2D, Physics Material 2D).

* Livrable de fin de séance : Scène Physics_Playground fonctionnelle (flipper passif ou machine de Rube Goldberg sans code).

### Semaine 2 : L'Environnement de Programmation et les Déplacements

* Savoirs essentiels enseignés : 
	
  * Environnement de programmation (Lien Unity / IDE). 
	* Anatomie d’un script C# (Start(), Update(), variables public / private). 
	* Notions d’interaction : agentivité (donner le contrôle au joueur) et affordance.

* Savoirs essentiels évalués : 
	
  * Déplacement dans l’environnement virtuel (Utilisation de Input.GetAxis et Transform.Translate). 
	* Gestion des limites de l'écran (Conditions ou Mathf.Clamp).

* Livrable de fin de séance : Script PlayerController.cs attaché à un personnage qui bouge au clavier sans pouvoir sortir de l'écran.

### Semaine 3 : Logique, Spawning et Boucles

* Savoirs essentiels enseignés : 
	
  * Concept du Prefab (le moule) vs le GameObject (l'instance). 
	* Génération aléatoire et dynamique (Random.Range).

* Savoirs essentiels évalués : 
	
  * Création d'un environnement virtuel navigable (génération d'obstacles). 
	* Programmation d'actions ludiques (Fonction Instantiate pour générer des objets à la volée).

* Livrable de fin de séance : Script SpawnManager.cs qui fait pleuvoir des obstacles/ennemis du ciel à intervalles réguliers.

### Semaine 4 : Collisions et Cycle de Jeu (Game Loop)

* Savoirs essentiels enseignés : 
	
  * Détection de collisions pour le déclenchement d’événements (OnCollisionEnter2D vs OnTriggerEnter2D). 
	* Utilisation des Tags pour identifier les entités en jeu.

* Savoirs essentiels évalués : 
	
  * Interactions virtuelles (Détruire un objet via Destroy()). 
	* Progression en fonction de la réussite d’une action (Système de score dans un GameManager). 
	* Indication visuelle et sonore des réussites et échecs (Défaite si collision avec le joueur).

* Livrable de fin de séance : Un jeu testable où l'on gagne des points en évitant les obstacles et où la partie se fige (Time.timeScale = 0) en cas d'impact.

### Semaine 5 : Interface Virtuelle (UI) et Première Compilation

* Savoirs essentiels enseignés : 
	* Fonctionnement d'une interface virtuelle (Le système Canvas et ses ancres). 
	* Transitions de scènes via le code (SceneManager).

* Savoirs essentiels évalués : 
	* Intégration d’une interface graphique HUD («Head-Up Display») dynamique (TextMeshPro connecté au score). 
	* Animation d'éléments visuels (Bouton et texte qui apparaissent au Game Over). 
	* Compilation de l'application (Export au format WebGL et publication en ligne sur itch.io).

* Livrable de fin de séance [ÉVALUATION FORMATIVE PHASE 1] : Lien URL itch.io fonctionnel du jeu 2D jouable sur navigateur.

## 👥 Phase 2 : Le Studio Experience (Semaines 6–9)

* Objectif pédagogique : Maîtriser le travail collaboratif (Git), faire la transition vers la 3D, gérer les états complexes d'un personnage et structurer un système d'items.
* Projet fil rouge (En Binôme) : 3D Dungeon Crawler ou Jeu de Plateforme 3D axé sur le système clé/porte.

### Semaine 6 : Le Passage à la 3D, les États et le Versionnage

* Savoirs essentiels enseignés :

  * Introduction à la 3D (Primitives, vecteurs, profondeur X, Y, Z). 
  * Travail en équipe : Utilisation d'un logiciel de contrôle de version (Git / Unity Version Control).

* Savoirs essentiels évalués : 

  * Déplacement dans l’environnement virtuel 3D. 
  * Détection de l’état du personnage (Vérification si le joueur est au sol, en l'air, ou en collision pour autoriser/bloquer le saut).

* Livrable de fin de séance : Dépôt Git partagé en binôme avec un personnage 3D capable de sauter proprement en vérifiant son état.

### Semaine 7 : Environnement Modulaire et Système de Clé / Porte

* Savoirs essentiels enseignés : 

  * Technique du Greyboxing (maquettage de niveau avec des formes simples). 
  * Algorithme d'inventaire booléen (hasKey = true).

* Savoirs essentiels évalués : 

  * Création d’un environnement virtuel navigable (Niveau modulaire conçu à base de Prefabs de murs/sols). 
  * Programmation d’un système de clé et de porte (Le joueur doit ramasser un trigger "Clé" pour pouvoir ouvrir le trigger "Porte").

* Livrable de fin de séance : Une carte 3D grise navigable contenant une clé à ramasser qui déverrouille l'accès à la zone de fin.

### Semaine 8 : Intégration Sonore, Particules et Polish (Le "Juice")

* Savoirs essentiels enseignés : 

  * Concepts audio dans Unity (AudioSource, AudioListener, Son 2D spatialisé vs Son 3D). 
  * Le système de Particules de Unity.

* Savoirs essentiels évalués : 

  * Intégration de médias sonores dans l’environnement virtuel. 
  * Déclenchement d’échantillons sonores lors d'actions précises (PlayOneShot sur saut, collecte, ouverture). 
  * Indication visuelle et animation de l’état du personnage (Changement de couleur ou émission de particules de poussière lorsqu'il court/saute).

* Livrable de fin de séance : Le projet 3D enrichi de retours audiovisuels dynamiques à chaque interaction.

### Semaine 9 : Activité de Rétroaction et Livraison de Mi-Session

* Savoirs essentiels enseignés : 

  * Méthodologie de Playtest et récolte de rétroactions. 
  * Identification et résolution de bugs (Méthodes empiriques).

* Savoirs essentiels évalués : 

  * [ACTIVITÉ DE RÉTROACTION OFFICIELLE] : Évaluation croisée par les pairs pour obtenir un portrait du niveau d'atteinte des objectifs. 
  * Correction des problèmes d'affordance et de jouabilité relevés.

* Livrable de fin de séance [ÉVALUATION SOMMATIVE DE MI-SESSION] : Build fonctionnel du jeu 3D en binôme, corrigé suite aux playtests, intégrant la clé, la porte, les états du personnage et le son.

## 🏆 Phase 3 : Le Portfolio Capstone (Semaines 10–15)

* Objectif pédagogique : Concevoir, scoper et réaliser de manière autonome une expérience ludique complète en respectant un cahier des charges rigoureux.
* Projet fil rouge (Solo) : Création d'un micro-jeu original (2D ou 3D) basé sur un One-Page GDD (Game Design Document).

### Semaine 10 : Cadrage du Projet (Le One-Page GDD)

* Savoirs essentiels enseignés : 
  
  * Théorie du Game Design : Définition de l'expérience, de la boucle principale de jeu, et gestion du scope creep (surplus d'ambition).

* Savoirs essentiels évalués : 

  * Conception théorique des interactions, de l'affordance et de la progression de leur futur jeu.

* Livrable de fin de séance : Un document "One-Page GDD" validé et signé par le professeur (les fonctionnalités superflues sont coupées pour garantir la réussite).

### Semaine 11 : Production Solo : Mécanique Centrale (MVP)

* Savoirs essentiels enseignés : 

  * Méthode de développement agile : focale exclusive sur le Minimum Viable Product (MVP).

* Savoirs essentiels évalués : 

  * Programmation de l'action ludique principale spécifiée dans le GDD.

* Livrable de fin de séance : Jalon 1 (La brique de gameplay de base fonctionne parfaitement en boucle fermée).

### Semaine 12 : Production Solo : Intégration de l'Environnement et des Médias

* Savoirs essentiels enseignés : 

  * Recherche, importation et optimisation d'assets tiers (Unity Asset Store).

* Savoirs essentiels évalués : 

  * Création et habillage de l'environnement virtuel navigable complet. 
  * Classement rigoureux des nouveaux fichiers importés.

* Livrable de fin de séance : Jalon 2 (Le niveau complet est construit, décoré et navigable).

### Semaine 13 : Production Solo : UI, HUD et Système Audio

* Savoirs essentiels enseignés : 

  * Uniformisation graphique d'une interface (Charte UI en jeu).

* Savoirs essentiels évalués : 

  * Intégration de l'interface graphique HUD (Barre de vie, munitions, objectifs). 
  * Intégration et déclenchement des échantillons sonores (Musique d'ambiance + bruitages d'actions). 
  * Progression en fonction de la réussite (Écrans de Victoire / Défaite).

* Livrable de fin de séance : Jalon 3 (Le jeu est complet dans ses fonctionnalités, l'expérience se lance et se termine proprement).

### Semaine 14 : Activité d'Intégration et Chasse aux Bugs (The Crunch)

* Savoirs essentiels enseignés : 

  * Utilisation des outils de débogage avancés (Debug.Log, consoles d'erreurs, gestion de la mémoire lors de la compilation).

* Savoirs essentiels évalués : 
  
  * [ACTIVITÉ D'INTÉGRATION] : Session intensive d'optimisation et d'ajustements finaux pour obtenir un portrait global avant la note finale. 
  * Compilation finale propre et sans avertissement de l'application.

* Livrable de fin de séance : Version "Release Candidate" stable et finale du projet, prête pour le déploiement.

### Semaine 15 : L'Évaluation Intégratrice du Cours (Le Showcase)

* Savoirs essentiels enseignés : 

  * Présentation publique d'un produit fini (Post-mortem rapide).

* Savoirs essentiels évalués : 

  * [ÉVALUATION INTÉGRATRICE DU COURS - 100% des savoirs] : Présentation finale d'une expérience ludique intégrant images et échantillons sonores, dans laquelle l'interacteur progresse en accomplissant des actions.

* Livrable final : Page itch.io publique contenant le jeu final jouable, accompagnée du One-Page GDD en PDF. Le cours prend la forme d'un salon de jeux vidéo indépendant où les étudiants testent et évaluent les projets des autres.