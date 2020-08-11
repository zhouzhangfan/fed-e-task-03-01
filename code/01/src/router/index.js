import Vue from 'vue'
// import Router from 'vue-router'
import Router from '../my-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/About')
    },
    {
      path: '/my',
      name: 'My',
      component: () => import('@/views/My')
    }
  ]
})
