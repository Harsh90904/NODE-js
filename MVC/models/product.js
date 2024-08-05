const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:  String,
    price:  Number,
    description: String,
    inStock:  Boolean
});

module.exports = productSchema;
