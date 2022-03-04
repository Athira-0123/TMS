const express = require("express"); 
const profileRouter = express.Router();
const UserInfo = require("../models/userModel");
const jwt = require("jsonwebtoken");



profileRouter.post("/edit", async (req,res)=>{
    // const username = req.body.username;
 


    const user = await UserInfo.findById({user: user._id});
    if (user) {
        user.name = req.body.name || user.name;
        user.username = req.body.username || user.username;
        // user.pic = req.body.pic || user.pic;
        if (req.body.password) {
            user.password = req.body.password;
        }
    
        const updatedUser = await user.save();
    
        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            username: updatedUser.username,
            // pic: updatedUser.pic,
            isadmin: updatedUser.isadmin,
            token: token(updatedUser._id),
        });
    } else {
        res.status(404);
        throw new Error("User Not Found");
    }

})


module.exports = profileRouter;