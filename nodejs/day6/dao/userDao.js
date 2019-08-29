/**
 * DAO-data access Object    连接数据库，处理数据
 * MVC
 * 视图层 V：view 界面展示
 * 业务层 C：Controller 逻辑处理 res resp
 * 持久层M： model 数据操作，只负责数据库
 */
const dbpool=require("../config/dbpoolconfig");
const userModel={
    DaoAddUser(params,callback){
        dbpool.connect("insert into t_user values(?,?,?)",
            params,
            (err,data)=>{
                console.log(data);
                if(!err){
                    callback(data);
                }
            })
        // callback();
    }
};
module.exports= userModel;
