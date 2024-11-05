Vous devrez allumer une télévision avec une manette ou la lumière d'une torche en appuyant sur le trigger de votre controlleur.

## Matériel

Téléchargez une vidéo libre de droits depuis Internet.

## Requis Télévision

- [ ] Créez une télévision avec les objets 3D de Unity. L'écran doit être un Plane séparé de la structure de la télé.
- [ ] Sur l'écran, vous devez mettre une composante Video Player pour faire jouer votre vidéo.
- [ ] Créez un objet 3D qui représente une manette.
- [ ] On doit pouvoir récupérer la manette en vr, pour cela vous aurez besoin d'une composante XR Grab Interactable.
- [ ] Créez un script, dans celui-ci, vous devez créer une fonction qui activera (enable) la vidéo de la télévision lorsque le trigger de votre manette est enfoncé (Quand on tient la manette), explorer les interactor events sur la composante XR Grab Interactable.

## Requis Torche
- [ ] Créez une torche avec un objet 3D de Unity (Un objet 3D + un point light).
- [ ] La lumière doit suivre la torche (Enfant).
- [ ] On doit pouvoir récupérer la torche,  pour cela vous aurez besoin d'une composante XR Grab Interactable.
- [ ] Lorsque le trigger de votre manette est enfoncé, GameObject, SetActive de la torche dans la composante trigger du XR Grab

## Alternative

Vous pourriez faire le même exercice, mais allumer une torche (point light) plutôt que partir une vidéo sur une télévision.

## Notes de cours 📚

[📁 Créer une télévision](../consignes/travail2.md#3-creer-une-television){ .md-button }

[📁 Prendre la manette](../unity/interaction_vr.md#xr-grab){ .md-button }

[📁 Partir une vidéo avec la détection](../consignes/travail2.md#9-partir-ou-arreter-une-video-avec-la-detection){ .md-button }

[📁 Déclencher un script avec le trigger](../unity/interaction_vr.md#declencher-un-evenement-lorsquun-objet-est-selectionne){ .md-button }
