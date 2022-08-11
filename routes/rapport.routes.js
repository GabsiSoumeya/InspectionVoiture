const router = require("express").Router();
const rapportController = require("../controllers/rapport.controller");


router.get("/getAll", rapportController.getrapports );
router.post("/createrapport", rapportController.createrapport);
router.put("/editrapport", rapportController.editrapport );
router.delete("/deleterapport", rapportController.deletrapport );

module.exports = router;