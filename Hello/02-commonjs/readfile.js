const fs = require('node:fs');
const { resolve } = require('node:path');
const { default: chalk } = require('chalk');

// WARNING : import.meta.dirname (depuis Node 20)
// toujours pas considéré stable (risque de disparaitre)

const prettierrc = fs.readFileSync(resolve(__dirname, '../.prettierrc'), { encoding: 'utf-8' });
console.log(chalk.red(prettierrc));
