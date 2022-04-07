<template>
  <div class="app">
    <!-- 渲染主页组件 -->
    <HomePage></HomePage>
  </div>
</template>

<script>
//引入主页组件
import HomePage from './pages/HomePage.vue';
export default {
  name: "App",
  components: {
    HomePage
  }
};
</script>


<style scoped lang="scss">

</style>
