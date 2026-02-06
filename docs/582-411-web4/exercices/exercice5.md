![](../assets/images/event.jpg){data-zoom-image}   

## Exercice pratique – Site WordPress pour une compagnie d’événementiel

## Contexte

Vous créez le site web d’une compagnie d’événementiel qui offre des services pour :

* Mariages
* Événements corporatifs
* Fêtes privées

Le site doit être :

* Visuellement cohérent
* Disponible en français et anglais
* Facile à mettre à jour grâce à des champs personnalisés

## PARTIE 1 – Édition du thème (éditeur de site)
### Étape 1 – Styles globaux 

* [ ] Allez dans Apparence → Éditeur → Styles
* [ ] Modifiez :
 * Couleur principale du site
 * Couleur d’arrière-plan
 * Police des titres
* [ ] Dans Blocs → Bouton :
 * Changez la couleur
 * Ajoutez un léger arrondi
* [ ] Enregistrez

### Étape 2 – En-tête du site 

* [ ] Allez dans Parties de modèles → En-tête
* [ ] Modifiez l’en-tête pour inclure :
 * Logo du site
 * Menu de navigation
 * Texte slogan
 Ex. : « Des événements mémorables, clé en main »
* [ ] Ajustez :
 * Alignement
 * Espacement
 * Couleur de fond
* [ ] Enregistrez

### Étape 3 – Pied de page 

* [ ] Allez dans Parties de modèles → Pied de page
* [ ] Ajoutez :
 * Nom de la compagnie
 * Texte : « Tous droits réservés »
 * Mise en colonnes (2 ou 3)
* [ ] Ajustez les styles
* [ ] Enregistrez

## PARTIE 2 – Création des pages principales
### Étape 4 – Page d’accueil 

* [ ] Allez dans Pages → Ajouter
* [ ] Titre : Accueil
* [ ] Ajoutez :
 * Une bannière (bloc Couverture)
 * Un titre principal
 * Un texte de présentation de la compagnie
 * Un bouton vers les services
* [ ] Publiez la page

### Étape 5 – Page Contact 

* [ ] Créez une nouvelle page : Contact
* [ ] Ajoutez :
 * Texte d’introduction
 * Informations de contact (fictives)
 * Bloc Formulaire (ou texte simulant un formulaire)
* [ ] Publiez

### Étape 6 – Définir la page d’accueil 

* [ ] Allez dans Réglages → Lecture
* [ ] Page d’accueil : Accueil
* [ ] Enregistrez

## PARTIE 3 – Site multilingue avec Polylang
### Étape 7 – Installation de Polylang 
* [ ] Allez dans Extensions → Ajouter
* [ ] Installez et activez Polylang
* [ ] Assistant :
 * Langue par défaut : Français
 * Ajouter : English
* [ ] Terminez la configuration

### Étape 8 – Traduction des pages 
### Accueil

* [ ] Allez dans Pages
* [ ] Cliquez sur + sous English pour la page Accueil
* [ ] Traduisez :
 * Titre
 * Textes
* [ ] Publiez
### Contact
* [ ] Faites la même chose pour la page Contact
* [ ] Publiez

### Étape 9 – Menus multilingues 

* [ ] Ajouter le code dans fonctions.php
      
  
```php
      // Shortcode de sélecteur de langue avec Polylang
      // Usage : [custom_language_switcher]
      function custom_pll_language_switcher() {
        return pll_the_languages( array(
          'show_flags' => 1,
          'show_names' => 1,
          'display_names_as' => 'name', // name ou slug
          'echo' => 0,
          'hide_current' => 1,
        ) );
      }
      add_shortcode( 'custom_language_switcher', 'custom_pll_language_switcher' );
```

      
* [ ] Aller dans apparence / éditeur
* [ ] Sélectionner Modèles / Pages
* [ ] Double-cliquer sur le menu en haut
* [ ] Ajouter un bloc : Shortcode
* [ ] Copier le code suivant
* [ ] [custom_language_switcher]

## PARTIE 4 – Contenu structuré avec ACF (services)

### Étape 10 – Créer un groupe de champs « Service événementiel » 

* [ ] Allez dans ACF → Groupes de champs
* [ ] Cliquez sur Ajouter
* [ ] Nom du groupe :
 * Service événementiel
* [ ] Laissez le groupe actif

### Étape 11 – Créer les champs personnalisés 
Ajoutez les champs suivants dans ce groupe :

#### Champ 1 – Type d’événement

* Libellé : Type d’événement
* Nom : type_evenement
* Type : Liste déroulante (Select)
##### Choix :

 * Mariage
 * Corporatif
 * Fête privée
 * Festival

#### Champ 2 – Durée du service

* Libellé : Durée du service (heures)
* Nom : duree_service
* Type : Nombre

#### Champ 3 – Prix de base

* Libellé : Prix de base ($)
* Nom : prix_base
* Type : Nombre

#### Champ 4 – Équipement inclus

* Libellé : Équipement inclus
* Nom : equipement_inclus
* Type : Cases à cocher
##### Choix :

 * Son
 * Éclairage
 * DJ
 * Musiciens
 * Animation

#### Champ 5 – Disponible à l’extérieur

* Libellé : Disponible à l’extérieur
* Nom : exterieur
* Type : Boutons radio
##### Choix :

 * Oui
 * Non

#### Champ 6 – Image principale

* Libellé : Image du service
* Nom : image_service
* Type : Image

### Étape 12 – Règles d’affichage 

* [ ] Dans Règles de localisation :
 * Afficher ce groupe si
 * Type de contenu est égal à Page

* [ ] Enregistrez le groupe

### Étape 13 – Créer une page de service 

* [ ] Allez dans Pages → Ajouter
* [ ] Titre de la page :
 * Service de mariage
* [ ] Dans l’éditeur :
 * Ajoutez une courte description du service
* [ ] Faites défiler vers le bas et remplissez :
 * Type d’événement : Mariage
 * Durée du service : 6
 * Prix de base : 2500
 * Équipement inclus : Son, Éclairage, DJ
 * Disponible à l’extérieur : Oui
 * Image du service : image au choix
* [ ] Publiez la page

### Étape 14 – Créer un deuxième service 

* [ ] Créez une nouvelle page :
 * Service corporatif
* [ ] Remplissez les champs ACF avec des valeurs différentes
* [ ] Publiez
