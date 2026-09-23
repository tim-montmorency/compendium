# Aléatoire
Voici comment obtenir une valeur aléatoire dans Unity (avec `UnityEngine.Random`) :

```csharp
int xCount = Random.Range(1, 6);
```

Le code précédent générera un nombre entier qui sera 1, 2, 3, 4 ou 5.

!!! info "Important"
	- `Random.Range(int min, int max)` : min inclus, max **exclu**
	- `Random.Range(float min, float max)` : min inclus, max **inclus**
