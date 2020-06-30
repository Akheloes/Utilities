/**
 * Defers invoking a function until the current call stack has cleared.
 */
function defer(func, ...args) {
    setTimeout(()=>{
        func(...args);
    }, 0);
}

/**
 * Defer function in JS style
 */
const deferJS = (fn, ...args) => setTimeout(fn, 0, ...args);

/**
 * Exemple of use
 */
function func(a, b, c) {
    console.log(a + b + c);
}
deferJS(func, 0, 0, 99); // 6
// defer(func, 0, 0, 99); // 6
func(0, 1, 2); // 3
func(0, 1, 7); // 8