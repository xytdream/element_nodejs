import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios  from 'axios'

Vue.use(ElementUI)

Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3001/api'
})
// console.log(Vue.prototype)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
