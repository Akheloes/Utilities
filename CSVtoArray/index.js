function CSVtoArray(csv, delimiter = ',', ignoreFirstLine = false) {
    return csv
        .slice(ignoreFirstLine ? csv.indexOf('\n')+1 : 0)
        .split('\n')
        .map(line => line.split(delimiter).map(item => item.trim()))
}

const fs = require('fs');
const filePath = './hurricanes.txt';

let csvContent = fs.readFileSync(filePath, 'utf8');
let parsedCSV = CSVtoArray(csvContent);
console.log(parsedCSV);

// fs.readFile(filePath, 'utf8', (err, csv) => {
//     if(err) throw err;
//     let parsedCSV = CSVtoArray(csv);
//     console.log(parsedCSV);
// });