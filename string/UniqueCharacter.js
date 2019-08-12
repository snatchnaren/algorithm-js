function getUniqueCharacter(inputStr) {
    let inputStrLen = inputStr.length;
    /**
     * We really dont need to check zeroth index as it keeps same
     */
    for(let i = 1; i < inputStrLen; ++i) {
        let subString = inputStr.substr(0, i).toLowerCase(),
            itrChar = inputStr.charAt(i).toLowerCase();
        if(subString.indexOf(itrChar) < 0) {
            return i;
        } 
    }
    return -1;
}

/* Output will be 7 as it seems perfectly good :P */
console.log(getUniqueCharacter("aaAAaaAB"));