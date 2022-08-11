const mongoose = require('mongoose');
const localisationSchema = new mongoose.Schema({
   
    
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
      
    
  });
  module.exports = mongoose.model('localisation', localisationSchema);