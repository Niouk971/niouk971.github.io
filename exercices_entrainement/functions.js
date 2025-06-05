// Écrire une fonction qui prend en paramètre
// un moment de la journée (soit "matin", "midi", "après-midi", "soir")
// "matin" -> "J'ai trop hâte de continuer de coder !"
// "midi" -> "J'ai faim, j'en ai marre des bugs..."
// "après-midi" -> "Tchao les copins"
// "soir" -> "ZzzzZZZzzz"
// Appeler la fonction pour tester tous les cas possibles

function showDayMoment(dayMoment){
    if(dayMoment === "matin"){
        console.log(`${dayMoment} : j'ai trop hâte de continuer de coder !`)
    }
    else if(dayMoment === "midi"){
        console.log(`${dayMoment} : j'ai faim, j'en ai marre des bugs...`)
    }
    else if(dayMoment === "après-midi"){
        console.log(`${dayMoment} : tchao les copins`)
    }
    else if(dayMoment === "soir"){
        console.log(`${dayMoment} : zzzzZZZzzz`)
    }
}

showDayMoment("matin")
showDayMoment("midi")
showDayMoment("après-midi")
showDayMoment("soir")
