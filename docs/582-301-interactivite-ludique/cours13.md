# Cours 13

## Production - publier en ligne, puis donner du jus

Deux capsules aujourd'hui, dans cet ordre pour une raison très pratique : **un build web prend 10 à 20 minutes**. On règle la publication en premier, on lance le build - et on parle de *game feel* pendant que ça compile.

<!-- ## Déroulement de la séance

| Temps | Activité |
|---|---|
| 0h00 – 0h30 | Capsule 1 : WebGL, itch.io, crédits et licences |
| 0h30 – 0h40 | ⏳ Lancement du premier build WebGL (on le part MAINTENANT) |
| 0h40 – 1h30 | Capsule 2 : game feel, post-processing, transitions (pendant que ça compile) |
| 1h30 – 1h45 | Pause |
| 1h45 – 2h15 | Applications express : l'éclat + le bloom |
| 2h15 – 3h20 | Production (issues) + mise en ligne du build de test |
| 3h20 – 3h35 | Rituel de commit | -->


## Capsule 1 - Publier son jeu


### Pourquoi publier (vraiment)

Un jeu que personne ne peut essayer n'existe pas tout à fait. Publier, c'est : (1) un **lien** à mettre dans un portfolio, un CV, une conversation - « j'ai fait un jeu » devient vérifiable en un clic; (2) du **feedback réel**, de gens qui ne sont pas dans le cours; (3) la petite peur de montrer son travail - qui est exactement le muscle que ce programme t'entraîne à développer. *Ship it.*

### WebGL : ton jeu devient une page web

Unity peut compiler ton jeu pour le **navigateur** : le code est traduit en WebAssembly, le rendu passe par WebGL. Résultat : un dossier de fichiers web à téléverser - et plus aucune barrière entre ton jeu et le monde.

Ce qu'il faut savoir :

* **Module requis** : Unity Hub → Installs → ⚙️ → **Add modules → Web Build Support** (à vérifier MAINTENANT, l'installation prend du temps)
* **C'est long** : 10 à 20 minutes par build. Stratégie : lance le build, va faire autre chose (d'où le déroulement de la séance!)
* **C'est plus lourd à charger qu'un .exe** : chaque Mo compte - voir l'encadré d'optimisation
* **Le piège n° 1** : la compression. Configure **Project Settings → Player → Web → Publishing Settings → Compression Format → Gzip** et coche **Decompression Fallback**. Sans ça : écran noir chez une partie des joueurs, selon le serveur. C'est LE bug classique de la remise - règle-le aujourd'hui

!!! tip "Trois réflexes pour un build web plus léger"
    1. **L'audio** : ta musique en `.ogg`, pas en `.wav` de 40 Mo
    2. **Les textures** : le pack Synty est déjà optimisé - n'importe pas 15 packs « au cas où »
    3. **Le grand ménage** : supprime de `Assets` ce que tu n'utilises pas (scènes de test, assets essayés puis abandonnés)

### La page itch.io, version projet final

Au cours 3, tu as téléversé un zip téléchargeable. Cette fois, on vise la page pro :

* **Kind of project : HTML** - le jeu se joue **dans la page**
* Téléverse le **zip du dossier de build web** entier et coche « **This file will be played in the browser** »
* **Viewport dimensions** : la résolution d'affichage (1280 × 720 est un bon défaut)
* Une vraie page : 2-3 **captures d'écran**, une description courte (ton pitch de GDD : le concept en 2 phrases + les **contrôles**), un thème de couleurs accordé à ton ambiance (Edit theme)

Anatomie d'une bonne description de page :

```markdown
[Une phrase d'accroche : le concept]
[Une phrase : l'objectif du joueur]

## Contrôles
WASD - se déplacer · Espace - sauter · Souris - caméra

## Crédits
[voir section suivante]
```

### Crédits et licences : obligatoire, légal, professionnel

Ta page ET ton README citent **tous les médias externes** - chaque son, musique ou image qui ne vient ni de toi ni du pack Synty :

> *Titre - Auteur - Source (lien) - Licence*

Rappel des licences croisées au cours 8 : **CC0** (usage libre) · **CC-BY** (libre AVEC crédit obligatoire - l'oublier est une violation de licence, pas un oubli). C'est dans la grille du projet final, c'est la loi (droit d'auteur), et c'est le standard de l'industrie. Un studio qui ne trace pas ses licences s'expose à des poursuites; un étudiant qui les trace se démarque en entrevue.

### En survol (optionnel) : sauvegarder des données

`PlayerPrefs` retient une valeur **entre deux sessions** - un meilleur score, un volume choisi :

```csharp
PlayerPrefs.SetInt("MeilleurScore", 12);          // Écrire
int record = PlayerPrefs.GetInt("MeilleurScore"); // Lire (0 si la clé n'existe pas)
```

Hors devis : une issue **[COULD]**, pas une exigence. (Fonctionne aussi en WebGL - la donnée vit dans le navigateur.)

Et la version ligue majeure - un **classement en ligne partagé entre tous les joueurs** - est documentée en annexe : [Leaderboard en ligne (UGS)](./extra/leaderboard-ugs.md). Réservée aux [MUST]-finis.

## Capsule 2 - Game feel

Prends deux jeux identiques en mécaniques. Dans le premier, ramasser une pièce la fait disparaître en silence. Dans le second, elle **éclate en particules**, le compteur *pop*, un *ding* satisfaisant retentit. Même code, même design - le second est « meilleur ». Cet écart a un nom : le **game feel**, ou « juice ».


### Pourquoi ça marche

Le cerveau adore les réponses **immédiates, multiples et légèrement exagérées** à ses actions. C'est du feedback (cours 9) poussé au niveau sensoriel : non seulement je *sais* que l'action a réussi, mais je le *ressens*. C'est le prolongement direct de l'agentivité - le monde ne se contente pas de répondre, il **célèbre**.

📺 *Les deux classiques du sujet (à voir absolument) :* [Juice it or lose it (conférence, 15 min)](https://www.youtube.com/watch?v=Fy0aCDmgnxg) - la démonstration en direct d'un Breakout qui passe de morne à jouissif - et [Secrets of Game Feel (GMTK)](https://www.youtube.com/watch?v=216_5nu4aVQ).

<div class="grid grid-1-2" markdown>
![Anger Foot](./assets/img/games/anger-foot.jpg){data-zoom-image}

[Anger Foot (2024)](https://store.steampowered.com/app/1978590/Anger_Foot/) : chaque porte défoncée déclenche particules, secousse, sons percutants. Le jeu entier est construit sur la satisfaction sensorielle d'une seule action. Le juice n'est pas un vernis, c'est un pilier de design.
</div>

### La boîte à outils

| Outil | Effet | Coût |
|---|---|---|
| **Particules** | Éclat à la collecte, poussière au pas, halo sur l'objectif | Faible - l'outil du jour |
| **Screen shake** | Micro-secousse sur un impact : le monde « encaisse » | Faible, ⚠️ à doser |
| **Squash & stretch** | L'objet s'écrase/s'étire (cours 10!) : la vie | Moyen |
| **Pop d'échelle** | Le compteur qui grossit brièvement quand il change | Faible |
| **Hitstop** | Micro-pause de quelques millisecondes à l'impact : le poids | Faible |
| **Couches sonores** | Un grand moment = 2-3 sons superposés (impact + récompense) | Faible |
| **Pitch aléatoire** | Chaque répétition du son varie légèrement : jamais mécanique | Trivial (2 lignes!) |

Le pitch aléatoire, cadeau immédiat - dans n'importe quel son répété :

```csharp
// Au lieu d'un PlayClipAtPoint direct, sur une AudioSource :
source.pitch = Random.Range(0.9f, 1.1f); // Entre -10% et +10% à chaque fois
source.PlayOneShot(sonPas);
```

### Le Particle System en 5 réglages

**GameObject → Effects → Particle System.** Le module a 30 sections; 5 font 90 % du travail :

| Réglage | Rôle |
|---|---|
| **Looping** | En continu (fontaine) ou une rafale (explosion)? Décoche pour une rafale |
| **Start Lifetime** | Durée de vie de chaque particule (0.5–1 s pour un éclat) |
| **Start Speed** | Vitesse d'éjection |
| **Start Color** | LA couleur de ton effet - accorde-la à l'objet |
| **Emission → Bursts** | « 20 particules d'un coup au temps 0 » : l'éclat type |

!!! warning "Le dosage - et l'accessibilité"
    Le juice **amplifie ce qui compte** : si TOUT tremble et éclate, plus rien n'a d'importance - et tu fatigues le joueur. Garde tes gros effets pour tes grands moments. Attention aussi à l'accessibilité : flashs rapides (photosensibilité) et screen shake intense (nausée) doivent rester modestes. Les studios offrent des options pour les désactiver; toi, reste simplement raisonnable.

!!! question "Discussion (3 min)"
    Pourquoi le *hitstop* (geler le jeu 3 centièmes de seconde à l'impact) donne-t-il une sensation de **poids**? Qu'est-ce que ça dit de la perception du temps par le joueur?

### Le post-processing : le filtre Instagram de ton jeu

Le **post-processing** applique des effets à l'image entière, après le rendu - c'est ce qui sépare visuellement un prototype d'un jeu « fini ». Dans URP, tout passe par un **Volume** :

* **Bloom** : les zones lumineuses « débordent » - combiné à un material émissif (cours 12), ton cristal rayonne pour vrai
* **Vignette** : assombrit les bords - concentre le regard, ambiance instantanée
* **Color Adjustments** : teinte globale, contraste, saturation - l'humeur de ton moodboard appliquée à l'image

Mise en place (une fois) : Hierarchy → **Volume → Global Volume** → bouton **New** (Profile) → **Add Override** → choisis tes effets. Vérifie que ta caméra a **Post Processing** coché. C'est tout - et c'est réversible : le Volume se désactive d'un clic.

!!! warning "La main légère"
    Le post-processing est un condiment : un bloom subtil transforme; un bloom à fond aveugle. Règle, recule, compare avec/sans (la case du Volume). Si on « voit l'effet » avant de voir le jeu, c'est trop.

### Les transitions de scène en douceur

Un changement de scène sec (coupure brute) fait amateur; un **fondu au noir** de une demi-seconde fait produit fini. La recette sans grand code :

1. Dans chaque scène : un Canvas `Fondu` avec une **Image noire plein écran** (ancres étirées aux 4 coins) - **Raycast Target décoché** (sinon elle bloque tes boutons!)
2. Une animation `FonduEntree` (alpha 1 → 0, ~0.5 s) jouée automatiquement à l'arrivée (état par défaut de l'Animator)
3. Pour la sortie, le duo que tu connais déjà - une animation `FonduSortie` (alpha 0 → 1) + `Invoke` :

```csharp
using UnityEngine;
using UnityEngine.SceneManagement;

public class FonduDeScene : MonoBehaviour
{
    public Animator animFondu;      // L'Animator de l'image noire
    private string sceneCible;

    public void ChangerScene(string nom)   // Remplace tes LoadScene directs
    {
        sceneCible = nom;
        animFondu.Play("FonduSortie");     // L'écran devient noir...
        Invoke("Charger", 0.5f);           // ...puis on charge (durée = celle du clip)
    }

    private void Charger()
    {
        SceneManager.LoadScene(sceneCible);
    }
}
```

Tout est déjà connu : Animator (cours 10), Invoke (cours 9), LoadScene (cours 9). Le game feel, c'est souvent juste tes acquis, mieux orchestrés.

## Production

Compiler en WebGL, régler la compression, téléverser sur itch.io - puis l'éclat de collecte, le post-processing, et production sur tes issues.

[Exercice - Publication web et game feel :material-arrow-right:](./exercices/cours13-publication-et-game-feel.md){ .md-button .md-button--primary }

## Devoir

* Rédige la version quasi finale de ta page itch.io : description avec contrôles, captures, **crédits complets**
* Mets ton `README.md` au niveau : concept, boucle, moodboard, crédits - il sera lu pour la grille
* Poursuivre tes issues

## Ressources

* [Documentation Unity : Web (WebGL)](https://docs.unity3d.com/Manual/webgl.html)
* [itch.io : Uploading HTML5 games (guide officiel)](https://itch.io/docs/creators/html5)
* [Juice it or lose it (la conférence culte)](https://www.youtube.com/watch?v=Fy0aCDmgnxg)
* [Secrets of Game Feel (GMTK)](https://www.youtube.com/watch?v=216_5nu4aVQ)
* [Documentation Unity : Particle System](https://docs.unity3d.com/Manual/class-ParticleSystem.html)

## Savoirs essentiels touchés

Compilation de l'application (export web).
