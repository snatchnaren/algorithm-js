class BasicSort{
	constructor(arr) {
		this.arr = arr;
	}

	bubbleSort() {
		let tempArr = this.arr.slice();

		/**
		 * To compare i and (i + 1), we reducing another one decrement 
		 * in array length. Else it will throw array index out of bounds
		 * exception
		 */
		for(let i = 0, arrLen = (tempArr.length - 1); i < arrLen; ++i) {
			for(let j = 0; j < (arrLen - i); ++j) {
				if(tempArr[j] > tempArr[(j+1)]) {
					let temp = tempArr[j];
					tempArr[j] = tempArr[(j+1)];
					tempArr[(j+1)] = temp;
				}
			}
		}
		/*[-10,-1,0,0,1,1,2,3,4,5,5,6,7,8,8,8,9]*/
		console.log(tempArr);
	}

	/**
	 * Search for minimum value and put it its index
	 */
	selectionSort() {
		let tempArr = this.arr.slice(), 
			minIndex = 0;

		for(let i = 0, arrLen = tempArr.length; i < arrLen; ++i) {
			minIndex = i;
			for(let j = (i + 1); j < arrLen; ++j) {
				if(tempArr[minIndex] > tempArr[j]) {
					minIndex = j;
				}
			}
			if(i !== minIndex) {
				let temp = tempArr[i];
				tempArr[i] = tempArr[minIndex];
				tempArr[minIndex] = temp;
			}
		}
		/*[-10,-1,0,0,1,1,2,3,4,5,5,6,7,8,8,8,9]*/
		console.log(tempArr);
	}

	/**
	 * Consider only its left or right elements
	 */
	insertionSort() {
		let tempArr = this.arr.slice();
		for(let i = 0, arrLen = tempArr.length; i < arrLen; ++i) {
			
			/*Taking current iValue as it remains constant*/
			let iValue = tempArr[i];
			let j = i;
			
			/*Not taking 0th element as it will throw index bound exception*/
			for(; j > 0 && iValue < tempArr[(j - 1)]; --j) {
				tempArr[j] = tempArr[(j - 1)]	
			}
			
			/*Swapping iValue with last jIndex*/
			tempArr[j] = iValue
			
		}
		/*[-10,-1,0,0,1,1,2,3,4,5,5,6,7,8,8,8,9]*/
		console.log(tempArr);
	}
}


b = new BasicSort([1, 4, 5, 7, 8, 2, 1, 5, 6, 8, 0, -10, 8, 3, 9, -1, 0]);
// b.bubbleSort();
// b.selectionSort();
b.insertionSort();