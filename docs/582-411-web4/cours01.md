# Bienvenue en Web 4

*[CMS]: Content Management System
*[BD]: Base de données

![bienvenue](./assets/images/welcome.webp){.w-100}

## Système de gestion de contenu (CMS)

Un CMS (Content Management System) c'est un outil qui permet de créer, organiser et gérer des contenus sans programmation ! Il est composé d'un gros paquet de fichiers de programmation qui permet d'exécuter plein de fonctionnalités.

Voici une liste non exhautive de CMS populaires[^cms] :

[^cms]: [Liste des 15 CMS les plus populaires](https://www.wpbeginner.com/showcase/best-cms-platforms-compared/)

* :simple-wordpress: Wordpress (open-source)
* :simple-drupal: Drupal (open-source)
* :simple-joomla: Joomla (open-source)
* :simple-hubspot: Hubspot
* :simple-shopify: Shopify
* :simple-ghost: Ghost (open-source)
* :simple-typo3: Typo3 (open-source)
* :simple-blogger: Blogger
* :simple-wix: Wix

Voici un aperçu rapide de ce à quoi ressemble le CMS wordpress :

<div class="grid grid-1-2" markdown>
  ![](./assets/images/wp-dashboard.png){data-zoom-image}

  Interface administrative où les utilisateurs gèrent le contenu, les paramètres et les fonctionnalités du site (back-end)
</div>

<div class="grid grid-1-2" markdown>
  ![](./assets/images/wp-inline-edition.png){data-zoom-image}

  Édition du contenu en ligne (inline editing)*
</div>

<div class="grid grid-1-2" markdown>
  ![](./assets/images/wp-front.png){data-zoom-image}

  Aperçu du résultat final (front-end)
</div>

<!-- Une manière de gérer le contenu. Soit par wysiwyg, inline editing ou par formulaire admin. -->

## Fonctionnalités d'un CMS

Voici quelques-unes des fonctionnalités clés que l’on retrouve généralement dans un CMS :

* **Interface conviviale (UI)** : Une interface utilisateur intuitive permet aux administrateurs et aux éditeurs de naviguer facilement dans le système, de créer et de modifier du contenu sans nécessiter de compétences techniques avancées.
* **Gestion de contenu** : Les CMS permettent une gestion efficace du contenu, offrant des fonctionnalités pour ajouter, modifier et supprimer des pages, des articles, des images et d’autres types de médias.
* **Personnalisation de l’apparence** : La possibilité de personnaliser l’apparence du site grâce à des **thèmes**.
* **Optimisation pour les moteurs de recherche (SEO)**
* **Gestion des utilisateurs et des permissions** : La possibilité de gérer plusieurs utilisateurs avec des rôles et des permissions spécifiques, facilitant la collaboration tout en maintenant la sécurité et le contrôle sur le contenu publié.
* **Sécurité** : Des fonctionnalités de sécurité robustes, y compris des mises à jour régulières, la gestion des permissions et le support SSL, sont essentielles pour protéger les informations sensibles et assurer la fiabilité du site.
* **Support multilingue**
* **Optimisation pour les appareils mobiles** : En bonne partie lié au thème choisi.
* **Gestion des versions et historique des révisions**
* **Intégration avec des outils tiers** : La possibilité d’intégrer des **plugins** et des extensions pour ajouter des fonctionnalités supplémentaires et des fonctionnalités avancées.

## Pourquoi utiliser un CMS ?

> ... plutôt que d'utiliser le bon vieux duo HTML et CSS?

C'est que créer un site Web complet, entièrement à la main, peut être long et compliqué. De plus, pour faire la gestion d'une site, ne serait-ce que pour changer une virgule, il faut être capable de lire le code ainsi que savoir comment programmer. Les CMS démocratisent la gestion de site Web, car ils offrent une interface compréensible pour le commun des mortels.

Voici quelques avantages à l'usage de CMS :

* Gain en temps
* Architecture logique
* Mises à jour : pour ajouter des fonctionnalités, mais aussi régler certains bogues ou vulnérabilités
* Sécurité
* Expérience utilisateur (UX)
* Design
* Flexibilité
* Accessibilité

## Bon, comment ça marche ?

### Le serveur

Un serveur est un ordinateur configuré pour fournir des ressources via un réseau, comme Internet. Dans le cas d’un serveur web, son rôle est de traiter les requêtes des utilisateurs et de fournir les réponses correspondantes, comme les pages web, les fichiers ou les médias.

### CMS et langage de programmation

Sur le serveur, on peut installer un CMS. Cependant, il est également nécessaire d’installer le langage de programmation utilisé par le CMS. Par exemple, WordPress est écrit en PHP.

### Le logiciel serveur

Pour permettre les communications via Internet et afficher un site web, vous devez installer un serveur web comme **Apache** ou **Nginx**.

### Base de données

Une base de données est un logiciel serveur conçu pour stocker, organiser et gérer des données de manière structurée. Un peu comme Excel, mais sur les stéroïdes. Il existe plusieurs sortes de base de données. Chacune a ses propres avantages et inconvénients[^db]. Pour sa part, WordPress fonctionne avec MySQL ou MariaDB.

[^db]: [Comparatif des différentes bases de données](https://en.wikipedia.org/wiki/Comparison_of_relational_database_management_systems) (en)

### Nom de domaine

Il est également préférable d’acquérir un nom de domaine pour que les visiteurs puissent accéder facilement à votre site (par exemple, recettes.qc.ca) plutôt que par une adresse IP (par exemple: 24.71.1.221). Ce domaine doit être configuré pour pointer vers votre serveur !

## WordPress

![](./assets/images/wp-banner.png)

WordPress est un CMS open-source permettant de créer et de gérer des sites Web sans nécessiter de connaissances approfondies en programmation.

!!! info "Un peu d’histoire"

    * Créé en 2003 par Matt Mullenweg et Mike Little
    * Initialement conçu pour faire des blogues, il est devenu la plateforme CMS la plus utilisée au monde
    * Aujourd’hui, WordPress alimente plus de 40 % des sites Web

### Avantages de WordPress

* **Gratuit et open-source**
* **Flexibilité** : permet de créer des blogs, sites vitrine, boutiques en ligne, etc
* **Large communauté** : des milliers de développeurs créent des extensions et thèmes
* **Facilité d’utilisation** : interface intuitive et personnalisable
* **SEO-friendly** : optimisé pour les moteurs de recherche

### Licence GPL

WordPress est sous licence GPL. Voici les trois avantages principaux :

* Vous pouvez utiliser WordPress comme bon vous semble **sans aucune restriction**.
* Vous pouvez personnaliser, ajouter ou supprimer tout ce que vous n’aimez pas dans WordPress sans aucune restriction.
* Vous pouvez reconditionner, renommer, vendre et distribuer WordPress sans aucune restriction, sauf qu’il est également publié sous licence GPL.

## WordPress.com / WordPress.org

WordPress.org appartient à la communauté open-source et est supervisé par la WordPress Foundation.

WordPress.com appartient à Automattic, une société privée dirigée par Matt Mullenweg.

| Critère          | WordPress.com                                                      | WordPress.org                                           |
| ---------------- | ------------------------------------------------------------------ | ------------------------------------------------------- |
| Hébergement      | Hébergé par [Automattic](https://en.wikipedia.org/wiki/Automattic) | Hébergé par vous-même (auto-hébergé)                    |
| Coût             | Gratuit avec options payantes.                                     | 100% gratuit, mais vous payez pour l’hébergement        |
| Personnalisation | Limitée (certains thèmes et plugins restreints)                    | Totale (tous les thèmes et plugins disponibles)         |
| Nom de domaine   | Sous-domaine gratuit (ex. : votresite.wordpress.com)               | Nécessite un domaine personnalisé (ex. : votresite.com) |
| Publicité        | Publicité imposée sur les plans gratuits                           | Pas de publicité imposée                                |

## Lexique à connaître

* **Thèmes** : Un thème détermine l’apparence visuelle et la mise en page d’un site. Il peut être modifié sans affecter le contenu.
* **Plugins** : Les plugins ajoutent des fonctionnalités (ex. : formulaires, SEO, sécurité). Exemple : [Yoast SEO](https://en-ca.wordpress.org/plugins/wordpress-seo/) pour le référencement, [WooCommerce](https://en-ca.wordpress.org/plugins/woocommerce/) pour l’e-commerce.

## Introduction à l’environnement AMP (Apache, MySQL, PHP)

AMP : Acronyme pour Apache, MySQL et PHP, utilisé pour simuler un serveur sur son ordinateur ou, communément appelé, en local.

* Apache : Serveur Web permettant de tester votre site en local.
* MySQL : Base de données où sont stockées toutes les informations du site (pages, utilisateurs, contenus).
* PHP : Langage de programmation côté serveur utilisé par WordPress.

Outils courants

* XAMPP (Windows / Mac / Linux)
* **MAMP** (Windows / Mac)
* WAMP (Windows)

### Serveur

Qu’est-ce qu’un serveur ?

Un serveur est un **ordinateur** ou un **programme** qui **fournit des services** à d'autres **ordinateurs**, appelés clients, via un **réseau** (souvent internet).

!!! info "Le saviez vous?"

    Lorsque vous utilisez l'extension Live Server dans Visual Studio Code (VS Code)

    [:octicons-broadcast-24: Go live](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

    vous créez en réalité un serveur local. Cela signifie que votre ordinateur agit temporairement comme un serveur web, permettant d'afficher et de tester vos pages HTML, CSS et JavaScript dans un navigateur web, comme si elles étaient hébergées en ligne.

### Base de données

Une base de données est un système qui permet de stocker, organiser et gérer des informations de manière structurée.

![](./assets/images/db-basics.png){data-zoom-image}

Plus concrètement :

![](./assets/images/db-basics-example.png){data-zoom-image}

## Exercices

<div class="grid grid-1-2" markdown>
  ![](./assets/images/mamp-install-preview.png)

  <small>Exercice - MAMP</small><br>
  **[Installation de base](./exercices/mamp-install.md){.stretched-link .back}**
</div>

<div class="grid grid-1-2" markdown>
  ![](./assets/images/wp-install-preview.png)

  <small>Exercice - Wordpress</small><br>
  **[Installation de base](./exercices/wp-install.md){.stretched-link .back}**
</div>

<div class="grid grid-1-2" markdown>
  ![](./assets/images/wp-install-preview.png)

  <small>Exercice - Wordpress</small><br>
  **[Installation de base](./exercices/wp-install.md){.stretched-link .back}**
</div>