---
tags: 
  - Exercice
  - Formatif
---

[^cp]: Cet exercice est inspiré de cette [image](./source.jpeg)

# Cyberpunk 2077

L'objectif de cet exercice[^cp] est de mettre en pratique les connaissances Figma vues jusqu'à présent : 

- Vectoriel
- Masque
- Contraintes
- Répétition linéaire (en mode dessin)
- Mise en page dynamique (grille)
- Typographie
- Sens de l'esthétisme et attention portée aux détails

## Résultat attendu

![](./preview.png){ data-zoom-image }

## Données 

> Police de caractères : **Rajdhani**
> 
> Jaune Cyberpunk : `#FCED0A`
>
> Logo Cyberpunk 2077 [:material-download:](./Cyberpunk_2077_logo.svg)
>
> Image de fond (svg) [:material-download:](./bg-blank.svg)
> 
> Personnages: 
> 
> * Adam Smasher [:material-download:](./Adam-Smasher.png)<br>21 juin
> * Dexter DeShawn [:material-download:](./Dexter-DeShawn.png)<br>20 septembre
> * Jackie Wallace [:material-download:](./Jackie-Wallace.png)<br>26 mai
> * Johnny Silverhand [:material-download:](./Johnny-Silverhand.png)<br>16 novembre
> * Panam Palmer [:material-download:](./Panam-Palmer.png)<br>23 août
> * Song So Mi [:material-download:](./Song-So-Mi.png)<br>29 décembre

## Consignes

### Étape 1

- [ ] Créer un *Frame* de `500x280`
- [ ] Ajouter une variable pour la couleur « Jaune Cyberpunk » (elle vous sera souvent utile)
- [ ] Créer le cadre vectoriel suivant : <br> ![](./frame-step1.png){ data-zoom-image .w-25 }
- [ ] Ajouter une barre verticale à droite sans perturber le coin coupé inférieur.
- [ ] Ajouter la décoration supérieure gauche avec une simple forme dupliquée par une **répétition linéaire** : <br> ![](./frame-step2.png){ data-zoom-image .w-25 }
- [ ] Ajouter les textes et l'aligner à `droite` et en `bas`. Appliquer la rotation pour le lier à la verticale comme dans l'image : <br> ![](./frame-step3.png){ data-zoom-image .w-25 }
- [ ] Ajouter une image de sorte à ce qu'elle soit masquée par la bande jaune verticale de droite : <br> ![](./frame-step4.png){ data-zoom-image .w-25 }

### Étape 2

- [ ] Dupliquer le *Frame* créé à l'étape 1 pour chaque personnage.
- [ ] Modifier le contenu de chacun. Vous devriez arriver à un résultat similaire : <br> ![](./characters-figma.png){ data-zoom-image .w-50 }

### Étape 3

- [ ] Créer un autre *Frame* de `1920x1080`
- [ ] Ajoutez-y l'image de fond et corriger ses couleurs pour refléter le résultat attendu.
- [ ] Ajouter le **Logo Cyberpunk 2077**.
- [ ] Dans le *Frame*, ajouter un autre *Frame* et configurez-le en mise en page dynamique de type grille `3 x 2`.
- [ ] Dans la grille, copier-coller un à la fois chacun des *Frames* de personnage.
- [ ] Ajouter le texte « Anniversaires 🎉 » sous la grille.
