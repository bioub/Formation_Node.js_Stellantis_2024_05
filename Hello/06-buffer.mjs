import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { Buffer } from 'node:buffer';

const buffers = await Promise.all([
  readFile(resolve(import.meta.dirname, '.prettierrc')),
  readFile(resolve(import.meta.dirname, '.editorconfig'))
]);

const bufferConcat = Buffer.concat(buffers);

