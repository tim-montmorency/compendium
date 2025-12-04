# Examen 2 | Partie 1

L'objectif est de reproduire le sonar du résultat attendu avec animejs.

Cette partie vaut pour 50% de l'examen.

## Résultat attendu

![type:video](./part1-preview.webm){.h-auto}

## Consignes

Vous devrez animer le balai, l'onde, les 3 points ainsi que la petite lumière à côté du logo.

### Départ

- [ ] Télécharger le [dossier de départ](./web3Ex2Partie1.zip){ download }
- [ ] Initialiser et installer AnimeJS avec `npm`

### HTML

Dans le fichier `index.html`.

- [ ] Connecter le fichier `exam.css`
- [ ] Importer la librairie AnimeJS depuis `node_modules` par la méthode "importmap"
- [ ] Connecter le fichier `exam.js` en conséquence

### CSS

Dans le fichier `exam.css`, ajuster le CSS pour permettre l'animation : 

!!! info "Les commentaires CSS représentent exactement les lignes manquantes à combler"

- [ ] de la barre de balayage (ligne verte)
- [ ] de l'onde (le cercle vert)
- [ ] des 3 petits ronds

### JavaScript

Dans le fichier `exam.js`.

- [ ] Importer la librairie AnimeJS configurée dans `index.html`
- [ ] Animer la barre de balayage (ligne verte)
  - Durée de 5 secondes
  - Lissage linéaire
- [ ] Animer l'onde (le cercle vert)
  - Durée de 3 secondes
- [ ] Animer les 3 petits ronds :
  - Le positionnement doit être basé sur l'unité `cqw` et `cqh`
  - Appliquer une position initiale aléatoire
  - Lissage irrégulier
  - Animer la position (aléatoire), l'opacité et le délai (aléatoire)
  - À chaque boucle, définir de nouvelles valeurs pour l'animation
- [ ] Animer la petite lumière à droite du logo

## Remise

- [ ] Supprimer le dossier node_modules
- [ ] Renommer le dossier `web3Ex2Partie1` par `nomfamille-prenom-partie1`
- [ ] Compresser en `.zip` avec le nom : `nomfamille-prenom-partie1.zip`
- [ ] Déposer sur le devoir Teams

## Évaluation

| Critère                              | Points |
|--------------------------------------|--------|
| **HTML**                             |        |
| Import et connexion des fichiers     | 1      |
| Initialisation et usage npm          | 1      |
| **CSS**                              |        |
| Barre de balayage                    | 1      |
| Onde                                 | 1      |
| Ronds                                | 1      |
| **JavaScript**                       |        |
| Import                               | 1      |
| Animation du balai                   | 4      |
| Animation de l'onde                  | 5      |
| Animation des ronds + callback       | 10     |
| Animation de la petite lumière       | 2      |
| **Général**                          |        |
| Identique au résultat attendu        | 1      |
| Code bien indenté                    | 1      |
| Respect des consignes                | 1      |

[STOP]

!!! example "Il est possible de demander à être débloqué contre 5% de pénalité"