# Les coroutines

Contrairement à une fonction standard qui s'exécute intégralement en une seule frame, une Coroutine peut mettre son exécution en pause et la reprendre plus tard.
      
## Structure de base

Pour créer une coroutine, on utilise le type de retour `IEnumerator`. Elle doit obligatoirement contenir au moins une instruction `yield`.

``` csharp
IEnumerator MaRoutine()
{
    Debug.Log("Début");
    
    // Pause de 2 secondes
    yield return new WaitForSeconds(2f);
    
    Debug.Log("Fin après 2 secondes");
}
```

## Les types de pauses (`yield`)

C'est ici que réside la puissance des coroutines. Vous pouvez suspendre le code de plusieurs façons :

| Syntaxe | Effet | 
| ------- | ----- | 
| `yield return null;` | Attend la frame suivante (équivalent à un Update).| 
| `yield return new WaitForSeconds(x);` | Attend X secondes (temps réel du jeu). | 
| `yield return new WaitForEndOfFrame();` | Attend que le rendu de l'image soit fini. | 
| `yield break;` | Arrête définitivement la coroutine immédiatement. | 

## Boucles et conditions

On utilise souvent des boucles `while` pour attendre qu'une action soit complétée sans bloquer le reste du jeu.

Exemple : Attendre qu'une variable change

```csharp
IEnumerator AttendreChargement()
{
    while (!estCharge) // Tant que ce n'est pas chargé...
    {
        yield return null; // On attend la frame suivante et on re-vérifie
    }
    Debug.Log("Chargé !");
}
```

## Contrôler la coroutine

Une coroutine ne se lance pas toute seule. Il faut utiliser les méthodes de gestion de Unity.

### Démarrer

```csharp
Coroutine maRef = StartCoroutine(MaRoutine());
```

### Arrêter

Pour arrêter une coroutine spécifique, il est préférable d'utiliser la référence stockée lors du démarrage.

```csharp
StopCoroutine(maRef); // Arrête la coroutine précise
StopAllCoroutines();  // Arrête TOUT sur ce script
```

!!! warning "Important"
    
    Si vous désactivez l'objet (gameObject.SetActive(false)), toutes ses coroutines s'arrêtent immédiatement. Cependant, désactiver simplement le script (enabled = false) ne les arrête pas.