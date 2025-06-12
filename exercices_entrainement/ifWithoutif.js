function ifWithoutif(condition, trueValue, falseValue) {
    return condition * (trueValue - falseValue) + falseValue;
}

console.log("Result = ", ifWithoutif(1, 12, 29))
