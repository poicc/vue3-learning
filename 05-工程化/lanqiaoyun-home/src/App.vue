<template>
  <div class="app">
    <!-- 渲染主页组件 -->
    <home></home>
  </div>
</template>

<script>
//引入主页组件
import Home from './pages/home.vue';
export default {
  name: "App",
  components: {
    Home
  }
};
</script>


<style scoped lang="scss">

</style>
