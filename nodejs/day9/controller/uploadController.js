
const userDao=require("../dao/userDao");

const dbpool=require("../config/dbpoolconfig");

const uploadController={
    uploadFile(req,resp){
        console.log("============uloadcontroller=========");
        console.log(req.file.filename);
        let pathname="uploads/"+req.file.filename;
        console.log(pathname);
        dbpool.connect("INSERT INTO myimg VALUES(?,?,?)",
            [null,"ddd",pathname],
            (err,data)=>{
                resp.send("上传成功")
            }
        )
    },
    getImage(req,resp){
        dbpool.connect("select * from myimg where picName=?",
        ["ddd"],
            (err,data)=>{
            console.log(err);
            console.log(data);
            resp.send(data);
            })
    },
    uploadFiles(req,resp){
        console.log(req.files);
    }
};
module.exports=uploadController;
