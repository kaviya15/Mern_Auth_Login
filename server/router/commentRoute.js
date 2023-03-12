const router  = require("express").Router();
const { check_authenticated } = require("../middlewares/commentValidate");
const {addComment}  = require("../controller/commentController")
router.post("/add", check_authenticated,addComment);

module.exports=router;