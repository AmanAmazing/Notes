require("dotenv").config(); 
const { Router} = require("express")
const User = require("../db/User") // importing user model 
const bcrypt = require("bcryptjs") // import bcrypt to hash passwords
const jwt = require("jsonwebtoken") // import jwt to sign tokens 

const router = Router(); 

const {SECRET = "secret"} = process.env; 

router.post("/signup", async(req,res)=>{
    try {
        req.body.password = await bcrypt.hash(req.body.password,10)
        const user = await User.create(req.body)
        // send new user as response 
        res.json(user);
    } catch (error){
        res.status(400).json({error})
    }
})


module.exports = router
