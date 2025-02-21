# Cours 12

REST API et fonctionnalités interactives en JavaScript

[STOP]

https://jsonplaceholder.typicode.com/

$reponse = file_get_contents("https://jsonplaceholder.typicode.com/posts/1");
echo $reponse;

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))