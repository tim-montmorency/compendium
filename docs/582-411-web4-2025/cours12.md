# Cours 12

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

### APIs à votre disposition

* [public-apis | Github](https://github.com/public-apis/public-apis)
* [Apilist.fun](https://apilist.fun/)

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

## Wordpress et son Rest API

Par défaut, WordPress intègre sa propre API REST, accessible sans avoir besoin d’installer quoi que ce soit.

Si l’URL de votre site est : `https://votresite.tim-momo.com/tp`, vous pouvez accéder à l’API REST simplement en ajoutant `/wp-json` à la fin.

Quelques exemples :

```md
// Affiche les informations générales de l’API disponible sur votre site en format JSON.
https://votresite.tim-momo.com/tp/wp-json/

// Affiche tous les articles (posts) de votre site en format JSON.
https://votresite.tim-momo.com/tp/wp-json/wp/v2/posts

Affiche les 3 derniers articles seulement.
https://votresite.tim-momo.com/tp/wp-json/wp/v2/posts?per_page=3
```

Autres paramètres utiles :

- `?categories=3`
- `?author=1`
- `?search=motcle`

!!! question "POST, PUT, DELETE"

    Est-ce qu'on peut utiliser l'API de WordPress en POST, PUT, ou DELETE ?

    Bien sur que oui !

    Toutefois, il faut pour cela prévoir une logique d'authentification (Nonce, JWT). C'est un bien plus avancé alors nous n'irons pas jusque là.

## Afficher le résultat d'un API dans un shortcode

Dans le fichier `functions.php` de votre thème :

```php
<?php

// 👇 Ici on créé le shortcode "articles_demo"

add_shortcode('articles_demo', function () {

  // Appel de l'API
  $response = wp_remote_get('https://jsonplaceholder.typicode.com/posts?_limit=5');

  if (is_wp_error($response)) {
    return '<p>Erreur : impossible de joindre l’API.</p>';
  }

  $body = wp_remote_retrieve_body($response);
  $posts = json_decode($body, true);

  // ici on construit le HTML qui sera affiché sur le site
  $output = '<div class="articles-demo">';
  $output .= '<ul>';
  foreach ($posts as $post) {
    $output .= '<li>';
    $output .= '<strong>' . esc_html($post['title']) . '</strong><br>';
    $output .= esc_html($post['body']);
    $output .= '</li>';
  }
  $output .= '</ul></div>';

  return $output;
});
```

En WordPress, `esc_html` est la fonction recommandée pour remplacer `htmlspecialchars`. C'est pour que l'affichage soit bien sécuritaire 🔒.

Une fois le `shortcode` créé, vous pouvez l'ajouter dans un bloc de type `shortcode` !

[STOP]

https://jsonplaceholder.typicode.com/