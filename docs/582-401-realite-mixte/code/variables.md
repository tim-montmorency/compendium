

Plusieurs variables sont disponibles dans Unity et nous permettent de parler à des objets spécifiques.   

!!! info "Information"<br><br>       Chaque variable peut être publique ou privée dans Unity. Si elle est publique, la variable sera affichée dans l'inspecteur. De plus, on pourra y accéder depuis d'autres scripts.<br>


***  

## Variables traditionnelles
Dans cette section, nous verrons les variables que vous connaissez déjà grâce à vos cours de programmation.   
## Int
La variable int nous permet de compter des chiffres entiers. On la déclare de cette façon:   
<highlight lang="csharp">public int myInt; </highlight>
On peut mettre la variable public ou private selon notre préférence. Si on la mets publique, on pourra changer sa valeur directement dans l'inspecteur. On comprend que myInt est le nom que je donne à ma variable, ainsi vous pouvez mettre le nom de votre choix tant qu'il n'y a pas d'accent.    
Voici commment assigner une valeur à notre variable int:   
<highlight lang="csharp">myInt = 10; </highlight>


## Float
La variable float nous permet de compter des chiffres décimaux. On la déclare de cette façon:   
<highlight lang="csharp">public float myFloat; </highlight>
Dans Unity, il y a une particularité pour les Float dans le code. Lorsque je change la valeur d'un float et qu'elle n'est pas entière, je dois mettre un f après celui-ci pour spécifier à Unity que c'est un float. Voici un exemple:   
<highlight lang="csharp">myFloat = 1.5f; </highlight>
On comprends que pour assigner un float, on doit mettre un point entre les chiffres (et non une virgule!) et qu'il faut mettre un f à la fin.   

## Bool
La variable bool nous permet de créer un Boolean, donc une variable qui sera vraie ou fausse. On la déclare de cette façon:   
<highlight lang="csharp">public bool myBool; </highlight>
Pour assigner une valeur vraie ou fausse à cette variable, voici comment faire:   
<highlight lang="csharp">myBool = true; </highlight>
Pour la valeur faux, on écrirait false plutôt que true.   

## Vector 2
La variable Vector 2 nous permet de créer une variable avec une position en x et une en y. On la déclare de cette façon:   
<highlight lang="csharp">public Vector2 myVector; </highlight>
Pour assigner une valeur à cette variable, voici comment faire:   
<highlight lang="csharp"> myVector = new Vector2(0f, 0f);  </highlight>
On est pas obligés de mettre les f si les nombres de la position sont entiers, mais c'est bon d'en faire une habitude.   

## Vector 3
La variable Vector 3 nous permet de créer une variable avec une position en x, une en y et une en z. On la déclare de cette façon:   
<highlight lang="csharp">public Vector3 myVector; </highlight>
Pour assigner une valeur à cette variable, voici comment faire:   
<highlight lang="csharp"> myVector = new Vector3(0f, 0f,0f);  </highlight>
On est pas obligés de mettre les f si les nombres de la position sont entiers, mais c'est bon d'en faire une habitude.   

## Tableau (array)
Chaque variable peut être un tableau. Pour cela, on doit l'écrire de la façon suivante:   
<highlight lang="csharp">public int[] myInts; </highlight>
Ainsi, c'est tout de suite après le nom de la variable qu'on doit inscrire les [] qui indiqueront que notre objet est un array.   
Une fois le tableau créé, on doit lui indiquer combien d'objets il comporte et leur donner une valeur. Pour cela deux options sont possibles.
<highlight lang="csharp">public int[] myInts = { 0, 2, 3 };  </highlight>
Ici, on a créé un tableau de 3 variables int. On a assigné les valeurs dès qu'on a créé la variable.   
<highlight lang="csharp">
myInts = new int[4]; 
for(int i = 0; i < 4; i++)
{
	myInts[i] = 0; 
}
</highlight>
Ici, on a créé un tableau avec 4 int, puis on a donné la valeur 0 à chacun de ces int grâce à une boucle. On aurait aussi pu donner une valeur différente à chacun avec la méthode suivante:   
<highlight lang="csharp">
myInts = new int[4];
myInts[0] = 2;
myInts[1] = 4;
myInts[2] = 5;
myInts[3] = 1;
</highlight>

        !!! info "Information"<br><br>       Il est possible de créer des tableaux avec les variables Unity que nous verrons ci-bas. Si on crée un tableau public, on a pas à dire tout de suite sa taille. Par exemple, je pourrais créer un tableau de GameObject et ensuite simplement glisser autant d'objets que je souhaite dans celui-ci dans l'inspecteur.<br>

***  

## Variables Unity
Unity a des variables qui lui sont propres. On peut les utiliser pour appeler certains objets et les modifier.   

## GameObject
La variable GameObject nous permet de contrôler n'importe quel objet présent dans la fenêtre Hierarchy de notre scène.   
<highlight lang="csharp">public GameObject myGameObject; </highlight>
Lorsque l'on crée une variable GameObject publique, on peut glisser un GameObject depuis la Hierarchy dans le script de l'inspecteur. Ainsi, on a pas à faire cette étape avec le code.   
<img src="images/gameObject.png">
Ici, dans mon script Control Target, je pourrais glisser le Game Object de mon choix dans le champ My Game Object.   
Une fois qu'on est en mesure d'appeler notre GameObject, on peut modifier certains de ses paramètres ou les vérifier. Voici quelques exemples:   
<highlight lang="csharp">if(myGameObject.name == "nom") </highlight>
Ici, on utilise name pour vérifier le nom du GameObject. Si jamais c'est "nom", la condition sera vraie.   
<highlight lang="csharp">if(myGameObject.tag == "tag") </highlight>
Ici, on utilise tag pour vérifier le tag du GameObject. Si jamais c'est "tag", la condition sera vraie. On peut changer le tag de nos GameObject à partir de l'inspecteur.   
<highlight lang="csharp">myGameObject.SetActive(true); </highlight>
On utilise SetActive pour activer (true) ou désactiver (false) le GameObject.   
<highlight lang="csharp">myGameObject.GetComponent<Transform>().position = new Vector3(0, 0, 0); </highlight>
Avec GetComponent, on peut chercher n'importe quelle composante du GameObject et changer ses paramètres. Par exemple, ici on cherche le transform pour modifier la position de l'objet.   

## Transform
La variable Transform nous permet de contrôler la position, la rotation et l'échelle d'un objet.   
<highlight lang="csharp">public Transform myTransform; </highlight>
<highlight lang="csharp">myTransform.position = new Vector3(0f, 0f, 0f); </highlight>
Pour modifier la position d'un Transform, on doit créer un Vecteur contenant 3 chiffres, respectivement x, y et z.   
<highlight lang="csharp"> myTransform.rotation = Quaternion.Euler(90, 0, 0);  </highlight>
Pour modifier la rotation d'un objet, on doit assigner un Quaternion. Cependant, cette notion est assez complexe, ainsi on peut utiliser .Euler pour donner une rotation en x, y et z à notre objet.   
<highlight lang="csharp"> myTransform.localScale = new Vector3(2, 2, 2);  </highlight>
Pour modifier la taille de l'objet, on doit modifier localScale et lui assigner un Vector 3 pour la taille en x, y et z.   


## Camera
La variable camera nous permet de contrôler certains paramètres de la Caméra.   
<highlight lang="csharp"> public Camera myCamera;  </highlight>
<highlight lang="csharp"> myCamera.fieldOfView = 50; </highlight>
Field of view permet de changer l'angle de vue de la caméra.   

## Animator
La variable Animator nous permet de contrôler la composante Animator d'un GameObject.   
<highlight lang="csharp"> public Animator myAnimator; </highlight>
<highlight lang="csharp"> myAnimator.Play("monAnim"); </highlight>
Play nous permet de jouer une des animations de l'animator. On peut l'appeler par son nom lorsque l'on met les "". Une fois l'animation jouée, l'animator continuera de fonctionner normalement.   
<highlight lang="csharp"> myAnimator.SetBool("myBool", false); </highlight>
SetBool, SetInt et SetFloat nous permettent de modifier les paramètres que nous avons ajouté manuellement à nos animations. Dans tous les cas, entre parenthèse, on doit premièrement écrire le nom de notre paramètre et deuxièmement lui assigner une valeur.   

## AudioClip
La variable AudioClip permet d'assigner des clips Audio.   
<highlight lang="csharp">  public AudioClip myClip;</highlight>

## AudioSource
La variable AudioSource permet de contrôler le son du jeu.   
<highlight lang="csharp">  public AudioSource myAudioSource; </highlight>
<highlight lang="csharp">   myAudioSource.Play(); </highlight>
Play permet de jouer le clip qui est assigné à notre audioSource une fois.   
<highlight lang="csharp">   myAudioSource.PlayOneShot(myClip);</highlight>
PlayOneShot nous permet d'assigner un clip à notre AudioSource pour le faire jouer une fois.   

## Color
Lorsqu'elle est publique, la variable Color nous permet de sélectionner une couleur dans une palette de couleur dans l'inspecteur.   
<highlight lang="csharp">  public Color myColor; </highlight>


## Sprite
La variable Sprite permet d'assigner des sprite à des images.   
<highlight lang="csharp">  public Sprite mySprite;</highlight>

## Sprite Renderer
La variable Sprite Renderer permet de contrôler les images et la couleur des sprites.   
<highlight lang="csharp">   public SpriteRenderer mySpriteRend; </highlight>
<highlight lang="csharp">   mySpriteRend.sprite = mySprite; </highlight>
Sprite permet de modifier l'image que le sprite renderer affiche en ce moment.   
<highlight lang="csharp">   mySpriteRend.color = myColor; </highlight>
Color permet de modifier la couleur du sprite. On peut utiliser une couleur qu'on a créé et qu'on peut modifier dans l'inspecteur puisqu'elle est publique.   
<highlight lang="csharp">  mySpriteRend.color = Color.green;  </highlight>
On peut utiliser les couleurs par défaut de Unity au besoin. Il suffit d'inscrire Color. puis le nom de la couleur qu'on souhaite. Si elle est répertoriée, cela fonctionnera.   
<highlight lang="csharp">  mySpriteRend.color = new Color(255, 0, 155, 255);  </highlight>
Finalement, on peut créer de nouvelles couleurs avec des valeurs entre 0 et 255 pour 4 paramètres, soit le rouge, le vert, le bleu et l'alpha.   





