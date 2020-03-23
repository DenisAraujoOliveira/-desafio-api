const mongoose =  require('../config/database');
const endereco =  require('./endereco.model');
const produtos =  require('./produto.model');

const schema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,   
        },
        endereco: endereco,
        produtosFavoritos: [produtos]
    }
)
const user = mongoose.model('Usuario',schema);

module.exports =  user;