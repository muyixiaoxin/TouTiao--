import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 加载验证插件的初始配置
import './utils/register-vant.js'
// REM适配：动态设置 html 标签字体大小
import 'amfe-flexible'
// import { Cell, CellGroup, Button } from 'vant'
import '@/styles/index.less'
// import '//at.alicdn.com/t/font_1602510_o8womo94mam.css'
// Vue
//   .use(Button)
//   .use(Cell)
//   .use(CellGroup)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
