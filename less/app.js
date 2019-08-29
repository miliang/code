const  express=require("express");
const  logger=require("morgan");
const  favicon=require("serve-favicon");
const bodyParser=require("body-parser");//处理post数据


const app=express();//调用express对象

//配置

//2.下载日志模块：npm install morgan --save
app.use(logger("dev"));//调用日志，配置dev(开发模式)

app.use(bodyParser.urlencoded({extended:false}));//读取POST数据，默认参数false


/*__dirname:指向当前文件的根目录
* */
//1.设置静态资源路径
app.use(express.static(__dirname+"/src"));
app.use(express.static(__dirname+"/src/html"));

//3.小图标：npm install serve-favicon --save
app.use(favicon(__dirname+"/src/images/favicon.ico"));



app.set("port",8888);

app.listen(8888,()=>{
    console.log("服务器已启动，端口号:"+app.get("port"));
});