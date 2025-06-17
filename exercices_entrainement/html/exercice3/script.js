// Exercice 3 : Afficher / Cacher du texte

// Objectif : Utiliser style.display pour modifier la visibilité d'un élément.

// Un paragraphe de texte.

// Un bouton "Afficher / Cacher".

// Quand on clique, le texte apparaît ou disparaît.

const paragraphe = document.getElementById("paragraphe");
const button = document.getElementById("button");

console.log(paragraphe)
console.log(button)

let userHasClicked = false

button.addEventListener("click", () => {
    if (userHasClicked === true) {
        userHasClicked = false
        paragraphe.style.display = "none"
    } else {
        userHasClicked = true
        paragraphe.style.display = "block"
    }
})
