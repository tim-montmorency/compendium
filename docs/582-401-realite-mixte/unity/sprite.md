

Dans Unity, les sprites sont des éléments 2D qui se présentent sous forme d’images. On peut les animer ou les laisser statiques. On doit suivre quelques règles précises pour la création des Sprites.    


   

## Logiciels
Le logiciel que vous utilisez pour la création des Sprites est à votre choix. Je recommande l’utilisation de Photoshop ou Illustrator comme vous les connaissez bien. 
Ces tutoriels peuvent vous aider à débuter :     

[📁 Dessiner un sprite](https://www.youtube.com/watch?v=rLdA4Amea7Y&t=188s){ .md-button }    
    
[📁 Créer un environnement](https://www.youtube.com/watch?v=aaEEujLtsr8&t=0s ){ .md-button }  



   

## Format et résolution
Lorsque vous créez des sprites, deux choses sont à prendre en compte. La taille de votre sprite et son format d’exportation. Au niveau du format, je recommande d’exporter votre image en .jpg si elle ne contient pas de transparence. Si elle en contient, vous devriez utiliser le format .png.    
    
Au niveau de la résolution, produire des images carrées est essentiel dans Unity. En effet, cela permettra à vos projets d’être optimisés et donc d’avoir des build plus légers. En plus de respecter le format carré, vous devriez toujours prendre des valeurs POT (power of two). Cette règle permet à l’ordinateur de rendre l’image plus rapidement. Voici des exemples de valeurs POT :   

     
-	16 x 16    
-	32 x 32
-	64 x 64     
-	128 x 128     
-	256 x 256     
-	512 x 512     
-	1024 x 1024     
-	2048 x 2048     
-	4096 x 4096

      
Habituellement, pour un sprite, on devrait prendre une valeur entre 64 et 512 selon la taille qu’il aura sur notre écran.    

   

## Sprite Sheet
Lorsque l’on souhaite créer l’animation d’un sprite, c’est un sprite sheet que nous devrons utiliser. Il s’agit d’une image plus grosse qui contient tous les sprites dont nous aurons besoin pour faire l’animation de l’élément. Idéalement, ces images sont placées dans une grille.    

### Photoshop
Voici un tutoriel qui peut vous aider :    
[📁 Tutoriel écrit](https://amphibistudio.sg/sprite-sheets/ ){ .md-button }    


Pour créer votre Sprite Sheet, vous pourriez créer toutes les images de votre animation dans le même projet Photoshop à l'aide du menu animation. Voici un tutoriel qui vous rappellera comment faire:   
[📁 Tutoriel vidéo](https://cmontmorency365-my.sharepoint.com/:v:/g/personal/lora_boisvert_cmontmorency_qc_ca/Eb-57UwRP_RJn36pQkO1eZsBTFMuocHt5VNGgZ8L1ind3w?e=hvM6Uj){ .md-button }    


Une fois vos images créées, plutôt que d'exporter le tout en gif, vous pourriez copier chaque frame dans le même projet Photoshop pour créer une grille contenant toutes vos animations. Si vous avez 16 images ou moins et que leur taille est de 128 x 128, vous pouvez utiliser le modèle suivant:   

[📁 Modèle Photoshop](https://cmontmorency365-my.sharepoint.com/:i:/g/personal/lora_boisvert_cmontmorency_qc_ca/EWDNEYJez2BFgiIzLZXo3MsBqnHle1knqJ9c5xrXLo5vgg?e=lDnowT){ .md-button }     

### After effects
Vous pouvez créer une animation dans after effects et ensuite l'exporter vers une sprite sheet: 
<iframe width="560" height="315" src="https://www.youtube.com/embed/MLlw0IOpC4o?si=IQ5HDrM2YZkkRv6E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Procreate
Si vous préférez utiliser Procreate, ce tutoriel vous aidera. Cependant, une fois vos dessins créés, n'oubliez pas de les mettre dans une grille pour les exporter.   
[📁 Exemple avec Procreate](https://www.youtube.com/watch?v=vwgacGe-ei0&ab_channel=IttaiManero){ .md-button }   <br>


  
