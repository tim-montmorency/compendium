# Transition entre les scènes

Utile pour passer d'un niveau à l'autre, ou du menu vers le jeu.

## 1. Ajouter les scènes au Build

Les scènes doivent être dans la liste du Build avant de pouvoir y accéder par code.

1. **File → Build Profiles** (ou *Build Settings*).
2. Ouvre chaque scène voulue, puis clique **Add Open Scenes**.

!!! info "L'ordre compte"
    La scène numéro **0** est celle chargée au démarrage du jeu — assure-toi que c'est ton menu. Tu peux réordonner en glissant les scènes dans la liste.

## 2. Charger une scène par code

```csharp
using UnityEngine.SceneManagement;
```

```csharp
public void Jouer()
{
    SceneManager.LoadScene("maScene");
}
```

Remplace `"maScene"` par le nom (ou le numéro) de la scène à charger.
