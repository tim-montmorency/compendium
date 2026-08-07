# Exercice - Premiers scripts et contrôles

> Exercice du [cours 4](../cours04.md)

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
