//导入vue
import Vue from 'vue'
//导包
import VueRouter from 'vue-router'

import login from '../views/login/login.vue'
// Use 注册一下
Vue.use(VueRouter)
// 规则
const routes =[
    {
        path:"/login",
        component:login
    }
]
//创建
const router = new VueRouter({
    routes //touters:routers
})
//暴露出去
export default router