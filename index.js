const fs = require('fs');
const officegen = require('officegen');
const xlsx = officegen('xlsx');

let sheet = xlsx.makeNewSheet();
sheet.name = 'kukusheet';

for(let i = 0; i < 9; i++){
	sheet.data[i] = [];
	for(let j = 0; j < 9; j++){
		sheet.data[i][j] = (i + 1) * (j + 1);
	}
}

let out = fs.createWriteStream('9x9.xlsx');
xlsx.generate(out);
