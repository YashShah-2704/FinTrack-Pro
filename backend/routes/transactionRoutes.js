const express = require("express");

const auth = require("../middleware/auth");

const {

    addTransaction

} = require("../controllers/transactionController");

const router = express.Router();

router.post("/", auth, addTransaction);

module.exports = router;