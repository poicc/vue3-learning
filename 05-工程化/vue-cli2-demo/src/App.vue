<template>
  <div id="app">
    <div class="nav">
      <router-link to="/home">首页</router-link>
      <router-link to="/about">关于</router-link>
    </div>

    <router-view class="container"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.container {
  width: 80vw;
  margin: 50px auto;
  height: 60vh;
  background-color: rgb(111, 162, 196);
}
.nav {
  background: rgb(111, 162, 196);
  padding: 15px 50px;
}
a {
  text-decoration:none;
  color: #fff;
  font-size: 20px;
  padding: 15px 50px;
}
a:hover {
  color: rgb(106, 146, 137);
}
.router-link-active {
  background-color: rgb(228,134,47);
}
a:active {
  color: rgb(62, 90, 109);
}
</style>
