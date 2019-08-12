/**
 * For the love of god, i finally wrote something that awesome and
 * easily understandable than others as far as i know :P
 * 
 * SRC: https://www.geeksforgeeks.org/length-of-the-longest-substring-without-repeating-characters/
 * 
 * @param {string} inputStr 
 */
function getLongestSubstringWithoutRepeatingCharacter (inputStr) {
    let inputLen = inputStr.length,
        longestSubstring = "",
        currentLongestSubstring = inputStr.charAt(0);
    
    /* Iterate char by char */
    for (let i = 1; i < inputLen; ++i) {
        let currentChar = inputStr.charAt(i);

        /** 
         * Validate character present in the 
         * current longest selected substring 
         */
        if (currentLongestSubstring.indexOf(currentChar) >= 0) {
            if (longestSubstring.length < currentLongestSubstring.length) {
                longestSubstring = currentLongestSubstring;
            }
            currentLongestSubstring = `${currentChar}`;
        } else {
            currentLongestSubstring += currentChar;
        }
    }

    /* Checks for the last sub-string validation */
    if (longestSubstring.length < currentLongestSubstring.length) {
        longestSubstring = currentLongestSubstring;
    }

    return longestSubstring;
}

console.log('OUTPUT', getLongestSubstringWithoutRepeatingCharacter("abcabcdab"));
console.log('OUTPUT', getLongestSubstringWithoutRepeatingCharacter("aaaaa"));
console.log('OUTPUT', getLongestSubstringWithoutRepeatingCharacter("abdfcaebcabc"));
console.log('OUTPUT', getLongestSubstringWithoutRepeatingCharacter("ABDEFGABEF"));
console.log('OUTPUT', getLongestSubstringWithoutRepeatingCharacter("abcabcddcabfe"));