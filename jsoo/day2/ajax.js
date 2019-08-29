/**
 * Created by Administrator on 2018/3/5.
 */
(function(){
  function createXHR() {
    let xhr ;
    if(window.XMLHttpRequest){
      xhr = new XMLHttpRequest()
    }else{
      xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }
    return xhr
  }
  function myajax(obj) {
    let xhr = createXHR()
    xhr.onreadystatechange = obj.success
    if(obj.type == 'get'){

    }else if(obj.type == 'post'){

    }
  }
  window.$ = window.jQuery = {}
  $.ajax = myajax
})()