const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    id_de_alternativo: {type: String, required: true},
    id_de_uzanto: {type: String, required: true}
  }
);

const Alternativmalporo = mongoose.model('Alternativmalporo', schema, 'alternativmalporoj');

module.exports = Alternativmalporo;