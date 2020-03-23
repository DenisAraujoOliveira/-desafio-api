const mongoose =  require('../config/database');

const schema = new mongoose.Schema(
    {
        logradouro: {
            type: String,
            required: true
        },
        numero: {
            type: String,
            required: true,
            maxlength: 9
        },
        complemento: {
            type: String
        },
        bairro: {
            type: String,
            required: true
        },
        cidade: {
            type: String,
            required: true
        },
        estado: {
            type: String,
            required: true,
            maxlength: 2
        },
        cep: {
            type: String,
            required: true,
            maxlength: 8
        }
        
    }
)

module.exports =  schema;