const rapport = require("../models/rapport.model");
const ObjectID = require("mongoose").Types.ObjectId;

const getrapports= async (req, res) => {
  try {
    const rapports = await rapport.find().populate(('vehicule', 'id_vehicule'),('localisation','id_localisation'));
    res.status(200).json({
      status: "Success",
      count: rapports.length,
      rapports,
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const createrapport= async (req, res) => {
  try {
    const Rapport = new rapport(req.body);
    await Rapport.save();
    res.status(200).json({
      status: "Success",
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};


const editrapport= async (req, res) => {
  try {
    const rapport = await rapport.findOne({_id:req.body._id})
     rapport.id_rapport=req.body.id_rapport;
     rapport.status=req.body.status;
     rapport.id_localisation=req.body.id_localisation;
     rapport.id_vehicule=req.body.id_vehicule;

    await rapport.save();
    res.status(200).json({
      status: "Success",
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const deletrapport= async (req, res) => {
  try {
    console.log(req.body.rapportid)
    const rapport = await rapport.findOneAndDelete({_id:req.body.rapportid})
    res.status(200).json({
      status: "Deleted Success",
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
module.exports = {deletrapport,getrapports,createrapport,editrapport}