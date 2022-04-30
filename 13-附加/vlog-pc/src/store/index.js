import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginStatus: false,
    loginUser: {}, //登录人自己
    user: {}, //其他用户
    avatar: ""
  },
  getters: {},
  mutations: {
    //登录成功后，将用户数据存入
    login(state, user) {
      state.loginStatus = true
      state.loginUser = user
      localStorage.setItem('loginUser', JSON.stringify(user))
    },
    // 退出登录
    logout(state) {
      state.loginStatus = false
      state.loginUser = {}
      localStorage.removeItem('loginUser')
    },
    // 访问用户页面
    visit(state, user) {
      state.user = user
    },
    setAvatar(state, data) {
      state.avatar = data
    },
    setGender(state, data) {
      state.gender = data
    },
    // 修改资料
    editUserInfo(state, obj) {
      if (state.user) {
        state.user.nickname = obj.nickname
        state.user.password = obj.password
        state.user.avatar = obj.avatar
        state.user.gender = obj.gender
        state.user.birthday = obj.birthday
        state.user.address = obj.address
        localStorage.setItem('user', JSON.stringify(state.user))
      }
    }
  },
  actions: {},
  modules: {}
})
