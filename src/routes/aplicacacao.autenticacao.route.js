const express = require("express");
const aplicacao  = require('../models/aplicacao.model');
const jwt = require("jsonwebtoken");
const cache = require("../utils/cache");
const router = express.Router();
const Token = require("../utils/token.utils");


router.post("/aplicacao",async (req,res) => {
    try {
        const app =  await aplicacao.create(req.body);
        return res.send(app);
    } catch (error) {
        return res.status(400).send(error);
    }
});

router.post("/autenticacao", async (req,res)=>{
    try{
        const {app_id}  =  req.body;
        const app  = await aplicacao.findOne({app_id});
        if(app){
            const tokenCached = await cache.getCache(app_id);
            const isValid = await Token.tokenIsValid(tokenCached);
            if(isValid){
                return res.send({token:isCache})
            }else{
                const token = await Token.createToken(app._id);
                await cache.setCache(app_id,token)
                return res.send({token:token})
            }
        }
        res.status(401).send({error:"Aplicação sem autorização"})
        
    }catch(error){
        res.status(400).send({error:"Erro ao buscar aplicação"})

    }
});

module.exports = router;