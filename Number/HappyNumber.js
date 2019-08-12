/**
 * 
 * @param {Number} inputNumber 
 */

function getSquareSum(input) {
    let squareSum = 0;
    while(input !== 0) {
        squareSum += ((input %10) * (input %2));
        input = Math.floor(input/10);
    }
    return squareSum;
}

function isHappyNumber (inputNumber) {
    let visitedSet = new Set();
    while(!visitedSet.has(inputNumber)) {
        visitedSet.add(inputNumber)
        inputNumber = getSquareSum(inputNumber)
    }
    return inputNumber === 1;
}

console.log(`Number 19 is Happy - ${isHappyNumber(19)}`)
console.log(`Number 20 is Happy - ${isHappyNumber(20)}`)