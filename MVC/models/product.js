const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:  String,
    price:  Number,
    description: String,
    inStock:  Boolean
});
let product = mongoose.model("product", productSchema)
module.exports = product;
