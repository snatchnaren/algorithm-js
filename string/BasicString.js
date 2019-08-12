class BasicString {
    stringReverse(input) {
        let inputArr = input.split(''), 
            inputLen = inputArr.length,
            middle = Math.floor(inputLen/2);
        for(let i = 0, j = (inputLen - 1); i < middle; ++i, --j) {
            let temp = inputArr[i];
            inputArr[i] = inputArr[j];
            inputArr[j] = temp;

        }
        let outputStr = inputArr.join('');
        return outputStr;
    }

    stringReverseOneLine(input) {
        return input.split('').reverse().join('');
    }
}

bs = new BasicString();
console.log(bs.stringReverse("narendrana"));
console.log(bs.stringReverseOneLine("sharmila devi i"));