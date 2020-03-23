const Token = require("../utils/token.utils");

module.exports = async (req,res,next)=>{
    const authHeader = req.headers.authorization.replace("Bearer ","");
    const isValid = await Token.tokenIsValid(authHeader);

    if(isValid) {
        next()
    }else{
        return res.sendStatus(401)
    }
    
}