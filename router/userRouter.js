const router = require('express').Router();
const signup = require("../controller/userController");
const { signup_validation } = require("../middlewares/userValidate");
/**Create an instance of controller class */
router.post("/signup", signup_validation, signup);

module.exports = router;