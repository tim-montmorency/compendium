
# Exercice carte adaptable avec media queries avancés

[< retour au *cours 9*](../../cours09.md)

## Contexte

Vous avez une carte de profil simple. Elle doit s'adapter intelligemment à différents contextes — pas juste en largeur, mais aussi en respectant les préférences de l'utilisateur.

## Fichier de départ

<span class="important-label">IMPORTANT</span> : Connectez-vous à CodePen d'abord et ensuite faites un *FORK* du Pen de départ pour l'enregistrer dans votre compte, archiver l'exercice et pouvoir avoir un lien unique vers votre exercice complété pour la remise.

![Controls / Fork](../assets/codepen2-fork.png)

[Pen de départ | FAIRE UN FORK](https://codepen.io/tim-momo/pen/019d3c39-b180-70ca-95f2-0d60e123e2d2){ .md-button }

## Tâches à accomplir

### Étape 1 — Breakpoint structurel

À partir de `48rem` (768px), la carte doit passer en disposition **horizontale** : photo à gauche, contenu à droite. Le texte doit s'aligner à gauche dans cette version.

### Étape 2 — Mode sombre

Ajoutez un thème sombre avec `prefers-color-scheme: dark`. Redéfinissez au minimum :

- `--bg-page`
- `--bg-card`
- `--text`
- `--text-secondary`

### Étape 3 — Respect du mouvement réduit

La transition sur le bouton ne doit pas s'appliquer si l'utilisateur a activé `prefers-reduced-motion`.

### Étape 4 — Hover uniquement sur les bons appareils *(si le temps le permet)*

Le style `:hover` sur le bouton ne doit s'appliquer que sur les appareils avec `hover: hover` et `pointer: fine`.


## Pour valider votre travail

??? info "Pour activer les *Emulate CSS media feature...* dans les DevTools de Chrome :"
 
    - Ouvrez l'inspecteur
    - Tappez Ctrl + Shift + P ++ctrl+shift+p++
    - Tappez "Show Rendering" et sélectionnez l'option
    - Puis recherchez les options d'émulation

    <div style="max-width: 1280px"><div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;"><iframe src="https://cmontmorency365-my.sharepoint.com/personal/mariem_ouellet_cmontmorency_qc_ca/_layouts/15/embed.aspx?UniqueId=4b4ccd59-ca1b-4586-9513-06688273db4b&embed=%7B%22hvm%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" width="1280" height="720" frameborder="0" scrolling="no" allowfullscreen title="inspect-show-rendering-emulate-pref-color-scheme.mp4" style="border:none; position: absolute; top: 0; left: 0; right: 0; bottom: 0; height: 100%; max-width: 100%;"></iframe></div></div>

- Redimensionnez la fenêtre pour tester le breakpoint
- Dans les DevTools (Chrome) : `Rendering` → activez *Emulate CSS media feature prefers-color-scheme: dark*
- Dans les DevTools : `Rendering` → activez *Emulate CSS media feature prefers-reduced-motion: reduce*
- Testez sur un appareil tactile (ou la simulation mobile dans DevTools) pour vérifier le comportement hover


> **Rappel :** L'objectif n'est pas de finir vite. C'est de comprendre *pourquoi* chaque media query est là et ce qu'elle fait exactement.
