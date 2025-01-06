# Conditions
Dans Unity, on utilise fréquemment les conditions pour vérifier si un élément est vrai avant d'exécuter une portion de code. Une condition s'écrit de la façon suivante:   

``` csharp
if(myInt == 2)
{

} 
```

Si ma condition est vrai, donc que la variable myInt est égale à 2, on exécutera le code qui est entre les {}; 
   
Outre les ==, il existe d'autres opérateurs pour valider si une fonction est vraie:       


- **!=** (Pas égal à)
- **<** (plus petit que)
- **>** (plus grand que)
- **<=** (plus petit ou égal)
- **>=** (plus grand ou égal)


Il est possible de vérifier plus d'une condition grâce à &&:   

``` csharp
if(myInt >= 2 && myInt < 10)
{

}
```

Ici, on vérifie si myInt est plus grand ou égal à deux et plus petit que 10. Si c'est le cas, le code sera exécuté.   

``` csharp
if(myInt >= 2 || myInt == 0)
{

}
```

On peut utiliser || pour choisir l'une ou l'autre des conditions, ainsi si myInt est plus grand ou égal à deux ou égal à 0, le code entre {} sera exécuté.   

