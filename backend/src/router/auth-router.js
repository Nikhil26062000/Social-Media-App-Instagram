const express = require('express');
const router = express.Router();
const controllers = require('../Controllers/auth-controllers');


/*
? ----------- Using router and using Controllers ------------------
*/

router.route("/signup").post(controllers.Signup);

module.exports = router;