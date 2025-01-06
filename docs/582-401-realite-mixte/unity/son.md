# Jouer un son avec le code
``` csharp
public AudioSource myAudio; 

public void playAudio()
{
    myAudio.Play(); 
}
```

Ci-haut, on a un exemple de code simple pour jouer une AudioSource manuellement. En créant un objet public AudioSource, on peut glisser n'importe quel AudioSource de notre jeu dans ce script. Ensuite, lorsqu'on appelle la fonction playAudio, notre son sera joué.

``` csharp
myAudio.PlayDelayed(2f);
```

Si on ne veut pas faire jouer le son immédiatement, on peut utiliser PlayDelayed. On doit alors spécifier entre parenthèse le nombre de seconde de délais avant que notre son soit déclenché.
   
``` csharp
public AudioSource myAudio;
    public AudioClip myClip; 

    public void playAudio()
    {
        myAudio.PlayOneShot(myClip); 
    }
```

L'exemple ci-haut montre de quelle façon on peut faire jouer un clip avec la composante AudioSource. Ce qui est intéressant avec PlayOneShot, c'est qu'on doit spécifier à la source quel clip jouer, ainsi, on peut faire jouer des clips différents grâce à cette source. Play one shot comme son nom l'indique, jouera le clip une seule fois.    

``` csharp
myAudio.Pause();
```

Ce code permet de mettre l'audio sur pause.   


