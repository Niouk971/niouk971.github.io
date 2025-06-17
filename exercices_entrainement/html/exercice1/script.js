// Exercice 1 : Changer la couleur d’un carré

// Objectif : Manipulation d’un élément via document.getElementById() et style.

// Crée une page avec un carré <div> de 100x100 pixels.

// Ajoute 3 boutons : "Rouge", "Vert", "Bleu".

// Quand on clique sur un bouton, la couleur du carré change en conséquence.


const redButton = document.getElementById('rouge')
const greenButton = document.getElementById('vert')
const blueButton = document.getElementById('bleu')

const square = document.querySelector("#square")

redButton.addEventListener("click", () => {
    square.style.backgroundColor = "red"
})

greenButton.addEventListener("click", () => {
    square.style.backgroundColor = "green"
})

blueButton.addEventListener("click", () => {
    square.style.backgroundColor = "blue"
})
