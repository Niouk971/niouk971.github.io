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

// soluce 2 (à compléter)

// const peopleHasKey = ['Pierre', 'Laure', 'Mathilde', 'Vi'];

// function hasKey(firstname){
//     for(let i = 0; i < peopleHasKey.length; i ++){
//         if (peopleHasKey[i] === firstname) {
//             return `Est-ce que ${firstname} a les clés ? Oui.`
//         }
//         return `Est-ce que ${firstname} a les clés ? Non.`
//     }
// }

// console.log(hasKey('Pierre'))
// console.log(hasKey('Jerem'))
// console.log(hasKey('Laure'))
// console.log(hasKey('Mathilde'))
// console.log(hasKey('Vi'))

// soluce 3

// function hasKey(firstname){
//     let peopleHasKey = ['Pierre', 'Laure', 'Mathilde', 'Vi'];
//     if(firstname === 'Pierre' || firstname === 'Laure' ||firstname === 'Mathilde' ||firstname === 'Vi'){
//         return `Est-ce que ${firstname} a les clés ? Oui.`
//     }
//     return `Est-ce que ${firstname} a les clés ? Non.`
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

// const peopleHasKey = [
//     {
//     firstname: "Pierre",
//     hasKey: true,
//     },
//     {
//     firstname: "Jerem",
//     hasKey: false,
//     },
//     {
//     firstname: "Laure",
//     hasKey: true,
//     },
//     {
//     firstname: "Mathilde",
//     hasKey: true,
//     },
//     {
//     firstname: "Vi",
//     hasKey: true,
//     }
// ]

// const pierre = { //objet
//     firstname: "Pierre",
//     hasKey: true,
// }

// console.log(pierre.firstname, pierre.hasKey)

// const pierre = ["Pierre", true, "Paris", false];
// const samir = ["Samir", false, "Paris", true];
// const users = [pierre, samir];

// for(let i = 0; i < users.length; i ++) {
//     console.log(users[0][0], users[1][0]);
// }

// exemple restaurant

const restaurant = {
    name: "Mcdo",
    menus: ["McFirst", "Best of", "Maxi Best of", "McWrap"],
}

// console.log(`Le restaurant ${restaurant.name} propose le menu ${restaurant.menus[0]}`);

// for(let i = 0; i < restaurant.menus.length; i ++){
//     console.log(`Le restaurant ${restaurant.name} propose les menus ${restaurant.menus[i]}`);
// }

console.log(`Le restaurant ${restaurant.name} propose ${restaurant.menus.length} menus :`);

let numberMenus = 4

function menusMcdo(numberMenus) {
    numberMenus = 0
    for(let i = 0; i < restaurant.menus.length; i ++) {
        if (a) {
            return restaurant.menus
    }
}

console.log(`Le restaurant ${restaurant.name} propose ${restaurant.menus.length} menus.
Les menus sont les suivants : ${menusMcdo(0)}`);
}
