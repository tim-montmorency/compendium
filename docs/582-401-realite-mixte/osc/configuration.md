# Tutoriel : Configurer OSC dans Unity pour communiquer avec d'autres logiciels

Dans ce tutoriel, nous allons voir comment configurer **OSC (Open Sound Control)** dans Unity afin de permettre l’échange de données avec d’autres logiciels.


### 1. Installation de l’extension OSC
- [ ] **Accéder au Unity Asset Store** pour télécharger l’extension.
  - [ ] Ouvrir un navigateur et se rendre sur le **Unity Asset Store**.
  - [ ] Rechercher [**extOSC**.](https://assetstore.unity.com/packages/tools/input-management/extosc-open-sound-control-72005)
  - [ ] Cliquer sur l’extension et appuyer sur **Add to My Assets**.
  - [ ] Si l’extension est déjà ajoutée, cliquer sur **Open in Unity**.

### 2. Importation dans Unity
- [ ] **Ouvrir le Package Manager** :
  - [ ] Aller dans **Window > Package Manager**.
  - [ ] En haut, sélectionner **My Assets** pour voir la liste des extensions téléchargées.
  - [ ] Si extOSC n’apparaît pas, cliquer sur **Load** en bleu.
- [ ] **Importer extOSC** :
  - [ ] Sélectionner **extOSC** et cliquer sur **Download**.
  - [ ] Cliquer ensuite sur **Import**.
  - [ ] Accepter les dépendances en cliquant sur **Install/Upgrade**.
  - [ ] Appuyez ensuite encore sur **Import**.
  - [ ] Une fois l'importation terminée, fermer le **Package Manager**.



### 3. Création de l’objet OSC dans la scène
- [ ] **Créer un objet vide pour OSC** :
  - [ ] **Clic droit dans la hiérarchie > Create Empty**.
  - [ ] Renommer l’objet **OSC**.
- [ ] **Ajouter les composants OSC** :
  - [ ] Aller dans **Inspecteur > Add component**.
  - [ ] Rechercher **OSC** et ajouter :
    - **OSC Receiver** (Récepteur OSC).
    - **OSC Transmitter** (Transmetteur OSC).


### 4. Création du script OSC
- [ ] **Créer un script OSC** :
  - [ ] Aller dans **Assets > Create > C# Script**.
  - [ ] Nommer le script **OSCScript** (ou un autre nom pertinent).
  - [ ] L’ajouter à l’objet **OSC**.
- [ ] **Ouvrir le script dans Visual Studio Code** et ajouter la bibliothèque OSC :
 
```csharp
using extOSC;

public class OSCScript : MonoBehaviour
{
    public OSCReceiver oscReceiver;
    public OSCTransmitter oscTransmitter;
}
```
### 5. Assigner les objets dans Unity
- [ ] Sélectionner l’objet **OSC** dans la hiérarchie.
- [ ] Glisser **OSC Receiver** et **OSC Transmitter** dans les champs correspondants du script.


## Tutoriel 🎥    
Voici comment configurer l'OSC dans votre projet Unity:     

<iframe class="w-100 aspect-16-9" src="https://www.youtube.com/embed/q57AlEb_x94?si=TjE51Sd0DSi_p1dz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
