// calcule le prix total

function calcTotalPrice(articles){
    let total = 0;
    for(let i = 0 ; i < articles.length ; i ++) {
        total += articles[i]; // total = total + articles[i]
    }
    return total
}

console.log(calcTotalPrice([1, 3, 4]))
