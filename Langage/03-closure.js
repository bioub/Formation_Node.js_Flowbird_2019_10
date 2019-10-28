// portée de module / globale
function externe(msg) {
  // portée de closure
  function interne() {
    // portée locale
    console.log(msg);
  }
  interne();
}

externe('Hello');
// interne === undefined

// pile d'appels
// ^
// |log
// |interne
// |externe
// +----------------> temps
