/**
 * Created by Administrator on 2018/3/15.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import Shopping from './module/shoppingModule'
Vue.use(Vuex)
// console.log(Shopping)
export default new Vuex.Store({
  modules:{
    shopping:Shopping
  }
})
