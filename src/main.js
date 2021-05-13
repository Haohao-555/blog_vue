import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import { Message } from 'element-ui'
import 'bootstrap/dist/css/bootstrap.min.css'


// （代理）根据前端跨域做调整 /a/b: /api/a/b
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;

Vue.config.productionTip = false

// axios 挂载 vue 原型上 后期直接使用 this.axios 直接使用即可
Vue.prototype.axios = axios

Vue.prototype.$message = Message

// 拦截器
axios.interceptors.response.use(function(response) {
  // 获取接口返回值
  let res = response.data
  if (res.errno == 0) { // 没错误
    return res.data;
  } else if (res.errno == 10005) { // 未登录
     window.location.href = '/#/login';
     return Promise.reject(res)
  } else { // 有错误
    Message.warning(res.message);
    return Promise.reject(res.message)
  } 
},(error) => {
  let res = error.response;
  Message.error(res.data.msg);
  return Promise.reject(error);
})



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
