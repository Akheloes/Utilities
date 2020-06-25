/**
 * Defers invoking a function until the current call stack has cleared.
 */
function defer(func, ...args) {
    setTimeout(()=>{
        func(...args);
    }, 0);
}

/**
 * Exemple of use
 */
function func(a, b, c) {
    console.log(a + b + c);
}
defer(func, 0, 0, 99); // 6
func(0, 1, 2); // 3
func(0, 1, 7); // 8