<template>
  <div class="list">
    <div v-for="(item, index) in cardList" :key="index" class="list-item">
      <div class="list-border">
        <img class="table-img" :src="item.banner" />
        <div class="img-border"></div>
        <div class="name">{{ item.name }}</div>
        <div class="content">该圆桌被浏览{{item.include_count}}次</div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardList: Array,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="less">
@import (reference) "@/assets/css/index.less";
.list {
  .flex-justify-center;
  .flex-wrap;
  // width: 80%;
  background: #fff;
}
.list-item {
  width: 200px;
  height: 200px;
  margin: 40px;
}
.table-img {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  max-width: 100%;
  height: auto;
  width: 100%;
  height: 200px;
  position: relative;
  border-radius: 6px;
  object-fit: cover;
}
.list-border {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  color: #175199;
  width: 200px;
  height: 224px;
  position: relative;
  display: inline-block;
  margin-top: 20px;
  margin-right: 54px;
}
.img-border {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  border-radius: 6px;
  position: absolute;
  top: 0;
  width: 200px;
  height: 200px;
  left: 0;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 10%);
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.5)
  );
}
.name {
  position: absolute;
  color: #fff;
  margin-top: -30px;
  font-size: 15px;
  margin-left: 10px;
}
.content {
  font-size: 13px;
  color: #a0a6b3;
  text-align: left;
}
</style>