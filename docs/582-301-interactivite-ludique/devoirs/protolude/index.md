# Protolude

*[CES]: Collision Event System

L'objectif du projet est de construire un niveau de jeu vidéo en y plaçant un personnage contrôlable qui pourra déclencher un événement de victoire.

Ce projet compte pour 15% de la note finale.

## Partie 1 | L'habillage 🏔️

![](./assets.png){.w-100}

- [ ] Créer une nouveau projet « _Universal 3D_ » et nommez le « Protolude »
- [ ] Appliquer la classification de dossier apprise en classe
- [ ] Ajouter le _package_ de ***SyntyStudio*** et ***Collision Event System***
- [ ] Positionnner des prefabs SyntyStudio pour façoner un niveau de jeu
  > Varier la quantité et la diversité pour donner de l'ampleur au monde
- [ ] S'assurer que le pesonnage ne tombera jamais dans le vide
  > Au besoin, ajouter des murs invisibles
- [ ] Imaginer un prérequis (cours 1) et ses interactions (minimum 2)
  > Par exemple : récurer une hache (1ere interraction) pour couper un arbre (2eme interaction).

## Partie 2 | L'interactivité 🪤

- [ ] Ajouter le package *Starter Assets: Character Controllers | URP*
- [ ] Ajouter un personnage jouable à la première ou à la troisième personne avec le .
- [ ] Configurer les interactions avec _Collision Event System_
  > Une interaction doit en débloquer une autre. L'usage de condition est nécessaire.
- [ ] Déclencher la fin du jeu par un changement de scène
- [ ] Ajouter au moins un objet, autre que le personnage, qui utilise la physique
  > Doit être cohérent avec l'esthétique du jeu

## Remise

**Échéance** : :calendar_spiral: 16 septembre à :clock11: 23:59

**Format** : Non compressé, selon les indications suivantes :

Pour limiter la taille de votre remise, une fois Unity fermé, vous pouvez supprimer les dossiers `Library` et `Logs` sans vous inquiéter de briser quoi que ce soit. Ça peut rendre votre remise 10x moins lourde.

```txt title="Modèle de remise"
📁 nomfamille-prenom_protolude_582-301MO
 └── 📁 Protolude      <-- Votre Projet Unity
      ├── 📁 Assets
      ├── 📁 Build     <-- Votre Build Windows
      ├── 📁 Library   <-- ❌ À supprimer avant la remise
      ├── 📁 Logs      <-- ❌ À supprimer avant la remise
      ├── 📁 ProjectSettings
      ├── 📁 UserSettings
      └── ...
```

Évidemment, remplacez `nomfamille-prenom` par vos informations personnelles.

[Dossier de remise](https://cmontmorency365-my.sharepoint.com/:f:/g/personal/jfcartier_cmontmorency_qc_ca/IgCEc7zvKBYETpOZmr0Jgu4_AUppD89EuVL4Wtn5GDt7zmQ?e=0upeq6){ .md-button .md-button--primary }

## Critères de correction

| Critère | Attentes | Points |
|---|---|---|
| **Environnement** | Un monde construit avec les prefabs SyntyStudio. On identifie facilement le parcours à faire. La quantité et la diversité de prefabs utilisés témoignent d'un effort considérable. | 3 |
| **Qualité technique de l'environnement** | On ne passe pas au travers du décor et on ne tombe jamais dans le vide. Ce critère évalue aussi la minutie et l'attention aux détails. | 2 |
| **Prérequis et personnage** | Un prérequis sépare le joueur de sa victoire. Une interaction initiale doit être complétée pour en débloquer une autre en s'appuyant sur le principe de condition du _Collision Event System_. Le  _Character Controllers_ est utilisé pour se déplacer et effectuer les interactions. | 3 |
| **Physique** | Au moins un objet autre que le personnage doit être affecté par la physique. | 1 |
| **Détection et victoire** | Un **CES** correctement configuré déclenche la fin du jeu par un changement de scène. | 1 |
| **Structure de fichier** | Les dossiers suivent la classification attendue dans le cours. | 1 |
| **Compilation** | Un build Windows fonctionnel | 1 |
| **Rigueur et créativité** | Qualité générale d'exécution et créativité démontrée par l'environnement et l'interaction. | 3 |
| | **Total** | **15** |

<!-- ## Savoirs essentiels évalués

Logiciels d'intégration d'expériences ludiques, installation et configuration des ressources, classement des fichiers et des médias, création d'un environnement virtuel navigable, intégration d'images dans l'environnement virtuel, déplacement dans l'environnement virtuel, détection de collisions pour le déclenchement d'événements, transitions de scènes, compilation de l'application. -->
