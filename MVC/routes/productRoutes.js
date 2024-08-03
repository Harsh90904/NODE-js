const { Router } = require("express");
const { createProduct , getProducts  , updateProduct , deleteProduct} = require("../controllers/productController");
const userRouter = Router();


userRouter.post('/products',createProduct);
userRouter.get('/products', getProducts);
userRouter.put('/products/:id', updateProduct);
userRouter.delete('/products/:id', deleteProduct);

module.exports = userRouter;
