/**
 * A function which generates the apertures of given width 'n' over an array 'arr'
 * @param {*} n : width of aperture
 * @param {*} arr : array of input
 * @returns: array of aperture arrays
 */
function aperture(n, arr) {
    return arr.map(
        (valeurCourante, index) => arr.slice(index, index + n)
    );
}

/** Examples of use */
// const ap = aperture(2, [1, 2, 3, 4]); // [[1, 2], [2, 3], [3, 4]]
// const ap = aperture(3, [1, 2, 3, 4]); // [[1, 2, 3], [2, 3, 4]]
const ap = aperture(5, [1, 2, 3, 4]); // []
console.log(ap);