


# Concernant l'accès aux images listées dans le json


Si vous avez des images qui ont été importées du fichier `json`, lors du `build`, comme rien dans le code n'y font référence directement, *Vite* les ignore et elle ne feront ne pas partie du `build` final. Vous pouvez voir le dossier `dist` généré par le `build` pour le constater...

Il faut donc les déposer dans un dossier nommé `public`. Ce dossier doit être placé à la racine de votre projet *Vue*, au même niveau que `src`.

Je vous conseiller d'ajouter ces images dans un sous dossier dans public. Vous pouvez l'appeler `images`ou tous autre nom excepté `assets` qui est déjà réservé au build initial de Vite.

Lors du `build` ces images, elle seront donc ajouté dans le dossier `dist`, dans le sous dossier que vous aurez créé initialement dans `public`.

Finalement, n'oubliez pas de changer le chemin d'accès des images de vos `json` pour le nouveau chemin, soit quelque chose comme `./images/nom-fichier-img.png`.