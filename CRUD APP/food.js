const  mogodb  = require("mongoose");
const user = new mogodb.Schema({
    "foodname": String,
    "foodtype": String,
    "foodprice": Number,
});
let User = mogodb.model("User", user);
module.exports = User