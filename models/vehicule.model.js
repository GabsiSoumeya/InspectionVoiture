const mongoose = require("mongoose");
const vehiculeSchema = new mongoose.Schema({

    matricule:{
        type:String,
        trim:true,
        required:true
    },

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
    
    
},{timestamps:true})

module.exports = mongoose.model("vehicule", vehiculeSchema);