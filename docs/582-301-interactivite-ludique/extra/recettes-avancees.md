# Recettes avancées

Ces recettes sont **hors cahier des charges** : rien ici n'est requis pour réussir le cours. Elles existent pour les élèves dont les issues [MUST] sont terminées et qui veulent pousser leur jeu plus loin - en issues **[COULD]**. Chaque recette est autoportante et n'utilise que des notions vues en classe (plus une nouveauté : les coroutines, en fin de page).

!!! warning "Rappel du cours 14"
    Après le gel des fonctionnalités (S14), on n'ajoute plus rien - ces recettes se font aux cours 12 à 13, pas la veille de la remise.


## 1. Le double saut

**Le concept :** un compteur de sauts, rechargé quand on touche le sol.

```csharp
public int sautsMax = 2;
private int sautsRestants;

// Quand le personnage est au sol (isGrounded / Grounded) :
sautsRestants = sautsMax;

// À l'appui sur Saut : autoriser SI sautsRestants > 0, puis décrémenter :
if (sautsRestants > 0)
{
    // ...déclencher le saut...
    sautsRestants--;
}
```

**Dans les Starter Assets :** ouvre `ThirdPersonController.cs` et trouve la méthode `JumpAndGravity()`. Repère la condition qui autorise le saut (elle vérifie `Grounded`) : c'est là que ta logique de compteur s'insère. Travaille sur une **copie commitée** du projet - modifier un script des Starter Assets est une vraie opération de rétro-ingénierie : lis d'abord, comprends, modifie ensuite.

**Le feedback obligatoire :** un double saut sans indication est un bug aux yeux du joueur. Son distinct sur le 2ᵉ saut + particules sous les pieds (cours 13).


## 2. Le dash

**Le concept :** une impulsion brève de vitesse dans la direction du mouvement, avec un temps de recharge (*cooldown*).

```csharp
public float multiplicateurDash = 3f;
public float dureeDash = 0.2f;       // Le dash dure un cinquième de seconde
public float recharge = 1f;          // Une seconde entre deux dashs
private bool enDash = false;
private bool disponible = true;

// À l'appui sur la touche (ex. Shift), si disponible :
// enDash = true; disponible = false;
// Invoke("FinDash", dureeDash);      → remet enDash = false
// Invoke("Recharger", recharge);     → remet disponible = true

// Pendant que enDash est vrai : multiplier la vitesse de déplacement
```

**Dans les Starter Assets :** la vitesse vit dans `ThirdPersonController.cs` (variables `MoveSpeed` / `SprintSpeed`, utilisées dans `Move()`). L'approche la plus simple : quand le dash s'active, gonfle temporairement la vitesse cible, puis restaure-la.

**Le feedback :** trainée de particules, son de « whoosh », et l'icône de recharge au HUD si tu veux le grand jeu (une Image UI qui se remplit - cherche *Image Fill Amount*).


## 3. Projectile et cible

**Le concept :** trois morceaux - un prefab de projectile, un lanceur qui l'instancie, une cible qui réagit à l'impact.

**Le prefab projectile :** une petite sphère avec un **Rigidbody** (la physique la fait voler) et un Collider. Glisse-la dans `_Project/Prefabs`, supprime-la de la scène.

**Le lanceur** (sur le personnage ou une tourelle) :

```csharp
using UnityEngine;

public class Lanceur : MonoBehaviour
{
    public GameObject prefabProjectile;  // Glisser le prefab
    public Transform pointDeTir;         // Un Empty devant le lanceur
    public float force = 15f;

    void Update()
    {
        if (Input.GetKeyDown(KeyCode.F))
        {
            // Instantiate = fabriquer une copie du prefab, ici et maintenant
            GameObject proj = Instantiate(prefabProjectile,
                                          pointDeTir.position,
                                          pointDeTir.rotation);
            // On pousse la copie vers l'avant via sa physique
            proj.GetComponent<Rigidbody>().AddForce(pointDeTir.forward * force,
                                                    ForceMode.Impulse);
            Destroy(proj, 5f); // Ménage : la copie s'autodétruit après 5 s
        }
    }
}
```

**La cible :**

```csharp
using UnityEngine;

public class Cible : MonoBehaviour
{
    public AudioClip sonImpact;

    private void OnCollisionEnter(Collision collision) // Collision SOLIDE (pas trigger!)
    {
        if (collision.gameObject.CompareTag("Projectile")) // Crée et ASSIGNE le tag
        {
            AudioSource.PlayClipAtPoint(sonImpact, transform.position);
            gameObject.SetActive(false); // Ou : déclenche ta porte, ton compteur...
        }
    }
}
```

**Remarque le patron :** c'est un clé/porte à distance. La cible touchée peut appeler `porte.RecevoirCle()` ou `hud.Incrementer()` - tout ton système existant se branche dessus.


## 4. Les coroutines : des délais dignes de ce nom

`Invoke` appelle UNE méthode après UN délai. Une **coroutine** écrit une séquence entière - « fais ceci, attends, fais cela » - dans l'ordre où on la lit :

```csharp
using System.Collections; // Requis pour IEnumerator
using UnityEngine;

public class PorteADelai : MonoBehaviour
{
    public Animator animateurPorte;
    public AudioClip sonDeverrouillage;
    public AudioClip sonOuverture;

    public void Ouvrir()
    {
        StartCoroutine(SequenceOuverture()); // Lance la séquence
    }

    private IEnumerator SequenceOuverture()
    {
        AudioSource.PlayClipAtPoint(sonDeverrouillage, transform.position);
        yield return new WaitForSeconds(1f);     // ⏳ attend 1 seconde
        animateurPorte.Play("Ouverture");
        AudioSource.PlayClipAtPoint(sonOuverture, transform.position);
        yield return new WaitForSeconds(0.5f);   // ⏳ attend l'animation
        // Ici : activer le trigger de passage, allumer une lumière, etc.
    }
}
```

`yield return new WaitForSeconds(x)` = « mets cette séquence en pause x secondes, le jeu continue de tourner ». C'est l'outil des mises en scène : la porte qui gronde AVANT de s'ouvrir, le compte à rebours, l'apparition progressive. Ton `Invoke` du cours 9 reste parfait pour les cas simples; la coroutine prend le relais dès qu'il y a une **séquence**.


## Par où commencer?

| Ton jeu a… | Recette recommandée |
|---|---|
| Des plateformes | Double saut |
| De grands espaces | Dash |
| Un thème d'adresse ou de défense | Projectile/cible |
| Une porte, un autel, un rituel | Coroutine de mise en scène |
| Un score et de la compétition | [Leaderboard en ligne (annexe)](./leaderboard-ugs.md) - la plus ambitieuse |

Une seule à la fois, en issue [COULD], commit avant/après. Et le feedback n'est pas optionnel : une capacité sans son ni visuel n'existe pas (cours 9, toujours).
