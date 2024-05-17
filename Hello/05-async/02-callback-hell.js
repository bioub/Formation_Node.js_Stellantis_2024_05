const fs = require('node:fs');
const { resolve } = require('node:path');

try {
  const prettierrc = fs.readFileSync(resolve(__dirname, '../.prettierrc'), { encoding: 'utf-8' });
  fs.writeFileSync(resolve(__dirname, '../.prettierrc.copy'), prettierrc);
  console.log('Copy done');
} catch (err) {
  console.log('Erreur : ' + err.message);
}

// Callback Hell / Pyramid of Doom (style pas lisible)
fs.readFile(resolve(__dirname, '../.prettierrc'), { encoding: 'utf-8' }, (err, prettierrc) => {
  if (err) {
    console.log('Erreur : ' + err.message);
  } else {
    fs.writeFile(resolve(__dirname, '../.prettierrc.copy'), prettierrc, (err) => {
      if (err) {
        console.log('Erreur : ' + err.message);
      } else {
        console.log('Copy done');
      }
    });
  }
});
