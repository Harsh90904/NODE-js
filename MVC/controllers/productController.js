const product = require('../models/product');

const getProducts = async (req, res) => {
    let data = await product.find()
    res.send(data)
}

const createProduct = async (req, res) => {
    let data = await product.create(req.body)
    res.status(201).send(data)
}
const updateProduct = async (req, res) => {
    let {id} = req.params;
    let data = await product.findByIdAndUpdate(id, req.body);
    res.send(data);
}
const deleteProduct = async (req, res) => {
    let {id} = req.params;
     let data = await product.findByIdAndDelete(id);
    res.send(data);
}


module.exports = { getProducts,createProduct ,updateProduct , deleteProduct }
