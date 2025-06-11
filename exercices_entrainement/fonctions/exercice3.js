// le chiffre écrit en toutes lettres

// soluce 1

let arrayLetters = ["zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix"]

console.log(arrayLetters[0])

// soluce 2

function selectNumber(number){
    return arrayLetters[number]
}

console.log(selectNumber(9))

// soluce 3

function convertDigitToLetters(digit){
    if(digit === 1){
        return "un"
    }
    else if(digit === 2){
        return "deux"
    }
    else if(digit === 3){
        return "trois"
    }
    else if(digit === 4){
        return "quatre"
    }
    else if(digit === 5){
        return "cinq"
    }
    else if(digit === 6){
        return "six"
    }
    else if(digit === 7){
        return "sept"
    }
    else if(digit === 8){
        return "huit"
    }
    else if(digit === 9){
        return "neuf"
    }
    else if(digit === 10){
        return "dix"
    }
    return "Non"
}

console.log(convertDigitToLetters(6))
