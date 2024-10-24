const User = require('../models/User')


const postSignup = async(req,res)=>{
        const {email,password} = req.body;

        const newUser = new User({email,password})
        try{
            await newUser.save();
            res.status(200).json({message:'User saved successfully'})
        }catch(error){
            res.status(500).json({message: 'Error saving user',error})
        }
    }
module.exports = postSignup;