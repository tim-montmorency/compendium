# Composante Event Trigger

`Event Trigger` détecte les actions de la souris ou du clavier sur un GameObject (clic, survol, appui, relâchement...) sans code — directement dans l'Inspector.

**Pour l'ajouter :**

1. Sélectionne l'objet dans la *Hierarchy*.
2. Dans l'*Inspector* : **Add Component** → cherche **Event Trigger**.
3. Clique sur **Add New Event Type** et choisis l'action à détecter (ex. `Pointer Down`, `Pointer Up`).
4. Configure ce qui doit se produire, comme pour un [événement](evenements.md).

!!! tip "Pourquoi pas juste un `Button` ?"
    `Pointer Down` / `Pointer Up` permettent de distinguer le moment où on **appuie** de celui où on **relâche** — utile pour un bouton qu'on maintient enfoncé, ce qu'un simple `OnClick` ne permet pas.
