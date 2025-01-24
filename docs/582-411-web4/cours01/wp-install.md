---
tags:
  - Exercice
---

# Installation de WordPress

L'objectif de cet exercice est d'installer le CMS WordPress localement avec un serveur AMP.

- [ ] Si ce n'est déjà fait, télécharger et installer MAMP sur l'ordinateur. (Les ordinateurs en TIM devraient disposer de MAMP par défaut)
- [ ] Si ce n'est déjà fait, créez une nouvelle base de données pour votre site Wordpress.

- [ ] [Télécharger WordPress](https://fr-ca.wordpress.org/download/) et extraire les fichiers dans le dossier des sites de MAMP (htdocs ou autrement précifié).
- [ ] Renommez le dossier wordpress par le nom de votre projet. Ex: mon_premier_wp
- [ ] Accédez à http://localhost/mon_premier_wp dans votre navigateur (ça peut prendre un certain temps)
- [ ] Suivez l’assistant d’installation :

---

Bienvenue sur WordPress. Avant de commencer, vous aurez besoin de connaître les éléments suivants.

1. Nom de la base de données
1. Nom d’utilisateur MySQL
1. Mot de passe de l’utilisateur
1. Adresse de la base de données
1. Préfixe de table (si vous souhaitez avoir plusieurs WordPress sur une même base de données)

Ces informations sont utilisées pour créer un fichier `wp-config.php`. **Si pour une raison ou pour une autre la création automatique du fichier ne fonctionne pas, ne vous inquiétez pas. Sa seule action est d’ajouter les informations de la base de données dans un fichier de configuration. Vous pouvez aussi simplement ouvrir** `wp-config-sample.php` **dans un éditeur de texte, y remplir vos informations et l’enregistrer sous le nom de** `wp-config.php`. Besoin d’une aide complémentaire ? Lisez l’article de soutien sur `wp-config.php`.

Vous devriez normalement avoir reçu ces informations de la part de votre hébergeur. Si vous ne les avez pas, il vous faudra contacter votre hébergeur afin de continuer. Si vous avez tout le nécessaire, alors…

---

	•	Nom de la base de données : wordpress_db.
	•	Utilisateur : root.
	•	Mot de passe : (laisser vide si non configuré).

Finaliser l’installation :
	•	Choisissez un nom de site.
	•	Créez un utilisateur administrateur (nom et mot de passe).

	•	Exploration du tableau de bord WordPress : menus, réglages généraux, création rapide de contenu.