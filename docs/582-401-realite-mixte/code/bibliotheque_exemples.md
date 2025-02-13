Tous les exemples montrés ici sont disponibles sur le [projet disponible ici](https://github.com/tim-montmorency/bibliotheque-exemples). Vous pouvez le télécharger et explorer avec les sujets en dessous.

[Projet Unity de la bibliothèque](https://github.com/tim-montmorency/bibliotheque-exemples){ .md-button }

## Décomptes et timers

### Méthode `Invoke()` et `InvokeRepeating()`

La méthode `Invoke()` nous permet des exécuter une méthode dans le même script après un délai initial. Avec la méthode `InvokeRepeating()` on peut choisir un délai initiale et un interval pour répéter l'exécution.

Voici un exemple d'utilisation de ses 2 méthodes au `Start()`.

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MonScriptInvoke : MonoBehaviour
{
    void Start()
    {
        // Exécution initiale après 3s seulement
        Invoke("MonMethodeExemple", 3f);

        // Exécution initiale après 5s avec repétitions à chaque 10s
        InvokeRepeating("MonMethodeExempleRepetee", 5f, 10f);

        // La méthode en dessous cancelle tous les 
        // exécutions faites avec Invoke() ou InvokeRepeating()
        // CancelInvoke();
    }

    void MonMethodeExemple()
    {
        Debug.Log("Juste une méthode exemple.");
    }

    void MonMethodeExempleRepetee()
    {
        Debug.Log("Juste une méthode exemple repetée.");
    }
}
```

Voici le résultat au **Console** (notez les timecodes) : 

![Screenshot 2025-02-13 142923](https://github.com/user-attachments/assets/b1763940-b5d8-439b-a317-75e3388c520f)

### Coroutines

Les [coroutines](./code/coroutines.md) vont nous permettre de "pauser" une méthode dans le même script et de la continuer après un délai. Les étapes pour les utiliser sont:

1. Il faut déclarer une méthode du type `IEnumerator`.
2. Après, on peut l'exécuter avec la méthode `StartCoroutine()`.

Voici un exemple de script avec une définition et une exécution de coroutine.

```csharp
using UnityEngine;
using System.Collections;

public class MaCoroutineSimple : MonoBehaviour
{
    void Start()
	{
	    Debug.Log("Message avant d'exécuter la coroutine");
	    
	    // Appel de la coroutine que j'ai defini
	    // en-dessous le moment que mon script
	    // est activé en scène.
	    StartCoroutine("MaCoroutine");
	
	    Debug.Log("Message pendant la pause");
	}

    // Définition d'une coroutine
    public IEnumerator MaCoroutine()
    {
        Debug.Log("Instruction avant la pause");
        // Pour appliquer une pause avec un délai à la coroutine 
        yield return new WaitForSeconds(1f);
        Debug.Log("Instruction après la pause");
    }
}
```

Le résultat de cette coroutine sur notre **Console** (notez les timecodes) : 

![Screenshot 2025-02-13 122836](https://github.com/user-attachments/assets/774caa55-5617-4462-86b5-6b9f4c7c0623)

## Contrôle d'UI et menus

### Événement avec méthode préexistante

On peut utiliser les [événements](code/evenements.md) pour exécuter différents méthodes déjà disponibles sur un **GameObject** dela scène. Un exemple important est la activation (ou désactivation) d'un **GameObject**. Pour faire ça, on connecte le GameObject avec le champ en dessous "Runtime Only" et après on peut choisir une méthode liste sur le dropdown à droite et cpondigurer ses paramètres (ex. le checkbox). 

Voice l'événement sur l'**Inspector** (dans une composante **Button** d'un bouton à mon **Canvas**) : 

![Screenshot 2025-02-13 120845](https://github.com/user-attachments/assets/9165991f-5770-42b7-a1a6-d42fef537676)

Cette configuration va exécuter la méthode `SetActive()` du GameObject  **MonObjetExemple** avec un valeur de `true` (checkbox est coché). Le objet va être activé sur la scène.

### Événement avec méthode originale

Pour exécuter une méthode originale (c.à.d. créer dans un de nos scripts) dans un [événement](code/evenements.md) au **Inspector**, il faut que 1) le script avec la méthode est attaché a un **GameObject** de la scène, et 2) que cette méthode soit publique.

Voici mon script (appelé `MonScriptExemple` et attaché à un objet **MonObjetExemple** à la scène) : 

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MonScriptExemple : MonoBehaviour
{
    // Ce méthode va être disponible sur la boite 
    // d'événement parce qu'il est publique
    public void MonMethodeExemple()
    {
        Debug.Log("La méthode exemple a executé.");
    }
}
```

Voici l'événement sur l'Inspector (dans une composante **Button** d'un bouton à mon **Canvas**) : 

![Screenshot 2025-02-13 170726](https://github.com/user-attachments/assets/3fd98783-c0a8-455b-871e-2d6ae272bdf3)

### Activation simple d'élement d'UI

On peut utiliser le [Événement avec méthode préexistante](<#Événement avec méthode préexistante>) pour créer des boutons pour activer et désactiver des panneaux et d'autres éléments de l'interface utilisateur.

Voici un exemple de **Canvas** avec différents boutons (**Activer**, **Désactiver** et **X**) qui utilisent les événements et la méthode `GameObject.SetActive()` pour contrôler le **Panel** à droite.

![Screenshot 2025-02-13 144819](https://github.com/user-attachments/assets/7a46d3e5-c3c3-46a4-8929-26cdc75c0d4e)

Voici la configuration des événements pour chaque **Button** : 

![Screenshot 2025-02-13 145014](https://github.com/user-attachments/assets/36abc802-76e2-4c3c-995c-9b58df9c5a65)

![Screenshot 2025-02-13 145039](https://github.com/user-attachments/assets/57d5f234-ed9f-4b87-bcc9-fe5b14053d0f)

![Screenshot 2025-02-13 145051](https://github.com/user-attachments/assets/d2194b19-267f-4fad-b11b-c6aba2336d25)

### Changer les propriétés de l'UI à partir d'un script

De façon générale, le processus pour changer une propriété d'UI à partir dún script a la structure suivante :

1. Déclarer une variable publique du type de la composante ciblée (ex. `TextMeshProUGUI` pour texte, `Image` pour une image, etc).
2. Dans l'**Inspector**, connecter la variable du script avec le **GameObject** de l'élement d'UI à l'**Hierarchy**.
3. Changer les valeurs des propriétés de notre variable dans le script (ex. `monTextUI.text`, `maImage.color`).

L'exemple suivant montre des changements pour 3 types d'élement d'UI : **Text**, **Slider** et **Image**. 

Sur l'**Inspector** : 

![Screenshot 2025-02-13 151746](https://github.com/user-attachments/assets/3aae6098-9ab4-487a-90cf-8caebd7b9957)

Dans notre script `MonScriptChangerUI` : 

```csharp
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class MonScriptChangerUI : MonoBehaviour
{
    // Cettes variables vont être configurées
    // au Inspector
    public TextMeshProUGUI textChrono;
    public Slider sliderOnde;
    public Image imageAlternance;

    void Update()
    {
        // Montrer le temps depuis démarrage comme text
        textChrono.text = Time.time.ToString("00.0");

        // Montrer la valeur d'une onde avec un slider
        sliderOnde.value = Mathf.Sin(Time.time) * 0.5f + 0.5f;

        // Changer la propriété color de l'Image pour donner un tint
        // à partir du valeur du slider
        if(sliderOnde.value < 0.5f )
        {
            imageAlternance.color = Color.red;
        }
        else
        {
            imageAlternance.color = Color.blue;
        }
    }
}
```

<!--

4. Sujets à aborder pour la prog au TP1 de RM?
	1. Menu et UI
		1. Événement
			1. Référence a Game Objects (GO)
			2. [x] Utilisation de méthodes built-in
				1. `GameObject.SetActive()` dans un événement au Inspector.
			3. [x] Utilisation de méthodes propres
				1. L'Inspector peut montrer des méthodes publiques créer dans nos scripts.
		2. [x] Activation
			4. Référence à GOs
			5. En script
			6. [x] En événement
		3. [x] Montrer valeurs à l'UI
	2. Décomptes à rebours et des chronomètres
		4. [x] Coroutines
		5. [x] La méthode `Invoke()`
			1. [x] Exemple : `Invoke("NomMethode", 3f);`
		6. `Time.deltaTime` et `Time.time`
		7. Prise de décisions et conditions
	3. Images de détection
		1. Imprimer les images

-->
