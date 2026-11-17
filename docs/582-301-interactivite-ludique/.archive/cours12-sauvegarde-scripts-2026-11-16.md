<!-- Retiré du cours 12 (582-301) le 2026-11-16 : scripts maison gardés pour le cours de VR (582-401) -->

## La sauvegarde

La case **Persistent** des Variables du CES (cours 3) utilise déjà `PlayerPrefs`. Dans un script maison, c'est `PlayerPrefs` qu'il faut appeler directement.

`PlayerPrefs` associe une **clé** à une **valeur** (`int`, `float` ou `string`) et survit à la fermeture du jeu. Sur le Web, la sauvegarde reste dans le navigateur; l'éditeur et le build ont chacun la leur.

```c#
PlayerPrefs.SetInt("MeilleurScore", 42);
PlayerPrefs.SetString("DernierNiveau", "Zone2");
PlayerPrefs.Save();                                   // Écrit tout de suite

int record = PlayerPrefs.GetInt("MeilleurScore", 0);  // 0 si la clé n'existe pas
if (PlayerPrefs.HasKey("DernierNiveau")) { /* partie à continuer */ }

PlayerPrefs.DeleteKey("MeilleurScore");
PlayerPrefs.DeleteAll();
```

!!! warning "Trois pièges"
    - Sans `Save()`, un plantage ou un onglet fermé fait tout perdre
    - Une faute de frappe dans une clé ne donne **aucune erreur** : la clé va dans une constante
    - Pour tester comme un nouveau joueur : **Edit > Clear All PlayerPrefs**

### La progression

On sauvegarde le **niveau** atteint : le joueur reprend au début de ce niveau.

```c# title="Progression.cs"
using UnityEngine;
using UnityEngine.SceneManagement;

public class Progression : MonoBehaviour
{
    const string CLE = "DernierNiveau";

    [Tooltip("Coché dans les niveaux, décoché dans l'accueil")]
    public bool enregistrerCetteScene = true;

    [Tooltip("Accueil seulement : caché s'il n'y a pas de sauvegarde")]
    public GameObject boutonContinuer;

    void Start()
    {
        if (enregistrerCetteScene)
        {
            PlayerPrefs.SetString(CLE, SceneManager.GetActiveScene().name);
            PlayerPrefs.Save();
        }

        if (boutonContinuer != null)
            boutonContinuer.SetActive(PlayerPrefs.HasKey(CLE));
    }

    public void Continuer()
    {
        SceneManager.LoadScene(PlayerPrefs.GetString(CLE));
    }

    public void NouvellePartie(string premierNiveau)
    {
        PlayerPrefs.DeleteKey(CLE);
        SceneManager.LoadScene(premierNiveau);
    }
}
```

| Scène | Montage |
|---|---|
| **Chaque niveau** | Objet vide `Progression`, **Enregistrer Cette Scene** coché |
| **Accueil** | Objet vide `Progression`, case décochée, bouton **Continuer** glissé dans le champ. **On Click** : Continuer → `Continuer`, Jouer → `NouvellePartie` (nom de la première scène) |
| **Fin** et **Crédits** | Aucun `Progression` coché |

### Le meilleur score

Le score vient du script `Resource` du [cours 7](./cours07.md#ressources).

```c# title="MeilleurScore.cs"
using UnityEngine;
using UnityEngine.Events;
using TMPro;

public class MeilleurScore : MonoBehaviour
{
    const string CLE = "MeilleurScore";

    public Resource ressource;            // Vide dans l'écran de fin
    public TMP_Text texteRecord;          // Facultatif
    public string format = "Record : {0}";
    public UnityEvent onNouveauRecord;

    void Start() => Afficher();

    // Appelé par le CES (Invoke Events) à la victoire
    public void Comparer()
    {
        int score = ressource.Amount;
        if (score > PlayerPrefs.GetInt(CLE, 0))
        {
            PlayerPrefs.SetInt(CLE, score);
            PlayerPrefs.Save();
            onNouveauRecord.Invoke();
        }
        Afficher();
    }

    void Afficher()
    {
        if (texteRecord != null)
            texteRecord.text = string.Format(format, PlayerPrefs.GetInt(CLE, 0));
    }
}
```

1. Dernier niveau : objet `MeilleurScore`, l'objet `Resource` glissé dans **Ressource**
1. CES de la victoire : **Invoke Events** > **MeilleurScore.Comparer ()**, **avant** le changement de scène
1. Scène **Fin** : un autre `MeilleurScore`, **Ressource** vide, un texte dans **Texte Record**

!!! example "Meilleur temps"
    `GetFloat` / `SetFloat`, défaut `9999f`, et `<` au lieu de `>`.

