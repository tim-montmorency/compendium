# Bibliothèque d'exemples

Tous les exemples montrés ici sont disponibles sur le [projet disponible ici](https://github.com/tim-montmorency/bibliotheque-exemples). Vous pouvez le télécharger et explorer avec les sujets en dessous.

[Projet Unity de la bibliothèque](https://github.com/tim-montmorency/bibliotheque-exemples){ .md-button }

## Persistance de données

Différents scenarios dans le jeux vidéo exigent que certaines variables sont enregistrées entre une scène et l'autre. Par exemple, quand on veut charger une session de jeu antérieure ou le progrès du jeu. Il y a différent façons de planifier et implementer cette fonctionnalités. 

### High Score persistant ou record de meilleurs scores

Unity a un système de persistance appelé **PlayerPrefs** pour préserver des données simples (comme des variable **floats** ou de **string**) entre différents sessions de jeu. Le **PlayerPrefs** est une classe avec de paires de méthodes pour lire et pour écrire des valeurs à la base de données persistantes, associés à une clef (c.à.d. un id en texte). Par exemple `GetInt()` et `SetInt()`, `GetString()` et `SetString()`, etc. 

Avec cette système, on a crée une composante **HighScorePresistant** qui montre le valeur du record et de la pontage actuel à l'écran. Quand le pointage est plus grand que le record, son valeur est enregistrée sur le **PlayerPrefs** avec la clé `HIGHSCORE` (mais qui peu être customisé). Cette vérification est faite chaque foi que le pointage change à travers de la méthode publique `OnChangerPointage(int nouvellePointage)`. Dans la scène exemple, on utilise une etiquette en rouge pour montrer le record et une en noir pour montrer la pointage actuel. 

![Screenshot 2025-02-20 153036](https://github.com/user-attachments/assets/f2fc403f-73c5-4d8b-b9c8-dc73eb136796)

Dans cet exemple, les points sont changés à chaque second passé, comme aux jeux arcade de survie et évasions. Le code pour cette comportement de exemple est sur le script `ExemplePointage`.

Voici le code pour la composante **HighScorePresistant**. 

```csharp
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;

public class HighScorePersistant : MonoBehaviour
{
    // etiquettes UI utilisés pour montrer 
    // le pointage plus élévé et l'actuel
    public TextMeshProUGUI texteHighScore;
    public TextMeshProUGUI textePointage;

    // clé utilisé pour enregistrer le pointage dans
    // la base du PlayerPrefs
    public string highscoreClef = "HIGHSCORE";

    // variables pour le record et le pointage actuel
    private int _highScoreActuel = 0;
    private int _pointageActuel = 0;

    void Start()
    {
        // initialisation de pointage
        _pointageActuel = 0;
        // chargement du record enregistré avec la highscoreClef
        // si il n'y a pas de record, la valeur sera 0
        _highScoreActuel = PlayerPrefs.GetInt(highscoreClef, 0);

        // actualise les etiquettes de l'UI
        texteHighScore.text = _highScoreActuel.ToString();
        textePointage.text = _pointageActuel.ToString();
    }

    // cette méthode est publique, donc elle peut être
    // appellé à partir d'autres composantes
    public void OnChangerPointage(int nouvellePointage)
    {
        // changer le pointage actuel
        _pointageActuel = nouvellePointage;

        // si c'est le nouveau record
        if (_pointageActuel > _highScoreActuel)
        {
            _highScoreActuel = _pointageActuel;
            // enregistrement du nouveau record
            PlayerPrefs.SetInt(highscoreClef, _highScoreActuel);
        }

        // actualise les etiquettes de l'
        textePointage.text = _pointageActuel.ToString();
        texteHighScore.text = _highScoreActuel.ToString();
    }
}

```

## Décomptes et timers

### Méthode `Invoke()` et `InvokeRepeating()`

La méthode `Invoke()` nous permet d'exécuter une méthode dans le même script après un délai initial. Avec la méthode `InvokeRepeating()` on peut choisir un délai initial et un intervalle pour répéter l'exécution.

Voici un exemple d'utilisation de ces 2 méthodes au `Start()`.

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

        // Exécution initiale après 5s avec repétition à chaque 10s
        InvokeRepeating("MonMethodeExempleRepetee", 5f, 10f);

        // La méthode en dessous annule toutes les 
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

Voici le résultat dans la **Console** (notez les timecodes) : 

![Screenshot 2025-02-13 142923](https://github.com/user-attachments/assets/b1763940-b5d8-439b-a317-75e3388c520f)

### Coroutines

Les [coroutines](coroutines.md) vont nous permettre de "pauser" une méthode dans le même script et de la continuer après un délai. Les étapes pour les utiliser sont:

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
	    
	    // Appel de la coroutine que j'ai définie
	    // en-dessous au moment où mon script
	    // est activé dans la scène.
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

### Minuterie avec événements

La composante **MinuterieEvents** nous permet de configurer 2 [événements](<#evenement-avec-methode-originale) différents au **Inspector** : un exécute à chaque second (`OnChaqueSecond(int secondActuel)`) et l'autre quand le comptage termine (`OnTermine()`). Avec cette composante et le prefab **MinuterieAvecEvenements**, la scène montre un **Text** dynamique à l'écrán et on peut configurer multiples comportements pour ces deux événements avec nos scripts.

![Screenshot 2025-02-20 153433](https://github.com/user-attachments/assets/a7eb9660-b4d6-488b-aa01-7c1bf566d000)

Voici le code pour la composante. Il utilise une [coroutine](#Coroutines) qui active les méthodes configurés aux moments adéquats.

```csharp
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.Events;

public class MinuterieEvents : MonoBehaviour
{
    public int duration = 60;
    public bool compterLeZero = false;
    private TextMeshProUGUI _texte;
    private int _compteur;

    public UnityEvent<int> onChaqueSecond;
    public UnityEvent onTermine;

    void Start()
    {
        _texte = GetComponentInChildren<TextMeshProUGUI>();
        StartCoroutine("CommencerMinuterie");
    }

    IEnumerator CommencerMinuterie()
    {
        _compteur = duration;
        _texte.text = _compteur.ToString();

        while (_compteur >= 1)
        {
            yield return new WaitForSeconds(1f);
            _compteur -= 1;
            onChaqueSecond.Invoke(_compteur);
            _texte.text = _compteur.ToString();
        }

        if (compterLeZero == false) { 
            yield return new WaitForSeconds(1f);
        }
        onTermine.Invoke();
    }

}
```

### Minuterie avec redémarrage

Le prefab **MinuteRedemarrage** combine la composante [MinuterieAvecEvents](<#Minuterie avec événements>) avec un script que redémarre la scène actuel quand le comptage termine. Pour utiliser le prefab, il faut juste l'ajouter à la scène. Voici sa configuration base. 

![Screenshot 2025-02-20 144925](https://github.com/user-attachments/assets/37f23e29-8595-4ecb-b8a1-9aaa1fb65e16)

## Contrôle d'UI et menus

### Événement avec méthode préexistante

On peut utiliser les [événements](evenements.md) pour exécuter différents méthodes déjà disponibles sur un **GameObject** de la scène. Un exemple important est l'activation (ou désactivation) d'un **GameObject**. Pour faire ça, on connecte le GameObject avec le champ sous "Runtime Only" et après on peut choisir une méthode liste sur le dropdown à droite et configurer ses paramètres (ex. le checkbox). 

Voici l'événement sur l'**Inspector** (dans une composante **Button** d'un bouton à mon **Canvas**) : 

![Screenshot 2025-02-13 120845](https://github.com/user-attachments/assets/9165991f-5770-42b7-a1a6-d42fef537676)

Cette configuration va exécuter la méthode `SetActive()` du GameObject  **MonObjetExemple** avec une valeur de `true` (checkbox est coché). L'objet va être activé sur la scène.

### Événement avec méthode originale

Pour exécuter une méthode originale (c.à.d. créée dans un de nos scripts) dans un [événement](evenements.md) de l'**Inspector**, il faut que 1) le script avec la méthode soit attaché a un **GameObject** de la scène, et 2) que cette méthode soit publique.

Voici mon script (appelé `MonScriptExemple` et attaché à un objet **MonObjetExemple** à la scène) : 

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MonScriptExemple : MonoBehaviour
{
    // Cette méthode va être disponible sur la boite 
    // d'événement parce qu'elle est publique
    public void MonMethodeExemple()
    {
        Debug.Log("La méthode exemple a executé.");
    }
}
```

Voici l'événement sur l'Inspector (dans une composante **Button** d'un bouton à mon **Canvas**) : 

![Screenshot 2025-02-13 170726](https://github.com/user-attachments/assets/3fd98783-c0a8-455b-871e-2d6ae272bdf3)

### Activation simple d'élement d'UI

On peut utiliser l'[Événement avec méthode préexistante](<#Événement avec méthode préexistante>) pour créer des boutons pour activer et désactiver des panneaux et d'autres éléments de l'interface utilisateur.

Voici un exemple de **Canvas** avec différents boutons (**Activer**, **Désactiver** et **X**) qui utilisent les événements et la méthode `GameObject.SetActive()` pour contrôler le **Panel** à droite.

![Screenshot 2025-02-13 144819](https://github.com/user-attachments/assets/7a46d3e5-c3c3-46a4-8929-26cdc75c0d4e)

Voici la configuration des événements pour chaque **Button** : 

![Screenshot 2025-02-13 145014](https://github.com/user-attachments/assets/36abc802-76e2-4c3c-995c-9b58df9c5a65)

![Screenshot 2025-02-13 145039](https://github.com/user-attachments/assets/57d5f234-ed9f-4b87-bcc9-fe5b14053d0f)

![Screenshot 2025-02-13 145051](https://github.com/user-attachments/assets/d2194b19-267f-4fad-b11b-c6aba2336d25)

### Changer les propriétés de l'UI à partir d'un script

De façon générale, le processus pour changer une propriété d'UI à partir d'un script a la structure suivante :

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
    // Ces variables vont être configurées
    // dans l'Inspector
    public TextMeshProUGUI textChrono;
    public Slider sliderOnde;
    public Image imageAlternance;

    void Update()
    {
        // Montrer le temps depuis le démarrage sous forme de texte
        textChrono.text = Time.time.ToString("00.0");

        // Montrer la valeur d'une onde avec un slider
        sliderOnde.value = Mathf.Sin(Time.time) * 0.5f + 0.5f;

        // Changer la propriété color de l'Image pour donner une teinte
        // à partir de la valeur du slider
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
