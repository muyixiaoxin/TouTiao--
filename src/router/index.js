import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入登录页

// @表示src目录,后面必须有 / ;当要在style中用的时候,@前面要加~(波浪线)

Vue.use(VueRouter)

// 配置路由表

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    // name: 'Tabbar', // 有默认子路由的父路由不需要写 name
    component: () => import('@/views/tab-bar'),
    children: [
      {
        path: ' ', // 默认子路由
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        path: 'qa',
        name: 'qa',
        component: () => import('@/views/qa')
      },
      {
        path: 'video',
        name: 'video',
        component: () => import('@/views/video')
      },
      {
        path: 'my',
        name: 'my',
        component: () => import('@/views/my')
      }
    ]
  },

  {
    path: '/user/:userId',
    name: 'users',
    component: () => import('@/views/users')
  }

]
const router = new VueRouter({
  routes
})
export default router
