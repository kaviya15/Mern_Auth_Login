const router = require('express').Router();
const { signup, login, logged_in } = require("../controller/userController");
const { signup_validation,login_validation } = require("../middlewares/userValidate");
const { check_authenticated } = require("../middlewares/commentValidate");

/**Create an instance of controller class */
router.post("/signup", signup_validation, signup);
router.post("/login", login_validation, login);
router.get("/logged_in", check_authenticated, logged_in);

module.exports = router;