const usuario  = require('../models/usuario.model');

class UsuarioControler {
    constructor(){}

    async getUsuarioByID(user_id){
        try {
            const user =  await usuario.findById(user_id);
            return user
        } catch (error) {
            throw "Usuário";
        }
    }
    async updateUsuario(usuario){
        try {
            const user = await usuario.findByIdAndUpdate(usuario.id,usuario);
            return user;
        } catch (error) {
            throw "Usuário";
        }
    }
    async pushListProductsUsuario(usuario_id,produto){
        try {
            const user = await usuario.findByIdAndUpdate(usuario_id,{
                '$push':{
                    produtosFavoritos: produto
                }
            },{new:true});
            return user;
        } catch (error) {
            throw "Usuário";
        }
    }
}

module.exports = new UsuarioControler();