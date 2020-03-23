const mongoose =  require('../config/database');

const schema = new mongoose.Schema(
    {
        price: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        brand: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        reviewScore: {
            type: String,
            required: true
        },
        
    }
)

module.exports =  schema;