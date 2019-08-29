const express=require("express");

const userController=require("../controller/userController");
const productController=require("../controller/productController");


const router=express.Router();//获取路由对象

router.post("/login.do",userController.controllerCheckUser2);

//=================EJS===================

router.get("/mytest",function (req, resp) {
    var u_name="龙超";
    // resp.send(u_name);
    resp.render("test",{username:u_name,test:"这是测试文字"});
})

router.get("/page.do",productController.myType);
module.exports=router;