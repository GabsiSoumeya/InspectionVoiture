const router = require("express").Router();
const modeleController = require("../controllers/modele.controller");


router.get("/getAll", modeleController.getmodeles );
router.post("/createmodele", modeleController.createmodele);
router.put("/editmodele", modeleController.editmodele );
router.delete("/deletemodele", modeleController.deletmodele );


module.exports = router;