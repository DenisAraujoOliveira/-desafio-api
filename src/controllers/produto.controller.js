const request = require("../utils/request.http")

class ProdutoControler {
    constructor(){}

    async getProdutoByID(product_id){
        try {
            const product = await request(`http://challenge-api.luizalabs.com/api/product/${product_id}`,"GET")
            return product;
        } catch (error) {
            throw "Produto";
        }
    }
}

module.exports = new ProdutoControler();
