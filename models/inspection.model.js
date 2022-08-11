const mongoose = require('mongoose');
const inspectionSchema = new mongoose.Schema({

  id_localisation:{
    type: mongoose.Schema.ObjectId,
      ref: 'localisation',
      required: true,

  },

    id_inspecteur: {
      type: mongoose.Schema.ObjectId,
      ref: 'user',
      required: true,
    },
    id_rapport: {
        type: mongoose.Schema.ObjectId,
        ref: 'rapport',
        required: true,
    }
  });
  module.exports = mongoose.model('inspection', inspectionSchema);