const fs = require('node:fs/promises');
const { resolve } = require('node:path');

async function copy() {
  try {
    const prettierrc = await fs.readFile(resolve(__dirname, '../.prettierrc'), { encoding: 'utf-8' });
    await fs.writeFile(resolve(__dirname, '../.prettierrc.copy'), prettierrc);
    console.log('Copy done');
  } catch (err) {
    console.log('Erreur : ' + err.message);
  }
}

copy();