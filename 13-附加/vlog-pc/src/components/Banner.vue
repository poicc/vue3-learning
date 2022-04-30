<template>
  <div class="hover-img">
    <img :src="user.banner" alt="" />
    <figcaption>
      <h3 style="text-align: left; padding: 10px">
        {{ user.signature }}
      </h3>
    </figcaption>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      content: '',
    }
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
  },
  methods: {
    saveComment() {
      //向父组件传递onClick事件，并将评论内容带去
      this.$emit('onClick', this.content)
      //点击发送后文本框清空
      this.content = ''
    },
  },
}
</script>
<style lang="scss" scoped>
.hover-img {
  width: 100vw;
  height: 40vh;
  background-color: #fff;
  color: #fff;
  display: inline-block;
  overflow: hidden;
  position: relative;
  text-align: center;
  width: 100%;
  cursor: pointer;
}

.hover-img * {
  box-sizing: border-box;
  transition: all 0.45s ease;
}

.hover-img:before,
.hover-img:after {
  background-color: rgba(0, 0, 0, 0.1);
  border-top: 32px solid rgba(0, 0, 0, 0.1);
  border-bottom: 32px solid rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  content: '';
  transition: all 0.3s ease;
  z-index: 1;
  opacity: 0;
  transform: scaleY(2);
}

.hover-img img {
  vertical-align: top;
  width: 100%;
  border-radius: 10px;
  backface-visibility: hidden;
}

.hover-img figcaption {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.1em;
  opacity: 0;
  z-index: 2;
  transition-delay: 0.1s;
  font-size: 20px;
  font-family: sans-serif;
  font-weight: 200;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.hover-img:hover:before,
.hover-img:hover:after {
  transform: scale(1);
  opacity: 1;
}

.hover-img:hover > img {
  opacity: 0.7;
}

.hover-img:hover figcaption {
  opacity: 1;
}
</style>