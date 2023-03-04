const router = require('express').Router();
const userController = require("../controller/userController");
const { signup_validation } = require("../middlewares/userValidate");
/**Create an instance of controller class */
const user_controller = new userController();
router.post("/signup", signup_validation, user_controller.signup);

module.exports = router;