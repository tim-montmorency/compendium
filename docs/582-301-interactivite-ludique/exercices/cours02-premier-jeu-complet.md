# Exercice - Un jeu complet en une séance

> Exercice du [cours 2](../cours02.md)

## Pratique guidée 1/2 - Le monde et le personnage

### 1. Créer le projet

- [ ] Unity Hub → **New project** → gabarit **Universal 3D** (URP)
- [ ] Nom : `JeuExpress` - emplacement : un dossier **sans accents ni espaces**, PAS dans OneDrive/Google Drive
- [ ] **Create project** (c'est long la première fois, c'est normal)
- [ ] Dans la fenêtre **Project**, crée l'arborescence vue en théorie (`_Project` avec `Scenes`, `Scripts`, etc., et `Plugins`)

### 2. Importer le POLYGON Sampler Pack

- [ ] Le pack doit être lié à ton compte Unity (sinon : [page de l'asset](https://assetstore.unity.com/packages/3d/props/polygon-sampler-pack-207048) → **Add to My Assets**)
- [ ] **Window → Package Manager → My Assets** → *POLYGON Sampler Pack* → **Download**, puis **Import** (laisse tout coché)
- [ ] Range le dossier importé dans `Plugins`
- [ ] Ouvre la **scène démo** du pack et explore-la 2 minutes : voilà ce qu'on peut construire avec

!!! warning "Tout est rose?!"
    Des matériaux **magenta** = des matériaux non convertis pour URP. Sélectionne les matériaux du pack, puis
    **Edit → Rendering → Materials → Convert Selected Built-in Materials to URP**. On le fait ensemble.

### 3. Construire ton mini-monde

- [ ] **File → New Scene** → sauvegarde-la sous `Jeu` dans `_Project/Scenes`
- [ ] Clic droit dans la Hierarchy → **3D Object → Plane** : ton sol. Agrandis-le (échelle 5-5-5)
- [ ] Depuis le dossier Synty, **glisse-dépose** des prefabs : bâtiments, arbres, clôtures, accessoires
- [ ] Compose un **petit parcours** : un point de départ, un chemin, un endroit d'arrivée évident
- [ ] Classe tes objets de décor dans des **GameObject Empty** bien nommés (bonne pratique vue au cours 1)

!!! tip "Pense « terrain de jeu », pas « diorama »"
    Ton monde doit se **parcourir** : laisse des passages assez larges, évite de tout coller. Tu le testeras dans 10 minutes.

### 4. Un personnage jouable, sans code

- [ ] **Window → Package Manager → Unity Registry** → cherche **Starter Assets - ThirdPerson** (Unity Technologies, gratuit) → **Install**
- [ ] Dans le dossier importé, trouve le prefab complet du joueur (avec sa caméra) et glisse-le dans ta scène
- [ ] ▶️ **Play** : déplace-toi (++w++/++a++/++s++/++d++), saute (++space++), oriente la caméra à la souris
- [ ] Ajuste ton monde en alternant Play et édition : trous, obstacles trop hauts, passages trop étroits

!!! abstract "Prends deux secondes"
    Déplacement, gravité, saut, caméra, animations - **fournis par un prefab**. C'est ça, un moteur de jeu : on assemble d'abord, on programme ensuite. Au cours 4, tu apprendras ce qu'il y a dedans.

## Pratique guidée 2/2 - La victoire, le build, la mise en ligne

### 5. La zone d'arrivée

- [ ] Clic droit dans la Hierarchy → **3D Object → Cube**. Nomme-le `ZoneVictoire`
- [ ] Place-le à l'endroit que le joueur doit atteindre. Agrandis-le au besoin (++r++)
- [ ] Dans l'Inspector, sur son **Box Collider**, coche **Is Trigger** → le cube ne bloque plus, il détecte
- [ ] Désactive son **Mesh Renderer** → la zone devient invisible
- [ ] Sélectionne ton personnage et vérifie que son **Tag** est `Player` (menu en haut de l'Inspector)

!!! warning "Piège classique"
    Si rien ne se déclenche plus tard : 9 fois sur 10, c'est que **Is Trigger** n'est pas coché ou que le tag `Player` n'est pas assigné.

### 6. Le script (fourni)

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

### 7. La scène de victoire

- [ ] **File → New Scene** → **Save As** → `Victoire` dans `_Project/Scenes` (le nom doit être **exactement** celui du script)
- [ ] Clic droit dans la Hierarchy → **UI → Text - TextMeshPro** → ton message de victoire (« GG! », à ton goût). Grossis la police, centre le texte
- [ ] *(Optionnel)* Ajoute un fond avec **UI → Panel**
- [ ] Rouvre ta scène `Jeu`

### 8. Relier, tester, compiler

- [ ] **File → Build Profiles** → **Add Open Scenes** pour `Jeu`, puis ouvre `Victoire` et ajoute-la aussi (une scène absente de cette liste ne peut pas être chargée!)
- [ ] Vérifie que `Jeu` est en position 0 (c'est elle qui démarre)
- [ ] ▶️ **Play** : marche jusqu'à la zone → l'écran de victoire apparaît 🎉
- [ ] **Build** : choisis un dossier `Builds` **à l'extérieur** de `Assets`, attends, puis **lance ton jeu** comme une vraie application

### 9. Mettre le jeu en ligne sur itch.io

- [ ] Compresse ton dossier `Builds` en **.zip**
- [ ] Crée ton compte sur [itch.io](https://itch.io) → menu du profil → **Upload new project**
- [ ] Titre : le nom de ton jeu · **Kind of project : Downloadable** · téléverse ton .zip et coche la bonne plateforme (Windows/Mac)
- [ ] Ajoute une phrase de description et une capture d'écran de ton jeu
- [ ] **Save & view page** : ton jeu a une page web. Mets-la en *Public* si tu veux partager le lien

!!! success "Jalon 0 : tu as fait un jeu"
    Il est minuscule et imparfait, mais il est **complet** : un objectif, une action, une victoire, un build - et une page sur itch.io, comme les vrais. Échange ton lien avec un voisin et essayez le jeu de l'autre.
