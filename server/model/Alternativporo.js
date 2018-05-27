const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    id_de_alternativo: {type: String, required: true},
    id_de_uzanto: {type: String, required: true}
  }
);

const Alternativporo = mongoose.model('Alternativporo', schema, 'alternativporoj');

module.exports = Alternativporo;