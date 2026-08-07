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

C'est pour ça que les studios testent sans relâche : Valve fait jouer des inconnus **chaque semaine** depuis Half-Life, et réécrit ses niveaux d'après ce qu'ils font (pas ce qu'ils disent). Le playtest n'est pas un contrôle qualité de fin de chaîne - c'est un instrument de design. Après la sortie, la **télémétrie** prend le relais : les données de jeu réelles (où les joueurs meurent, où ils bloquent, ce qu'ils ignorent) guident les ajustements.

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

Deux rondes de test croisé en silence, tri des retours, correctifs et build web de validation.

[Exercice - Tests par les pairs et correctifs :material-arrow-right:](./exercices/cours14-playtests.md){ .md-button .md-button--primary }

## Devoir

* Correctifs finaux issus des tests
* Finalise ta page itch.io : description + contrôles, captures, **crédits complets**, README à jour
* Prépare ta présentation de 3 minutes (structure au [cours 15](./cours15.md)) - répète-la une fois à voix haute, chrono en main

## Ressources

* [Valve : le playtesting comme méthode de design (GDC, en anglais)](https://www.youtube.com/results?search_query=valve+playtesting+gdc)
