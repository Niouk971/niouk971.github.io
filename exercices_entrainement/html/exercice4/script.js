// Exercice 4 : Mini formulaire interactif

// Objectif : Lecture d'une valeur d'un champ input et affichage personnalisé.

// Un <input type="text">

// Un bouton "Valider"

// Un <p> vide

// Quand l'élève tape son prénom et clique sur "Valider", le <p> affiche :

// > Bonjour, [prénom] !

const prenom = document.getElementById("prenom");
const button = document.getElementById("valider");
console.log(prenom)

button.addEventListener("click", () => {
    console.log(prenom.value)
    document.getElementById("texteAffiché").innerText = "Bonjour, " + prenom.value
    }
)
