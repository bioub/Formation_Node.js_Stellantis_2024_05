const fs = require('node:fs/promises');
const { resolve } = require('node:path');

// try {
//   const prettierrc = fs.readFileSync(resolve(__dirname, '../.prettierrc'), { encoding: 'utf-8' });
//   fs.writeFileSync(resolve(__dirname, '../.prettierrc.copy'), prettierrc);
//   console.log('Copy done');
// } catch (err) {
//   console.log('Erreur : ' + err.message);
// }

fs.readFile(resolve(__dirname, '../.prettierrc'), { encoding: 'utf-8' })
  .then((prettierrc) => {
    return fs.writeFile(resolve(__dirname, '../.prettierrc.copy'), prettierrc)
  })
  .then(() => {
    console.log('Copy done');
  })
  .catch((err) => {
    console.log('Erreur : ' + err.message);
  });
