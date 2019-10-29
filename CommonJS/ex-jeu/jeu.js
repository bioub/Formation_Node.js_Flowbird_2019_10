const readline = require('readline');

// Class
function Jeu(options /* Default Param */) {
  options = options || {};

  // Destructurer options
  const min = options.min || 0;
  const max = options.max !== undefined ? options.max : 100;

  this._entierAlea = random.getIntInclusive(min, max);
  this._essais = [];
  this._rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}

Jeu.prototype.jouer = function() {
  if (this._essais.length) {
    // Template literal
    console.log('Vous avez déjà joué : ' + this._essais.join(' - '));
  }

  this._rl.question("Quel est l'entier entre 0 et 100 ? ", (answer) => {
    const entierSaisi = parseInt(answer);

    if (isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un nombre');
      return this.jouer();
    }

    this._essais.push(entierSaisi);

    if (entierSaisi < this._entierAlea) {
      console.log('Trop petit');
      this.jouer();
    } else if (entierSaisi > this._entierAlea) {
      console.log('Trop grand');
      this.jouer();
    } else {
      console.log('Gagné');
      this._rl.close();
    }
  });
};
