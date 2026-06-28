const express = require("express");

const auth = require("../middleware/auth");

const {

    getDashboard

} = require("../controllers/analyticsController");

const router = express.Router();

router.get("/dashboard", auth, getDashboard);

module.exports = router;