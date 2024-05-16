const { hello } = require('./hello');


const names = ['Romain', 'Ruddy', 'Jean', 'Paul'];


for (const n of names) {
  console.log(hello(n));
}
