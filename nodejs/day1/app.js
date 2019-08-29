console.log("冯政豪~真可爱！");
//==========1. 常量 const  在初始化设置之后就不能再重新赋值了
// const a=1;
// console.log(a);
// a=32;
// console.log(a);
//==========2. 变量 var 可以重复赋值
// var b=3;
// b=6;
// console.log(b);

// ==========3. 局部变量 let 的作用域是块
// var a=5;
// var b=10;
// if(a==5){
//     let a=4;
//     var b=1;
//     console.log(a);  //4
//     console.log(b);//1
// }
// console.log(a);   // 5
// console.log(b);  //1


//====================搭建服务器===================
//1.引入http模块：require关键词
const http=require("http");//返回http对象，
//2.http对象可以调用createServer（）方法来搭建服务器
// const server=http.createServer(function () {
//    console.log("启动");
// });

const server=http.createServer((request,response)=>{//依赖注入
    //request对象:请求对象
    //response对象：响应对象
    // console.log(request);
    console.log(request.url);//favicon.ico 请求页面图标
    // console.log("启动");
    // response.write(" hello world!");

    //响应头的设置：1.响应的状态码，404表示资源请求失败 200 表示成功
    //2.对象 设置文件类型，
    response.writeHeader(200,{"content-type":"text/html;charset=utf-8"});//响应头
    response.write("11111");//响应内容,必须是字符串
    response.end();//必须，响应关闭
});
//3.server.listen(8888)监听端口
server.listen(8888);

/*
* 响应分为三个部分：
* 响应头
* 响应内容
* 响应关闭*/