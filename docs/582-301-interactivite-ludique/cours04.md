# Cours 4

## Contrôles et programmation minimum

Le C# « de survie » : juste assez de programmation pour **comprendre ce que tu copies, modifier ce qu'on te donne, et déboguer sans paniquer**. On ne forme pas des programmeurs en une séance - on forme des intégrateurs qui n'ont pas peur du code.

<!-- ## Déroulement de la séance

| Temps | Activité |
|---|---|
| 0h00 – 0h15 | Retour : état des environnements, questions |
| 0h15 – 1h30 | Théorie : le code comme description de comportements |
| 1h30 – 1h45 | Pause |
| 1h45 – 3h20 | Pratique : premier script, expériences de débogage, réglage du feel |
| 3h20 – 3h35 | Rituel de commit + devoirs | -->


## Théorie

### Pourquoi programmer, si les prefabs existent?

Au cours 2, un prefab t'a donné un personnage complet sans une ligne de code. Alors pourquoi apprendre C#? Parce que les prefabs donnent des comportements **génériques** - et que ton jeu, lui, est **spécifique**. Personne n'a fait de prefab « la porte s'ouvre quand on dépose l'offrande sur l'autel de MON jeu ». Le code, c'est la colle entre les blocs : tu assembleras toujours plus que tu ne créeras, mais la colle, c'est toi.

Un script ne fait qu'une chose : **décrire un comportement**. « Chaque seconde, tourne de 90 degrés. » « Quand le joueur entre ici, joue ce son. » Si tu peux le dire en français, tu peux presque l'écrire en C#.

### Anatomie d'un script

```csharp
using UnityEngine;                      // 1. La boîte à outils Unity

public class MonScript : MonoBehaviour  // 2. Le nom DOIT être identique au fichier
{
    public float vitesse = 5f;          // 3. Variable : visible dans l'Inspector

    void Start()                        // 4. S'exécute UNE fois, au démarrage
    {
        Debug.Log("Le jeu commence!");
    }

    void Update()                       // 5. S'exécute À CHAQUE image (~60x/seconde)
    {
        // C'est ici que vivent le mouvement, la détection des touches...
    }
}
```

1. `using UnityEngine;` → « j'emprunte la boîte à outils Unity » : sans elle, pas de `Debug.Log`, pas de `transform`
2. Le fichier `MonScript.cs` doit contenir `class MonScript` - le moindre écart et Unity refuse de l'attacher (tu vas le vivre tantôt, exprès)
3. Une variable `public` apparaît dans l'**Inspector** : on peut la régler **sans toucher au code**, y compris pendant que le jeu tourne
4. et 5. `Start` = une fois; `Update` = en continu. La moitié des bugs de débutant viennent d'une confusion entre les deux

!!! abstract "Un script est un composant"
    Comme un Collider ou un AudioSource : il ne fait **rien** tant qu'il n'est pas attaché à un GameObject. Un script parfait qui traîne dans un dossier n'exécute jamais rien - 2ᵉ cause de « ça marche pas » chez les débutants.

### Les variables : les boîtes mémoire du jeu

| Type | Contient | Exemples dans un jeu |
|---|---|---|
| `int` | Un entier | vies, nombre de clés, score |
| `float` | Un décimal (suffixe `f`) | vitesse (`4.5f`), volume, gravité |
| `bool` | vrai / faux | `aCle`, `estAuSol`, `partieTerminee` |
| `string` | Du texte | le nom du joueur, un message |

Tout l'état de ton jeu - ce que le joueur a accompli, où il en est - vit dans des variables. La progression du devis? Des `bool` et des `int` qui changent de valeur.

**`public` ou `private`?** `public` = visible dans l'Inspector ET accessible par les autres scripts. `private` = interne. Réflexe simple pour l'instant : les valeurs à régler (vitesse, volume) → `public`; l'état interne (aCle) → `private`.

### Le temps : Update et deltaTime

Ton jeu dessine ~60 images par seconde - mais un vieux portable en dessine 30, et une machine de gamer 144. Si tu écris « avance de 0.1 à chaque Update », ton personnage va **2× plus vite** sur la machine 2× plus rapide. Inacceptable.

La solution : `Time.deltaTime` - le temps écoulé depuis l'image précédente. En multipliant par lui, tu parles en **unités par seconde**, identiques partout :

```csharp
transform.Rotate(0f, 90f * Time.deltaTime, 0f); // 90°/seconde, sur TOUTES les machines
```

Retiens la règle : **tout mouvement dans Update() se multiplie par Time.deltaTime.**

### Les conditions : le jeu entier repose là-dessus

```csharp
if (nbCles >= 3)
{
    OuvrirPorte();
}
else
{
    AfficherMessage("Il manque des cles!");
}
```

| Opérateur | Signifie | Exemple |
|---|---|---|
| `==` | est égal à (⚠️ deux `=`!) | `if (vies == 0)` |
| `>=` `<=` `>` `<` | comparaisons | `if (score >= 100)` |
| `&&` | ET (les deux vraies) | `if (aCle && estDevantPorte)` |
| `\|\|` | OU (au moins une vraie) | `if (vies == 0 \|\| tempsEcoule)` |
| `!` | NON (inverse) | `if (!partieTerminee)` |

*Si le joueur a la clé ET touche la porte, alors ouvre.* Tu reconnais le cours 5 de la semaine prochaine? Tout le gameplay est fait de ces phrases.

### Les méthodes : nommer un bloc d'actions

```csharp
void OuvrirPorte()          // Définir : voici ce que "OuvrirPorte" veut dire
{
    porte.SetActive(false);
    JouerSon();
}

OuvrirPorte();              // Appeler : fais-le maintenant
```

Pourquoi découper en méthodes? Pour **lire** : un script bien découpé se lit comme une recette (« RamasserCle, MettreAJourHUD, VerifierVictoire »). Unity fournit des méthodes-événements qu'il appelle **pour toi** au bon moment :

| Événement | Unity l'appelle… |
|---|---|
| `Start()` | une fois, au démarrage de l'objet |
| `Update()` | à chaque image |
| `OnTriggerEnter(Collider other)` | quand un objet entre dans le trigger (cours 2!) |
| `OnCollisionEnter(Collision c)` | quand un objet solide frappe l'objet |

### La Console : ta lampe de poche

**Window → Panels → Console.** Deux usages :

**1. Voir ce qui se passe** - `Debug.Log("Cle ramassee!");` affiche ton message à l'exécution. C'est l'outil n° 1 de diagnostic : « est-ce que ce code s'exécute? mets un Log dedans. »

**2. Lire les erreurs** - une erreur rouge se lit de gauche à droite :

```
Assets/_Project/Scripts/Tourneur.cs(12,9): error CS1002: ; expected
└──────────── OÙ ─────────────┘└─ ligne 12 ─┘└────── QUOI ──────┘
```

**Double-clique sur l'erreur** : Unity ouvre le fichier à la bonne ligne. L'erreur reine du débutant :

> `NullReferenceException: Object reference not set to an instance of an object`

Traduction : « tu me demandes d'utiliser quelque chose qui n'est **pas branché** ». Cause n° 1 : un champ vide dans l'Inspector (tu as oublié d'y glisser l'objet). Vérifie tes champs avant de vérifier ton code.

!!! info "Réglage à faire une fois"
    Nos projets utilisent le nouveau **Input System** (via Starter Assets). Pour que les exemples simples (`Input.GetKey`) fonctionnent aussi :
    **Edit → Project Settings → Player → Active Input Handling → Both**.


## Pratique

### 1. Ton premier script, sur un objet de test

- [ ] Dans ta scène, crée un Cube nommé `Testeur`, place-le en évidence
- [ ] Dans `_Project/Scripts`, crée le script `Tourneur` et attache-le au Cube :

```csharp
using UnityEngine;

public class Tourneur : MonoBehaviour
{
    public float vitesse = 90f; // degrés par seconde

    void Update()
    {
        transform.Rotate(0f, vitesse * Time.deltaTime, 0f);
    }
}
```

- [ ] ▶️ Play : le cube tourne
- [ ] Change `vitesse` dans l'Inspector **pendant** le Play mode : 10, 500, -90 (négatif!). Observe. C'est comme ça qu'on « trouve » les bonnes valeurs d'un jeu
- [ ] Ajoute `Debug.Log(vitesse);` dans `Update()` → regarde la Console se remplir à 60 messages/seconde → comprends dans ta chair ce qu'est `Update()` → enlève le Log

### 2. Casser des choses (exprès)

Apprendre à lire les erreurs **maintenant**, pendant que le code est simple :

- [ ] Enlève un `;` → lis l'erreur (quoi? où?) → double-clique → répare
- [ ] Renomme la classe `Tourneur2` sans renommer le fichier → constate le refus d'Unity → répare
- [ ] Écris `debug.Log` (minuscule) → lis l'erreur → répare. Leçon : C# est **sensible à la casse**
- [ ] Retiens : **une erreur, ça se lit, ça ne se devine pas**

### 3. Réagir au clavier

- [ ] Modifie `Update()` :

```csharp
void Update()
{
    if (Input.GetKey(KeyCode.E)) // TANT QUE E est enfoncée
    {
        transform.Rotate(0f, vitesse * Time.deltaTime, 0f);
    }
}
```

- [ ] Teste, puis remplace `GetKey` par `GetKeyDown` (UNE fois, à l'appui). Mets un `Debug.Log` dans chaque version et compare dans la Console : la différence saute aux yeux
- [ ] Défi rapide : la touche R remet la rotation à zéro (`transform.rotation = Quaternion.identity;`)

### 4. Le « feel » de TON personnage

Les variables `public`, tu sais maintenant ce que c'est - le contrôleur Starter Assets en est plein :

- [ ] Sélectionne ton personnage et trouve le composant **Third Person Controller** dans l'Inspector
- [ ] Règle une variable à la fois, teste après chaque changement :

| Paramètre | Effet | Pistes selon ton GDD |
|---|---|---|
| **Move Speed** | vitesse de marche | contemplatif : lent · nerveux : rapide |
| **Sprint Speed** | vitesse de course | grand niveau : sprint généreux |
| **Jump Height** | hauteur de saut | ⚠️ recalibre tes métriques du cours 3! |
| **Gravity** | chute | -30 : lourd et sec · -9.8 : flottant |

- [ ] Mets à jour tes **métriques** dans le README si le saut a changé
- [ ] Supprime le Cube `Testeur` (ou désactive-le : il resservira de banc d'essai)

### 5. Le rituel

- [ ] Commit : `Reglage des controles + premiers scripts` → Push

## Devoir

- [ ] Peaufine les contrôles de ton jeu jusqu'à ce que « ça se sente bien » (fais-le tester!)
- [ ] Place 3 `Debug.Log` utiles dans ton projet (ex. : un message quand on entre dans une zone) - on s'en sert au cours 5

## Ressources

* [Documentation Unity : MonoBehaviour](https://docs.unity3d.com/ScriptReference/MonoBehaviour.html)
* [Unity Learn : Beginner Scripting (série officielle, gratuite)](https://learn.unity.com/project/beginner-gameplay-scripting)

## Savoirs essentiels touchés

Environnement de programmation, déplacement dans l'environnement virtuel.
