# Cours 5

![](./assets/images/php-banner-01.png)

## Syntaxe

PHP est un langage interprété côté serveur !

Tout code PHP s’écrit entre les balises suivantes :

```php
<?php
    // Code PHP ici
?>
```

## Hello world

Afficher du texte dans la page HTML

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

Afficher du texte dans la console

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

### Tests

```php
<?php
$data = ["Hello", "World"];
var_dump($data);  // Affiche le type et la structure de la variable
print_r($data);   // Affiche uniquement la structure
?>
```

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

En PHP, les variables commencent par le symbole `$`.

=== "PHP"

    ```php
    <?php
        $title = "1984";          // Chaîne de caractères
        $publication_year = 1949; // Nombre entier
        $price = 9.99;            // Nombre flottant
        $recommended = true;      // Booléen
    ?>
    ```

=== "JavaScript"

    ``` js
    let title = "1984";          // Chaîne de caractères
    let publication_year = 1949; // Nombre entier
    let price = 9.99;            // Nombre flottant
    let recommended = true;      // Booléen
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

## Structures de contrôle

### Conditions

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

### Switch

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

PHP peut être intégré directement dans du HTML :scream:

Il faut juste que le document php inclus la structure html de base.

```php title="Code serveur (index.php)"
<?php $nom = "JF"; ?>
<!DOCTYPE html>
<html>
<head>
    <title>PHP ♥ HTML</title>
</head>
<body>
    <h1><?php echo $nom . " salut ses droogies !"; ?></h1>
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
    <h1>JF salut ses droogies !</h1>
</body>
</html>
```

## Boucles 

### for()

=== "PHP"

    ```php
    <?php
    for ($i = 0; $i < 5; $i++) {
      echo "Itération $i <br>";
      // ou
      echo "Itération " . $i . "<br>";
    }
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

### Manipulation des chaînes de caractères

| **Fonction PHP** | **Équivalent en JavaScript** | **Description** |
|------------------|----------------------------|----------------|
| `strlen($texte)` | `texte.length` | Retourne la longueur d'une chaîne de caractères. |
| `strtolower($texte)` | `texte.toLowerCase()` | Convertit une chaîne en minuscules. |
| `strtoupper($texte)` | `texte.toUpperCase()` | Convertit une chaîne en majuscules. |
| `trim($texte)` | `texte.trim()` | Supprime les espaces au début et à la fin d'une chaîne. |
| `str_replace("a", "b", $texte)` | `texte.replace("a", "b")` | Remplace toutes les occurrences de "a" par "b" dans une chaîne. |
| `strpos($texte, "mot")` | `texte.indexOf("mot")` | Retourne la position d'un mot dans une chaîne (ou -1 s'il n'est pas trouvé). |

### Manipulation des tableaux

| **Fonction PHP** | **Équivalent en JavaScript** | **Description** |
|------------------|----------------------------|----------------|
| `count($array)` | `array.length` | Retourne le nombre d'éléments dans un tableau. |
| `array_push($array, "valeur")` | `array.push("valeur")` | Ajoute un élément à la fin du tableau. |
| `array_pop($array)` | `array.pop()` | Supprime et retourne le dernier élément du tableau. |
| `array_unshift($array, "valeur")` | `array.unshift("valeur")` | Ajoute un élément au début du tableau. |
| `array_shift($array)` | `array.shift()` | Supprime et retourne le premier élément du tableau. |
| `in_array("valeur", $array)` | `array.includes("valeur")` | Vérifie si une valeur est présente dans un tableau (retourne `true` ou `false`). |
| `array_keys($array)` | `Object.keys(array)` | Retourne un tableau contenant les clés d'un tableau associatif. |
| `array_values($array)` | `Object.values(array)` | Retourne un tableau contenant les valeurs d'un tableau associatif. |
| `array_map(fn, $array)` | `array.map(fn)` | Applique une fonction à chaque élément d'un tableau et retourne un nouveau tableau. |
| `array_filter($array, fn)` | `array.filter(fn)` | Filtre les éléments d'un tableau selon une condition. |
| `array_reverse($array)` | `array.reverse()` | Inverse l'ordre des éléments d'un tableau. |

### Manipulation des nombres

| **Fonction PHP** | **Équivalent en JavaScript** | **Description** |
|------------------|----------------------------|----------------|
| `abs($nombre)` | `Math.abs(nombre)` | Retourne la valeur absolue d'un nombre. |
| `round($nombre)` | `Math.round(nombre)` | Arrondit un nombre à l'entier le plus proche. |
| `ceil($nombre)` | `Math.ceil(nombre)` | Arrondit un nombre à l'entier supérieur. |
| `floor($nombre)` | `Math.floor(nombre)` | Arrondit un nombre à l'entier inférieur. |
| `rand(1, 10)` | `Math.floor(Math.random() * 10) + 1` | Génère un nombre aléatoire entre 1 et 10. |

### Manipulation des dates

| **Fonction PHP** | **Équivalent en JavaScript** | **Description** |
|------------------|----------------------------|----------------|
| `date("Y-m-d H:i:s")` | `new Date().toISOString()` | Retourne la date et l'heure actuelle au format ISO. |
| `strtotime("next Monday")` | `new Date().setDate(new Date().getDate() + (1 + 7 - new Date().getDay()) % 7)` | Convertit une date en timestamp. |
| `time()` | `Date.now()` | Retourne le timestamp actuel (en millisecondes depuis 1970). |
| `mktime(0, 0, 0, 12, 25, 2025)` | `new Date(2025, 11, 25).getTime()` | Crée un timestamp à partir d'une date spécifique. |

### Manipulation des fichiers

📌 **PHP peut manipuler des fichiers côté serveur, tandis que JavaScript (côté client) ne le peut pas directement. En Node.js, on utilise `fs`.**

| **Fonction PHP** | **Équivalent en JavaScript (Node.js)** | **Description** |
|------------------|----------------------------|----------------|
| `file_get_contents("fichier.txt")` | `fs.readFileSync("fichier.txt", "utf8")` | Lit le contenu d'un fichier. |
| `file_put_contents("fichier.txt", "contenu")` | `fs.writeFileSync("fichier.txt", "contenu")` | Écrit dans un fichier. |
| `fopen("fichier.txt", "r")` | `fs.openSync("fichier.txt", "r")` | Ouvre un fichier en lecture. |

### Validation et sécurité des entrées utilisateur

| **Fonction PHP** | **Équivalent en JavaScript** | **Description** |
|------------------|----------------------------|----------------|
| `isset($variable)` | `typeof variable !== "undefined"` | Vérifie si une variable est définie. |
| `empty($variable)` | `!variable` | Vérifie si une variable est vide. |
| `filter_var($email, FILTER_VALIDATE_EMAIL)` | `/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)` | Valide une adresse e-mail. |
| `htmlspecialchars($input)` | `input.replace(/</g, "&lt;").replace(/>/g, "&gt;")` | Protège contre les injections HTML. |

