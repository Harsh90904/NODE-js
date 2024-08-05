const express = require('express');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(express.json())
app.use('/', productRoutes);

app.listen(8530, () => {
    console.log(`Server is running on port 8560`);
});
