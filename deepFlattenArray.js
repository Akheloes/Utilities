/**
 * Take an array and flatten it.
 * Deals with deep leveled arrays.
 * [3, 4, [5, 6, [7, 8]]]
 */
function deepFlattenArray(array) {
    var array = [...array];
    while(containsSubArray(array)) { // the simple idea is: re-flatten as long as not entirely flatten
        array = flattenArray(array);
    }
    return array;
}

function containsSubArray(array) {
    for(let i=0; i<array.length; i++) {
        if(Array.isArray(array[i])) {
            return true;
        }
    }
    return false;
}

function flattenArray(array) {
    for(let i=0; i<array.length; i++) { // run through the array
        if(Array.isArray(array[i])) { // if an element is an array itself
            let subArray = array.splice(i, 1)[0]; // then take this sub-array
            let s = i;
            for(let index = 0; index<subArray.length; index++) {
                array.splice(s++, 0, subArray[index]); // add elements of sub-array to array in the position of sub-array
            }
        }
    }
    return array;
}

/**
 * Example of use
 */
let array = [3, 4, [5, 6, [7, 8, [9, 10]]]];
let flattened = deepFlattenArray(array);
console.log(flattened);