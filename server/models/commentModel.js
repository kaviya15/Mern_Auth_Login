const mongoose = require("mongoose");
const schema = mongoose.Schema({
    comment:{type:String,require:true},
    createdAt:{type:Date,default:new Date()}
});
const commentModel = mongoose.model("comment",schema);
module.exports=commentModel;