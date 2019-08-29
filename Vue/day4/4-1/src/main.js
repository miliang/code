// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import {Loading,Message} from 'element-ui'
Vue.use(ElementUI);
Vue.prototype.axios = axios
Vue.config.productionTip = false

/* 配置拦截器*/
var loadinginstace;
axios.interceptors.request.use(config=>{
  //在发送请求前做什么
  console.log('请求发送')
  loadinginstace = Loading.service({fullscreen:true})
  return config
},error=>{
  // 请求失败做什么
  Message.error({
    message:"请求失败"
  })
  return Promise.reject(error)
})
axios.interceptors.response.use( (response)=> {
  // 对响应数据做点什么
  loadinginstace.close()
  return response
},  (error) =>{
  // 对响应错误做点什么
  loadinginstace.close()
  Message.error({
    message:"加载超时"
  })
  return Promise.reject(error)
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
