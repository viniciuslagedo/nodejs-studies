const mongoose = require('../../database');

OrderSchema = new mongoose.Schema({
    productId: {
        type: Number,
        required: true
    },
    orderId: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

const order = mongoose.model('Order', OrderSchema);

module.exports = order;