class HeapSort {
    constructor(arr) {
        this.arr = arr;
        this.arrLength = arr.length;
    }

    runSort(option) {
        if(!this.arr|| this.arr.length === 0) {
            console.log("Array is EMPTY!");
            return;
        }

        console.log(`Before sorting: ${this.arr}`);

        /** 
         * Building jeap array which is a tree.
         * Starts from middle as by considering 
         * all elements after middle are childrens
         */
        for(let i = ((this.arrLength/2)-1); i >= 0; --i) {
            option === "MAX_HEAPIFY" ? 
                this.maxHeapify(this.arr, this.arrLength, i):
                this.minHeapify(this.arr, this.arrLength, i);
        }

        console.log(`Heap array: ${this.arr}`);

        // One by one extract an element from heap 
        for (let i = this.arrLength - 1; i >= 0; i--) { 
            
            /* Move current root to end to skip in heap array*/
            let temp1 = this.arr[0]; 
            this.arr[0] = this.arr[i]; 
            this.arr[i] = temp1; 

            // call max heapify on the reduced heap 
            option === "MAX_HEAPIFY" ? 
                this.maxHeapify(this.arr, i, 0) : 
                this.minHeapify(this.arr, i, 0); 
        } 

        console.log(`After sorting: ${this.arr}`);
    }

    /* To get an ascending order */
    maxHeapify(arr, heapLength, largestIndex) {
        let leftChildIndex = this.getLeftChildIndex(largestIndex),
            rightChildIndex = this.getRightChildIndex(largestIndex),
            i = largestIndex;
        
        /* Checkings its child boundaries */
        if(leftChildIndex >= heapLength) {
            return
        }

        /* Validating left child */
        if(leftChildIndex < heapLength && arr[i] < arr[leftChildIndex]) {
            i = leftChildIndex;
        }

        /* Validating right child */
        if(rightChildIndex < heapLength && arr[i] < arr[rightChildIndex]) {
            i = rightChildIndex;
        }

        /* Swapping occurs if one of child is largest */
        if(largestIndex !== i) {

            /* Swapping with largest element found at i */
            let temp = arr[largestIndex];
            arr[largestIndex] = arr[i];
            arr[i] = temp;

            this.maxHeapify(arr, heapLength, i)
        }
    }

    /* To get descending order */
    minHeapify(arr, heapLength, smallestIndex) {
        let leftChildIndex = this.getLeftChildIndex(smallestIndex),
            rightChildIndex = this.getRightChildIndex(smallestIndex),
            i = smallestIndex;

        /* Checkings its child boundaries */
        if(leftChildIndex >= heapLength) {
            return
        }

        /* Validating left child */
        if(leftChildIndex < heapLength && arr[i] > arr[leftChildIndex]) {
            i = leftChildIndex;
        }

        /* Validating right child */
        if(rightChildIndex < heapLength && arr[i] > arr[rightChildIndex]) {
            i = rightChildIndex;
        }

        /* Swapping occurs if one of child is smallest */
        if(smallestIndex !== i) {

            /* Swapping with smallest element found at i */
            let temp = arr[smallestIndex];
            arr[smallestIndex] = arr[i];
            arr[i] = temp;

            arr = this.minHeapify(arr, heapLength, i)
        }
        return arr;
    }

    getParenIndex(childIndex) {
        return Math.floor((childIndex - 1)/2);
    }

    getLeftChildIndex(parentIndex) {
        return ((parentIndex * 2) + 1);
    }

    getRightChildIndex(parentIndex) {
        return ((parentIndex * 2) + 2);
    }
}

let arr = [12, 11, 13, 5, 6, 7],
    h = new HeapSort(arr);
h.runSort("MAX_HEAPIFY");