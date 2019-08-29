/*
 * 3.控制层
 * 负责：处理具体的业务逻辑
 */
const fs=require("fs");

// module.exports.sendHtml=function (request,response) {
//     console.log("进入控制层");
//     fs.readFile("public"+request.url,(err,data)=>{
//         response.writeHeader(200,{"content-type":"text/html;charset=utf-8"});
//         response.write(data);
//         response.end();
//     })
// };
// module.exports.sendCss=function (request,response) {
//     fs.readFile("public"+request.url,(err,data)=>{
//         response.writeHeader(200,{"content-type":"text/css;charset=utf-8"});
//         response.write(data);
//         response.end();
//     })
// };
// module.exports.sendJs=function (request,response) {
//     fs.readFile("public"+request.url,(err,data)=>{
//         response.writeHeader(200,{"content-type":"text/javascript;charset=utf-8"});
//         response.write(data);
//         response.end();
//     })
// };


// module.exports.sendFile=function (request,response,type) {
//     fs.readFile("public"+request.url,(err,data)=>{
//         response.writeHeader(200,{"content-type":"text/"+type+";charset=utf-8"});
//         response.write(data);
//         response.end();
//     })
// };


// module.exports.sendJpg=function (request,response) {
//     fs.readFile("public"+request.url,(err,data)=>{
//         response.writeHeader(200,{"content-type":"images/jpg"});
//         response.write(data);
//         response.end();
//     })
// };
// module.exports.sendPng=function (request,response) {
//     fs.readFile("public"+request.url,(err,data)=>{
//         response.writeHeader(200,{"content-type":"images/png"});
//         response.write(data);
//         response.end();
//     })
// };

// exports.sendImg=function (request,response,type) {
//     fs.readFile("public"+request.url,(err,data)=>{
//         response.writeHeader(200,{"content-type":"images/"+type});
//         response.write(data);
//         response.end();
//     })
// };

// console.log(module.exports);//对象
// console.log(module.exports===exports);//true

/*module.exports===exports (简写)
* 区别：
* 数据类型：基本类型和引用类型（数组和对象）
* 基本类型值--栈
* 引用类型值--堆*/

// let myModuleExposts= {
//     str:"abc"
// };
// let myExports=myModuleExposts;
// myExports.str="name";
// console.log(myModuleExposts.str);
// module.exports={};

//======================修改===============
const fileController={
    // sendfile1:function (request, response, type) {
    //
    // },
    sendFile(request,response,type) {
        fs.readFile("public"+request.url,(err,data)=>{
            response.writeHeader(200,{"content-type":"text/"+type+";charset=utf-8"});
            response.write(data);
            response.end();
        })
    },
    sendImg(request,response,type) {
        fs.readFile("public"+request.url,(err,data)=>{
            response.writeHeader(200,{"content-type":"images/"+type});
            response.write(data);
            response.end();
        })
    }

};
module.exports=fileController;