import { EventEmitter } from 'node:events'

const events = new EventEmitter();

events.on('user.created', (user) => {
  console.log(`${user} created`);
})

// .off pour arrêter d'écouter (removeEventListener)
// .once pour écouter une fois


events.emit('user.created', 'romain');
events.emit('user.created', 'ruddy');