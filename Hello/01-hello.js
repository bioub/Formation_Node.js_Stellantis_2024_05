const names = ['Romain', 'Ruddy', 'Jean', 'Paul', 123];

function hello(name) {
  return `Hello ${name}`;
}

for (const n of names) {
  console.log(hello(n));
}
