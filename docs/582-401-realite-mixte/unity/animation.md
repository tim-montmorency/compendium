Dans Unity, il est possible d'animer des Sprites avec ce qu'on appelle des Sprite Sheets. Les Sprite Sheets sont en fait une image contenant plusieurs petites images qui une fois mises bout à bout créent une animation.    

      

## Importer la Sprite Sheet
- [ ] Dans le dossier Art de la fenêtre Project, créez un dossier nommé Sprite s'il n'existe pas encore.
- [ ] Entrez dans le nouveau dossier, faites un clic-droit, puis choisissez Import New Asset et sélectionnez la Sprite Sheet à importer depuis l'explorateur de fichier. Ou encore cliquez et glissez la Sprite Sheet dans la fenêtre Project.
- [ ] Cliquez sur l'élément que vous venez d'importer, puis assurez-vous dans la fenêtre Inspector que le Texture type de votre image est Sprite(2D and UI).
- [ ] Ensuite, dans le champ Sprite Mode, vous devez sélectionner Multiple puisqu'on a plusieurs petites images.
- [ ] Appuyez sur Apply au bas de la fenêtre Inspector.
- [ ] Maintenant, nous devons dire au logiciel combien il y a de dessins et s'assurer de bien les séparer, pour cela nous appuyons sur le bouton Sprite Editor.
- [ ] Une nouvelle fenêtre s'ouvre alors. En haut à gauche, appuyez sur le menu Slice et dans le paramètre Type, choisissez Grid by Cell Count.
- [ ] Dans le paramètre Column & Row, entrez le nombre de colonnes (c) et de rangées (r) de votre Sprite Sheet.
- [ ] Des carrés rouges devraient maintenant entourer vos dessins. Si tous les dessins sont parfaitement centrés dans un carré, appuyez sur Slice.
- [ ] Si jamais des carrés sont vides sélectionnez les et appuyez sur delete.
- [ ] Lorsque vous avez terminé, appuyez sur Apply en haut à droite et fermez la fenêtre.
- [ ] Dans la fenêtre Project, appuyez sur la flèche à droite de votre Sprite Sheet. Normalement, cela devrait ouvrir de petits icones des dessins de votre feuille.

      

## Animator Controller
Lorsque l'on souhaite créer une animation dans Unity, la création d'une composante Animator Controller est obligatoire. Cette composante permet de gérer les différentes animation d'un objet ou d'un groupe d'objet.     

Voici comment créer un Animator Controller:    
 
- [ ] Rendez-vous dans le dossier Animation dans la fenêtre Project.
- [ ] Ensuite, faites un clic droit dans cette fenêtre, puis choisissez Create, Animator Controller. Vous pouvez aussi aller dans la barre de Menu et faire Assets, Create, Animator Controller.
- [ ] Donner un nom à votre Controller et appuyez sur enter.
   

      

## Animator
Une fois qu'on a créé un Animator Controller, il n'est pas encore en mesure de faire bouger un objet. Pour cela, on doit assigner le Animator Controller à l'objet qu'il animera.   

!!! info "Information"

    Un animator peut animer plus d'un objet. En fait, il peut animer un objet et ses enfants. Ainsi, vous pourriez regrouper plusieurs objets dans un parent et animer tous les enfants grâce à la composante Animator qui est sur le parent.

Voici comment faire:     

- [ ] Sélectionnez l'objet qui sera animé dans la fenêtre Hierarchy ou créez en un nouveau avec un clic droit, puis Create Empty.
- [ ] Dans la fenêtre Inspector, appuyez sur le bouton Add Component.
- [ ] Recherchez la composante Animator à l'aide de la barre de recherche et appuyuez sur celui-ci pour l'ajouter à votre objet.
- [ ] Ensuite, appuyez sur la cible à droite du champ Controller. Vous verrez alors une liste de tous les Animator Controller disponibles. Appuyez sur celui que vous avez créé pour cet objet. Alternative: Glissez votre Animator Controller depuis la fenêtre Project jusqu'au champ Controller de la composante Animator dans la fenêtre Inspector.

!!! info "Information"

    Truc de pro: Pour sauver du temps, vous pouvez aussi simplement cliquer et glisser le Controller Animator de la fenêtre Project à votre objet ouvert dans la fenêtre Inspector. 


      

## Fenêtre animation
Dans Unity, la fenêtre animation nous permettra de visualiser nos animations et de les créer plus facilement. Pour l'ouvrir, allez dans la barre de menu, dans l'onglet Window, Animation, Animation. Une fois la fenêtre ouverte, vous pouvez la positionner à l'emplacement de votre choix en appuyant sur son nom en haut à gauche de la fenêtre et en maintenant votre clic enfoncé.    

!!! info "Information"

    Habituellement, la fenêtre animation est un onglet de la fenêtre Project.

<img src="../images/schema.jpg">   

1. **Barre de contrôle**     
    La barre de contrôle vous permet de vous déplacer dans l'animation, de la faire jouer et d'enregistrer de nouvelles images clés.   
2. **Fenêtre propriétés**     
    Cette fenêtre vous permet de choisir les paramètres que vous voulez contrôler dans votre animation et de leur attribuer des valeurs. Elle vous permet aussi de créer de nouveaux clips d'animation ou encore d'ajouter des Keyframes. Les paramètres animables sont nombreux, ce peut être la position, la couleur, la rotation...   
3. **Ligne du temps**     
    Cette fenêtre est une ligne du temps qui affiche vos keyframes dans le temps. L'unité utilisé est le frame. Par défaut, 60 frames équivalent à 1 seconde dans Unity. Il est possible de changer l'unité avec les trois petits points à la droite de la fenêtre.    


## Création d'animations de Sprite Sheet
Une fois que notre objet est en mesure de controller les animations, il faut en créer! Pour cette étape, je vous recommande d'avoir les fenêtres Project et Animation ouvertes et séparées.    

Voici comment faire:     

- [ ] Premièrement, sélectionnez l'objet que vous souhaitez animer dans la Hierarchy. Ensuite, ouvrez la fenêtre Animation.
- [ ] Appuyez sur le bouton Create dans la fenêtre Animation. Assurez-vous d'être dans le dossier Animation pour sauvegarder votre nouveau Clip. Vous pouvez créer un sous-dossier pour mieux vous retrouver. Nommez votre clip, puis appuyez sur sauvegarder.
- [ ] Ensuite, dans la fenêtre Project, appuyez sur la flèche à droite de votre Sprite Sheet pour l'ouvrir et en voir tous les dessins. Sélectionnez un premier dessin, maintenez ensuite la touche Shift enfoncée, puis appuyez sur le dernier dessin que vous souhaitez prendre. Tous les dessins formant l'animation à créer devraient être sélectionnés.
- [ ] Appuyez sur l'un des dessins et maintenez votre souris enfoncée pendant que vous le glisser vers la fenêtre Animation. Relâchez votre souris au-dessus de la ligne du temps.
- [ ] Vous pouvez appuyer sur le bouton Play de la fenêtre animation pour voir votre animation. Normalement, celle-ci devrait être trop rapide.
- [ ] Pour ajuster la vitesse de notre animation, nous allons modifier le Sample rate. Pour ce faire, appuyez sur les trois petits points à la droite des chiffres de la ligne du temps. Cochez le paramètre Show Sample Rate. À la gauche de la fenêtre Animation, vous devriez voir le paramètre Samples apparaître.
- [ ] Nous devons maintenant modifier le paramètre Samples pour que notre animation joue plus lentement. Pour ce faire, on doit le diminuer. Commencez par entrer la valeur 12 dans le champ et faites rejouer votre animation. Ajustez ensuite le nombre jusqu'à ce que la vitesse vous semble la bonne.
- [ ] Procédez de la même façon pour créer toutes vos animations. Pour créer une nouvelle animation, appuyez sur le nom de votre animation à gauche de la fenêtre Animation, puis sélectionnez Create New Clip. Pour revoir les animations déjà créées, vous avez seulement à cliquer sur leur nom dans cette liste, puis à appuyer sur Play.

## Tutoriel 🎥
 <iframe width="560" height="315" src="https://www.youtube.com/embed/SZLAsk_fQtE?si=nmmAM2Wx5Qp-HZAs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
