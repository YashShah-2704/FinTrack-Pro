const express = require("express");

const auth = require("../middleware/auth");

const {

    addTransaction,
    getTransactions,
    updateTransaction

} = require("../controllers/transactionController");

const router = express.Router();

router.get("/",auth,getTransactions);

router.post("/", auth, addTransaction);
router.put("/:id", auth, updateTransaction);

module.exports = router;