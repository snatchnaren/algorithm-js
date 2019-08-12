function calculatePower (inputNumber, powerValue) {
    /* If power is zero then returning result as one */
    let powerResult = 1;
    for (let i = 1; i <= powerValue;) {

        /* Multiplying it. */
        powerResult *= inputNumber;

        /**
         * If (i*i) <= powerValue then multiplying it with same power 
         * and incrementing with same power accordingly.
         * And skipping one as it gives inifinite loop due to same result as 1
         */
        if((i*i) <= powerValue && i !== 1) {
            powerResult *= powerResult;
            i *= i;
        } else {
            ++i;
        }
        console.log(`i: ${i}, powerResult: ${powerResult}`)
    }
    return powerResult;
}

console.log(calculatePower(2, 30))
console.log(calculatePower(3, 2))