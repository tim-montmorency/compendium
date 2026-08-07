# Exercice - Tranche verticale et plan de production

> Exercice du [cours 10](../cours10.md)

### 1. Intégration et rattrapage

- [ ] Passe la checklist du cahier des charges **honnêtement**, item par item, en jouant à ton jeu
- [ ] Tout item manquant devient ta priorité **immédiate** - les notes des cours 3 à 9 sont tes références, et je suis là
- [ ] Item bloqué depuis plus de 15 minutes? Lève la main **aujourd'hui** : c'est LA séance de déblocage

### 2. Test croisé : les deux passes

Trente minutes, avec un pair **différent** de celui du Jalon 1. Imprime ou ouvre la [fiche d'observation](../extra/heuristiques.md#la-fiche-dobservation-jalon-2) : douze items, une colonne « ce que j'ai vu ».

**Pourquoi deux passes plutôt qu'une?** Parce que la recherche en UX de jeu montre que la grille et l'observation trouvent des problèmes **différents**, avec très peu de recoupement. Sur quatre jeux commerciaux, l'évaluation par grille a trouvé 43 problèmes d'accessibilité contre 22 pour le test utilisateur - mais le test utilisateur a trouvé 185 problèmes de jouabilité contre 47. Faire une seule des deux, c'est rater la moitié des problèmes de ton jeu.

#### Passe 1 - la grille (12 min)

- [ ] Va au poste de ton pair et joue à **son** jeu, la fiche à côté
- [ ] Tu cherches **activement** des violations : recommence, fouille, fais exprès de mal jouer
- [ ] Toute ligne « Violée » exige une **preuve** : ce que tu as vu, et à quel moment. « Menu : violé » n'aide personne; « au 3e essai je cherchais encore comment recommencer après ma mort » se corrige en dix minutes
- [ ] Termine par les trois questions de sortie : meilleur moment, plus grosse friction, la seule chose à corriger

#### Passe 2 - l'observation silencieuse (12 min)

Ton pair revient à **ton** poste et joue à **ton** jeu. Tu le regardes.

!!! danger "Tu n'as pas le droit de parler"
    Pas d'indice. Pas de « clique là ». Pas de « ah oui ça, c'est un bug, normalement… ». Pas de soupir.

    Chaque fois que tu as envie d'intervenir, **note le moment et ce qu'il était en train de faire**. Cette liste-là, c'est ta liste de problèmes.

    Le jour de la remise, tu ne seras pas assis à côté du joueur.

- [ ] Note aussi : où il hésite, ce qu'il essaie qui ne marche pas, ce qu'il rate complètement
- [ ] Ne défends pas ton jeu. Ne l'explique pas. Observe

#### Restitution (6 min)

- [ ] Récupère ta fiche remplie par ton pair **et** tes propres notes d'observation
- [ ] Compare les deux listes : tu verras qu'elles ne se recoupent presque pas - c'est exactement le but
- [ ] Chaque point devient une issue dans 30 minutes : `[MUST]` si le jeu est incompréhensible sans, `[SHOULD]` sinon

### 3. Présentation éclair (45 secondes)

- [ ] Ta tranche verticale **en direct** : du titre à la victoire, devant la classe. C'est court, c'est stressant, c'est exactement l'exercice - au cours 15, ce sera 3 minutes et tu seras prêt

### 4. Le plan de production

- [ ] Sur github.com → ton dépôt → onglet **Issues** → **New issue**
- [ ] Transforme ta liste du devoir + les retours du test en issues : une tâche par issue, préfixe `[MUST]`, `[SHOULD]` ou `[COULD]` dans le titre
- [ ] Minimum requis : **toutes tes tâches Must sont des issues.** C'est ton contrat avec toi-même - et ta gestion de production fait partie de la grille du projet final
- [ ] Vérifie l'équation : nombre de Must ≤ ce qui se fait en ~3 séances (souviens-toi : × 2)

### 5. Build et remise

- [ ] Compile, lance le build, vérifie (son inclus!)
- [ ] Commit : `Jalon 2 : tranche verticale` → Push
- [ ] Remets le build selon la consigne
