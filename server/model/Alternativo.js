const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    id_de_vorto: {type: String, required: true},
    teksto: {type: String, required: true}
  }
);

const Alternativo = mongoose.model('Alternativo', schema, 'alternativoj');

module.exports = Alternativo;