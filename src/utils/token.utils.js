const jwt = require("jsonwebtoken");

class Token {
    constructor(){}
    
    async createToken(app_id){        
        return await jwt.sign({appID:app_id},process.env.SECRET,{expiresIn: process.env.TOKEN_EXPIRE});
    }
    async tokenIsValid(token){
        return new Promise(async (resolve)=>{
            jwt.verify(token,process.env.SECRET,(err)=>{
                if(err){
                    resolve(false);
                }
                else{
                    resolve(true)
                }
            });
        });
    }

}

module.exports = new Token();