
const mongoose = require('mongoose');

//creating schema for model 
const userSchema = new mongoose.Schema({
   
    email:{
        type: String,
        required: true
    },
    fullname:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        require:true
    },
   
});

const User = new mongoose.model("User",userSchema);
module.exports = User;