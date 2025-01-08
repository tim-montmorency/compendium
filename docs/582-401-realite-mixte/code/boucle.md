# Boucle
Dans Unity, les boucles sont souvent utilisées pour compter des éléments ou interagir avec les tableaux.   

``` csharp
for(int i = 0; i < 3; i++)
{

}
```

Ci-haut, on crée une boucle dont le code sera exécuté 3 fois avant que le code qui le suit s'exécute.   

``` csharp
for(int i = 0; i < myInts.Length; i++)
{
        myInts[i] =0; 
}
```

Dans Unity, une pratique courante lorsqu'on crée une boucle est d'utiliser la longueur d'un tableau plutôt qu'un chiffre fixe. Ainsi, ci-haut ma boucle sera répétée autant de fois qu'il y a de chiffres dans le tableau myInts[]. Cela permet de ne pas avoir à changer le code à chaque fois que notre tableau change en longueur.   

