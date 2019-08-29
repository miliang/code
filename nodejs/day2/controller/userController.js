const mysql=require("mysql");
const userController={
    getUser(request,response){
        console.log(request.query);
        console.log(request.query.username);
        console.log(request.query.pwd);
        /*select * from t_user where username=  ? and  pwd=?*/
        response.send("controller收到任务！");
        /*表单通过get提交会泄露个人信息，用户名和密码都会在url地址栏直接显示
        * 安全性不高
        * get请求提交传送的数据量较小，不能大于2kb
        * */
    },
    postUser(request,response){
        // console.log("post进入 controller");
        // console.log(request.body);
        // console.log(request.body.username);
        // console.log(request.body.pwd);
        let username=request.body.username;
        let password=request.body.pwd;

        /*====连接mysql 数据库====
        * 下载数据模块npm install mysql --save
        * 引入模块
        *
        * 1.创建一个连接对象*/
        const db=mysql.createConnection({
            //mysql配置
            host:"localhost",
            port:"3306",
            user:"root",
            password:"root",
            database:"beike"
        });
        //2.发起连接
        db.connect();

        /*3.发起sql语句请求
        * 1.sql语句
        * 2.sql参数
        * 3.回调函数--执行完sql语句之后调用，把结果注入到回调函数内*/

        // db.query("SELECT * FROM t_user WHERE username=? AND pwd=?",
        // [username,password],
        //     (err,data)=>{
        //     // console.log(err);
        //     if(data!=undefined){
        //         console.log(11111);
        //         response.redirect("success.html");
        //
        //     }else{
        //         response.send("登录失败！");
        //     }
        //     db.end();
        //     });

        //方法二
        db.query("SELECT * FROM t_user WHERE username='"+username+"' and pwd='"+password+"'",
            [],
            (err,data)=>{
                // console.log(err);
                if(data!=undefined){
                    console.log(11111);
                    response.redirect("success.html");

                }else{
                    response.send("登录失败！");
                }
                db.end();
            });
        // response.send("OK");
    }
}
module.exports=userController;
