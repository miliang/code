/**
 * Created by Administrator on 2018/3/15.
 */
import * as types from '../type'
const state = {
  iPhone6S:{
    name: 'Apple/苹果 iPhone 6S',
    desc: '3D Touch、1200万像素照片、4k视频，强大功能于一身。',
    price: '5288 - 6888',
    isSelected: true,
    style: {
      '银色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',
      '深空灰色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-gray-select-2015.png',
      '金色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-gold-select-2015.png',
      '玫瑰金色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-rosegold-select-2015.png'
    },
    activeStyleUrl: 'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',
    storage: {
      '16GB': 5288,
      '64GB': 6088,
      '128GB': 6888
    }
  },
  car:[]
}
const actions = {
  // 在actions里面  类似与我们Ctrl  在这里对传递过来的参数进行修改
  // 在这里可以异步方法
  [types.ACTIONS_ADD_SHOPPINGCAR](context,shopping){
    // 判断购物车car中的对象是否有值相同  如果有想同的我就让计数++  如果没有push进数组
    if(state.car.length==0){
      shopping.num = 1
      context.commit(types.MUTATIONS_ADD_SHOPPINGCAR,shopping)
      console.log("数组为空的时候")
    }else {
      var forState = false
      var myshopping = JSON.stringify(shopping)
      myshopping = myshopping.substring(0,myshopping.length-1)
      for(let key of state.car){
        console.log(JSON.stringify(key).indexOf(myshopping))
        if(!JSON.stringify(key).indexOf(myshopping)){
          // 不一样的情况
          forState = false
        }else {
          // 一样的情况
          forState = true
          key.num++
          // 跳出循环
          break
        }
      }
      if(!forState){
        context.commit(types.MUTATIONS_ADD_SHOPPINGCAR,shopping)
      }

      }
    }
  }
const mutations = {
  // 类似与数据持久层   只对state进行修改  并且mutations里面的函数不能是异步函数
  [types.MUTATIONS_ADD_SHOPPINGCAR](state,shopping){
    // console.log('mutations'+123)
    // console.log(shopping)
    state.car.push(shopping)
  }
}
export default {
  state,
  actions,
  mutations
}
