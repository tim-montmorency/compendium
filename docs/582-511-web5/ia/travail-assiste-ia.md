# Le travail assisté par IA

Dans ce cours, l'IA (GitHub Copilot pour le code, Figma pour le design) fait partie de ton environnement de travail. Cette page explique comment l'utiliser de façon professionnelle : vite, mais sans jamais perdre le contrôle de ce que tu livres.

!!! note "L'essentiel en 3 points"
    1. **L'IA change ta vitesse, pas ta responsabilité.** Tu dois pouvoir expliquer et défendre chaque ligne que tu remets.
    2. **Suis la boucle :** intention, générer par petits incréments, comprendre avant d'accepter, tester, commit, documenter.
    3. **Tout usage de l'IA se documente** dans ton journal de bord (`JOURNAL.md`). C'est une exigence, pas une option.

## Le changement de compétence

Avant, une grande partie du métier consistait à mémoriser la syntaxe. Aujourd'hui, la question n'est plus « comment mémoriser la syntaxe », c'est « comment décrire clairement ce que je veux, et reconnaître une bonne réponse ».

Attention au piège : pour juger si une réponse de l'IA est bonne, il faut comprendre les fondations. C'est justement parce que tu connais le HTML, le CSS et le JavaScript que tu peux repérer une erreur, choisir la bonne solution et garder le contrôle du projet. L'IA ne remplace pas cette compréhension, elle la met à profit.

## Quatre moments où vous pouvez utiliser l'IA pour vous accompgner

L'IA n'est pas utile qu'au moment d'écrire du code. Elle intervient à quatre moments distincts.

### 1. Planifier

Avant d'écrire une ligne, tu décris ce que tu veux construire et tu laisses l'IA proposer une structure et un plan.

```text
« Application web pour gérer des tâches :
ajouter, modifier, filtrer, sauvegarder dans localStorage.
Génère la structure de fichiers et les étapes de réalisation. »
```

L'IA te répond avec une arborescence de projet, une liste de fonctions à écrire et souvent des cas limites auxquels tu n'avais pas pensé. Tu gardes ce qui est pertinent, tu écartes le reste.

### 2. Générer

À partir d'une intention claire (un nom de fonction, un commentaire décrivant l'effet voulu), Copilot complète le code. Ici, un exemple avec Anime.js, que tu connais déjà :

```js
// animation Anime.js : une carte qui entre en glissant par la gauche
anime({
  targets: '.carte',
  translateX: [-200, 0],
  opacity: [0, 1],
  duration: 600,
  easing: 'easeOutQuad'
});
```

Plus ton intention est précise (le commentaire, le nom de la fonction), meilleure est la suggestion.

### 3. Déboguer

C'est souvent l'usage le plus rentable au quotidien. Tu colles un message d'erreur et tu le fais expliquer dans son contexte.

```text
TypeError: Cannot read property 'value' of undefined
« Explique cette erreur dans mon code JavaScript. »
```

L'IA identifie la cause probable (par exemple, un `querySelector` qui retourne `null` parce que l'élément n'existe pas encore) et propose un correctif. Tu comprends l'erreur au lieu de la contourner à l'aveugle.

### 4. Réviser

Tu demandes comment simplifier ou améliorer un code qui fonctionne déjà. L'IA agit alors comme un pair programmeur.

```js
// Avant
const actifs = users.filter(u => {
  return u.active === true;
});

// Après
const actifs = users.filter(u => u.active);
```

La question posée : « Comment simplifier ce code ? ». Tu apprends une meilleure façon d'écrire, pas juste un raccourci.

## La boucle de travail

Peu importe le moment, la même boucle s'applique. Elle se répète pour chaque petit morceau que tu construis.

1. **Intention et critères.** Avant de demander quoi que ce soit, sache ce que tu veux obtenir et à quoi ressemble un bon résultat. Une demande floue donne une réponse floue.
2. **Générer par incréments.** Une petite portion à la fois, jamais une fonctionnalité complète d'un coup. Plus le morceau est petit, plus il est facile à vérifier.
3. **Lire et comprendre avant d'accepter.** Si tu ne peux pas expliquer une ligne, tu ne l'acceptes pas. C'est la règle centrale de ce cours.
4. **Tester.** Vérifie chaque incrément avant de passer au suivant. C'est un lien direct avec le contrôle de la qualité (015Q).
5. **Commit.** Fais des commits petits et fréquents, avec des messages clairs. Ton historique Git raconte ta démarche.
6. **Documenter.** Note dans `JOURNAL.md` ce qui a été généré par IA, pourquoi, et ce que tu as modifié.

## La règle non négociable

!!! warning "Si tu ne comprends pas une ligne, tu ne l'acceptes pas."
    Le code que tu livres, tu dois pouvoir l'expliquer. L'IA se trompe, parfois beaucoup : ton travail est de repérer ses erreurs, pas de lui faire une confiance aveugle.

Cette règle n'est pas qu'un principe moral, elle est vérifiée. Au cours de la session, tu auras à expliquer et à modifier ton propre code en direct. Un code que tu ne comprends pas devient impossible à défendre, à corriger et à faire évoluer.

## Frontière d'usage : Copilot et Figma

Chaque outil a son territoire.

| Outil | Usage | Où |
|---|---|---|
| **GitHub Copilot** | Code : écrire, compléter, corriger | VS Code |
| **Figma (et Figma Make)** | Design : explorer, diverger, prototyper | Figma |

Le code que tu remets est écrit et compris par toi. L'IA est un soutien, pas un remplacement. Du côté design, l'IA sert à explorer des directions rapidement, mais c'est toi qui juges, tries et finalises.

<!-- Section intégrité : intégrée ici par défaut. Peut devenir une page-sujet distincte si tu préfères. -->
## Intégrité intellectuelle et usage encadré de l'IA

L'IA est permise dans ce cours, mais son usage doit être **transparent et documenté**. Ne pas le faire est considéré comme du plagiat.

Concrètement, tout contenu généré par une IA doit être cité en mentionnant :

- le **nom et la version** de l'IA utilisée;
- la **requête** (le prompt) utilisée pour générer le contenu.

Pour le code, c'est ton `JOURNAL.md` qui tient ce rôle. Une entrée typique :

```markdown
## 2026-08-28 : navigation du portfolio

- **Généré avec :** GitHub Copilot
- **Intention :** menu qui se referme au clic à l'extérieur
- **Prompt :** « ferme le menu quand on clique en dehors de .menu »
- **Ce que j'ai modifié :** ajout d'une vérification pour le clavier (touche Échap),
  renommé la fonction pour la cohérence avec le reste du code.
- **Ce que j'ai compris :** l'écouteur est posé sur `document`, puis on teste si la
  cible du clic est contenue dans le menu.
```

Ce réflexe te protège (tu démontres ta démarche) et il reflète les pratiques professionnelles : en entreprise aussi, on trace ce qui vient de l'IA.

---

**Pour la mise en place des outils**, voir les procédures d'installation :

- [Guide GitHub Education + Copilot Pro + VS Code](ia/Guide_GitHub_Education_Copilot.md)
- [Guide Figma Éducation](ia/Guide_Figma_Education.md)
