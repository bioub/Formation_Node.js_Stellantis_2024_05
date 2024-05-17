const fs = require('node:fs');
const { resolve } = require('node:path');

const prettierrc = fs.readFileSync(resolve(__dirname, '../.prettierrc'), { encoding: 'utf-8' });
console.log(prettierrc);


fs.readFile(resolve(__dirname, '../.prettierrc'), { encoding: 'utf-8' }, (err, prettierrc) => {
  console.log(prettierrc);
});
