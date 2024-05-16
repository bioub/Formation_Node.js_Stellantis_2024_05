import { hello } from './hello.js';

const names = ['Romain', 'Ruddy', 'Jean', 'Paul'];

for (const n of names) {
  console.log(hello(n));
}
