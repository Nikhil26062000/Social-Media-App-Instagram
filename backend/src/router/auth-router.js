const express = require('express');
const router = express.Router();
const controllers = require('../Controllers/auth-controllers');
const authMiddleware = require('../middleware/auth-middleware');


/*
? ----------- Using router and using Controllers ------------------
*/

router.route("/signup").post(controllers.Signup);
router.route("/login").post(controllers.Login);
router.route("/home").get(authMiddleware,controllers.home);

module.exports = router;