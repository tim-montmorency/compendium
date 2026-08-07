# Exercice - Caméra, scènes et menu

> Exercice du [cours 6](../cours06.md)

### 1. Raffiner la caméra de TON jeu

- [ ] Sélectionne la caméra virtuelle Cinemachine de ton personnage (cherche « vcam » ou « PlayerFollowCamera » dans la Hierarchy)
- [ ] Règle la **distance** et la **hauteur** - vise le feel de ton GDD (proche = tension, loin = contemplation). Une valeur à la fois, teste en Play
- [ ] Joue avec le **damping** : essaie 0 (rigide), puis une valeur élevée (flottante). Garde ce qui sert ton ambiance
- [ ] Vérifie dans TON niveau : la caméra passe-t-elle à travers des murs? entre-t-elle dans des espaces serrés? Ajuste ou élargis les passages (métriques!)

### 2. Configuration 2D orthographique (exploration obligatoire - devis!)

- [ ] Crée une nouvelle caméra : clic droit Hierarchy → **Camera**, nomme-la `Camera2D`, désactive temporairement l'autre
- [ ] Dans l'Inspector : **Projection → Orthographic**
- [ ] Place-la au-dessus de ton niveau, pointée vers le bas (Rotation X = 90)
- [ ] Joue avec **Size** : petit = zoom serré, grand = plan large. C'est la configuration caméra 2D du devis
- [ ] Ton jeu serait-il meilleur en vue de dessus? Sérieusement - certains concepts oui! Sinon, supprime `Camera2D` et réactive ta caméra 3ᵉ personne

**Images 2D : sprites et spritesheets.** Si ton jeu est en vue 2D (ou pour tes images d'interface) :

- [ ] Importe une image dans `_Project/Art` → Inspector → **Texture Type → Sprite (2D and UI)** → Apply. Elle devient utilisable dans le monde 2D et dans les Canvas
- [ ] Une **spritesheet** (plusieurs images dans un seul fichier - tu connais le principe du web!) : **Sprite Mode → Multiple** → **Open Sprite Editor** → **Slice → Grid by Cell Size** → Apply. Chaque case devient un sprite individuel (et peut nourrir une animation image par image au cours 9)


### 3. La scène Titre

- [ ] **File → New Scene** → sauvegarde sous `Titre` dans `_Project/Scenes`
- [ ] **UI → Canvas** → **Canvas Scaler → Scale With Screen Size → 1920 × 1080**
- [ ] **UI → Text - TextMeshPro** : le titre de ton jeu - gros, centré
- [ ] **Ta propre police (Google Fonts)** - la police par défaut crie « projet étudiant »; la tienne porte ton ambiance :
    1. [fonts.google.com](https://fonts.google.com) → choisis une police accordée à ton moodboard → **Download** → extrais le `.ttf`
    2. Importe le `.ttf` dans `_Project/Art/Fonts`
    3. **Window → TextMeshPro → Font Asset Creator** → **Source Font File** : ton `.ttf` → **Generate Font Atlas** → **Save** dans le même dossier
    4. Sélectionne ton texte TMP → **Font Asset** : ta nouvelle police
    5. Note la police dans tes **crédits** (les polices ont aussi des licences - celles de Google Fonts sont libres)
- [ ] **UI → Button - TextMeshPro** : texte « Jouer »
- [ ] Habillage : un **Panel** de fond aux couleurs de ton moodboard, ou une capture de ton niveau en image de fond

### 4. Le script de menu (fourni)

- [ ] Crée `MenuManager.cs` dans `_Project/Scripts` :

```csharp
using UnityEngine;
using UnityEngine.SceneManagement;

public class MenuManager : MonoBehaviour
{
    // "public" : pour que les boutons puissent appeler ces méthodes
    public void AllerAuJeu()
    {
        SceneManager.LoadScene("Jeu");
    }

    public void AllerAuTitre()
    {
        SceneManager.LoadScene("Titre");
    }

    public void Quitter()
    {
        Application.Quit();     // Ne fonctionne que dans un build...
        Debug.Log("Quitter!");  // ...d'où ce Log pour tester dans l'éditeur
    }
}
```

**Lecture rapide :** trois méthodes `public void` - aucune magie, chacune une action de menu. Remarque `Application.Quit()` : dans l'éditeur, impossible de « quitter le jeu » - le Log est notre preuve que le bouton marche. Réflexe de pro : toujours un moyen de vérifier.

- [ ] GameObject vide `Menu` dans la scène Titre → attache le script
- [ ] Sélectionne le bouton « Jouer » → Inspector → **On Click ()** → **+** → glisse l'objet `Menu` → menu déroulant → **MenuManager → AllerAuJeu()**
- [ ] ▶️ Teste (le clic doit lancer une erreur « scène pas dans le build » - normal, on la règle à l'étape 6!)

!!! warning "Bouton qui ne réagit pas? Diagnostic en 3 points"
    1. La scène contient-elle un **EventSystem**? (il vient avec le Canvas - si tu l'as supprimé, recrée-le : UI → Event System)
    2. La méthode est-elle branchée dans **On Click ()** (pas « No Function »)?
    3. Un autre élément UI (Panel plein écran!) bloque-t-il le clic? Coche/décoche **Raycast Target** sur les éléments décoratifs

### 5. La scène Fin

- [ ] Nouvelle scène `Fin` : message de victoire + deux boutons - « Rejouer » (`AllerAuJeu`) et « Menu » (`AllerAuTitre`) - même recette, même `MenuManager`
- [ ] Dans ta scène `Jeu` : ta condition de victoire charge maintenant `Fin` (adapte ta ZoneVictoire/porte finale)

### 6. Bonus sans code : le panneau Crédits

- [ ] Dans la scène Titre : **UI → Panel**, nomme-le `PanneauCredits`, écris tes crédits dedans (TMP) → **désactive-le**
- [ ] Bouton « Crédits » → **On Click ()** → glisse `PanneauCredits` → **GameObject → SetActive** → coche la case (= true)
- [ ] Dans le panneau, un bouton « Fermer » → même recette, case décochée (= false)
- [ ] ▶️ Ouvre, ferme. **Zéro script.** Retiens le patron : événement → objet → action, tout dans l'Inspector

### 7. Relier et tester le flux complet

- [ ] **File → Build Profiles** → ajoute les 3 scènes : `Titre` (position 0!), `Jeu`, `Fin`
- [ ] ▶️ Depuis `Titre` : Jouer → gagner → Rejouer → gagner → Menu. Le tour complet, deux fois, sans accroc
- [ ] Bonus : un bouton « Quitter » au titre (il ne fera rien dans l'éditeur - c'est prévu, tu sais pourquoi)

### 8. Le rituel

- [ ] Commit : `Flux de scenes complet : titre, jeu, fin` → Push
