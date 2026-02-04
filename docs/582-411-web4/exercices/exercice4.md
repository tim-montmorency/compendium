![](../assets/images/Polylang-Plugin-Logo-tim.jpg){data-zoom-image}   

## Exercice pratique – Site multilingue avec Polylang (WordPress)

## Objectif

Apprendre à :

* Installer et configurer Polylang
* Créer un site bilingue (FR / EN)
* Associer pages, articles et menus entre les langues
* Comprendre le fonctionnement du sélecteur de langue

## Mise en place
Reprendre le site de l'exercice précédent

### Étape 1 – Installation et configuration de Polylang

* [ ] Recherchez Polylang
* [ ] Installez et activez l’extension
* [ ] L’assistant de configuration s’ouvre :
 * Langue par défaut : Français
 * Ajouter une langue : English
* [ ] Conservez les réglages par défaut
* [ ] Terminez l’assistant

### Étape 2 – Langue du site et contenu existant
* [ ] Allez dans Pages
* [ ] Repérez la colonne des langues
* [ ] Pour chaque page existante :
 * Vérifiez qu’elle est associée au français
* [ ] Cliquez sur l’icône + sous English (si présente)

### Étape 3 – Traduction d’une page 

* [ ] Créez une traduction anglaise d’une page existante
* [ ] Modifiez :
 * Le titre
 * Le contenu (traduction simple)
* [ ] Publiez la page
* [ ] Vérifiez que :
 * Les pages FR et EN sont liées

### Étape 4 – Création d’une nouvelle page bilingue

* [ ] Créez une nouvelle page en français
* [ ] Publiez-la
* [ ] Cliquez sur + pour créer la version anglaise
* [ ] Traduisez le contenu
* [ ] Publiez

### Étape 5 – Menus multilingues

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



### Étape 6 – Test final 
1. Naviguez sur le site :
   
 * En français
 * En anglais
   
1.Vérifiez :

 * Pages
 * Menus
 * Sélecteur de langue
   
1. Changez de langue sur différentes pages
