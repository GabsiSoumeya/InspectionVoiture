const  Demande = require("../models/Demande.model");
const ObjectID = require("mongoose").Types.ObjectId;

const getdemandes= async (req, res) => {
  try {
    const demandes = await Demande.find().populate(('user', 'id_inspecteur'),('rapport', 'id_rapport'));
    res.status(200).json({
      status: "Success",
      count: Demandes.length,
      Demandes,
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const createDemande= async (req, res) => {
  try {
    const Demande = new Demande(req.body);
    await Demande.save();
    res.status(200).json({
      status: "Success",
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};


const editDemande= async (req, res) => {
  try {
    const Demande = await Demande.findOne({_id:req.body._id})
     Demande.id_inspecteur=req.body.id_inspecteur;
     Demande.id_rapport=req.body.id_rapport;
     

    await Demande.save();
    res.status(200).json({
      status: "Success",
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const deletDemande= async (req, res) => {
  try {
    console.log(req.body.Demandeid)
    const Demande = await Demande.findOneAndDelete({_id:req.body.Demandeid})
    res.status(200).json({
      status: "Deleted Success",
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
module.exports = {deletDemande,getDemandes,createDemande,editDemande}