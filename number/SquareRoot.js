/**
 * findSquareRoot finds perfect square from total.
 * 
 * SRC: https://www.geeksforgeeks.org/square-root-of-an-integer/
 * 
 * @param {Number} inputNumber 
 */
function findSquareRoot (inputNumber) {
    let i = 1, result = 1;
    while (result <= inputNumber) {
        ++i;
        result = i * i;
    }
    return i;
}

console.log(findSquareRoot(16));