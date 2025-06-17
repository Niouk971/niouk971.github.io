// Exercice 2 : Compteur

// Objectif : Incrémentation / décrémentation de texte dans le DOM.

// Crée une page avec :

// Un bouton "Ajouter"

// Un bouton "Enlever"

// Un bouton "Reset"

// Un élément <p> qui affiche un nombre (initialement 0)

// À chaque clic, le nombre change.

const addButton = document.getElementById('add');
const removeButton = document.getElementById('remove');
const resetButton = document.getElementById('reset');
const variableAfficher = document.querySelector("p");

let compteur = 0

addButton.addEventListener("click", () => {
    compteur = compteur + 1
    variableAfficher.innerText = compteur
});

removeButton.addEventListener("click", () => {
    compteur = compteur - 1
    variableAfficher.innerText = compteur
});

resetButton.addEventListener("click", () => {
    compteur = 0
    variableAfficher.innerText = compteur
});
