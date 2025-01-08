# Caméra de détection
Pour pouvoir détecter des Images dans le monde réel, nous aurons besoin d'une caméra qui filme l'environnement qui nous entoure. C'est celle-ci qui analysera ce qu'elle voit et qui nous indiquera si elle détecte les images que nous lui demandons de surveiller. Vuforia a créé un objet caméra qui permet d'avoir ces fonctionnalités sans code.     

Voici comment changer la caméra de votre projet et préparer celui-ci pour la détection d'images:   

- [ ] Choisissez une scène ou créez-en une nouvelle pour la détection.
- [ ] Une fois dans la scène choisie, supprimez l'objet Main Camera dans la fenêtre Hierarchy.
- [ ] Dans cette même fenêtre, faites un clic-droit, sélectionnez Vuforia Engine, Ar Camera dans la liste.
- [ ] Une fois votre caméra créée, appuyez sur celle-ci dans la Hierarchy.
- [ ] Dans la fenêtre Inspector, vous apercevrez les composantes de la caméra. Dans l'objet Vuforia Behaviour, appuyez sur Open Vuforia Engine configuration.
- [ ] Dans la fenêtre de texte App License Key, vous devez coller la License que vous avez créée plus tôt. Si vous ne l'avez pas avec vous, appuyez sur Add License. Vous serez redirigé vers le site de Vuforia. Vous pourrez alors trouver votre license et la coller dans le champ approprié dans Unity.
- [ ] Appuyez sur Play pour tester votre projet. Si une caméra est connectée à votre ordinateur, vous devriez voir son image. De plus, il ne devrait pas y avoir d'erreur dans la console.

!!! warning "Attention"

    Vous devez avoir une seule caméra dans votre projet pour éviter les conflits.

