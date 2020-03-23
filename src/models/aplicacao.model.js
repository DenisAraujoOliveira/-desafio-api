const mongoose =  require('../config/database');
const uuid = require("uuid")

const schema = new mongoose.Schema(
    {
        app_id: {
            type: String,
            default: uuid.v4
        },
        sigla: {
            type:String,
            required: true,
        },
        nome: {
            type:String,
            required: true,
        }
    }
)
const app = mongoose.model('Aplicacao',schema);

module.exports =  app;