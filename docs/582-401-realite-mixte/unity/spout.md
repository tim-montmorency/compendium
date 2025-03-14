# Spout
Spout vous permettra d'envoyer le flux vidéo de caméras dans Unity aux logiciels de votre choix. Voici comment configurer le tout. 

## Trouver le paquet
- [ ] Dans la barre de menu, sélectionnez **Edit -> Project settings**.
- [ ] Ensuite, dans la fenêtre, trouvez l'onglet **Package Manager**.
- [ ] Dans **Scoped registries** appuyez sur le **+** en bas.
- [ ] Entrez les informations suivantes:

 name: Keijiro
 URL: https://registry.npmjs.com 
 Scope: jp.keijiro

-[ ] Appuyez ensuite sur Save. 

## Installer le paquet
- [ ] Dans la barre de menu, sélectionnez **Window -> Package Manager**.
- [ ] Dans le haut de la fenêtre, cliquez sur **Packages:...**, sélectionnez ensuite **My registries**.
- [ ] Dans la liste des paquets, vous devriez maintenant voir **KlakSpout**, installez ce paquet avec le bouton **Import**.


## Créez une texture qui sera envoyée à un autre logiciel
- [ ] Dans la fenêtre project, faites un clic-droit, sélectionnez ensuite **Create -> Render texture**.
- [ ] Nommez votre RenderTexture.
- [ ] Lorsque vous cliquez sur la Render texture, vous avez ses paramètres dans l'inspecteur. Assurez-vous de lui donner la bonne taille (Size), exemple: 1920 x 1080.

## Choisir l'image qui sera diffusée
- [ ] Choisissez la caméra dont l'image sera envoyée à la texture ou encore créez une nouvelle caméra en faisant un **clic-droit-> camera** dans votre hiérarchie.
- [ ] Sur la caméra, dans l'inspecteur cliquez sur **Add component**, ajoutez ensuite le script nommé **Spout Sender**.
- [ ] Dans la section Spout Name, vous devez inscrire le nom que vous souhaitez donner à votre flux vidéo. Exemple: Unity
- [ ] Dans la capture Method, sélectionnez **Texture**.
- [ ] Sur votre caméra vous avez un paramètre nommé **Target Texture**, assurez-vous d'y glisser la Render Texture créée un peu plus tôt.
- [ ] Ensuite, glissez cette même Render Texture sur le paramètre**Source Texture** du script Spout Sender.
- [ ] Maintenant quand vous cliquerez sur Play un flux vidéo sera envoyé via Spout, vous pourrez le récupérer dans un autre logiciel. 

 
!!! warning "Attention"

    La caméra servira seulement pour l'envoi du flux, si vous voulez aussi une caméra dans votre jeu, vous devez en ajouter une deuxième. Dès que vous ajoutez une caméra vous devez supprimer son AudioListener puisqu'il peut y en avoir seulement 1 par scène.










!!! quote "Inspiration"

    Inspiré des notes de Thomas O. Fredericks.  
