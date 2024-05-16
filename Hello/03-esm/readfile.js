import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import chalk from 'chalk';

// WARNING : import.meta.dirname (depuis Node 20)
// toujours pas considéré stable (risque de disparaitre)

const prettierrc = await readFile(resolve(import.meta.dirname, '../.prettierrc'), { encoding: 'utf-8' });
console.log(chalk.red(prettierrc));
