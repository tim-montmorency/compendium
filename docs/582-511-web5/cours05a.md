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

La démo du cours 4.1 s'est arrêtée après l'intention et la complétion en ligne (le prompt en commentaire pour la carte de projet). Voici la suite, celle qui protège réellement votre travail.

| Étape | À utiliser |
|---|---|
| Un changement plus large (renommer, restructurer) | Chat, Agent, avec révision avant d'accepter |
| Comprendre quelque chose de généré | Chat, Ask |
| Après chaque incrément | Commit, avec un message qui décrit le changement |
| Prompts délibérés (pas les complétions) | Documentés dans `JOURNAL.md` |

!!! danger "Le principe reste le même peu importe les boutons"
    Toujours réviser un changement avant de l'accepter. Jamais une action autonome sur plusieurs fichiers sans supervision.

    [:material-swap-horizontal: Ce que vous voyez selon votre poste](ia/modes-copilot-ancien-nouveau.md){ .md-button }
    [:material-github: Paramétrage complet](ia/parametrage-copilot.md){ .md-button }

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

Structure Pomodoro, comme au cours 4.2 : sprints de 25 minutes, objectif précis annoncé au début de chaque sprint, bilan de 2 minutes à la fin.

Choisir une cible par sprint :

- Compléter une section
- Rendre une section responsive
- Harmoniser les composants
- Améliorer la navigation
- Ajouter du contenu manquant

Un commit par composant terminé. Trace de vos prompts dans `JOURNAL.md` au fil de l'atelier, pas à la fin.

## Pause (15 min)

## Mini-pont JS

Pas un cours complet de JavaScript, deux exemples courts pour préparer le bloc 5.2.

**DOM et événements** :

```html
<button id="btnTheme">Changer le thème</button>
```

```javascript
document.querySelector('#btnTheme').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
```

**`fetch` minimal** : charger un `projets.json` statique et afficher une seule valeur, pas encore la boucle de rendu complète.

```javascript
async function chargerProjets() {
  const reponse = await fetch('data/projets.json');
  const projets = await reponse.json();
  console.log(projets[0].titre); // juste pour voir que ça fonctionne
}
chargerProjets();
```

La prochaine étape sera de rendre vos composants interactifs de cette façon, et d'afficher toutes les données plutôt qu'une seule.

## Bilan et engagement

Chacun remplit le formulaire avant de partir (2 minutes, individuel) :

[:material-clipboard-text: Bilan du cours 5.1](https://forms.cloud.microsoft/r/E0pZZbFa9X){ .md-button .md-button--primary :target="_blank" }

Entrée au journal de bord avant de partir.
