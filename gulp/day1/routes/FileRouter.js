const express=require("express");

const userController=require("../controller/userController");
const studentController=require("../controller/studentController");

const router=express.Router();//获取路由对象

/*路由作用：
*
*  服务器的请求分为get post put delete
*  1.路由拦截请求，判断请求类型
*
*  2.任务分发*/

//router.get(1.拦截地址 2.回调函数-拦截成功之后要做什么)
router.get("/login.do",userController.getUser);
//post
router.post("/login.do",userController.postUser);


// router.route("/login.do")
//     .get(userController.getUser())
//     .post(userController.postUser());

router.post("/reg.do",userController.addUser);
// router.post("/reg.do",function (req,resp){
//     console.log("1111")
// });
router.get("/addStudent.do",studentController.addStudent);

module.exports=router;