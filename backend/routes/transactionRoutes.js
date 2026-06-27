const express=require("express");
const Transaction = require("../models/Transaction");
const auth=require("../middleware/auth");

const router=express.Router();

router.post("/",auth,async(req,res)=>{

    try{
        const {
            type,
            amount,
            category,
            note,
            paymentMethod,
            transactionDate,
        } = req.body;

        //Validation
        if(!type||!amount||!category){
            return res.status(400).json({
                message:"Type,amount and category are required."
            });
        }

        const transaction=await Transaction.create({
            user: req.user.id,
            type,
            amount,
            category,
            note,
            paymentMethod,
            transactionDate
        });

        res.status(201).json({
            message:"Transaction added successfully",
            transaction
        });


    }
    catch(error){
        res.status(500).json({
            message: error.message
        });
    }

});

module.exports=router;