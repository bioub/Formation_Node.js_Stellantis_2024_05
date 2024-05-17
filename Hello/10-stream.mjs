// Stream :
// Abstraire la lecture ou l'écrire asynchrone (d'un fichier, du réseau)

import fs from 'node:fs';
import { createGzip } from 'node:zlib';

const rs = fs.createReadStream('bigfile.html');

rs.on('open', () => {
  console.log('[la lecture démarre]');
});

rs.on('data', (buffer) => {
  console.log("[paquet d'octets reçu]", buffer.length);
});

// cat bigfile.html | gzip > bigfile.html.zip
// prettier-ignore
fs.createReadStream('bigfile.html')
  .pipe(createGzip())
  .pipe(fs.createWriteStream('bigfile.html.zip'));
