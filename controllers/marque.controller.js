const marqueModel = require("../models/marque.model");
const marque = require("../models/marque.model");
const ObjectID = require("mongoose").Types.ObjectId;

const getmarques= async (req, res) => {
  try {
    const marques = await marque.find()
    res.status(200).json({
      status: "Success",
      count: marques.length,
      marques,
    })
    console.log('loooog ', marques);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const createmarque= async (req, res) => {
  try {
    const marq = new marque(req.body);
    console.log('marque: '+ marque)  
    await marq.save();
    res.status(200).json({
      status: "Success",
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};


const editmarque= async (req, res) => {
  try {
    const marque = await marque.findOne({_id:req.body._id})
     marque.id_marque=req.body.id_marque;
     marque.nom_marque=req.body.nom_marque;
  

    await marque.save();
    res.status(200).json({
      status: "Success",
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const deletmarque= async (req, res) => {
  try {
    console.log(req.body.marqueid)
    const marque = await marque.findOneAndDelete({_id:req.body.marqueid})
    res.status(200).json({
      status: "Deleted Success",
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const getMarque = (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  const modèle = marqueModel.findById(req.params.id).populate(['modeles']).exec(function (err, rep) {
    if (err){
      console.log(err);
    } else {
      res.status(200).json(rep);
      console.log("success");
    }
  });
  //.then(reponse => {
    //res.json(reponse); 
// });
};


module.exports = {deletmarque,getmarques,createmarque,editmarque,getMarque}
