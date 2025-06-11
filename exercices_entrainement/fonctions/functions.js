// Écrire une fonction qui prend en paramètre
// un moment de la journée (soit "matin", "midi", "après-midi", "soir")
// "matin" -> "J'ai trop hâte de continuer de coder !"
// "midi" -> "J'ai faim, j'en ai marre des bugs..."
// "après-midi" -> "Tchao les copins"
// "soir" -> "ZzzzZZZzzz"
// Appeler la fonction pour tester tous les cas possibles

// function showDayMoment(dayMoment){
//     if(dayMoment === "matin"){
//         console.log(`${dayMoment} : j'ai trop hâte de continuer de coder !`)
//     }
//     else if(dayMoment === "midi"){
//         console.log(`${dayMoment} : j'ai faim, j'en ai marre des bugs...`)
//     }
//     else if(dayMoment === "après-midi"){
//         console.log(`${dayMoment} : tchao les copins`)
//     }
//     else if(dayMoment === "soir"){
//         console.log(`${dayMoment} : zzzzZZZzzz`)
//     }
// }

// showDayMoment("matin")
// showDayMoment("midi")
// showDayMoment("après-midi")
// showDayMoment("soir")

// Écrire une fonction qui prend en paramètre une heure (ex: 9, 12, 18, etc.)
// et qui RETOURNE le moment correspondant
// getMomentFromHour(12) -> "midi"
// getMomentFromHour(18) -> "après-midi"

function getMomentFromHour(time){
    if(time === 12){
        return "midi"
    }
    else if(time > 12 && time <= 17){
        return "après-midi"
    }
    else if(time < 12 && time >= 0){
        return "matin"
    }
    else if(time >= 18){
        return "soir"
    }
}

console.log(getMomentFromHour(12))
console.log(getMomentFromHour(13))
console.log(getMomentFromHour(19))
console.log(getMomentFromHour(0))

// Combiner la fonction printEmotionFromMoment(moment)
// et getMomentFromHour(hour) pour dans une fonction
// printEmotionFromHour(hour)
// Exemples :
// printEmotionFromHour(12) -> affiche "J'ai faim, j'en ai marre des bugs..."
// printEmotionFromHour(22) -> affiche "ZzzzZzzz"

function printEmotionFromHour(hour){
    
}