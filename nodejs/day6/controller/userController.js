const dbpool=require("../config/dbpoolconfig");
const userModel=require("../dao/userDao");

const userController={
    checkUser(req,resp){
        console.log(req.query.username);
        let username=req.body.username;
        let password=req.body.password;
        dbpool.connect("insert into t_user values(?,?,?)",
        [null,username,password],
            function (err, data) {
                console.log(data);
                console.log(err);
                if(!err){
                    resp.send("注册成功")
                }else{
                    resp.send(err.message);
                }

            })
    },
    ControllerAddUser(req,resp){
        console.log("进入controller");
        let username=req.body.username;
        let password=req.body.password;
        userModel.DaoAddUser([null,username,password],function (result) {
            resp.send("注册成功");
        })
    }
};
module.exports=userController;
