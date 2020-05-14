const fs = require('fs');
/**
 * A function which converts two dimension arrays to CSV (the ugly way)
 */
function arrayToCSV(array) {
    let outputString = '';
    for(let i=0; i<array.length; i++) {
        let line = '';
        for(let j=0; j<array[i].length-1; j++) {
            line += array[i][j] + ', ';
        }
        line += array[i][array[i].length-1] + '\n';
        outputString += line;
    }

    fs.writeFileSync('./output.txt', outputString);
}

/**
 * The non naïve way
 */
function js_style_arrayToCSV(array, delimiter = ', ') {
    let content = array
      .map(v => v.join(delimiter))
      .join('\n');

    fs.writeFileSync('./output.txt', content);
}

/**
 * Example of use
 */
js_style_arrayToCSV([['a', 'b', 'c'], ['1', '2', '3']]);