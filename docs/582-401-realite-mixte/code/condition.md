# Conditions

## `if`

Dans Unity (C#), on utilise des conditions pour exécuter du code **seulement si une expression est vraie**.

Une condition s’écrit avec `if` :

```csharp
int myInt = 2;

if (myInt == 2)
{
	// Ce code s'exécute seulement si myInt vaut 2
}
```

!!! info "À retenir"

	Une condition doit toujours donner un `true` ou un `false`.

## `else` et `else if`

Quand tu veux gérer plusieurs cas :

```csharp
if (myInt < 0)
{
	// Cas 1
}
else if (myInt == 0)
{
	// Cas 2
}
else
{
	// Cas 3 (tous les autres)
}
```

## Opérateurs de comparaison

- **`==`** : égal à
- **`!=`** : pas égal à
- **`<`** : plus petit que
- **`>`** : plus grand que
- **`<=`** : plus petit ou égal à
- **`>=`** : plus grand ou égal à

Exemple :

```csharp
if (myInt >= 2)
{
	// myInt vaut 2, 3, 4, ...
}
```

!!! warning "Piège très fréquent : `=` vs `==`"

	- `=` sert à **assigner** : `myInt = 2;`
	- `==` sert à **comparer** : `myInt == 2`

## Opérateurs logiques (combiner des conditions)

- **`&&`** : ET (les deux doivent être vraies)
- **`||`** : OU (au moins une doit être vraie)
- **`!`** : NON (inverse un bool)

### Avec `&&` (ET)

```csharp
if (myInt >= 2 && myInt < 10)
{
	// myInt est dans l'intervalle [2, 10)
}
```

### Avec `||` (OU)

```csharp
if (myInt >= 2 || myInt == 0)
{
	// myInt vaut 0, 2, 3, 4, ...
}
```

### Avec `!` (NON)

```csharp
bool isAlive = false;

if (!isAlive)
{
	// isAlive est faux
}
```

!!! tip "Lisibilité"
	Ajoute des parenthèses quand il y a plusieurs opérateurs. C'est plus facile à lire.

	```csharp
    if ((a > 0 && b > 0) || isDebug){
        // 👌
    }
    ```

[STOP]

Même si C# autorise `if (condition) doSomething();`, en Unity on garde presque toujours les accolades `{ }` pour éviter les erreurs.

Comparaison de nombres à virgule (float)
En `float`, évite `==` (à cause des arrondis). Utilise plutôt `Mathf.Approximately(a, b)`.

