// let chauffeur = [
//     {
//         prenom: "Mathieu",
//         age: 22,
//     },
//     {
//         prenom: "Léa",
//         age: 15,
//     },
//     {
//         prenom: "Jean",
//         age: 17,
//     }
// ]

function autorisationConduite(prenom, age) {
    if (age >= 17) {
        console.log(`${prenom} est autorisé à conduire.`)
    } else console.log(`${prenom}, laisse ça !`)
}

autorisationConduite("Mathieu", 22);
autorisationConduite("Léa", 15);
autorisationConduite("Jean", 17);
