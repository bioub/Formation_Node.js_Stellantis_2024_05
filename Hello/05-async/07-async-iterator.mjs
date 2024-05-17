import { setTimeout, setInterval } from 'node:timers/promises'

// setTimeout(1000).then(() => {
//   console.log('1s');
// });

// setTimeout peut s'écrire :
// await setTimeout(1000);
// console.log('1s');


// setInterval(1000).then(() => {
//   console.log('1s');
// });

// La limite des promesses est qu'il ne peut y avec qu'un résultat
// pas de sens d'écrire un setInterval comme ça :
// await setInterval(1000);
// console.log('1s');

// La nouveauté (peu connue encore) Async Iterator

for await (const timer of setInterval(1000)) {
  console.log('1s');
}