const express = require("express")
const mongoose = require("mongoose")
const User  = require("./db/User")
const Post = require("./db/Post")
const UserRouter = require("./controllers/User")
require("dotenv").config() 


const app = express() 
app.use(express.urlencoded({extended:true}))
app.set("views engine","ejs")
app.use(express.static("public")) // now you can link css in hmtl "/css/styles.css"
const PORT = process.env.PORT || 3000 


const url = `mongodb+srv://${process.env.mongoUser}:${process.env.mongoPassword}@cluster0.piwnkqv.mongodb.net/?retryWrites=true&w=majority`
const connectionParams = {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}
mongoose.connect(url,connectionParams)
    .then( () => { 
        console.log(`Connected to the database`)
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. ${err}`)
    })




app.get("/users", (req,res)=>{
    res.status(200).json({
        message: "hello"
    })
})


app.get("/login",(req,res)=>{
    res.render("pages/login.ejs")
})


app.use("/user",UserRouter) // sends all incoming user requests to UserRouter


app.listen(PORT,()=>{
    console.log(`Listening on port: ${PORT}`)
})
