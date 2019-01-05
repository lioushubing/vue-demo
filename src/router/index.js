// 配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入组件
import Login from '@/components/login/Login'
import Home from '@/components/home/Home'
import Users from '@/components/users/users'

// 安装插件

Vue.use(VueRouter)
// 创建路由实例并导出
const router = new VueRouter({
  routes: [
    { path: '/login', component: Login, name: 'login' },
    { path: '/home',
      component: Home,
      name: 'home',
      children: [
        {path: '/users', component: Users, name: 'users'}
      ]

    }

  ]

})
export default router
// 配置登录拦截
router.beforeEach((to, from, next) => {
  // console.log('to', to)
  // console.log('from', from)
  // next()
  if (to.path === '/login') {
    return next()
  }
  const token = localStorage.getItem('token')
  if (token) {
    return next()
  } else {
    return next('/login')
  }
})
