# Examen 2 | Partie 2

L'objectif est de reproduire la séquence des événements du résultat attendu avec animejs, tonejs et maplibre.

Cette partie vaut pour 50% de l'examen.

## Résultat attendu

Activez le son 🔈

![type:video](./part2-preview.webm){.h-auto}

## Consignes

Au clic du bouton "init", vous devrez animer les contours du SVG, puis, une fois l'animation terminée, jouer la piste sonore, cacher le bouton et faire apparaître la carte de Détroit.

### Départ

- [ ] Télécharger le [dossier de départ](./web3Ex2Partie2.zip){ download }
- [ ] Initialiser et installer AnimeJS avec `npm`

### HTML

Dans le fichier `index.html`.

- [ ] Connecter le fichier `exam.css`
- [ ] Importer la librairie AnimeJS depuis `node_modules`, la librairie MapLibre depuis un cdn et la librairie ToneJS depuis un cdn, tout cela par la méthode "importmap"
- [ ] Connecter le fichier `exam.js` en conséquence
- [ ] Définir l'épaisseur des traits du SVG à **3**

### CSS

Dans le fichier `exam.css`. 

!!! info "Les commentaires CSS représentent exactement les lignes manquantes à combler"

- [ ] Ajuster le CSS pour permettre l'affichage de la carte en pleine page, à l'arrière du `container`

### JavaScript

Dans le fichier `exam.js`.

- [ ] Importer les librairies configurées dans `index.html`
- [ ] Configurer la carte
  - Style dark de openfreemap
  - Longitude = `-83.05`
  - Latitude = `42.3289`
  - Aucune interactivité, ni crédits

- [ ] Configurer les animations de sorte qu'elles ne s'activent pas au chargement de la page

- [ ] Au clic du bouton "init", animer les contours du SVG en décalé
  - Durée de 6 secondes

Lorsque l'animation est terminée

- [ ] Déclencher la lecture de la piste sonore `robocop_theme_song.mp3`
- [ ] Faire disparaître progressivement `.action`
- [ ] Faire apparaître progressivement la carte
- [ ] Animer progressivement la variable CSS qui gère la couleur de fond du logo

## Remise

- [ ] Supprimer le dossier node_modules
- [ ] Renommer le dossier `web3Ex2Partie2` par `nomfamille-prenom-partie2`
- [ ] Compresser en `.zip` avec le nom : `nomfamille-prenom-partie2.zip`
- [ ] Déposer sur le devoir Teams

## Évaluation

| Critère                              | Points |
|--------------------------------------|--------|
| **HTML**                             |        |
| Import et connexion des fichiers     | 1      |
| Initialisation et usage npm          | 1      |
| Préparation du SVG                   | 1      |
| **CSS**                              |        |
| Carte                                | 1      |
| **JavaScript**                       |        |
| Import                               | 2      |
| Configuration de la carte            | 5      |
| Initialisation de l'audio            | 1      |
| Lecture d'animation non automatique  | 2      |
| Événement du bouton init             | 1      |
| Animation du SVG + callback          | 8      |
| Animation `.action`                  | 2      |
| Animation de la carte                | 2      |
| **Remise**                           |        |
| Identique au résultat attendu        | 1      |
| Code bien indenté                    | 1      |
| Respect des consignes                | 1      |

[STOP]
