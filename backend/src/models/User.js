
const mongoose = require('mongoose');
const validate = require('validator');

//creating schema for model 
const userSchema = new mongoose.Schema({
   
    email:{
        type: String,
        required: true,
        validate(value){
            if(!validate.isEmail(value)) {
                throw new Error("Invalid Email Address");
        }}
    },
    fullname:{
        type: String,
        required: true,
        validate(value){
            if (value.length < 3) {
                throw new Error("Full Name must be at least 3 characters");
            }
        }
    },
    username:{
        type: String,
        required: true,
        validate(value){
            if (value.length < 5){
                throw new Error("Username must be at least 5 characters");
            }
        }
    },
    password:{
        type: String,
        require:true,
        validate(value){
            if(value.length<5){
                throw new Error("Password must be at least 5 characters");
            }
        }
    },
   
});

const User = new mongoose.model("User",userSchema);
module.exports = User;