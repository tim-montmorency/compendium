# Méthodes dans Unity

Les **méthodes** (fonctions) sont des blocs de code dans vos scripts. Certaines sont appelées **automatiquement par Unity** (callbacks) selon le **cycle de vie** et la **physique**.

## Cycle de vie (méthodes natives)

Ces méthodes sont appelées automatiquement par Unity si elles existent dans votre script.

| Méthode | Fréquence | Usage |
| ------- | --------- | ----- |
| `Start()` | 1 seule fois | Initialisation **quand l’objet/script devient actif** (juste avant la première frame). |
| `Update()` | Chaque image (FPS) | Inputs, timers, logique générale (non-physique). |
| `FixedUpdate()` | Rythme fixe (`Time.fixedDeltaTime`, défaut 0.02s) | **Physique** : forces, vélocité, déplacements via `Rigidbody`. |

> Avec un `Rigidbody`, évitez de déplacer l’objet “à la main” avec `transform.position` pour la physique. Préférez `AddForce`, `velocity` ou `MovePosition`.

## Détection de collisions (Triggers)

Utilisées quand un objet traverse une zone dont le `Collider` a **Is Trigger** coché.

**Conditions (3D)** :
- Il faut des `Collider` impliqués (dont au moins un en **Trigger**).
- **Au moins un des deux objets doit avoir un `Rigidbody`**.

**Méthodes (3D)** :
- `OnTriggerEnter(Collider other)` : déclenchée à l’entrée.
- `OnTriggerExit(Collider other)` : déclenchée à la sortie.

**Équivalents (2D)** :
- `OnTriggerEnter2D(Collider2D other)`
- `OnTriggerExit2D(Collider2D other)`

```csharp
private void OnTriggerEnter(Collider other)
{
    if (other.CompareTag("Player"))
    {
        Debug.Log("Le joueur est entré dans la zone !");
    }
}
```

> `CompareTag("...")` est recommandé (plus fiable que vérifier `other.name`).

## Créer ses propres méthodes

Une méthode personnalisée sert à **réutiliser** du code et à éviter de surcharger `Update()`.

**Structure :**  
`[Visibilité] [Type de retour] [Nom] ( [Arguments] )`

- **Visibilité** : `public` (appelable depuis d’autres scripts) ou `private` (interne).
- **Type de retour** : `void` si la méthode ne retourne rien, sinon un type (ex. `int`, `bool`…).
- **Arguments** : valeurs reçues en paramètres pour être utilisées dans la méthode.

```csharp title="Exemples"
private void Update()
{
    if (Input.GetKeyDown(KeyCode.Space))
    {
        ChangerEtatObjet(gameObject, false);
    }
}

public void ChangerEtatObjet(GameObject cible, bool etat)
{
    cible.SetActive(etat);
}
```