const axios = require('axios');

const request = async (url, method) => {
    try {
        const response  = await axios({
                url: url,
                method: method
            })
        return response.data
    } catch (error) {
        throw {error:"Erro ao executar requisição"}
    }
    
}

module.exports = request;