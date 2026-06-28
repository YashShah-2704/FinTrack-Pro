const mongoose = require("mongoose");
const Transaction = require("../models/Transaction");

const getDashboardAnalytics = async (userId) => {

    const summary = await Transaction.aggregate([

        {
            $match: {
                user: new mongoose.Types.ObjectId(userId)
            }
        },

        {
            $group: {

                _id: "$type",

                total: {
                    $sum: "$amount"
                }

            }

        }

    ]);

    let totalIncome = 0;
    let totalExpense = 0;

    summary.forEach(item => {

        if (item._id === "income")
            totalIncome = item.total;

        if (item._id === "expense")
            totalExpense = item.total;

    });

    const recentTransactions =
        await Transaction.find({

            user: userId

        })
        .sort({
            transactionDate: -1
        })
        .limit(5);

    const totalTransactions =
        await Transaction.countDocuments({

            user: userId

        });

    return {

        totalIncome,

        totalExpense,

        balance:
            totalIncome - totalExpense,

        totalTransactions,

        recentTransactions

    };

};

module.exports = {

    getDashboardAnalytics

};