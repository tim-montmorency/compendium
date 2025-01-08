# Structure d'un script
Un script est aussi appelé une classe dans Unity. C'est un ensemble de fonctions qui seront exécutées.Voici la structure type d'une classe:    

``` csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class script2 : MonoBehaviour
{
    private int myInt; 

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
```


La première section est celle des NameSpace. On la remarque par l'utilisation de using avant chaque terme. Elle détermine quelles classes seront utilisées dans ce script. On laisse celles qui sont présentes par défaut. D'autres peuvent être ajoutées au besoin:   

- **using UnityEngine.UI;** Permet de modifier certaines composantes comme les boutons.
- **using UnityEngine.Video;** Permet de modifier les composantes reliées à la lecture de vidéos.
- **using UnityEngine.SceneManagement;** Permet de faire des changements de Scene à partir du code.
- **using TMPro;** Permet de modifier le texte des objets qui ont une composante Text Mesh Pro.

Après les nameSpace, on aperçoit public class... Ici, script2 est le nom de mon script. On laisse cette ligne telle quelle, c'est elle qui annonce que tout ce qui suit fera partie de la classe de mon script.   

!!! warning "Attention"

    Attention à ne jamais changer le nom de votre script dans le code, sinon il ne sera plus fonctionnel.
     
Après le nom de la classe, j'ai inscris private int myInt. C'est à cet endroit qu'on doit déclarer toutes les variables qui seront utilisées dans notre script on peut déjà leur donner des valeurs ou attendre à plus tard.     

Maintenant, il reste les Fonctions Start et Update. Ainsi, dans cette section, on crée les fonctions qui contiendront le code.   

       
