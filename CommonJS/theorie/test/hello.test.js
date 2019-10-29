const assert = require('assert'); // -> binaire node
const chalk = require('chalk'); // -> node_modules
const hello = require('../src/hello'); // -> dans le projet (toujours ./ ou ../)

try {
  assert.equal(hello('Romain'), 'Hello Romain');
  console.log(chalk.green('OK hello.test.js'));
}
catch (err) {
  console.log(chalk.red('Erreur hello.test.js'));
  console.log(err);
}
