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
    res.status(201).send(userCreated);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

module.exports = { Home };
