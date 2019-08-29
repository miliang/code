const express=require("express");
const path=require("path");

const uploadController=require("../controller/uploadController");
const upload=require("../config/uploadconfig");
//短信模块
const  smsController=require("../controller/smsController");


const router=express.Router();//获取路由对象


//post(1.拦截路径 2.调用upload模块 3.分发controller)
//文件上传
router.post("/uploadFile.do",upload.single("myfile"),uploadController.uploadFile);
//文件获取
router.get("/getImage.do",uploadController.getImage);

//多文件上传
router.post("/uploadFiles.do",upload.array("myfiles"),uploadController.uploadFiles);

//下载
router.get("/fileDownload.do",function (req, resp) {
    //1.下载文件的路径 2.下载后保存的文件名
    resp.download("./public/uploads/duorou.jpg","duoroutest.jpg");
});
//短信
router.post("/sendCode.do",smsController.sendCode);
//短信验证
router.post("/verifyCode.do",smsController.verifyCode);
//发送邮件
router.post("/sendMail.do",smsController.sendMail);
module.exports=router;
