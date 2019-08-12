/**
 * Geeks: https://www.geeksforgeeks.org/quick-sort/
 */
class QuickSorFirstPivot {
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
			let pivotIndex = this.sortPartitionByLastPivot(arr, startIndex, endIndex);
			this.quickSort(arr, startIndex, (pivotIndex-1));
			this.quickSort(arr, (pivotIndex + 1), endIndex);
		}
	}

	/*Pivot is implemented based upon middle*/
	sortPartitionByLastPivot(arr, startIndex, endIndex) {

		let pivotValue = arr[startIndex];

		let highItr = endIndex + 1;

		/* Iterate till left itr keeps smaller than right itr */
		for(let i = endIndex; i > startIndex; --i) {
			if(arr[i] >= pivotValue) {
                highItr--;

				/* Swap highItr and i.*/
				let temp = arr[highItr];
				arr[highItr] = arr[i];
				arr[i] = temp;
			}
		}

        /* Swap highItr+1 and startIndex(pivot) */
        highItr--;
		let temp = arr[highItr];
		arr[highItr] = arr[startIndex];
		arr[startIndex] = temp;

		return highItr;
	}
}

qs = new QuickSorFirstPivot([1, 4, 5, 7, 8, 2, 1, 5, 6, 8, 0, -10, 8, 3, 9, -1, 0]);
qs.implementQuickSort();