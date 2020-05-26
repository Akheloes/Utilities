/**
 * Takes a function 'fn' and binds it to some arguments 'boundArgs', then applies those arguments and others 'args' in some context.
 * @param {*} fn : entry function to bind
 * @param {*} context : context to apply 'fn' within
 * @param  {...any} boundArgs 
 * @returns : a function which is bound version of 'fn'
 */
const bind = (fn, context, ...boundArgs) => (...args) => fn.apply(context, [...boundArgs, ...args]);

function fn(context, args) {
    return context + ' ' + this.boundArgs + ' ' + args;
}

const boundArgsObject = { boundArgs: 'boundArgs'};
const fnBound = bind(fn, boundArgsObject);
console.log(fnBound('context', 'args'));