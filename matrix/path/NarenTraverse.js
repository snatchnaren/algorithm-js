/**
 * NarenTraverse is a matrix traverse which will be helpful to
 * traverse from start node to end node in matrix.
 * It works on the concept of BFS.
 * Finds shortest traverse path from source to dest.
 * Similar approach: https://www.geeksforgeeks.org/shortest-distance-two-cells-matrix-grid/
 */
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get X() {
        return this.x;
    }

    get Y() {
        return this.y;
    }

    get Key() {
        return `KEY[${this.x}:${this.y}]`;
    }
}

Point.prototype.equals = function(o) {
    /* NaN check */
    if(!obj) {
        return false;
    }

    /* Make sure the object is of the same type as this */
    if(typeof obj != typeof this)
        return false;
    
    return (this.X === o.X && this.Y === o.Y);
};

Point.prototype.toString = function() {
    return `[${this.X}, ${this.Y}]`;
}

class NarenTraverse {
    constructor(arr, rowSize, columnSize) {
        this.arr = arr;
        this.rowSize = rowSize;
        this.columnSize = columnSize;
    }

    /**
     * Finds the shortest from source code to the destination node.
     * Using BFS in a queue(array).
     */
    getShortestPath() {
        /**
         * Find source to begin traverse or 
         * can we iterate and works when source dounds?
         */
        let {
            matrixMap, 
            sourcePoint, 
            destPoint
        } = this.getMapWithConnectedEdges();

        /* Validating processed values */
        if(!matrixMap || matrixMap.size === 0 || !sourcePoint || !destPoint) {
            return -1;
        }
        console.log(`Starting Node: ${sourcePoint}, distance: 0`)
        
        /* Iterate from source point */
        let queue = matrixMap.get(sourcePoint.Key);
        let visitedArr = new Array();

        /**
         * Starts from first level. 
         * 0th level is root node(Source). 
         */
        let minimumDistance = 1;
        let currentLevelNodeSize = queue.length;
        
        while(true) {
            if(queue.length === 0) {
                break;
            }
            
            /* Takes first element */
            let itrPoint = queue.shift();
            currentLevelNodeSize--;

            /* Pushing element to a visited array */
            visitedArr.push(itrPoint.Key);
            console.log(`Current Index: ${itrPoint}, currentLevelNodeSize: ${currentLevelNodeSize}, minDistance: ${minimumDistance} `);

            /* Validating whether it is a destination point */
            if(itrPoint.Key === destPoint.Key) {
                console.log("THROWING DISTANCE")
                return minimumDistance;
            }

            /**
             * Push its children back to a queue, 
             * removes visited elements and concat 
             **/
            queue = queue.concat(
                matrixMap.get(itrPoint.Key).filter(
                    val => visitedArr.indexOf(val.Key) === -1
                )
            );

            /**
             * If current level node is all used
             * then incrementing minimum distance and 
             * updates currentLevelNodeSize as per queue 
             */
            if(currentLevelNodeSize == 0) {
                minimumDistance++;
                currentLevelNodeSize = queue.length;
            }
        }
        return -1;
    }

    getTraversalPoint(sourcePoint) {
        let possibleDirectionX = [-1, 0, 1, -1, 1, -1, 0, 1],
            possibleDirectionY = [-1, -1, -1, 0, 0, 1, 1, 1],
            possibleDirectionLength = 8,
            traversalPontArr = [];

        for(let i = 0; i < possibleDirectionLength; ++i) {
            let destX = sourcePoint.X + possibleDirectionX[i],
                destY = sourcePoint.Y + possibleDirectionY[i];
            if(destX >= 0 && destX < this.rowSize &&
                destY >= 0 && destY < this.columnSize &&
                this.arr[destX][destY] !== '0'
            ) {
                traversalPontArr.push(new Point(destX, destY));
            }
        }
        return traversalPontArr;
    }

    getMapWithConnectedEdges() {
        /**
         * Map holds its possible connections from source
         */
        let matrixMap = new Map(), sourcePoint, destPoint;
        for(let i = 0; i < this.rowSize; ++i) {
            for(let j = 0; j < this.columnSize; ++j) {
                let arrValue = this.arr[i][j];
                if(arrValue !== '0') {
                    if(arrValue === 's') {
                        sourcePoint = new Point(i, j);
                    } else if(arrValue === 'd') {
                        destPoint = new Point(i, j);
                    }
                    let itrPoint = new Point(i, j),
                        traversalPontArr = this.getTraversalPoint(itrPoint);

                    if(traversalPontArr.length > 0) {
                        matrixMap.set(itrPoint.Key, traversalPontArr);
                    }
                }
            }
        }
        for (var [key, value] of matrixMap) {
            console.log(key + ' = ' + value);
        }
        console.log(`Source: ${sourcePoint}`, `Dest: ${destPoint}`)
        return {matrixMap, sourcePoint, destPoint};
    }
}

/**
 * 's' represents ‘source’
 * 'd' represents ‘destination’
 * '*' represents cell you can travel
 * '0' represents cell you can not travel
 */
let dummyMatrix = [
['0', '*', '0', 's', '*'],
['*', '0', '*', '*', '0'],
['0', '*', '*', '*', '*'],
['d', '*', '*', '*', '*'],
];

nt = new NarenTraverse(dummyMatrix, 4, 5);
console.log(nt.getShortestPath())