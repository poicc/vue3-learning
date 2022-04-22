import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginStatus: false,
    user: {}
  },
  getters: {},
  mutations: {
    //登录成功后 将用户数据存入
    login(state,user) {
      state.loginStatus = true
      state.user = user
      localStorage.setItem('user',JSON.stringify(user))
    },
    logout(state) {
      state.loginStatus = false
      state.user = {}
      localStorage.removeItem('user')
    }
  },
  actions: {},
  modules: {},
});
