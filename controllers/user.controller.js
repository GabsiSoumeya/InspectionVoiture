const UserModel = require("../models/user.model");
const ObjectID = require("mongoose").Types.ObjectId;


module.exports.getAllUsers = async (req, res) => {
    const users = await UserModel.find().select("-password");
    console.log("get all here ")
    res.status(200).json(users);
  };


  module.exports.userInfo = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);
  
    UserModel.findById(req.params.id, (err, docs) => {
      if (!err) { res.send(docs);
    }
      else console.log("ID unknown : " + err);
    }).select("-password");
  };


  module.exports.updateUser = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);
  
    try {
      await UserModel.findOneAndUpdate(
        { _id: req.params.id },
        {
          $set: {
            profile: req.body.profile,
            email: req.body.email,
            password: req.body.password,
            userType: req.body.userType,
            phone: req.body.phone,

          },
        },
        { new: true, upsert: true, setDefaultsOnInsert: true }
      )
       .then((user) => res.send(user))
      .catch((err) => res.status(500).send({ message: err }));
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  };

  module.exports.deleteUser = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unknown : " + req.params.id);
  
    try {
      await UserModel.remove({ _id: req.params.id }).exec();
      res.status(200).json({ message: "Successfully deleted. " });
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  };
  