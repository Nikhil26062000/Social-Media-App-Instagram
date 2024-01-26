const User = require("../models/User");

/*
? --------------- Controllers for Signup page -------------
*/

const Home = async(req, res) => {
  try {
    const {username} = req.body;
    const userExist = await User.findOne({username: username});
    if(userExist){
        return res.status(409).json({message:"Username already exists!"})
    }
    const userCreated = await User.create(req.body);

    //* Generating token at time of Signup
    const token = await userCreated.generateToken();
    //* Sending response with status and Token
    res.status(201).send({userCreated,token:token});
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

module.exports = { Home };
