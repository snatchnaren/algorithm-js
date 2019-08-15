class Node {
    constructor(data) {
        this.data = data;
        this.leftNode = this.rightNode = null;
    }

    setLeftNode(node) {
        this.leftNode = node;
    }

    setRightNode(node) {
        this.rightNode = node;
    }
}

class ConvertArrToBST {
    constructor(arr) {
        this.arr = arr;
        this.root = this.constructBSTTree(arr, 0, arr.length-1);
        this.preOrder(this.root)
    }

    constructBSTTree(arr, start, end) {
        if(start > end) {
            return null;
        }
        let middle = Math.floor((start + end)/2);
        let node = new Node(arr[middle]);
        node.leftNode = this.constructBSTTree(arr, start, (middle-1));
        node.rightNode = this.constructBSTTree(arr, (middle+1), end);
        return node
    }

    preOrder(node) { 
        if (node == null) { 
            return; 
        } 
        console.log(node.data); 
        this.preOrder(node.leftNode); 
        this.preOrder(node.rightNode); 
    } 
}

tree = new ConvertArrToBST([1, 2, 3, 4, 5, 6, 7])