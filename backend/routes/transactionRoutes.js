const express = require("express");

const auth = require("../middleware/auth");

const {

    addTransaction,
    getTransactions

} = require("../controllers/transactionController");

const router = express.Router();

router.get("/",auth,getTransactions);

router.post("/", auth, addTransaction);

module.exports = router;