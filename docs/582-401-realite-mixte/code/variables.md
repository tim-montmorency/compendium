Plusieurs variables sont disponibles dans Unity et nous permettent de parler à des objets spécifiques.   

!!! info "Information"

    Chaque variable peut être publique ou privée dans Unity. Si elle est publique, la variable sera affichée dans l'inspecteur. De plus, on pourra y accéder depuis d'autres scripts.
      

## Variables traditionnelles
Dans cette section, nous verrons les variables que vous connaissez déjà grâce à vos cours de programmation.   

### Int
La variable int nous permet de compter des chiffres entiers. On la déclare de cette façon:   à

``` csharp
public int myInt;
```

On peut mettre la variable public ou private selon notre préférence. Si on la mets publique, on pourra changer sa valeur directement dans l'inspecteur. On comprend que myInt est le nom que je donne à ma variable, ainsi vous pouvez mettre le nom de votre choix tant qu'il n'y a pas d'accent.    

Voici commment assigner une valeur à notre variable int: 

``` csharp
myInt = 10;
```



### Float
La variable float nous permet de compter des chiffres décimaux. On la déclare de cette façon:    

``` csharp
public float myFloat;
```

Dans Unity, il y a une particularité pour les Float dans le code. Lorsque je change la valeur d'un float et qu'elle n'est pas entière, je dois mettre un f après celui-ci pour spécifier à Unity que c'est un float. Voici un exemple:     

``` csharp
myFloat = 1.5f;
```

On comprends que pour assigner un float, on doit mettre un point entre les chiffres (et non une virgule!) et qu'il faut mettre un f à la fin.   

### Bool
La variable bool nous permet de créer un Boolean, donc une variable qui sera vraie ou fausse. On la déclare de cette façon:     

``` csharp
public bool myBool; 
```

Pour assigner une valeur vraie ou fausse à cette variable, voici comment faire: 

``` csharp
myBool = true;
```

Pour la valeur faux, on écrirait false plutôt que true.   

### Vector 2
La variable Vector 2 nous permet de créer une variable avec une position en x et une en y. On la déclare de cette façon: 

``` csharp
public Vector2 myVector; 
```

Pour assigner une valeur à cette variable, voici comment faire:   

``` csharp
myVector = new Vector2(0f, 0f);
```

On est pas obligés de mettre les f si les nombres de la position sont entiers, mais c'est bon d'en faire une habitude.   

### Vector 3
La variable Vector 3 nous permet de créer une variable avec une position en x, une en y et une en z. On la déclare de cette façon:   

``` csharp
public Vector3 myVector;
```

Pour assigner une valeur à cette variable, voici comment faire:   

``` csharp
 myVector = new Vector3(0f, 0f,0f); 
```

On est pas obligés de mettre les f si les nombres de la position sont entiers, mais c'est bon d'en faire une habitude.   

### Tableau (array)
Chaque variable peut être un tableau. Pour cela, on doit l'écrire de la façon suivante:   

``` csharp
public int[] myInts;
```

Ainsi, c'est tout de suite après le nom de la variable qu'on doit inscrire les [] qui indiqueront que notre objet est un array.     

Une fois le tableau créé, on doit lui indiquer combien d'objets il comporte et leur donner une valeur. Pour cela deux options sont possibles.

``` csharp
public int[] myInts = { 0, 2, 3 };
```

Ici, on a créé un tableau de 3 variables int. On a assigné les valeurs dès qu'on a créé la variable.   

``` csharp
myInts = new int[4]; 
for(int i = 0; i < 4; i++)
{
	myInts[i] = 0; 
}
```

Ici, on a créé un tableau avec 4 int, puis on a donné la valeur 0 à chacun de ces int grâce à une boucle. On aurait aussi pu donner une valeur différente à chacun avec la méthode suivante:   

``` csharp
myInts = new int[4];
myInts[0] = 2;
myInts[1] = 4;
myInts[2] = 5;
myInts[3] = 1;
```

!!! info "Information"

    Il est possible de créer des tableaux avec les variables Unity que nous verrons ci-bas. Si on crée un tableau public, on a pas à dire tout de suite sa taille. Par exemple, je pourrais créer un tableau de GameObject et ensuite simplement glisser autant d'objets que je souhaite dans celui-ci dans l'inspecteur.

      

## Variables Unity
Unity a des variables qui lui sont propres. On peut les utiliser pour appeler certains objets et les modifier.   

### GameObject
La variable GameObject nous permet de contrôler n'importe quel objet présent dans la fenêtre Hierarchy de notre scène.   

``` csharp
public GameObject myGameObject;
```


Lorsque l'on crée une variable GameObject publique, on peut glisser un GameObject depuis la Hierarchy dans le script de l'inspecteur. Ainsi, on a pas à faire cette étape avec le code.     

<img src="../images/gameObject.png">    

Ici, dans mon script Control Target, je pourrais glisser le Game Object de mon choix dans le champ My Game Object.     

Une fois qu'on est en mesure d'appeler notre GameObject, on peut modifier certains de ses paramètres ou les vérifier. Voici quelques exemples:     

``` csharp
if(myGameObject.name == "nom")
```

Ici, on utilise name pour vérifier le nom du GameObject. Si jamais c'est "nom", la condition sera vraie.   

``` csharp
if(myGameObject.tag == "tag")
```

Ici, on utilise tag pour vérifier le tag du GameObject. Si jamais c'est "tag", la condition sera vraie. On peut changer le tag de nos GameObject à partir de l'inspecteur.   

``` csharp
myGameObject.SetActive(true);
```

On utilise SetActive pour activer (true) ou désactiver (false) le GameObject.   

``` csharp
myGameObject.GetComponent<Transform>().position = new Vector3(0, 0, 0);
```

Avec GetComponent, on peut chercher n'importe quelle composante du GameObject et changer ses paramètres. Par exemple, ici on cherche le transform pour modifier la position de l'objet.   

### Transform
La variable Transform nous permet de contrôler la position, la rotation et l'échelle d'un objet.  

``` csharp
public Transform myTransform;
```

``` csharp
myTransform.position = new Vector3(0f, 0f, 0f);
```

Pour modifier la position d'un Transform, on doit créer un Vecteur contenant 3 chiffres, respectivement x, y et z. 

``` csharp
 myTransform.rotation = Quaternion.Euler(90, 0, 0);
```

Pour modifier la rotation d'un objet, on doit assigner un Quaternion. Cependant, cette notion est assez complexe, ainsi on peut utiliser .Euler pour donner une rotation en x, y et z à notre objet.   

``` csharp
 myTransform.localScale = new Vector3(2, 2, 2);
```

Pour modifier la taille de l'objet, on doit modifier localScale et lui assigner un Vector 3 pour la taille en x, y et z.   


### Camera
La variable camera nous permet de contrôler certains paramètres de la Caméra.  

``` csharp
public Camera myCamera;
```

``` csharp
myCamera.fieldOfView = 50; 
```

Field of view permet de changer l'angle de vue de la caméra.   

### Animator
La variable Animator nous permet de contrôler la composante Animator d'un GameObject.   

``` csharp
public Animator myAnimator;
```

``` csharp
myAnimator.Play("monAnim"); 
```

Play nous permet de jouer une des animations de l'animator. On peut l'appeler par son nom lorsque l'on met les "". Une fois l'animation jouée, l'animator continuera de fonctionner normalement. 
    
``` csharp
myAnimator.SetBool("myBool", false);
```
    
SetBool, SetInt et SetFloat nous permettent de modifier les paramètres que nous avons ajouté manuellement à nos animations. Dans tous les cas, entre parenthèse, on doit premièrement écrire le nom de notre paramètre et deuxièmement lui assigner une valeur.   

### AudioClip
La variable AudioClip permet d'assigner des clips Audio. 

``` csharp
public AudioClip myClip;
```


### AudioSource
La variable AudioSource permet de contrôler le son du jeu.  

``` csharp
public AudioSource myAudioSource;
```

``` csharp
myAudioSource.Play();
```

Play permet de jouer le clip qui est assigné à notre audioSource une fois.   

``` csharp
myAudioSource.PlayOneShot(myClip);
```

PlayOneShot nous permet d'assigner un clip à notre AudioSource pour le faire jouer une fois.   

### Color
Lorsqu'elle est publique, la variable Color nous permet de sélectionner une couleur dans une palette de couleur dans l'inspecteur.   

``` csharp
public Color myColor;
```


### Sprite
La variable Sprite permet d'assigner des sprite à des images.   

``` csharp
public Sprite mySprite;
```


### Sprite Renderer
La variable Sprite Renderer permet de contrôler les images et la couleur des sprites.

``` csharp
public SpriteRenderer mySpriteRend;
```


``` csharp
mySpriteRend.sprite = mySprite;
```

Sprite permet de modifier l'image que le sprite renderer affiche en ce moment.   

``` csharp
mySpriteRend.color = myColor;
```

Color permet de modifier la couleur du sprite. On peut utiliser une couleur qu'on a créé et qu'on peut modifier dans l'inspecteur puisqu'elle est publique.  

``` csharp
mySpriteRend.color = Color.green;
```

On peut utiliser les couleurs par défaut de Unity au besoin. Il suffit d'inscrire Color. puis le nom de la couleur qu'on souhaite. Si elle est répertoriée, cela fonctionnera.   

``` csharp
mySpriteRend.color = new Color(255, 0, 155, 255);
```

Finalement, on peut créer de nouvelles couleurs avec des valeurs entre 0 et 255 pour 4 paramètres, soit le rouge, le vert, le bleu et l'alpha.   





