![](../assets/images/eeat-law.gif){data-zoom-image}

## Évaluation sommative – WordPress & Gutenberg

### Compétences évaluées
*	Maîtriser l’Éditeur de site (FSE) et les modèles
*	Concevoir une architecture de contenu dynamique
*	Exploiter Query Loop + modèles
*	Mettre en place un multilingue cohérent avec Polylang
*	Comprendre la relation contenu ↔ affichage
*	Concevoir et utiliser un Custom Post Type avec champs ACF


### CONTEXTE
Dans le cadre de cet examen, vous devez concevoir et réaliser un site web bilingue (français / anglais) pour un organisme ou une entreprise de votre choix.
Le site doit être conçu de manière entièrement dynamique, afin de pouvoir évoluer dans le temps sans nécessiter de reconstruction complète.
 
### PAGES OBLIGATOIRES
**Le site doit obligatoirement comprendre :**

•	Une page d’accueil
•	Une page de contact
•	Au moins une section de contenu dynamique liée au thème choisi
 
### GESTION DU CONTENU (OBLIGATOIRE)
La gestion du contenu doit respecter les contraintes suivantes :

**Le contenu doit être géré exclusivement à l’aide de :**

*	Types de publications personnalisés (Custom Post Types — CPT)
*	Champs personnalisés créés avec Advanced Custom Fields (ACF)

**L’affichage du contenu doit se faire uniquement avec :**

*	Query Loop
*	Advanced Views Lite

!!! warning "Avertissement"

    ⚠️ Aucun texte ou contenu ne doit être écrit directement dans les pages.
    Tout contenu en dur est strictement interdit.
 
### CHOIX DU THÈME
Vous devez choisir un seul des thèmes suivants :

#### Option 1 — Catalogue de produits
Le site présente un catalogue de produits (ex. : téléphones, ordinateurs, appareils photo, instruments de musique).

**Chaque produit doit :**

*	Posséder sa propre structure de champs personnalisés
*	Être affiché automatiquement à plusieurs endroits du site
*	Utiliser un design identique, sans modification manuelle
 
#### Option 2 — Site immobilier
Le site présente des biens immobiliers (maisons, condos ou appartements).

**Chaque fiche doit contenir au minimum :**

*	Prix
*	Nombre de pièces
*	Superficie
*	Quartier
*	Type de transaction (vente ou location)

**Le site doit inclure :**

*	Une page listant toutes les propriétés
*	Une page de détail pour chaque bien
 
#### Option 3 — Site de recettes
Le site présente des recettes à l’aide d’un CPT.

**Chaque recette doit contenir :**

*	Temps de cuisson
*	Difficulté
*	Ingrédients
*	Type de repas
  
Le contenu doit être affiché de façon dynamique (ex. : recettes récentes, recettes par catégorie).
 
#### Option 4 — Bibliothèque de jeux vidéo
Le site présente une collection de jeux vidéo.

**Chaque jeu doit contenir :**

*	Plateforme
*	Genre
*	Note
*	Année de sortie
*	Mode multijoueur (oui / non)

**Le site doit proposer :**

*	Une vue en liste
*	Une page de détail pour chaque jeu
 
#### Option 5 — Site de critiques (films, séries ou livres)
Le site présente des critiques culturelles.

**Chaque critique doit contenir :**

*	Note
*	Genre
*	Réalisateur ou auteur
*	Durée

Des listes dynamiques doivent être mises en place (ex. : les mieux notées, les plus récentes).
 
#### Option 6 — Catalogue musical
Le site présente un catalogue d’albums ou d’artistes.

**Chaque élément doit contenir :**

*	Genre
*	Année
*	Durée
*	Label

**Le site doit inclure :**

*	Une page de liste
*	Une page de détail
 
### CONTRAINTES OBLIGATOIRES
Les règles suivantes doivent être respectées :

*	Tout le contenu doit être dynamique
*	Aucun contenu ne doit être écrit en dur dans les pages
*	Le design et le contenu doivent être clairement séparés
*	Les modèles (templates) doivent être réutilisables






## PARTIE 1 — Architecture du site & modèles (10 %)

### Tâches obligatoires

1.	Installer un thème basé sur les blocs
2.	Créer/modifier au moins 3 modèles :
   
*	Article
*	Page
*	Catégorie ou archive

**Modifier le header et le footer au niveau global**

### Exigences
*	Utilisation réelle des modèles
*	Hiérarchie visuelle claire
*	Différence intentionnelle entre page et article



## PARTIE 2 — Contenu structuré et dynamique (25 %)

### Tâches obligatoires
1.	Créer au moins 6 articles, répartis dans 2 catégories
2.	Chaque article doit inclure :
   
*	Image mise en avant
*	Extrait personnalisé
*	Métadonnées visibles (auteur, date ou catégorie)
  
**Le modèle d’article doit afficher ces données dynamiquement**

### Critères
*	Compréhension du principe un contenu → plusieurs affichages
*	Aucun contenu « en dur » dans les modèles


## PARTIE 3 — Custom Post Type + ACF (Contenu structuré avancé) (20 %)
### Tâches obligatoires

#### 1️⃣ Création du Custom Post Type
*	Créer un post-type
*	Exigences : visible dans l’administration, public, archive activée

#### 2️⃣ Champs personnalisés avec ACF
**Minimum 5 champs, par exemple :**
  
*	Photo de l’artiste
*	Discipline artistique
*	Année de naissance
*	Courte biographie
*	Lien externe (site ou réseau social)
*	Structure logique du CPT
*	Pertinence des champs ACF
*	Contenu dynamique exploité
*	Séparation claire contenu / structure / affichage
*	Pas de duplication


## PARTIE 4 — Query Loop avancé (25 %)
### Tâches obligatoires
1.	Insérer au moins 2 Query Loop différents, chacun avec un rôle précis.
2.	Configurer chaque Query Loop :

*	Modèle personnalisé

**Modifier le design du modèle :**
   
*	Structure des blocs
*	Gestion des images

## Interdit
* ❌ Utiliser un Query Loop par défaut sans modification
* ❌ Dupliquer du contenu manuellement


## PARTIE 5 — Multilingue avancé avec Polylang (10 %)
### Tâches obligatoires
1.	Configurer Polylang (FR / EN)
2.	Traduire :
   
*	Pages
*	Articles
*	Menus

**Vérifier :**
   
*	Query Loop affichant le contenu dans la bonne langue
*	Navigation cohérente par langue
### Critères
*	Aucune page orpheline
*	Aucune confusion dans les listes dynamiques




## PARTIE 6 — Compositions (Patterns) et réutilisation (10 %)
### Tâches obligatoires
**Créer au moins une composition personnalisée :**
   
*	Blocs dynamiques
*	Structure réutilisable

**Réutiliser cette composition au moins deux fois**
**Vérifier que la composition s’adapte automatiquement au contenu**




