const http = require("http");

const fs = require("fs");//专门处理文件的系统对象，它提供了读取文件的方法

const server = http.createServer((req,resp)=>{
    /*
    * 1.读取路径（必须）
    * 2.字符编码（可选）
    * 3.读取结果的回调函数*/
    console.log(req.url);
    console.log(req.url.split("."));
    let newPath = req.url.split(".");
    if(newPath[1]=="html"){
        fs.readFile("public"+req.url,(err,data)=>{
            resp.writeHeader(200,{"content-type":"text/html;charset=utf-8"});
            resp.write(data);
            resp.end();
        })
    }
    else if(newPath[1]=="css"){
        fs.readFile("public"+req.url,(err,data)=>{
            resp.writeHeader(200,{"content-type":"text/css;charset=utf-8"});
            resp.write(data);
            resp.end();
        })
    }
    else if(newPath[1]=="js"){
        fs.readFile("public"+req.url,(err,data)=>{
            resp.writeHeader(200,{"content-type":"text/javascript;charset=utf-8"});
            resp.write(data);
            resp.end();
        })
    }
    else if(newPath[1]=="jpg"){
        fs.readFile("public"+req.url,(err,data)=>{
            resp.writeHeader(200,{"content-type":"images/jpg"});
            resp.write(data);
            resp.end();
        })
    }
    else if(newPath[1]=="png"){
        fs.readFile("public"+req.url,(error,data)=>{
            resp.writeHeader(200,{"content-type":"images/png"});
            resp.write(data);
            resp.end();
        })
    }
});
server.listen(8888);