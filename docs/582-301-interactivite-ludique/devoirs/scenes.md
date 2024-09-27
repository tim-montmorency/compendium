[:material-arrow-u-left-top: Cours 3](../cours03.md){.breadcrumb}

# Devoir 3 : Ludus2024

Le devoir consiste à créer les différentes scènes de votre jeu vidéo et d'y ajouter les éléments nécessaires pour naviguer entre elles.

L'usage d'assets à cette étape est pertinent afin de débuter le design graphique de vos interfaces.

Le tout doit être enregistré sur GitHub.

Ce devoir compte pour `10%` de votre note finale.

---

Aperçu des liens entre les scènes (voir consignes)

``` mermaid
flowchart LR
    J[Jeu] ----> A[Accueil]
    A ----> C["Crédit"]
    J -...-> E["Partie terminée"]
    J -...-> V[Victoire]
    E ----> A
    E ----> J
    V ----> A
    V ----> J
    C ----> A
    A ----> D["Comment jouer?"]
    D ----> A
    A ----> J
```

## Consignes

* [ ] À partir de votre modèle de base, **faites un duplicata** pour créer le code de base de votre PS

* [ ] **Créer une scène** « Accueil »
* [ ] Dans la scène « Accueil », **ajouter un logo et une image de fond**
* [ ] Dans la scène « Accueil », **ajouter un bouton (image cliquable)** "Commencer". Lorsque cliqué, ce bouton envoie à la scène « Jeu ».
* [ ] Dans la scène « Accueil », **ajouter un bouton (image cliquable)** "Crédit". Lorsque cliqué, ce bouton envoie à la scène « Crédit ».
* [ ] Dans la scène « Accueil », **ajouter un bouton (image cliquable)** "Comment jouer ?". Lorsque cliqué, ce bouton envoie à la scène « Comment jouer? »
* [ ] Dans la scène « Accueil », **ajouter un bouton (image cliquable)** pour activer/désactiver l'audio. Pour le moment, ce bouton ne fera rien.

* [ ] **Créer une scène** « Jeu »
* [ ] Dans la scène « Jeu », **ajouter un bouton (image cliquable)** "Quitter". Lorsque cliqué, ce bouton envoie à la scène « Accueil ».

* [ ] **Créer une scène** « Comment jouer ? »
* [ ] Dans la scène « Comment jouer ? », **ajouter un bouton (image cliquable)** "Retour" ou "Fermer". Lorsque cliqué, ce bouton envoie à la scène « Accueil ».

* [ ] **Créer une scène** « Crédits »
* [ ] Dans la scène « Crédits », **ajouter un bouton (image cliquable)** "Retour" ou "Fermer". Lorsque cliqué, ce bouton envoie à la scène « Accueil ».

* [ ] **Créer une scène** « Partie terminée »
* [ ] Dans la scène « Partie terminée », **ajouter un bouton (image cliquable)** "Recommencer". Lorsque cliqué, ce bouton envoie à la scène « Jeu ».
* [ ] Dans la scène « Partie terminée », **ajouter un bouton (image cliquable)** "Menu principal". Lorsque cliqué, ce bouton envoie à la scène « Accueil ».

* [ ] **Créer une scène** « Victoire »
* [ ] Dans la scène « Victoire », **ajouter un bouton (image cliquable)** "Menu principal". Lorsque cliqué, ce bouton envoie à la scène « Accueil ».

* [ ] **Créer un répertoire GitHub** nommé Ludus2024
* [ ] **Sauvegardez** les fichiers de votre PS dans le répertoire Ludus2024 sur GitHub

## Remise

16 septembre à 23h59

Identifiez votre travail avec la nomenclature suivante

* `[nom de famille]-[prénom]_devoir_03_582-301MO`

Déposez votre dossier en format `.zip`, `.rar` ou `.7z` dans le Devoir #3 sur Teams.

[STOP]

Critères d’évaluation pour le Devoir 3 : Ludus2024

Ce devoir compte pour 10% de votre note finale.

Total : 100 points

1. Création des scènes et navigation (60 points)

* Scène « Accueil » (20 points)
* Création de la scène avec logo et image de fond (5 points)
* Bouton “Commencer” fonctionnel qui mène à la scène « Jeu » (5 points)
* Bouton “Crédit” fonctionnel qui mène à la scène « Crédits » (3 points)
* Bouton “Comment jouer ?” fonctionnel qui mène à la scène « Comment jouer ? » (3 points)
* Bouton pour activer/désactiver l’audio présent (fonctionnalité non requise pour le moment) (4 points)
* Scène « Jeu » (10 points)
* Création de la scène « Jeu » (5 points)
* Bouton “Quitter” fonctionnel qui mène à la scène « Accueil » (5 points)
* Scène « Comment jouer ? » (10 points)
* Création de la scène « Comment jouer ? » (5 points)
* Bouton “Retour” ou “Fermer” fonctionnel qui mène à la scène « Accueil » (5 points)
* Scène « Crédits » (10 points)
* Création de la scène « Crédits » (5 points)
* Bouton “Retour” ou “Fermer” fonctionnel qui mène à la scène « Accueil » (5 points)
* Scène « Partie terminée » (5 points)
* Création de la scène « Partie terminée » (2 points)
* Bouton “Recommencer” fonctionnel qui mène à la scène « Jeu » (1.5 points)
* Bouton “Menu principal” fonctionnel qui mène à la scène « Accueil » (1.5 points)
* Scène « Victoire » (5 points)
* Création de la scène « Victoire » (2 points)
* Bouton “Menu principal” fonctionnel qui mène à la scène « Accueil » (3 points)

 2. Design graphique et utilisation d’assets (15 points)

* Utilisation appropriée d’assets (images, boutons, fonds) pour le design des interfaces (10 points)
* Cohérence visuelle et ergonomie des scènes (5 points)

3. Qualité du code et bonnes pratiques de programmation (15 points)

* Structure du code claire et organisée (5 points)
* Code bien commenté et lisible (5 points)
* Respect des bonnes pratiques de programmation (5 points)

4. Gestion du projet et remise (10 points)

* Gestion du code source sur GitHub (5 points)
* Création du répertoire GitHub nommé Ludus2024 (2 points)
* Sauvegarde de tous les fichiers du projet dans le répertoire GitHub (3 points)
* Conformité de la remise (5 points)
* Respect de la nomenclature pour le nom du dossier : [nom de famille]-[prénom]_devoir_03_582-301MO (3 points)
* Dossier compressé en format .zip, .rar ou .7z déposé dans le Devoir #3 sur Teams avant la date limite (2 points)

Notes supplémentaires :

* Intégration ludique et interactivité : Bien que les mécaniques de jeu avancées ne soient pas requises à cette étape, la navigation fluide entre les scènes et l’interactivité des boutons sont essentielles pour une expérience utilisateur intuitive.
* Technologies Web et compatibilité : Assurez-vous que votre projet fonctionne correctement sur les principaux navigateurs web pour garantir la compatibilité et la performance.
* Bonnes pratiques : Un code propre et bien structuré facilite la maintenance et le développement futur de votre projet. N’hésitez pas à suivre les standards de codage recommandés.

En respectant ces critères, vous démontrerez votre capacité à créer une structure de jeu solide tout en appliquant les principes de design et de programmation enseignés dans le cours. Bonne chance !
