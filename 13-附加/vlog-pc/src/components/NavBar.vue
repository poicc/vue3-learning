<template>
  <!-- 动态样式绑定，滑动到指定位置才激活背景色样式 -->
  <v-card class="nav-wrapper blue-grey darken-2" ref="navbar" :class="{ bgColor: active }" elevation="10">
    <v-row class="nav-transparent mx-2 pl-12" justify="space-between" align="center">
      <!-- 左侧留空 -->
      <v-col cols="12" md="2"> </v-col>

      <!-- 中间菜单 -->
      <v-col cols="12" md="6">
        <template v-for="(item, index) in items">
          <!-- 对“我的”动态路由的条件渲染 -->
          <router-link :key="index" v-if="item.text === '我的'" :to="item.path + '/' + loginUser.id" link class="mr-2">
            <v-btn text large class="nav-item text-md-h6 white--text">
              <v-icon right class="mr-2">
                {{ item.icon }}
              </v-icon>
              {{ item.text }}
            </v-btn>
          </router-link>

          <!-- 对其他路由的渲染 -->
          <router-link :key="index" v-else :to="item.path" link class="mr-2">
            <v-btn text large class="nav-item text-md-h6 white--text">
              <v-icon right class="mr-2">
                {{ item.icon }}
              </v-icon>
              {{ item.text }}
            </v-btn>
          </router-link>
        </template>
      </v-col>

      <!-- 头像和昵称 ，点击也是动态路由跳转-->
      <v-col cols="12" md="2">
        <router-link :to="'/my/' + loginUser.id" link>
          <v-avatar>
            <v-img :src="avatar"></v-img>
          </v-avatar>
          <span class="white--text subheading ml-2 font-weight-medium">{{ loginUser.nickname }}</span>
        </router-link>
      </v-col>

      <!-- 操作菜单 -->
      <v-col cols="12" md="1">
        <v-menu right top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on" dark>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list color="blue-grey">
            <v-list-item link>
              <v-list-item-title>系统设置</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-title>主题设置</v-list-item-title>
            </v-list-item>
            <v-list-item @click="logout" link>
              <v-list-item-title>退出登录</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'NavBar',
  data: () => ({
    active: true,
    items: [
      {
        icon: 'mdi-home',
        text: '主页',
        path: '/index'
      },
      {
        icon: 'mdi-message',
        text: '消息',
        path: '/message'
      },
      {
        icon: 'mdi-tag',
        text: '标签',
        path: '/tags'
      },
      {
        icon: 'mdi-account',
        text: '我的',
        path: '/my'
      }
    ]
  }),
  computed: {
    ...mapState({
      loginStatus: (state) => state.loginStatus,
      loginUser: (state) => state.loginUser,
      user: (state) => state.user,
      avatar: (state) => state.avatar
    })
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', this.onScroll)
    })
  },
  methods: {
    onScroll() {
      let scroll = document.documentElement.scrollTop || document.body.scrollTop
      this.active = scroll > 100
    },
    logout() {
      this.$store.commit('logout')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 10px;
}

.bgColor {
  background-image: linear-gradient(to right, #aa4b6b 0%,#6b6b83 0%, #3b8d99 100%);
  opacity: 0.7;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 7px 10px 0 rgba(0, 0, 0, 0.12);
}

.lightFont {
  color: #ffffff;
}

p {
  font-size: 20px;
}
</style>
