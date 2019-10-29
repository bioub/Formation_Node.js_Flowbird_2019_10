const nbs = [2, 3, 4];

for (let i = 0; i < nbs.length; i++) {
  const nb = nbs[i];
  if (nb % 2 === 0) {
    const nbPair = nb;
    const square = nbPair ** 2;
    console.log(square);
  }
}

nbs.filter((nb) => nb % 2 === 0)
   .map((nbPair) => nbPair ** 2)
   .forEach((square) => console.log(square));


function setTimeoutSync(cb, delayMs) {
  const debut = Date.now();
  while (Date.now() < debut + delayMs);
  cb(delayMs);
}

setTimeoutSync((d) => {
  console.log(d + 'ms');
}, 1000);

console.log('FIN');

// pile d'appels
// ^
// |                         lg   lg
// |=> - => - =>   => - =>   => - =>
// |filter       - map     - forEach - lg
// +---------------------------------------> temps
//                           4    8    FIN
