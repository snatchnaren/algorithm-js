function getKnapsackMaxWeight(items, weights, itemSize, totalCapacity) {

    /* Building array of items array */
    matrixTracker = new Array((itemSize + 1));
    /* Initialising 2d */
    for(let i = 0; i <= itemSize; ++i) {
        matrixTracker[i] = new Array((totalCapacity + 1)).fill(0)
    }
    console.log(matrixTracker)
    for(let item = 1; item <= itemSize; ++item) {
        for(let capacity = 1; capacity <= totalCapacity; ++capacity) {
            let withoutCurrentItem = matrixTracker[(item-1)][capacity],
                withCurrentItem = 0,
                currentItemWeight = weights[(item - 1)];

            /* If capcity holds current item weight */
            if(capacity >= currentItemWeight) {
                withCurrentItem = val[(item - 1)];

                /* Adding previous item if capcity is available */
                let remainingCapcity = capacity - currentItemWeight;

                withCurrentItem += matrixTracker[(item - 1)][remainingCapcity];
            }
            
            matrixTracker[item][capacity] = Math.max(withCurrentItem, withoutCurrentItem);
        }
    }
    console.log(matrixTracker)
    return matrixTracker[itemSize][totalCapacity];
}
let w = 10,
    n = 4,
    val = [10, 40, 30, 50],
    wt = [5, 4, 6, 3];

console.log(getKnapsackMaxWeight(val, wt, n, w));