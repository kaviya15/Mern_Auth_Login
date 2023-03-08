const userservicelayer = require("../service/userService");

const serviceLayer = new userservicelayer();



  function sendResp(status,success,data={},error={}){
    return {
      status,
      success,
      data,
      error,
    }
  }
  async function signup(req, res) {
    console.log(this)
    try {
      console.log("controller ", req.body);
      console.log(serviceLayer.signup, "func");
      let resp = await serviceLayer.signup(req.body);
      if (resp.success) {
       res.cookie("token",resp.token,{httpOnly:true})
       return res.json(sendResp(200, true, {email:resp.email,id:resp._id}));
      } 
      return  res.json(sendResp(400, false, {}, resp.error));
    } 
    catch (err) {
        return  res.json(sendResp(500, false, {}, err));
    } 
  
    
  }

module.exports=signup;