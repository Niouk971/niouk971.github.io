// On souhaite creer une app qui permet de dire qui a les clefs de l'ecole

// L'objectif est de creer une fonction qui retourne 'oui' ou 'non'

// On donne en parametre, le prenom
// function hasKey(firstname)

// On va avoir un tableau avec les noms

// des personnes qui ont les clefs :

// ['Pierre', 'Laure', 'Mathilde', 'Vi']

// console.log(hasKey('Jerem')) // affiche 'non'
// console.log(hasKey('Laure')) // affiche 'oui'

//soluce 1

// function hasKey(firstname){
//     let peopleHasKey = ['Pierre', 'Laure', 'Mathilde', 'Vi'];
//     for(let i = 0; i < peopleHasKey.length; i ++){
//         if(firstname === peopleHasKey[0]){
//             return `Est-ce que ${firstname} a les clés ? Oui.`
//         } else if(firstname === peopleHasKey[1]){
//             return `Est-ce que ${firstname} a les clés ? Oui.`
//         } else if(firstname === peopleHasKey[2]){
//             return `Est-ce que ${firstname} a les clés ? Oui.`
//         } else if(firstname === peopleHasKey[3]){
//             return `Est-ce que ${firstname} a les clés ? Oui.`
//         } else {
//             return `Est-ce que ${firstname} a les clés ? Non.`
//         }
//     }
// }

// console.log(hasKey('Pierre'))
// console.log(hasKey('Jerem'))
// console.log(hasKey('Laure'))
// console.log(hasKey('Mathilde'))
// console.log(hasKey('Vi'))

// soluce 2

// function hasKey(firstname){
//     let peopleHasKey = ['Pierre', 'Laure', 'Mathilde', 'Vi'];
//     for(let i = 0; i < peopleHasKey.length; i ++){
//         if(firstname === 'Pierre' || firstname === 'Laure' ||firstname === 'Mathilde' ||firstname === 'Vi'){
//             return `Est-ce que ${firstname} a les clés ? Oui.`
//         } else {
//             return `Est-ce que ${firstname} a les clés ? Non.`
//         }
//     }
// }

// console.log(hasKey('Pierre'))
// console.log(hasKey('Jerem'))
// console.log(hasKey('Laure'))
// console.log(hasKey('Mathilde'))
// console.log(hasKey('Vi'))

// BONUS, level++ :

// L'objectif est de remplacer le tableau par un tableau d'object

// Exemple
// [
//   {
//     firstname: Pierre,
//     hasKey: true
//   },
//   {
//     firstname: Jerem,
//     hasKey: false
//   }
// ]

// Et la fonction ne prend plus de paramètre mais renvoie la liste (sous forme de tableau) des personnes qui ont les clefs

function hasKey(firstname){
    let peopleHasKey = [
        {
            firstname: Pierre,
            hasKey: true
        },
        {
            firstname: Jerem,
            hasKey: false
        },
        {
            firstname: Laure,
            hasKey: true
        },
        {
            firstname: Mathilde,
            hasKey: true
        },
        {
            firstname: Vi,
            hasKey: true
        },
    ]
    if(peopleHasKey[{hasKey: true}]){
        return "Yes"
    } else {
        return "No"
    }
}

console.log(hasKey('Pierre'))
