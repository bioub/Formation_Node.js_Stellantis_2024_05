import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

// TOP LEVEL AWAIT seulement si module ESM
try {
  const prettierrc = await readFile(resolve(import.meta.dirname, '../.prettierrc'), { encoding: 'utf-8' });
  await writeFile(resolve(import.meta.dirname, '../.prettierrc.copy'), prettierrc);
  console.log('Copy done');
} catch (err) {
  console.log('Erreur : ' + err.message);
}
