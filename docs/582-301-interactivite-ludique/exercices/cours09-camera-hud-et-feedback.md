# Exercice - Caméra, HUD et feedback

> Exercice du [cours 9](../cours09.md)

## Partie 1 - La caméra

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
- [ ] Une **spritesheet** (plusieurs images dans un seul fichier - tu connais le principe du web!) : **Sprite Mode → Multiple** → **Open Sprite Editor** → **Slice → Grid by Cell Size** → Apply. Chaque case devient un sprite individuel (et peut nourrir une animation image par image au cours 10)

## Partie 2 - Les écrans Titre et Fin

Au cours 3, tu as monté un flux Titre → Jeu → Victoire en vitesse, sur ton jeu express. Aujourd'hui, on le monte **pour vrai** sur ton jeu de session : c'est la première et la dernière impression du joueur.

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
- [ ] ▶️ Teste (le clic doit lancer une erreur « scène pas dans le build » - normal, on la règle à l'étape 7!)

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

## Partie 3 - Le HUD et la rétroaction

### 8. Le Canvas HUD

- [ ] Dans ta scène `Jeu` : **UI → Canvas**, nomme-le `HUD`
- [ ] **Canvas Scaler → Scale With Screen Size → 1920 × 1080** (le réflexe, encore)

### 9. Le compteur

- [ ] **UI → Text - TextMeshPro** dans le HUD, nomme-le `CompteurTexte`
- [ ] **Ancre en haut à gauche** (Rect Transform → carré d'ancres) + position à ~30 px des bords
- [ ] Texte de départ : `Cles : 0 / 1` - adapte le mot à ton jeu (gemmes, offrandes, batteries…)
- [ ] Crée `CompteurHUD.cs` sur un GameObject vide `GestionHUD` :

```csharp
using UnityEngine;
using TMPro; // La boîte à outils TextMeshPro : sans elle, pas de TextMeshProUGUI

public class CompteurHUD : MonoBehaviour
{
    public TextMeshProUGUI texte;   // Glisser CompteurTexte ici
    public int objectif = 1;        // Le total à collecter (règle-le dans l'Inspector)
    private int compte = 0;         // L'état : combien on en a (private : protégé)

    public void Incrementer()       // La porte d'entrée officielle (cours 7, le duo private/public!)
    {
        compte++;
        texte.text = "Cles : " + compte + " / " + objectif;
    }
}
```

**Lecture rapide :** `using TMPro` en haut, sinon le type `TextMeshProUGUI` n'existe pas. La ligne `texte.text = ...` **assemble** du texte avec `+` : nombres et mots se combinent. Et retrouve le patron du cours 7 : état `private`, méthode `public` - c'est partout, c'est voulu.

- [ ] Dans `Cle.cs`, ajoute la référence et l'appel :

```csharp
public CompteurHUD hud; // Glisser l'objet GestionHUD dans l'Inspector
// ...dans OnTriggerEnter, après le son :
hud.Incrementer();
```

- [ ] **Branche tout dans l'Inspector** (le texte dans GestionHUD, GestionHUD dans la clé) → ▶️ le compteur monte à la collecte
- [ ] `NullReferenceException`? Tu sais quoi faire depuis le cours 6 : un champ est vide quelque part

- [ ] **Une icône vaut mille mots** : importe une petite image (clé, gemme…) → Inspector → **Texture Type → Sprite (2D and UI)** → puis **UI → Image** dans le HUD, à gauche du compteur, et assigne ton sprite. `🗝 2/3` se lit encore plus vite que `Cles : 2/3`

### 10. Le feedback d'échec

- [ ] **UI → Text - TextMeshPro** dans le HUD : `MessageEchec` (« Il te faut une clé! »), centré, visible… puis **désactive-le** (case en haut de l'Inspector) : il n'apparaîtra que sur un échec
- [ ] Complète `Porte.cs` :

```csharp
public GameObject messageEchec; // Glisser MessageEchec ici
public AudioClip sonEchec;      // Un son sourd, négatif

private void OnTriggerEnter(Collider other)
{
    if (other.CompareTag("Player"))
    {
        if (aCle)
        {
            batantDePorte.SetActive(false); // (animé au cours 10!)
        }
        else
        {
            // L'ÉCHEC A DROIT À SON FEEDBACK, double canal :
            AudioSource.PlayClipAtPoint(sonEchec, transform.position);
            messageEchec.SetActive(true);
            Invoke("CacherMessage", 2f); // Appelle CacherMessage dans 2 secondes
        }
    }
}

private void CacherMessage()
{
    messageEchec.SetActive(false);
}
```

**La nouveauté : `Invoke("NomDeMethode", delai)`** - « appelle cette méthode dans X secondes ». C'est ta première minuterie! Un message qui reste affiché pour toujours est un bug; deux secondes, c'est lu et disparu.

- [ ] ▶️ Teste **les deux chemins** : sans clé → message + son d'échec (et le message disparaît après 2 s); avec clé → ouverture + son de réussite

### 11. Passe UX

- [ ] Recule ta chaise, plisse les yeux : ton HUD se lit-il en une seconde? Trop petit? Trop d'info?
- [ ] Redimensionne la fenêtre Game (étire-la, écrase-la) : le HUD reste-t-il aux coins? Sinon → ancres
- [ ] Le HUD respecte-t-il ton ambiance (couleurs, typo)? Deux minutes d'accord visuel changent tout

### 12. Le rituel

- [ ] Commit : `Camera, flux de scenes, HUD et feedback succes/echec` → Push
