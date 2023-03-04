const usermodel = require("../models/userModel");
class userServiceLayer{
    constructor(){
        console.log("service layer invoked....")
    }
    async signup(body){
         console.log(body, "service-layer-body");
        try{
            console.log(body,"service-layer-body")
            const {email,password,verifyPassword} = body;
            const user = await usermodel.findOne({email:email});
            if(user){
                return { user, success: false, error:`Existing user`};
            }
            else{
                
            }
            
        }
        catch(err){
            console.log(err)
            return err;
        }
        
        
    }
}
module.exports = userServiceLayer;