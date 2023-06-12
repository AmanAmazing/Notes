const mongoose = require("mongoose")


const postSchema = new mongoose.Schema({
    author:{
        type: mongoose.SchemaTypes.ObjectId, 
        ref: "User"
    },
    title:{
        type: String, 
        required: true,
    },
    content: {
        type: String, 
        required: true,
    },
    createdAt: {
        type: Date, 
        default: () => Date.now()
    },
    updatedAt: {
        type: Date, 
        default: ()=> Date.now()
    }
})

module.exports  = mongoose.model("Post", postSchema)  



