// const fs = require('fs');
// const filepath = 'data.json';

// const content = fs.readFileSync(filepath, {encoding: 'utf8', flag: 'r'});
// const data = JSON.parse(content);

// write your code bellow

const data = require('./data.json');


// 1
console.log(typeof data);


// 2
console.log(data[0]);


// 3
const nbPersons = data.length
console.log(data.length);


// 4
// console.log(data[4])

for (let i = 0; i < data.length; i ++) {
    if (data[i].ranking === 4) {
        console.log(data[i]);
    // } else console.log("Ce n'est pas la bonne personne.")
    }
}

// on peut utiliser ".find" et ".filter" aussi.


// 5
// for (let i = 0; i < data.length; i ++) {
//     let sommeAge = 0
//     sommeAge += data.age
//     console.log(sommeAge)
// }


let sommeAge = 0;
for(const item of data) {
    sommeAge += item.age;
}

const moyenne = sommeAge/nbPersons; // nbPersons = data.length
console.log("La moyenne d'âges est ", moyenne);


// Correction

// const fs = require('fs');
// const filepath = 'data.json';

// const content = fs.readFileSync(filepath, {encoding: 'utf8', flag: 'r'});
// const data = JSON.parse(content);

// write your code bellow


// // 1 - Affichage du type de la données
// const nom = "Laïla"
// console.log("Etape 1: " + typeof (nom));

// // 2. Affichage du 1er objet du tableau
// console.log(data[0]);

// // 3. Stocker le nombre de personnes
// const nbPersons = data.length;
// console.log("Il y a " + nbPersons + " personnes");

// // 4. Candidate arrivée au 4e rang
// const candidateNumberFour = data.filter(item => (item.ranking === 4));  
// console.log("Candidate #4 est " , candidateNumberFour);

// // 5. Âge moyen des candidates

// let sommeAges = 0;
// for (const item of data){
//     sommeAges = sommeAges + item.age;
//     // sommeAges += item.age;
// }
// const moyenne = sommeAges/nbPersons;
// console.log("La moyenne d'âges est ", moyenne);
