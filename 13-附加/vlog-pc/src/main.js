import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import layer from 'vue-layer'
import 'vue-layer/lib/vue-layer.css'
Vue.prototype.$layer = layer(Vue, {
  msgtime: 3 //目前只有一项，即msg方法的默认消失时间，单位：秒
})

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import vuetify from './plugins/vuetify'

// axios.defaults.baseURL = 'http://47.96.31.161:8080/api'
axios.defaults.baseURL = 'http://localhost:8080/api'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
