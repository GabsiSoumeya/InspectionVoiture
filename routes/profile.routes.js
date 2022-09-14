const router = require("express").Router();
const ProfileController = require("../controllers/Profile.controller");

router.get('/profile', ProfileController.profile);
 