/**
 * Takes an array and returns the accumulated version.
 * Example:
 * [1, 2, 3] -> [1, 3, 6]
 */
function accumulateArray(array) {
    return array.map(
        (currentItem, indexItem) => {
            if(indexItem === 0) return currentItem;
            return array.slice(0, indexItem + 1).reduce(
                (accumulator, currentValue) => {
                    return accumulator + currentValue;
                }
            );
        }
    );
}

let array = [1, 2, 3, 4, 5];
let acc = accumulateArray(array);
console.log(acc);