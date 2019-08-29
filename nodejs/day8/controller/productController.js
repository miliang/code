const productModule=require("../dao/userDao");
const productController={
    buyBuyBuy(req,resp){
        var username=req.session.username;
        console.log(username);
        if(req.session.username!=null&&req.session.username!=undefined){
            // resp.render("buybuybuy",{username:username})
            resp.render("buybuybuy")
        }else {
            resp.redirect("login.html");
        }
    }
};
module.exports=productController;