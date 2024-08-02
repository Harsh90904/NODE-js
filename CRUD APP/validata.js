const idvaild = (req,res , next) => {
    let {foodname , foodtype , foodprice} = req.body;
    if(foodname && foodtype && foodprice){
       next()
    }
    else{
        res.send("invaild data!!")
    }
}
module.exports = idvaild;