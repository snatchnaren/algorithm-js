class KMergeSort {
    constructor(arr) {
        this.arr = arr;
    }

    runKMergeSort() {
        console.log(`Before sort: ${this.arr}`)
        let minHeapArr = [], sortedArr = [];
        for(let i = 0, len = this.arr.length; i < len; ++i) {
            minHeapArr.push({
                value: this.arr[i][0], 
                elementIndex: 0, 
                arrayIndex: i
            });
        }

        this.heapify(minHeapArr)
        while(true) {
            let firstElement = minHeapArr.shift();
            
            sortedArr.push(firstElement.value);
            firstElement['elementIndex']++;
            if(
                firstElement.elementIndex < 
                this.arr[firstElement.arrayIndex].length
            ) {
                minHeapArr.unshift({
                    value: this.arr[firstElement.arrayIndex][firstElement.elementIndex], 
                    elementIndex: firstElement.elementIndex, 
                    arrayIndex: firstElement.arrayIndex
                })
            }
            if(minHeapArr.length === 0) {
                break;
            }
            this.heapify(minHeapArr)
            
        }
        console.log(`Sorted array: ${sortedArr}`)
    }

    heapify(minHeapArr) {
        for(let i = Math.floor((minHeapArr.length-1)/2); i >= 0; --i) {
            this.minHeapify(minHeapArr, minHeapArr.length, i);
        }
    }

    minHeapify(arr, heapLength, smallestIndex) {
        let i = smallestIndex,
            leftChildIndex = this.getLeftChildIndex(smallestIndex),
            rightChildIndex = this.getRightChildIndex(smallestIndex);
        
        if(leftChildIndex >= heapLength) {
            return
        }

        
        if(leftChildIndex < heapLength && 
            arr[leftChildIndex].value < arr[i].value) {
            i = leftChildIndex;
        }

        if(rightChildIndex < heapLength && 
            arr[rightChildIndex].value < arr[i].value) {
            i = rightChildIndex;
        }

        if(i !== smallestIndex) {
            let temp = arr[i];
            arr[i] = arr[smallestIndex];
            arr[smallestIndex] = temp;
            this.minHeapify(arr, heapLength, i)
        }
    }

    getLeftChildIndex(parentIndex) {
        return (2*parentIndex) + 1;
    }

    getRightChildIndex(parentIndex) {
        return (2 * parentIndex) + 2
    }

    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1)/2);
    }
}

let arrs = [
    [5, 6,  8,  16],
    [3, 7,  12, 13],
    [1, 10, 11, 15],
    [2, 4,  9,  14],
];
km = new KMergeSort(arrs);
km.runKMergeSort();