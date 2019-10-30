// REST Params
// Conversion : liste de valeurs (ici 3, 4) en un tableau ([3, 4])
// function sum(a, b) {
//   let result = a + b;
//   for (let i = 2; i < arguments.length; i++) {
//     result += arguments[i];
//   }
//   return result;
// }
function sum(a, b, ...nbs) {
  let result = a + b;

  result += nbs.reduce((acc, nb) => acc + nb, 0);

  return result;
}

console.log(sum(1, 2, 3, 4)); // 10

// SPREAD operator
// Conversion : un tableau ([3, 4]) en une liste de valeurs (ici 3, 4)

function multiply(a, b, c, d) {
  return a * b * c * d;
}

const nbs = [2, 3, 4, 5];
console.log(multiply(...nbs));

// REST ...nbs = 1, 2, 3, 4
// SPREAD a, b, c, d = ...nbs

// const clone = nbs.slice();
const clone = [1, ...nbs, 6];

// Destructurer
// En PHP
// $fullName = ['Romain', 'Bohdanowicz'];
// list($prenom, $nom) = $fullName;

//    [   2,     3, 4, 5]
const [deux, trois] = nbs;

const [two, three = 3] = nbs;
const [   , dos, ...otros] = nbs;

// aussi sur des objets
const coords = {x: 1, y: 2};
//       {x: 1   , y: 2}
// const {x: varX, y: varY} = coords;
// const {x: x   , y: y} = coords;

const {x, y} = coords;

// REST / SPREAD sur un objet (ES9+)
const clone = {...coords};
const coords3d = {...coords, z: 3};

const { z = 0, ...coords2d } = coords3d;
console.log(z) // 3
console.log(JSON.stringify(coords2d)) // {"x": 1, "y": 2}
