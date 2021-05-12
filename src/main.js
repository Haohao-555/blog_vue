import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

// （代理）根据前端跨域做调整 /a/b: /api/a/b
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;

Vue.config.productionTip = false

// axios 挂载 vue 原型上 后期直接使用 this.axios 直接使用即可
Vue.prototype.axios = axios;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
