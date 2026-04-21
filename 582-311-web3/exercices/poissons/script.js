class Poisson {
  constructor(nom, img) {
    this.nom = nom;
    this.img = img;
  }

  print() {
    return `${this.nom} (${this.img}) nage joyeusement.`;
  }

}

// Création de 100 poissons
// https://pixelgnome.itch.io/fish
const aquarium = [];
const aquariumDiv = document.getElementById('aquarium');

for (let i = 1; i <= 100; i++) {
  const nom = `Poisson${i}`;
  const imageIndex = Math.floor(Math.random() * 10) + 1;
  const poisson = new Poisson(nom, `./assets/images/poissons/${imageIndex}.png`);
  aquarium.push(poisson);
}


aquarium.forEach(poisson => {
  // 1. Créer un élément image
  const img = document.createElement('img');

  // 2. Assigner la source de l'image avec .src
  img.src = poisson.img;
  
  // 3. Ajouter une classe css pour la position absolue
  img.classList.add('poisson');

  // 4. En variables, déterminer une position aléatoire
  const maxX = aquariumDiv.offsetWidth - 50; // - 50 pour la taille du poisson
  const maxY = aquariumDiv.offsetHeight - 50; // - 50 pour la taille du poisson
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  // 5. Positionner l'image
  img.style.left = `${x}px`;
  img.style.top = `${y}px`;

  // 6. Ajouter l'image dans la page
  aquariumDiv.appendChild(img);
});

