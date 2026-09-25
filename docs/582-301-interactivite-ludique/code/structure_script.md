# Structure d'un script

Dans Unity, un « script » C# est une **classe**. Quand cette classe hérite de `MonoBehaviour`, Unity peut l'attacher à un GameObject et appeler certaines **méthodes** automatiquement.

Voici la structure typique d'un script :

```csharp
using UnityEngine;

public class Coucou : MonoBehaviour
{
    [SerializeField] private int myInt = 0;

    // Start est appelé une fois au début
    private void Start()
    {
        
    }

    // Update est appelé une fois par frame
    private void Update()
    {
        
    }
}
```

## `using`

La première section est celle des **namespaces**, indiqués par `using`. Ils déterminent quelles classes/méthodes tu peux utiliser dans ce fichier.

- **`using UnityEngine;`** est obligatoire pour que le script soit reconnu dans Unity.

Ensuite, on ajoute ce qu'on a besoin. Par exemple :

- **`using UnityEngine.UI;`** Permet d'utiliser l'UI « classique » (ex. Button, Image).
- **`using UnityEngine.Video;`** Permet d'utiliser `VideoPlayer`.
- **`using UnityEngine.SceneManagement;`** Permet de changer de scène en code.
- **`using TMPro;`** Permet d'utiliser TextMeshPro.
- `using System.Collections;` : utile surtout pour les Coroutines (`IEnumerator`).
- `using System.Collections.Generic;` : utile pour `List<T>`, `Dictionary<TKey, TValue>`, etc.

## Déclaration de classe

```csharp
public class Coucou : MonoBehaviour
{

}
```

- `Coucou` est le **nom de la classe**
- `: MonoBehaviour` indique que c'est un script Unity attachable à un GameObject

!!! warning "Important"

    Pour un `MonoBehaviour`, **le nom du fichier et le nom de la classe doivent correspondre**.

    Exemple : fichier `Coucou.cs` <=> `public class Coucou : MonoBehaviour`
     
## Variables

```csharp
[SerializeField] private int myInt = 0;
```

Après le nom de la classe, on déclare souvent des variables (champs). Ce sont des valeurs que le script conserve.

- `private` / `public` / `protected` : modificateurs d’accès en code. Par exemple, une variable `private` est seulement accessible dans ce script, une variable `public` serait accessible par d’autres scripts.
- `[SerializeField]` :  rend un champ visible et modifiable dans le panneau `Inspector`! 👌

## Les méthodes `Start` et `Update`

En C#, `Start()` et `Update()` sont des **méthodes** (parce qu'elles sont dans une classe). On dit parfois « fonctions » par habitude, mais le terme exact ici est *méthode*.

- `Start()` : appelée **une fois** au début (au moment où l'objet devient actif)
- `Update()` : appelée **à chaque frame** (attention à la performance)

[STOP]

- `Awake()` : appelé **quand l’instance du script est chargée** (initialisation de base)
- `OnEnable()` : appelé quand le composant (ou l’objet) devient **activé**

Ordre dans lequels ils sont appelés : `Awake`, `OnEnable`, `Start` et `Update`.

!!! tip "Quand utiliser quoi ?"
    - `Awake()` : initialiser des références internes (ex. variables, `GetComponent`, setup local).
    - `Start()` : initialisation qui peut dépendre d'autres objets (souvent après leurs `Awake()`).

       
