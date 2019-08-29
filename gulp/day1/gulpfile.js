/*gulp配置及任务语法
* gulp.task(1.任务名称 2.任务回调函数)*/
const gulp=require("gulp");
const del=require("del");
const clean=require("gulp-clean");
const bs=require("browser-sync");
const concat=require("gulp-concat");
const uglify=require("gulp-uglify");
const cleancss=require("gulp-clean-css");


gulp.task("hello",function () {
    console.log("hello world!");
});


/*1.task() 定任务
* 2.src() 源头文件
* 3.pipe() 管道流
* 4.dest() 输出文件的目的地*/

//复制单个HTML文件
gulp.task("copyHTML",function () {
    return gulp.src("./src/form.html").pipe(gulp.dest("dist/public"));
});

gulp.task("copyAllHtml",function () {
    //通配符 *
    return gulp.src("./src/*.html").pipe(gulp.dest("dist/public"));
});
//复制指定文件
gulp.task("copyjs",function () {
    //通配符 *
    return gulp.src(["./src/js/index.js","./src/js/hello.js"]).pipe(gulp.dest("dist/public/js"));
});
//排除某些文件  ！
gulp.task("copyjs2",function () {
    //通配符 *
    return gulp.src(["./src/js/*.js","!./src/js/hello.js"]).pipe(gulp.dest("dist/public/js"));
});
//添加多个后缀
gulp.task("copyImg",function () {
    return gulp.src("./src/images/*.{png,jpg}").pipe(gulp.dest("dist/public/images"));
});
//执行多个任务
//task(1.任务名称 2.任务依赖项（子任务名称）3.回调函数)
gulp.task("build",["copyAllHtml","copyjs","copyImg"],function () {
    console.log("主任务执行成功");
});
/*首先执行子任务，所有子任务执行完毕才开始执行主任务*/

//监听文件
/*/*1.task() 定任务
 *  2.src() 源头文件
 * 3.pipe() 管道流
 * 4.dest() 输出文件的目的地
 * 5.watch(“”监视的文件，[执行的任务名称]) 监听*/

// gulp.task("myWatchsuccess",function () {
//     gulp.watch("./src/success.html",["reBuild"]);
//     // gulp.watch("./src/**/*",["reBuild"]);
// });
//=============插件==============

//del:npm install del --save

gulp.task("myDel",function () {
    // del(["dist/public/images/*"]);
    del(["dist/**/*"]);
});

// gulp.task("reBuild",["myDel"],function () {
//     gulp.start("build");
//     // gulp.start("build","myWatchsucces");
// });
//========删除插件2========
// npm install gulp-clean --save

gulp.task("myClean",function () {
    return gulp.src("./dist").pipe(clean());
});
gulp.task("reBuild",["myClean"],function () {
    gulp.start("build");
    // gulp.start("build","myWatchsucces");
});
gulp.task("myWatchsuccess",function () {
    // gulp.watch("./src/success.html",["reBuild"]);
    gulp.watch("./src/*",["reBuild"]);
});

//==========实时刷新插件=========
// npm install browser-sync --save-dev

gulp.task("browsersync",function () {
    /*init(1.要监听的资源文件 [] 2.对象配置{服务器：{资源根目录：路径}} )*/
    var files=["./dist/*.html","./dist/**/*.html"];
    bs.init(files,{server:{baseDir:"./dist/public"}})
});
//============gulp-concat 合并文件============
// npm install gulp-concat --save-dev
gulp.task("concatJS",function () {
    return gulp.src("./src/js/*.js")
        .pipe(concat("combine.js"))
        .pipe(gulp.dest("./dist/public/js"));
});

//==========压缩JS :gulp-uglify=========
// npm install gulp-uglify --save-dev

gulp.task("concatUglify",function () {
        // return gulp.src(["./src/js/hello.js","./src/js/byebye.js"])
        return gulp.src("./src/js/*.js")
            .pipe(concat("combine2.js"))
            // .pipe(uglify())
            .pipe(uglify({//自己配置
                mangle:false,//修改参数名，true默认
                compress:false,//是否完全压缩
                output:{//保留所有注释
                    comments:"all"
                }
            }))
            .pipe(gulp.dest("./dist/public/js"));
});
//===========压缩CSS==========
//npm install gulp-clean-css --save-dev

gulp.task("concatCSS",function () {
    return gulp.src("./src/css/*.css")
        .pipe(concat("concat0.css"))
        .pipe(cleancss({
            level:2,
            format:{//格式
                breaks:{//换行
                    afterProperty:true,  //属性之间的换行
                    afterRuleEnds:true//选择器之间的换行
                }
            }
        }))
        .pipe(gulp.dest("./dist/public/css"))
});
//==============改变链接：gulp-cheerio=============
//npm install gulp-cheerio --save-dev

const cheerio=require("gulp-cheerio");
gulp.task("changeLink",function () {
    return gulp.src("./dist/public/*.html")
        .pipe(cheerio(function ($) {
            $("link").remove();
            $("script").remove();
            $("head").append("<link rel='stylesheet' href='css/concat.css'/>")
        }))
        .pipe(gulp.dest("./dist/public"))
});
//==========重命名：gulp-rename========
// npm install gulp-rename --save-dev

const rename=require("gulp-rename");
gulp.task("concatJsRename",function () {
    return gulp.src("./src/js/*.js")
        .pipe(concat("concat.js"))
        .pipe(gulp.dest("./dist/public/js"))
        .pipe(uglify())
        .pipe(rename("concat.min.js"))
        .pipe(gulp.dest("./dist/public/js"));
    });
//==========添加公共部分：gulp-file-include========
//npm install gulp-file-include --save-dev
const fileInclude=require("gulp-file-include");
gulp.task("includeHtml",function () {
        gulp.src("./src/index.html")
            .pipe(fileInclude({
                prefix:"@@",//表示指令前缀
                basepath:"@file"
            }))
            .pipe(gulp.dest("./dist/public"));

})