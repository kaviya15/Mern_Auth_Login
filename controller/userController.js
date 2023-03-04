const userservicelayer = require("../service/userService");
const serviceLayer = new userservicelayer();
class userController {
  constructor() {
    console.log(userservicelayer, "userservicelayer");
    this.serviceLayer = new userservicelayer();
    console.log(this.serviceLayer.signup, "this.serviceLayer");
  }
  async signup(req, res) {
    try {
      console.log("controller ", req.body);
      console.log(serviceLayer.signup, "func");
      let resp = await serviceLayer.signup(req.body);
      if (resp.success) {
        return res.json({
          status: 200,
          success: true,
          data: resp,
          error: {},
        });
      } else {
        return res.json({
          status: 400,
          success: false,
          error: resp.error,
          data: resp,
        });
      }
    } catch (err) {
      return res.json({
        status: 500,
        success: false,
        data: {},
        error: err,
      });
    }
  }
}
module.exports = userController;
