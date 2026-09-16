# Paramétrage GitHub Copilot

Ce guide fixe une base commune de paramétrage, pour que tout le monde parte du même pied. Certains réglages sont **obligatoires** (ils protègent l'intégrité de votre démarche ou l'originalité de votre code), d'autres sont **recommandés** (ils rendent Copilot plus utile sans risque particulier).

!!! info "Ce guide suppose que Copilot est déjà activé"
    Si ce n'est pas encore fait, voir d'abord le guide d'activation.

    [:material-github: Activer GitHub Copilot (plan Student)](Guide_GitHub_Education_Copilot.md){ .md-button :target="_blank" }

---

## 1. Dans VS Code, panneau Copilot

Cliquer sur l'icône **Copilot** en bas à droite de VS Code pour ouvrir ce panneau.

### Suggestions inline

!!! danger "Obligatoire : Suggestions de texte fantôme → activé"
    C'est la complétion en ligne de base, celle qu'on utilise pour générer par petits incréments. Doit rester active.

!!! danger "Obligatoire : Suggestions de texte fantôme pour Markdown → désactivé"
    `JOURNAL.md` et `PLANIFICATION.md` sont vos mots, pas des textes à faire complèter par l'IA. Si Copilot vous souffle vos propres réflexions pendant que vous documentez votre usage de l'IA, ça vide l'exercice de son sens. Décocher cette case précisément pour protéger ça.

!!! tip "Recommandé : Suggestions de prochaine modification → activé"
    Prédit votre prochain changement logique (pas juste la ligne suivante). Utile, faible risque, aucune raison de le désactiver.

!!! tip "Recommandé : Eagerness → Auto"
    Contrôle à quel point Copilot propose des suggestions de façon proactive. Le réglage par défaut convient pour ce cours.

### Le reste du panneau

- **Codebase Semantic Index** : optionnel. Utile sur un gros projet pour que Copilot comprenne l'ensemble du code, pas nécessaire pour la taille d'un portfolio.
- **Session Sync** : pas nécessaire pour ce cours, laisser tel quel.

---

## 2. Sur [github.com/settings/copilot/features](https://github.com/settings/copilot/features)

!!! danger "Obligatoire : Suggestions matching public code → Block"
    Ce réglage compare vos suggestions à environ 150 caractères de code public sur GitHub. Si un match est trouvé, la suggestion n'est simplement pas montrée. Ça évite de vous retrouver, sans le savoir, avec du code copié d'un dépôt sous licence dans votre portfolio. Question d'intégrité, pas juste de style.

    Marche à suivre : profil → **Settings** → **Copilot** → **Features**, section **Privacy**, menu déroulant **Suggestions matching public code** → **Block**.

---

## 3. Dans le chat Copilot : quel mode utiliser pour le portfolio

L'interface a changé récemment, voici ce qu'on y trouve vraiment (pas ce que les articles en ligne en disaient il y a deux semaines). Dans la vue Chat, trois boutons empilés en bas contrôlent le comportement, en plus du choix de base :

1. **Le mode de base** : **Ask** ou **Agent**. Ask ne touche jamais vos fichiers, il répond seulement. Agent peut agir sur votre code.
2. **Le style de travail** (une fois en Agent) : **Interactif** (étape par étape, votre accord à chaque fois), **Plan** (planifie d'abord, exécute quand vous êtes prêt), **Autopilot** (travaille de façon autonome selon les permissions).
3. **Les permissions** : **Manual permissions** (demande votre approbation) ou **Allow all** (exécute sans demander).

!!! danger "Obligatoire pour le portfolio : Agent + Interactif + Manual permissions"
    Restez sur cette combinaison. C'est l'équivalent de l'ancien « mode Edit » qu'on cherchait : des changements ciblés, un à la fois, toujours révisés avant d'être appliqués. Ça correspond à la boucle IA du cours (petits incréments, compris avant d'accepter).

    **Évitez Autopilot et Allow all** pour ce projet : la combinaison agit de façon autonome sur plusieurs fichiers sans supervision ligne par ligne, ce qui va à l'encontre de l'objectif d'écrire le HTML/CSS vous-même. Si vous les utilisez quand même pour explorer, documentez-le dans `JOURNAL.md` et pourquoi, au même titre que la frontière déjà établie pour Figma Make.

    Le harnais (bouton **Copilot/Local/Cloud/Claude**) n'a pas d'impact sur cette consigne, laissez-le sur Copilot.

---

## 4. Le fichier `.github/copilot-instructions.md`

Un fichier à la racine de votre dépôt, lu automatiquement par Copilot, où vous décrivez les conventions de votre projet. Ça aide Copilot à proposer du code cohérent avec vos choix plutôt que des suggestions génériques.

**Gabarit de départ**, à adapter à votre projet :

```markdown
# Instructions pour GitHub Copilot — Portfolio

- Projet en HTML/CSS/JS vanilla, aucun framework.
- HTML sémantique obligatoire (article, section, nav...), pas de <div> par défaut.
- CSS organisé par composants (un fichier ou un bloc par composant).
- Convention de nommage des classes : [ex. BEM, ou la vôtre].
- Commentaires de code en français.
- Ne jamais suggérer de librairie externe sans que je la demande explicitement.
```

!!! tip
    Ce fichier se met à jour au fil du projet. Si vous adoptez une convention en cours de route (nommage, structure de dossiers), ajoutez-la ici plutôt que de compter sur votre mémoire pour rester cohérent d'un composant à l'autre.

---

## En un coup d'œil

| Réglage | Où | Statut |
|---|---|---|
| Suggestions de texte fantôme | VS Code, panneau Copilot | Obligatoire — activé |
| Suggestions de texte fantôme (Markdown) | VS Code, panneau Copilot | Obligatoire — désactivé |
| Suggestions de prochaine modification | VS Code, panneau Copilot | Recommandé — activé |
| Suggestions matching public code | [github.com/settings/copilot/features](https://github.com/settings/copilot/features) | Obligatoire — Block |
| Mode Agent | Chat Copilot, boutons du bas | Obligatoire — Agent + Interactif + Manual permissions |
| `.github/copilot-instructions.md` | Racine du dépôt | Recommandé — à créer |
