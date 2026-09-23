# Quitter l'application

Une fonction pour fermer le jeu, utile pour un bouton « Quitter ».

```csharp
public void QuitterPartie()
{
    Application.Quit();
}
```

Le nom de la fonction est libre. Ce qui compte, c'est `Application.Quit();`.

!!! info "Test dans l'éditeur"
    `Application.Quit()` ne fait rien en mode **Play** dans l'éditeur Unity — il faut tester dans un **build**.
