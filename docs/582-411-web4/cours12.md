# Cours 12

[STOP]

## Qu’est-ce qu’une API ?

![](./assets/images/api-timeline.avif){ data-zoom-image }

Une API (_Application Programming Interface_), c’est un ensemble de règles qui permet à deux logiciels de communiquer entre eux. 

Autrement dit, c’est un pont entre deux systèmes qui permet le partage d'information.

## Rest API

![](./assets/images/rest-api.avif){ data-zoom-image }

Une API REST (_Representational State Transfer API_) est un type d’API qui suit des règles précises pour fonctionner via le protocol HTTP.

**Types de requêtes HTTP** :

* GET : obtenir des infos
* POST : envoyer des infos
* PUT / PATCH : modifier
* DELETE : supprimer

[Liste d'APIs disponibles](https://github.com/public-apis/public-apis)
https://jsonplaceholder.typicode.com/

### Exemple d'API

Pour tester la notion d'API, appelons l'URL suivante <https://yesno.wtf/api>. On peut le faire dans n'importe quel langage.

```js title="En JavaScript"
fetch('https://yesno.wtf/api')
  .then(res => res.json())
  .then(data => {
    document.getElementById('mareponse').textContent = "Réponse : " + data.answer;
    document.getElementById('monimage').src = data.image;
  })
  .catch(err => {
    document.getElementById('mareponse').textContent = "Erreur lors de l'appel à l'API.";
  });
```

```php title="En PHP"
<?php
$response = file_get_contents("https://yesno.wtf/api");

if ($response !== false) {
    $data = json_decode($response, true);
    echo "Réponse : " . $data['answer'] . "<br>";
    echo "<img src='" . $data['image'] . "' alt='yesno gif'>";
} else {
    echo "Erreur lors de l'appel à l'API.";
}
```

### Authentification

![](./assets/images/access-denied.gif)

Certaines URL d'API requiert un principe d'authentification.

**OAuth** : Donne l'accès à un utilisateur sans qu'il ai à partager son mot de passe.

**APIKey** : Certaines API demandent de recevoir une clé via l'URL. Pour ce faire, il faut créer sa clé d'API sur le service distant.

### HTTPS

Si l’URL appelée est sur le protocole `http://` et votre site est sur `https://`, le navigateur va bloquer la requête pour des raisons de sécurité (mélange de contenu sécurisé et non sécurisé).

### CORS

CORS est une politique de sécurité des navigateurs qui empêche une page Web de faire des requêtes vers un domaine différent (_cross-origin_).

Par défaut, si votre site est sur https://monsite.ca et que vous appelez une API sur https://api.autresite.com, le navigateur peut bloquer la requête.

Pour que ça fonctionne, il faut que le serveur qu'on veut accéder ai une configuration spéciale qu'on nomme le header. 

```
Access-Control-Allow-Origin: *
ou
Access-Control-Allow-Origin: https://monsite.ca
```

[STOP]

## Introduction à l'API REST

### Qu'est-ce qu'une API REST ?
- Une API REST (Representational State Transfer) permet la communication entre systèmes via le protocole HTTP.
- Utilise des méthodes HTTP standards : **GET**, **POST**, **PUT**, **DELETE**.

### Pourquoi WordPress a-t-il une API REST ?
- Pour interagir avec le contenu de WordPress de manière programmatique.
- Permet de transformer WordPress en **headless CMS**.
- Ouvre WordPress à des intégrations externes : applications React, mobiles, etc.

## Point d’entrée de l’API REST

URL de base : https://votresite.com/wp-json/

- L’API expose tous les endpoints accessibles.
- Exemple :
  - `wp-json/wp/v2/posts` : récupérer des articles.
  - `wp-json/wp/v2/pages` : récupérer des pages.

### Tester l’API
- Outils recommandés :
  - Postman
  - Insomnia
  - `curl` en ligne de commande
  - Navigateur (pour les requêtes GET simples)

## Lire des données (GET)

Récupérer tous les articles : GET /wp-json/wp/v2/posts

### Paramètres utiles :
- `?per_page=5`
- `?page=2`
- `?categories=3`
- `?author=1`
- `?search=motcle`

## Créer un endpoint personnalisé

```php
<?php

add_action('rest_api_init', function () {
    register_rest_route('monplugin/v1', '/bonjour/', [
        'methods' => 'GET',
        'callback' => 'dire_bonjour',
        'permission_callback' => '__return_true'
    ]);
});

function dire_bonjour($data) {
    return ['message' => 'Bonjour depuis l’API !'];
}
```

## Cas pratiques








https://jsonplaceholder.typicode.com/

$reponse = file_get_contents("https://jsonplaceholder.typicode.com/posts/1");
echo $reponse;

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
