/*
* method 提交方法 get post
* callback 回调函数
* url 提交地址
* async 同步异步
* param 传的参数*/
var xhr;
if(window.XMLHttpRequest){
    xhr=new XMLHttpRequest();
}else{
    xhr=new ActiveXObject("Microsoft.XMLHTTP");
}
function myAjax(method,url,params,callback,async){
    //true-异步 false-同步
    if(async==undefined) {
        async = true;
    }
    xhr.onreadystatechange=function () {
        if(xhr.readyState==4&&xhr.status==200){
           callback();
        }
    }

    if(method=="get"){
        xhr.open(method,url+"?"+params,async);
        xhr.send(null);
    }else if(method=="post"){
        xhr.open(method,url,async);
        xhr.setRequestHeader("Content-type","application/x-www-urlencoded");
        xhr.send(params);
    }
}
