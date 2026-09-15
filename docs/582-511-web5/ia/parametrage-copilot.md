# Paramétrage GitHub Copilot

Ce guide fixe une base commune de paramétrage, pour que tout le monde parte du même pied. Certains réglages sont **obligatoires** (ils protègent l'intégrité de votre démarche ou l'originalité de votre code), d'autres sont **recommandés** (ils rendent Copilot plus utile sans risque particulier).

!!! info "Ce guide suppose que Copilot est déjà activé"
    Si ce n'est pas encore fait, voir d'abord le guide d'activation.

    [:material-github: Activer GitHub Copilot (plan Student)](Guide_GitHub_Education_Copilot.md){ .md-button :target="_blank" }



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



## 2. Sur github.com/settings/copilot/features

!!! danger "Obligatoire : Suggestions matching public code → Block"
    Ce réglage compare vos suggestions à environ 150 caractères de code public sur GitHub. Si un match est trouvé, la suggestion n'est simplement pas montrée. Ça évite de vous retrouver, sans le savoir, avec du code copié d'un dépôt sous licence dans votre portfolio. Question d'intégrité, pas juste de style.

    Marche à suivre : profil → **Settings** → **Copilot** → **Features**, section **Privacy**, menu déroulant **Suggestions matching public code** → **Block**.



## 3. Dans `settings.json` (VS Code)

Ouvrir avec `Ctrl+Maj+P` → **Préférences : Ouvrir les paramètres utilisateur (JSON)**.

!!! warning "Recommandé pour le portfolio : désactiver le mode Agent"
    Le mode Agent peut modifier plusieurs fichiers et exécuter des commandes de façon autonome, sans supervision ligne par ligne. Pour un projet où l'objectif est d'écrire le HTML/CSS à la main, ça va à l'encontre de la boucle IA du cours (petits incréments, compris avant d'accepter).

    Important à comprendre : ceci se règle par machine, sur votre propre poste. Personne ne peut le forcer à distance. C'est une consigne de cours à respecter, pas un verrou technique, au même titre que la frontière déjà établie pour Figma Make : documentez dans `JOURNAL.md` si vous l'utilisez quand même, et pourquoi.

    Ajoutez ce qui n'est pas déjà présent dans votre `settings.json`, à la suite des autres réglages (n'oubliez pas la virgule finale de la ligne précédente) :

    ```json
    "github.copilot.nextEditSuggestions.enabled": true,
    "github.copilot.enable": {
        "markdown": true,
    },
    "chat.agent.enabled": false,
    ```



## 4. Le fichier `.github/copilot-instructions.md`

Un fichier à la racine de votre dépôt, lu automatiquement par Copilot, où vous décrivez les conventions de votre projet. Ça aide Copilot à proposer du code cohérent avec vos choix plutôt que des suggestions génériques.

**Gabarit de départ**, à adapter à votre projet :

```markdown
# Instructions pour GitHub Copilot — Portfolio

- Projet en HTML/CSS/JS vanilla, aucun framework.
- HTML sémantique obligatoire (article, section, nav...), pas de <div> par défaut.
- CSS organisé par composants (un bloc de code commenté par composant*).
- Convention de nommage des classes : [ex. la convention BEM** ou autre].
- Commentaires de code en français.
- Ne jamais suggérer de librairie externe sans que je la demande explicitement.
```

!!! tip
    Ce fichier se met à jour au fil du projet. Si vous adoptez une convention en cours de route (nommage, structure de dossiers), ajoutez-la dans ce fichier plutôt que de compter sur votre mémoire pour rester cohérent d'un composant à l'autre.

\* *Approche par composant :* un bloc de code HTML/CSS/JS qui représente un élément de l'interface (ex. un bouton, un formulaire, une carte d'article). Chaque bloc est commenté et séparé des autres pour faciliter la lecture et la maintenance.

[Approche par composant](https://tim-montmorency.com/compendium/582-211-web2/css/composants.html){ .md-button .md-button--primary :target="_blank" }

\*\* *Nomenclature BEM :* une convention de nommage des classes CSS qui reflète la structure du composant (ex. `card__title` pour le titre d'une carte).

[Nomenclature BEM](https://tim-montmorency.com/compendium/582-211-web2/css/nomenclature-bem.html){ .md-button .md-button--primary :target="_blank" }

## En un coup d'œil

| Réglage | Où | Statut |
|---|---|---|
| Suggestions de texte fantôme | VS Code, panneau Copilot | Obligatoire — activé |
| Suggestions de texte fantôme (Markdown) | VS Code, panneau Copilot | Obligatoire — désactivé |
| Suggestions de prochaine modification | VS Code, panneau Copilot | Recommandé — activé |
| Suggestions matching public code | github.com/settings/copilot/features | Obligatoire — Block |
| Mode Agent | `settings.json` | Recommandé — désactivé |
| `.github/copilot-instructions.md` | Racine du dépôt | Recommandé — à créer |


!!! danger "Faire approuver votre paramétrage avant de quitter"
    Une fois vos réglages faits, venez me les montrer avant de quitter le cours aujourd'hui. Je vérifie et note chaque étudiant individuellement : tant que ce n'est pas approuvé par moi, ce n'est pas considéré comme fait.
