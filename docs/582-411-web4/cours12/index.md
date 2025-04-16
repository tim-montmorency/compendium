# Cours 12

REST API et fonctionnalités interactives en JavaScript

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
