# Annexe - Leaderboard en ligne (Unity Gaming Services)

Un **classement mondial des scores**, en ligne, partagé entre tous les joueurs de ton jeu - y compris sur ta page itch.io. C'est le genre de fonctionnalité qui transforme « mon petit jeu » en « mon jeu auquel mes amis rejouent pour me battre ».

!!! warning "Positionnement dans le cours"
    **Hors devis, hors cahier des charges** : issue [COULD], à tenter seulement quand tes [MUST] sont finis, et jamais après le gel du cours 14. Prérequis : être à l'aise avec les cours 6-7-9 (scripts, références, HUD). C'est la recette la plus ambitieuse du cours - mais elle utilise le service **officiel** de Unity, gratuit à notre échelle, et elle fonctionne en WebGL.

**Le concept :** ton jeu envoie le score à Unity Cloud (le serveur de Unity); n'importe quelle copie du jeu peut ensuite lire le classement. Contrairement à `PlayerPrefs` (cours 11) qui sauvegarde **localement** (sur l'appareil du joueur), le leaderboard vit **en ligne**, partagé.


## Étape 1 - Configuration dans Unity Cloud (Dashboard)

- [ ] Dans Unity 6 : **Edit → Project Settings → Services** → lie ton projet à ton compte Unity (le même que ta licence étudiante)
- [ ] Ouvre le [Unity Cloud Dashboard](https://cloud.unity.com) dans ton navigateur et sélectionne ton projet
- [ ] Dans le menu, active **Authentication** et **Leaderboards**
- [ ] Section Leaderboards → **Create Leaderboard**
- [ ] Donne-lui un nom et note son **Leaderboard ID** (ex. : `classement_global`) - c'est la clé que ton code utilisera
- [ ] Réglage recommandé à la création : *Sort Order* décroissant (meilleur score en premier) et *Update Type : Keep Best* (on garde le meilleur score de chaque joueur)

## Étape 2 - Installer les packages

- [ ] **Window → Package Manager → Unity Registry** : installe **Authentication** et **Leaderboards** (`com.unity.services.authentication`, `com.unity.services.leaderboards`)

## Étape 3 - Envoyer le score (C#)

- [ ] Crée `UnityLeaderboardManager.cs` sur un GameObject vide `Leaderboard` :

```csharp
using UnityEngine;
using Unity.Services.Core;
using Unity.Services.Authentication;
using Unity.Services.Leaderboards;

public class UnityLeaderboardManager : MonoBehaviour
{
    private string leaderboardId = "classement_global"; // L'ID créé sur le Dashboard

    async void Start()
    {
        // 1. Initialiser les services Unity
        await UnityServices.InitializeAsync();

        // 2. Connecter le joueur anonymement (requis par UGS)
        if (!AuthenticationService.Instance.IsSignedIn)
        {
            await AuthenticationService.Instance.SignInAnonymouslyAsync();
            Debug.Log("Joueur connecte, ID : " + AuthenticationService.Instance.PlayerId);
        }
    }

    // À appeler à la victoire / au game over, ex. : leaderboard.SubmitScore(monScore);
    public async void SubmitScore(int score)
    {
        try
        {
            var reponse = await LeaderboardsService.Instance
                              .AddPlayerScoreAsync(leaderboardId, score);
            Debug.Log("Score envoye : " + reponse.Score);
        }
        catch (System.Exception e)
        {
            Debug.LogError("Erreur d'envoi : " + e.Message);
        }
    }
}
```

**Les nouveautés à lire sans paniquer :** `async` / `await` = « cette opération parle à Internet, ça prend du temps - attends la réponse sans geler le jeu ». Le `try / catch` = « si Internet échoue, affiche l'erreur au lieu de planter ». Deux concepts d'un vrai code réseau professionnel - tu viens d'y goûter.

- [ ] Optionnel, un pseudo au lieu d'un ID anonyme : après la connexion, `await AuthenticationService.Instance.UpdatePlayerNameAsync("PseudoDuJoueur");` (branche-le sur un champ de saisie TMP pour laisser le joueur choisir)

## Étape 4 - Afficher le classement DANS le jeu (la bonne méthode)

Pas besoin de site web : le même SDK sait **lire** les scores. Sur ton écran de fin, un texte TMP `ClassementTexte`, et :

```csharp
using Unity.Services.Leaderboards;
using TMPro;

public TextMeshProUGUI classementTexte; // Glisser ClassementTexte ici

public async void AfficherClassement()
{
    var scores = await LeaderboardsService.Instance.GetScoresAsync(leaderboardId);

    string affichage = "TOP SCORES\n";
    foreach (var entree in scores.Results)
    {
        affichage += (entree.Rank + 1) + ". " + entree.PlayerName
                   + " - " + entree.Score + "\n";
    }
    classementTexte.text = affichage;
}
```

- [ ] Appelle `AfficherClassement()` à l'arrivée sur la scène Fin (dans un `Start()`), teste avec 2-3 scores envoyés
- [ ] Teste ensuite **dans le build WebGL sur itch.io** : c'est là que la magie opère - deux navigateurs différents, un seul classement


## Étape 5 (défi expert, facultatif) - Lire les scores depuis une page web externe

Tu veux afficher le classement sur un site web **hors du jeu** (ton portfolio, par exemple)? C'est possible via l'API REST de Unity… mais c'est le territoire des compromis :

!!! danger "Deux vrais problèmes à comprendre avant de te lancer"
    1. **Clé exposée** : une clé d'API placée dans du JavaScript frontal est visible par quiconque inspecte ta page. Si tu le fais quand même : crée la clé dans **Service Accounts** avec les droits **lecture seule** sur les Leaderboards, rien d'autre.
    2. **Jeton périssable** : les jetons d'accès Unity **expirent** (environ une heure). Un jeton collé en dur dans ton JS cessera de fonctionner rapidement - la vraie solution est un petit serveur qui régénère le jeton, ce qui dépasse ce cours (et rejoint tes cours de web!).

Le squelette, pour l'exploration :

```js
// Infos du Dashboard Unity Cloud
const projectId = "TON_PROJECT_ID";
const environmentId = "TON_ENVIRONMENT_ID"; // souvent "production"
const leaderboardId = "classement_global";
const accessToken = "TON_JETON_LECTURE_SEULE"; // Service Accounts - expire!

const url = `https://leaderboards.services.api.unity.com/v1/projects/${projectId}/environments/${environmentId}/leaderboards/${leaderboardId}/scores`;

async function fetchLeaderboard() {
  try {
    const response = await fetch(url, {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    });
    if (!response.ok) throw new Error(`Erreur API : ${response.status}`);

    const data = await response.json();
    data.results.forEach((joueur, i) => {
      console.log(`#${i + 1} - ${joueur.playerName} : ${joueur.score} pts`);
    });
  } catch (erreur) {
    console.error("Impossible de recuperer le leaderboard :", erreur);
  }
}

fetchLeaderboard();
```

Remarque au passage : ce `fetch` / `async` / `try-catch` en JavaScript est **exactement** la même structure que ton C# de l'étape 3. Les langages changent, les patrons restent - c'est la vraie leçon de cette annexe.


## Le feedback, toujours

Un score envoyé en silence n'existe pas (cours 9!) : confirme l'envoi à l'écran (« Score publié! »), affiche le rang obtenu, et célèbre un top 3 avec ton juice du cours 13.
