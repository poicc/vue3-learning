<template>
  <v-app id="app">
    <v-main>
      <router-view />
    </v-main>
    <v-btn class="mx-2" fab dark large elevation="12" color="red" fixed bottom right v-if="show" @click="backToTop">
      <v-icon dark> mdi-arrow-up </v-icon>
    </v-btn>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      show: false,
    }
  },
  created() {},
  mounted() {
    // 页面产生滚动才触发监听
    this.$nextTick(() => {
      window.addEventListener('scroll', this.scrollToTop)
    })
  },
  methods: {
    // 计算距离顶部的高度，当高度大于400则显示图标，否则隐藏图标
    scrollToTop() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.scrollTop = scrollTop
      console.log(this.scrollTop)
      this.show = scrollTop > 400
    },
    //回到顶部，定时器平滑过渡
    backToTop() {
      let timer = setInterval(() => {
        let speed = Math.floor(-this.scrollTop / 5)
        document.documentElement.scrollTop = this.scrollTop + speed
        if (this.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
    },
  },
}
</script>

<style lang="scss">
.move {
  animation-duration: 0.6s;
  animation-delay: 0.2s;
}

.bg-color {
  background-image: linear-gradient(to right, #bf30ac 0%, #0f9d58 100%);
  opacity: 0.7;
}
a {
  text-decoration: none;
}
</style>
