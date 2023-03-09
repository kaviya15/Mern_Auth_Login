const router = require('express').Router();
const {signup,login} = require("../controller/userController");
const { signup_validation,login_validation } = require("../middlewares/userValidate");
/**Create an instance of controller class */
router.post("/signup", signup_validation, signup);
router.post("/login", login_validation, login);
// router.post("/logout", logout);

module.exports = router;