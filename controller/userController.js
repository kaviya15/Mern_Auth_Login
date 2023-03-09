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
    try {
      let resp = await serviceLayer.signup(req.body);
      if (resp.success) {
       res.cookie("token",resp.token,{httpOnly:true})
       return res.json(sendResp(200, true, {email:resp.email}));
      } 
      return  res.json(sendResp(400, false, {}, resp.error));
    } 
    catch (err) {
        return  res.json(sendResp(500, false, {}, err));
    } 
  
    
  }

  async function login(req,res){
    try{
      const resp = await serviceLayer.login(req.body);
      if(resp.success){
        res.cookie("token", resp.token, { httpOnly: true });
        return res.json(
          sendResp(200, true, { email: resp.email })
        );
      }
      else{
          return res.json(sendResp(401, false, {}, resp.error));
      }
    }
    catch(err){
        return res.json(sendResp(500, false, {}, err));
    }
  }

module.exports={signup,login};