const multer=require("multer");//引入模块
//文件上传模块的配置 storage :http://blog.csdn.net/charlene0824/article/details/51154059
const storage=multer.diskStorage({
   destination:function (req,file,cb) {
       // console.log(file);
       cb(null,"./public/uploads")//保存上传文件的路径
   },
    //给上传文件重命名
    filename:function (req,file,cb) {
        var fileFormat=(file.originalname).split(".");
        //重命名
        // cb(null,file.originalname);
        //重命名2
        cb(null,fileFormat[0]+"-"+Date.now()+"."+fileFormat[fileFormat.length-1]);
    }
});
const upload=multer({
    storage:storage
});
module.exports=upload;