/**
 * Take an array and flatten it.
 * [3, 4, [5, 6]]
 */
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
 * Example 
 */
let array = [3, 4, [5, 6], [7, 8], [9]];
let fArray = flattenArray(array);
console.log(fArray);
