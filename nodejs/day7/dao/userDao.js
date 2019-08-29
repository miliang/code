/**
 * DAO-data access Object    连接数据库，处理数据
 * MVC
 * 视图层 V：view 界面展示
 * 业务层 C：Controller 逻辑处理 res resp
 * 持久层M： model 数据操作，只负责数据库
 */
const dbpool=require("../config/dbpoolconfig");
const userModel={
    daoCheckUser(params,callback){
        dbpool.connect("select * from t_user where username=? and pwd=?",
        params,
            (err,data)=>{
            if(!err){
                callback(data);
            }

            })
    },
    daoCheckUser2(params){
        return new Promise(function (resolve, reject) {
            dbpool.connect("select * from t_user1 where username=? and pwd=?",
            params,(err,data)=>{
                // console.log(data);
                // console.log(err);
                // resolve(data);
                    if(!err){
                        resolve(data);
                    }else{
                        // console.log(err);//只能在后台打印出来，then只能拿到resolve,无法获取reject
                        reject(err);
                    }
                })
        })
    },
    // ,
    // daoCheckUser3(params){
    //     return new Promise(function (resolve,reject) {
    //         dbpool.connect("数据库查询语句",params,(err,data)=>{
    //             resolve(data);
    //         })
    //     })
    // }
    //===================EJSday7 下午==============
    getProduct(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("select * from t_products",[],(err,data)=>{
                resolve(data);
            })
        })
    }
};
module.exports= userModel;
