const inspection = require("../models/inspection.model");
const ObjectID = require("mongoose").Types.ObjectId;

const getinspections= async (req, res) => {
  try {
    const inspections = await inspection.find().populate(('user', 'id_inspecteur'),('rapport', 'id_rapport'));
    res.status(200).json({
      status: "Success",
      count: inspections.length,
      inspections,
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const createinspection= async (req, res) => {
  try {
    const inspection = new inspection(req.body);
    await inspection.save();
    res.status(200).json({
      status: "Success",
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};


const editinspection= async (req, res) => {
  try {
    const inspection = await inspection.findOne({_id:req.body._id})
     inspection.id_inspecteur=req.body.id_inspecteur;
     inspection.id_rapport=req.body.id_rapport;
     

    await inspection.save();
    res.status(200).json({
      status: "Success",
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const deletinspection= async (req, res) => {
  try {
    console.log(req.body.inspectionid)
    const inspection = await inspection.findOneAndDelete({_id:req.body.inspectionid})
    res.status(200).json({
      status: "Deleted Success",
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
module.exports = {deletinspection,getinspections,createinspection,editinspection}

