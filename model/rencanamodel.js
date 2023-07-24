const mongoose = require('mongoose');

const RencanaSchema = new mongoose.Schema({
  rencana: {
    type: String,
    required: true
  },
  waktu: {
    type: String,
    required: true
  },
  keterangan: {
    type: String,
    required: true
  }
});

const Rencana = mongoose.model('Rencana', RencanaSchema);

module.exports = Rencana;
