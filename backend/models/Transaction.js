const mongoose=require("mongoose");

const transactionSchema= new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    },

    type:{
        type: String,
        enum:["income","expense"],
        required: true
    },

    amount: {
        type:Number,
        required:true,
        min:0
    },

    category: {
        type: String,
        required: true,
        trim:true
    },

    note: {
        type:String,
        trim:true,
        default: ""
    },

    paymentMethod: {
        type:String,
        enum: [
            "Cash",
            "UPI",
            "Credit Card",
            "Debit Card",
            "Bank Transfer",
            "Other"
        ],
        default: "UPI"
    },

    transactionDate: {
        type: Date,
        default: Date.now
    }
},
{
    timestamps: true
});

module.exports=mongoose.model(
    "Transaction",
    transactionSchema
);