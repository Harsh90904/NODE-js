const express = require("express");
const mogodb = require('./db');
const User = require('./food');
let idvaild = require('./validata');
const app = express();
app.use(express.json());

app.get("/" , async (req, res) => {
    let data = await User.find();
    res.send(data);
});
app.post("/",idvaild, async (req, res) => {
    let data = await User.create(req.body);
    res.send(data);
})
app.patch("/:id", async (req, res) => {
    let {id} = req.params;
    let data = await User.findByIdAndUpdate(id, req.body);
    res.send(data);
});
app.delete("/:id", async (req, res) => {
    let {id} = req.params;
     let data = await User.findByIdAndDelete(id);
    res.send(data);
 });
app.listen(8510 , () => {
    console.log("server is running on port 8510");
    mogodb();
});