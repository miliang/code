
const userDao=require("../dao/userDao");

const userController={
    login(req,resp){
        console.log(req.body.password);
        let username=req.body.username;
        let password=req.body.password;
        userDao.CheckUser([username,password]).
            then((data)=> {
                if(data.length>0){
                    console.log(data);
                    console.log(req.session);

                    req.session.username=data[0].username;
                    console.log(req.session);
                    // resp.render("index",{username:req.session.username});
                    if(req.session.preUrl){
                        resp.redirect(req.session.preUrl)
                    }else{
                        resp.render("index",{username:req.session.username});
                    }
                }
        })
     },
    deleteUserMsg(req,resp){
        req.session.username=null;
        console.log(req.session.username);
        console.log(req.session);
        //彻底清除
        req.session.destroy();
        console.log(req.session);
        resp.redirect("login.html");
    }
};
module.exports=userController;
