const express = require("express");
const usuario  = require('../models/usuario.model');
// const userProductRoute = require("./usuario.produto.routes");
const usuarioController  = require('../controllers/usuario.controller');
const productController  = require('../controllers/produto.controller');
const handlerReturnError = require("../utils/catch.error")
const router = express.Router();


router.post("/", async (req,res) => {
    try {
        const user =  await usuario.create(req.body);
        return res.status(200).send(user);
    } catch (error) {
        return res.status(400).send({error:"Erro ao inserir usuário"});
    }
});

router.get("/:user_id",async(req,res)=>{
    try {
        const user = await usuario.findById(req.params.user_id)
        return res.status(200).send({user});
    } catch (error) {
        return res.status(400).send({error:"Erro ao carregar usuário"});
    }    
});

router.put("/:user_id",async(req,res)=>{
    try {
        const {nome,endereco,produtosFavoritos} = req.body
        const user = await usuario.findByIdAndUpdate(req.params.user_id,{
            nome,
            endereco,
            produtosFavoritos
        },
        {new:true})
        res.send(user)
    } catch (error) {
        return res.status(400).send({error:"Erro ao atualizar usuário"});
    }    
})
router.delete("/:user_id",async(req,res)=>{
    try {
        await usuario.findByIdAndRemove(req.params.user_id)
        res.status(200)
    } catch (error) {
        return res.status(400).send({error:"Erro ao deletar usuário"});
    }
})

router.post("/:user_id/produto", async (req,res) => {
    const user_id  = req.params.user_id;
    const { product_id} = req.body;
    try {
        const product = await productController.getProdutoByID(product_id);
        const userUp = await usuarioController.pushListProductsUsuario(user_id,product);
        res.send(userUp)
    } catch (error) {
        handlerReturnError(error,res)
        
    }
    
});



module.exports = router;