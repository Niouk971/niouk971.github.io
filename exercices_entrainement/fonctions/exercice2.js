// retourne un tableau de prix aléatoire entre 1 et 10

function getRandom(articlesCount){
    let array = []
    for(let i = 0; i < articlesCount; i ++){
        array.push(Math.floor(Math.random() * 10) + 1)
    }
    return array
}

console.log(getRandom(10))
