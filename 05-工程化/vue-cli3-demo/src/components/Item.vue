<template>
  <div class="item-con">
      <img class="img" :src="item.banner" />
      <div class="right">
        <div class="top">
          <div class="top-left">
            <div style="font-weight: 600">{{ item.title }}</div>
            <div class="time">{{item.updated}}更新 · {{ item.view_count }}次浏览</div>
          </div>
          <button class="btn" @click="submit(item.title)">关注专题</button>
        </div>
        <div class="introduction">{{ item.introduction }}</div>
        <div class="tag-list">
          <div
            v-for="(item1, index1) in item.section_list"
            :key="index1"
            class="tag"
          >
            {{ item1.section_title }}
          </div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  props: {
    item: Object
  },
  data() {
    return {
    };
  },
  methods: {
    submit(title) {
      this.$emit("submitValue", title);
    },
  },
};
</script>

<style scoped lang="less">
@import (reference) "@/assets/css/index.less";

.item-con {
  .flex-justify-center;
  padding: 20px;
  background: #fff;
  margin-top: 20px;
}
.img {
  width: 250px;
  height: 150px;
}
.btn {
  color: rgb(17, 111, 255);
  font-weight: 600;
  background: rgb(235, 243, 255);
  border: none;
  border-radius: 5px;
  padding: 0px 10px;
}

.right {
  margin-left: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.time {
  color: #a0a6b3;
  font-size: 12px;
  margin-top: 5px;
}
.top {
  display: flex;
}
.top-left {
  flex: 1;
  text-align: left;
}
.introduction {
  margin-top: 10px;
  text-align: left;
  flex:1;
}
.tag-list {
  display: flex;
  margin-top: 10px;
}
.tag {
  color: #a0a6b3;
  background: #f6f6f6;
  font-size: 12px;
  padding: 5px;
  border: 5px;
  margin: 5px;
}
</style>
