const mongoose = require('mongoose');

const marqueSchema = new mongoose.Schema({
   
 
      nom_marque: {
        type: String,
        required: true,
     
      },
      modeles: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'modele',
        required: true
     }]
      
    }
  );

  module.exports = mongoose.model('marque', marqueSchema);