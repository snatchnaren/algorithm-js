/**
 * ANNOTATION: I HATE this algorithm
 * Geeks: https://www.geeksforgeeks.org/quick-sort/
 * Main: https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/tutorial/
 */
class QuickSort {
	constructor(arr) {
		this.arr = arr;
	}

	implementQuickSort() {
		console.log(this.arr);
		console.log(this.quickSort(this.arr, 0, this.arr.length));
	}

	quickSort(arr, startIndex, endIndex) {
		if(startIndex < endIndex) {
			let pivotIndex = sortPartitionByMiddlePivot(arr, startIndex, endIndex);
			quickSort(arr, startIndex, (pivotIndex-1));
			quickSort(arr, (pivotIndex + 1), endIndex);
		}
	}

	/*Pivot is implemented based upon middle*/
	sortPartitionByMiddlePivot(arr, startIndex, endIndex) {
		/*Pivot is implemented based upon middle*/
		let pivotIndex = Math.floor((endIndex - startIndex)/2),
			leftArrStartIndex = startIndex,
			leftArrEndIndex = pivotIndex,
			rightArrStartIndex = pivotIndex,
			rightArrEndIndex = endIndex,
			pivotValue = arr[pivotIndex];

		for (let i = leftArrStartIndex, j = rightArrStartIndex;
			i < leftArrEndIndex || j < rightArrEndIndex;
			++i, ++j) {

		}
		
		return pivotIndex;
	}
}