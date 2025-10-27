# Cours 10 | Anime.js 3/3

[STOP]

Animation SVG (paths, morphing)
Draggable
  ScrollTrigger
  Parallaxe
Text animation
Animation responsive
Autonomie avec la documentation
TP - Scifi Dashboard







-----
----
---

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

Localisation en temps réel sur une carte (Leaflet / Mapbox)

État de santé : fréquence cardiaque, température corporelle, tension artérielle

Historique des déplacements (petit graphe de trajectoire)

Données biométriques (empreinte digitale, reconnaissance faciale, ADN)

Profil psychologique estimé (calme, stressé, agressif — jauge animée)

Niveau de danger de la cible (barre de risque colorée)

Dernière activité détectée (ex. : “Cible entre dans un véhicule”)

Temps estimé avant interception

---

Système du cyborg

État du système (CPU, RAM, énergie restante, température interne)

Diagnostic des capteurs (caméra, radar, infrarouge, sonar)

Mode de vision (vision thermique, infrarouge, “scan humain”)

État de la batterie / énergie nucléaire

Système d’arme (munitions, statut “prêt / en recharge”)

Module d’auto-réparation (barre de progression animée)

Alertes système (pannes, erreurs critiques)

Température ambiante et interne du cyborg

--

Données environnementales

Carte 3D de l’environnement (ZDog ou Three.js simplifié)

Analyse du terrain (bâtiments, obstacles, zones sécurisées)

Conditions météorologiques (vent, pluie, visibilité)

Présence d’autres entités (humains, véhicules, drones)

Réseaux détectés (Wi-Fi, communication radio)

Taux de radiation / pollution

--

Mission

Objectif actuel

Progression de la mission (barre animée avec AnimeJS)

Étapes accomplies / restantes

Temps restant avant exécution

Priorité de la mission

État de la connexion avec le “QG des machines”

Journal des ordres reçus

--

Interface de commande

Boutons interactifs : “Activer vision thermique”, “Verrouiller cible”, “Activer camouflage”

Mode manuel / automatique

Barre de navigation façon cockpit

Mini-caméra / vidéo de la cible

Carte tactique interactive

Minuteur ou horloge du futur (format binaire ou hexadécimal)

--

Effets visuels et audio (idéal pour AnimeJS, Tone.js)

Visualisation audio des sons environnants

Bips / sons d’analyse avec Tone.js

Animations de scan (lignes rouges, zoom sur un visage, pulsations)

Graphiques de fréquences sonores

Transitions futuristes au survol / clic

--

Données et visualisations

Graphique d’activité de la cible (ex. : radar circulaire)

Diagrammes de performance du cyborg (énergie, précision, efficacité)

Chronologie d’événements récents

Indicateur de moral ou “stabilité émotionnelle” (humour 😄)

--

Détails esthétiques / immersifs

HUD (Head-Up Display) transparent, façon visière

Effet de scan qui traverse l’écran

Bords lumineux / effets néon animés

Typo à la “machine” (monospace, rouge/vert)

Compteur d’erreurs système aléatoires

Message d’autodestruction (inactif, évidemment)
