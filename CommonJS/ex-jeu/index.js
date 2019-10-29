const Jeu = require('./jeu');
const options = require('./options.json');

const jeu = new Jeu(options);
jeu.jouer();
