# Déclencher à partir d'une détection
Nous avons créé un objet Image Target qui nous permet de détecter une image. Le Image Target contient aussi la composante Default Observer Event Handler qui nous permet de déclencher des événements si l'image est détectée ou encore si la détection prend fin. Nous allons voir comment.     

Dans la composante Default Observer Event Handler de votre Image Target, le premier paramètre vous permet de choisir la méthode avec laquelle vous détectez votre objet. Si vous sélectionnez seulement Tracked, dès que l'objet sera moyennement visible ou tout simplement absent de l'écran, l'événement de fin de détection se déclenchera. Si vous utilisez plutôt la méthode Tracked or Extended Tracked, la détection sera plus longue avant de prendre fin, par exemple, si on voit encore un coin de votre image, Vuforia prendra encore en compte qu'on la voit. Les deux méthodes fonctionnent, vous utiliserez l'une ou l'autre selon vos besoins.     

Après la méthode de détection, vous avez deux boîtes d'événements, la première se déclenche lorsque l'image est détectée et la deuxième lorsqu'on perd l'image. Les boîtes d'événement fonctionnent comme habituellement, ainsi vous pouvez glisser un GameObject et l'activer ou le désactiver ou encore déclencer un script... Si vous souhaitez faire apparaître un objet et qu'il suive votre image, vous devez placer cet objet comme enfant de votre Image Target. Pour ce faire, vous devez glisser votre objet sur le target dans la fenêtre Hierarchy. Une fois que c'est fait, ajustez la position de votre objet par rapport à l'image. Ce que vous voyez est ce qui sera affiché par-dessus l'image lorsqu'elle sera détectée.   

[:pencil: Événements](../code/evenements.md#evenement){ .md-button }    

