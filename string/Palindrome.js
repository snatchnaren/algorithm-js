function isPalindrome(input) {

    /* Converts to lower case and removing spaces */
    input = input.toLowerCase().replace(/[^a-zA-Z]/,"");

    for(let i = 0, len = input.length, j = (len - 1); i < len; ++i, --j) {
        if(input.charAt(i) !== input.charAt(j)) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("Naren"));
console.log(isPalindrome("Naran"));
console.log(isPalindrome("naran"));
console.log(isPalindrome("Madam"));
console.log(isPalindrome("nurses run"));