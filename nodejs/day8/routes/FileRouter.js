const express=require("express");
const path=require("path");

const userController=require("../controller/userController");
const productController=require("../controller/productController");


const router=express.Router();//获取路由对象

router.post("/login.do",userController.login);

router.get("/buybuybuy.do",productController.buyBuyBuy);

router.get("/deletUser.do",userController.deleteUserMsg);

router.get("/vip.html",(req,resp,next)=>{
    console.log("被拦截了");
    console.log(req.session.username);
    if(req.session.username==undefined){
        resp.redirect("login.html");
    }else{
        // resp.redirect("vip.html");//错误
        // resp.sendFile(path.join(__dirname,"../public/vip.html"));//正确方式1
        next();//正确方式2
    }
})
module.exports=router;