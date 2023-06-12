const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String, 
        required: true,
        lowercase:true,
    },
    password:{
        type: String, 
        required: true, 
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
    },
    modifiedAt: {
        type: Date,
        default: () => Date.now(),
    },
    posts: [
        {
            type: mongoose.SchemaTypes.ObjectId, 
            ref: 'Post'
        }
    ]
})

module.exports = mongoose.model("User",userSchema)
