const express = require("express");
const { getHomePage, getTonz } = require("../controllers/homeController");
const router = express.Router();

//khai bao route
router.get("/", getHomePage);

router.get("/tonz", getTonz);

module.exports = router;
