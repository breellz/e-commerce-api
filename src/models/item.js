const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name: {
        type: Stirng,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

const Item = mongoose.model('Item', itemSchema)

modules.export = Item