const dbpool=require("../config/dbpoolconfig");
const userModel={
       CheckUser(params){
           console.log(params);
        return new Promise(function (resolve, reject) {
            dbpool.connect("select * from t_user where username=? and pwd=?",
            params,(err,data)=>{

                    if(!err){
                        resolve(data);
                    }else{
                        reject(err);
                    }
                })
        })
    }
};
module.exports= userModel;
