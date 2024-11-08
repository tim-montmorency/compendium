Nous verrons ici les matériaux dans Unity.   


      

## Créer un matériel
- [ ] Pour créer un matériel, faites un clic-droit dans la fenêtre projet, puis Create, material.
- [ ] Nommez ensuite le matériel.
- [ ] Si vous voulez que votre matériel soit transparent, changez le surface type pour Transparent.
- [ ] Pour modifier la couleur du matériel, modifiez la couleur du paramètre Base Map.
- [ ] Dans surface Input, vous pouvez glisser les textures que vous avez créer dans d'autres logiciels.
- [ ] Le paramètre Emission permet au matériel d'émettre de la lumière.


## Problème de matériel
Parfois, les matériaux deviennent rose. Cela est dû à la méthode de rendu que vous pouvez avoir modifié entre deux projets. Voici comment rectifier la situation:     

- [ ] Dans la barre de menu sélectionnez Edit -> Rendering -> Materials -> Convert all Built-in materials to HDRP 

## Matériel physique
Les matériels physiques permettent de donner des propriétés aux objets ou aux surfaces. Par exemple, ils peuvent être rebondissants ou glissants.  

- [ ] Clic droit la la fenêtre project, Create, Physic Material.
- [ ] Nommez ensuite le matériel.
- [ ] En modifiant les différents paramètres, vous pourrez rendre le matériel plus ou moins glissant ou rebondissant.
- [ ] Pour assigner le matériel à un objet, ouvrez celui-ci dans l'inspecteur.
- [ ] Ensuite, dans le paramètre Material du collider de l'objet, glissez le matériel que vous avez créé.

## Modifier un matériel avec le script
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
