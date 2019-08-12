/**
 * Geeks: https://www.geeksforgeeks.org/quick-sort/
 */
class QuickSortLastPivot {
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

		let pivotValue = arr[endIndex];

		let lowItr = startIndex - 1;

		/* Iterate till left itr keeps smaller than right itr */
		for(let i = startIndex; i <= (endIndex - 1); ++i) {

			if(arr[i] <= pivotValue) {
                lowItr++;

				/* Swap lowItr and i.*/
				let temp = arr[lowItr];
				arr[lowItr] = arr[i];
				arr[i] = temp;
			}
		}

        /* Swap lowItr+1 and endIndex(pivot) */
        lowItr++;
		let temp = arr[lowItr];
		arr[lowItr] = arr[endIndex];
		arr[endIndex] = temp;

		return lowItr;
	}
}

qs = new QuickSortLastPivot([1, 4, 5, 7, 8, 2, 1, 5, 6, 8, 0, -10, 8, 3, 9, -1, 0]);
qs.implementQuickSort();