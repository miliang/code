
const userModel=require("../dao/userDao");

const userController={
    controllerCheckUser(req,resp){
        userModel.daoCheckUser([null,req.body.username,req.body.password],
            function (result) {

                resp.send("登录成功");
            })
    },
    controllerCheckUser2(req,resp){
        userModel.daoCheckUser2([req.body.username,req.body.password])
            // .then(function (data) {
            //
            //    userModel.daoCheckUser3([data]);
            // })
            .then(function (data) {
                console.log(data);
                resp.send("登录成功");
            })
            .catch(function (err) {//异常捕获 rejected里面data
                // console.log(err);
                resp.send(err);
            })
    }
};
module.exports=userController;
