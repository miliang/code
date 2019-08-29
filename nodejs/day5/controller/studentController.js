//getStudent
const dbpool=require("../config/dbpoolconfig");
const stuController={
    //查询用户
    getStudent(req,resp){
        console.log(req.query.id);
        dbpool.connect("select * from t_user where id=?",
            [req.query.id],
         (err,data)=> {
            console.log(data);
            if(!err){
                if(data.length>0){
                    resp.send(data);
                }else{
                    resp.send("未查询到")
                }
            }else{
                resp.send(err.message);
            }

        })
    },
    //查询所有学生
    getAllstudent(req,resp){
        let pageCount=3;//每页显示3条信息
        let currentPage=req.query.currentPage;//当前在第几页

        let sql="select * from t_student limit ?,?";
        // sql+=" limit 0,3";
        /*limit 0,3===========1 page
        * limit 3,3===========2 page
        * limit 6,3===========3 page
        * limit第一个参数变化:
        * 第一个参数=当前页-1 *每页显示多少条*/
        dbpool.connect(sql,
            [(currentPage-1)*pageCount,pageCount],
            (err,data)=>{
            // console.log(data);
            resp.send(data);
        })
    },
    //查询指定学生
    getstudents(req,resp){
        // console.log("1211");
        let stuname = req.query.stuname || "";
        let stuid = req.query.stuid || "";
        let grade = req.query.grade || "";
        let sex = req.query.sex || "";
        // console.log(stuname + stuid + grade + sex);
        var params=[];//参数
        var sql;//sql语句
        sql="select * from t_student where 1=1";
        if(stuname!=""){
            stuname="%"+stuname+"%";
            sql+=" and stuname like ?";
            params.push(stuname);
        }
        if(stuid!=""){
            sql+=" and stuid=?"
            params.push(stuid);
        }
        if(grade!=""){
            sql+=" and grade=?"
            params.push(grade);
        }
        if(sex!=""){
            sql+=" and sex=?"
            params.push(sex);
        }
        console.log(sql);

        // console.log(params);

        dbpool.connect(sql,params,(err,data)=>{
            // console.log(data);
            resp.send(data);
        });

    },
    //查询总页数
    getPageTotal(req,resp){
        let pageCount=3;//每页显示3条信息
        dbpool.connect("select count(*) as totalcount from t_student",[],(err,data)=>{
            // console.log(data[0].totalcount);
            var data=data[0].totalcount;
            // console.log(typeof data);
            let result=Math.ceil(data/pageCount);
            // console.log(result);
            result=String(result);
            // resp.send(200,result);
            resp.send(result);
        });

    }

};
module.exports=stuController;
