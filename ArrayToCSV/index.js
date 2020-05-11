const fs = require('fs');
/**
 * A function which converts two dimension arrays to CSV
 */
function arrayToCSV(array) {
    let outputString = '';
    for(let i=0; i<array.length; i++) {
        // let line = '' + array[i][0];
        let line = '';
        for(let j=0; j<array[i].length-1; j++) {
            line += array[i][j] + ', ';
        }
        line += array[i][array[i].length-1] + '\n';
        outputString += line;
    }

    // console.log(outputString);
    fs.writeFileSync('./output.txt', outputString);
}

/**
 * Example of use
 */

arrayToCSV([['a', 'b', 'c'], ['1', '2', '3']]);