/**
 * Take an array and flatten it.
 * [3, 4, [5, 6]]
 */
function flattenArray(array) {
    for(let i=0; i<array.length; i++) {
        if(Array.isArray(array[i])) {
            let subArray = array.splice(i, 1)[0];
            let s = i;
            for(let index = 0; index<subArray.length; index++) {
                array.splice(s++, 0, subArray[index]);
            }
        }
    }
    return array;
}

/**
 * Example 
 */
let array = [3, 4, [5, 6], [7, 8]];
let fArray = flattenArray(array);
console.log(fArray);
