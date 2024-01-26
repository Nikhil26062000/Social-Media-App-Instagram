const mongoose = require("mongoose");
const validate = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();

//? --------------------- creating schema for model --------------------
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validate.isEmail(value)) {
        throw new Error("Invalid Email Address");
      }
    },
  },
  fullname: {
    type: String,
    required: true,
    validate(value) {
      if (value.length < 3) {
        throw new Error("Full Name must be at least 3 characters");
      }
    },
  },
  username: {
    type: String,
    required: true,
    validate(value) {
      if (value.length < 5) {
        throw new Error("Username must be at least 5 characters");
      }
    },
  },
  password: {
    type: String,
    require: true,
    validate(value) {
      if (value.length < 5) {
        throw new Error("Password must be at least 5 characters");
      }
    },
  },
  tokens: [
    {
      token: {
        type: String,
      },
    },
  ],
});

/*
?----------------- Hashing the password --------------------------

! i wrote  hashing password logic below model creation and it was not working 

? if condition will check that if password is for the first time or someone is updating then it will hash
*/

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    
  }
  next();
});

//? ----------------------Generating token for user ---------------


userSchema.methods.generateToken = async function () {
  try {
    const token = jwt.sign(
      {
        _id: this._id.toString(),
        name: this.fullname.toString(),
        username: this.username.toString(),
      },
      process.env.JWT_SECRET_KEY
    );
    this.tokens = this.tokens.concat({ token: token });

    await this.save();
    return token;
  } catch (error) {
    console.log("Error while generating token");
    console.log(error);
  }
};

//? --------------------- Creating Collection --------------------

const User = new mongoose.model("User", userSchema);

//? ----------------------- exporting ------------------

module.exports = User;
