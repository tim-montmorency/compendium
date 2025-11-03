# Terminator

L'objectif du TP2 est de créer un tableau de bord interactif futuriste avec toutes les technologies apprises dans le cours.
Certaines technologies, pas encore enseignées, devront être ajoutées au projet au fur et à mesure.

## Structure du projet

```txt
📁 tp2
    📁 src
        📁 css
            📄 styles.css
        📁 js
            📄 animejs.js
            📄 bootstrap.js
            📄 ...
    📁 assets
        📁 img
            ...
        📁 audio
            exemple.mp3
        📁 video
            exemple.mp4
    📁 node_modules

    📄 index.html
    📄 package.json
    📄 package-lock.json

```

## Étape 1

S'informer pour comprendre le concept du projet dans son esthétisme. (Consulter des images, des exemples vidéos, etc.)
Positionner les éléments prévus and l'interface avec draw.io
Annoter les différents concepts à implémenter.

Sélection d'une couleur principale.



# Étape 2



Présentation TP : 
https://codepen.io/fand/pen/dyBbVRG?editors=0010
https://maplibre.org/maplibre-gl-js/docs/examples/display-buildings-in-3d/
https://maplibre.org/maplibre-gl-js/docs/examples/animate-map-camera-around-a-point/
TP - Scifi Dashboard





https://www.youtube.com/watch?v=6GuqsoGpmoc

Dashboard interactif
--------------------

> Vous êtes un cyborg venu du futur envoyé dans le passé (en 2025) pour tuer Sarah Connor, la mère du futur chef de la résistance humaine contre les machines.
> Dans votre vaisseau se trouve un tableau de bord hautement technologique.

L'objectif de ce travail pratique est d'imaginer un tableau de bord interactif du futur et d'implémenter les technologies apprises en classe pour le mettre en place :

* CSS grid : Pour la structure générale du tableau de bord
* Bootstrap : Système de grille
* AnimeJS
* Bootstrap icons
* ZDog
* Tone.js
* Cartes
* Diagrammes

Un bouton "Login" pour entrer dans la page.

## Étapes

Design
- Font custom
- Définir une couleur principale
- Définir un thème (light ou dark)
- Prévoir les différentes zones considérant les technologies obligatoires

Programmation


-------------------

Informations sur la cible

- Localisation en temps réel sur une carte (Leaflet / Mapbox)
- État de santé : fréquence cardiaque, température corporelle, tension artérielle
- Historique des déplacements (petit graphe de trajectoire)
- Données biométriques (empreinte digitale, reconnaissance faciale, ADN)
- Profil psychologique (calme, stressé, agressif. Ex. : jauge animée)
- Niveau de danger de la cible (Ex. : barre de risque colorée)
- Dernière activité détectée (Ex. : « Cible entre dans un véhicule »)
- Temps estimé avant interception

Système du cyborg

- État du système (CPU, RAM, énergie restante, température interne)
- Diagnostic des capteurs (caméra, radar)
- Mode de vision (vision thermique, infrarouge, sonar)
- État de la batterie nucléaire
- Module d’auto-réparation (barre de progression animée)
- Alertes système (pannes, erreurs critiques)
- Température ambiante et interne du cyborg

Données environnementales

- Carte 3D de l’environnement
- Analyse du terrain (bâtiments, obstacles, zones sécurisées)
- Conditions météorologiques (vent, pluie, visibilité)
- Présence d’autres entités (humains, véhicules, drones)
- Réseaux détectés (Wi-Fi, communication radio)
- Taux de radiation / pollution

Mission

- Objectif actuel
- Progression animée de la mission
- Étapes accomplies / restantes
- Temps restant avant exécution
- Priorité de la mission
- État de la connexion avec le « QG des machines »
- Journal des ordres reçus

Interface de commande

- Boutons interactifs : « Activer vision thermique », « Verrouiller cible », « Activer camouflage »
- Mode manuel / automatique
- Boutons de cockpit
- Carte tactique interactive
- Minuteur ou horloge du futur (traditionel, binaire, hexadécimal)

Effets visuels et audio

- Visualisation audio des sons environnants
- Bips / sons d’analyse avec Tone.js
- Animations de scan (lignes rouges, zoom sur un visage, pulsations)
- Graphiques de fréquences sonores
- Transitions futuristes au survol / clic

Données et visualisations

- Graphique d’activité de la cible (ex. : radar circulaire)
- Diagrammes de performance du cyborg (énergie, précision, efficacité)
- Chronologie d’événements récents
- Indicateur de moral ou stabilité émotionnelle

Détails esthétiques / immersifs

- HUD (Head-Up Display) transparent, façon visière
- Effet de scan qui traverse l’écran
- Bords lumineux / effets néon animés
- Compteur d’erreurs système aléatoires
- Message d’autodestruction (inactif, évidemment 😄)
