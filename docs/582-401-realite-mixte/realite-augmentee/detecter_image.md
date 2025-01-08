# Détecter une image
Maintenant, nous allons créer des objets de détection d'images. Nous utiliserons l'objet Image Target de Vuforia. Celui-ci contient la composante Image Target Behaviour, qui nous permet de détecter des images qu'on importe directement depuis Unity ou à partir d'une base de données.    

- [ ] Dans la fenêtre Hierarchy, faites un clic-droit. Sélectionnez ensuite Vuforia Engine, Image Target.
- [ ] Vous pouvez donner un nom à votre image, puis appuyer sur Enter.
- [ ] Appuyez sur votre objet dans la Hierarchy.
- [ ] Dans la fenêtre Inspector, dans la composante Image Target Behaviour, sélectionnez From Database dans le menu Type.
- [ ] Dans le menu Database, sélectionnez le nom de la base de données que vous avez créée plus tôt.
- [ ] Sélectionnez ensuite le nom de l'image que vous voulez détecter dans l'onglet Image Target.
- [ ] Pour voir l'image que vous venez d'ajouter, deux manipulations seront nécessaires, premièrement, dans la composante Transform, la rotation en X de l'objet doit être de -90. Si vous ne voyez toujours pas l'image, appuyez sur la touche F avec la souris au-dessus de la fenêtre Scene pour focusser sur votre objet.
- [ ] Vous pouvez maintenant appuyer sur Play pour tester. Lorsque la caméra verra votre image, Unity imprimera un message de détection dans la console. Cela signifie que votre détection fonctionne.

!!! info "Information"

    Si votre projet contient peu d'images à détecter, vous pourriez utiliser le type From Image dans la composante Image Target Behaviour et utiliser des images que vous importer dans Unity comme Target.

    
