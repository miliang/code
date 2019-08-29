import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import day3 from '@/components/day3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'day3',
      component: day3
    },
    {
      path: '/index',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/day3',
      name: 'day3',
      component: day3
    }
  ]
})
