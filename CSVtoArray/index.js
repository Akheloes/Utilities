const fs = require('fs').promises;

function CSVtoArray(csv, delimiter = ',', ignoreFirstLine = false) {
    return csv
        .slice(ignoreFirstLine ? csv.indexOf('\n')+1 : 0)
        .split('\n')
        .map(line => line.split(delimiter).map(item => item.trim()))
}

const filePath = './hurricanes.txt';

async function read_parse() {
    let csv = await fs.readFile(filePath, 'utf8');
    return CSVtoArray(csv);
}

read_parse().then((parsedCSV) => {
    console.log(parsedCSV);
});