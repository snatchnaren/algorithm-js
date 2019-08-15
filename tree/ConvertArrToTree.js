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

class ConvertArrToTree {
    constructor(arr) {
        this.arr = arr;
        this.root = null;
        this.root = this.createTree(this.arr, this.root, 0);
        this.traverseTree(this.root)
    }

    createTree(arr, root, index) {
        if(index < arr.length) {
            root = new Node(this.arr[index]);
            root.setLeftNode(
                this.createTree(
                    arr, 
                    root.leftNode, 
                    ((index * 2) + 1)
                )
            )
            root.setRightNode(
                this.createTree(
                    arr, 
                    root.rightNode, 
                    ((index * 2) + 2)
                )
            )
        }
        return root
    }

    traverseTree(root) {
        if (root != null) { 
            this.traverseTree(root.leftNode); 
            console.log(root.data); 
            this.traverseTree(root.rightNode); 
        } 
    }
}


tree = new ConvertArrToTree([1, 2, 3, 4, 5, 6, 6, 6, 6])