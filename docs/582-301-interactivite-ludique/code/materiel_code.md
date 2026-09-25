# Modifier un matériel avec le script

On peut changer la couleur (ou d'autres propriétés) du matériel d'un objet directement en code, via son `Renderer`.

```csharp
public GameObject cube;
public Color couleurRouge;

private void OnTriggerEnter(Collider other)
{
    if (other.CompareTag("Player"))
    {
        // Change la couleur du matériel
        cube.GetComponent<Renderer>().material.color = couleurRouge;

        // Change l'émission (ex. pour un effet lumineux)
        cube.GetComponent<Renderer>().material.SetVector("_EmissiveColor", couleurRouge * 2.0f);
    }
}
```

!!! warning "Attention"
    `.material` crée une **copie** du matériel pour cet objet seulement (les autres objets qui utilisaient ce matériel ne changent pas). Utilise `.sharedMaterial` si tu veux modifier tous les objets qui partagent ce matériel.
