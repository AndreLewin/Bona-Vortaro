const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    teksto: {type: String, required: true},
    dato: { type: Date, default: Date.now, required: true },
  }
);

const Vorto = mongoose.model('Vorto', schema, 'vortoj');

module.exports = Vorto;