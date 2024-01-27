const User = require("../models/User");
const jwt = require("jsonwebtoken")


const authMiddleware = async(req,res,next) => {
   try {
    const token = req.header("Authorization");
    // console.log(token);
    

    const jwtToken = token.replace("Bearer","").trim();
    // console.log("this is final"+jwtToken);
    if(jwtToken==="null") {
      return res.status(404).json({message: "You are not logged in."});
    }
    else{
      const isVerfied = jwt.verify(jwtToken,process.env.JWT_SECRET_KEY)
      // console.log(isVerfied)
  
      const user = await User.findOne({username:isVerfied.username});
      // console.log(user);
      
      next();
    }
    
   } catch (error) {
    console.log(error);
    res.status(500).json({message: error});
   }
}

module.exports = authMiddleware;