import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import { Message } from 'element-ui'
import { Upload } from 'element-ui'
import { Button } from 'element-ui'
import { Backtop } from 'element-ui'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store/index'
import {Input} from 'element-ui' 
// import '../public/icon.css'
// import '../public/reset.scss'
import VueCookie from 'vue-cookie'
import router from './router'
// （代理）根据前端跨域做调整 /a/b: /api/a/b
axios.defaults.baseURL = '/api';
// axios.defaults.timeout = 8000;

Vue.config.productionTip = false

// axios 挂载 vue 原型上 后期直接使用 this.axios 直接使用即可
Vue.prototype.axios = axios

Vue.prototype.$message = Message;
Vue.prototype.$cookie = VueCookie;

//注册 cookie
Vue.use(VueCookie)
Vue.use(Upload)
Vue.use(Button)
Vue.use(Backtop)
Vue.use(Input)

// 拦截器
axios.interceptors.response.use(function(response) {
  // 获取接口返回值
  let res = response.data
  if (res.errno == 0) { // 没错误
    return res.data
  } else{ // 有错误
    return res
  } 
}, (error) => {
  return Promise.reject(error);
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
