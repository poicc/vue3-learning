import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";

import vuetify from './plugins/vuetify';

axios.defaults.baseURL = 'http://47.96.31.161:8080/api';
Vue.prototype.axios = axios

Vue.config.productionTip = false;

new Vue({
  VueAxios,
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
