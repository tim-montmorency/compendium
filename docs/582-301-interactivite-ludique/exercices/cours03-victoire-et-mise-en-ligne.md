# Exercice - La victoire, le build et la mise en ligne

> Exercice du [cours 3](../cours03.md)

### 1. La zone d'arrivée

- [ ] Clic droit dans la Hierarchy → **3D Object → Cube**. Nomme-le `ZoneVictoire`
- [ ] Place-le à l'endroit que le joueur doit atteindre. Agrandis-le au besoin (++r++)
- [ ] Dans l'Inspector, sur son **Box Collider**, coche **Is Trigger** → le cube ne bloque plus, il détecte
- [ ] Désactive son **Mesh Renderer** → la zone devient invisible
- [ ] Sélectionne ton personnage et vérifie que son **Tag** est `Player` (menu en haut de l'Inspector)

!!! warning "Piège classique"
    Si rien ne se déclenche : 9 fois sur 10, c'est que **Is Trigger** n'est pas coché ou que le tag `Player` n'est pas assigné.

### 2. Le script (fourni)

- [ ] Dans `_Project/Scripts`, clic droit → **Create → MonoBehaviour Script**, nomme-le `ZoneVictoire`
- [ ] Double-clique pour l'ouvrir et remplace tout par :

```csharp
using UnityEngine;
using UnityEngine.SceneManagement; // Donne accès au changement de scène

public class ZoneVictoire : MonoBehaviour
{
    // S'exécute automatiquement quand un objet ENTRE dans le trigger
    private void OnTriggerEnter(Collider other)
    {
        // "other" = l'objet qui vient d'entrer.
        // On vérifie que c'est bien le joueur, pas autre chose.
        if (other.CompareTag("Player"))
        {
            // On charge la scène nommée "Victoire"
            SceneManager.LoadScene("Victoire");
        }
    }
}
```

- [ ] **Lecture guidée en groupe** : tu n'as pas à savoir l'écrire - tu dois pouvoir dire *ce que chaque ligne fait*
- [ ] Glisse le script sur `ZoneVictoire` dans la Hierarchy

### 3. La scène de victoire

- [ ] **File → New Scene** → **Save As** → `Victoire` dans `_Project/Scenes` (le nom doit être **exactement** celui du script)
- [ ] Clic droit dans la Hierarchy → **UI → Text - TextMeshPro** → ton message de victoire (« GG! », à ton goût). Grossis la police, centre le texte
- [ ] *(Optionnel)* Ajoute un fond avec **UI → Panel**
- [ ] Rouvre ta scène `Jeu`

### 4. L'écran titre (le menu minimal)

- [ ] **File → New Scene** → **Save As** → `Titre` dans `_Project/Scenes`
- [ ] **UI → Text - TextMeshPro** : le nom de ton jeu, gros et centré
- [ ] **UI → Button - TextMeshPro** : texte « Jouer »
- [ ] Dans `_Project/Scripts`, crée `MenuManager.cs` :

```csharp
using UnityEngine;
using UnityEngine.SceneManagement;

public class MenuManager : MonoBehaviour
{
    // "public" : pour qu'un bouton puisse appeler cette méthode
    public void AllerAuJeu()
    {
        SceneManager.LoadScene("Jeu");
    }
}
```

- [ ] Crée un GameObject vide `Menu` dans la scène Titre → glisse-lui le script
- [ ] Sélectionne le bouton → Inspector → **On Click ()** → **+** → glisse l'objet `Menu` → **MenuManager → AllerAuJeu()**

!!! warning "Le bouton ne réagit pas?"
    Vérifie que la scène contient bien un **EventSystem** (il est créé automatiquement avec le Canvas - si tu l'as supprimé : **UI → Event System**).

### 5. Relier, tester, compiler

- [ ] **File → Build Profiles** → **Add Open Scenes** pour les trois scènes : `Titre`, `Jeu`, `Victoire` (une scène absente de cette liste ne peut pas être chargée!)
- [ ] Vérifie que `Titre` est en **position 0** (c'est elle qui démarre)
- [ ] ▶️ **Play** depuis `Titre` : Jouer → marche jusqu'à la zone → l'écran de victoire apparaît 🎉
- [ ] **Build** : choisis un dossier `Builds` **à l'extérieur** de `Assets`, attends, puis **lance ton jeu** comme une vraie application

### 6. Mettre le jeu en ligne sur itch.io

- [ ] Compresse ton dossier `Builds` en **.zip**
- [ ] Crée ton compte sur [itch.io](https://itch.io) → menu du profil → **Upload new project**
- [ ] Titre : le nom de ton jeu · **Kind of project : Downloadable** · téléverse ton .zip et coche la bonne plateforme (Windows/Mac)
- [ ] Ajoute une phrase de description et une capture d'écran de ton jeu
- [ ] **Save & view page** : ton jeu a une page web. Mets-la en *Public* si tu veux partager le lien

!!! success "Jalon 0 : tu as fait un jeu"
    Il est minuscule et imparfait, mais il est **complet** : un titre, un objectif, une action, une victoire, un build - et une page sur itch.io, comme les vrais. Échange ton lien avec un voisin et essayez le jeu de l'autre.

### 7. Avant de partir

- [ ] Relis la [grille de remise](../devoirs/jeu-express.md) : tout y est? Ce qui manque se termine en devoir, pour le début du cours 4
