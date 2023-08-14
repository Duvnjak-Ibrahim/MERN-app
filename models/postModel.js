const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please add the contact name"]
    },
    photo:{
        type:String,
        required:[true,"Please add the contact email"]
    },
    text:{
        type:String,
        required:[true,"Please add the contact phone number"]
    },
},{
    timestamps:true,
})

module.exports = mongoose.model("Post", postSchema)