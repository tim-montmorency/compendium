# Cours 13

## Production - capsule Publication en ligne

Ton jeu s'en va sur Internet - jouable **dans le navigateur**, sans téléchargement, par n'importe qui, n'importe où. C'est le format de remise du projet final, et accessoirement la première pièce de ton portfolio.

<!-- ## Déroulement de la séance

| Temps | Activité |
|---|---|
| 0h00 – 0h45 | Capsule : WebGL, itch.io, crédits et licences |
| 0h45 – 1h15 | ⏳ Lancement du premier build WebGL (long - on le part AVANT la pause!) |
| 1h15 – 1h30 | Pause (pendant que ça compile) |
| 1h30 – 3h20 | Production (issues) + mise en ligne du build de test |
| 3h20 – 3h35 | Rituel de commit | -->


## Capsule - Publier son jeu

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

Au cours 2, tu as téléversé un zip téléchargeable. Cette fois, on vise la page pro :

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

Rappel des licences croisées au cours 7 : **CC0** (usage libre) · **CC-BY** (libre AVEC crédit obligatoire - l'oublier est une violation de licence, pas un oubli). C'est dans la grille du projet final, c'est la loi (droit d'auteur), et c'est le standard de l'industrie. Un studio qui ne trace pas ses licences s'expose à des poursuites; un étudiant qui les trace se démarque en entrevue.

### En survol (optionnel) : sauvegarder des données

`PlayerPrefs` retient une valeur **entre deux sessions** - un meilleur score, un volume choisi :

```csharp
PlayerPrefs.SetInt("MeilleurScore", 12);          // Écrire
int record = PlayerPrefs.GetInt("MeilleurScore"); // Lire (0 si la clé n'existe pas)
```

Hors devis : une issue **[COULD]**, pas une exigence. (Fonctionne aussi en WebGL - la donnée vit dans le navigateur.)

Et la version ligue majeure - un **classement en ligne partagé entre tous les joueurs** - est documentée en annexe : [Leaderboard en ligne (UGS)](./extra/leaderboard-ugs.md). Réservée aux [MUST]-finis.

## Mise en ligne du build de test

- [ ] Vérifie le module Web (Unity Hub) et la compression (**Gzip + Decompression Fallback**)
- [ ] **File → Build Profiles → Web → Switch Platform** (⏳ la conversion prend quelques minutes)
- [ ] **Build** dans un dossier `BuildsWeb` hors de `Assets` → ⏳ **lance-le et passe en production pendant l'attente**
- [ ] Zippe le **contenu** du dossier de build → sur itch.io : nouvelle page (ou réutilise celle du jeu de session) → mode **HTML** → téléverse → coche « played in browser » → viewport 1280 × 720
- [ ] **Teste dans le navigateur** : chargement, jeu, son. Puis fais-le tester par un voisin depuis SON poste
- [ ] Garde la page en **Draft/Restricted** : elle devient publique à la remise finale

## Production

- [ ] Issues **Must** d'abord - il en reste combien? C'est le moment de le savoir précisément
- [ ] Commit de fin de séance : `Production S13 : premier build web en ligne` → Push

## Devoir

- [ ] Rédige la version quasi finale de ta page itch.io : description avec contrôles, captures, **crédits complets**
- [ ] Mets ton `README.md` au niveau : concept, boucle, moodboard, crédits - il sera lu pour la grille

## Ressources

* [Documentation Unity : Web (WebGL)](https://docs.unity3d.com/Manual/webgl.html)
* [itch.io : Uploading HTML5 games (guide officiel)](https://itch.io/docs/creators/html5)

## Savoirs essentiels touchés

Compilation de l'application (export web).
