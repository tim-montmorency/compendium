# Exercice - HUD et feedback de réussite/échec

> Exercice du [cours 8](../cours08.md)

### 1. Le Canvas HUD

- [ ] Dans ta scène `Jeu` : **UI → Canvas**, nomme-le `HUD`
- [ ] **Canvas Scaler → Scale With Screen Size → 1920 × 1080** (le réflexe du cours 6)

### 2. Le compteur

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

    public void Incrementer()       // La porte d'entrée officielle (cours 5, le duo private/public!)
    {
        compte++;
        texte.text = "Cles : " + compte + " / " + objectif;
    }
}
```

**Lecture rapide :** `using TMPro` en haut, sinon le type `TextMeshProUGUI` n'existe pas. La ligne `texte.text = ...` **assemble** du texte avec `+` : nombres et mots se combinent. Et retrouve le patron du cours 5 : état `private`, méthode `public` - c'est partout, c'est voulu.

- [ ] Dans `Cle.cs`, ajoute la référence et l'appel :

```csharp
public CompteurHUD hud; // Glisser l'objet GestionHUD dans l'Inspector
// ...dans OnTriggerEnter, après le son :
hud.Incrementer();
```

- [ ] **Branche tout dans l'Inspector** (le texte dans GestionHUD, GestionHUD dans la clé) → ▶️ le compteur monte à la collecte
- [ ] `NullReferenceException`? Tu sais quoi faire depuis le cours 4 : un champ est vide quelque part

- [ ] **Une icône vaut mille mots** : importe une petite image (clé, gemme…) → Inspector → **Texture Type → Sprite (2D and UI)** → puis **UI → Image** dans le HUD, à gauche du compteur, et assigne ton sprite. `🗝 2/3` se lit encore plus vite que `Cles : 2/3`

### 3. Le feedback d'échec

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
            batantDePorte.SetActive(false); // (animé au cours 9!)
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

### 4. Passe UX

- [ ] Recule ta chaise, plisse les yeux : ton HUD se lit-il en une seconde? Trop petit? Trop d'info?
- [ ] Redimensionne la fenêtre Game (étire-la, écrase-la) : le HUD reste-t-il aux coins? Sinon → ancres
- [ ] Le HUD respecte-t-il ton ambiance (couleurs, typo)? Deux minutes d'accord visuel changent tout

### 5. Le rituel

- [ ] Commit : `HUD + feedback succes/echec` → Push
