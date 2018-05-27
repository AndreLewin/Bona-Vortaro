const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    id_de_vorto: {type: String, required: true},
    id_de_uzanto: {type: String, required: true}
  }
);

const Vortmalporo = mongoose.model('Vortmalporo', schema, 'vortmalporoj');

module.exports = Vortmalporo;