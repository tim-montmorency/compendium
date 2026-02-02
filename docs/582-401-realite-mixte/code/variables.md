# Variables

Les variables permettent de **stocker une valeur** (`int`, `float`, `bool`, etc.) ou une **référence vers un objet Unity** (`GameObject`, `Transform`, etc.).

Dans cette section, nous verrons les variables et leurs **types**.

## Int

Le type `int` (_integer_) sert à stocker un **nombre entier**.

```csharp title="Déclaration"
public int chickenQty;
```

```csharp title="Assignation"
chickenQty = 10;
```

## Float

Le type `float` sert à stocker un **nombre décimal**.

```csharp title="Déclaration"
public float myFloat;
```

```csharp title="Assignation"
myFloat = 1.5f;
```

!!! note "`f`"

    En C#, un nombre décimal comme `1.5` a un type « **Double** ». Pour un `float`, on écrit `1.5f`.

## Bool

Le type `bool` sert à stocker `true` ou `false`.

```csharp title="Déclaration"
public bool myBool;
```

```csharp title="Assignation"
myBool = true;
```

## Vector2

Le type `Vector2` contient une **coordonnée 2D** (`x` et `y`).

```csharp title="Déclaration"
public Vector2 myVector2;
```

```csharp title="Assignation"
myVector2 = new Vector2(1f, 2f);
```

## Vector3

Le type `Vector3` contient une **coordonnée 3D** (`x`, `y` et `z`).

```csharp title="Déclaration"
public Vector3 myVector3;
```

```csharp title="Assignation"
myVector3 = new Vector3(4f, 22f, 1f);
```

## Tableau (array)

Une variable peut être un tableau. Il suffit d'ajouter `[]` pour la transformer en tableau.

```csharp title="Déclaration"
public int[] myInts;
```

Une fois le tableau créé, on doit lui indiquer combien d'éléments il comporte et leur donner une valeur. Deux options :

```csharp title="Option 1 : Valeurs dès la création"
// Ici, on a créé un tableau de 3 `int` et on assigne les valeurs directement
public int[] myInts = { 0, 2, 3 };
```

```csharp title="Option 2 : Taille, puis remplissage manuel"
// Ici, on a créé un tableau de 4 `int`
myInts = new int[4];
// Ensuite, on assigne les valeurs une à une
myInts[0] = 2;
myInts[1] = 4;
myInts[2] = 5;
myInts[3] = 1;
```

```csharp title="Option 3 : Taille, puis remplissage par boucle"
// Ici, on a créé un tableau de 4 `int`
myInts = new int[4];

// Ensuite, on assigne les valeurs avec une boucle par exemple
for (int i = 0; i < myInts.Length; i++)
{
    myInts[i] = 0;
}
```

!!! tip "Tableaux dynamiques"

    [`List<T>`](https://learn.unity.com/course/intermediate-gameplay-scripting/tutorial/lists-and-dictionaries) est une alternative aux [tableaux](https://learn.unity.com/course/ai-ml-curricular-framework-resources/tutorial/arrays-9o) quand on veut une taille **dynamique**.

## Variables Unity

Unity a des types qu'on utilise souvent pour **référencer** des objets et **modifier** leurs paramètres.

### GameObject

`GameObject` permet de référencer un objet présent dans la **_Hierarchy_**.

```csharp title="Déclaration"
public GameObject myGameObject;
```

Si la variable est visible dans le panneau _Inspector_, tu peux glisser un GameObject depuis le panneau _Hierarchy_ dans le champ correspondant.

![](../images/gameObject.png)

Une fois qu'on a une référence, on peut lire ou modifier certains éléments :

```csharp title="Exemple 1"
// Ici, on vérifie le nom du GameObject
if (myGameObject.name == "nom")
{
}
```

```csharp title="Exemple 2"
// Ici, on vérifie le tag du GameObject
if (myGameObject.CompareTag("tag"))
{
}
```

```csharp title="Exemple 3"
// Ici, on désactive le GameObject !
myGameObject.SetActive(false);
```

```csharp title="Exemple 4"
// Ici, on change la position du GameObject
myGameObject.transform.position = new Vector3(0f, 0f, 0f);
```

### Transform

`Transform` permet de contrôler la **position**, la **rotation** et l'**échelle** d'un GameObject référencé.

```csharp
public Transform myTransform;
```

```csharp
// Position
myTransform.position = new Vector3(0f, 0f, 0f);
// Rotation
myTransform.rotation = Quaternion.Euler(90f, 0f, 0f);
// Scale
myTransform.localScale = new Vector3(2f, 2f, 2f);
```

On peut aussi modifier la transformation du GameObject qui contient le script avec `transform`.

```csharp
// Position
transform.position = new Vector3(0f, 0f, 0f);
// Rotation
transform.rotation = Quaternion.Euler(90f, 0f, 0f);
// Scale
transform.localScale = new Vector3(2f, 2f, 2f);
```

### Camera

`Camera` permet de contrôler certains paramètres de la caméra.

```csharp
public Camera myCamera;
```

```csharp
myCamera.fieldOfView = 50f;
```

### Animator

`Animator` permet de contrôler la composante Animator d'un GameObject.

```csharp
public Animator myAnimator;
```

`Play()` joue une animation (ou un state) par son nom.

```csharp
myAnimator.Play("monAnim");
```

`SetBool`, `SetInt` et `SetFloat` permettent de modifier les paramètres ajoutés à l'Animator.  

```csharp
myAnimator.SetBool("myBool", false);
```

### AudioSource et AudioClip

`AudioClip` permet d'assigner un clip audio.
`AudioSource` permet de jouer du son.

```csharp
public AudioSource lecteur; // Le composant sur l'objet
public AudioClip musiqueEpee; // Le fichier son dans ton projet
```

```csharp
// Joue le son une seule fois
lecteur.PlayOneShot(musiqueEpee);
```

### Color

`Color` permet de choisir une couleur via une palette.

```csharp
public Color myColor;
```

```csharp
Color orangeColor = new Color(1.0f, 0.64f, 0.0f, 1.0f);
```

!!! info "Valeurs de couleurs"

    `Color` utilise des valeurs entre **0 et 1**. Si tu veux entrer des valeurs **0 à 255**, utilise plutôt `Color32`.

    ```csharp
    Color32 perfectGrey = new Color32(173, 173, 173, 200);
    ```

### Sprite et SpriteRenderer

Ces deux types travaillent toujours ensemble pour afficher des images 2D dans votre jeu.

- `Sprite` : C'est le fichier image lui-même (dans votre dossier Project).
- `SpriteRenderer` : C'est le Component (sur un GameObject)

`Sprite` permet d'assigner des sprites (images 2D).

```csharp
public Sprite portraitHero;         // L'image à afficher
public SpriteRenderer renduVisuel;   // Le composant qui affiche l'image
```

#### Changer l'image (Le "Swap")

C'est très utile pour changer l'apparence d'un personnage (ex: ramasser une armure, changer d'arme).

```csharp
// On remplace le sprite actuel par un nouveau
renduVisuel.sprite = portraitHero2;
```

#### Modifier l'apparence

Le SpriteRenderer permet de teinter l'image ou de la rendre invisible sans toucher au fichier original.

```csharp
// Ici, on met le perso en bleu semi-transparent (0.5f d'alpha)
renduVisuel.color = new Color(0f, 0.5f, 1f, 0.5f);
```

#### Miroir (Flip)

Vous pouvez retourner l'image horizontalement ou verticalement via le code, très utilisé pour les déplacements gauche/droite.

```csharp
// Si true, le personnage regarde vers la gauche (si l'image de base regarde à droite)
renduVisuel.flipX = true;
```

## Public / Private

En C#, `public` est accessible depuis d'autres scripts.

Dans Unity, un **champ sérialisé** apparaît dans l'Inspector :

- une variable `public` est automatiquement sérialisée
- une variable `private` doit être précédé de `[SerializeField]` pour être visible dans `Inspector`.

  ```csharp title="Exemple"
  [SerializeField] private GameObject myGameObject;
  ```