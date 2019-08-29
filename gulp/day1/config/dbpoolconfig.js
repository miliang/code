const mysql=require("mysql");
const dbpool={
    pool:{},
    config:{
        host:"localhost",
        port:"3306",
        user:"root",
        password:"root",
        database:"beike"
    },
    create(){
      console.log("创建连接池");
      this.pool=mysql.createPool(this.config);
    },
    connect(sql,arr,fn){
        this.pool.getConnection((err,connection)=>{
            //发起query
            //1.sql语句  2.sql 参数 3. 回调函数
           connection.query(sql,arr,fn);
           // 释放连接
           connection.release();
        })
    }
};
dbpool.create();
module.exports=dbpool;