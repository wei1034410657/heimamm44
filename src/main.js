import Vue from 'vue'
import App from './App.vue'
//导入接收 路由
import router from './router/router.js'
//导入饿了么ui
import ElementUI from 'element-ui';
//导入饿了么的样式
import 'element-ui/lib/theme-chalk/index.css';
//注册一下
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //挂载到Vuer示例上 router
  router
}).$mount('#app')
