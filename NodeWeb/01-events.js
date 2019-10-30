const { EventEmitter } = require('events');

const events = new EventEmitter();


function createUser(name) {
  // TODO INSERT IN DB
  events.emit('user.created', name);
}

events.on('user.created', (name) => {
  console.log(`${name} user created`);
});

createUser('Romain');
createUser('Jean');
