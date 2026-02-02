# Opérateurs

## Opérateurs d’affectation (modifier une variable)

Ces opérateurs modifient la variable **et** lui réassignent le résultat.

- **`+=`** : addition puis réaffectation
- **`-=`** : soustraction puis réaffectation
- **`*=`** : multiplication puis réaffectation
- **`/=`** : division puis réaffectation
- **`%=`** : modulo (reste) puis réaffectation

Exemples :

```csharp
int myInt = 10;

myInt += 2; // myInt vaut 12
myInt -= 3; // myInt vaut 9
myInt *= 2; // myInt vaut 18
myInt /= 3; // myInt vaut 6
myInt %= 4; // myInt vaut 2 (car 6 % 4 = 2)
```

## Incrémentation / décrémentation

- **`++`** : ajoute 1
- **`--`** : enlève 1

```csharp
int myInt = 10;

myInt++; // myInt vaut 11
myInt--; // myInt vaut 10
```

!!! info "Attention aux espaces"
    En C#, on écrit `myInt++;` et `myInt--;` (pas `myInt ++;`).

## Opérateurs arithmétiques (entre 2 valeurs)

Vous pouvez aussi utiliser : **`+`**, **`-`**, **`*`**, **`/`** entre deux nombres.

```csharp
int a = 6;
int b = 4;

int somme = a + b;       // 10
int produit = a * b;     // 24
int difference = a - b;  // 2
```

!!! info "Division : int vs float"
    - Si `a` et `b` sont des `int`, `a / b` fait une **division entière** (le résultat est arrondi vers le bas).
    - Pour obtenir un résultat décimal, utilisez des `float` : `0.5f`, `2f`.

    ```csharp
    int x = 5;

    int demiInt = x / 2;           // 2   (division entière)
    float demiFloat1 = x / 2f;     // 2.5
    float demiFloat2 = x * 0.5f;   // 2.5 (souvent préféré)
    ```

