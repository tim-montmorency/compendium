# Cours 14

## Production - tests par les pairs et gel des fonctionnalités

Avant-dernière séance : on teste sérieusement, on corrige, on publie un build de validation. Ton jeu doit être **complet** aujourd'hui - la semaine qui reste sert à polir, pas à finir.

<!-- ## Déroulement de la séance

| Temps | Activité |
|---|---|
| 0h00 – 0h30 | Capsule : l'art du playtest |
| 0h30 – 1h15 | Test croisé structuré, ronde 1 |
| 1h15 – 1h30 | Pause |
| 1h30 – 2h00 | Test croisé structuré, ronde 2 |
| 2h00 – 3h20 | Tri des retours + correctifs + build web de validation |
| 3h20 – 3h35 | Rituel de commit | -->


## Capsule - L'art du playtest

### Tu es aveugle à ton propre jeu

Après 12 semaines dessus, tu sais où est la clé, tu connais le chemin optimal, tu évites les bugs par réflexe **sans même le savoir**. C'est la *malédiction de la connaissance* : impossible de dé-savoir ce qu'on sait. Un nouveau joueur, lui, arrive vierge - et voit ton jeu tel qu'il est vraiment.

C'est pour ça que les studios testent sans relâche : Valve fait jouer des inconnus **chaque semaine** depuis Half-Life, et réécrit ses niveaux d'après ce qu'ils font (pas ce qu'ils disent). Le playtest n'est pas un contrôle qualité de fin de chaîne - c'est un instrument de design.

### La règle d'or : observer en silence

Quand quelqu'un teste ton jeu : **tais-toi**. Pas d'indice, pas de « c'est par là », pas de « attends, ça c'est pas fini ». Chaque intervention **masque un problème réel** - que le jury et les joueurs d'itch.io, eux, rencontreront sans toi à côté.

Ce qu'on observe (les actes) vaut plus que ce qu'on demande (les mots) : les testeurs sont polis, ils disent « c'est cool! » - mais leurs 40 secondes d'errance devant ta porte, elles, ne mentent pas. D'où le protocole :

1. **Avant** : rien. Pas d'explication. (Ton jeu doit s'expliquer seul - affordance, guidage, HUD : tout le cours y a travaillé)
2. **Pendant** : note en silence - où il va, où il hésite, ce qu'il essaie, sa tête
3. **Après** : trois questions seulement - « Raconte-moi ce que tu as compris de l'objectif » · « Où as-tu hésité? » · « Qu'est-ce que tu aurais aimé pouvoir faire? »

### Trier le feedback : le problème est vrai, la solution rarement

Règle des studios : quand un testeur dit « vous devriez ajouter une minicarte », le **problème** est réel (il s'est perdu), la **solution** proposée est rarement la bonne (la tienne : mieux guider - cours 11). Note le problème, décide toi-même du remède.

| Retour reçu | Nature | Action |
|---|---|---|
| Bug bloquant, objectif incompris | 🔴 Critique | Issue **[MUST]**, corrigée aujourd'hui |
| Amélioration claire, peu coûteuse | 🟡 Utile | Issue **[COULD]** « si le temps » |
| « Moi j'aurais fait un jeu différent » | ⚪ Opinion | Merci - et c'est tout. C'est TON jeu |

!!! warning "Gel des fonctionnalités (*feature freeze*)"
    À partir d'aujourd'hui : **on ne rajoute plus de systèmes - on répare et on polit.** C'est une pratique universelle de l'industrie, et la raison est mécanique : toute fonctionnalité ajoutée peut casser trois choses qui marchaient (une *régression*), et il ne reste plus de temps pour s'en apercevoir. Une fonctionnalité de dernière minute, c'est un bug livré au jury. Les issues [COULD] non commencées se ferment en « pas cette fois » - sans regret : *un petit jeu fini* était le plan depuis le cours 3.

### Où investir la dernière semaine (le polish payant)

| Investissement | Coût | Impact perçu |
|---|---|---|
| Corriger les bugs de collision (murs traversables, chutes hors carte) | Moyen | Énorme - un seul bug détruit la confiance |
| Sons manquants (actions encore muettes) | Faible | Grand |
| Écrans Titre/Fin soignés | Faible | Grand - première et dernière impression |
| Fautes d'orthographe dans les textes | Trivial | Réel (le jury lit tout) |
| Une mécanique de plus | Élevé | **Négatif** (voir feature freeze) |


## Activités

### 1. Test croisé structuré (2 rondes)

Ton jeu est testé par **2 pairs différents**; toi-même tu testes 2 jeux. Protocole de la capsule : silence, observation, 3 questions à la fin.

- [ ] Prépare ta grille avant la ronde 1 :

| Observation | Testeur 1 | Testeur 2 |
|---|---|---|
| A-t-il compris l'objectif sans aide? | | |
| Où a-t-il hésité ou bloqué? | | |
| Qu'a-t-il fait que tu n'avais pas prévu? | | |
| Bugs rencontrés | | |
| Sa réponse à « raconte-moi ce que tu as compris » | | |

- [ ] Ronde 1 : teste et fais tester. **En silence.** Remplis la grille
- [ ] Ronde 2 : nouveau duo, même protocole
- [ ] Quand tu testes : joue **naïvement** - ne devine pas ce que l'autre a voulu faire, fais ce que son jeu te suggère

### 2. Trier les retours

- [ ] Passe ta grille au tableau de tri de la capsule : critique → issue [MUST] du jour · utile → [COULD] · opinion → merci
- [ ] Les deux testeurs ont bloqué **au même endroit**? Ce n'est pas eux, c'est le jeu. Priorité absolue

### 3. Correctifs et build de validation

- [ ] Corrige les critiques, dans l'ordre
- [ ] Nouveau build web → téléverse sur ta page itch.io (toujours en privé)
- [ ] **Teste la page depuis un autre poste que le tien** - le vrai test de la vraie remise

### 4. Le rituel

- [ ] Commit : `Build de validation apres playtests` → Push

## Devoir

- [ ] Correctifs finaux issus des tests
- [ ] Finalise ta page itch.io : description + contrôles, captures, **crédits complets**, README à jour
- [ ] Prépare ta présentation de 3 minutes (structure au [cours 15](./cours15.md)) - répète-la une fois à voix haute, chrono en main

## Ressources

* [Valve : le playtesting comme méthode de design (GDC, en anglais)](https://www.youtube.com/results?search_query=valve+playtesting+gdc)
