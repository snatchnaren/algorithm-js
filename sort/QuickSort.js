/**
 * Geeks: https://www.geeksforgeeks.org/quick-sort/
 */
class QuickSort {
	constructor(arr) {
		this.arr = arr;
	}

	implementQuickSort() {
		console.log(this.arr);
		this.quickSort(this.arr, 0, (this.arr.length - 1));
		console.log(this.arr);
	}

	quickSort(arr, startIndex, endIndex) {
		if(startIndex < endIndex) {
			let pivotIndex = this.sortPartitionByMiddlePivot(arr, startIndex, endIndex);
			console.log(`pivotIndex: ${pivotIndex}, startIndex: ${startIndex}, endIndex: ${endIndex}`);
			this.quickSort(arr, startIndex, (pivotIndex-1));
			this.quickSort(arr, (pivotIndex + 1), endIndex);
		}
	}

	/*Pivot is implemented based upon middle*/
	sortPartitionByMiddlePivot(arr, startIndex, endIndex) {

		let pivotIndex = Math.floor((startIndex + endIndex)/2);

		/* Swap startIndex and pivotIndex */
		let temp = arr[startIndex];
		arr[startIndex] = arr[pivotIndex];
		arr[pivotIndex] = temp;

		/* After swap pivot value present in startIndex */
		let pivotValue = arr[startIndex];
		

		let lowItr = startIndex + 1,
			highItr = endIndex;

		/* Iterate till left itr keeps smaller than right itr */
		while(lowItr <= highItr) {

			/* finds highest element in left sub-array */
			while(arr[lowItr] <= pivotValue && lowItr <= highItr) {
				lowItr++;
			}
			/* finds lowest element in right sub-array */
			while(arr[highItr] > pivotValue) {
				highItr--;
			}

			if(lowItr <= highItr) {
				/* Swap lowItr and highItr. And moving to their next index */
				temp = arr[lowItr];
				arr[lowItr] = arr[highItr];
				arr[highItr] = temp;

				/* Moving lowItr and HighItr to its next index */
				lowItr++;
				highItr--;
			}
		}

		/* Swap startIndex and highItr */
		temp = arr[startIndex];
		arr[startIndex] = arr[highItr];
		arr[highItr] = temp;

		return highItr;
	}
}

qs = new QuickSort([1, 4, 5, 7, 8, 2, 1, 5, 6, 8, 0, -10, 8, 3, 9, -1, 0]);
qs.implementQuickSort();