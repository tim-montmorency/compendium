# Méthodes dans Unity

Les méthodes (ou fonctions) sont les blocs de construction de vos scripts. Elles s'exécutent selon des événements précis du moteur Unity.
       
## Le Cycle de Vie (Méthodes Natives)

Ces méthodes sont appelées automatiquement par Unity.

| Méthode | Fréquence | Usage |
| ------- | --------- | ----- |
| `Start()` | 1 seule fois | Initialisation au moment où l’objet/script devient actif (juste avant la première frame). |
| `Update()` | Chaque image (FPS) | Détection clavier/souris, timers, mouvements simples. |
| `FixedUpdate()` | Rythme fixe (par défaut 0.02s). | Physique, forces, déplacements Rigidbody. |

## Détection de Collisions (Triggers)

Utilisées lorsqu'un objet traverse une zone "Is Trigger".

- Condition : Au moins un des deux objets doit posséder un **Rigidbody**.
- `OnTriggerEnter(Collider other)` : Se déclenche à l'instant de l'entrée.
- `OnTriggerExit(Collider other)` : Se déclenche au moment où l'objet sort.

```csharp
private void OnTriggerEnter(Collider other)
{
    if (other.CompareTag("Player")) 
    {
        Debug.Log("Le joueur est entré dans la zone !");
    }
}
```

## Créer ses propres méthodes

Une méthode personnalisée permet de ne pas surcharger le Update() et de réutiliser du code.

Structure d'une méthode

`[Visibilité] [Type de retour] [Nom] ( [Arguments] )`

- **Visibilité** : public (accessible par d'autres scripts) ou private (interne).
- **Type de retour** : void si elle ne renvoie rien, sinon le type de donnée (ex: int).
- **Arguments** : Variables passées en paramètres pour être utilisées à l'intérieur.

```csharp title="Exemples"
void Update()
{
    if (Input.GetKeyDown(KeyCode.Space))
    {
        ChangerEtatObjet(gameObject, false); // Appel de la fonction
    }
}

// Fonction avec argument (GameObject)
public void ChangerEtatObjet(GameObject cible, bool etat)
{
    cible.SetActive(etat);
}
```