const router = require("express").Router();
const vehiculeController = require("../controllers/vehicule.controller");


router.get("/getAll", vehiculeController.getVehicules );
router.post("/createVehicule", vehiculeController.createVehicule);
router.put("/editVehicule", vehiculeController.editVehicule );
router.delete("/deleteVehicule", vehiculeController.deletVehicule );


module.exports = router;