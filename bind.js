const bind = (fn, context, ...boundArgs) => (...args) => fn.apply(context, [...boundArgs, ...args]);

function fn(context, args) {
    return context + ' ' + this.boundArgs + ' ' + args;
}

const boundArgsObject = { boundArgs: 'boundArgs'};
const fnBound = bind(fn, boundArgsObject);
console.log(fnBound('context', 'args'));