const express = require("express"); 
const accountsRouter = express.Router();
const enrollment_data = require("../model/EnrollmentModel");
const jwt = require("jsonwebtoken");
const cors = require("cors");



//api to login successfully

accountsRouter.post("/login", async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    const username = req.body.username;
    const userpassword = req.body.password;
    const adminUser = "admin@gmail.com";
    const adminPass = "12345";
    
    try {
        if(adminUser==username&&adminPass==userpassword){
            res.json({message:'You are now logged in as admin'})
        }else{
            let user = await enrollment_data.findOne({ email_address: username })
        const correctMatch = await user.matchPassword(userpassword)
        if (!user) return res.json({message:"Invalid username"});
        if (!correctMatch)  res.json({message:"Invalid password"});
        if(!user.isApproved) return res.json({message:'Wait for approval or Contact admin'});
        else {
            jwt.sign({username:user.email_address,id:user._id},
                'hornbill',
                {expiresIn:'1d'},
                (err,token)=>{
                    if(err){
                        res.json({message:"Error in token generation"})
                    }else{
                        
                        res.json({
                            message:"Authentication success.",
                            name:user.first_name+" "+user.last_name,
                            id:user._id,
                            token:token
                        })
                    }
                })
            
        }
        }
        
        
    } catch (error) {
        res.json({ status: "Error", message: "error" })
        
    }
    
    
})



module.exports = accountsRouter;