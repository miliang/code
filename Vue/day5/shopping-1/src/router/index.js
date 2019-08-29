import Vue from 'vue'
import Router from 'vue-router'
import Products from '@/components/Products'
import ShoppingCar from '@/components/ShoppingCar'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Products',
      component: Products
    },
    {
      path: '/Products',
      name: 'Products',
      component: Products
    },
    {
      path: '/ShoppingCar',
      name: 'ShoppingCar',
      component: ShoppingCar
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
