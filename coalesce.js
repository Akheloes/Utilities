/**
 * Returns the arguments which are not nullish
 * @param  {...any} args : array of arguments
 */
function coalesce(...args) {
    return args.filter(item => ![undefined, null, NaN].includes(item));
}

const res = coalesce(null, undefined, 'Cat', NaN, 'Dog'); // ''
console.log(res);
