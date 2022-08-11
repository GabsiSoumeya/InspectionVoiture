const router = require("express").Router();
const marqueController = require("../controllers/marque.controller");


router.get("/getAll", marqueController.getmarques );
router.post("/createmarque", marqueController.createmarque);
router.put("/editmarque", marqueController.editmarque );
router.delete("/deletemarque", marqueController.deletmarque );
router.get("/:id", marqueController.getMarque);

module.exports = router;