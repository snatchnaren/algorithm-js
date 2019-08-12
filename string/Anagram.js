/**
 * stopped this program as it goes too much lines of code.
 * Algorithm:
 *  - split paragraph to words by removing duplicate entry
 *  - iterate from first(i) and last(j)
 *      - k loop starts
 *          - i !== k
 *              - either default indexOf() or 
 *                  -use our developed function to find anagram between words
 *              - if found then add to map where parent will be key
 *              - before adding validate entry already present
 *  - return map
 * @param {string} paragraph 
 */
function findAnagram(paragraph) {
    /* splitting para into words array by removing duplicate entries */
    let wordArr = Array.from(new Set(paragraph.toLowerCase().split(' '))),
        wordLength = wordArr.length,
        middle = Math.floor(wordLength/2);
    for(let i = 0, j = (wordLength - 1); i < middle || j >= middle; ++i, --j) {

    }
}

/**
 * Anagram evaluation by words tracking system.
 * Process is little updated with unicode support.
 * SRC: https://www.youtube.com/watch?v=oHwDqfz1LGw 
 */
function isAnagram(input, validateInput) {
    let inputLen = input.length,
        validateInputLen = validateInput.length;
    
    /* making case in-sensitive */
    input = input.toLowerCase();
    validateInput = validateInput.toLowerCase();

    /* If length differs then skipping the process itself */
    if(inputLen !== validateInputLen) {
        return false;
    }

    /* To check for all unicode */
    let trackerArr = new Array(128).fill(0);

    /* Iterate on each char */
    for(let i = 0; i < inputLen; ++i) {
        trackerArr[input.charCodeAt(i)]++;
        trackerArr[validateInput.charCodeAt(i)]--;
    }

    /* filter tracker and finds whether its having non-zero elements */
    if(trackerArr.filter(tracker => tracker !== 0).length !== 0) {
        return false;
    }

    return true
}

console.log(isAnagram("Naren", "aren"));
console.log(isAnagram("Naren", "neran"));
console.log(isAnagram("Naren", "reann"));