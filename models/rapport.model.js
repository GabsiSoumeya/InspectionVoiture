const mongoose = require('mongoose');
const rapportSchema = new mongoose.Schema({
  

  status: {
    type: String,
    enum: ['En cours', 'Validée', 'Annulée'],
    default: 'En cours',
    required: true,
 },
    id_localisation: {
      type: mongoose.Schema.ObjectId,
      ref: 'localisation',
      required: true,
    },
    id_vehicule: {
        type: mongoose.Schema.ObjectId,
        ref: 'vehicule',
        required: true,
    }
  });
  module.exports = mongoose.model('rapport', rapportSchema);