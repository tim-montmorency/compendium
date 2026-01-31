![](./assets/images/theme.png){data-zoom-image}

## Qu’est-ce qu’un thème WordPress ?
Un thème WordPress est un ensemble de fichiers qui détermine :
* L’apparence visuelle 
* La mise en forme d’un site web


Il influence la façon dont le contenu est présenté, sans modifier le contenu lui-même.

Autrement dit, le thème est responsable du design global du site : structure des pages, styles graphiques et organisation visuelle.
Pour définir cette représentation visuelle et graphique, un thème repose généralement sur plusieurs types de fichiers, notamment :

*	Des fichiers de modèles (templates)
  * ex. : index.php pour les thèmes classiques
  * ex. : index.html pour les thèmes basés sur les blocs
   Ces fichiers définissent la structure d’affichage des pages et du contenu.
*	Des fichiers images
  (.jpg, .png, .gif, etc.) utilisés pour les visuels du thème.
*	Des feuilles de styles CSS
  qui contrôlent les couleurs, les polices, les espacements et la mise en page.
*	Des modèles de pages personnalisés
  appliqués à une page précise ou à un type de contenu particulier.
*	D’autres fichiers sources nécessaires au fonctionnement du thème
  principalement des fichiers .php pour la logique et l’intégration avec WordPress.

## Thèmes natifs et types de thèmes WordPress
Lors de l’installation de WordPress, le système inclut automatiquement les thèmes natifs les plus récents développés par l’équipe officielle de WordPress.

### Qu’est-ce qu’un thème natif ?

Un thème natif est un thème :

*	fourni par défaut avec WordPress ;
*	développé et maintenu par l’équipe WordPress ;
*	conçu pour démontrer les bonnes pratiques et les fonctionnalités récentes de la plateforme.

Ces thèmes portent tous un nom commençant par Twenty suivi de l’année de publication
(ex. : Twenty Twenty-One, Twenty Twenty-Two, Twenty Twenty-Three).

### Les thèmes natifs servent souvent à :

*	tester les nouvelles fonctionnalités de WordPress ;
*	comprendre la structure d’un thème bien conçu ;
*	servir de base d’apprentissage ou de point de départ pour un projet.

### 7 bonnes raisons de personnaliser un thème WordPress
Personnaliser un thème WordPress ne se fait pas au hasard. C’est une démarche réfléchie qui permet d’adapter le site à des besoins précis. Voici les principales raisons de le faire.

1.	Avoir un site unique
1.	Améliorer l’expérience utilisateur
1.	Rendre le contenu plus lisible et accessible
1.	Adapter le site à tous les écrans (responsive)
1.	Mettre à jour le design du site
1.	Créer un design sur mesure
1.	Adapter le site à des événements ponctuels

### Avant de personnaliser un thème WordPress : sauvegardez votre site
Avant de modifier un thème WordPress, faites toujours une sauvegarde.
#### Personnaliser un thème peut toucher :

*	les fichiers du site
*	la base de données

En cas d’erreur (bug, problème d’affichage, erreur de code), la sauvegarde permet de remettre le site comme avant.
Idéalement, sauvegardez :

*	les fichiers
*	la base de données

#### Comment sauvegarder ?
*	Avec une extension de sauvegarde 
*	Avec un outil de gestion de site qui propose la restauration en un clic

### Méthode 1 : l’Outil de personnalisation (Customizer)
L’Outil de personnalisation permet de modifier l’apparence d’un thème sans toucher au code.
On y accède normalement via : Apparence > Personnaliser.
👉 Mais attention : il n’est pas toujours disponible.
#### Pourquoi vous ne le voyez peut-être pas ?
C’est normal si :

*	votre site utilise WordPress 5.9 ou plus
*	Et un thème basé sur des blocs (ex. : Twenty Twenty-Three)

Dans ce cas, le menu Apparence affiche seulement :
*	Thèmes
*	Éditeur
  
#### Le Customizer n’est plus utilisé.

Il est remplacé par l’Éditeur de site, qui permet de modifier tout le site avec des blocs (header, footer, pages, etc.).

### Quand le Customizer est-il disponible ?
Vous aurez accès à l’Outil de personnalisation si :

*	vous utilisez un thème classique (ex. : Astra)
*	même avec une version récente de WordPress
#### Exemple
* WordPress 6.x + thème Astra → Customizer disponible
* WordPress 6.x + thème à blocs → Éditeur de site uniquement

#### Le Customizer : à quoi ça sert et comment l’utiliser ?
L’Outil de personnalisation (Customizer) permet de modifier l’apparence d’un thème en voyant les changements en direct.

Il est disponible uniquement si le thème actif le permet.
Certains thèmes offrent beaucoup d’options (ex. : Astra), d’autres très peu (ex. : Twenty Twenty-One).

#### Ce que permet généralement le Customizer
Avec le Customizer, vous pouvez souvent :

*	changer les polices et les couleurs
*	ajouter un logo et une icône de site
*	modifier l’apparence du blog
*	créer et gérer les menus
*	choisir la page d’accueil (articles ou page fixe)
*	personnaliser le footer
*	ajouter du CSS personnalisé

### Méthode 2 : l’Éditeur de site WordPress
L’Éditeur de site permet de modifier tout le site (header, footer, pages, modèles) avec des blocs.
Pour pouvoir l’utiliser, il faut :

*	WordPress 5.9 ou plus
*	un thème basé sur des blocs

#### Comment y accéder ?
1.	Allez dans Apparence > Thèmes
1.	Cliquez sur Ajouter
1.	Choisissez un thème basé sur des blocs (ex. : Neve FSE)
1.	Installez et activez le thème

Ce qui change après l’activation

*	Le menu Apparence est plus simple
*	Le menu Personnaliser disparaît
*	Un nouveau menu apparaît : Éditeur

Pour modifier le thème
* Allez dans Apparence > Éditeur

### Quelles options sont disponibles ?
Avec l’Éditeur de site, vous pouvez modifier tout le site avec des blocs.
Vous pouvez :

*	modifier le menu de navigation
*	changer les couleurs et styles globaux du site
*	modifier toutes les pages
*	modifier ou créer des modèles (page d’accueil, articles, archives, page 404, etc.)
*	créer et gérer des compositions (patterns)

Comment ça fonctionne ?
*	Tout se fait directement à l’écran
*	Les changements sont visibles en temps réel
*	Vous cliquez sur un élément (texte, image, bouton) pour le modifier

#### Exemple
*	Cliquez sur un bouton → changez le texte
*	Cliquez sur une image → remplacez-la
*	Ajoutez un bloc → il s’intègre tout de suite

Ajouter et modifier des blocs
*	Cliquez sur + pour ajouter un bloc
*	Sélectionnez un bloc
*	Modifiez ses options dans le panneau Réglages

### Méthode n°3 : un constructeur de page
Nous allons voir les constructeurs de page plus tard durant la session.

### Méthode n°4 : l’éditeur de fichiers du thème
WordPress propose un éditeur de fichiers directement dans l’administration.

Il peut être tentant de l’utiliser… mais il ne faut pas le faire.
#### ourquoi ?
*	Une erreur de code peut faire planter le site
*	Les modifications sont effacées lors des mises à jour
*	WordPress lui-même déconseille cette méthode

### Conclusion :
N’utilisez jamais l’éditeur de fichiers du thème.
!!! info "À noter" 

    •	Avec un thème classique, l’éditeur est accessible via Apparence > Éditeur de fichiers
    •	Avec un thème basé sur des blocs, cet éditeur n’est souvent plus visible (et c’est une bonne chose)


### Méthode n°5 : personnaliser avec du code (la bonne façon)

#### Le thème enfant 
Si vous devez modifier le code d’un thème, la bonne méthode est d’utiliser un thème enfant.

*Un thème enfant :*

*	reprend le design et les fonctions du thème parent
*	permet de faire des modifications sans les perdre lors des mises à jour

#### Avantages :
•	site plus sécurisé
•	modifications conservées
•	bonne pratique professionnelle

!!! Warning "Attention"
  
    •	il faut un minimum de connaissances en code
    •	ce n’est pas obligatoire si vous débutez

!!! tip "Bonne nouvelle"
  
    Avec un thème basé sur des blocs, vous pouvez souvent tout personnaliser sans coder, directement avec l’Éditeur de site.

###  Que modifie-t-on dans un thème enfant ?
Généralement :

*	style.css
*	functions.php
*	parfois d’autres fichiers (index.php, modèles, etc.)

### Le cas des thèmes sur mesure
Pour un thème créé sur mesure :

*	pas forcément besoin de thème enfant
*	les mises à jour sont gérées par le développeur
*	le code peut être modifié directement

## Conclusion
Vous savez maintenant comment personnaliser un thème WordPress.

### Modifier un thème permet :

*	de rafraîchir le design
*	d’améliorer la lisibilité et l’expérience utilisateur
*	de se démarquer des autres sites

Pour personnaliser un thème, il existe plusieurs méthodes :

*	l’Outil de personnalisation
*	l’Éditeur de site
*	un constructeur de pages
*	l’éditeur de fichiers  (à éviter)
*	le code (avec de bonnes pratiques)
### Avant toute modification :
faites toujours une sauvegarde du site.

Source : https://wpmarmite.com/comment-personnaliser-theme-wordpress/


## Comment installer son thème WordPress

### Qu’est-ce qu’un bon thème WordPress ?
Un thème WordPress sert à gérer le design et la mise en page de votre site.
Changer de thème change donc l’apparence du site, pas son contenu.

Comme un site est fait pour être visité, le thème doit :

*	être agréable à regarder
*	donner envie de naviguer
*	donner envie de revenir
*	
👉 C’est pourquoi il faut bien choisir son thème.
 
### Les caractéristiques d’un bon thème WordPress
Un bon thème doit être :

* Facile à utiliser
  Pour ne pas perdre de temps ni se compliquer la vie.
*	Flexible
  Il doit permettre des ajustements et des évolutions.
*	Mis à jour régulièrement
  Pour rester sécurisé et compatible avec WordPress.
*	Responsive
  Il doit bien s’afficher sur ordinateur, tablette et téléphone.
*	Bien codé
  Respecte les standards WordPress et le SEO.
*	Bien noté
  Les avis utilisateurs donnent souvent un bon indice de qualité.
*	Léger et rapide
  Un site rapide améliore l’expérience utilisateur.
*	Compatible avec les plugins populaires
  Comme WooCommerce si vous voulez une boutique en ligne.

 
### Exemples de bons thèmes
Voici quelques thèmes souvent recommandés :

*	Astra
*	Neve
*	Kadence
*	Blocksy
*	GeneratePress
!!! warning "⚠️ Attention"

        Même s’ils sont de qualité, le meilleur thème reste celui qui correspond à vos besoins.
        👉 Le bon choix dépend toujours de votre projet (site vitrine, blogue, boutique, etc.).

## 5 choses à faire avant de changer de thème WordPress
👉 Cette section concerne uniquement les sites déjà en ligne.

Si vous débutez avec WordPress, vous pouvez passer.
Changer de thème peut avoir des impacts visibles. Il vaut mieux se préparer.
 
### 1️⃣ Faire une sauvegarde (indispensable)
Avant toute chose, sauvegardez votre site.

*	sauvegarde des fichiers
*	sauvegarde de la base de données
  
En cas de problème, vous pourrez tout restaurer.
 
### 2️⃣ Mettre une page de maintenance
Pendant le changement de thème :

*	le site peut être mal affiché
*	certaines pages peuvent boguer

👉 Une page de maintenance informe les visiteurs que le site revient bientôt.
 
### 3️⃣ Vérifier ce que faisait l’ancien thème
Certains thèmes ajoutent des fonctions :

*	SEO
*	shortcodes
*	mise en page spéciale

⚠️ Ces fonctions peuvent disparaître avec le nouveau thème.
 
### 4️⃣ Copier le code ajouté dans functions.php
Si vous avez ajouté du code dans l’ancien thème :

*	options
*	fonctionnalités
*	ajustements
  
👉 Pensez à recopier ce code dans le functions.php du nouveau thème (ou du thème enfant).
 
### 5️⃣ Ne pas oublier le code de suivi
Si vous utilisez :

*	Google Analytics
*	Jetpack Site Stats 
*	MonsterInsights 

⚠️ Le suivi peut s’arrêter si le code était dans le thème.
 


## Comment installer un thème WordPress depuis l’administration
La manière la plus simple d’installer un thème est directement depuis votre tableau de bord WordPress. Suivez ces étapes :

### Méthode 1 : Installer un thème via un fichier ZIP
Pour un thème premium (payant), vous aurez un fichier .zip. Il faut le téléverser dans WordPress.
Exemple : installer le thème BeTheme acheté sur Themeforest.


Dans votre tableau de bord WordPress, allez dans :

1. Apparence > Thèmes
![](./assets/images/installer-theme-wordpress-2048x1001.webp){data-zoom-image}

2. Cliquez sur le bouton « Ajouter ». 
![](./assets/images/ajout-theme-wordpress-2048x1143.webp){data-zoom-image}

4. Cliquez sur le bouton « Téléverser un thème ». 
![](./assets/images/installer-theme-wordpress-televerser-2048x1182.webp){data-zoom-image}

6.	Cliquez sur le bouton « Parcourir » pour télécharger le fichier zip de votre thème. 
![](./assets/images/iinstaller-theme-premium-2048x609.webp){data-zoom-image}

7.	Activer le thème


### Méthode 2 : Installer un thème depuis le répertoire officiel
Vous pouvez aussi ajouter un thème gratuit directement depuis WordPress, sans quitter votre tableau de bord.
La procédure est très proche de celle pour installer un fichier ZIP. Voici comment faire, par exemple pour le thème Astra :

1.
Connectez-vous à WordPress et allez dans :

1. Apparence > Thèmes 
![](./assets/images/installer-theme-wordpress-2048x1001.webp){data-zoom-image}


2. Cliquez sur le bouton « Ajouter ».
![](./assets/images/ajout-theme-wordpress-2048x1143.webp){data-zoom-image}

3.
Choisissez le thème que vous voulez.
WordPress montre par défaut les thèmes les plus populaires.

Vous pouvez aussi naviguer dans les onglets pour trouver votre thème :

*	Populaires
*	Derniers
*	Thèmes basés sur des blocs
*	Favoris
![](./assets/images/onglets-categories-themes-wordpress-2048x816.webp){data-zoom-image}

*	soit, chercher par catégorie grâce au filtre de fonctionnalités proposé par WordPress ;
![](./assets/images/filtre-fonctionnalites-themes-wordpress-2048x1549.webp){data-zoom-image}

*	soit, utiliser la barre de recherche pour retrouver le thème de votre choix, ce qui implique que vous l’ayez déjà choisi.
![](./assets/images/barre-recherche-themes-wordpress-2048x813.webp){data-zoom-image} 

4. Installez le thème.
Une fois votre sélection opérée, cliquez sur le bouton « Installer » : 
![](./assets/images/installation-theme-wordpress-2048x1373.webp){data-zoom-image} 

5. Activer le thème
![](./assets/images/activation-astra-2048x1007.webp){data-zoom-image}  

Source : https://wpmarmite.com/installer-theme-wordpress/#

## Qu’est-ce qu’un plugin WordPress ?
Un plugin (ou extension) sert à ajouter de nouvelles fonctionnalités à WordPress.
Par exemple, il peut gérer le SEO, le e-commerce, la sécurité, le marketing, etc.

Il existe des milliers de plugins gratuits sur le répertoire officiel WordPress, et beaucoup d’autres payants sur des sites spécialisés.
Le Cœur (Core) de WordPress contient tous les fichiers de base nécessaires pour que WordPress fonctionne.

Un plugin complète le Cœur pour que votre site fasse exactement ce dont vous avez besoin.

### Comment choisir un plugin WordPress ?
Avant d’installer un plugin, posez-vous ces questions :

*	À quoi il sert ? Quelle fonctionnalité vous faut-il ?
*	Peut-il vraiment faire ce que vous voulez ?
*	Comprenez-vous ce qu’il fait ?
*	Pouvez-vous le configurer sans casser votre site ?
  
Certains plugins mal utilisés peuvent poser des problèmes, alors soyez prudent.

Regardez aussi ces points avant d’installer :

*	Étoiles / notes : choisissez un plugin bien noté (idéalement ≥ 4 étoiles).
*	Avis des utilisateurs : lisez ce que les autres disent.
*	Installations actives : plus il y en a, plus c’est un bon signe (mais ce n’est pas toujours vrai).
*	Mises à jour récentes : vérifiez que le plugin est compatible avec votre version de WordPress. 
![](./assets/images/infos-plugin-wordpress.png){data-zoom-image}  


## Où trouver des plugins WordPress ?
Le répertoire officiel de WordPress est le meilleur endroit pour chercher des plugins. Il y en a des milliers, et tous sont vérifiés pour respecter les règles de WordPress.

Pour chercher un plugin, vous pouvez :

*	Par catégories : blocs, populaires, mises en avant, bêta…
*	Avec la barre de recherche : tapez le nom du plugin ou un mot-clé (ex : SEO, formulaire, sécurité).
*	Avec les filtres :
 *	Communautaire : gratuit et développé par la communauté
 *	Commercial : gratuit avec options payantes ou support en plus
 ![](./assets/images/extensions-repertoire-officiel-2048x1619.webp){data-zoom-image}  

## Comment installer un plugin WordPress gratuit
Pour installer un plugin gratuit depuis le répertoire officiel :

1.	Dans votre tableau de bord WordPress, allez dans Extensions > Ajouter.
1.	Si vous ne voyez pas ce menu, vous utilisez peut-être WordPress.com au lieu de WordPress.org (auto-hébergé).
1.	Dans la barre de recherche, tapez le nom du plugin ou un mot-clé (ex : SEO, formulaire, sécurité).
1.	Cliquez sur Installer puis Activer.
2.	
Et voilà, votre plugin est prêt à être utilisé. 
![](./assets/images/installer-plugin-wordpress-admin-2048x1069.webp){data-zoom-image}  


## Installer un plugin WordPress acheté ou téléchargé
Si vous avez un plugin premium ou téléchargé ailleurs (fichier .zip) :

1.	Dans WordPress, allez dans Extensions > Ajouter.
1.	Cliquez sur Téléverser une extension.
1.	Choisissez le fichier .zip de votre plugin.
1.	Cliquez sur Installer puis Activer.
2.	
Votre plugin est maintenant prêt à l’emploi.
![](./assets/images/televerser-extension-wordpress-2048x1080.webp){data-zoom-image}  


Sélectionnez ensuite le fichier .zip de votre plugin sur votre ordinateur, et cliquez sur le bouton « Installer maintenant » :
![](./assets/images/installation-plugin-wordpress-redirection.webp){data-zoom-image}  
 

Une fois le plugin installé, cliquez également sur « Activer l’extension » pour la mettre en service :
![](./assets/images/activer-extension-zip.webp){data-zoom-image}  

## All-in-One WP Migration and Backup
Ce plugin facilite la migration, la sauvegarde et la restauration d’un site WordPress.
Il permet de copier tout le site (base de données, images, plugins, thèmes) dans un seul fichier à exporter et réutiliser facilement.

All-in-One WP Migration and Backup – Mode d’emploi simple
1. Installer le plugin
*	Allez dans Extensions > Ajouter sur votre tableau de bord WordPress.
*	Cherchez All-in-One WP Migration.
*	Cliquez sur Installer, puis Activer.
2. Faire une sauvegarde de votre site
*	Dans le menu WordPress, cliquez sur All-in-One WP Migration > Exporter.
![](./assets/images/all-in-one-wp-wordpress-migration-export.png){data-zoom-image}  
*	Choisissez Exporter vers et sélectionnez Fichier (ou un autre service si disponible, comme Google Drive).
![](./assets/images/all-in-one-wp-wordpress-migration-file.png){data-zoom-image}  
*	Le plugin va créer un fichier .wpress contenant :
 *	votre base de données
 *	vos fichiers médias
 *	vos plugins
 *	votre thème
•	Téléchargez ce fichier sur votre ordinateur.
![](./assets/images/all-in-one-wp-wordpress-migration-download.png){data-zoom-image}  
3. Restaurer votre site
*	Dans WordPress, allez sur All-in-One WP Migration > Importer.
![](./assets/images/all-in-one-wp-wordpress-migration-import.png){data-zoom-image}  
*	Cliquez sur Importer depuis et sélectionnez le fichier .wpress que vous avez sauvegardé.
![](./assets/images/all-in-one-wp-wordpress-migration-import-file.png){data-zoom-image}  
*	Suivez les instructions à l’écran pour restaurer votre site.
4. Points importants
*	Sauvegardez avant toute modification de votre site.
*	La version gratuite a des limites pour la taille des fichiers.
*	Pour des sauvegardes sur le cloud ou des fonctionnalités avancées, il faudra acheter la version premium.

## Exportation / Importation d’une base de données
### Exportation :
![](./assets/images/exportation-base-de-donnees.png){data-zoom-image}   

### Importation :  
![](./assets/images/creation-base-de-donnees.png){data-zoom-image}
![](./assets/images/importation-bas-de-donnees.png){data-zoom-image}   
![](./assets/images/bouton-importer-base-de-donnees.png){data-zoom-image}   

![](./assets/images/polylang.png){data-zoom-image}   

## Qu’est-ce que Polylang ?

Polylang est un plugin WordPress qui permet de créer un site en une ou plusieurs langues.
Il permet de traduire le contenu du site (pages, articles, menus, catégories, etc.).

Vous pouvez ajouter autant de langues que vous voulez et faire les traductions manuellement ou avec un outil de gestion des traductions.

## Comment installer Polylang sur WordPress (ultra simple)

Après avoir installé et activé Polylang Pro, un assistant de configuration se lance automatiquement. Il se fait en 6 étapes simples.

### Étape 1 : Choisir les langues du site
![](./assets/images/polylang-langue.png){data-zoom-image}   

Choisissez au moins une langue pour votre site (ex. français, anglais).
👉 La première langue choisie devient la langue par défaut du site.

### Étape 2 : Traduire les médias (optionnel)
![](./assets/images/polyland-medias.png){data-zoom-image}   

* Polylang vous demande si vous voulez traduire les textes des images
(titre, description, texte alternatif).
* ➡️ Activez ou désactivez selon vos besoins.

### Étape 3 : Définir la langue des contenus existants
![](./assets/images/polyland-contenu.png){data-zoom-image}   

Tous vos contenus actuels (pages, articles) reçoivent une langue par défaut.

### Étape 4 : Traduire la page d’accueil (si applicable)
![](./assets/images/polyland-fin.png){data-zoom-image}   

Si vous avez une page d’accueil fixe, Polylang vous propose de la traduire.

### Étape 5 : Configuration terminée 🎉
![](./assets/images/exportation-base-de-donnees.png){data-zoom-image}   

Polylang est prêt à être utilisé.
Vous pouvez maintenant :

* traduire vos pages et articles
* créer des menus multilingues
* consulter la documentation
* ou retourner au tableau de bord

👉 Votre site est maintenant prêt pour le multilingue.
