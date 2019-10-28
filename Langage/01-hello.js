'use strict';

/**
 * Une fonction qui dit bonjour
 * @param {string} name Le prénom
 * @returns {string} Le message de salutations
 */
function hello(name) {
  // return 'Hello ' + name;
  return `Hello ${name}`;
}

const names = ['Jean', 'Pierre', 'Martin'];

for (const name of names) {
  console.log(hello(name));
}
