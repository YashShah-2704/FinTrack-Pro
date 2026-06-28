const express = require("express");

const auth = require("../middleware/auth");

const {

    getDashboard,
    getCategoryReport

} = require("../controllers/analyticsController");

const router = express.Router();

router.get("/dashboard", auth, getDashboard);

router.get("/categories", auth, getCategoryReport);

module.exports = router;