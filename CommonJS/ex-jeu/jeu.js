const readline = require('readline');
const random = require('./random');

class Jeu {
  constructor(options = {}) {
    const { min = 0, max = 100 } = options;

    this._entierAlea = random.getIntInclusive(min, max);
    this._essais = [];
    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }
  jouer() {
    if (this._essais.length) {
      console.log(`Vous avez déjà joué : ${this._essais.join(' - ')}`);
    }
    this._rl.question("Quel est l'entier entre 0 et 100 ? ", (answer) => {
      const entierSaisi = Number.parseInt(answer);

      if (Number.isNaN(entierSaisi)) {
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
  }
}

module.exports = Jeu;
