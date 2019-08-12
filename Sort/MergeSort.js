class MergeSort{
	constructor(arr) {
		this.arr = arr;
	}

	runMergeSort() {
		console.log(this.arr, this.arr.length)
		this.splitArr(this.arr, 0, (this.arr.length - 1));
		console.log(this.arr)
	}

	/**
	 * Split array => sort => array
	 */
	splitArr(arr, start, end) {
		if(start < end) {
			let middle = Math.floor((start + end)/2);
			this.splitArr(arr, start, middle);
			this.splitArr(arr, (middle + 1), end);
			this.mergeArr(arr, start, middle, end);
		}
	}

	/**
	 * Merge array after sorting
	 */
	mergeArr(arr, start, middle, end) {
		let leftArrIndex = start, 
			rightArrIndex = (middle + 1), 
			sortedArr = [];

		/**
		 * Iterating left array to the middle and 
		 * Right array to an end index
		 */
		while(leftArrIndex <= middle || rightArrIndex <= end) {
			
			/*Validating data present for swapping else adding at last*/
			if(leftArrIndex <= middle && rightArrIndex <= end) {
			if(arr[leftArrIndex] < arr[rightArrIndex]) {
				sortedArr.push(arr[leftArrIndex]);
				leftArrIndex++;
			} else {
				sortedArr.push(arr[rightArrIndex]);
				rightArrIndex++;
			}
			} else if(leftArrIndex <= middle) {
				sortedArr.push(arr[leftArrIndex]);
				leftArrIndex++;
			} else if(rightArrIndex <= end) {
				sortedArr.push(arr[rightArrIndex]);
				rightArrIndex++;
			} else {
			console.log("this shit shouldn't come")
			}
		}

		/*Copying dummy array to main array*/
		for(let i = start, j = 0; i <= end; ++i, ++j) {
			this.arr[i] = sortedArr[j];
		}
	}
}

m = new MergeSort([1, 4, 5, 7, 8, 2, 1, 5, 6, 8, 0, -10, 8, 3, 9, -1, 0]);
m.runMergeSort();