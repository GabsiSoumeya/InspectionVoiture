const mongoose = require('mongoose');

const DemandeSchema = new mongoose.Schema(
    {

    VehiculeInf: {
        marque:{
            type: mongoose.Schema.ObjectId,
            ref: 'marque',
            required: true,
        },
        modele:{
            type: mongoose.Schema.ObjectId,
            ref: 'modele',
            required: true,
        },
        Annee:{
            type:Date,
            trim:true,
            required:true
        },
      },

      localisationVeh:{

        codepostale: {
            type: String,
            required: true,
          },
          ville: {
            type: String,
            required: true,
          },
          pays: {
            type: String,
            required: true,
          },
      },
      besoinSpecifique: {
        type: String,
        

      },
    });
    module.exports = mongoose.model('Demande', DemandeSchema);