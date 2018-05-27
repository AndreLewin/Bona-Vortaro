const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    id_de_vorto: {type: String, required: true},
    id_de_uzanto: {type: String, required: true}
  }
);

const Vortporo = mongoose.model('Vortporo', schema, 'vortporoj');

module.exports = Vortporo;