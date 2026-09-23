# Cours 5.1
<!-- mer. 23 sept. -->

## Aujourd'hui

- [ ] Recentrage : où en êtes-vous?
- [ ] La boucle IA, la suite (Agent, révision, Ask, commit, journal)
- [ ] Mini-exercice : à vous d'essayer
- [ ] Grand atelier de production (Pomodoro)
- [ ] Mini-pont JS : DOM, événements, `fetch`
- [ ] Bilan et engagement

!!! danger "Rattrapage : si vous n'avez pas eu le cours 4.2"
    Le cours 4.2 (panne d'électricité) n'a pas eu lieu pour votre groupe. Deux choses à rattraper par vous-même avant ou pendant l'atelier d'aujourd'hui :

    [:material-view-grid: Interface responsive adaptable à la largeur de l'écran](cours04b.md#interface-responsive-adaptable-a-la-largeur-de-lecran){ .md-button :target="_blank" }

    - **Comment démarrer un composant** : choisir un composant non commencé, coller le frame Figma dans Copilot, écrire l'intention, générer le HTML par petits incréments, nommer selon BEM, générer le CSS, tester, commit.

## Recentrage

Le défi n'est plus de produire des pages isolées. Le défi est maintenant de terminer un portfolio cohérent, intégrable et présentable pour la bêta du **2 octobre**.

Tour de table rapide :

- Où en est votre portfolio?
- Quel est votre principal blocage?
- Qu'est-ce qu'il vous manque pour être prêt le 2 octobre?

## La boucle IA, la suite

La démo du cours 4.1 s'est arrêtée après l'*intention* et la *complétion en ligne* (le prompt en commentaire pour la carte de projet). 

Voici la suite :

| Étape | À utiliser |
|---|---|
| Un changement global (renommer, restructurer) | Chat, Agent, avec révision avant d'accepter |
| Comprendre quelque chose de généré | Chat, Ask |
| Après chaque incrément | Commit, avec un message qui décrit le changement |
| Prompts délibérés (pas les auto-complétions) | Documentés dans `JOURNAL.md` |

!!! danger "Le principe reste le même peu importe les boutons"
    Toujours réviser un changement avant de l'accepter. Jamais une action autonome sur plusieurs fichiers sans supervision.

    [:material-swap-horizontal: Ce que vous voyez selon votre poste](ia/modes-copilot-ancien-nouveau.md){ .md-button }
    [:material-github: Paramétrage complet](ia/parametrage-copilot.md){ .md-button }

### Consulter votre design, et en garder une trace

1. Dans Figma, activer le **Dev Mode** (icône `</>` en haut à droite).
2. Sélectionner le calque du composant (ex. une carte de projet), pas la page complète.
3. **Export → PNG**, à 1x (pas besoin de plus, ce n'est pas un asset final).
4. Enregistrer dans `exports-composants/`, nommé comme le composant (ex. `carte-projet.png`).
5. Joindre ce fichier au chat Copilot, avec votre intention en texte à côté.

!!! tip "Committez ce dossier normalement"
    Ça garde une trace datée de ce que vous aviez sous les yeux en générant chaque composant, utile pour vous, et pour moi si jamais on en discute ensemble.

**En direct** : reprendre la carte de projet là où la démo du 4.1 s'est arrêtée. Renommer ses classes selon BEM avec Agent (réviser le diff), poser une question en Ask sur une ligne CSS, commit, puis écrire l'entrée `JOURNAL.md` correspondante devant vous.

## Mini-exercice : à vous d'essayer (15 min)

Individuellement, sur votre propre portfolio, un petit changement qui couvre les quatre utilisations qu'on vient de voir :

1. Choisir une petite modification sur un composant déjà commencé (renommer une classe, ajuster une propriété, corriger un détail).
2. La demander via **Agent**, réviser le diff avant d'accepter.
3. Poser une question en **Ask** sur une ligne du résultat que vous ne comprenez pas encore.
4. **Commit**.
5. Écrire l'entrée **`JOURNAL.md`** correspondante.

Je circule pendant l'exercice pour valider que chacun a bien vu les quatre étapes, pas seulement fait un changement.

## Grand atelier de production

Structure Pomodoro, comme au cours 4.2 :

- sprints de 25 minutes, objectif précis annoncé au début de chaque sprint, bilan de 2 minutes à la fin.
- pause 5 min
- et on repart

Choisir un objectif spécifique par sprint :

- Compléter une section
- Créer un nouveau composant (spécifier le composant)
- Rendre une section responsive
- Harmoniser les composants
- Améliorer la navigation
- Ajouter du contenu manquant

Un commit par composant ou section terminé. Trace de vos prompts dans `JOURNAL.md` au fil de l'atelier, pas à la fin.


## Mini-pont JS


**DOM et événements** :

```html
<button id="btnTheme">Changer le thème</button>
```

```javascript
document.querySelector('#btnTheme').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
```

---


**`fetch` minimal** : charger un `projets.json` statique ou faire un appel API à une base de données externe. Puis afficher une seule valeur (titre) dans la console. Deux syntaxes possibles, selon celle que vous avez déjà vue :

**Avec `async`/`await`**

```javascript
async function chargerProjets() {
  const reponse = await fetch('data/projets.json');
  const projets = await reponse.json();
  console.log(projets[0].titre); // juste pour voir que ça fonctionne
}
chargerProjets();
```

**Avec `.then()`**

```javascript
fetch('data/projets.json')
  .then(reponse => reponse.json())
  .then(projets => {
    console.log(projets[0].titre); // juste pour voir que ça fonctionne
  });
```

Les deux font exactement la même chose. Utilisez celle avec laquelle vous êtes le plus à l'aise.

La prochaine étape sera de rendre vos composants interactifs de cette façon, et d'afficher toutes les données plutôt qu'une seule.

## Bilan et engagement

Chacun remplit le formulaire avant de partir (2 minutes, individuel) :

[:material-clipboard-text: Bilan du cours 5.1](https://forms.cloud.microsoft/r/E0pZZbFa9X){ .md-button .md-button--primary :target="_blank" }

Entrée au journal de bord avant de partir.

## Devoir

### Portfolio

Terminer l'intégration HTML/CSS de votre portfolio d'ici vendredi (cours 5.2), afin que toute la classe puisse commencer le JavaScript et les animations sans que la structure de base soit encore à finir.

Concrètement, avant vendredi :

- Toutes les sections et tous les composants de votre portfolio sont codés en HTML sémantique et stylés en CSS (desktop, la passe mobile viendra plus tard).
- Nomenclature BEM respectée, un composant à la fois, comme vu jusqu'à maintenant.
- Commits réguliers, poussés sur votre dépôt GitHub.
- `JOURNAL.md` à jour avec vos prompts Copilot de la semaine.

!!! danger "Si vous arrivez vendredi avec du HTML/CSS inachevé"
    Vous allez devoir rattraper cette partie en parallèle du JS et des animations, ce qui rend les deux plus difficiles à suivre. Utilisez l'atelier d'aujourd'hui et le temps autonome d'ici vendredi en conséquence.


