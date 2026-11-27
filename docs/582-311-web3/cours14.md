# Cours 14

[STOP]

<!-- **Savoirs :** finalisation, validation, mise en ligne, préparation de la présentation -->

![](./assets/images/calm.webp){.w-100}

Dernière ligne droite ! Cette séance sert à **finaliser, valider et publier** le site promotionnel de votre jeu vidéo avant les présentations orales du cours 15.

## Checklist de finalisation

- [ ] Terminer l'intégration des dernières sections et médias.
- [ ] Vérifier que le site est **responsive** (mobile, tablette, bureau).
- [ ] Tester dans **plusieurs navigateurs** (Chrome, Firefox, Safari).
- [ ] Retirer les traces de débogage (`console.log`, `markers: true` de GSAP…).

## Mettre en ligne

- [ ] Générer la version de production : `npx vite build` (cours 3).
- [ ] Déployer le site sur **GitHub Pages** (cours 5).
- [ ] Ouvrir l'URL publique et **tout revérifier** en ligne (liens, images, médias).

!!! warning "Le piège classique"

    Une **page blanche** sur GitHub Pages ? Vérifiez le `base` dans `vite.config.js` (cours 5). Des images manquantes en ligne ? Attention aux chemins et à la **casse** des noms de fichiers (le serveur, lui, distingue les majuscules).

## Préparer la démonstration et l'entrevue

Le cours 15 se déroule en deux temps : une **démonstration** de 2 minutes devant le groupe, puis une **entrevue individuelle** d'environ 2 minutes sur n'importe quelle partie du code, qui compte pour 20 % de la note du projet (voir l'[énoncé](./devoir/projet-final/index.md#demonstration-et-entrevue)). Profitez de la fin de l'atelier pour :

- [ ] Préparer la démonstration du site en ligne (2 minutes ou moins).
- [ ] **Relire tout son code**, fichier par fichier, et pouvoir expliquer chaque bloc : ce qu'il fait, et ce qui changerait si on modifiait une valeur.
- [ ] Remettre le projet **la veille du cours 15, à 23 h 59** : le lien du répertoire GitHub et le lien du site en ligne.

!!! success "Bravo 🎉"

    Vous avez parcouru tout le pipeline moderne : outillage (CLI, Git, Vite), intégration (Tailwind, DaisyUI), interactivité (JavaScript), animation (GSAP), sauvegarde côté client, sites de plusieurs pages et mise en ligne. C'est exactement ce qu'on attend d'un intégrateur Web en 2026.
