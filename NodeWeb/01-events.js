const { EventEmitter } = require('events');

const events = new EventEmitter();


function createUser(name) {
  // TODO INSERT IN DB
  process.nextTick(() => {
    events.emit('user.created', name);
  });
}

events.once('user.created', (name) => {
  console.log(`${name} user created (once)`);
});

events.on('user.created', (name) => {
  console.log(`${name} user created`);
});

createUser('Romain');
createUser('Jean');

console.log('FIN');
