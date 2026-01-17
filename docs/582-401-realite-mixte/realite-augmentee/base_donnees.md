# Création d'une base de données d'images pour la détection
Pour détecter des images dans Unity avec Vuforia, vous devrez vous créer une base de données contenant les images à détecter.      

Avant de commencer, assurez-vous d'être connecté à votre compte Vuforia sur le portail de développement. Vous pouvez y accéder via le site suivant: 

[📁 Vuforia Engine Developer Portal]( https://developer.vuforia.com/vui/auth/login){ .md-button }    

- [ ] Une fois connecté, assurez-vous d'être dans l'onglet My Account, puis allez dans l'onglet Target Manager du menu vert.
- [ ] Maintenant, cliquez sur Generate Database pour créer une base de données.
- [ ] Donnez un nom à votre base de données et sélectionnez Device puisque l'on souhaite que la base de données se sauvegarde dans l'appareil mobile sur lequel l'expérience fonctionne. De cette façon, le wifi ne sera pas nécessaire pour faire fonctionner votre jeu.
- [ ] Appuyez sur Generate.
- [ ] Vous pouvez maintenant cliquer sur le nom de votre base de données pour l'ouvrir.
- [ ] Pour ajouter une image, appuyez sur Add Target.
- [ ] Appuyez sur Choisir un fichier dans la catégorie Target Image File pour télécharger l'image que vous souhaitez détecter. Idéalement, nous utiliserons des .jpg carrés pour que notre jeu soit le plus léger possible.
- [ ] Ensuite, donnez la largeur de votre image en mètres. Je vous recommande d'avoir la même largeur pour toutes vos images. Par exemple, utilisez 1 partout.
- [ ] Dans la catégorie Name, vous pouvez garder le nom de votre image ou le modifier au besoin.
- [ ] Appuyez sur Add.
- [ ] Procédez de la même façon pour ajouter toutes vos images. Vous pourrez revenir en ajouter plus tard au besoin.
- [ ] Rafraichissez la page et observez le Rating de vos images. Il s'exprime en terme d'étoiles. Plus votre image a d'étoiles, plus elle sera facile à détecter. Si votre image n'a pas d'étoiles ou seulement une, vous devriez penser à lui apporter des modifications.

          
## Télécharger la base de données
Une fois que toutes vos images ont été ajoutées à votre base de données, vous pouvez la télécharger pour l'apporter dans Unity.    

- [ ] Pour ce faire, appuyez sur le bouton Download Database (All).
- [ ] Choisissez ensuite Unity Editor, puis appuyez sur Download.

