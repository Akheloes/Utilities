const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

const translate = x => x + 5;
const product = (x, y) => x*y;
const composedOperations = compose(translate, product)(2, 3);

console.log(composedOperations);