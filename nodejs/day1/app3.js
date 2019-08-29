/*主程序文件
负责:
1.搭建服务器，对服务器进行配置，依赖的外部模块
2.监听端口
3.拦截用户向服务器发起的各类请求*/
const http = require("http");
//导入路由文件
const router=require("./routes/FileRouter");
const server = http.createServer((request,response)=>{
    console.log("服务启动");
    router.fileRouter(request,response);
});
server.listen(8888);
