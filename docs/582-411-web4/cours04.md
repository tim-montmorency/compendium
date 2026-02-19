![](./assets/images/taxonomie.webp){data-zoom-image}


## Taxonomies
Dans WordPress, une taxonomie sert à classer et organiser le contenu.
Par défaut, les articles utilisent deux taxonomies :

* Catégories
* Étiquettes
  
Elles permettent de retrouver facilement des articles liés sur le site.
WordPress les propose automatiquement, mais on peut aussi les modifier, les supprimer ou en créer de nouvelles.
 
### Une taxonomie contient des termes.
👉 Pense à une taxonomie comme un dossier, et aux termes comme ce qu’il y a à l’intérieur.

#### Exemple :
* Taxonomie : Recettes
* Termes : Végétarien, Rapide, Facile à cuisiner

Autre exemple :

* Taxonomie : Films
* Termes : Meilleurs films, Avis, Sélections

!!! tip "Taxonomie"

    Les taxonomies aident donc à mieux classer le contenu et à le rendre plus facile à trouver.


![](./assets/images/post-type.jpg){data-zoom-image}



## Post types (types de contenu)

Dans WordPress, un post type sert à définir le type de contenu que vous créez.

Par défaut, WordPress propose :

* Articles
* Pages

Mais on peut créer d’autres post types selon les besoins du site.

#### Exemples :

* Projets
* Événements
* Critiques
* Produits

Chaque post type sert à organiser le contenu selon sa fonction.

Par exemple, un article sert à publier des nouvelles, tandis qu’un projet peut afficher une réalisation avec des images et des informations spécifiques.
Les post types permettent donc de structurer clairement le contenu et de l’afficher de façon adaptée sur le site.

![](./assets/images/ql.jpg){data-zoom-image}


## Bloc Boucle de requête (Queryloop)

Le bloc Boucle de requête sert à afficher automatiquement une liste de contenus sur une page, sans écrire de code.

**Par exemple, il peut afficher :**

* des articles
* des projets
* des recettes
* un portfolio

C’est une version plus avancée du bloc : Derniers articles.
 
### Comment ça fonctionne

Quand vous ajoutez le bloc, vous avez deux choix :

* Choisir une mise en page déjà prête
* Partir de zéro et décider quoi afficher (titre, date, extrait, image, etc.)

Le bloc est composé de petits blocs internes (titre, image, extrait).
Vous ne modifiez pas le contenu, mais l’apparence et l’ordre.
 
### Personnalisation
Vous pouvez facilement :

* changer le nombre de publications affichées
* modifier l’alignement et la largeur
* ajouter ou retirer des éléments (image, auteur, extrait)
* réorganiser les blocs par glisser-déposer
* changer les couleurs et le style

Les changements s’appliquent à toutes les publications affichées.
 
### Réglages principaux

Avec les réglages du bloc, vous pouvez :

* choisir le type de contenu (articles, projets, etc.)
* décider de l’ordre (plus récents, alphabétique, etc.)
* filtrer par catégories, étiquettes, auteurs ou mots-clés
* inclure ou exclure les articles épinglés
 
!!! tip "En résumé"

    👉 Le bloc Boucle de requête permet de créer facilement des listes dynamiques de contenu, comme une page de blog, de recettes ou de portfolio, sans coder.





## Query Loop (Gutenberg)
👉 Affiche une liste de contenus

### À quoi ça sert ?

*	Lister des articles, pages, CPT (Custom Post Type)
  
**Créer :**
  
 *	un blog
 *	un portfolio
 *	une grille de projets
 *	une liste de recettes

#### Exemple
“Montre-moi les 6 derniers projets”

### Caractéristiques

*	Fonctionne en boucle
*	Affiche plusieurs contenus
*	Utilise des blocs enfants (titre, image, extrait)
*	Requête statique (sans interaction front-end native)
* Parfait pour afficher plusieurs items
* Pas de filtres interactifs natifs


![](./assets/images/Dynamic_content.jpg){data-zoom-image}

 
## Dynamic Content
👉 Affiche des données dynamiques d’un contenu
### À quoi ça sert ?

**Afficher :**
  
 *	un champ ACF
 *	l’auteur
 *	la date
 *	une taxonomie
   
**Dans :**
  
 *	une page de détail
 *	un template
 *	une carte

#### Exemple
“Affiche la vitesse maximale de CE véhicule”

### Caractéristiques

*	1 contenu à la fois
*	Pas une boucle
*	Lié au contexte (post courant)
* Parfait pour afficher des champs personnalisés
* Ne fait pas de liste tout seul
 

| | Query Loop   | Dynamic Content   |
| ----------- | ----------- | ----------- |
| Affiche plusieurs contenus  |✅ | ❌ |
| Affiche un champ ACF  | ❌  | ✅ |
| Fonctionne en boucle  | ✅  | ❌ |
| Page archive / liste	| ✅  | ❌  |
| Filtre front-end natif | ❌ | ❌ |
 
## Analogie simple
*	Query Loop = une playlist
*	Dynamic Content = une chanson

Tu as besoin des deux… mais pas pour la même chose.
 
### Quand utiliser quoi ?

Utilise Query Loop quand :

*	Tu veux afficher plusieurs véhicules
*	Tu crées une page liste / archive
*	Tu construis un catalogue

Utilise Dynamic Content quand :

*	Tu affiches les infos d’un véhicule
*	Tu travailles avec ACF
*	Tu construis un template de fiche détaillée
 
🔥 Combo gagnant (très courant)
👉 Query Loop + Dynamic Content

*	La loop gère la liste
*	Le contenu dynamique affiche les champs ACF à l’intérieur
 




## Advanced Views Lite = Dynamic Content
#### Dynamic content, ça veut dire :
Afficher automatiquement des données qui changent selon le contenu affiché.

Advanced Views Lite :

*	affiche des champs ACF
*	s’adapte au post courant
  
**Fonctionne dans :**
 	
 *	une page
 *	un template
 *	un Query Loop
   
Ne contient aucune donnée en dur
  
**👉 Donc oui : 100 % dynamic content.**
 
### Concrètement, ce qu’il fait
Advanced Views Lite te permet d’afficher :

*	texte ACF
*	nombres
*	choix (select, checkbox)
*	relations
*	champs répétés (repeater)
*	taxonomies liées

Et tout ça :

*	sans PHP
*	sans shortcode
*	sans JS
 
 
### Cas d’usage idéal
Tu l’utilises exactement comme il faut si :

*	tu as des CPT (ex : Véhicules)
*	avec des champs ACF
  
**Affichés dans :**
  
 *	une fiche détail
 *	une carte
 *	une Query Loop
   
👉 C’est propre, scalable et maintenable.
 
⚠️ Limite importante à connaître

Advanced Views Lite :

*	❌ ne filtre pas les requêtes
*	❌ ne crée pas de logique conditionnelle avancée
*	❌ n’interagit pas avec l’utilisateur


## Exercice : Les Bagnoles

<div class="grid grid-1-2" markdown>
  ![](./assets/images/Bagnole-contenu.png)

  <small>Exercice - Les Bagnoles</small><br>
  **[Queryloop](./exercices/bagnole.md){.stretched-link .back}**
</div>

 
