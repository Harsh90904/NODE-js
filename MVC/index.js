const express = require('express');
const dbConnect = require('./config/db');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(express.json());
app.use('/:id', productRoutes);

app.listen(8030, () => {
    console.log("http://localhost:8030 is running");
    dbConnect();
});
