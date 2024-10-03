document.addEventListener("DOMContentLoaded", function () {
    let totalFruits = 0;
    const fruitElements = [
        { id: "apple", label: "apple-label" },
        { id: "orange", label: "orange-label" },
        { id: "cherries", label: "cherries-label" },
        { id: "kiwi", label: "kiwi-label" },
        { id: "melon", label: "melon-label" },
        { id: "banana", label: "banana-label" }
    ];

    // Tableau pour stocker les fruits cliqués
    let clickedFruits = [];

    fruitElements.forEach(function (fruit) {
        const fruitElement = document.getElementById(fruit.id);
        fruitElement.addEventListener("click", function () {
            // Incrémente le compteur du fruit
            const labelElement = document.getElementById(fruit.label);
            let currentCount = parseInt(labelElement.textContent);
            currentCount++;
            labelElement.textContent = currentCount;

            // Incrémente le total de fruits
            totalFruits++;
            document.getElementById("total").textContent = `${totalFruits} fruits`;

            // Si le fruit n'a pas déjà été cliqué, l'ajouter à la liste
            if (!clickedFruits.includes(fruit.id)) {
                clickedFruits.push(fruit.id);
            }

            // Vérifie si tous les fruits ont été cliqués
            if (clickedFruits.length === fruitElements.length) {
                document.getElementById("toast").classList.add("show");
            }
        });
    });
});