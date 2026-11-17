# **Exercice** Super Smash Bros

Pour cet exercice, vous devez compléter un menu du jeu Super Smash Bros déjà entamé.

Aperçu du résultat au URL suivant ou diffusé au tableau en avant pendant
l'examen.
<https://kid-synthetique.github.io/super-smash-bros/>

## Dossier de départ

[Télécharger le dossier de départ ici](https://cmontmorency365-my.sharepoint.com/:f:/g/personal/mariem_ouellet_cmontmorency_qc_ca/EnuNF6h93ZJNv6CFSUoTSLEBcHV90BFHileoAtTSAd_7vA?e=0Yol4e)


## Couleurs 🎨

| Couleurs     | Code Hex  |
| ------------ | --------- |
| orange       | #f47b2b |
| orange foncé | #da5e0b |

Dans le but de maximiser l'exercice de vos acquis, chaque fonctionnalité a été isolée en étape numérotée (1, 2, 3, 4, 5...) afin de pouvoir être déclenchée par un bouton lui étant propre.

Ainsi, si vous bloquez 🤔 sur une étape, n'hésitez pas à passer au numéro suivant !

## Requis CSS

- [ ] 1. Faites en sorte que **.wrapper** soit centré horizontalement ↔️ et
    verticalement ↕️ à l'aide de **flexbox** dans la page.
.
- [ ] 2. Utilisez **flexbox** afin de positionner les trois éléments à l'intérieur de **.game**. Ceux-ci doivent être centrés verticalement ↕️. L'espace horizontal ↔️ doit-être distribué également entre eux.
    Ainsi les personnages devraient être positionnés à chaque extrémité de la plateforme.

!!! tip "Petit truc pour l'étape #2"

    Ajoutez temporairement une bordure ou une couleur d'arrière-plan autour des éléments `.player`et `.msg` afin de les visualiser à l'écran. 

    N'hésitez pas aussi à utiliser l'inspecteur de votre navigateur pour les situer.

- [ ] 3. Faites en sorte que chaque **div.player** prenne 20% de la largeur
    de son parent et que l'image du personnage à l'intérieur de chaque
    **div.player** prenne toute la largeur de son parent **.player**.
.
- [ ] 4. Les boutons doivent avoir un fond orange (couleur de la palette
    fournie), leur texte doit être blanc, avoir une marge intérieure de
    8px verticalement ↕️ et 16px horizontalement ↔️, avoir une marge
    extérieure verticale de 5px ↕️, ne pas avoir de bordure, avoir des
    coins ronds de 5px.
    Ils doivent aussi devenir orange foncé au survol.
.
- [ ] 5. À l'aide de flexbox contrôlez la position des boutons.

  - [ ] a.  Par défaut, les boutons doivent prendre 80% de la largeur de
        leur parent, être centrés dans celui-ci et **s'afficher un en
        dessous de l'autre**.
.
  - [ ] b.  À partir de 400px, les boutons doivent mesurer 40% de leur
        parent, afficher 2 par ligne et **distribuer l'espace restant
        également entre eux et les limites du jeu** (les limites du jeu
        étant la droite et la gauche du parent .menu).
.
  - [ ] c.  À partir de 800px, les boutons doivent mesurer 160px. **Le
        premier et le dernier bouton doivent atteindre les limites du
        jeu horizontalement ↔️** (bref, doivent être collés sur les
        côtés de leur parent .menu), **tandis que l'espace restant doit
        être distribué également entre eux**.

## Requis JavaScript


### Contexte et attentes

- **Tableaux/variables fournis** :
  - `charactersArr` : tableau des images/personnages.
  - `playerIndex` : index du personnage sélectionné pour le **Joueur 1** (à gauche de la plateforme).
  - `opponentIndex` : index du personnage sélectionné pour le **Joueur 2** qui représente l'adversaire (à droite de la plateforme).
- **Structure DOM attendue** :
  - `.characters` pour afficher toutes les vignettes.
  - `.game` contenant deux `.player` (gauche = Joueur 1, droite = Joueur 2 (adversaire)).
  - Boutons de contrôle : « Perso suivant », « Adversaire aléatoire », « Enlever un perso ». (Le bouton **Décompte** est présent mais non fonctionnel pour l'exercice.)
- **Classes CSS** :
  - `.active` (Joueur 1 sélectionné, bordures orange).
  - `.activeOpponent` (Joueur 2 (adversaire) sélectionné, bordures rouges).

---
### Étape 1 — Initialiser la galerie

- [ ] a. Récupérer la liste des éléments `<img>` et stockez la dans une variable nommée `characterNodesArr`.

- [ ] b. Créer une fonction nommée `renderCharacters()` permettant d'afficher toutes les images `.png` stockée dans le tableau `charactersArr`. Vous devez afficher ces images dans l'élément `.characters`, et donc remplacer les images de Mario. Vous pouvez utiliser le tableau de la variable `characterNodesArr` que vous avez créé à l'étape **1a**.

!!! tip "Rappel pour l'étape #1b"

    Vous aurez besoin de :
    - Créer une fonction (tu peux appeler cette fonction pour tester ce que tu fais).
    - Faire une boucle `forEach` sur le tableau `characterNodesArr`.
    - Manipuler le contenu des éléments sur DOM, soit en changeant la `src` de l'image actuelle de Mario.

- [ ] c. Appliquer la classe `.active` sur l'élément à l'index `playerIndex` qui vaut actuellement `0`. Si tout fonctionne bien, tu devrais voir un encadré orange autour du premier personnage de la liste.

- [ ] d. Appliquer la classe `.activeOpponent` sur l'élément à l'index `opponentIndex` qui vaut actuellement `1`. Si tout fonctionne bien, tu devrais voir un encadré rouge en haut du deuxième personnage de la liste.

- [ ] e. Appeler la fonction `renderCharacters()` au chargement de la page.


### Étape 2 — « Perso suivant » (Joueur 1)

- [ ] Au clic, incrémenter `playerIndex` (avec bouclage si > dernier index).
- [ ] Mettre à jour l’image du **Joueur 1** dans `.game`.
- [ ] Retirer puis réappliquer `.active` dans `.characters` au nouvel index.

### Étape 3 — « Adversaire aléatoire » (Joueur 2)

- [ ] Générer un index aléatoire valide `opponentIndex`.
- [ ] Mettre à jour l’image du **Joueur 2** dans `.game`.
- [ ] Nettoyer puis appliquer `.activeOpponent` sur la vignette correspondante dans `.characters`. Si tout fonctionne bien, tu devrais voir une bordure rouge au haut de l'image de l'opposant.

### Étape 4 — « Enlever un perso »

- [ ] Retirer le dernier élément du tableau `charactersArr` (voir les notes de cours sur les tableaux).
- [ ] Retirer du DOM la dernière image du `div.caracters`.
- [ ] Si `playerIndex` n’est plus valide, le ramener à `charactersArr.length - 1` (ou `0` si tableau vide).
- [ ] Mettre à jour l’image du **Joueur 1**.
- [ ] Relancer `renderCharacters()` pour rafraîchir la galerie et réappliquer `.active`.

---

### Résumé (checklist de validation)
- [ ] `renderCharacters()` génère correctement la galerie et applique `.active` sur `playerIndex`.
- [ ] La galerie s’affiche au chargement.
- [ ] « Perso suivant » met à jour `playerIndex`, l’image du Joueur 1 et `.active`.
- [ ] « Adversaire aléatoire » met à jour l’image du Joueur 2 et `.activeOpponent`.
- [ ] « Enlever un perso » met à jour le tableau, le Joueur 1 et la galerie (`renderCharacters()`).
- [ ] Aucune erreur si `charactersArr` devient vide.