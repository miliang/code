// const mysql=require("mysql");
//
// const database=require("../config/dbconfig");

const dbpool=require("../config/dbpoolconfig");


const userController={
    checkUser(req,resp){
        console.log(req.query.username);
        let username=req.query.username;
        dbpool.connect("select * from t_user where username=?",
        [username],
            function (err, data) {
                console.log(data);
                console.log(err);
                if(!err){
                    if(data.length>0){
                        resp.send("用户已被注册");
                    }else{
                        resp.send("用户名可用");
                    }
                }else{
                    resp.send(err.message);
                }

            })
    },
    checkUser2(req,resp){
        let username;
        // if(req.query.username){
        //     username=req.query.username;
        // }else{
        //     username=req.body.username;
        // }

        username=req.query.username||req.body.username;//前面返回true 就用前面的
        // username=req.query.username&&req.body.username;//前面返回true 就用后面的
        // console.log(req.body.username);

        dbpool.connect("select * from t_user where username=?",
            [username],
            function (err, data) {
                // console.log(data);
                // console.log(err);
                if(!err){
                    if(data.length>0){
                        resp.send("用户已被注册");
                    }else{
                        resp.send("用户名可用");
                    }
                }else{
                    resp.send(err.message);
                }

            })
    },
    getAllUser(req,resp){
        dbpool.connect("select * from t_user",[],(err,data)=>{
            resp.send(data);
        })
    },
    searchUser(req,resp){
        let username=req.query.username;
        console.log(username);

        dbpool.connect("select * from t_user where username like ?",
        ["%"+username+"%"],
            (err,data)=>{
            console.log(data);
            resp.send(data);
            })

    }
};
module.exports=userController;
