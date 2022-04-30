<template>
  <div>
    <!-- 自定义导航栏 -->
    <nav-bar></nav-bar>

    <!-- 主题内容，二级路由出口 -->
    <div class="main-content">
      <router-view />
    </div>

    <!-- 自定义Footer -->
    <my-footer></my-footer>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import MyFooter from '../components/MyFooter.vue'
export default {
  name: 'Layout',
  components: {
    NavBar,
    MyFooter
  }
}
</script>

<style lang="scss" scoped>
.main-content {
  margin: 60px auto;
  min-height: 500px;
  margin: 75px auto;
}
</style>
