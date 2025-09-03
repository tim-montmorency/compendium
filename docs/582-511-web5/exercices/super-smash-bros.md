# Super Smash Bros

Pour cet exercice, vous devez compléter un menu du jeu Super Smash Bros déjà entamé.

Aperçu du résultat au URL suivant ou diffusé au tableau en avant pendant
l'examen.\
<https://kid-synthetique.github.io/super-smash/>

## Dossier de départ

[Télécharger le dossier de départ ici](https://cmontmorency365-my.sharepoint.com/:f:/g/personal/mariem_ouellet_cmontmorency_qc_ca/EnuNF6h93ZJNv6CFSUoTSLEBcHV90BFHileoAtTSAd_7vA?e=0Yol4e)


## Couleurs 🎨
| orange       | #f47b2b |
| orange foncé | #da5e0b |

Dans le but de maximiser la démonstration de vos acquis, chaque
fonctionnalité a été isolée en étape numérotée (1, 2, 3, 4, 5...) afin de pouvoir être déclenchée par un bouton lui étant propre.

Ainsi, si vous bloquez 🤔 sur une étape, n'hésitez pas à passer au numéro suivant !

## Requis CSS

- [ ] 1- Faites en sorte que **.wrapper** soit centré horizontalement ↔️ et
    verticalement ↕️ à l\'aide de **flexbox** dans la page.

- [ ] 2- Utilisez **flexbox** afin de positionner les éléments à l\'intérieur de **.game** . Ceux-ci doivent être centrés verticalement ↕️. L\'espace horizontal ↔️ doit-être distribué également entre eux.\
    \
    Ainsi les personnages devraient être positionnés à chaque extrémité
    de la plateforme.

- [ ] 3- Faites en sorte que chaque **div.player** prenne 20% de la largeur
    de son parent et que l\'image du personnage à l\'intérieur de chaque
    **div.player** prenne toute la largeur de son parent **.player**.

- [ ] 4- Les boutons doivent avoir un fond orange (couleur de la palette
    fournie), leur texte doit être blanc, avoir une marge intérieure de
    8px verticalement ↕️ et 16px horizontalement ↔️, avoir une marge
    extérieure verticale de 5px ↕️, ne pas avoir de bordure, avoir des
    coins ronds de 5px.\
    \
    Ils doivent aussi devenir orange foncé au survol.

- [ ] 5- À l\'aide de flexbox contrôlez la position des boutons.

  - [ ] a.  Par défaut, les boutons doivent prendre 80% de la largeur de
        leur parent, être centrés dans celui-ci et **s\'afficher un en
        dessous de l\'autre**.

  - [ ] b.  À partir de 400px, les boutons doivent mesurer 40% de leur
        parent, afficher 2 par ligne et **distribuer l\'espace restant
        également entre eux et les limites du jeu** (les limites du jeu
        étant la droite et la gauche du parent .menu).

  - [ ] c.  À partir de 800px, les boutons doivent mesurer 160px. **Le
        premier et le dernier bouton doivent atteindre les limites du
        jeu horizontalement ↔️** (bref, doivent être collés sur les
        côtés de leur parent .menu), **tandis que l\'espace restant doit
        être distribué également entre eux**.

## Requis JavaScript

**RAPPEL**\
Dans le but de maximiser la démonstration de vos acquis, chaque
fonctionnalité a été isolée en étape numérotée (1, 2, 3, 4, 5, 6) afin
de pouvoir être déclenchée par un bouton lui étant propre.\
Ainsi, si vous bloquez sur une étape, n'hésitez pas à passer au numéro
suivant !\
Vous pourrez y revenir s'il vous reste du temps à la fin !

- [ ] 1. **Créez une** **fonction** permettant de **boucler** sur toutes les
    images contenues dans le **tableau charactersArr** et **insérez**
    chacune de ces images à l\'intérieur de la balise HTML
    **.characters** dans le DOM afin de remplacer les images actuelles
    de Mario.

- [ ] 2. Appelez cette fonction au chargement de la page. Ainsi, tous les
    personnages disponibles devraient s\'afficher sous l\'écran du jeu
    dès que la page est rafraichie.

- [ ] 3. Lorsque les images de Mario sont remplacées, toujours dans la même
    fonction après la boucle, **sélectionnez** dans le DOM toutes les
    images contenues dans le **div.caracters** et stockez les dans une
    variable nommée **characterNodesArr**, vous deviez obtenir un
    **tableau de node HTML**. **Ajoutez** la classe **.active** à
    l'élément dans le tableau **characterNodesArr** qui se trouve à la
    position de **playerIndex**. Vous devriez maintenant voir des
    bordures orange autour de celui-ci (en haut et en bas).

- [ ] 4. Au **clic du bouton \"Perso suivant\"**, augmentez la valeur de la
    variable **playerIndex** de 1.

  - [ ] a.  Utilisez cette variable afin de remplacer l\'image du joueur 1
        (joueur à gauche) par l\'image du personnage dans le tableau
        **charactersArr** dont la position correspond à **playerIndex**.

  - [ ] b.  **Si la variable playerIndex atteint une valeur plus grande que
        le dernier index dans charactersArr**, attribuez-lui la valeur 0
        afin de retourner au début du tableau et ainsi afficher l\'image
        du premier personnage (Cloud) plutôt qu\'une image brisée.

  - [ ] c.  **Sélectionnez** dans le DOM toutes les images contenues dans le
        **div.caracters** et stockez les dans une **variable**, vous
        deviez obtenir un **tableau de nodes HTML**. Nommez cette
        variable comme vous le souhaitez, comme c'est un tableau, pensez
        à ajouter Arr à la fin du nom de la variable (Arr pour array).

  - [ ] d.  Faites une **boucle** (for, forEach ou autre type) sur le
        **tableau contenu dans la variable de la consigne 4.c** et
        supprimez la classe **.active** de chacune des images.

  - [ ] e.  Suite à votre boucle de l'étape 4.d (en dehors de celle-ci),
        toujours en utilisant la variable contenant le tableau de node
        HTML de l\'étape 4.c, ajoutez la classe **.active** à l\'image
        qui se positionne à la même position que le chiffre
        **playerIndex**. Suite aux étapes 4.c, 4.d, 4.e, vous devriez
        maintenant voir quel personnage de gauche est sélectionnée dans
        le menu, il sera encadré par des bordures oranges.

- [ ] 5.  Au **clic du bouton \"Adversaire aléatoire\"**, pigez une image de
    personnage aléatoire dans le tableau **charactersArr**. (bref, un
    **nombre entier** entre **0 et le dernier index du tableau
    charactersArr**).

  - [ ] a.  Toujours dans **clic du bouton \"Adversaire aléatoire\"**,
        remplacez l\'image du joueur 2 (joueur de droite) par l'image du
        tableau **charactersArr** pigée à l'instruction 10.

  - [ ] b.  Toujours dans **clic du bouton \"Adversaire aléatoire\"**,
        **sélectionnez** dans le DOM toutes les images contenues dans le
        **div.caracters** et stockez les dans une variable nommée
        **characterNodesArr**, vous deviez obtenir un **tableau**.

  - [ ] c.  Faites une **boucle** (for, forEach ou autre type) sur le
        **tableau contenu dans characterNodesArr** et supprimez la
        classe **.activeOpponent** de chacune des images.

  - [ ] d.  Suite à votre boucle de l'étape 5.c (en dehors de celle-ci),
        toujours en utilisant la variable **characterNodesArr**, ajoutez
        la classe **.activeOpponent** à l\'image qui se positionne à la
        même position que votre nombre aléatoire généré à l'étape 10.
        Vous devriez maintenant voir quel personnage de droite est
        sélectionnée dans le menu, il sera encadré par des bordures
        rouges.

- [ ] 6. Au **clic du bouton \"Enlever un perso\",** retirez la **dernière
    image** du tableau **charactersArr**.

  - [ ] a.  **Si l\'image du joueur 1 (joueur de gauche) (playerIndex)**
        correspond à l\'image retirée, changez la valeur de la
        **variable playerIndex** afin qu\'elle corresponde à l\'index de
        la dernière image restante dans **charactersArr** et mettez
        l\'image du joueur 1 à jour.

  - [ ] b.  Ensuite **appelez ensuite la fonction de l\'étape 1** afin de
        remplacer toutes les images à l\'intérieur de la balise HTML
        **.characters** par celles des personnages restants.

- [ ] 7.  Rien à faire avec le bouton **Décompte**, cette partie a été retirée.
