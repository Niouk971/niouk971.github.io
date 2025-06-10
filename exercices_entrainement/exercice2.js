function getRandom(articlesCount){
    let array = []
    for(let i = 0; i < articlesCount; i ++){
        array.push(Math.floor(Math.random() * 10) + 1)
    }
    return array
}
console.log(getRandom(10))
