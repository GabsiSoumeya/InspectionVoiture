const router = require("express").Router();
const localisationController = require("../controllers/localisation.controller");


router.get("/getAll", localisationController.getlocalisations );
router.post("/createlocalisation", localisationController.createlocalisation);
router.put("/editlocalisation", localisationController.editlocalisation );
router.delete("/deletelocalisation", localisationController.deletlocalisation );

module.exports = router;