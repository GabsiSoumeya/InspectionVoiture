const vehicule = require("../models/vehicule.model");
const ObjectID = require("mongoose").Types.ObjectId;

const getVehicules= async (req, res) => {
  try {
    const vehicules = await Vehicule.find();
    res.status(200).json({
      status: "Success",
      count: vehicules.length,
      vehicules,
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const createVehicule= async (req, res) => {
  try {
    const véhicule = new vehicule(req.body);
    await véhicule.save();
    res.status(200).json({
      status: "Success",
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};


const editVehicule= async (req, res) => {
  try {
    const vehicule = await vehicule.findOne({_id:req.body._id})
     vehicule.matricule=req.body.matricules;
     vehicule.marque=req.body.marque;
     vehicule.modele=req.body.modele;
     vehicule.Annee=req.body.Annee;

    await vehicule.save();
    res.status(200).json({
      status: "Success",
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const deletVehicule= async (req, res) => {
  try {
    console.log(req.body.vehiculeid)
    const vehicule = await vehicule.findOneAndDelete({_id:req.body.vehiculeid})
    res.status(200).json({
      status: "Deleted Success",
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
module.exports = {deletVehicule,getVehicules,createVehicule,editVehicule}

