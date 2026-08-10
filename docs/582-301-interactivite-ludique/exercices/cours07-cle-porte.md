# Exercice - Rétro-ingénierie du clé/porte

> Exercice du [cours 7](../cours07.md)

!!! abstract "La méthode d'aujourd'hui"
    On ne part pas de zéro : je te fournis un système **fonctionnel**, tu le fais marcher, tu le **lis** jusqu'à le comprendre, puis tu le **détournes** pour ton jeu. C'est la méthode de travail des studios - et celle du reste de la session.

### 1. Mise en place dans TA scène

- [ ] Place deux prefabs Synty : un objet « clé » (petit, ramassable - au sens de TON jeu : gemme, offrande, batterie…) et un objet « porte » (qui bloque un passage)
- [ ] Sur la **clé** : Box Collider avec **Is Trigger** coché
- [ ] Sur la **porte** : garde son Collider solide (elle bloque!), et ajoute un GameObject **enfant** `ZonePorte` avec un Box Collider **Is Trigger**, un peu plus grand que la porte (c'est lui qui détecte l'approche)
- [ ] Vérifie que ton personnage a le tag **Player**

### 2. Le script de la clé (fourni)

- [ ] Crée `Cle.cs` dans `_Project/Scripts` et attache-le à la clé :

```csharp
using UnityEngine;

public class Cle : MonoBehaviour
{
    public Porte porte; // Référence à la porte que cette clé ouvre (à glisser dans l'Inspector)

    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Player"))
        {
            porte.RecevoirCle();          // On avertit la porte
            gameObject.SetActive(false);  // La clé disparaît (ramassée)
        }
    }
}
```

**Lecture ligne par ligne, ensemble :**

* `public Porte porte;` → une variable dont le type est… l'autre script! C'est comme ça que deux objets **se parlent** dans Unity. Le champ apparaît dans l'Inspector : on y glissera la porte
* `OnTriggerEnter(Collider other)` → Unity appelle cette méthode pour nous; `other` est **l'objet qui vient d'entrer** dans le trigger
* `other.CompareTag("Player")` → le filtre : on ne réagit qu'au joueur
* `porte.RecevoirCle()` → on appelle une méthode **de l'autre script**. La clé ne décide pas d'ouvrir la porte : elle **informe** la porte, qui gère son propre état. Chacun son travail
* `gameObject.SetActive(false)` → l'objet se désactive lui-même : visuellement « ramassé »

### 3. Le script de la porte (fourni)

- [ ] Crée `Porte.cs` et attache-le à `ZonePorte` :

```csharp
using UnityEngine;

public class Porte : MonoBehaviour
{
    public GameObject batantDePorte; // L'objet visuel qui bloque (à glisser dans l'Inspector)
    private bool aCle = false;       // L'ÉTAT : est-ce que le joueur a la clé?

    public void RecevoirCle()        // Appelée par la clé quand elle est ramassée
    {
        aCle = true;
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Player") && aCle)
        {
            batantDePorte.SetActive(false); // Pour l'instant : la porte "disparaît".
                                            // Au cours 10, on l'animera pour vrai.
        }
    }
}
```

**Les deux lignes qui contiennent toute la leçon :**

* `private bool aCle = false;` → voilà **l'état du jeu** de la théorie. `private` : personne d'autre ne peut le modifier directement…
* `public void RecevoirCle()` → …sauf par la porte d'entrée officielle. C'est le duo `private` + méthode `public` : l'état est protégé, l'accès est contrôlé. (Question piège en 3 : pourquoi c'est une bonne idée?)
* `&& aCle` → le « ET » logique : il faut être le joueur **ET** avoir la clé. C'est la ligne qui transforme un déclencheur en **progression**

- [ ] **Branche les références dans l'Inspector** : la porte dans le champ de la clé, le battant dans le champ de la porte
- [ ] ▶️ Teste les deux chemins : sans la clé → la porte bloque; avec la clé → elle s'ouvre

!!! warning "Ça ne marche pas? Le diagnostic en 4 questions"
    1. **Is Trigger** coché sur la clé et sur `ZonePorte`?
    2. Tag **Player** sur le personnage (le parent, celui qui a le CharacterController)?
    3. Les références **glissées dans l'Inspector** (champs non vides)?
    4. Ajoute un `Debug.Log("Cle ramassee!")` dans `RecevoirCle()` → si le message n'apparaît pas, le problème est côté clé; s'il apparaît mais la porte ne s'ouvre pas, il est côté porte. **C'est ça, déboguer : couper le problème en deux.**

### 4. Lire pour comprendre (à écrire dans ton README, section « Notes »)

- [ ] Que se passe-t-il si le joueur touche la porte **avant** la clé, puis revient après l'avoir ramassée? Explique pourquoi ça fonctionne, en citant la ligne responsable
- [ ] Pourquoi `aCle` est-elle `private` mais `RecevoirCle()` est `public`? Que pourrait-il arriver si `aCle` était `public`?
- [ ] Où placerais-tu un `Debug.Log` pour vérifier que la clé a bien été ramassée? Fais-le

### 5. Détourner : à toi de jouer

- [ ] Adapte le patron à **ton** GDD. Mêmes scripts, autre histoire - choisis (ou invente) :

| Variante | Ce qui change dans les scripts |
|---|---|
| Levier → pont qui apparaît | `SetActive(false)` devient `SetActive(true)` sur le pont! |
| Bouton → lumière qui révèle un passage | La « porte » active une Light au lieu de désactiver un mur |
| Offrande déposée → portail actif | Identique au clé/porte, seul l'habillage change |
| 3 gemmes → sortie déverrouillée | Défi : remplace le `bool` par un `int` qui compte (`gemmes++;` puis `if (gemmes >= 3)`) |

- [ ] Crée un **tag custom** `Collectable` (Inspector → Tag → Add Tag → + → puis ASSIGNE-le à ta clé) - il servira quand d'autres objets que le joueur déclencheront des choses
- [ ] Transforme ta clé en **prefab** : glisse `ParentCle` (ou ta clé) dans `_Project/Prefabs` - l'objet devient bleu dans la Hierarchy. Duplique le prefab dans la scène : tu as maintenant un « moule ». Double-clique le prefab pour le modifier : **toutes les copies** se mettent à jour. C'est LE mécanisme de production de Unity
- [ ] Renomme scripts et objets pour qu'ils racontent TON jeu (`Levier.cs`, `Pont.cs`…) - un projet se lit par ses noms
- [ ] **Passe d'affordance** : ta « clé » est-elle visible, contrastée, désirable? Ta « porte » a-t-elle l'air d'une porte (et pas d'un mur décoratif)? Applique la théorie de tantôt

### 6. Le rituel

- [ ] Commit : `Systeme cle/porte fonctionnel` → Push → vérifie sur github.com
