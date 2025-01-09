# Modifier un matériel avec le script
Voici un exemple de code qui pourra vous aider à comprendre comment modifier les paramètres d'un matériel dans le script:     
``` csharp
public GameObject cube;
public Color couleurRouge; 

private void OnTriggerEnter(Collider other)
    {
        if(other.tag == "Player")
        {
            //Modifier la couleur de l'objet
            cube.GetComponent<Renderer>().material.color = couleurRouge;

            //Modifier l'émission du matériel de l'objet
            cube.GetComponent<Renderer>().material.SetVector("_EmissiveColor", couleurRouge * 2.0f); 
        }
        
    }
```
