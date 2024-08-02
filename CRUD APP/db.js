const mogodb = require("mongoose");

// Connect to MongoDB
const dbcontent = async () => {
    await mogodb.connect("mongodb://localhost:27017/NODE")
}

module.exports = dbcontent;