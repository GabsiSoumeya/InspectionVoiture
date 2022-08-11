const mongoose = require('mongoose');
const modeleSchema = new mongoose.Schema({
  
  
       nom_modele: {
         type: String,
         required: true,
      
       },

       marque: {
        type: mongoose.Schema.ObjectId,
        ref: 'marque',
        required: true,
      },
       
     }
   );
   module.exports = mongoose.model('modele', modeleSchema);