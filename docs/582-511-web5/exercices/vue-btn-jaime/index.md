# **Exercice** Vue : composante `like-button`

## Fichiers de départ

[📥 Télécharger fichiers de départ](./bouton-jaime-fichiers-depart.zip){ .md-button }

## Aperçu du résultat

Une page affiche une petite liste de jeux rétros. À côté de chaque élément, un **bouton “❤️ J’aime”** (composante réutilisable) permet d’alterner entre *aimé / pas aimé* — **indépendamment** pour chaque instance.

<div style="max-width: 1280px"><div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;"><iframe src="https://cmontmorency365-my.sharepoint.com/personal/mariem_ouellet_cmontmorency_qc_ca/_layouts/15/embed.aspx?UniqueId=0265d69d-1b6c-407c-83b4-1e9a1a760f27&embed=%7B%22hvm%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create" width="1280" height="720" frameborder="0" scrolling="no" allowfullscreen title="exerc-vue-bouton-jaime-apercu.mp4" style="border:none; position: absolute; top: 0; left: 0; right: 0; bottom: 0; height: 100%; max-width: 100%;"></iframe></div></div>

## Objectifs

- Créer et réutiliser une *composante Vue* simple
- Manipuler *une prop* (`initial`) et un *état* propre à chaque bouton (`isLiked`)
- Utiliser les *classes dynamiques* et le *rendu conditionnel*
- Structurer une petite app avec composante simple (importation via CDN, Vue 3 avec Options API)

## Fichiers

- `index.html` — structure HTML + montage de l’app
- `style.css` — styles du layout et du bouton
- `script.js` — app Vue + composante `like-button`

## Étapes

- [ ] 1. *Vue* : Installez Vue 3 via CDN (pas besoin d'utiliser npm ni de l'outil de développement Vite pour cet exercice).  
- [ ] 2. *HTML* : Ouvrez `index.html` dans votre navigateur 
- [ ] 3. *Parent* : Créez une app Vue. Créez les données initiales pour les 4 jeux. Affichez les dans la `section.list`.
- [ ] 4. *Composante* : Créez ensuite la composante `like-button` : 
  - [ ]  une prop nommée `initial` (booléen) qui permet d'établir l'état initial si le jeu est aimé ou non,  
  - [ ]  une donnée `data()` nommée `isLiked` qui sera égale à la valeur de la prop `initial`,  
  - [ ]  une méthode `toggle()` appelée avec `@click`,  
  - [ ]  une classe dynamique `:class="{ liked: isLiked }"` et un emoji conditionnel.  
- [ ] 5. *Réutilisation* : Vérifiez que **chaque instance** du bouton est **indépendante** (essayez plusieurs clics sur différentes lignes).  
- [ ] 6. **Styles** : Personnalisez le CSS (état normal vs `.liked`, hover/focus).

## Bonus

- Remplacer les emojis par des **icônes** (★/☆) ou **SVG**.  
- Ajouter un petit texte conditionnel (“Merci !”).  
- Ajouter une prop `label` pour rendre le texte configurable.

## Critères de complétion

- [ ] L’app Vue 3 fonctionne (aucune erreur dans la console)
- [ ] La composante `like-button` est réutilisée **au moins 3 fois**
- [ ] La prop `initial` est respectée, avec valeur par défaut `false`
- [ ] Les classes dynamiques changent l’apparence du bouton (`.liked`)
- [ ] Le code est clair, indenté et commenté minimalement


## Notes de cours 📚

- [Vue intro](../../vue/index.md)
- [Vue: Création d'une app](../../vue/creation-app.html)
- [Vue: Interpolation des données](../../vue/interpolation.html)
- [Vue: Méthode et événenement v-on](../../vue/methodes-evenements.md)
- [Vue: Classe CSS dynamique](../../vue/classe-dynamique.md)
- [Vue: Condition v-if](../../vue/condition.md)
- [Vue: Tableau[ ] + boucle v-for](../../vue/boucle.md)
- [Vue: Éléments d'un formulaire](../../vue/elements-de-formulaire.md)
- [Vue: Propriété calculée](../../vue/propriete-calculee.md)
- [Vue: Composante](../../vue/composante.md)
- [Vue: Props](../../vue/props.md)
