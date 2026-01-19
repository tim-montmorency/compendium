

Une des étapes primordiales de la Réalité augmentée est la détection d'image à l'aide d'une caméra. C'est à partir de l'image détectée dans le monde réel qu'on saura quel contenu doit être affiché. De plus, l'image nous servira à savoir à quel emplacement les objets doivent apparaître.   


       

## Créer des bonnes images pour la détection
Quatre paramètres sont à considérer pour créer une bonne image pour la détection:    

- [ ] La richesse des détails
- [ ] Le contraste
- [ ] Les motifs non répétitifs
- [ ] Le format

Premièrement, les détails sont importants. Une image trop simple est difficile à distinguer d'une autre. De plus, la détection fonctionne sur les bouts pointus. Ainsi, si les images sont trop rondes elles sont difficiles à détecter.

Dans cet exemple, on voit que pour un carré, Vuforia détectera 4 coins alors qu'il ne détectera rien sur le rond.    

<img src="../images/exemple.jpg" width="150" height="200">


Le contraste est important, surtout celui entre les bordures de votre dessin et le fond. Plus le contraste sera élevé, meilleure la détection sera   

Les motifs jouent un grand rôle dans la détection. Idéalement, ils doivent être bien répartis dans l'espace et ils ne doivent pas être répétitifs.   

Finalement, le format a une importance. Nos images ne doivent pas être trop petites pour éviter qu'elles soient floues, mais elles ne doivent pas être trop grosses pour que notre jeu reste léger.   


[📋 Exemples Vuforia](https://developer.vuforia.com/library/vuforia-engine/images-and-objects/image-targets/best-practices/best-practices-designing-and-developing-image-based-targets/){ .md-button }  

     

