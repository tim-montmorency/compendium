# Exercice JavaScript Fetch API

## Dossier de départ

[📥 Télécharger fichiers de départ](./depart.zip){ .md-button }

## Objectif

Votre objectif est d’afficher un gif dans le DOM en fonction d’une recherche de l’utilisateur. Vous devrez créer un compte Giphy et appeler leur point de terminaison API (*Application Programming Interface*) pour développeurs. Amusons-nous avec les appels d’API à Giphy !

## Mise en route

[📥 Télécharger fichiers de départ](./depart.zip){ .md-button }

### Prérequis

Si vous n’avez pas encore de compte développeur Giphy, visitez [developers.giphy.com](https://developers.giphy.com/) et créez-en un.

- Créer un compte sur [https://developers.giphy.com/](https://developers.giphy.com/) et "Create an account"
- Ensuite [https://developers.giphy.com/dashboard/](https://developers.giphy.com/dashboard/) et "Create an APIKEY"
  - Chosir: API Key
  - App Name: Exercice JavaScript Giphy API
  - App desc: This is an exercice to learn fetch API in a Web course.
  - Platform: Web

## Étapes

L’exercice JavaScript Fetch API comporte plusieurs étapes :

- [Exercice 1 : Inspecter et sélectionner les éléments](#exercice-1-inspecter-et-sélectionner-les-éléments)
- [Exercice 2 : Utiliser Fetch API](#exercice-2-utiliser-la-fetch-api)
- [Exercice 3 : Consommer l’API](#exercice-3-consommer-lapi)
- [Exercice 4 : Mettre à jour le DOM](#exercice-4-mettre-à-jour-le-dom)

### Exercice 1 : Inspecter et sélectionner les éléments

Inspectez le fichier `index.html` dans Visual Studio Code pour voir le code de départ. Une fois que vous avez compris les éléments que vous utiliserez dans cet exercice, passez à votre fichier `app.js`.

1. Sélectionner l’élément du bouton de recherche  
2. Sélectionner l’élément du champ de saisie de recherche  
3. Sélectionner l’élément image  
4. Sélectionner l’élément paragraphe de rétroaction (feedback)  

### Exercice 2 : Utiliser Fetch API

Utilisez Fetch API pour demander un gif basé sur le terme saisi par l’utilisateur lorsqu’il clique sur un bouton.

1. Ajouter un écouteur d’événement *click* au bouton de recherche  
2. La fonction de gestion d’événement doit :  
   - Appeler `fetch`  
   - Passer l’URL : [https://api.giphy.com/v1/gifs/translate](https://api.giphy.com/v1/gifs/translate)  
     - Interpoler les paramètres de requête dans l’URL  
       - tous les paramètres suivent la syntaxe `nom=valeur`  
       - `api_key` doit être la clé API trouvée dans votre tableau de bord Giphy Developer  
       - `s` doit être la valeur provenant du champ de saisie de recherche  

La documentation sur l’utilisation du point de terminaison *Translate* de Giphy se trouve [ici](https://developers.giphy.com/docs/api/endpoint/#translate).

Un exemple d’URL avec paramètres de requête ressemblerait à :

```
https://url.com?apiKey=abc&s=abc
```


Les paramètres de requête commencent après un `?`, et chaque paramètre est séparé par un `&`.

### Exercice 3 : Consommer l’API

Utilisez le résultat de Fetch API avec des consommateurs de promesses.

1. À partir du résultat de l’appel à `fetch`, appelez la méthode `then` et passez-lui une fonction de rappel (callback)  
   - La fonction de rappel doit recevoir la valeur résolue comme paramètre  
   - Retournez le résultat de l’appel à `.json` sur la réponse  
     - Cela analysera le corps de la réponse en JSON et retournera le résultat de la promesse pour le consommateur suivant  

2. À partir du résultat du premier `then`, chaînez un autre `then` et passez-lui une fonction de rappel  
   - La fonction de rappel doit recevoir le corps de la réponse (déjà converti en JSON) comme paramètre  
   - Commencez simplement par afficher le résultat dans la console pour vérifier qu’il correspond à ce que vous attendez 
   
3. À partir du résultat du `then`, chaînez un `catch` et passez-lui une fonction de rappel  
   - La fonction de rappel doit recevoir la valeur de l’erreur comme paramètre  
   - Commencez simplement par afficher le résultat dans la console pour vérifier qu’il correspond à ce que vous attendez  

### Exercice 4 : Mettre à jour le DOM

1. Remplacez l’instruction `console.log` dans le deuxième `then` par :  
   - Mise à jour de l’attribut `src` de l’élément image avec l'url de l'image reçue (creusez dans les données pour trouver l'*url* *original* de l'*image* reçue).
     - La réponse de Giphy contient plusieurs URL, vous pouvez explorer les autres si vous le souhaitez  
   - Réinitialisation de la valeur du champ de saisie de recherche  
   - Réinitialisation du contenu texte du paragraphe de rétroaction  
     - Cela masquera les erreurs précédentes lors des prochaines requêtes réussies  
2. Sous l’instruction `console.error` dans le `catch` :  
   - Affichez la propriété `message` de l’objet d’échec comme contenu texte du paragraphe de rétroaction sélectionné dans le DOM  
