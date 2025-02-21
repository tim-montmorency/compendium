# Cours 5

## Annonce

![](./assets/images/wow.gif){.w-100}

!!! warning "Sauvegarde !"

    Il y aura une maintenance qui sera faite sur le serveur et pour ne pas perdre de données, il faudra faire une sauvegarde de votre devoir WOW.

## PHP

![](./assets/images/php-banner.jpg)

PHP est un **langage interprété côté serveur** utilisé principalement pour générer du contenu dynamique sur le web.

WordPress utilise PHP pour générer des contenus et les récupérer dans une base de données.

### Exécuter du PHP

* Un fichier PHP doit avoir l’extension `.php`.
* Le fichier principal d’un site est souvent `index.php` (comme en html).
* Un code PHP est toujours entouré des balises PHP :

```php
<?php
    // Code PHP ici
?>
```

## Hello world

Pour afficher du texte dans la page HTML, on utilise la fonction `echo`.

=== "PHP"

    ```php
    <?php
    echo "Salut JS !";
    ?>
    ```

=== "JavaScript"

    ``` js
    document.write("Bonjour monsieur PHP !");
    ```

!!! example "Go on essaye !"

    Affichons notre fameux et tout premier "Hello world" en PHP !

## Commentaires

=== "PHP"

    ```php
    <?php
    // Ceci est un commentaire sur une seule ligne

    # Ceci est aussi un commentaire sur une seule ligne

    /* Ceci est un commentaire sur
    plusieurs lignes. */
    ?>
    ```

=== "JavaScript"

    ``` js
    // Ceci est un commentaire sur une seule ligne

    /* Ceci est un commentaire sur
    plusieurs lignes. */
    ```

## Variables

![](./assets/images/fun-coupon.gif){.w-100}

En PHP, les variables commencent par le symbole `$`.

=== "PHP"

    ```php
    <?php
        $title = "1984";          // Chaîne de caractères
        $publication_year = 1949; // Nombre entier
        $price = 9.99;            // Nombre flottant
        $recommended = true;      // Booléen
        $genres = ["science-fiction", "dystopique"]; // Tableau
    ?>
    ```

=== "JavaScript"

    ``` js
    let title = "1984";          // Chaîne de caractères
    let publication_year = 1949; // Nombre entier
    let price = 9.99;            // Nombre flottant
    let recommended = true;      // Booléen
    let genres = ["science-fiction", "dystopique"]; // Tableau
    ```

### Les tableaux associatifs

=== "PHP"

    ```php
    <?php
    $livre = [
        "titre" => "1984",
        "auteur" => "George Orwell",
        "annee" => 1949
    ];
    echo $livre["titre"]; // 1984
    ?>
    ```

=== "JavaScript"

    ``` js
    let livre = {
        titre: "1984",
        auteur: "George Orwell",
        annee: 1949
    };
    console.log(livre.titre); // 1984
    ```

### Les constantes

=== "PHP"

    ```php
    <?php
    const PI = 3.14159;
    echo PI; // 3.14159
    ?>
    ```

=== "JavaScript"

    ``` js
    const PI = 3.14159;
    console.log(PI); // 3.14159
    ```

## Concaténation

La concaténation permet d'assembler plusieurs chaînes de caractères pour former un texte complet.

En PHP, on utilise le point (`.`) pour concaténer des chaînes :

=== "PHP"

    ```php
    <?php
    $nom = "JF";
    $message = "Salut " . $nom . " !";
    echo $message; // Affiche : Salut JF !
    ?>
    ```

=== "JavaScript"

    ```js
    let nom = "JF";
    let message = "Salut " + nom + " !";
    console.log(message);
    ```

### Interpolation de chaîne

PHP permet d’insérer une variable directement dans une chaîne avec les guillemets `"`, mais pas avec l'apostrophe `'`.

=== "PHP"

    ```php
    <?php
    $nom = "JF";

    echo "Salut $nom !"; // Affiche : Salut JF !
    echo 'Salut $nom !'; // Affiche : Salut $nom !
    ?>
    ```

=== "JavaScript"

    ```js
    let nom = "JF";

    console.log(`Salut ${nom} !`); // Affiche : Salut JF !
    console.log('Salut ${nom} !'); // Affiche : Salut ${nom} !
    console.log("Salut ${nom} !"); // Affiche : Salut ${nom} !
    ```

    En JavaScript on appelle le concept _template literals_.

## Les opérateurs

### Opérateurs mathématiques

=== "PHP"

    ```php
    <?php
    $a = 10;
    $b = 5;
    echo $a + $b; // 15
    echo $a - $b; // 5
    echo $a * $b; // 50
    echo $a / $b; // 2
    echo $a % $b; // 0 (modulo)
    ?>
    ```

=== "JavaScript"

    ```js
    let a = 10;
    let b = 5;
    console.log(a + b); // 15
    console.log(a - b); // 5
    console.log(a * b); // 50
    console.log(a / b); // 2
    console.log(a % b); // 0 (modulo)
    ```

### Opérateurs de comparaison

Les opérateurs de comparaison sont souvent utilisés dans les conditions (`if`).

=== "PHP"

    ```php
    <?php
    $a = 10;
    $b = 5;
    $a == $b   # Vrai si $a est égal à $b (sans vérifier le type).
    $a === $b  # Vrai si $a est égal à $b et du même type.
    $a != $b   # Vrai si $a est différent de $b.
    $a !== $b  # Vrai si $a est différent de $b ou de type différent.
    $a < $b	   # Vrai si $a est inférieur à $b.
    $a > $b    # Vrai si $a est supérieur à $b.
    ?>
    ```

=== "JavaScript"

    ```js
    let a = 10;
    let b = 5;
    a == b  // Vrai si a est égal à b (sans vérifier le type).
    a === b // Vrai si a est égal à b et du même type.
    a != b  // Vrai si a est différent de b.
    a !== b // Vrai si a est différent de b ou de type différent.
    a < b   // Vrai si a est inférieur à b.
    a > b   // Vrai si a est supérieur à b.
    ```

## Structures conditionnelles

### if

=== "PHP"

    ```php
    <?php
    $celcius = 100;

    if ($celcius < 116) {
      echo "Zut ! Ma meringue italienne ne prend pas";
    } elseif ($celcius >= 116 && $celcius <= 118) {
      echo "Juste à point";
    } else {
      echo "Fudge ! La meringue italienne cristallise";
    }
    ?>
    ```

=== "JavaScript"

    ```js
    let celcius = 100;

    if (celcius < 116) {
    console.log("Zut ! Ma meringue italienne ne prend pas");
    } else if (celcius >= 116 && celcius <= 118) {
    console.log("Juste à point");
    } else {
    console.log("Fudge ! La meringue italienne cristallise");
    }
    ```

### switch

=== "PHP"

    ```php
    <?php
    $note = "B";

    switch ($note) {
      case "A":
        echo "Excellente note !!!";
        break;
      case "B":
        echo "Bonne note !";
        break;
      default:
        echo "C'est une note";
    }
    ?>
    ```

=== "JavaScript"

    ```js
    let note = "B";

    switch (note) {
      case "A":
        console.log("Excellente note !!!");
        break;
      case "B":
        console.log("Bonne note !");
        break;
      default:
        console.log("C'est une note");
    }
    ```

## PHP :heart: HTML

PHP s'intègre carrément dans du HTML :scream:

```php title="Code serveur (index.php)"
<?php $nom = "JF"; ?>
<!DOCTYPE html>
<html>
<head>
    <title>PHP ♥ HTML</title>
</head>
<body>
    <h1><?php echo $nom . " salut ses <strong>droogies</strong> !"; ?></h1>
</body>
</html>
```

![](./assets/images/point-down.png)

```php title="Rendu côté client (votre navigateur)"
<!DOCTYPE html>
<html>
<head>
    <title>PHP ♥ HTML</title>
</head>
<body>
    <h1>JF salut ses <strong>droogies</strong> !</h1>
</body>
</html>
```

## Boucles

![](./assets/images/spin.gif){.w-100}

### for()

=== "PHP"

    ```php
    <?php
    for ($i = 0; $i < 5; $i++) {
      echo "index $i /";
      // ou
      // echo "index " . $i . "/";
    }

    // Affiche : index 0 /index 1 /index 2 /index 3 /index 4 /
    ?>
    ```

=== "JavaScript"

    ```js
    for (let i = 0; i < 5; i++) {
      console.log(`Itération ${i}`);
      // ou
      console.log("Itération " + i);
    }
    ```

### while()

=== "PHP"

    ```php
    <?php
    $i = 0;

    while ($i < 5) {
        echo "Valeur : $i <br>";
        $i++;
    }
    ?>
    ```

=== "JavaScript"

    ```js
    let i = 0;

    while (i < 5) {
        console.log("Valeur : " + i);
        i++;
    }
    ```

### foreach()

=== "PHP"

    ```php
    <?php
    $fruits = ["Tomate", "Concombre", "Aubergine", "Piment", "Olive"];

    foreach ($fruits as $fruit) {
      echo $fruit . "<br>";
    }

    // Affiche :  Tomate<br>Concombre<br>Aubergine<br>Piment<br>Olive<br>
    ?>
    ```

=== "JavaScript"

    ```js
    let fruits = ["Tomate", "Concombre", "Aubergine", "Piment", "Olive"];
    fruits.forEach(
        fruit => console.log(fruit)
    );
    ```

## Fonctions

=== "PHP"

    ```php
    <?php
    function pythagore($a, $b) {
      return sqrt($a ** 2 + $b ** 2);
    }

    echo pythagore(3, 4); // Affiche : 5
    ?>
    ```

=== "JavaScript"

    ```js
    function pythagore(a, b) {
      return Math.sqrt(a ** 2 + b ** 2);
    }

    console.log(pythagore(3, 4)); // Affiche : 5
    ```

## Fonctions PHP courantes

Longueur d'une chaîne de caractères

=== "PHP"

    ```php
    <?php
    $texte = "Bonjour";
    echo strlen($texte); // 7
    ?>
    ```

=== "JavaScript"

    ```js
    let texte = "Bonjour";
    console.log(texte.length); // 7
    ```

Convertion de chaîne en minuscules ou majuscules

=== "PHP"

    ```php
    <?php
    $texte = "Bonjour";
    echo strtolower($texte); // bonjour
    echo strtoupper($texte); // BONJOUR
    ?>
    ```

=== "JavaScript"

    ```js
    let texte = "Bonjour";
    console.log(texte.toLowerCase()); // bonjour
    console.log(texte.toUpperCase()); // BONJOUR
    ```

Suppression des espaces au début et à la fin d'une chaîne

=== "PHP"

    ```php
    <?php
    $texte = "  Bonjour  ";
    echo trim($texte); // "Bonjour"
    ?>
    ```

=== "JavaScript"

    ```js
    let texte = "  Bonjour  ";
    console.log(texte.trim()); // "Bonjour"
    ```

Remplacement de caractères

=== "PHP"

    ```php
    <?php
    $texte = "Bonjour";
    echo str_replace("o", "a", $texte); // Banjaur
    ?>
    ```

=== "JavaScript"

    ```js
    let texte = "Bonjour";
    console.log(texte.replace("o", "a")); // Banjaur
    ```

Nombre d'éléments dans un tableau

=== "PHP"

    ```php
    <?php
    $array = [1, 2, 3, 4, 5];
    echo count($array); // 5
    ?>
    ```

=== "JavaScript"

    ```js
    let array = [1, 2, 3, 4, 5];
    console.log(array.length); // 5
    ```

Vérifier si une valeur est dans un tableau

=== "PHP"

    ```php
    <?php
    $array = ["pomme", "banane", "orange"];
    if(in_array("banane", $array)) {
      echo "Oui";
    } else {
      echo "Non";
    }
    ?>
    ```

=== "JavaScript"

    ```js
    let array = ["pomme", "banane", "orange"];
    if(array.includes("banane")) {
      console.log("Oui");
    } else {
      console.log("Non");
    }
    ```

Arrondir un nombre

=== "PHP"

    ```php
    <?php
    $nombre = 4.6;
    echo round($nombre); // 5
    ?>
    ```

=== "JavaScript"

    ```js
    let nombre = 4.6;
    console.log(Math.round(nombre)); // 5
    ```

Générer un nombre aléatoire

=== "PHP"

    ```php
    <?php
    echo rand(1, 10); // Nombre entre 1 et 10
    ?>
    ```

=== "JavaScript"

    ```js
    console.log(Math.floor(Math.random() * 10) + 1); // Nombre entre 1 et 10
    ```

### Validation et sécurité des entrées utilisateur

Vérifier si une variable est définie : `isset($variable)`

Vérifier si une variable est vide : `empty($variable)`

Convertit les caractères spéciaux (< > & " ') en entités HTML : `htmlspecialchars($input)`

## Formulaire

![](./assets/images/surf.gif){.w-100}

```html title="index.html"
<form method="post" action="traitement.php">
    <input type="text" name="nom" placeholder="Votre nom">
    <button type="submit">Envoyer</button>
</form>
```

```php title="traitement.php"
<?php
if (isset($_POST['nom'])) {
    echo "Bonjour, " . htmlspecialchars($_POST['nom'], ENT_QUOTES, 'UTF-8');
}
?>
```

### Sécurité

![](./assets/images/security.gif){.w-100}

Injection XSS, ça vous dit quelque chose ? C'est lorsque l'utilisateur entre du contenu malveillant dans un formulaire et que le contenu est affiché directement sur la page.

Par exemple, dans un formulaire, si l'utilisateur entre comme valeur dans le champ prénom la valeur suivante : `<script>alert('Hacked!');</script>`, cela pourrait poser problème.

Si en php on prend la valeur `$_POST['prenom']` et on l'enregistre sur le site, et que si on fait un affichage de cette valeur, n'importe où sur le site, une alerte s'affichera.

Imaginez ce qui pourrait arriver si le script exécute du code malveillant.

```html
<form method="post">
    <!-- L’attaquant entre ceci dans le champ nom :

        "><script>alert("Hacked!")</script>

     -->
    <input type="text" name="nom">
    <button type="submit">Envoyer</button>
</form>
```

```php
<?php
$nom = $_POST['nom'];

if (isset($nom)) {
    // ❌ Aucune protection
    echo "Bonjour, " . $nom;

    // ⚠️ Ok
    echo "Bonjour, " . htmlspecialchars($nom);

    // ✅ Sécurisé
    echo "Bonjour, " . htmlspecialchars($nom, ENT_QUOTES, 'UTF-8');
}
?>
```

| Avant | Apres |
|-------|-------|
| `"><script>alert("XSS")</script>` | `&quot;&gt;&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;` |

Les caractères spéciaux sont convertis en entités HTML, empêchant leur exécution !

## Récapitulatif

![](./assets/images/designer_dev.gif)

Regardons ce script et analysons son fonctionnement.

```php
<?php
function obtenirMessage($nb, $msg) {
  if ($nb >= 80) {
      return $msg["excellent"];
  } elseif ($nb >= 50) {
      return $msg["moyen"];
  } else {
      return $msg["faible"];
  }
}

$nom_utilisateur = isset($_POST["nom"]) ? htmlspecialchars($_POST["nom"], ENT_QUOTES, 'UTF-8') : "Invité";
$note = rand(0, 100);

$messages = [
    "excellent" => "Bravo, $nom_utilisateur ! Tu as un score impressionnant ! 🎉",
    "moyen" => "Pas mal, $nom_utilisateur. Tu peux encore progresser ! 💪",
    "faible" => "Oups, $nom_utilisateur... Il faut réessayer ! 😅"
];

echo "<h1>Bienvenue, $nom_utilisateur !</h1>";
echo "<p>Ta note est de <strong>$note</strong>%.</p>";
echo "<p>" . obtenirMessage($note, $messages) . "</p>";

$matieres = ["Philosophie", "Mathématiques", "Biologie", "Astronomie"];

echo "<h2>Matières :</h2>";
echo "<ul>";
foreach ($matieres as $matiere) {
    echo "<li>$matiere</li>";
}
echo "</ul>";

$choix_matiere = "Philosophie";

echo "<h2>Matière préférée :</h2>";
switch ($choix_matiere) {
    case "Philosophie":
        echo "<p>Ah, l'art de comprendre le monde.</p>";
        break;
    case "Mathématiques":
        echo "<p>Oh, le langage de la nature !</p>";
        break;
    default:
        echo "<p>Intéressant !</p>";
}
?>

<hr>

<form method="post" action="index.php">
    <label for="nom">Entre ton nom :</label>
    <input type="text" name="nom" id="nom" placeholder="Ex : Nietzsche" required>
    <button type="submit">Envoyer</button>
</form>
```

[*](https://web4.tim-momo.com/lecture)

## Exercices

<div class="grid grid-1-2" markdown>
  ![](./assets/images/flamant-rose.jpg)

  <small>Exercice - PHP</small><br>
  **[Copenhague](./exercices/php-flamant-rose.md){.stretched-link .back}**
</div>

[STOP]

Pour afficher du texte dans la "console", on peut utiliser la fonction `console.log`.

=== "PHP"

    ```php
    <?php
    error_log("Salut JS !");
    ?>
    ```

=== "JavaScript"

    ``` js
    console.log("Bonjour monsieur PHP !");
    ```

!!! info "Console serveur ?"

    Du côté serveur, il n'existe pas de console. Ce qui remplace le concept s'appelle _log_.

    Il existe des _logs_ pour PHP, pour Apache, pour MYSQL, etc.

    Lorsque vous faites un `error_log("allo");` en PHP, vous pourrez voir son contenu dans `php_error.log` qui devrait se situer sous `C:\MAMP\logs`

    Toutefois, vous trouverez sans doute plus pratique d'utiliser simplement `echo` pour imprimer la chaine de caractères sur votre page directement.

```php
<?php
$data = ["Hello", "World"];
var_dump($data);  // Affiche le type et la structure de la variable
print_r($data);   // Affiche uniquement la structure
?>
```

#### Aide mémoire de sécurité

| **Type de champ HTML** | **Exemple HTML** | **Vérification & Nettoyage** | **Protection appliquée** |
|----------------|------------------|--------------------|------------------|
| **Texte (`<input type="text">`)** | `<input type="text" name="nom">` | `trim(strip_tags($_POST['nom']))`<br>`htmlspecialchars($_POST['nom'], ENT_QUOTES, 'UTF-8')` | ✅ Empêche XSS & HTML Injection |
| **Textarea (`<textarea>`)** | `<textarea name="message"></textarea>` | `trim(strip_tags($_POST['message']))`<br>`htmlspecialchars($_POST['message'], ENT_QUOTES, 'UTF-8')` | ✅ Empêche XSS & HTML Injection |
| **Courriel (`<input type="email">`)** | `<input type="email" name="email">` | `filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)` | ✅ Empêche faux emails & XSS |
| **URL (`<input type="url">`)** | `<input type="url" name="site">` | `filter_var($_POST['site'], FILTER_VALIDATE_URL)` | ✅ Empêche injection de liens dangereux |
| **Nombre (`<input type="number">`)** | `<input type="number" name="age">` | `filter_var($_POST['age'], FILTER_VALIDATE_INT)` | ✅ Empêche XSS & Valeurs incorrectes |

Pour les input de type radio, checkbox et select vous deviez utiliser `isset()` et `in_array()` pour vérifier que la valeur est permise.

Pour les input de type file, c'est pour le moins plus difficile à sécuriser. Nous pourrons l'aborder dans une autre épisode de "On aura pas le temps de regarder cela cette session" !