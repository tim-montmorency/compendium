Lorsque l'on programme des Scripts dans Unity, on utilise des fonctions. On inscrit notre code dans celles-ci et elles s'exécutent selon certaines conditions. Nous verrons ici les différentes fonctions qui existent:    


       

## Start()
Lorsque vous créez un nouveau Script dans Unity, la fonction void Start() est créée par défaut. Le nom void reviendra dans vos fonctions, il s'agit du type de Fonction. La fonction Start est exécutée une seule fois au démarrage de la scène dans laquelle elle est. Ainsi, elle est régulièrement utilisée pour initialiser des valeurs.   

       

## Update()
La fonction Update est elle aussi présente dans les nouveaux Scripts. Elle est appelée à chaque frame. Ainsi, à chaque frame on exécute les actions qui sont à l'intérieur de celle-ci. Si le jeu est à 60 frames par seconde, on fera ces actions 60 fois par seconde. On utilise généralement cette fonction pour la détection et la mise à jour de variable. Par exemple, bouger un objet lorsqu'on touche l'écran.   

       

## FixedUpdate()
La fonction FixedUpdate est très similaire à la Fonction Update. On l'utilise pour gérer la physique des personnages. En effet, comme elle est appelé un nombre de fois déterminé par seconde, elle est plus prévisible que le Update, ce qui nous aide à mieux controller nos personnages ou encore les éléments qui interagissent avec la physique de Unity.    

       

## OnTriggerEnter(Collider other)
Cette fonction peut être utilisée dans un Script qui est sur un GameObject qui a une composante Collider dont la fonction IsTrigger est cochée. Elle sera déclenchée lorsqu'un objet ayant aussi un collider entrera dans sa zone de collision. Alors, le code présent dans cette fonction s'exécutera une fois.      

Cette fonction a une particularité. En effet, vous aurez remarqué qu'il y a quelque chose d'écrit entre ses parenthèse. On appelle cela un argument. Dans le cas de OnTriggerEnter, lorsqu'on entre dans la zone de détection, le script détecte qui vient d'entrer en collision avec l'objet et le garde en mémoire. Ainsi, dans votre code, vous pourrez utilisez l'objet other pour donner des ordres à cet objet qui vient d'entrer dans la zone de détection. Par exemple, vous pouvez vérifier son identité avec le code other.name   

``` csharp
private void OnTriggerEnter(Collider other)
    {
        if(other.name == "nom")
        {
            codeici;
        }
    }
```

Ici, on vérifie si l'objet s'appelle nom et si oui, on exécute le code entre les accolades.   

       

## OnTriggerExit(Collider other)
Cette fonction est la même que OnTriggerEnter, mais elle est déclenchée lorsqu'on sort de la zone de détection.    

       

## Fonction personnalisée()
Dans Unity, il est très fréquent de créer nos propres fonctions. Cependant, elles ne seront pas appelées automatiquement, il faudra donc les déclencher grâce à des événements ou d'autres scripts.   
Créer une fonction est simple. Il faut inscrire le code suivant:     

``` csharp

    public void NomFonction(){
        code ici;
    }
```

Le code se découpe en trois partie, la première nous sert à déterminer si notre fonction est privée ou publique. Ainsi, on peut inscrire private lorsqu'on souhaite appeler cette fonction seulement dans le script dans lequel on travaille présentement. On utilise plutôt public lorsque l'on veut appeler cette fonction depuis un autre endroit, avec un événement par exemple. La deuxième partie est le type de fonction, donc void. La troisième partie est le nom de la fonction. Vous pouvez la nommer comme vous le souhaitez. Normalement, on débute le nom de la fonction avec une majuscule.       

Pour exécuter cette fonction dans le script, c'est très simple. Vous devez trouver à quel moment l'appeler. Par exemple, on pourrait avoir une condition qui vérifie si un bouton est appuyé dans notre Update et démarrer la fonction lorsqu'elle est appelée.
    
Voici un exemple:   

``` csharp
void Update()
    {
        if (Input.GetButtonDown("1"))
        {
            NomFonction();
        }
        
    }
```

Ici, on appelle la fonction NomFonction lorsque la touche 1 est enfoncée.   

       

## Ajouter un argument à une Fonction
Lorsqu'on crée une Fonction, on peut lui donner un argument.   

``` csharp
public void MaFonction(GameObject objet)
    {
        objet.SetActive(true);
    }
```

Ici, on a donné un GameObject comme argument à la Fonction MaFonction. Ainsi, on pourra assigner un GameObject à cette fonction et le modifier en utilisant objet dans le code. Vous pourriez mettre le nom de votre choix à la place de objet. Le code précédent active le GameObject objet lorsqu'il est appelé.     

Les arguments peuvent être de plusieurs types, ainsi vous pouvez choisir un bool, int, float, GameObject, button,... Toutes les composantes peuvent servir d'argument.   
