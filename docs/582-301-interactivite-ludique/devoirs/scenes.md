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
