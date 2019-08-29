const productModule=require("../dao/userDao");
const productController={
    myType(req,resp){
        productModule.getProduct()
            .then(function (data) {
                console.log(data);
                resp.render("index",{mydata:data});
            })
    }
};
module.exports=productController;