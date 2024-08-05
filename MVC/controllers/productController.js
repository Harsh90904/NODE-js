const Product = require('../models/product');

const getProducts = async (req, res) => {
    let data = await User.find()
    res.send(data)
}

const createProduct = async (req, res) => {
    let data = await User.create(req.body)
    res.status(201).send(data)
}
const updateProduct = async (req, res) => {
    let {id} = req.params;
    let data = await User.findByIdAndUpdate(id, req.body);
    res.send(data);
}
const deleteProduct = async (req, res) => {
    let {id} = req.params;
     let data = await User.findByIdAndDelete(id);
    res.send(data);
}


module.exports = { getProducts,createProduct ,updateProduct , deleteProduct }
