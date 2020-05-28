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
const ap = aperture(4, [1, 2, 3, 4, 5, 6, 7, 9, 10]);
console.log(ap);