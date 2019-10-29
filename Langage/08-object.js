// L'objet JS est un dictionnaire
// equivalent PHP : tableaux associatifs

console.log(Math.sum); // undefined

Math.sum = (a, b) => a + b;
console.log(Math.sum('1', '2')); // 12
Math.sum = (a, b) => Number(a) + Number(b);
console.log(Math.sum('1', '2')); // 3

delete Math.sum;
console.log(Math.sum); // undefined

// ATTENTION : ne pas modifier des objets normés
// Array -> includes (aurait du s'appeller contains)
// Array -> flat (aurait du s'appeller flatten)

// 2 opérateurs pour accéder au contenu d'un objet
console.log(Math.PI);
console.log(Math['PI']);
const key = 'PI';
const method = 'error';
console[method](Math[key]);

global['parseInt']('123 abc');

// Créer un objet : 2 possibilités


// object literal
const coords1 = {
  x: 1,
  y: 2, // virgule finale depuis ES5
  getX: function() {
    return this.x;
  }
};

const MyMath = {
  sum: (a, b) => a + b,
};

console.log(coords1.getX()); // 1

// constructor (fonction constructeur)
// function Coords(x, y) {
//   this._x = x;
//   this._y = y;
// }

// Coords.prototype.getX = function() {
//   return this._x;
// }
class Coords {
  constructor(x, y) {
    this._x = x;
    this._y = y;
  }
  getX() {
    return this._x;
  }
}

console.log(typeof Coords); // function

// Object.defineProperty(Coords.prototype, 'getY', {
//   value: function() { return this._y; },
//   enumerable: false,
// })
Coords.prototype.getY = function() { return this._y; };

const coordsA = new Coords(1, 2);
const coordsB = new Coords(3, 4);
console.log(typeof coordsA); // obj
console.log(coordsA._x); // 1
console.log(coordsA.getX()); // 1

console.log(coordsA._x !== undefined); // true
console.log(coordsA.getX !== undefined); // true
console.log(coordsA.hasOwnProperty('_x')); // true
console.log(coordsA.hasOwnProperty('getX')); // false

console.log(coordsA.getX === coordsB.getX); // true

for (const key in coordsA) {
  if (coordsA.hasOwnProperty(key)) {
    console.log(key); // _x, _y
  }
}

