# Relation Parent-Enfant

Imaginez que vous organisez des fichiers sur votre ordinateur pour créer un site web. Vous avez un dossier principal pour votre site, et à l'intérieur de ce dossier, vous avez des sous-dossiers et des fichiers.

## Parent-Enfant

![parent-enfant](https://github.com/user-attachments/assets/2cd04847-530b-4923-ae6f-17c9505d24e9)

- **Parent et Enfant :** Pensez aux dossiers comme des « parents » et aux fichiers qu'ils contiennent comme des « enfants ».
- **Hiérarchie :** Les dossiers et les fichiers sont organisés en une hiérarchie, où certains dossiers sont au niveau supérieur et d'autres sont à des niveaux inférieurs. Les dossiers supérieurs (parents) contiennent les fichiers et les dossiers inférieurs (enfants).
- **Relations :** Les parents et les enfants sont liés les uns aux autres pour créer la structure du site web.

## Exemple

    Accueil > Produits > Catégorie A > Sous-catégorie B > Page de produit

- Dans cet exemple, **"Accueil"** est le niveau le plus élevé et peut être considéré comme le **grand-parent**.
- **"Produits"** est le parent de **"Catégorie A"**.
- **"Catégorie A"** est le parent de **"Sous-catégorie B"**.
- Et enfin, **"Sous-catégorie B"** est le parent de la **"Page de produit"**.

## Questions

[Questionnaire Wooclap](https://app.wooclap.com/BNNHKJ?from=event-page)

Lorsque vous référencez des fichiers dans le code de vos pages web (comme HTML, CSS, JavaScript), vous spécifiez le chemin d'accès pour indiquer où se trouvent ces fichiers par rapport à la page actuelle.

!!! note

    En résumé, dans la hiérarchie des fichiers d'un site web, les dossiers sont comme les parents qui contiennent les fichiers enfants. Cette organisation aide à gérer les ressources et à créer la structure nécessaire pour faire fonctionner le site web.

## Chemin d'accès . /

Lorsque vous spécifiez un chemin d'accès à un fichier dans VS Code, le point de départ par défaut est le dossier dans lequel se trouve le fichier que vous avez ouvert. Par conséquent, si le fichier que vous ouvrez est déjà dans le même dossier que les fichiers auxquels vous faites référence, l'ajout de . / n'est pas nécessaire et peut être omis.

**Cependant, il peut y avoir des cas où l'utilisation de . / peut être appropriée :**

- **Chemin relatif + clair :** Si vous voulez rendre le chemin d'accès relatif plus explicite, vous pouvez ajouter . / pour indiquer que le chemin d'accès est relatif et non absolu.
- **Chemin à partir d'un emplacement différent :** Si vous travaillez à partir d'un sous-dossier ou d'un emplacement différent dans votre projet, l'ajout de . / peut être nécessaire pour spécifier explicitement que le chemin d'accès commence à partir du répertoire actuel.
- **Éviter les conflits :** Dans certains cas, des noms de fichiers peuvent coïncider avec des noms de dossiers, ce qui pourrait provoquer des conflits. Dans de tels cas, l'ajout de ./ peut aider à éviter toute confusion.

!!! note

    En résumé, bien que l'ajout de . / ne soit généralement pas nécessaire dans la plupart des scénarios dans VS Code, son utilisation peut être une question de préférence personnelle ou de clarification, en particulier si vous travaillez dans des situations spécifiques.

!!! warning

    Pour éviter les conflits, dans le cadre du cours, nous allons toujours utiliser . / devant les fichiers pour indiquer que le chemin d'accès commence à partir du répertoire actuel.

## Remonter de niveau ../
![remonter-dossier (1)](https://github.com/user-attachments/assets/7139925d-b3a6-4933-a8f1-b9857f6b5de5){ style="display: block; margin: 0 auto" }

Lorsque vous désirez remonter d'un niveau comme par exemple : vous êtes au niveau d'un fichier enfant et que vous désirez remonter au dossier parent d'utiliser un autre fichier dans le dossier parent, on l'écrit `../nom_du_fichier`

    Dans le cas présent : ../ index.html

Si vous devez remonter de 2 niveau alors suffit d'écrire : `../../nom_du_fichier`
