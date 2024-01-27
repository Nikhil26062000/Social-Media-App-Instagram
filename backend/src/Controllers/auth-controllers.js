const User = require("../models/User");
const bcrypt = require("bcrypt");

/*
? --------------- Controllers for Signup page -------------
*/

const Signup = async (req, res) => {
  try {
    const { username } = req.body;
    const userExist = await User.findOne({ username: username });
    if (userExist) {
      return res.status(409).json("Username already exists!");
    }
    const userCreated = await User.create(req.body);

    //* Generating token at time of Signup
    const token = await userCreated.generateToken();

    //* Sending response with status and Token
    res.status(201).send({ userCreated, token: token });
  } catch (error) {
    //? this logic is for checking validation in singup
    if (error.name === "ValidationError") {
      // Handle validation errors
      const validationErrors = {};

      // Iterate through the errors and extract the error messages
      for (const field in error.errors) {
        validationErrors[field] = error.errors[field].message;
      }

      // Send the validation errors to the frontend
      const keysArray = Object.keys(validationErrors);

      if (keysArray == "email") {
        return res.status(400).json(validationErrors.email);
      }
      if (keysArray == "fullName") {
        return res.status(400).json(validationErrors.fullName);
      }
      if (keysArray == "username") {
        return res.status(400).json(validationErrors.username);
      }
      if (keysArray == "password") {
        return res.status(400).json(validationErrors.password);
      }
    }

    res.status(500).send(error.message);
  }
};

//? ----------------------------- Login Controller -----------------------------

const Login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const userExist = await User.findOne({ username: username });

    if (!userExist) {
      return res.status(404).json({message:"user not exist"});
    }

    const isPasswordMatch = await bcrypt.compare(password, userExist.password);

    if (!isPasswordMatch) {
      return res.status(404).json({message:"password is incorrect"});
    }
    if (isPasswordMatch) {
      const token = await userExist.generateToken();
    
      res.status(200).json({token: token});

    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

//? -------------------- Controller for home page ---------------------------------------- 
const home =(req,res) => {

    
    res.status(200).json({message:"Response from server homepage"})
}


module.exports = { Signup, Login, home };
