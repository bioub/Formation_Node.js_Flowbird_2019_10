const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  prenom: {
    type: String,
    required: true,
    maxlength: 40,
  },
  nom: {
    type: String,
    required: true,
    maxlength: 40,
  },
  email: String,
  telephone: String,
});

module.exports = mongoose.model('Contact', schema);
