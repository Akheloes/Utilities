/**
 * @todo: a function which calculates the size of an input object
 * This function recurses through an object structure, finds all object within it, then
 */
function objectSizeCalculator(object) {
        
}

/**
 * @todo: takes an object, and travels it to detect all objects within, stores them in an array.
 * In the end, it returns a basic array where all items are primitive types.
 */
function objectContent(object) {
    let pile = [];
    const content_ = Object.entries(object);
    // for (let [key, value] of content_) {
    //     console.log(`${key}: ${value}`);
    // }
    for(let [key, value] of content_) {
        pile.push(key); // keys can only be 'string' typed in ES spec
        if(typeof(value) !== 'object') {
            pile.push(value); // if value is a primitive type, just pile it
        } else {
            let innerPile = objectContent(value); // otherwise, depth-examine value
            pile = pile.concat(innerPile); // and pile its decorticated structure
        }
    }
    return pile;
}

/**
 * @todo: returns the size of a primitive object based on its type
 * Here are the types:
    Boolean, Null, Undefined, Number, BigInt, String, Symbole.

 */
function sizeOfType(object) {
    const type = typeof(object);
    switch(type) {
        case 'boolean':
            return TypeSize.BOOLEAN;
        case 'string':
            return TypeSize.STRING;
        case 'number':
            return TypeSize.NUMBER;
        case 'undefined':
            return TypeSize.UNDEFINED;
        case 'null':
            return TypeSize.NULL;
    }
}

// Size of primitive types in Bytes
let TypeSize = {
    STRING: 2,
    BOOLEAN: 4,
    NUMBER: 8,
    UNDEFINED: 0,
    NULL: 0
}

TypeSize = Object.freeze(TypeSize);

//-----------------------------------------------------

let obj = {a: 1, b: {c: 2}, d: {e: {f: {g: 3}}}}
let content = objectContent(obj);
console.log(content);