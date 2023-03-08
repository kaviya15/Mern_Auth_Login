const usermodel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class userServiceLayer {
  constructor() {
    console.log("service layer invoked....");
  }
  createToken(id) {
    return jwt.sign({ id }, process.env.SECRET, { expiresIn: "1hr" });
  }
  async signup(body) {
    try {
      const { email, password } = body;
      const user = await usermodel.findOne({ email });
      if (user) {
        return {
          email,
          success: false,
          error: `Existing user`,
        };
      } 
      else {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        /**save the user */
        const newUser = new usermodel({
          email:email,
          passwordHash: hashedPassword,
        });
        /**create token */
        const new_user = await newUser.save();
        let { _id } = new_user;
        _id = _id.valueOf();
        let token = this.createToken(_id);

        return { email, token, success: true, error: {} };
      }
    } catch (err) {
      return { success: false, error: err };
    }
  }
}
module.exports = userServiceLayer;
