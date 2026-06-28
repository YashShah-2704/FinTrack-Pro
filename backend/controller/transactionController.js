const Transaction = require("../models/Transaction");

// Add Transaction

const addTransaction = async (req, res) => {

    try {

        const {
            type,
            amount,
            category,
            note,
            paymentMethod,
            transactionDate
        } = req.body;

        if (!type || !amount || !category) {

            return res.status(400).json({
                success: false,
                message: "Type, amount and category are required."
            });

        }

        const transaction = await Transaction.create({

            user: req.user.id,

            type,

            amount,

            category,

            note,

            paymentMethod,

            transactionDate

        });

        res.status(201).json({

            success: true,

            message: "Transaction added successfully",

            transaction

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

module.exports = {

    addTransaction

};