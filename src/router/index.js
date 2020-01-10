import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入登录页

// @表示src目录,后面必须有 / ;当要在style中用的时候,@前面要加~(波浪线)

Vue.use(VueRouter)

// 配置路由表

const routes = [
  { path: '/login',
    component: () => import('@/views/login') }
]
const router = new VueRouter({
  routes
})
export default router
