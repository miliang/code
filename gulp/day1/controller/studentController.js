const db=require("../config/dbpoolconfig");

const studentController={
    addStudent(req,resp){
        console.log("进入studentController");
        let stuname=req.query.stuname;
        let phone=req.query.phone;
        let sex=req.query.sex;
        let classid=req.query.classid;
        let age=req.query.age;
        let grade=req.query.grade;

        // console.log("姓名："+stuname+"电话："+phone+"性别："+sex+"classid:"+classid+"age:"+age+"grade"+grade);

        db.connect("insert into t_student values (?,?,?,?,?,?,?)",
        [null,stuname,phone,sex,classid,age,grade],
            (err,data)=>{
            // console.log(err.message);
            // console.log(data);

            if(err){
               resp.send(err.message)
            }else{
                resp.send("添加成功");
            }
            })
    }
};

module.exports=studentController;
