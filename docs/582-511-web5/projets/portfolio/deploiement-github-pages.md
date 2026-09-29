# Déployer son portfolio sur GitHub Pages

!!! abstract "L'essentiel en 3 points"
    1. GitHub Pages publie gratuitement votre dépôt comme site web, à une adresse du type `https://votre-nom.github.io/nom-du-depot/`. Aucun serveur à configurer : c'est un site statique (HTML, CSS, JS, JSON).
    2. Une fois activé, **chaque `push` sur `main` met le site à jour** automatiquement, en une minute ou deux.
    3. Le site en ligne est **public**, même si votre dépôt est privé. Vérifiez vos chemins de fichiers : ce qui fonctionne sur votre poste peut briser en ligne.

## Avant de commencer

- Votre dépôt contient un `index.html` **à la racine** (pas dans un sous-dossier). C'est la page que GitHub Pages affiche en premier.
- Tout est *commité* et poussé (*push*) sur la branche `main`.

!!! info "Dépôt privé : il faut GitHub Pro (gratuit pour vous)"
    GitHub Pages sur un dépôt **privé** demande un compte GitHub Pro. Vous l'avez déjà si votre inscription à **GitHub Education** a été approuvée en début de session (voir le [guide GitHub Education](../../ia/Guide_GitHub_Education_Copilot.md)).

    Si GitHub vous affiche un message comme « *upgrade your billing plan* » ou « *make it public* », vérifiez d'abord votre statut GitHub Education, puis venez me voir. Ne rendez pas votre dépôt public sans m'en parler.

## Activer GitHub Pages

1. Sur GitHub, ouvrez votre dépôt, puis **Settings** (onglet du haut).
2. Dans le menu de gauche : **Pages**.
3. Section **Build and deployment** :
    - **Source** : *Deploy from a branch*;
    - **Branch** : `main`, dossier `/ (root)`;
    - **Save**.
4. Attendez une ou deux minutes, puis rechargez la page **Settings → Pages** : l'adresse de votre site s'affiche en haut (*Your site is live at…*).
5. Cliquez sur **Visit site** et testez tout : navigation, cartes de projets, détail d'un projet, version mobile.

!!! tip "Suivre la publication"
    L'onglet **Actions** de votre dépôt montre chaque publication en cours. Un crochet vert : c'est en ligne. Un X rouge : cliquez dessus pour voir l'erreur.

## Mettre à jour le site

Rien de plus à faire : à chaque `push` sur `main`, GitHub republie le site. Attendez une ou deux minutes, puis rechargez avec **Ctrl + F5** (ou **Cmd + Maj + R** sur Mac) pour contourner le cache du navigateur.

## Ajouter l'adresse dans votre README

Dans votre `README.md`, remplacez le « futur url » de la remise 1 par l'adresse réelle de votre site. C'est le lien que je vais ouvrir pour tester votre bêta.

## Pièges fréquents : « ça marchait sur mon poste! »

| Symptôme | Cause probable | Solution |
|---|---|---|
| Erreur 404 sur toute la page | `index.html` n'est pas à la racine, ou la publication n'est pas terminée | Vérifiez l'emplacement de `index.html`; attendez la fin de la publication dans **Actions**. |
| Images, CSS ou JSON introuvables (404 dans la console) | **Majuscules** : `Projects.json` n'est pas `projects.json` en ligne. Windows ignore la casse, le serveur de GitHub non. | Écrivez tous vos noms de fichiers et chemins en minuscules, identiques partout. |
| Tout fonctionne sur la page d'accueil, mais les liens ou images cassent | Chemins qui commencent par `/` (ex. `/css/style.css`) : ils pointent vers `votre-nom.github.io/css/…` au lieu de `votre-nom.github.io/nom-du-depot/css/…` | Utilisez des chemins **relatifs**, sans `/` au début : `css/style.css`, `data/projects.json`. |
| Chemins Windows | Des `\` au lieu de `/` (ex. `assets\images\cafe.jpg`) | Toujours `/` dans le web. |
| La modification n'apparaît pas | Cache du navigateur, ou `push` oublié | **Ctrl + F5**; vérifiez que votre dernier *commit* est bien sur GitHub. |

!!! warning "Votre site est public"
    Même avec un dépôt privé, **le site publié est visible par tout le monde**, y compris le contenu de vos fichiers JS et JSON. Rien de confidentiel dans vos données. Si vous utilisez Airtable, votre jeton doit être en lecture seule et limité à une seule base (voir la [page Airtable](donnees/airtable.md)).

## Vérification finale

- [ ] L'adresse `https://votre-nom.github.io/nom-du-depot/` affiche votre portfolio.
- [ ] Les cartes de projets s'affichent (le `fetch()` fonctionne en ligne).
- [ ] Le détail d'un projet fonctionne (modale ou `project.html`).
- [ ] La console (F12) ne montre aucune erreur rouge.
- [ ] Le site est testé sur mobile (votre téléphone, ou le mode appareil de l'inspecteur).
- [ ] L'adresse est inscrite dans votre `README.md`.
