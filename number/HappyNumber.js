/**
 * Returns square sum of a number.
 * For 23, it will return (2*2) + (3*3) => 13
 * 
 * @param {Number} inputNumber 
 */
function getSquareSum(input) {
    let squareSum = 0;
    while(input !== 0) {
        remainderNumber = (input % 10)
        squareSum += (remainderNumber * remainderNumber);
        input = Math.floor(input/10);
    }
    return squareSum;
}

/**
 * Validates whether its a happy number or not.
 */
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