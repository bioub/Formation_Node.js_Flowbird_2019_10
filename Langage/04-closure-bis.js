// portée de module / globale
function externe(msg) {
  // portée de closure (peut sauvegarder des valeurs)
  function interne() {
    // portée locale
    console.log(msg);
  }

  return interne;
}

const hello = externe('Hello');
const bye = externe('Bye');
hello();
bye();
bye();
hello();
// interne === undefined

// pile d'appels
// ^
// |
// |          log
// |externe - interne
// +----------------> temps


for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
// dans 1 sec :  3 3 3

for (var i = 0; i < 3; i++) {
  setTimeout(externe(i), 1000);
}
// dans 1 sec : 0 1 2

for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
// dans 1 sec : 0 1 2

