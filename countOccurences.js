/**
 * 
 * @param {*} value : the counted value
 * @param {*} array : the array in which 'value' is counted
 */
function countOccurences(value, array) {
    return array.reduce((counter, currentValue) => {
        if(currentValue === value) { return ++counter; }
        else {
            return counter;
        }
    }, 0);
}

/**Exemple of use */
const array = [1, 2, 3, 1, 1];
const occurences = countOccurences(1, array);
console.log(occurences);