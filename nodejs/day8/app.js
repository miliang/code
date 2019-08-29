const  express=require("express");
const  logger=require("morgan");
const  favicon=require("serve-favicon");
const bodyParser=require("body-parser");//处理post数据
//==========session&cookie========
const session=require("express-session");
const cookieParser=require("cookie-parser");


const path=require("path");//处理路径

//引入路由模块
const route=require("./routes/FileRouter");

const app=express();//调用express对象

//配置

//==============cookie&session配置=============
app.use(cookieParser());
app.use(session({
    name:"demo148",//在
    secret:"secret",//秘钥为了安全性考虑设置的secret属性
    cookie:{
        maxAge:3000000000000000000000000,//cookie有效时间，单位：毫秒
    },
    resave:true,//刷新重新计算失效时间
    rolling:true,//保存更新
    saveUninitialized:true//未初始化的cookie要不要保存
}));

//2.下载日志模块：npm install morgan --save
app.use(logger("dev"));//调用日志，配置dev(开发模式)

//=================EJS 配置====================
app.set("views",path.join(__dirname,"views"));//配置视图文件路径
//视图解析的引擎Pug/Jade
app.set("view engine","ejs");


app.use(bodyParser.urlencoded({extended:false}));//读取POST数据，默认参数false
app.use(bodyParser.json());


//===============拦截所有页面=================

app.use("/",(req,resp,next)=> {
    console.log("通用拦截",req.session.username);
    console.log(req.headers.referer);
    console.log(req.url);
    req.headers.referer=req.headers.referer||"";
    //已登录
    if(req.session.username||req.path=="/login.html"||req.headers.referer.match(/login.html$/)){
        app.locals.username=req.session.username
        next();
    }else{//未登录
        req.session.preUrl=req.url;
        resp.redirect("/login.html");
    }
});


/*app.use(route必须摆放在静态资源路径设置之前)*/
app.use(route);//使用自定义路由模块


/*__dirname:指向当前文件的根目录
* */
//1.设置静态资源路径
app.use(express.static(__dirname+"/public"));
app.use(express.static(__dirname+"/public/html"));

/*404*/
app.use((req,resp)=>{
    // resp.redirect("404.html");

    resp.status(404);
    //引入处理路径的path模块
    // resp.sendFile(__dirname+"/public","404.html"); //错误
    resp.sendFile(path.join(__dirname,"/public","404.html")); //正确


});


//3.小图标：npm install serve-favicon --save
app.use(favicon(__dirname+"/public/images/favicon.ico"));



app.set("port",8888);

app.listen(8888,()=>{
    console.log("服务器已启动，端口号:"+app.get("port"));
});