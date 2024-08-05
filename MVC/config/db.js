const mongoose = require("mongoose")
const dbConnect = async () => {
    await mongoose.connect("mongodb://localhost:27017/product")
    console.log("connect to the database");
}
module.exports = dbConnect
