//引入短信验证模块
const AV=require("leancloud-storage");
//引入邮件推送模块
const modemailer=require("nodemailer");


const APP_ID="ySV4jnlQ0qvANN1SiclzMpbG-gzGzoHsz";
const APP_KEY="jc0q5EAGscO8doeAk2jE6NYr";

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

const smsController={
    sendCode(req,resp){
        console.log(req.body.phone);
        AV.Cloud.requestSmsCode({
            mobilePhoneNumber: req.body.phone,
            name: '嘿嘿嘿',//正在使用XXX服务
            op:'脱单',//进行XXX（操作）
            ttl: 20  //验证码的有效时间，单位：分钟
        }).then(function(){
            //调用成功
            resp.send("验证码发送成功");
        }, function(err){
            //调用失败
            resp.send("验证码发送失败")
        });
    },
    verifyCode(req,resp){
        AV.Cloud.verifySmsCode(req.body.code, req.body.phone).then(function(){
            //验证成功
            resp.send("验证成功")
        }, function(err){
            //验证失败
            resp.send(err);
        });
    },
    //发送邮件
    sendMail(req,resp){
        let transporter=modemailer.createTransport({
            host:"smtp.qq.com",//发送邮件的服务器
            port:"587",
            secure:false,
            auth:{
                user:"25261821@qq.com",
                pass:"leviomicsujucbcj"
            }
        });
        //发送邮件的内容配置
        let mailOptions={
            from:"<25261821@qq.com>",//发件人
            to:req.body.receiver,//收件人
            subject:"嘿嘿嘿",//邮件标题
            html:"<div>"+
                req.body.mailContent+
                "</div>"
            ,attachments:[{
                filename:"1.jpg",
                path:"./public/images/1.jpg"//相对于服务器的根地址
            }]
        };
        //执行发送邮件

        transporter.sendMail(mailOptions,(error,info)=>{
            if(error){
                console.log(error);
                resp.send(error)//错误信息
            }else {
                resp.send(info);//所有和本次发送相关的信息
            }
        })

    }
}
module.exports=smsController;
