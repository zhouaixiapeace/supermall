import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 设置devtools可启动
Vue.config.devtools = true

new Vue({
  render: h => h(App),
  router
}).$mount('#app')