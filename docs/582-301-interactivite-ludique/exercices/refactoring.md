[:material-arrow-u-left-top: Cours 13](../cours13.md){.breadcrumb}

# Le grand ménage

![](../assets/images/refactortuneup.webp){.w-100}

L’objectif de cet exercice est de mettre en pratique la phase de réusinage, qui consiste à nettoyer et simplifier un code existant tout en améliorant sa lisibilité et sa maintenabilité.

Cette étape est cruciale pour garantir la pérennité (durée de vie) d’un projet et constitue une excellente opportunité d’apprentissage des bonnes pratiques de programmation.

**Plus on développe nos compétences en réusinage, meilleur on devient en programmation. C'est aussi simple que ça.**

## Petit conseil

Adoptez une approche progressive et méthodique. Comme on dit : une bouchée à la fois.

La pire erreur dans une phase de refactoring est d’entamer plusieurs chantiers en parallèle.

Si vous modifiez trop d’éléments simultanément, vous risquez de rendre votre code inutilisable, rendant la tâche plus complexe et frustrante. Vous aurez alors l'impression que rien n'est récupérable. C'est une erreur courante. D'ailleurs ça arrive encore à votre humble enseignant ;)

![](../assets/images/refactorprocess.webp)

### Que faire en cas d’erreurs ?

* **Embrassez-les**! Les erreurs font partie intégrante du processus de réusinage.
* **Corrigez-les une par une**. Prenez le temps de comprendre chaque problème et de le résoudre méthodiquement.
* **Utilisez les bons outils**. Consultez votre inspecteur dans l’onglet console pour identifier les sources des erreurs et les corriger efficacement. Veuillez à activer **ESlint** dans vscode et assurez vous d'avoir correctement configué le fichier `jsconfig.json` à la racine de votre projet.

## Consignes

* [ ] Si ce n'est déjà fait, renommez correctement vos fichiers. C'est-à-dire, sans accent et sans espace.
* [ ] Liez correctement vos fichiers. C'est-à-dire, avec un chemin de fichier comme ceci : `./src/init.js`. Si vous utilisez `/src/init.js` ou `src/init.js`, ça peut poser des problèmes sur d'autres systèmes d'exploitation.
* [ ] Nettoyez vos fichiers et dossiers. C'est-à-dire, retirez **tous** les fichiers inutilisés. Il est impératif que votre dossier ne fasse pas plus que 500 Mo. Si vous avez des fichiers de plus de 200 Mo, vous devriez les supprimer ou les optimiser.
* [ ] Optimisez la taille et poids de toutes les images utilisées dans votre projet. Optimisez également les fichiers audio au besoin.
* [ ] Pour une dernière fois, assurez-vous d'avoir une résolution pas trop élevée (ex: 800x600 ou 1024x768). Ainsi, ça permet une intégration plus fluide sur diverses tailles d’écran.
* [ ] Dans votre index.html, pensez remplir les balises suivantes : `<meta name="description" content="" />` et `<meta name="author" content="" />`. La description devrait se trouver autour de 160 caractères et votre nom d'auteur peut être votre nom ou votre nom d'artiste.
* [ ] Révisez vos commentaires de programmation
* [ ] Assurez vous d'être constant dans la structure et la nomenclature de votre code.
* [ ] Éliminez la redondance de code et créez des fonctions au besoin
* [ ] (facultatif, mais recommandé) Utilisez de classes pour segmenter efficacement le code de votre jeu.
