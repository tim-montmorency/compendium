# Examen 01

## Adventure Time (26 points)

![](./adventure-time.png)

L’objectif est de démontrer sa capacité à **installer**, **exporter**, mais aussi **configurer** et **traduire** un site WordPress.

### Objectif / Résultat attendu

Vous devez reproduire à l'identique le site <https://exam.tim-momo.com/preview/fr/>.

### Matériel de départ

[Images :material-download:](./images.zip){ .md-button .md-button--primary }

[:material-translate: Traductions](./traduction.md){ .back }

```css
.widget_polylang ul,
.widget_polylang li {
  list-style: none;
  padding: 0;
}
.widget_polylang li a {
  background-color: var(--wp--custom--button--color--background);
  border-radius: var(--wp--custom--button--border--radius);
  color: var(--wp--custom--button--color--text);
  font-size: var(--wp--custom--button--typography--font-size);
  font-weight: var(--wp--custom--button--typography--font-weight);
  padding: calc(0.667em + 2px) calc(1.333em + 2px);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.widget_polylang li a:hover {
  opacity: 0.9;
}
```

!!! example "Serveur"

    Assurez-vous d'avoir au moins 25% (ou plus) de disque libre sur votre serveur (visible dans votre interface CPanel).

    Si nécessaire, supprimez vos Wordpress existants pour gagner de l'espace disque.

### Critères d'évaluation

- [ ] Installer un WordPress tout neuf sur votre serveur via CPanel (1 point)
- [ ] Installer et activer le thème [Skatepark](https://wordpress.org/themes/skatepark/) (1 point)
- [ ] Installer et activer les extensions (plugins) suivantes (1 point)
  - [Polylang](https://en-ca.wordpress.org/plugins/polylang/)
  - [Site Editor Classic Features](https://en-ca.wordpress.org/plugins/fse-classic/)
  - [WPvivid Backup Plugin](https://en-ca.wordpress.org/plugins/wpvivid-backuprestore/)

!!! info "Bon à savoir"

    Lorsqu'on utilise le plugin "Site Editor Classic Features", il n'est pas nécessaire de corriger, ni modifier le menu principal.

- [ ] Configurer Polylang (2 point)
  - Français - fr_CA (langue par défaut)
  - English - en_CA
  - Ne **pas** autoriser Polylang à traduire les médias
  - Ne pas cacher l’information de langue dans l’URL de la langue par défaut
  - Synchroniser les taxonomies
- [ ] Ajouter une catégorie « Personnage » avec sa traduction (voir [traductions](./traduction.md){ .back }) (1 point)
- [ ] Configurer l'entête du site (3 points)
  - Transformer le « Titre du site » en « Logo du site » et ajoutez le logo TIM
  - Ajouter le slongan avec sa traduction (voir [traductions](./traduction.md){ .back })
  - Retirer les icônes de réseaux sociaux
  - _Comme mentionné plus haut, pas besoin de toucher à la navigation._
- [ ] Configurer le pied de page (3 points)
  - Changer la « Composition » du pied de page
  - Ajouter le « Language Switcher » (via "Ancien widget")
  - Ajouter et retirer le nécessaire pour un résultat pareil au résultat attendu
- [ ] Ajouter une page « À propos » avec sa traduction (voir [traductions](./traduction.md){ .back }) (3 point)
  - Ajouter la citation avec la « Composition » du thème prévue à cet effet
  - Supprimer les autres pages inutilisées
  - Ajuster le modèle de page pour un résultat pareil au résultat attendu
- [ ] Ajouter trois articles : Finn, Jake et BMO (3 points)
  - Assigner la catégorie « Personnage »
  - Traduire chaque article (voir [traductions](./traduction.md){ .back })
  - Ajuster le modèle d'article pour un résultat pareil au résultat attendu
- [ ] Modifier le modèle d'accueil (3 points)
  - Retirer le nécessaire pour un résultat pareil au résultat attendu
  - Modifier « Latest posts » pour « Articles »
  - Retirer la mention « Continue reading »
- [ ] Assurez-vous que la page d'une catégorie respecte l'affichage du résultat attendu (1 point)
- [ ] Traduire le slogan (voir [traductions](./traduction.md){ .back }) (1 point)
- [ ] Ajouter le CSS du matériel de départ dans le `theme.css` pour changer le style du « Language Switcher». Oui, il est possible de le faire par l'interface WordPress (1 point)
- [ ] Faire un backup de votre site avec « WPvivid Backup Plugin » (1 point)
- [ ] Similitude convaincante avec le résultat attendu (1 point)

### Remise

Ajouter le fichier du backup ainsi que l'URL de votre site directement dans le devoir « Examen 01 » sur Teams.

## La facture (4 points)

![](./php-preview.png){ data-zoom-image }

L'objectif de cette partie est de reproduire fidèlement le résultat attendu en utilisant le langage de programmation PHP.

### Résultat attendu

[:material-web: Aperçu en ligne](https://exam.tim-momo.com/facture/)

### Critères d'évaluation

- [ ] Télécharger le « [Document de départ :material-download:](./facture.zip) »
- [ ] À l'aide d'une boucle, afficher le contenu du tableau `$facture` pour remplacer le commentaire `<!-- Détail de la facture ici -->` (1 point).
- [ ] En PHP, calculer le montant total de la facture et l'afficher sous la liste d'épicerie (1 point).
- [ ] Le résultat doit être identique au résultat attendu (1 point).
- [ ] L'indentation du code est bien faite (1 point).

### Remise

Ajouter le fichier `facture.php` directement dans le devoir « Examen 01 » sur Teams.

[STOP]

Utilisateur : `Finn`
Mot de passe : `Xb9GR^j3FOt(&nO^5QXw3OS5`
https://exam.tim-momo.com/preview/wp-login.php

/wp-login.php