const mysql=require("mysql");
module.exports.dbconfig=function () {
    const db=mysql.createConnection({
        //mysql配置
        host:"localhost",
        port:"3306",
        user:"root",
        password:"root",
        database:"beike"
    });
    return db;
};



