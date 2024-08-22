## Résolution
Lorsque vous créez des vidéos pour Unity, vous devrez faire attention à la résolution.

Au niveau de la résolution, produire des images carrées est essentiel dans Unity. En effet, cela permettra à vos projets d’être optimisés et donc d’avoir des build plus légers. En plus de respecter le format carré, vous devriez toujours prendre des valeurs POT (power of two). Cette règle permet à l’ordinateur de rendre l’image plus rapidement. Voici des exemples de valeurs POT :

- 16 x 16
- 32 x 32
- 64 x 64
- 128 x 128
- 256 x 256
- 512 x 512
- 1024 x 1024
- 2048 x 2048
- 4096 x 4096

Si vous désirez faire une vidéo rectangulaire, prenez deux valeurs de la liste. Par exemple 1024 x 2048. 


## Créer des vidéos avec After Effects
Si vous avez oublié comment créer des animatons avec After Effects, voici quelques vidéos pour vous aider: 

[📁 Capsules vidéos](https://cmontmorency365-my.sharepoint.com/:f:/g/personal/lora_boisvert_cmontmorency_qc_ca/Erk_c-zhioRHvUq5W2lHFTwBGmQB3be35rla3wlET-5rYw?e=msibxX){ .md-button }   


## Importer la vidéo dans Unity
- [ ] Dans le dossier Art de la fenêtre Project, créez un dossier nommé Video s'il n'existe pas encore.
- [ ] Entrez dans le nouveau dossier, faites un clic-droit, puis choisissez Import New Asset et sélectionnez la vidéo à importer depuis l'explorateur de fichier. Ou encore cliquez et glissez la dans la fenêtre Project.

## Créer un GameObject pour faire jouer la vidéo
- [ ] Dans le cas d'un projet 2D, faire un clic droit dans la fenêtre Hierarchy, ensuite sélectionner 2D Objects -> Sprites -> Square.
- [ ] Dans la fenêtre inspecteur, cliquez sur Add component. Recherchez et ajouer un Video Player.
- [ ] Depuis la fenêtre Project cliquez et glissez votre video dans la boîte Video Clip du Video Player que vous venez de créer.
- [ ] Ajuster les paramètres du Video Player au besoin: Vous pouvez cocher loop pour que votre vidéo joue en boucle. Play on awake doit être coché pour vous assurer que votre vidéo jouera dès le début. Finalement vous pouvez modifier Playback speed pour modifier la vitesse de votre vidéo.
