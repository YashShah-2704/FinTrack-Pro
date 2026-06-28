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

module.exports = {

    addTransaction,
    getTransactions

};