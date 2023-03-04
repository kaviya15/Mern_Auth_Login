const mongoose = require("mongoose");
/**create the schema */
const userSchema  = mongoose.Schema({
    email:{type:String,required:true},
    passwordHash:{type:String,required:true}    
});

/**create the model and pass Schema to it */
const userModel = mongoose.model("user",userSchema);
module.exports = userModel;