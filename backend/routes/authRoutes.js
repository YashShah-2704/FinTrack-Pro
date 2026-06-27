const express=require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const router=express.Router();

// Register User
router.post("/register",async(req, res)=>{
    try{
        const{ name,email, password}= req.body;

        //check if all fields are present
        if(!name||!email||!password){
            return res.status(400).json({  
                message:"All fields are required"              
        });
        }

        //check if email already exists
        const existingUser=await User.findOne({email});

        if(existingUser)
        {
            return res.status(400).json(
                {
                    message: "User already exists"
                }
            );
        }

        //hash password
        const hashedPassword= await bcrypt.hash(password,10);

        //Create new User
        const newUser=await User.create(
            {
                name,
                email,
                password:hashedPassword
            }
        );

        res.status(201).json({
            message:"User registered successfully",
            user:{
                id: newUser._id,
                name:newUser.name,
                email:newUser.email
            }
        });
    }
    catch(error)
    {
        res.status(500).json({
            message: error.message
        }
        );
    }
});

//Login User
router.post("/login",async(req,res)=>{
    try{
        const {email,password}=req.body;

        //Check all fields
        if(!email||!password)
        {
            return res.status(400).json(
                {
                  message:"All fields are required"
                });
        }

        //Find User
        const user=await User.findOne({email});

        if(!user)
        {
           return res.status(400).json({
               message:"Invalid email or password"
           }); 
        }
        //Compare password
        const isMatch=await bcrypt.compare(password,user.password);

        if(!isMatch)
        {
            return res.status(400).json({
                message:"Ivalid email or password"
            });
        }

        const token=jwt.sign(
            {id: user._id},
            process.env.JWT_SECRET,
            {
                expiresIn:"7d"
            }
        );

        res.status(200).json({
            message:"Login Successful",
            token,
            user:{
                id:user._id,
                name:user.name,
                email:user.email
            }
        });
    }
    catch(error)
    {
        res.status(500).json({
            message: error.message
        });
    }
});

module.exports=router;