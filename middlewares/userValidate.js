const signup_validation = (req,res,next)=>{
    const {email,password,verify_password} = req.body;
    let error_obj = { success: false, data: {} };
    if(!email || !password || !verify_password){
        return res.status(400).json({
          error: "please enter all the details",
          message: "please enter all the details",
          error_obj
        });

    }
    if(password.length<8){
        return res.status(400).json({
          error: "please enter password length more than 8",
          message: "please enter password length more than 8",
          error_obj,
        });
    }
    if(password!==verify_password){
         return res.status(400).json({
           error: "password mismatched ",
           message: "password mismatched ",
           error_obj,
         });
    }
    next();

}
module.exports={signup_validation};