const jwt = require("jsonwebtoken");
const check_authenticated  = function(req,res,next){
    try{
        const token = req.cookies.token;
        /**check if the request has cookie */
        if(!token){
            return res.status(401).json({
                error: "unauthorized request",
                message: "No Token found",
            });
        }
        try{
            const verifyToken  = jwt.verify(token,process.env.SECRET);
            console.log("verfity token",verifyToken)
        }
         catch(err){
            return res.status(401).json({
            error: err,
            message: "invalid token",
            });
         }
    }
    catch(err){
        return res.status(500).json({
          error: err,
          message: "Failed at validation",
        });
    }
    next();

    }
module.exports = { check_authenticated };