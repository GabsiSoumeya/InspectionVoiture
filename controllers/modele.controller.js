const modele = require("../models/modele.model");
const ObjectID = require("mongoose").Types.ObjectId;

const getmodeles= async (req, res) => {
  try {
    const modeles = await modele.find().populate('marque')
    res.status(200).json({
      status: "Success",
      count: modeles.length,
      modeles,
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};



const createmodele= async (req, res) => {
  try {
    const modéle = new modele(req.body);
    await modéle.save();
    res.status(200).json({
      status: "Success",
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};      


const editmodele= async (req, res) => {
  try {
    const modele = await modele.findOne({_id:req.body._id})
     modele.id_modele=req.body.id_modele;
     modele.nom_modele=req.body.nom_modele;
     modele.id_marque=req.body.modele;
 

    await modele.save();
    res.status(200).json({
      status: "Success",
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const deletmodele= async (req, res) => {
  try {
    console.log(req.body.modeleid)
    const modele = await modele.findOneAndDelete({_id:req.body.modeleid})
    res.status(200).json({
      status: "Deleted Success",
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
module.exports = {deletmodele,getmodeles,createmodele,editmodele}
