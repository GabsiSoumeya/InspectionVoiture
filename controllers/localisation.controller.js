const localisation = require("../models/localisation.model");
const ObjectID = require("mongoose").Types.ObjectId;

const getlocalisations= async (req, res) => {
  try {
    const localisations = await localisation.find();
    res.status(200).json({
      status: "Success",
      count: localisations.length,
      localisations,
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const createlocalisation= async (req, res) => {
  try {
    const local = new localisation(req.body);
    await local.save();
    res.status(200).json({
      status: "Success",
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};


const editlocalisation= async (req, res) => {
  try {
    const localisation = await localisation.findOne({_id:req.body._id})
     localisation.codePostal=req.body.codePostal;
     localisation.ville=req.body.ville;
     localisation.pays=req.body.pays;
     

    await localisation.save();
    res.status(200).json({
      status: "Success",
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const deletlocalisation= async (req, res) => {
  try {
    console.log(req.body.localisationid)
    const localisation = await localisation.findOneAndDelete({_id:req.body.localisationid})
    res.status(200).json({
      status: "Deleted Success",
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
module.exports = {deletlocalisation,getlocalisations,createlocalisation,editlocalisation}