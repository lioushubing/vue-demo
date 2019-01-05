
import Vue from 'vue'
import App from './App'
// 路由配置
import router from './router'

// 导入element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false
// 通过注释来规避规范
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
