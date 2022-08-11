const router = require("express").Router();
const inspectionController = require("../controllers/inspection.controller");


router.get("/getAll", inspectionController.getinspections );
router.post("/createInspection", inspectionController.createinspection);
router.put("/editInspection", inspectionController.editinspection );
router.delete("/deleteInspection", inspectionController.deletinspection );

module.exports = router;