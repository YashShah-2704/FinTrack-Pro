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

const getTransactions = async(req,res)=>{
    try{
        const page=parseInt(req.query.page)||1;
        const limit = parseInt(req.query.limit)||10;

        const skip=(page-1)*limit;

        const filter={
            user: req.user.id
        };

        if(req.query.type){
            filter.type=req.query.type;
        }

        if(req.query.category){
            filter.category=req.query.category;
        }

        const transactions= await Transaction.find(filter)
          .sort({transactionDate:-1})
          .skip(skip)
          .limit(limit);

        const totalTransactions=await Transaction.countDocuments(filter);

        res.status(200).json({
            success: true,
            totalTransactions,
            currentPage: page,
            totalPages: Math.ceil(totalTransactions/limit),
            transactions
        });
    }
    catch(error)
    {
        res.status(500).json({
            success:false,
            message: error.message
        });
    }
};

// Update Transaction

const updateTransaction = async (req, res) => {

    try {

        const transaction = await Transaction.findById(req.params.id);

        if (!transaction) {

            return res.status(404).json({
                success: false,
                message: "Transaction not found"
            });

        }

        // Check ownership
        if (transaction.user.toString() !== req.user.id) {

            return res.status(403).json({
                success: false,
                message: "You are not authorized to update this transaction"
            });

        }

        const {
            type,
            amount,
            category,
            note,
            paymentMethod,
            transactionDate
        } = req.body;

        transaction.type = type ?? transaction.type;
        transaction.amount = amount ?? transaction.amount;
        transaction.category = category ?? transaction.category;
        transaction.note = note ?? transaction.note;
        transaction.paymentMethod = paymentMethod ?? transaction.paymentMethod;
        transaction.transactionDate = transactionDate ?? transaction.transactionDate;

        await transaction.save();

        res.status(200).json({
            success: true,
            message: "Transaction updated successfully",
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
// Delete Transaction

const deleteTransaction = async (req, res) => {

    try {

        const transaction = await Transaction.findById(req.params.id);

        if (!transaction) {

            return res.status(404).json({
                success: false,
                message: "Transaction not found"
            });

        }

        // Check ownership

        if (transaction.user.toString() !== req.user.id) {

            return res.status(403).json({
                success: false,
                message: "You are not authorized to delete this transaction"
            });

        }

        await transaction.deleteOne();

        res.status(200).json({

            success: true,

            message: "Transaction deleted successfully"

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

    addTransaction,
    getTransactions,
    updateTransaction,
    deleteTransaction

};