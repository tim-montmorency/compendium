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

!!! tip "En JS"
    Même syntaxe qu'en JavaScript : `if`, `else if`, `else`, `&&`, `||`, `!`. Une différence : en C#, la condition doit être un vrai `bool` — pas de valeurs "truthy/falsy" comme `if (monTexte)` ou `if (0)`.

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

!!! info "Sans accolades"
    Même si C# autorise `if (condition) doSomething();`, en Unity on garde presque toujours les accolades `{ }` pour éviter les erreurs.

!!! info "Comparer des `float`"
    Évite `==` entre deux `float` (à cause des arrondis). Utilise plutôt `Mathf.Approximately(a, b)`.

