const express = require("express"); 
const accountsRouter = express.Router();
const UserInfo = require("../models/userModel");
const jwt = require("jsonwebtoken");
const cors = require("cors");
// accountsRouter.use(cors());

accountsRouter.post("/signup", async (req, res) => {
    
    try {
        
        var item = {
            username: req.body.username,
            password: req.body.password,
            isadmin: false
        }
        if (item.username !== "" && item.password !== "") {
            user = await UserInfo.findOne({ $or: [{ username: item.username }] });
            if (user) throw new Error("User already exists.");
            const userAccount = new UserInfo(item);
            userAccount.save()
                .then(() => res.json({ status: "Success" }))
                .catch((er) => {
                    console.log(er)
                    res.sendStatus(500).json({ status: "Error" });
                });
        } else {
            res.json({ status: "Error", message: "Invalid inputs" });
        }} catch (error) {
        res.json({ status: "Error", message: error.message });
    }
   
})

accountsRouter.post("/login", async (req, res) => {
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    const username = req.body.username;
    const password = req.body.password;
    
            try {
                let user = await UserInfo.findOne({ username: username })
                if (!user) throw new Error("Invalid username.");
                const correctMatch = await user.matchPassword(password);
                if (!correctMatch) throw new Error("Invalid password.");
                const payload = { user: user.username, admin: user.admin };
                const token = jwt.sign(payload, 'hornbill', { expiresIn: '1d' });
                res.json({
                    username: user.username,
                    admin: user.admin,
                    token: token
                });
        
            } catch (error) {
                res.json({ status: "Error", message: error.message })
            }
    
    
})

module.exports = accountsRouter;