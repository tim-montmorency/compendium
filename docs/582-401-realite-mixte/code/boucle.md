# Boucles

Les boucles servent surtout à :

- répéter une action plusieurs fois
- parcourir un tableau (array) ou une liste (List)
- appliquer une logique à chaque élément (ex. : désactiver des objets, compter, initialiser)

## La boucle `for`

```csharp
for (int i = 0; i < 3; i++)
{
        // Ce code s’exécute 3 fois : i = 0, 1, 2
}
```

Le `for` a 3 parties :

- `int i = 0` : on crée l’index (départ)
- `i < 3` : condition pour continuer
- `i++` : on avance d’un pas à chaque tour

### Parcourir un tableau

En Unity, on évite les chiffres “magiques” et on utilise la longueur du tableau.

```csharp
int[] myInts = { 3, 7, 9 };

for (int i = 0; i < myInts.Length; i++)
{
        myInts[i] = 0;
}
```

## `foreach`

Si tu n’as pas besoin de l’index (`int i`), `foreach` est le plus simple.

```csharp
foreach (int value in myInts)
{
        // value = 3, puis 7, puis 9
}
```
