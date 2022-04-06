<template>
  <div class="home">
    <!-- 头部 -->
    <Header />
    <!-- tab -->
    <div>我是tab模块</div>
    <!-- 主体内容 -->
    <div>我的主体内容模块</div>
  </div>
</template>

<script>
import Header from "../components/header.vue";
export default {
  name: "Home",
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
</style>